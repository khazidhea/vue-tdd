import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import PeopleList from '@/components/PeopleList.vue'
import people from '../../fixtures/people'

describe('PeopleList', () => {
  let wrapper
  let store
  let state
  let actions
  let localVue

  beforeEach(() => {
    Vue.use(Vuetify)
    localVue = createLocalVue()
    localVue.use(Vuex)

    actions = {
      getPeople: jest.fn()
    }
    state = {}
    store = new Vuex.Store({
      actions,
      state
    })

    wrapper = mount(PeopleList, {
      store,
      localVue,
      vuetify: new Vuetify(),
      sync: false
    })
  })

  it('dispatches action on mount', () => {
    expect(actions.getPeople.mock.calls).toHaveLength(1)
  })

  it('renders people from store', () => {
    state.people = people
    store = new Vuex.Store({
      actions,
      state
    })

    wrapper = mount(PeopleList, {
      store,
      localVue,
      vuetify: new Vuetify(),
      sync: false
    })
    const table = wrapper.find('[data-test=people-list]') 
    const rows = table.findAll('tr')
    expect(rows.length).toBe(people.length + 1)
    expect(table.text()).toContain(people[0].name)
  })
})
