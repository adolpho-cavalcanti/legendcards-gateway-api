import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

const user = process.env.RABBITMQ_USER;
const pass = process.env.RABBITMQ_PASS;
const console = process.env.RABBITMQ_CONSOLE;

@Injectable()
export class ClientProxyMicroLegend {
    getClientProxyMicroLegend(): ClientProxy {
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
              urls: [`amqp://${user}:${pass}@3.89.120.123:5672/${console}`],
              queue: 'micro-legend'
            }
        })
    }
}