import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
    private readonly encrypter: Encrypter
    constructor(encrypter) {
        this.encrypter = encrypter
    }
    async add(account: AddAccountModel): Promise<AccountModel> {
        this.encrypter.encrypt(account.password)
        return new Promise(resolve => resolve({
            id: '1',
            name: account.name,
            password: account.password,
            email: account.email
        }))
    }
}