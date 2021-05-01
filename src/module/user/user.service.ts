import { Injectable } from '@nestjs/common'
import { UserDTO } from '../../model/user/user.dto'

const mockUsers: UserDTO[] = [{ id: 'test', password: '1234', name: 'test_name' }]

@Injectable()
export class UserService {
    constructor() {}

    async findUser(id: string): Promise<UserDTO | undefined> {
        return await mockUsers.find((value) => id === value.id)
    }
}
