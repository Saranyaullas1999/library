import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {

  constructor() { }

bookData=[{"id":1,"name":"Vanity Fair","author":"William Tackeray","year":1848,"stock":5},{"id":2,"name":"The God of Small Things","author":"Arundhati Roy","year":1997,"stock":10},{"id":3,"name":"Harry Potter","author":"JK Rowling","year":2007,"stock":25},{"id":4,"name":"The Color Purple","author":"Alice Walker","year":1982,"stock":15},{"id":5,"name":"I Too Had A Love Story","author":"Ravinder Singh","year":2012,"stock":12}]

  ngOnInit(): void {
  }

}
