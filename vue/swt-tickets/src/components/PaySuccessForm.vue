<template>
  <v-container>
    <h1>Kauf erfolgreich!</h1>
    <div v-if="loggedIn === 'user'"> Du findest dein Ticket nun in deinem Account unter "Meine Tickets" und dir wurde ein druckbares Ticket per E-Mail zugesandt. </div>
    <div v-else> Dir wurde ein druckbares Ticket per E-Mail zugesandt. Melde dich an, um deine Tickets direkt auf dieser Webseite zu verwalten.</div>
    <v-row class="mt-5" justify="center">
        <v-btn v-if="loggedIn === 'user'" class="primary mb-3 ms-5 me-3" @click="showTicket">
          Ticket anzeigen
        </v-btn>
        <v-btn class="mb-3 ms-5 me-3" @click="backToStart">
          Zurück zum Startbildschirm
        </v-btn>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'PaySuccessForm',
  methods: {
    backToStart () {
      this.$router.push('/')
    },
    showTicket () {
      this.$emit('showTicket')
    }
  },
  props: ['loggedIn']
}
</script>
