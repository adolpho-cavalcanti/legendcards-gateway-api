import { Module } from "@nestjs/common";
import { ClientProxyMicroLegend } from "./client-proxy";


@Module({
    providers: [ClientProxyMicroLegend],
    exports: [ClientProxyMicroLegend]
})

export class ProxyRMQModule {}