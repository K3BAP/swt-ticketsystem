<template>
  <v-container>
    <h1>Meine Tickets</h1>
    <my-tickets-ticket-template v-for="ticket in tickets" :key="tickets.indexOf(ticket)" :ticket="ticket" @click="showTicket(ticket)"/>
  </v-container>
</template>

<script>
import MyTicketsTicketTemplate from '@/components/MyTicketsTicketTemplate.vue'

export default {
  name: 'MyTicketsForm',
  components: { MyTicketsTicketTemplate },
  methods: {
    showTicket (ticket) {
      console.log(ticket)
    }
  },
  props: ['tickets']
}
</script>
