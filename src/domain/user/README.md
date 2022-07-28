## User Structure

- [x]  User: aggregate
- [x]  id: value object
- [x]  email: value object
- [x]  password: value object
- [x]  ip: value object
- [x]  acceptedAt: value object
- [x]  terms: value object

```json
{
   "id": "uuid",
   "email": "example@mail.com",
   "password": "123asd",
   "budgetBoxIds": [
      "uuid",
      "uuid"
   ],
   "totalBalanceAvailable": 10.00,
   "terms": [
      {
         "ip": "10.0.0.1",
         "acceptedAt": "2022-07-26 22:00:00",
         "userAgent": {
            "name": "firefox",
            "version": "86.0.0",
            "os": "Linux",
            "type": "browser"
         }
      }
   ]
}
```
