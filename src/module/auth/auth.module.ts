import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './auth-local.strategy'
import { $jwt } from './constant'
import { JwtModule } from '@nestjs/jwt'

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: $jwt,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export default class AuthModule {}
