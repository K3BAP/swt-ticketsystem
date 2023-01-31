<template>
<h1>Hier wird ein Ticket angezeigt. {{ ticket.type }}</h1>
</template>

<script>
export default {
  name: 'ShowTicketView',
  data () {
    return {
      ticket: null
    }
  },
  created () {
    this.ticket = this.$route.params.ticket
  }
}
</script>
