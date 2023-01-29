<template>
<v-container>
  <v-card
    :elevation="15"
  class="mt-5">
  <v-row class="text-center" justify="center">
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
  </v-row>
  </v-card>
  <v-card
    :elevation="15"
    class="mt-5">
    <v-container>
      <v-row class="pa-3">
        <ChooseConnectionForm v-if="stage === 0"/>
        <ChooseTarifForm v-if="stage === 1"/>
        <PayForm v-if="stage === 2"/>
        <PaySuccessForm v-if="stage === 3"/>
      </v-row>
      <v-row class="pa-3">
        <v-btn @click="prev">zurück</v-btn>
        <v-spacer/>
        <v-btn class="primary" @click="next">weiter</v-btn>
      </v-row>
    </v-container>
  </v-card>
</v-container>
</template>

<script>
import ChooseConnectionForm from '@/components/ChooseConnectionForm.vue'
import ChooseTarifForm from '@/components/ChooseTarifForm.vue'
import PayForm from '@/components/PayForm.vue'
import PaySuccessForm from '@/components/PaySuccessForm.vue'

export default {
  name: 'ListResultsView',
  data () {
    return {
      stage: 0
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
      }
    }
  },
  props: ['beginStage'],
  created () {
    this.stage = this.beginStage
  }
}
</script>
