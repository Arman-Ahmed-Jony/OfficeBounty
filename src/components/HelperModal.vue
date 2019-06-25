<template>
<q-dialog v-model="helpModalOpened">
  <q-card>
    <q-card-section>
      <div class="text-h6">{{title}}</div>
    </q-card-section>

    <q-separator />

    <q-card-section style="max-height: 50vh" class="scroll">
      <slot/>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="OK" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</q-dialog>
</template>

<script>
export default {
  name: 'HelperModal',

  props: {
    title: { type: String, default: 'Tips' },
    modalOpened: { type: Boolean, default: false }
  },

  computed: {
    helpModalOpened: {
      get () { return this.modalOpened },
      set (val) { this.$emit('update:modalOpened', val) }
    }
  }
}
</script>
