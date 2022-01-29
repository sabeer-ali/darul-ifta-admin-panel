import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasepathInterceptor } from './auth/interceptors/basepath.interceptor';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ], providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasepathInterceptor, multi: true }]
})
export class CoreModule { }
