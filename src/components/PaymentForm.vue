<template>
  <div class="main">
    <header>
      <div class="payment-header-container">
        <div class="logo">
          <img src="../assets/logo.svg" alt="logo" />
          <h1>Front-end Developer Test Task</h1>
        </div>
        <div class="goods-basket">
          <span>cart</span>
          <div class="goods-basket-total">
            <img src="../assets/basket.svg" alt="basket" />
            <div class="goods-basket-total__value">3</div>
          </div>
        </div>
      </div>
    </header>
    <div class="content">
      <div class="payment-process">
        <div class="panel">
          <div class="panel__item panel__item_active">Shipping</div>
          <div class="panel__arrow">
            <img src="../assets/right-arrow.svg" alt="rightArrow" />
          </div>
          <div class="panel__item">Billing</div>
          <div class="panel__arrow">
            <img src="../assets/right-arrow.svg" alt="rightArrow" />
          </div>
          <div class="panel__item">Payment</div>
        </div>
        <shipping-info
          v-if="isShippingNotCompleted"
          @shippingCompleted="nextStepAfterShipping"
        />
        <billing-info
          v-else-if="isBillingNotCompleted"
          @billingCompleted="nextStepAfterBilling"
        />
        <card-info
          v-else-if="isCardNotCompleted"
          @cardCompleted="nextStepAfterCard"
        />
        <order-info v-else />
      </div>
      <order-summary />
    </div>
  </div>
</template>

<script>
import OrderSummary from './OrderSummary.vue';
import CardInfo from './CardInfo.vue';
import OrderInfo from './OrderInfo.vue';
import ShippingInfo from './ShippingInfo.vue';
import BillingInfo from './BillingInfo.vue';

export default {
  name: 'PaymentForm',
  components: {
    OrderSummary,
    CardInfo,
    OrderInfo,
    ShippingInfo,
    BillingInfo,
  },

  data() {
    return {
      name: '',
      isShippingNotCompleted: true,
      isBillingNotCompleted: true,
      isCardNotCompleted: false,
    };
  },

  methods: {
    nextStepAfterShipping() {
      this.$el
        .querySelector('.panel')
        .querySelectorAll('.panel__item')[1]
        .classList.add('panel__item_active');
      this.isShippingNotCompleted = false;
    },
    nextStepAfterBilling() {
      this.$el
        .querySelector('.panel')
        .querySelectorAll('.panel__item')[2]
        .classList.add('panel__item_active');
      this.isBillingNotCompleted = false;
    },

    nextStepAfterCard() {
      this.$el.querySelector('.panel').classList.add('display-none');
      this.isCardNotCompleted = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
}

.display-none {
  display: none;
}

header {
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(#7e00e8 0%, #ff1876 54.17%, #bb0cb2 100%);
  border-image-slice: 1;
  background: #fff;
}

.panel {
  margin-top: 23px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  @include connectFont('Helvetica', 400, 12px, #979797);
}

.panel__item,
.panel__arrow {
  padding-left: 15px;
}

.panel__item_active {
  color: #5a1094;
}

.payment-header-container {
  margin: 10px auto;
  padding: 0 10px;
  height: 50px;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  background: #fff;
}

.logo {
  display: flex;
  align-items: center;

  h1 {
    margin-left: 10px;
    @include connectFont('Helvetica', 300, 20px, #5a1094);
  }
}
.goods-basket {
  position: relative;
  display: flex;
  align-items: center;

  span {
    @include connectFont('Helvetica', 300, 15px, #c90ea5);
  }

  .goods-basket-total {
    margin-left: 5px;

    .goods-basket-total__value {
      position: absolute;
      left: 45px;
      top: 9px;
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url('../assets/bg-pink-circle.svg') no-repeat;
      @include connectFont('Helvetica', 500, 9px, #fff);
    }
  }
}

.content {
  margin: 45px auto 0;
  width: 700px;
  display: flex;
  border-radius: 5px;

  .payment-process {
    margin: 0 auto;
    min-height: 600px;
    width: 400px;
    background: #ffffff;
  }
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 400px;
  }
  .content {
    width: auto;
  }
  .panel {
    padding-left: 15px;
  }
}
@media screen and (max-width: 415px) {
  .panel {
    padding-left: 0;
  }
}
</style>

<style lang="scss">
@import '../scss/_mixins.scss';

.input-invalid,
.select-invalid {
  border-color: #e30000;
  background: #fff2f4;

  &::placeholder {
    color: #e30000;
  }
}

.error-text {
  margin-top: 5px;
  margin-left: 3px;
  @include connectFont('Helvetica', 400, 12px, #e30000);
}

</style>
