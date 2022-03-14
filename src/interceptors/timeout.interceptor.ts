import { CallHandler, ExecutionContext, NestInterceptor, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { timeout } from "rxjs/operators";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log('Antes....');
        const now = Date.now();
        return next
                .handle()
                .pipe(
                    timeout(10000)
                )
    }
}