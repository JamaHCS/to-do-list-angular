import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/core/services/cat/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public fact: string = '';

  constructor(public catService: CatService){}
  
  ngOnInit(): void {
    this.getFact();
  }

  getFact(){
    this.catService.getFact().subscribe(res => {
      this.fact = res.fact;
    })
  }
}
