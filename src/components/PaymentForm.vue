<template>
  <header>
    <div class="container">
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
</template>

<script>
export default {
  name: 'PaymentForm'
}
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
}

header {
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(#7e00e8 0%, #ff1876 54.17%, #bb0cb2 100%);
  border-image-slice: 1;
}

.container {
  margin: 0 auto;
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

@media screen and (max-width: 768px) {
  .container {
    max-width: 400px;
  }
}
@media screen and (max-width: 415px) {
  .container {
    margin-right: 20px;
    height: auto;
    flex-direction: column;
    align-items: flex-end;
  }
  .goods-basket {
    .goods-basket-total {
      .goods-basket-total__value {
        top: -7px;
      }
    }
  }
}
</style>
