import { LoginService } from './security/login/login.services';
import { NotificationService } from './shared/messages/notification.services';
import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private notificationService: NotificationService, 
              private injector: Injector, private zone: NgZone) {
    super()
  }

  handleError(errorResponse: HttpErrorResponse | any){

    if(errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error.message
      this.zone.run(()=> {
        switch(errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handeLogin()
          break;
          case 403:
            this.notificationService.notify(message || 'Não Autorizado.')   
          break;
          case 404:
            this.notificationService.notify(message || 'Recurso não encontrado.') 
          break;
        }
      })
    }

    super.handleError(errorResponse)
  }
}