import { PasswordValueObject } from './password.value-object'

describe('password.value-object', () => {
   it('should create a valid password', () => {
      const passwordText = '1234abcd'
      const password = PasswordValueObject.create(passwordText)
      expect(password.isSuccess).toBe(true)
      expect(password.getResult().value).toBe(passwordText)
   })

   it('should fail if password is less then 8 character', () => {
      const shortPassword = PasswordValueObject.create('1')

      expect(shortPassword.isFailure).toBe(true)
      expect(shortPassword.error).toBe(
         'Password must have between 8 and 21 characters',
      )
   })

   it('should fail if password is greater than 21 characters', () => {
      const longPassword = PasswordValueObject.create(
         'password_must_have_min_8_char_and_max_21_char',
      )
      expect(longPassword.isFailure).toBe(true)
      expect(longPassword.error).toBe(
         'Password must have between 8 and 21 characters',
      )
   })
})
