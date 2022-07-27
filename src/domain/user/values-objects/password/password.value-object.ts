import ValueObject from '../../../shared/core/value-object'
import Result from './../../../shared/core/result'

export interface PasswordValueObjectProps {
   value: string
}

export class PasswordValueObject extends ValueObject<PasswordValueObjectProps> {
   private constructor(props: PasswordValueObjectProps) {
      super(props)
   }

   get value(): string {
      return this.props.value
   }

   public static create(password: string): Result<PasswordValueObject> {
      if (password.length < 8 || password.length > 22) {
         return Result.fail<PasswordValueObject>(
            'Password must have between 8 and 21 characters',
         )
      }
      return Result.ok<PasswordValueObject>(
         new PasswordValueObject({ value: password }),
      )
   }
}
