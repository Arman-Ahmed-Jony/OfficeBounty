<template>
  <q-page padding>
    <q-card
      style="max-width: 400px;"
      class="q-mx-auto q-mt-lg"
      square
      flat
    >
      <q-form @submit="handleLogin">
      <q-card-section>
        <q-input
          v-model.trim="email"
          label="Email"
          placeholder="login@example.com"
          type="email"
          autofocus
          clearable
          :rules="[
            val => !!val || 'Field is required',
            val => emailValidationRegex.test(val) || 'Type a valid Email'
          ]"
        />
        <q-input
          v-model.trim="password"
          class="q-pt-sm"
          label="Password"
          placeholder="password"
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
      </q-card-section>

      <q-card-actions align="right" class="q-px-md">
        <q-btn
          label="login"
          color="primary"
          :loading="loading"
          type="submit"
        />
      </q-card-actions>
      </q-form>

      <q-separator inset />

      <q-card-actions vertical class="q-px-md" align="left">
        <q-btn
          color="green"
          style="width: 300px;"
          label="Login with Google"
          icon="fab fa-google"
          class="q-my-sm"
          @click="socialLogin('google')"
        />
        <q-btn
          color="blue"
          style="width: 300px;"
          label="Login with Facebook"
          icon="fab fa-facebook"
          class="q-my-sm"
          @click="socialLogin('facebook')"
        />
        <q-btn
          color="red"
          style="width: 300px;"
          label="Login with Microsoft Live"
          icon="fab fa-windows"
          class="q-my-sm"
          @click="socialLogin('live')"
        />

        <p class="caption q-mt-md">
          New to our system?&nbsp;
          <a
            class="cursor-pointer text-uppercase text-weight-medium text-primary"
            @click.prevent="$router.push('/register')"
          >
            Register
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
  name: 'LoginIndex',

  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
      loading: false,
      /* eslint-disable no-useless-escape */
      emailValidationRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },

  created () {
    this.$store.dispatch('common/setPageTitle', 'Login')
  },

  methods: {
    handleLogin () {
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
