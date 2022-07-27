import { Logger } from '@nestjs/common'

export default class Result<T> {
   private readonly logger = new Logger(Result.name)

   public isSuccess: boolean
   public isFailure: boolean
   public error: T | string
   private _value: T

   public constructor(
      isSuccess: boolean,
      error?: T | string | null,
      value?: T,
   ) {
      if (isSuccess && error) {
         throw new Error(
            'InvalidOperation: A result cannot be successful and contain an error',
         )
      }
      if (!isSuccess && !error) {
         throw new Error(
            'InvalidOperation: A failing result needs to contain an error message',
         )
      }

      this.isSuccess = isSuccess
      this.isFailure = !isSuccess
      this.error = error as T
      this._value = value as T

      Object.freeze(this)
   }
   /**
    * If success returns an instance of provided class.
    */
   public getResult(): T {
      if (!this.isSuccess) {
         this.logger.error(this.error)
         throw new Error(
            'Can not get the value of an error result. Use errorValue instead.',
         )
      }

      return this._value
   }

   public errorValue(): T {
      return this.error as T
   }

   public static ok<U>(value?: U): Result<U> {
      return new Result<U>(true, null, value)
   }

   public static fail<U>(error: string): Result<U> {
      return new Result<U>(false, error)
   }

   public static combine(results: Result<any>[]): Result<any> {
      for (const result of results) {
         if (result.isFailure) return result
      }
      return Result.ok()
   }
}

export { Result }
