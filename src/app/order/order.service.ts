import { LoginService } from './../security/login/login.services';
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
    constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) {}

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
        let headers = new HttpHeaders()
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }
        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
            .map(order => order.id)
    }

    clear() {
        this.cartService.clear()
    }
}