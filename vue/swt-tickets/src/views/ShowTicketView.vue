<template>
<h1>Hier wird ein Ticket angezeigt.</h1>
</template>

<script>
export default {
  name: 'ShowTicketView',
  created () {
    console.log(this.$route.params)
  }
}
</script>
