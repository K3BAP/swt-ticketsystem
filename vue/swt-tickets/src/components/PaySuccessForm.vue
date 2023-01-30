<template>
  <v-container>
    <h1>Kauf erfolgreich!</h1>
    Du findest dein Ticket nun in deinem Account unter "Meine Tickets" und dir wurde ein druckbares Ticket per E-Mail zugesandt.
    <v-row class="mt-2">
      <v-col>
        <v-btn class="primary me-2 mb-2">
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
import router from '@/router'

export default {
  name: 'PaySuccessForm',
  methods: {
    backToStart () {
      router.push('/')
    }
  }
}
</script>
