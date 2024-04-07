import { Component, OnInit } from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loanPayment',
  templateUrl: './searchLoanPayment.component.html',
  styleUrls: [
    './searchLoanPayment.component.css'
  ]
})

export class SearchLoanPaymentComponent implements OnInit {
  customers: any[] = [];
  keySearch : any;

  constructor(
    private authService: AuthService,
    private router : Router
  ) {}

  ngOnInit(): void {
    // Gọi API khi component được khởi tạo
    this.fetchCustomers();
  }

  fetchCustomers() {
    var key = this.keySearch ? this.keySearch : ""
    this.authService.searchCustomer(key).subscribe(
      (res: any) => { // Sửa kiểu dữ liệu thành any hoặc kiểu dữ liệu chính xác của đối tượng trả về từ API
        this.customers = res.data; // Gán phản hồi từ API vào biến customers
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  public searchLoanList(customerId: string) {
    debugger
    this.router.navigate(['/loanList/'+customerId]);
  }

  openListLoan(id : number) {
    this.router.navigate(['/listLoan/', id]);
  }
}
