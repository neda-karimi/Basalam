

// import { info } from 'node-sass';
// import { info } from 'node-sass';
import Vue from 'vue';
import Vuex from 'vuex';
// import data from '../assets/data';
import AddressData from '../AddressData';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        info: [],
        AddressInfo: AddressData,
        product: []
    },
    getters: {
        getStarted: state => {
            return state.info
        },
        getStartedAddress: state => {
            return state.AddressInfo
        }

    },
    mutations: {
        ADD_ONE_COUNT_PRODUCT(state, incrementInfo) {
            var vendorId = incrementInfo.vendorId;
            var productId = incrementInfo.productId;
            for (let index = 0; index < state.info.length; index++) {
                var vendor = state.info[index];
                if (vendor.id == vendorId) {
                    for (let index2 = 0; index2 < vendor.items.length; index2++) {
                        var product = vendor.items[index2];
                        if ((product.product.id == productId) && (product.product.stock > product.quantity)) {
                            product.quantity++;
                            product.product.price += 25000;
                            product.product.primaryPrice += 10000;
                        }
                    }
                }
            }

        },
        REMOVE_ONE_COUNT_PRODUCT(state, incrementInfo) {
            var vendorId = incrementInfo.vendorId;
            var productId = incrementInfo.productId;
            for (let index = 0; index < state.info.length; index++) {
                var vendor = state.info[index];
                if (vendor.id == vendorId) {
                    for (let index2 = 0; index2 < vendor.items.length; index2++) {
                        var product = vendor.items[index2];
                        if (product.product.id == productId) {
                            product.quantity--;
                            if (product.quantity <= 0) {
                                product.quantity = 0;
                            }
                            else{
                                 product.product.price -= 25000;
                                product.product.primaryPrice -= 10000;
                            }
                               
                            

                        }
                    }
                }
            }
        },
        SET_ZERO_FOR_PRODUCT_THAT_REMOVED(state, productInfo) {
            var vendorId = productInfo.vendorId;
            for (let index = 0; index < state.info.length; index++) {
                var vendor = state.info[index];
                if (vendor.id == vendorId) {
                    for (let index2 = 0; index2 < vendor.items.length; index2++) {
                        vendor.items.splice(index2, 1);
                    }
                }
            }
        },
        REMOVE_VENDOR(state, productInfo) {
            var vendorId = productInfo.vendorId;
            for (let index = 0; index < state.info.length; index++) {
                var vendor = state.info[index];
                if (vendor.id == vendorId) {
                    if (vendor.items.length === 0) {
                        state.info.splice(index, 1);
                    }
                }

            }
        },

        GETING_DATA(state, data) {
            state.info = data.vendors;
        }

    },
    actions: {
        productCountIncrementVuex({ commit, }, incrementInfo) {
            commit('ADD_ONE_COUNT_PRODUCT', incrementInfo)
        },
        productCountDecrementVuex({ commit }, incrementInfo) {
            commit('REMOVE_ONE_COUNT_PRODUCT', incrementInfo)
        },
        removeProduct({ commit }, incrementInfo) {
            commit('SET_ZERO_FOR_PRODUCT_THAT_REMOVED', incrementInfo)
            commit('REMOVE_VENDOR', incrementInfo)

        },
        async getData({ commit }) {
            let response = await axios.get("https://mini-cart.iran.liara.run/v1/cart");
            let appData = response.data;
            commit('GETING_DATA', appData)
        }
    }
});         