import { Component, OnInit } from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-createLoan',
  templateUrl: './searchLoan.component.html',
  styleUrls: [
    './searchLoan.component.css'
  ]
})

export class SearchLoanComponent implements OnInit {
  customers: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Gọi API khi component được khởi tạo
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.authService.searchCustomer("").subscribe(
      (res: any) => { // Sửa kiểu dữ liệu thành any hoặc kiểu dữ liệu chính xác của đối tượng trả về từ API
        this.customers = res.data; // Gán phản hồi từ API vào biến customers
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }
}
