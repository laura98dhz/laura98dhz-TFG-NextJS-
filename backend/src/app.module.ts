import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios/usuarios.module';
import { InmueblesController } from './inmuebles/inmuebles.controller';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { UsuariosController } from './usuarios/usuarios/usuarios.controller';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', //fichero con las variables globales
      isGlobal: true // para que se reconozcan las variables globalmente en todo el proyecto
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false //para crear las tablas
      }),
      inject: [ConfigService],
    }),
    UsuariosModule,
    InmueblesModule
  ],
  controllers: [AppController, InmueblesController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
