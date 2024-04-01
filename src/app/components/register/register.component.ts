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
      name: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      identify: ['', Validators.required],
      tax_code: [''],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      province: ['', Validators.required],
      district: ['', Validators.required],
      currentAddress: ['', Validators.required],
      job: ['']
    });
  }

  onSubmit() {
    if((this.registerForm.get("email")?.dirty && this.registerForm.get("email")?.invalid) || this.registerForm.get("phone_number")?.dirty && this.registerForm.get("phone_number")?.invalid) {
      if(this.registerForm.get("email")?.dirty && this.registerForm.get("email")?.invalid) {
        this.toastr.error("Mời bạn nhập đúng định dạng email!");
      }
      if(this.registerForm.get("phone_number")?.dirty && this.registerForm.get("phone_number")?.invalid) {
        this.toastr.error("Mời bạn nhập đủ 10 số của điện thoại!");
      }
    }
    if (this.registerForm.invalid) {
      this.toastr.error("Mời nhập hết cách trường bỏ trống!");
      return;
    }
    const body = this.registerForm.value;

    this.authService.createCustomer(body).subscribe(
      (res :any) => {
        if(res.data) {
          this.toastr.success(res.message);
          this.resetFields()
        }
      },
      (error) => {
        this.toastr.error('Đã xảy ra lỗi khi tạo tài khoản', 'Error');
      }
    );
  }

  resetFields() {
    this.registerForm.reset({
      name: '',
      phone_number: '',
      gender: '',
      dob: '',
      address: '',
      identify: '',
      tax_code: '',
      email: '',
      city: '',
      province: '',
      district: '',
      currentAddress: '',
      job: ''
    });
  }

}
