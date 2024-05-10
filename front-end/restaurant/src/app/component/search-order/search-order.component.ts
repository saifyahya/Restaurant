import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../service/order-service.service';
import { Order } from '../../model/order';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-order.component.html',
  styleUrl: './search-order.component.css'
})
export class SearchOrderComponent implements OnInit{
  orderName: string="";

doSearch(arg0: string) {
throw new Error('Method not implemented.');
}
orders: Order[]=[];
constructor(private router: Router){}
  ngOnInit(): void {
  }

  onSubmit(): void {
    // Get the value from the input field
    if (this.orderName.trim() !== '') {
      // Navigate to the route "orders/name" with the value from the input field
console.log(this.orderName)
    // Navigate to the route "orders/name" with the value from the input field
    this.router.navigate(['/category/name/', this.orderName]);
  }
}
}
