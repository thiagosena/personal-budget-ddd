## User Structure

- [ ]  User: aggregate
- [ ]  id: value object
- [x]  email: value object
- [x]  password: value object
- [ ]  ip: value object
- [ ]  acceptedAt: value object

```json
{
   "id": "uuid",
   "email": "example@mail.com",
   "password": "123asd",
   "terms": [
      {
         "ip": "10.0.0.1",
         "acceptedAt": "2022-07-26 22:00:00"
      },
      {
         "ip": "10.0.0.1",
         "acceptedAt": "2022-07-26 22:00:00"
      }
   ]
}
```
