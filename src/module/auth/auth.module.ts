import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './auth-local.strategy'
import { $jwt } from './constant'
import { JwtModule } from '@nestjs/jwt'
import { JwtAuthGuard, LocalAuthGuard } from './auth.guard'
import { JwtStrategy } from './jwt.strategy'

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: $jwt,
            signOptions: { expiresIn: '6000s' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, LocalAuthGuard, JwtAuthGuard, JwtStrategy],
    exports: [AuthService, LocalAuthGuard, JwtAuthGuard],
})
export default class AuthModule {}
