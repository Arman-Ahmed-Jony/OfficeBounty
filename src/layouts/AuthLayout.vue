<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AuthLayout',
  data () {
    return {
    }
  },

  computed: {
    ...mapState({
      pageTitle: state => state.common.pageTitle
    })
  }
}
</script>

<style>
</style>
