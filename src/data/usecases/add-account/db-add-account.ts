import { AddAccount, AddAccountModel, AccountModel, Encrypter} from './db-add-account-protocols'

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