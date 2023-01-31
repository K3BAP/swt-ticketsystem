<template>
<v-container>
  <v-row justify="center">
    <v-col cols="12" md="9" lg="6">
      <v-card
        :elevation="15">
        <v-container>
          <v-row class="pa-3">
            <my-tickets-form :tickets="tickets"/>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import MyTicketsForm from '@/components/MyTicketsForm.vue'

export default {
  name: 'MyTicketsView',
  data () {
    return {
      tickets: [
        {
          type: 'Einzelticket',
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          fromZone: 'Zone 1',
          toZone: 'Zone 3'
        },
        {
          type: 'Monatsticket',
          fromZone: 'Zone 1',
          toZone: 'Zone 1',
          expiration: '25.02.2023'
        },
        {
          type: '4-Fahrten-Ticket',
          fromZone: 'Zone 1',
          toZone: 'Zone 2'
        }
      ]
    }
  },
  components: { MyTicketsForm }
}
</script>
