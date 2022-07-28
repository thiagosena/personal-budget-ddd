import { AggregateRoot, Result, UniqueEntityID } from '../../../shared'
import {
   EmailValueObject,
   PasswordValueObject,
   TermValueObject,
} from '../../values-objects'

export interface UserAggregateProps {
   email: EmailValueObject
   password: PasswordValueObject
   budgetBoxIds?: string[]
   totalBalanceAvailable: number
   terms: TermValueObject[]
}

export class UserAggregate extends AggregateRoot<any> {
   private constructor(props: UserAggregateProps, id?: UniqueEntityID) {
      super(props, id)
   }

   get email(): EmailValueObject {
      return this.props.email
   }

   get password(): PasswordValueObject {
      return this.props.password
   }

   get budgetBodIds(): string[] {
      return this.props.budgetBoxIds ?? []
   }

   get totalBalanceAvailable(): number {
      return this.props.totalBalanceAvailable
   }

   get terms(): TermValueObject {
      return this.props.terms
   }

   public static create(
      props: UserAggregateProps,
      id?: UniqueEntityID,
   ): Result<UserAggregate> {
      return Result.ok<UserAggregate>(new UserAggregate(props, id))
   }
}
