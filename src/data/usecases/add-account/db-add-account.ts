import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
    private readonly encrypter: Encrypter
    private readonly addAccountRepository: AddAccountRepository
    constructor(encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
        this.encrypter = encrypter
        this.addAccountRepository = addAccountRepository
    }
    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const hashedPassword =  await this.encrypter.encrypt(accountData.password)
        await this.addAccountRepository.add(Object.assign({}, accountData, {password: hashedPassword}))
        //retorno provisório que coloquei pois não dava para retornar nulo
        return new Promise(resolve => resolve({
            id: '1',
            name: accountData.name,
            password: hashedPassword,
            email: accountData.email
        }))
    }
}