import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewBook().subscribe(
      (data)=>{
        this.bookData=data
      }
    )
  }

  deleteBooks=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteBook(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
  }

bookData:any=[]

  ngOnInit(): void {
  }

}
