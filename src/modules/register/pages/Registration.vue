<template>
  <q-page padding>
    <q-card
      style="max-width: 400px;"
      class="q-mx-auto q-mt-lg"
      square
      flat
    >
      <q-form @submit="handleRegistration">
      <q-card-section>
        <q-input
          v-model.trim="firstName"
          label="First Name"
          placeholder="John"
          type="text"
          autofocus
          :rules="[
            val => !!val || 'Field is required'
          ]"
        />
        <q-input
          v-model.trim="lastName"
          label="Last Name"
          placeholder="Doe"
          type="text"
          :rules="[
            val => !!val || 'Field is required'
          ]"
        />
        <q-input
          v-model.trim="email"
          label="Email"
          placeholder="login@example.com"
          type="email"
          :rules="[
            val => !!val || 'Field is required',
            val => emailValidationRegex.test(val) || 'Type a valid Email'
          ]"
        />
        <q-input
          v-model.trim="password"
          label="Password"
          placeholder="Password"
          :type="isPwd ? 'password' : 'text'"
          :rules="[
            val => !!val || 'Field is required',
            val => val.length >= 6 || 'Minimum length 6'
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          v-model.trim="confirmPass"
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          :rules="[
            val => val === password || 'Password doesn\'t match'
          ]"
        />
      </q-card-section>

      <q-card-actions align="right" class="q-px-md">
        <q-btn
          label="Register"
          color="primary"
          :loading="loading"
          type="submit"
        />
      </q-card-actions>
      </q-form>

      <q-separator inset />

      <q-card-actions class="q-px-md">
        <p class="caption q-mt-md">
          Already Registered?&nbsp;
          <a
            class="cursor-pointer text-uppercase text-weight-medium text-primary"
            @click.prevent="$router.push('/login')"
          >
            Login
          </a>
        </p>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Registration',

  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPass: '',
      isPwd: true,
      loading: false,
      /* eslint-disable no-useless-escape */
      emailValidationRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      accept: false
    }
  },

  created () {
    this.$store.dispatch('common/setPageTitle', 'Registration')
  },

  methods: {
    handleRegistration () {
      console.log('Login clicked')
    }
  }
}
</script>

<style>
.q-card__actions .q-btn {
  padding: 4px 16px;
}
</style>
