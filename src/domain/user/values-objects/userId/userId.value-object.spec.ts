import { UserIdValueObject } from './userId.value-object'
import UniqueEntityID from '../../../shared/core/unique-entity-id'

describe('userId.value-object', () => {
   it('should create a valid userId', () => {
      const userId = UserIdValueObject.create()
      expect(userId.isSuccess).toBe(true)
   })

   it('should create a valid userId with value', () => {
      const id = new UniqueEntityID('valid_id')
      const userId = UserIdValueObject.create(id)
      expect(userId.isSuccess).toBe(true)
      expect(userId.getResult().id).toBe(id)
   })
})
