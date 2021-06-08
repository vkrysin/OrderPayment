<template>
  <div class="card-info">
    <form>
      <header>Payment</header>
      <div class="note">
        <img src="../assets/lock.svg" alt="lock" />
        <div class="note__text">
          This is a secure 128-bit SSL encrypted payment
        </div>
      </div>
      <div class="card-info__header">Cardholder Name</div>
      <input
        type="text"
        name="cardholder-name"
        id=""
        placeholder="Name as it appears on your card"
      />
      <div class="card-info__header">Card Number</div>
      <input
        type="text"
        name="cardholder-name"
        id=""
        placeholder="XXXX XXXX XXXX XXXX XXXX"
      />
      <div class="wrapper">
        <div class="wrapper__item">
          <div class="card-info__header">Expire Date</div>
          <input
            type="text"
            name="cardholder-name"
            id=""
            placeholder="MM / YY"
          />
        </div>
        <div class="wrapper__item">
          <div class="card-info__header">Security Code</div>
          <input type="text" name="cardholder-name" id="" placeholder="" />
        </div>
      </div>
      <button type="submit">Pay Securely</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '../scss/_mixins.scss';

* {
  box-sizing: border-box;
}

.card-info {
  margin-top: 20px;
  margin-left: 40px;
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input {
  margin-top: 5px;
  width: 320px;
  height: 40px;
  border: 1px solid #dedcdc;
  border-radius: 5px;
  text-indent: 15px;
  @include connectFont('Helvetica', 300, 16px, #6b6b6b);
}

.note,
.wrapper {
  display: flex;
}

header {
  @include connectFont('Helvetica', 300, 26px, #5a1094);
}

.note {
  margin-top: 15px;
  display: flex;
  align-items: center;

  .note__text {
    margin-left: 4px;
    @include connectFont('Helvetica', 300, 15px, #6b6b6b);
  }
}

.card-info__header {
  margin-top: 25px;
  @include connectFont('Helvetica', 300, 16px, #5a1094);
}

.wrapper {
  display: flex;

  .wrapper__item {
    display: flex;
    flex-direction: column;

    input {
      width: 95px;
    }

    &:last-of-type {
      margin-left: 30px;
    }
  }
}

button {
  margin-top: 20px;
  width: 180px;
  height: 45px;
  background: rgba(90, 16, 148, 0.8);
  border: none;
  @include connectFont('Helvetica', 300, 16px, #fff);

  &:hover {
    background: rgba(90, 16, 148, 0.75);
    box-shadow: 0 5px 15px rgba(black, 0.1);
  }

  &:active {
    border: 1px solid black;
  }
}
</style>
