export default {
  state: {
    funds: 10000,
    stocks: []
  },
  mutations: {
    buyStock(state, { stodkId, quantity, stockPrice }) {
      const record = state.stocks.find((element) => element.id == stodkId);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({
          id: stodkId,
          quantity: quantity
        });
      }

      state.funds -= stockPrice * quantity;
    },
    shellStock(state, { stodkId, quantity, stockPrice }) {
      const record = state.stocks.find((element) => element.id == stodkId);

      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.funds += stockPrice * quantity;
    }
  },
  actions: {
    sellStock({ commit }, order) {
      commit('sellStock', order);
    }
  },
  getters: {
    stockPortfolio(state, getters) {
      return state.stock.map((stock) => {
        const record = getters.stocks.find((element) => element.id == stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        };
      });
    },
    funds(state) {
      return state.funds;
    }
  }
};
