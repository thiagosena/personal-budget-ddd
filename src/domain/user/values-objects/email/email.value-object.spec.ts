import { EmailValueObject } from './email.value-object'
describe('email.value-object', () => {
   it('should return a valid email', () => {
      const email = EmailValueObject.create('valid_mail@domain.com')
      expect(email.isSuccess).toBe(true)
      expect(email.getResult().value).toBe('valid_mail@domain.com')
   })

   it('should return fail if provide an invalid email', () => {
      const email = EmailValueObject.create('invalid_mail')
      expect(email.isFailure).toBe(true)
   })

   it('should normalize email to lowercase', () => {
      const email = EmailValueObject.create('vaLiD_MAil@DOMain.Com')
      expect(email.getResult().value).toBe('valid_mail@domain.com')
   })
})
