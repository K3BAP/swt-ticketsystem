<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Preis Preisstufe 1
        </th>
        <th class="text-left">
          Preis Preisstufe 2
        </th>
        <th class="text-left">
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in tarife"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.preis1 }}</td>
        <td>{{ item.preis2 }}</td>
        <td class="text-right">
          <v-btn
            color="primary"
            class="ma-2 white--text"
            small
            fab
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
            color="red"
            class="ma-2 white--text"
            small
            fab
          >
            <v-icon dark>
              mdi-trash-can
            </v-icon>
          </v-btn>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'TarifuebersichtTable',
  data () {
    return {
      tarife: [
        {
          name: 'Einzelticket',
          preis1: '2,20 €',
          preis2: '3,10 €'
        },
        {
          name: '4-Fahrten-Ticket',
          preis1: '6,60 €',
          preis2: '9,00 €'
        },
        {
          name: 'Tagesticket',
          preis1: '6,10 €',
          preis2: '8,00 €'
        },
        {
          name: 'Wochenticket',
          preis1: '20,00 €',
          preis2: '25,40 €'
        },
        {
          name: 'Monatsticket',
          preis1: '70,20 €',
          preis2: '88,20 €'
        }
      ]
    }
  }
}
</script>
