<template>
<v-container>
  <v-row justify="center">
    <v-col cols="12" md="9" lg="6">
      <v-card
        :elevation="15"
        class="mt-5">
        <v-col cols="12">
          <v-breadcrumbs large>
            <v-breadcrumbs-item><span :class="{ 'red--text' : (stage === 0)}">Verbindung wählen</span></v-breadcrumbs-item>
            <v-breadcrumbs-divider><v-icon>mdi-chevron-right</v-icon></v-breadcrumbs-divider>
            <v-breadcrumbs-item
              :disabled="stage < 1"><span :class="{ 'red--text' : (stage === 1)}">Tarif wählen</span></v-breadcrumbs-item>
            <v-breadcrumbs-divider><v-icon>mdi-chevron-right</v-icon></v-breadcrumbs-divider>
            <v-breadcrumbs-item
              :disabled="stage < 2"><span :class="{ 'red--text' : (stage === 2)}">Bezahlen</span></v-breadcrumbs-item>
            <v-breadcrumbs-divider><v-icon>mdi-chevron-right</v-icon></v-breadcrumbs-divider>
            <v-breadcrumbs-item
              :disabled="stage < 3"><span :class="{ 'red--text' : (stage === 3)}">Bestätigung</span></v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12" md="9" lg="6">
      <v-card
        :elevation="15">
        <v-container>
          <v-row class="pa-3">
            <ChooseConnectionForm v-if="stage === 0" :connections="connections" @gotoTarife="gotoTarife($event)"/>
            <ChooseTarifForm ref="chooseTarifForm" v-if="stage === 1" :initial-time="selectedTime" :initial-start="selectedStartZone" :initial-end="selectedEndZone"/>
            <PayForm v-if="stage === 2" @success="next" :logged-in="loggedIn"/>
            <PaySuccessForm v-if="stage === 3" :loggedIn="loggedIn" @showTicket="showTicketClick"/>
          </v-row>
          <v-row class="pa-3">
            <v-btn v-if="stage <3" @click="prev">zurück</v-btn>
            <v-spacer/>
            <v-btn v-if="stage === 0" class="primary" @click="next">überspringen</v-btn>
            <v-btn v-if="stage === 1" class="primary" @click="validateChooseTarif">weiter</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import ChooseConnectionForm from '@/components/ChooseConnectionForm.vue'
import ChooseTarifForm from '@/components/ChooseTarifForm.vue'
import PayForm from '@/components/PayForm.vue'
import PaySuccessForm from '@/components/PaySuccessForm.vue'
import router from '@/router'

export default {
  name: 'ListResultsView',
  data () {
    return {
      selectedTime: null,
      selectedStartZone: null,
      selectedEndZone: null,
      stage: 0,
      connections: [
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '14:32',
          arrive: '15:08',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '14:42',
          arrive: '15:18',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '14:52',
          arrive: '15:28',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '15:02',
          arrive: '15:38',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '15:12',
          arrive: '15:48',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '15:22',
          arrive: '15:58',
          price: '3.20 €',
          vehicle: '1'
        },
        {
          from: 'Trier HBF',
          to: 'Euren Helenenbrunnen',
          depart: '15:32',
          arrive: '16:08',
          price: '3.20 €',
          vehicle: '1'
        }
      ],
      ticket: {
        type: 'Einzelticket',
        from: 'Trier HBF',
        to: 'Euren Helenenbrunnen',
        fromZone: 'Zone 1',
        toZone: 'Zone 3'
      }
    }
  },
  components: { PaySuccessForm, PayForm, ChooseTarifForm, ChooseConnectionForm },
  methods: {
    next () {
      if (this.stage < 3) {
        this.stage++
      }
    },
    prev () {
      if (this.stage > 0) {
        this.stage--
      } else router.push('/')
    },
    gotoTarife (time) {
      this.selectedTime = time
      this.selectedStartZone = 0
      this.selectedEndZone = 2
      this.next()
    },
    showTicketClick () {
      this.showTicket(this.ticket)
    },
    showTicket (ticket) {
      this.$router.push({
        name: 'ticket',
        params: { ticket: ticket }
      })
    },
    validateChooseTarif () {
      if (this.$refs.chooseTarifForm.validate()) this.next()
    }
  },
  props: ['beginStage', 'loggedIn'],
  created () {
    this.stage = this.beginStage
  }
}
</script>
