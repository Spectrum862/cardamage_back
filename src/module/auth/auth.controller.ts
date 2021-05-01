import { Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard(`local`))
    @Post('login')
    async Login(@Request() req) {
        console.log(req)
        return await this.authService.login(req.user)
    }
}
