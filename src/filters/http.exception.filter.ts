import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        console.log(`exception: ${JSON.stringify(exception)}`);

        const status = 
            exception instanceof HttpException
            ? exception.getStatus
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const message = 
            exception instanceof HttpException ? exception.getStatus : exception;

        this.logger.error(`HTTP Status: ${status} Error Message: ${message}`);

        response.status(status).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message
        });

    }
}