<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12" sm="10" md="8" lg="5" class="mt-5">
        <search-connection-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchConnectionForm from '../components/SearchConnectionForm.vue'

export default {
  name: 'HomeTest',

  components: {
    SearchConnectionForm
  }
}
</script>
