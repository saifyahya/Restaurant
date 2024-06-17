import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryServiceService } from '../../service/category-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent implements OnInit{
 categoryArr: Category[] =[];
 getAllCatSub$= this.service.allCategoriesObservable$;
constructor(private service: CategoryServiceService){}
  ngOnInit(): void {
    //  this.geAllCat();
  }

//   geAllCat():void {
// this.service.allCategoriesObservable$.subscribe(
  
//   data=>{this.categoryArr=data
// // data.forEach(data=>console.log(data))

//   },
// error=>{
// console.log("error in fetching the catego ries",error)
// }
// );
//   }

}
