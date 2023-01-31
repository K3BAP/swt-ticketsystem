<template>
  <v-container>
    <h1 class="pb-3">Tarif wählen</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
      <v-row justify="center">
        <v-col cols="12">
          <v-select
            required
            :items="tarife"
            :value="selectedTarif"
            label="Ticket-Typ"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            required
            :rules="zoneRules"
            :items="zonen"
            label="Von"
            :value="selectedStartZone"
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            required
            :rules="zoneRules"
            :items="zonen"
            label="Nach"
            :value="selectedEndZone"
            dense
          ></v-select>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-menu
            v-model="showTimeMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="selectedDate"
                label="Datum"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="selectedDate"
              @input="showTimeMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-menu
            ref="menu"
            v-model="showDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="selectedTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="selectedTime"
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
              v-if="showDateMenu"
              v-model="selectedTime"
              full-width
              @click:minute="$refs.menu.save(selectedTime)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-form>
    <v-row justify="end">
        <h2>Preis: 3,10 €</h2>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'ChooseTarifForm',
  data () {
    return {
      selectedTime: null,
      selectedDate: null,
      selectedStartZone: null,
      selectedEndZone: null,
      showTimeMenu: false,
      showDateMenu: false,
      selectedTarif: 'Einzelticket',
      tarife: [
        'Einzelticket',
        '4-Fahrten-Ticket',
        'Tagesticket',
        'Wochenticket',
        'Monatsticket'
      ],
      zonen: [
        'Tarifzone 1 (Trier-City)',
        'Tarifzone 2 (Trier-Nord)',
        'Tarifzone 3 (Trier-Südwest)',
        'Tarifzone 4 (Trier-Südost)'
      ],

      valid: true,
      zoneRules: [
        v => !!v || 'Zone muss ausgewählt sein.'
      ]
    }
  },
  props: ['initialTime', 'initialDate', 'initialStart', 'initialEnd'],
  methods: {
    validate () {
      return this.$refs.form.validate()
    }
  },
  created () {
    if (this.initialTime != null) {
      this.selectedTime = this.initialTime
    } else {
      this.selectedTime = new Intl.DateTimeFormat('de-DE', { timeStyle: 'short' }).format(new Date())
    }
    if (this.initialDate != null) {
      this.selectedDate = this.initialDate
    } else {
      this.selectedDate = new Date().toISOString().substring(0, 10)
    }
    if (this.initialStart != null) {
      this.selectedStartZone = this.zonen[this.initialStart]
    }
    if (this.initialEnd != null) {
      this.selectedEndZone = this.zonen[this.initialEnd]
    }
  }
}
</script>
