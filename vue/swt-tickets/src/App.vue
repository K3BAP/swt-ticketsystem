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
        <span class="mr-2">Anmelden</span>
      </v-btn>
      <v-btn
        v-else
        @click="logout"
        target="_blank"
        text
      >
        <span class="mr-2">Abmelden</span>
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
            <v-list-item-title>Nicht angemeldet</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list
        nav
        dense
      >
        <v-divider class="mb-2"></v-divider>
        <v-list-item-group
          v-model="selectedNavItem"
          mandatory
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-if="loggedIn === 'nobody'"
            value="login"
            @click="gotoLogin">
            <v-list-item-icon>
              <v-icon> mdi-login </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Anmelden</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="loggedIn !== 'admin'"
            value="home"
            @click="gotoHome">
            <v-list-item-icon>
              <v-icon> mdi-view-dashboard </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Startseite</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="loggedIn === 'user'"
            value="tickets"
            @click="gotoMyTickets">
            <v-list-item-icon>
              <v-icon> mdi-ticket </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Meine Tickets</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="loggedIn === 'user'"
            value="settings">
            <v-list-item-icon>
              <v-icon> mdi-cog </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Einstellungen</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-if="loggedIn === 'admin'"
            value="tarife"
            @click="gotoTarife">
            <v-list-item-icon>
              <v-icon> mdi-view-dashboard </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tarifübersicht</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main v-touch="{ right() {drawer = true}}">
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
      'Kontakt'
    ],
    loggedIn: 'nobody',
    drawer: false,
    selectedNavItem: null
  }),
  methods: {
    gotoHome () {
      if (this.loggedIn !== 'admin') {
        router.push('/')
        this.selectedNavItem = 'home'
      } else this.gotoTarife()
    },
    gotoLogin () {
      router.push('login')
      this.selectedNavItem = 'login'
    },
    gotoTarife () {
      router.push('tarife')
      this.selectedNavItem = 'tarife'
    },
    gotoMyTickets () {
      router.push('mytickets')
      this.selectedNavItem = 'tickets'
    },
    login ($isAdmin) {
      if ($isAdmin === true) {
        this.loggedIn = 'admin'
        this.gotoTarife()
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
