import { LeaveOrderGuard } from './leave-order.guard';
import { OrderComponent } from 'app/order/order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
    declarations: [ OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [ SharedModule,  RouterModule.forChild(ROUTES)]
})

export class OrderModule{}