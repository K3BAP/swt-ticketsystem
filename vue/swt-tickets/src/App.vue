<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          role="button"
          alt="SWT Logo"
          class="shrink mt-1"
          contain
          min-width="100"
          :src="require('./assets/swt_logo.png')"
          @click="gotoHome"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="loggedIn === 'nobody'"
        @click="gotoLogin"
        target="_blank"
        text
      >
        <span class="mr-2">Einloggen</span>
      </v-btn>
      <v-btn
        v-else
        @click="logout"
        target="_blank"
        text
      >
        <span class="mr-2">Ausloggen</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view @login="login($event)"/>
    </v-main>

    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

import router from '@/router'

export default {
  name: 'App',

  data: () => ({
    links: [
      'Datenschutz',
      'Impressum',
      'Team',
      'Services',
      'Kontakt'
    ],
    loggedIn: 'nobody'
  }),
  methods: {
    gotoHome () {
      router.push('/')
    },
    gotoLogin () {
      router.push('login')
    },
    login ($isAdmin) {
      if ($isAdmin === true) {
        this.loggedIn = 'admin'
      }
      if ($isAdmin === false) {
        this.loggedIn = 'user'
        this.gotoHome()
      }
    },
    logout () {
      this.loggedIn = 'nobody'
    }
  }
}
</script>
