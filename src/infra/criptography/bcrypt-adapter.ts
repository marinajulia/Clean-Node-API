import { Encrypter } from '../../data/protocols/encrypter'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
    //pela aula, o numero 12 é padrão do bcrypt
    private readonly salt: number
    constructor(salt: number) {
        this.salt = salt
    }
    async encrypt(value: string): Promise<string> {
        await bcrypt.hash(value, this.salt)
        return ''
    }

}