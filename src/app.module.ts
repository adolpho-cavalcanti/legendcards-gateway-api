import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [ProxyRMQModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
