import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Order, OrderItem } from './order.model'

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: HttpClient) {}

    itemsValue(): number {
        return this.cartService.total()
    }
    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }
}