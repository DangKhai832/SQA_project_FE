import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Model/product.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = 'https://localhost:7019/api/Products'
  list:IProduct[] = [];
  formData: IProduct = new IProduct()
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url).subscribe({
      next: res => {
        this.list = res as IProduct[]
      },
      error: err => {console.log(err)}
    })
  }

  postProduct(){
    return this.http.post(this.url,this.formData)
  }

  putProduct(){
    return this.http.put(this.url + '/' + this.formData.productID,this.formData)
  }

  deleteProduct(id:number){
    return this.http.delete(this.url + '/' + id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new IProduct()
    this.formSubmitted = false
  }
}
