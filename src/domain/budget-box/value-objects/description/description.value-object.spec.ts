import { DescriptionValueObject } from './description.value-object'

describe('description.value-object', () => {
   it('should create a valid description value object', () => {
      const description = DescriptionValueObject.create(
         'valid description object',
      )

      expect(description.isSuccess).toBeTruthy()
   })

   it('should fail if not provide a description', () => {
      const description = DescriptionValueObject.create(' ')

      expect(description.isFailure).toBeTruthy()
      expect(description.error).toBe(
         'Invalid description length min 1 char and max 144 char',
      )
   })

   it('should fail if a description is greater than 144 characters', () => {
      const description = DescriptionValueObject.create(
         'Invalid description length min 1 char and max 144 char Invalid description length min 1 char and max 144 char Invalid description length min 1 char and max 144 char',
      )

      expect(description.isFailure).toBeTruthy()
      expect(description.error).toBe(
         'Invalid description length min 1 char and max 144 char',
      )
   })
})
