import { IpValueObject } from '../ip/ip.value-object'
import { AcceptedAtValueObject } from '../accepted-at/accepted-at.value-object'
import { TermValueObject } from './term.value-object'

describe('term.value-object', () => {
   it('should create a valid term', () => {
      const term = {
         ip: IpValueObject.create('10.0.0.1').getResult(),
         acceptedAt: AcceptedAtValueObject.create(new Date()).getResult(),
         userAgent: {
            name: 'firefox',
            version: '86.0.0',
            os: 'Linux',
            type: 'browser',
         },
      }
      const termValueObject = TermValueObject.create(term)

      expect(termValueObject.isSuccess).toBe(true)
      expect(termValueObject.getResult().value).toMatchObject(term)
   })
})
