<template>
  <q-page class="q-pa-md">
    <q-select v-model="teamMember" :options="teamMemberOptions" label="TEAM MEMBER"/>

    <q-select v-model="project" :options="projectOptions" label="PROJECT(Optional)"/>

    <q-select v-model="catagory" :options="catagoryOptions" label="SPECIFY CATEGORY (Optional)"/>

    <q-input v-model="comment" label="COMMENT"/>
    <q-input type="number" v-model="bounty" label="BOUNTY"/>
    <q-btn unelevated class="q-mt-lg" color="primary" label="GIVE BOUNTY"/>
  </q-page>
</template>
<script>
export default {
  name: 'giveBountyPopUp',
  data () {
    return {
      teamMember: '',
      project: '',
      catagory: '',
      comment: '',
      bounty: '',
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
  }
}
</script>
<style >
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
