<template>
  <v-container>
  <v-row justify="center">
    <v-col cols="12" md="9">
      <v-card
        :elevation="15">
        <v-container>
          <v-row class="pa-3" justify="end">
            <v-col cols="12">
              <h1> Tarifübersicht </h1>
            </v-col>
            <v-col cols="12" >
              <tarifuebersicht-table />
            </v-col>
            <v-btn
              :loading="loading5"
              :disabled="loading5"
              color="blue-grey"
              class="ma-2 white--text"
              fab
              @click="loader = 'loading5'"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import TarifuebersichtTable from '@/components/TarifuebersichtTable.vue'

export default {
  name: 'TarifuebersichtView',
  components: { TarifuebersichtTable }
}
</script>

<style scoped>

</style>
