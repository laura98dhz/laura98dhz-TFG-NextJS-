import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  //server port
  const port = +configService.get<number>(SERVER_PORT) || 3000;

  app.enableCors({  //para quitar cualquier tipo de restricciones al conectarse entre diferentes puertos del localhost
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(port);
}

bootstrap();