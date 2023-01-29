<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="me-2"></v-app-bar-nav-icon>
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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <template v-slot:prepend>
        <v-list-item two-line v-if="loggedIn === 'user'">
          <v-list-item-avatar>
            <img alt="Profilbild" src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle v-if="loggedIn === 'user'">Angemeldet</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line v-else-if="loggedIn === 'admin'">
          <v-list-item-avatar>
            <img alt="Profilbild" src="https://randomuser.me/api/portraits/men/64.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Kenneth Perry</v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item two-line v-else>
          <v-list-item-avatar>
            <img alt="Profilbild" src="https://w7.pngwing.com/pngs/348/769/png-transparent-computer-icons-user-profile-material-design-profile-monochrome-black-account-thumbnail.png">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Nicht Eingeloggt</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

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
    loggedIn: 'nobody',
    drawer: false,
    group: null
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
      this.gotoHome()
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
