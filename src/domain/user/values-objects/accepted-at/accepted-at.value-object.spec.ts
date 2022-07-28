import { AcceptedAtValueObject } from './accepted-at.value-object'

describe('accepted-at.value-object', () => {
   it('should create a valid acceptance date', () => {
      const date = '2022-07-26 22:00:00'
      const acceptedAt = AcceptedAtValueObject.create(new Date(date))

      expect(acceptedAt.isSuccess).toBe(true)
      expect(acceptedAt.getResult().value).toBe(date)
   })

   it('should return fail if provide an invalid date', () => {
      const date = AcceptedAtValueObject.create('invalid_date' as any)

      expect(date.isFailure).toBe(true)
      expect(date.error).toBe('Invalid Date')
   })
})
