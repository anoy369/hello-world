import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}
