<template>
  <div>
    <v-data-table
      data-test="people-list"
      :headers="headers"
      :items="people"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'id', value: 'id' },
        { text: 'name', value: 'name' }
      ]
    }
  },
  computed: {
    ...mapState(['people'])
  },
  mounted () {
    this.$store.dispatch('getPeople')
  }
}
</script>
