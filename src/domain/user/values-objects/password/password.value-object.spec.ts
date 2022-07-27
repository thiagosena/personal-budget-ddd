import { PasswordValueObject } from './password.value-object'
describe('password.value-object', () => {
   it('should create a valid password', () => {
      const password = PasswordValueObject.create('1234abcd')
      expect(password.isSuccess).toBe(true)
      expect(password.getResult().value).toBe('1234abcd')
   })

   it('should fail if password is not on range min 8 char and max 21 char', () => {
      const shortPassword = PasswordValueObject.create('1')
      expect(shortPassword.isFailure).toBe(true)
      expect(shortPassword.error).toBe(
         'Password must have between 8 and 21 characters',
      )
      const longPassword = PasswordValueObject.create(
         'password_must_have_min_8_char_and_max_21_char',
      )
      expect(longPassword.isFailure).toBe(true)
      expect(longPassword.error).toBe(
         'Password must have between 8 and 21 characters',
      )
   })
})
