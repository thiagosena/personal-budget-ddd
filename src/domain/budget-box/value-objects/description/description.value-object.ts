import { Result, ValueObject } from '../../../shared'

export interface DescriptionValueObjectProps {
   value: string
}

export class DescriptionValueObject extends ValueObject<DescriptionValueObjectProps> {
   private constructor(props: DescriptionValueObjectProps) {
      super(props)
   }

   get value(): string {
      return this.props.value
   }

   public static create(description: string): Result<DescriptionValueObject> {
      if (description.trim.length < 1 || description.trim.length > 144) {
         return Result.fail<DescriptionValueObject>(
            'Invalid description length min 1 char and max 144 char',
         )
      }
      return Result.ok<DescriptionValueObject>(
         new DescriptionValueObject({ value: description }),
      )
   }
}
