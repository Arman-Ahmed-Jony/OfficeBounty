<template>
<q-layout view="lHh Lpr lff">
  <q-header elevated class="bg-cyan-8">
    <q-toolbar>
      <q-toolbar-title>{{pageTitle}}</q-toolbar-title>
      <q-btn
        flat
        round
        dense
        icon="menu"
        @click="drawer = !drawer"
      />
    </q-toolbar>
  </q-header>

  <left-menu :drawerState.sync="drawer" />

  <q-page-container>
    <router-view />
  </q-page-container>
</q-layout>
</template>

<script>
import LeftMenu from '../components/LeftMenu'
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',

  components: {
    LeftMenu
  },

  data () {
    return {
      drawer: true
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
