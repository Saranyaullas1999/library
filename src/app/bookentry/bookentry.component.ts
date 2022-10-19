import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  constructor() { }
  name=""
  author=""
  year=""
  stock=""

  readValue=()=>{
    let data={
      "name":this.name,
      "author":this.author,
      "year":this.year,
      "stock":this.stock
    }
    console.log(data)
    alert("Successfully Added")
    this.name=""
    this.author=""
    this.year=""
    this.stock=""
  }

  ngOnInit(): void {
  }

}
