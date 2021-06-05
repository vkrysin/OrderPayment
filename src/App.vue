<template>
  <payment-form></payment-form>
</template>
<script>
import PaymentForm from './components/PaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentForm
  }
}
</script>

<style>
@import url('scss/_fonts.scss');

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
