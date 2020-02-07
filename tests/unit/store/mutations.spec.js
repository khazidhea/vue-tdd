import mutations from '@/store/mutations.js'

describe('mutations', () => {
  it('SET_PEOPLE updates people state', () => {
    const people = [
        {id: 1, name: 'John Smith'},
        {id: 2, name: 'Alice Johnson'},
        {id: 3, name: 'Sarah Miller'},
    ]
    const state = {
      people: []
    }

    mutations.SET_PEOPLE(state, { people })

    expect(state).toEqual({
      people
    })
  })
})
