import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchBook(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }
  data:any=[]

  ngOnInit(): void {
  }

}
