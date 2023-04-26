import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorsService } from 'src/app/service/custom-validators.service';
import { LoginService } from 'src/app/service/login.service';
import { SignUpViewModel } from 'src/app/models/sign-up-view-model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit
{
  signUpForm: FormGroup | any = null;
  genders = ["male", "female"];
  registerError:string|null=null

  constructor(private formBuilder: FormBuilder, private customValidator:CustomValidatorsService,
    private loginService:LoginService,private router:Router )
  {
  }

  ngOnInit()
  {
    

    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
      }),

      email: [null, [Validators.required, Validators.email],[
        this.customValidator.DuplicateEmailValidator()
      ], { updateOn: 'blur' }],
      mobile: [null, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth: [null, [Validators.required,this.customValidator.minimumAgeValidator(18)]],
      gender: [null, [Validators.required]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]]
    },{
      validators: [
        this.customValidator.compareValidator("confirmPassword", "password")
      ]
    });

    this.signUpForm.valueChanges.subscribe((value: any) =>
    {
      //console.log(value);
    });
  }

  onSubmitClick()
  {
    this.signUpForm["submitted"] = true;
    console.log(this.signUpForm);
    if (this.signUpForm.valid)
    {
      var signUpViewModel = this.signUpForm.value as SignUpViewModel;
      this.loginService.Register(signUpViewModel).subscribe(
        (response) =>
        {
          this.router.navigate(["/employee","tasks"]);
        },
        (error) =>
        {
          console.log(error);
          this.registerError = "Unable to submit";
        });
    }


  }

}