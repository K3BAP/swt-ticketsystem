<template>
  <v-container>
    <h1>Verbindung wählen</h1>
    <connection-template
      :key="connections.indexOf(connection)"
      v-for="connection in connections"
      :connection="connection"
      @click="gotoTarife(connection.depart)"
    />
  </v-container>
</template>

<script>
import ConnectionTemplate from '@/components/ConnectionTemplate.vue'

export default {
  name: 'ChooseConnectionForm',
  components: { ConnectionTemplate },
  props: ['connections'],
  methods: {
    gotoTarife (time) {
      this.$emit('gotoTarife', time)
    }
  }
}
</script>
