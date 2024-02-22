import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const ResponseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map((resp) => {


      if (resp instanceof HttpResponse && typeof resp.body === 'string') {
        return resp.clone({body: JSON.stringify(resp.body)});
      } else {
        return resp;
      }

    })
  );
};
