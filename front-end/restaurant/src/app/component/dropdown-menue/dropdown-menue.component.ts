import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryServiceService } from '../../service/category-service.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dropdown-menue',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './dropdown-menue.component.html',
  styleUrl: './dropdown-menue.component.css'
})
export class DropdownMenueComponent implements OnInit{
categories: Category[]=[];

constructor(private service:CategoryServiceService){}
  ngOnInit(): void {
      this.getAllCategories();
  }

  getAllCategories(): void{
this.service.getAllCategories().subscribe(
  data=>this.categories=data);
  }

}
