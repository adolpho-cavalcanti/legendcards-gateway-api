import { Body, Controller, Get, Logger, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateLegendDto } from './dtos/create-legend.dto';
import { ClientProxyMicroLegend } from './proxyrmq/client-proxy';

@Controller('api/v1')
export class AppController {

  private logger = new Logger(AppController.name);

    constructor(
        private clientProxyMicroLegend: ClientProxyMicroLegend
    ) {}

    private clientMicroLegend = this.clientProxyMicroLegend.getClientProxyMicroLegend();

  @Post('legend')
  @UsePipes(ValidationPipe)
  createLegend(@Body() createLegendDto: CreateLegendDto) {
    this.clientMicroLegend.emit('create-legend', createLegendDto)
  }

  @Get('legend')
  listLegend(): Observable<any> {
    return this.clientMicroLegend.send('list-legend', '');
  }

  @Get('legend/:id')
  listLegendForId(@Param('id') _id: string): Observable<any> {
    return this.clientMicroLegend.send('list-legend-id', _id ? _id : '');
  }

}
