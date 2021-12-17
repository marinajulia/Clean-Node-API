import {SignUpController} from './signup'
import {MissingParamError} from '../errors/missing-param-error'
describe('SignUp Controller', () =>{
    test('Should return 400 if no name is provided', () => {
      const sut = new SignUpController()
      const httpRequest = {
          body: {
              email: 'any_email@mail.com',
              password: 'any_password',
              passwordConfirmation: 'any_password'
          }
      }
      const httpResponse = sut.handle(httpRequest)
      //quando for comparar objeto, não usar toBe pois ele também compara o ponteiro do objeto
      expect(httpResponse.statusCode).toBe(400)
      //o to equal compara somentes os valores dos objetos
      expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })

    test('Should return 400 if no email is provided', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        //quando for comparar objeto, não usar toBe pois ele também compara o ponteiro do objeto
        expect(httpResponse.statusCode).toBe(400)
        //o to equal compara somentes os valores dos objetos
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
      })
})