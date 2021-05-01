import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard, LocalAuthGuard } from './auth.guard'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async Login(@Request() req) {
        return await this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Post('testJwt')
    async test(@Request() req) {
        console.log(req.user)
        return { result: 'pass' }
    }
}
