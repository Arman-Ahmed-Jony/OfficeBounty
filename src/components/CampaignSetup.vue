<template>
  <q-page padding>
    <q-form
      style="max-width: 500px;"
      class="q-mx-auto"
      @submit="handleWholeStoreDiscount"
    >
      <q-input
        label="Campaign Start Date"
        v-model.trim="startDate"
        :rules="[
          val => !!val || 'Field is required',
          val => !endDate || val <= endDate || 'Must be Equal or, Less than End Date'
        ]"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date
                v-model="startDate"
                :options="startDateRange"
                @input="() => $refs.qDateProxy.hide()"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        label="Campaign End Date"
        v-model.trim="endDate"
        :rules="[
          val => !!val || 'Field is required',
          val => val >= startDate || 'Must be Equal or, Greater than Start Date'
        ]"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date
                v-model="endDate"
                :options="endDateRange"
                @input="() => $refs.qDateProxy.hide()"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-btn
        label="Create"
        color="primary"
        class="q-mt-md"
        :loading="loading"
        type="submit"
      />
      <q-btn
        label="Cancel"
        color="grey"
        class="q-mt-md q-ml-md"
        :loading="loading"
        @click="$router.push('/discount-types')"
      />
    </q-form>
  </q-page>
</template>

<style>
</style>

<script>
import { date } from 'quasar'

export default {
  name: 'CampaignSetup',

  data () {
    return {
      startDate: '',
      endDate: '',
      minDiscount: '',
      maxDiscount: '',
      loading: false
    }
  },

  computed: {
    today () {
      let timeStamp = Date.now()
      let formattedString = date.formatDate(timeStamp, 'YYYY/MM/DD')
      return formattedString
    },
    startDate1: {
      get () { return this.today },
      set (val) { console.log(val) }
    }
  },

  created () {
  },

  methods: {
    handleWholeStoreDiscount () {
      console.log('handleWholeStoreDiscount clicked')
    },
    startDateRange (date) {
      return date >= this.today
    },
    endDateRange (date) {
      return date >= this.today && date >= this.startDate
    }
  }
}
</script>
