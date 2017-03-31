import client from '../client'

/*
 *
 * This is an E2E test
 *
 */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

describe('pagarme.client', () => {
  it('should return an error if an invalid api key is given', () =>
    client.connect({ api_key: 'libjsdonetomorrow' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid key'))
  )

  it('should return an error when an invalid auth option is given', () =>
    client.connect({ name: 'Minhoca' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid authentication object')
      )
  )

  it('card_hash should have property `id` when a valid api key is given', () =>
    client.connect({ api_key: process.env.API_KEY })
      .then(cli => cli.transactions.cardHashKey())
      .then(card_hash => expect(card_hash).toHaveProperty('public_key')
    )
  )

  it('should return an error if an invalid encryption_key is given', () =>
    client.connect({ encryption_key: 'fwefwe' })
      .catch(err =>
        expect(err.message).toBe('You must supply a valid key'))
  )

  it('card_hash should have property `id` when a valid encryption_key is given', () =>
    client.connect({ encryption_key: process.env.ENCRYPTION_KEY })
      .then(cli => cli.transactions.cardHashKey())
      .then(card_hash => expect(card_hash).toHaveProperty('public_key'))
  )
})
