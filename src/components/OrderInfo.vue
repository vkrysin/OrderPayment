<template>
  <div class="order-container">
    <header>Thank you for your order!</header>

    <div class="order-additional-info">
      <p class="order-additional-info__number">Order number is: 188787788</p>
      <p class="order-additional-info__mail">
        Your will recieve an email confirmation shortly to
        <a :href="'mailto:' + mail">{{ mail }}</a>
      </p>
      <p class="order-additional-info__delivery-day">
        Estimated delivery Day is
        <span class="bold">{{ deliveryDate }} </span>
      </p>
    </div>
    <div class="order-data"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'OrderInfo',
  // data() {
  //   return {
  //     mail: this.mail(),
  //   }
  // },
  computed: {
    ...mapGetters(['mail']),
    deliveryDate() {
      let date = new Date();
      date.setDate(date.getDate() + 3);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return date.toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

.order-container {
  margin-top: 60px;
  margin-left: 40px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

header {
  @include connectFont('Helvetica', 300, 26px, #5a1094);
}

.order-additional-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    @include connectFont('Helvetica', 300, 16px, #2b2525);

    .bold {
      font-weight: 500;
    }
  }

  .order-additional-info__number {
    margin-top: 30px;
    font-weight: 500;
  }

  .order-additional-info__mail {
    margin-top: 10px;
    width: 275px;

    a {
      font-weight: 300;
      color: #5a1094;

      &:hover {
        color: #5b1094d3;
      }
    }
  }

  .order-additional-info__delivery-day {
    margin-top: 14px;
    display: flex;
    flex-direction: column;

    span {
      margin-top: 3px;
    }
  }
}
</style>
