<template>
  <v-card :elevation="5" class="my-2" v-ripple @click="onClick">
    <v-container>
      <div><h4>{{ ticket.type }}</h4></div>
      <v-row v-if="!(ticket.from == null || ticket.to == null)">
        <v-col cols="9">
          <div><span class="text--secondary">Von: </span> {{ ticket.from }} </div>
          <div><span class="text--secondary">Nach: </span> {{ ticket.to }} </div>
        </v-col>
        <v-col cols="3" class="text-right">
          <div><span class="text--secondary">{{ ticket.fromZone }}</span></div>
          <div><span class="text--secondary">{{ ticket.toZone }}</span></div>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="6">
          <div><span class="text--secondary">Von: </span> {{ ticket.fromZone }} </div>
          <div><span class="text--secondary">Nach: </span> {{ ticket.toZone }} </div>
        </v-col>
        <v-col v-if="ticket.expiration != null" cols="6" class="text-right">
          <div><span class="text--secondary">Gültig bis: <br class="hidden-sm-and-up"/></span> {{ ticket.expiration }}</div>
        </v-col>
        <v-col v-if="ticket.ridesLeft != null" cols="6" class="text-right">
          <div><span class="text--secondary">Fahrten verbleibend: <br class="hidden-sm-and-up"/></span> {{ ticket.ridesLeft }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'MyTicketsTicketTemplate',
  props: ['ticket'],
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
