<template>
  <v-container>
    <v-card
    :elevation="15">
      <h1 class="text--secondary my-1">Verbindung suchen</h1>
      <v-form class="mx-3">
        <v-row justify="center">
          <v-col
            cols="12">
            <v-text-field
              prepend-icon="mdi-map-marker"
              label="Von">
            </v-text-field>
          </v-col>
          <v-col
            cols="12">
            <v-text-field
              prepend-icon="mdi-map-marker"
              label="Nach">
            </v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Datum"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-menu
              ref="menu"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Uhrzeit"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                locale="de-DE"
                format="24hr"
                v-if="menu2"
                v-model="time"
                full-width
                @click:minute="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-col>
          <v-btn class="mb-3 ms-5 me-3">
            Suchen
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
const timeNow = new Intl.DateTimeFormat('de-DE', { timeStyle: 'short' }).format(new Date())
export default {
  name: 'SearchConnectionForm',
  data () {
    return {
      time: timeNow,
      date: null,
      menu1: false,
      menu2: false
    }
  },
  components: {
  }
}
</script>
