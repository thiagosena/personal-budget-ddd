import {
   AcceptedAtValueObject,
   EmailValueObject,
   IpValueObject,
   PasswordValueObject,
   TermValueObject,
} from '../../values-objects'
import { UserAggregate } from './user.aggregate'
import UniqueEntityID from '../../../shared/core/unique-entity-id'

describe('user.aggregate', () => {
   const userObject = {
      email: EmailValueObject.create('email@email.com').getResult(),
      password: PasswordValueObject.create('valid_password_123').getResult(),
      totalBalanceAvailable: 0,
      terms: [
         TermValueObject.create({
            ip: IpValueObject.create('10.0.0.1').getResult(),
            acceptedAt: AcceptedAtValueObject.create(new Date()).getResult(),
            userAgent: {
               name: 'Firefox',
               version: 'Linux',
               os: '80.0.0',
               type: 'browser',
            },
         }).getResult(),
      ],
   }

   it('should create a valid user', () => {
      const user = UserAggregate.create(userObject)
      expect(user.isSuccess).toBe(true)
   })

   it('should get valid values', () => {
      const user = UserAggregate.create(userObject).getResult()

      expect(user.id).toBeDefined()
      expect(user.createdAt).toBeDefined()
      expect(user.totalBalanceAvailable).toEqual(
         userObject.totalBalanceAvailable,
      )
      expect(user.email.value).toBe(userObject.email.value)
      expect(user.password.value).toBe(userObject.password.value)
      expect(user.terms[0].value).toBe(userObject.terms[0].value)
      expect(user.terms[0].value.ip).toBe(userObject.terms[0].value.ip)
      expect(user.terms[0].value.acceptedAt).toBeDefined()
      expect(user.terms[0].value.userAgent).toBe(
         userObject.terms[0].value.userAgent,
      )
      expect(user.isDeleted).toBeFalsy()
   })

   it('should return empty budgetBoxIds', () => {
      const user = UserAggregate.create(userObject).getResult()

      expect(user.budgetBodIds).toStrictEqual([])
   })

   it('should create a valid user with provided id', () => {
      const mockId = 'valid_id'
      const user = UserAggregate.create(
         userObject,
         new UniqueEntityID(mockId),
      ).getResult()

      expect(user.id.toValue()).toBe(mockId)
   })
})
