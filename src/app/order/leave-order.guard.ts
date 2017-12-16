import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent} from "app/order/order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent, activatedRoute: ActivatedRouteSnapshot, 
                  routerState: RouterStateSnapshot): boolean {
        if (!orderComponent.isOrderCompleted()) {
            window.confirm('Deseja desistir da compra?')
            return true
        } else {
            return true
        }
    }
}