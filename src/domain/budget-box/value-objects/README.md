## BudgetBox Structure

- [ ]  BudgetBox: aggregate
- [ ]  id: string
- [ ]  ownerId: string
- [x]  description: value object
- [ ]  balanceAvailable: number
- [ ]  isPercentage: boolean
- [ ]  budgetPercentage: value object
- [ ]  transactionsIds: string array
- [ ]  reasons: entity

```json
{
   "id": "uuid",
   "ownerId": "uuid",
   "description": "valid description",
   "balanceAvailable": 1000,
   "isPercentage": true,
   "budgetPercentage": 80,
   "transactionsIds": [
      "uuid",
      "uuid"
   ],
   "reasons": [
      {
         "id": "uuid",
         "description": "valid description"
      }
   ]
}
```
