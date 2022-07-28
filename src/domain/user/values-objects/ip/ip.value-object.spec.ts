import { IpValueObject } from './ip.value-object'

describe('ip.value-object', () => {
   it('should create a valid ip address', () => {
      const ip = IpValueObject.create('10.0.0.1')

      expect(ip.isSuccess).toBe(true)
      expect(ip.getResult().value).toBe('10.0.0.1')
   })

   it('should fail if provide an invalid ip address', () => {
      const ip = IpValueObject.create('invalid_ip')

      expect(ip.isFailure).toBe(true)
      expect(ip.error).toBe('Invalid IP')
   })
})
