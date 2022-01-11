import { MongoHelper } from '../helpers/mongo-helper'
import { MongoClient, MongoClientOptions } from 'mongodb'

describe('Account Mongo Repository', async () => {
    let client: MongoClient
    beforeAll(async () => {
        client = await MongoClient.connect(String(process.env.MONGO_URL));
        })

    afterAll(async () => {
        await client.close()
    });
    test('Should return an account on success')
    const sut = new AccountMongoRepository()
    const account = await sut.add({
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email@mail.com')
    expect(account.email).toBe('any_email@mail.com  ')

})