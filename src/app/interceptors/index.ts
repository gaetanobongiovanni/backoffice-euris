import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ResponseInterceptor } from "./response.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }
]
