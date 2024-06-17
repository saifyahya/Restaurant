import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartServiceService } from '../../service/cart-service.service';
import { Country } from '../../model/country';
import { StatCountryService } from '../../service/stat-country.service';
import { State } from '../../model/state';
import { CommonModule } from '@angular/common';
import { Spacevalidator } from '../../validations/spacevalidator';
import { Cart } from '../../model/cart';
import { CheckoutService } from '../../service/checkout.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
checkoutParentGroup!: FormGroup;
totalQuantity:number=0;
totalPrice:number=0;
countries:Country[]=[];
statesfromPerson:State[]=[];
statesToPerson:State[]=[];
cart: Cart[]=[];


  constructor(private fromChildBuilder:FormBuilder, private cartServices:CartServiceService,
    private state_countryService:StatCountryService, private checkOutService:CheckoutService, private router:Router){
  }

  ngOnInit(): void {
    this.getCartItems();
    this.cartServices.updateCart()   // to trigger the callback function subscribe form the cart survice to this fields

    this.getAllCountries();
    //this.getAllStates();


      this.checkoutParentGroup=this.fromChildBuilder.group({
        dataForm: this.fromChildBuilder.group({
          fullName:new FormControl('',[Validators.required,Validators.minLength(6),Spacevalidator.notOnlySpaces]),
          email:new FormControl('',[Validators.required,Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$')]),
          phoneNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^\\d+$')])}),
        fromPersonForm: this.fromChildBuilder.group({ country:['jordan'], state:[''], zipCode:['050']}),
        toPersonForm: this.fromChildBuilder.group({ country:['jordan'], state:[''], zipCode:['050']}),
        creditCardForm: this.fromChildBuilder.group({ cardType:['Visa'], cardNumber:['123465'], cardCode:['9114']})
      
      }
    )
  }

get fullName(){  //to access inputs in the html and validate them
return this.checkoutParentGroup.get('dataForm.fullName')
}
get email(){
  return this.checkoutParentGroup.get('dataForm.email')
  }
get phoneNumber(){
    return this.checkoutParentGroup.get('dataForm.phoneNumber')
    }
  
  done(){
  if(this.checkoutParentGroup.controls['dataForm'].dirty && this.checkoutParentGroup.controls['dataForm'].valid)
      {
  this.checkOutService.checkout(this.checkoutParentGroup.get("dataForm").value,
  this.checkoutParentGroup.get("fromPersonForm").value,
  this.checkoutParentGroup.get("toPersonForm").value,this.totalQuantity,this.totalPrice
).subscribe({
  next: response=>{console.log(response);
    this.router.navigateByUrl('/mycarts');
    this.cartServices.cleanCart();
  },
  error:error=>{console.log("error in your request" , error)}
});
  }
  else{
  this.checkoutParentGroup.controls['dataForm'].markAllAsTouched();
console.log("not done")
}
  }

  getCartItems(){
    this.cart= this.cartServices.getCart();
    this.cartServices.totalPrice.subscribe(data=>this.totalPrice=data);
    this.cartServices.totalQuantity.subscribe(data=>this.totalQuantity=data);
    console.log(this.cart)

  }
change(event:Event){
  let isSimilar=(<HTMLInputElement>event.target).checked;
  if(isSimilar){
    this.checkoutParentGroup.controls['toPersonForm'].setValue(this.checkoutParentGroup.controls['fromPersonForm'].value);
    this.statesToPerson=this.statesfromPerson;
  }else{
    this.checkoutParentGroup.controls['toPersonForm'].reset(); 
    }
}

getAllCountries(){
  this.state_countryService.getAllCountries().subscribe(data=>{this.countries=data

    console.log(this.countries)
  });
  
}

  getStatesByCountryName(event:Event,formType:string){
   let coName = this.checkoutParentGroup.get(`${formType}.country`)?.value || '';
   let countryName = (<HTMLInputElement>event.target).value; //another approach
   return this.state_countryService.getStatesByCountryName(coName).subscribe(
    data=>{
      if(formType==='fromPersonForm'){
        this.statesfromPerson=data;
      }else if(formType=='toPersonForm'){
        this.statesToPerson=data;
      }
      this.checkoutParentGroup.get(`${formType}.state`)?.setValue(data[0].name); //to put the first value of the states array as a default one e=wehen the country is selected
      });
  }

}

