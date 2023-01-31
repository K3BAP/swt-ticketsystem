<template>
  <v-container>
    <v-row justify="center">
        <v-card
          :elevation="15"
          class="mt-5 mx-1 rounded-xl"
          width="270">
          <v-col cols="12">
            <h1 class="text-center"> {{ ticket.type }}</h1>
            <v-img
              alt="QR Code"
              class="mt-0"
              contain
              min-width="100"
              :src="require('../assets/qr-code.png')">
            </v-img>
          </v-col>
          <v-col cols="12">
            <div v-if="!(ticket.from == null || ticket.to == null)" >
              <v-row no-gutters>
                <v-col cols="3">
                  <span>Von: </span>
                </v-col>
                <v-col cols="9">
                  {{ ticket.from }}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3">
                  <span>Nach: </span>
                </v-col>
                <v-col cols="9">
                  {{ ticket.to }}
                </v-col>
              </v-row>
            </div>
            <div v-else >
              <v-row no-gutters>
                <v-col cols="3">
                  <span>Von: </span>
                </v-col>
                <v-col cols="9">
                  {{ ticket.fromZone }}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="3">
                  <span>Nach: </span>
                </v-col>
                <v-col cols="9">
                  {{ ticket.toZone }}
                </v-col>
              </v-row>
            </div>
            <v-row v-if="ticket.expiration != null" class="mt-3" no-gutters>
              <v-col cols="12">
                <span class="text--secondary">Gültig bis: {{ ticket.expiration }}</span>
              </v-col>
            </v-row>
            <v-row v-if="ticket.ridesLeft != null" class="mt-3" no-gutters>
              <v-col cols="12">
                <span class="text--secondary">Fahrten verbleibend: {{ ticket.ridesLeft }}</span>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
    </v-row>
    <v-row justify="center">
        <v-btn class="mt-3" @click="goBack">
          alle Tickets
        </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ShowTicketView',
  data () {
    return {
      ticket: null
    }
  },
  methods: {
    goBack () {
      this.$router.push('mytickets')
    }
  },
  created () {
    this.ticket = this.$route.params.ticket
  }
}
</script>
