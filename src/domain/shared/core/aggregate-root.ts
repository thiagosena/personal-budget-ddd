import { Logger } from '@nestjs/common'
import Entity from './entity'
import IDomainEvent from './events/domain-event.interface'
import DomainEvents from './events/domain-events'
import UniqueEntityID from './unique-entity-id'

export default abstract class AggregateRoot<T> extends Entity<T> {
   private readonly logger = new Logger(AggregateRoot.name)
   private _domainEvents: IDomainEvent[] = []

   get id(): UniqueEntityID {
      return this._id
   }

   get domainEvents(): IDomainEvent[] {
      return this._domainEvents
   }

   protected addDomainEvent(domainEvent: IDomainEvent): void {
      // Add the domain event to this aggregate's list of domain events
      this._domainEvents.push(domainEvent)
      // Add this aggregate instance to the domain event's list of aggregates who's
      // events it eventually needs to dispatch.
      DomainEvents.markAggregateForDispatch(this)
      // Log the domain event
      this.logDomainEventAdded(domainEvent)
   }

   public clearEvents(): void {
      this._domainEvents.splice(0, this._domainEvents.length)
   }

   private logDomainEventAdded(domainEvent: IDomainEvent): void {
      const thisClass = Reflect.getPrototypeOf(this)
      const domainEventClass = Reflect.getPrototypeOf(domainEvent)
      this.logger.log(
         '[Domain Event Created]:',
         thisClass?.constructor.name,
         '==>',
         domainEventClass?.constructor.name,
      )
   }
}

export { AggregateRoot }
