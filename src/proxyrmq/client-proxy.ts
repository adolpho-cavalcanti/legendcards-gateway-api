import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

const rabbitmqUrl = process.env.RABBITMQ_URL;

@Injectable()
export class ClientProxyMicroLegend {
    getClientProxyMicroLegend(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://${rabbitmqUrl}`],
              queue: 'micro-legend'
            }
        })
    }
}