import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
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

    wrapper = shallowMount(PeopleList, {
      store,
      localVue,
    })

    actions = {
      peopleGet: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })  
  })

  it('dispatches action on mount', () => {
    expect(actions.peopleGet.mock.calls).toHaveLength(1)
  })
})
