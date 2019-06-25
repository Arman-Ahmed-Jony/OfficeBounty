<template>
<q-page padding>
  <p>Your code will goes here</p>
</q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'ExampleIndex',

  data () {
    return {
    }
  },

  created () {
    this.$store.dispatch('common/setPageTitle', 'project ')
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
