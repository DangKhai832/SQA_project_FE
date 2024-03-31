import { Injectable } from '@angular/core';
import { IIManufacturer } from '../Model/manufacturer.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  url:string = 'https://localhost:7019/api/Manufacturers'
  list:IIManufacturer[] = [];
  formData: IIManufacturer = new IIManufacturer()
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url).subscribe({
      next: res => {
        this.list = res as IIManufacturer[]
      },
      error: err => {console.log(err)}
    })
  }

  postManufacturer(){
    return this.http.post(this.url,this.formData)
  }

  putManufacturer(){
    return this.http.put(this.url + '/' + this.formData.manufacturerID,this.formData)
  }

  deleteManufacturer(id:number){
    return this.http.delete(this.url + '/' + id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new IIManufacturer()
    this.formSubmitted = false
  }
}
