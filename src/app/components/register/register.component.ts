import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Sửa từ FormControl thành FormBuilder
import { AuthService } from "../../services/auth.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  public registerForm: FormGroup

  isAccountCreated: boolean = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr : ToastrService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      identify: ['', Validators.required],
      taxID: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      currentAddress: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  onSubmit() {
    debugger
    if (this.registerForm.invalid) {
      return;
    }
    const body = this.registerForm.value;

    this.authService.registerUser(body).subscribe(
      (response) => {
        this.toastr.success('Tạo tài khoản thành công', 'Success');
      },
      (error) => {
        this.toastr.error('Đã xảy ra lỗi khi tạo tài khoản', 'Error');
      }
    );
  }
}
