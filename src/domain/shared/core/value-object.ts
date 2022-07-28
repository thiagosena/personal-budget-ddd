interface ValueObjectProps {
   [index: string]: any
}

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structural property.
 */

export default abstract class ValueObject<T extends ValueObjectProps> {
   protected props: T

   protected constructor(props: T) {
      this.props = {
         ...props,
      }
   }

   public equals(valueObject?: ValueObject<T>): boolean {
      if (valueObject === null || valueObject === undefined) {
         return false
      }
      if (valueObject.props === undefined) {
         return false
      }
      return JSON.stringify(this.props) === JSON.stringify(valueObject.props)
   }
}

export { ValueObject }
