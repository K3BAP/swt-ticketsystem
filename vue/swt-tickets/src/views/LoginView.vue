<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4" class="mt-5">
        <login-form @login="login" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  data () {
    return {
    }
  },
  components: {
    LoginForm
  },
  methods: {
    login ($isAdmin) {
      this.$emit('login', $isAdmin)
    }
  }
}
</script>
