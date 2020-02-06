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
export default {
  data () {
    return {
      headers: [],
      people: [],
    }
  },
  mounted () {
    this.$store.dispatch('getPeople')
  }
}
</script>
