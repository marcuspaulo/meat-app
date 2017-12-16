import { LeaveOrderGuard } from './../order/leave-order.guard';
import { LoginService } from './../security/login/login.services';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { OrderService } from 'app/order/order.service';
import { SnackBarComponent } from 'app/shared/messages/snack-bar/snack-bar.component';
import { NotificationService } from 'app/shared/messages/notification.services';
import { LoggedInGuard } from 'app/security/loggedin.guard';


@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackBarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackBarComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, OrderService, 
                        NotificationService, LoginService, LoggedInGuard, LeaveOrderGuard]
        }
    }
}