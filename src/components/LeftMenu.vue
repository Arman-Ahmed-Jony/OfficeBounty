<template>
<q-drawer
    v-model="drawerOpened"
    :width="250"
    :breakpoint="800"
    show-if-above
  >
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
    <q-list padding>
      <q-item clickable v-ripple to="/dashboard">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>

        <q-item-section>
          Dashboard
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/recievedBounties" >
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>

        <q-item-section>
          Received Bounties
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/givenBounties">
        <q-item-section avatar>
          <q-icon name="notifications" />
        </q-item-section>

        <q-item-section>
          Given Bounties
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>
          Leaderboard
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="power_settings_new" />
        </q-item-section>

        <q-item-section>
          Logout
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <div class="text-weight-bold">Razvan Stoenescu</div>
      <div>@rstoenescu</div>
    </div>
  </q-img>
</q-drawer>
</template>

<script>
export default {
  name: 'LeftMenu',

  props: {
    drawerState: { type: Boolean, default: false }
  },

  computed: {
    drawerOpened: {
      get () { return this.drawerState },
      set (val) { this.$emit('update:drawerState', val) }
    }
  }
}
</script>
