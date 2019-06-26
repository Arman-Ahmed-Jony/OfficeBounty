<template>
  <q-page padding class="pad">
    <q-list v-for="item in 10" :key="item" bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label>Sabeena</q-item-label>
          <q-item-label
            caption
            lines="10"
          > tk.Very kind in sharing his cab drive with me
today. Saved me 200 tk.Very kind in sharing his cab drive with me
today. Saved me 200 tk.</q-item-label>
          <q-item-section side top>
            <q-badge label="General"/>
          </q-item-section>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>20</q-item-label>
          <q-item-label caption>Silver</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent"/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Dashboard',

  data () {
    return {
      teamMember: '',
      project: '',
      catagory: '',
      comment: '',
      bounty: '',
      giveBountyDialog: false,
      rulesDialog: false,
      teamMemberOptions: [
        'Radin',
        'Shakil',
        'Sabeena',
        'Mahadeb',
        'Johnny',
        'Zahin',
        'Rony',
        'Sanjiv'
      ],
      projectOptions: [
        'Office FollowUp',
        'Office Bounty',
        'Bitrix24',
        'Meeting Notes'
      ],
      catagoryOptions: ['ERP', 'Cross Platform', 'Web']
    }
  },

  created () {
    this.$store.dispatch('common/setPageTitle', 'Given Bounties ')
  },

  methods: {}
}
</script>

<style scoped>
.result {
  margin: 0 auto;
  text-align: center;
}
.ruels {
  font-size: 20px;
}
.info {
  width: 90%;
  padding: auto;
  margin: 0 auto;
}
.link {
  text-decoration: none;
  color: #4495ab;
}
.centerd-button {
  margin: 0 auto;
}

ul {
  list-style-type: none;
  font-size: 20px;
}

ul li:before {
  content: "-";
  position: absolute;
  margin-left: -20px;
}
.pad{
  margin-bottom: 8vw;
}
</style>
