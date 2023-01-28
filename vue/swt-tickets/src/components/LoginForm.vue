<template>
  <v-container>
    <v-card
    :elevation="15">
      <h1 class="text--secondary my-1">Anmelden</h1>
      <v-form class="mx-5">
        <v-row justify="center">
          <v-col
            cols="12">
            <v-text-field
              label="Benutzername">
            </v-text-field>
          </v-col>
          <v-col
            cols="12">
            <v-text-field
              label="Passwort"
              type="password">
            </v-text-field>
          </v-col>
          <v-col>
            <v-btn class="primary me-1" @click="loginUser">
              User Login
            </v-btn>
            <v-btn class="primary me-1" @click="loginAdmin">
              Admin Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  methods: {
    loginUser () {
      this.$emit('login', false)
    },
    loginAdmin () {
      this.$emit('login', true)
    }
  }
}
</script>
