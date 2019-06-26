<template>
  <q-page padding class="pad">
    <q-list  padding separator>
      <q-item v-for="item in 10" :key="item" >
        <q-item-section>
          <q-item-label class="text-h6">Sabeena</q-item-label>
          <q-item-label class="text-body6" lines="10">
            tk.Very kind in sharing his cab drive with me
            today. Saved me 200 tk.Very kind in sharing his cab drive with me
            today. Saved me 200 tk.
          </q-item-label>
          <q-item-section side top class="q-pt-md">
            <q-badge label="General" color="red"/>
          </q-item-section>
        </q-item-section>

        <q-item-section side top>
          <q-item-label class="text-h5">20</q-item-label>
          <q-item-label caption>Silver</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-page-sticky @click.native="giveBountyDialog=true" position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent"/>
    </q-page-sticky>

    <q-dialog v-model="giveBountyDialog">
      <q-layout view="lhh LpR lff" container style="height: 500px" class="bg-grey-3">
        <q-page-container>
          <!-- give bounties pop up -->
          <giveBountyPopUp/>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import giveBountyPopUp from '../../dashboard/pages/giveBountyPopUp'
export default {
  name: 'Give Bounties',
  components: {
    giveBountyPopUp
  },
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
    this.$store.dispatch('common/setPageTitle', 'Given Bounties')
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
.pad {
  margin-bottom: 8vw;
}
</style>
