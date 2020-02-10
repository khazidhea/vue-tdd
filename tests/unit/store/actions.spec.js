import actions from '@/store/actions'
import people from '../../fixtures/people'

let url
const mock_people = people

jest.mock('axios', () => ({
  defaults: {},
  get: jest.fn().mockImplementation(async _url => { 
    return new Promise((resolve) => {
      url = _url
      resolve({data: mock_people})
    })
  })
}))

describe('actions', () => {
  it('getPeople should visit correct url and commit', async () => {
    const commit = jest.fn()
  
    await actions.getPeople({ commit })
    expect(url).toBe('users')
    expect(commit).toHaveBeenCalledWith('SET_PEOPLE', mock_people)
  })
})
