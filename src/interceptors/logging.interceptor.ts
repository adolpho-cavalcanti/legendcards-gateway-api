import { CallHandler, ExecutionContext, NestInterceptor, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Antes....');
        const now = Date.now();
        return next
                .handle()
                .pipe(
                    tap(() => console.log(`Depois da execução ${Date.now() - now}ms`))
                )
    }
}