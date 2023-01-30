<template>
  <v-container>
    <h1>Bezahlen</h1>
    <v-card>
      <v-container>
        <v-row justify="center" class="mt-1 mb-3">
          <h2>Zu zahlen: 3,10 €</h2>
        </v-row>
        <v-row justify="center" class="mb-2">
          <v-btn class="primary" @click="success">
            Jetzt zahlen
          </v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PayForm',
  methods: {
    success () {
      this.$emit('success')
    }
  }
}
</script>
