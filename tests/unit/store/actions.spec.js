import actions from '@/store/actions.js'

let url

jest.mock('axios', () => ({
  defaults: {},
  get: jest.fn().mockImplementation(async _url => { 
    return new Promise((resolve) => {
      url = _url
      resolve(true)
    })
  })
}))

describe('actions', () => {
  it('getPeople should visit correct url', async () => {
    const commit = jest.fn()
  
    await actions.getPeople({ commit })
    expect(url).toBe('users')
  })
})
