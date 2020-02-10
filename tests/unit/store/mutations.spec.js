import mutations from '@/store/mutations.js'
import people from '../../fixtures/people.js'

describe('mutations', () => {
  it('SET_PEOPLE updates people state', () => {
    const state = {
      people: []
    }

    mutations.SET_PEOPLE(state, people)

    expect(state).toEqual({
      people
    })
  })
})
