import { EmailValidator } from '../presentation/protocols/email-validator'
import validator from 'validator'
//instalou o validator e @types/validator -D
export class EmailValidatorAdapter {
    isValid (email: string):  boolean{
        return validator.isEmail(email)
    }
}