export default interface IHandle<IDomainEvent> {
   setupSubscriptions(): void
}

export { IHandle }
