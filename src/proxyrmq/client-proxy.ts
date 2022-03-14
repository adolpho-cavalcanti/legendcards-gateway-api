import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class ClientProxyMicroLegend {
    getClientProxyMicroLegend(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://user:Ti5Ls2ahgaJ0@3.89.120.123:5672/legendsCards'],
              queue: 'micro-legend'
            }
        })
    }
}