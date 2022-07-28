import { format, isDate } from 'date-fns'
import { Result, ValueObject } from '../../../shared'

export interface AcceptedAtValueObjectProps {
   value: Date
}

export class AcceptedAtValueObject extends ValueObject<AcceptedAtValueObjectProps> {
   private constructor(props: AcceptedAtValueObjectProps) {
      super(props)
   }

   get value(): string {
      return format(this.props.value, 'yyyy-MM-dd HH:mm:ss')
   }

   public static create(date: Date): Result<AcceptedAtValueObject> {
      if (!isDate(date)) {
         return Result.fail<AcceptedAtValueObject>('Invalid Date')
      }

      return Result.ok<AcceptedAtValueObject>(
         new AcceptedAtValueObject({ value: date }),
      )
   }
}
