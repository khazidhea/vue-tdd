import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PeopleList from '@/components/PeopleList.vue'

describe('PeopleList', () => {
  let wrapper
  let store
  let actions

  beforeEach(() => {
    Vue.use(Vuetify)
    const localVue = createLocalVue()
    localVue.use(Vuex)
    actions = {
      getPeople: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
    wrapper = shallowMount(PeopleList, {
      store,
      localVue
    })
  })

  it('dispatches action on mount', () => {
    expect(actions.getPeople.mock.calls).toHaveLength(1)
  })
})
