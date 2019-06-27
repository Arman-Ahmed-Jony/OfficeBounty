<template>
  <q-page padding>
    <!-- content -->
    <div class="result q-pb-md q-gutter-sm">
      <div class="points">
        <q-avatar size="10vw" color="brown-3" text-color="white" class="q-mx-md">73</q-avatar>
        <br>
        <p class="pointsText">Silver Coin</p>
      </div>
      <div class="points">
        <q-avatar size="10vw" color="yellow-9" text-color="white" class="q-mx-md">73</q-avatar>
        <br>
        <p class="pointsText">Gold Coin</p>
      </div>
      <div class="points">
        <q-avatar size="10vw" color="red-10" text-color="white" class="q-mx-md">103</q-avatar>
        <br>
        <p class="pointsText">Platinam Coin</p>
      </div>
    </div>
    <!-- <div class="result q-pa-md q-gutter-sm">
      <p size="15vw" class="q-mr-lg">73</p>
      <p size="15vw" class="q-mr-lg">73</p>
      <p size="15vw" class="q-mr-lg">73</p>
    </div>-->
    <div class="info">
      <p class="ruels">
        Happy with someone of your team. this will be deducted from your silver coins.
        <span
          class="link cursor-pointer"
          @click="rulesDialog=true"
        >Check bounty rules.</span>
      </p>
      <div class="row justify-center">
        <q-btn
          unelevated
          color="primary"
          @click.native="giveBountyDialog = true"
          label="GIVE BOUNTY"
        />
      </div>
    </div>

    <q-dialog v-model="giveBountyDialog">
      <q-layout view="lhh LpR lff" container style="height: 500px" class="bg-grey-3">
        <q-page-container>
          <!-- give bounties pop up -->
          <giveBountyPopUp />
        </q-page-container>
      </q-layout>
    </q-dialog>

    <q-dialog v-model="rulesDialog">
      <q-layout view="lhh LpR lff" container style="height: 500px" class="bg-grey-3">
        <q-page-container>
          <q-page padding>
            <!-- content -->
            <div class="content">
              <h4 class="q-ma-sm">RULES</h4>
              <ul>
                <li>
                  Silver coins will be allocated to you by
                  management beginning of every month.
                </li>
                <li>
                  Silver coins are there to giveaway to team
                  members only. Silver coins will be re-set to 0 every
                  month. So, give it away.
                </li>
                <li>
                  Each silver coin up on receiving, becomes gold for
                  the receiving member.
                </li>
                <li>
                  Every 2 gold coin earned automatically earns 1
                  silver coin.
                </li>
                <li>
                  Gold coin gets accumulated over time. However,
                  there would be tab for your coins you earned every
                  month, last three months and every year.
                </li>
                <li>
                  Platinum coins are only given by project managers
                  up on achieving milestones.
                </li>
              </ul>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import giveBountyPopUp from './giveBountyPopUp.vue'
export default {
  name: 'Dashboard',
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
    this.$store.dispatch('common/setPageTitle', 'Dashboard ')
  },

  methods: {}
}
</script>

<style scoped>
.result {
  margin: 0 auto;
  text-align: center;
}
.points {
  display: inline-block;
  text-align: center;
}
.pointsText {
  font-size: calc(12px + 1vw);
  /* font-size: 2.5vw; */
  text-align: center;
  display: inline;
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
</style>
