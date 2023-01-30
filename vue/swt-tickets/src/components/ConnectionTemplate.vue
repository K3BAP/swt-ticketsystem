<template>
<v-card :elevation="5" class="my-2" v-ripple @click="onClick">
  <v-container>
    <v-row>
      <v-col cols="8">
        <div><span class="text--secondary">Ab: </span> <b>{{ connection.depart }}</b> <br class="hidden-sm-and-up" /><span class="text--secondary">{{ connection.from }}</span></div>
        <div><span class="text--secondary">An </span> <b>{{ connection.arrive }}</b> <br class="hidden-sm-and-up" /><span class="text--secondary">{{ connection.to }}</span></div>
      </v-col>
      <v-col cols="4" class="text-right">
        <div>Preis ab: <b>{{ connection.price }}</b></div><br class="hidden-sm-and-up" />
        <div>Linie: <b>{{ connection.vehicle }}</b></div>
      </v-col>
    </v-row>
  </v-container>
</v-card>
</template>

<script>
export default {
  name: 'ConnectionTemplate',
  props: ['connection'],
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
