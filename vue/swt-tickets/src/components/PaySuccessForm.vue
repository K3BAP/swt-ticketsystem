<template>
  <v-container>
    <h1>Kauf erfolgreich!</h1>
    <div v-if="loggedIn === 'user'"> Du findest dein Ticket nun in deinem Account unter "Meine Tickets" und dir wurde ein druckbares Ticket per E-Mail zugesandt. </div>
    <div v-else> Dir wurde ein druckbares Ticket per E-Mail zugesandt. Melde dich an, um deine Tickets direkt auf dieser Webseite zu verwalten.</div>
    <v-row class="mt-2">
      <v-col>
        <v-btn v-if="loggedIn === 'user'" class="primary me-2 mb-2" @click="showTicket">
          Ticket anzeigen
        </v-btn>
        <v-btn class="me-2 mb-2" @click="backToStart">
          Zurück zum Startbildschirm
        </v-btn>
      </v-col>
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
