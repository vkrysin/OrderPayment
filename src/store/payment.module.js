const state = {
  shippingAddress: {
    fullName: '',
    phoneNumber: '',
    address: {
      street: '',
      // Apt, Suite, Bldg, Gate Code
      directionalInfo: '',
      city: '',
      country: '',
      zip: '',
    },
  },
  billingAddress: {
    fullName: '',
    email: '',
    address: {
      street: '',
      // Apt, Suite, Bldg, Gate Code
      directionalInfo: '',
      city: '',
      country: '',
      zip: '',
    },
  },
  cardData: {
    cardholderName: '',
    cardNumber: '',
    cardDate: '',
    cardCode: '',
  },
};

const mutations = {
  setShippingAddress(state, shippingAddress) {
    state.shippingAddress = shippingAddress;
  },

  setBillingAddress(state, billingAddress) {
    state.billingAddress = billingAddress;
  },
  setCardData(state, cardData) {
    state.cardData = cardData;
  },
};

const getters = {
  mail(state) {
    return state.billingAddress.email;
  },
  shippingData() {
    return state.shippingAddress;
  },
};

export default {
  state,
  mutations,
  getters,
};
