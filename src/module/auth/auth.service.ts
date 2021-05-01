import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { UserDTO } from '../user/dto/user.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

    async validateUser(_id: string, _password: string): Promise<Partial<UserDTO> | null> {
        const user = await this.userService.findUser(_id)
        if (user && _password === user.password) {
            const { id, password, ..._user } = user
            return _user
        } else return null
    }

    async login(user: Partial<UserDTO>) {
        return {
            access_token: this.jwtService.sign(user),
        }
    }
}
