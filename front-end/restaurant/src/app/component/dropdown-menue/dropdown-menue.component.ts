import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryServiceService } from '../../service/category-service.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dropdown-menue',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './dropdown-menue.component.html',
  styleUrl: './dropdown-menue.component.css'
})
export class DropdownMenueComponent implements OnInit{
categories: Category[]=[];
constructor(private service:CategoryServiceService, private router:Router){}
  ngOnInit(): void {
      this.getAllCategories();
      

  }

  getAllCategories(): void{
this.service.getAllCategories().subscribe(
  data=>this.categories=data);
  }
  categoryDropdown(event :Event){
    let category_id = (<HTMLSelectElement>event.target).value;
this.router.navigateByUrl(`/category/id/${category_id}`)
  }


}
