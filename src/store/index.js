import { createStore } from 'vuex';
import payment from './payment.module';

export const store = createStore({
  modules: {
    payment,
  },
});
