import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            // {
            //     nameItem: "Canon EOS 80D Kit",
            //     description:
            //         "Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат",
            //     url: "https://avatars.mds.yandex.net/get-mpic/4399094/img_id5659390612066064154.jpeg/orig",
            //     price: "88000",
            //     id: "1231231312312312312312323",
            // },
            // {
            //     nameItem: "Canon PowerShot SX620 HS",
            //     description:
            //         "Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат",
            //     url: "https://avatars.mds.yandex.net/get-mpic/1382936/img_id5515273861225863598.jpeg/orig",
            //     price: "56000",
            //     id: "123123131231231231231232",
            // },
            // {
            //     nameItem: "Canon EOS 77D Kit",
            //     description:
            //         "Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат, Красивый фотоаппарат",
            //     url: "https://avatars.mds.yandex.net/get-mpic/3916156/img_id5905590964597803877.jpeg/orig",
            //     price: "62000",
            //     id: "12312313123123123123123",
            // },
        ],
    },
    mutations: {
        setItem(state, formData) {
            state.products.push(formData);

            localStorage.setItem("products", JSON.stringify(state.products));
        },
        delItem(state, index) {
            state.products.splice(index, 1);
            window.localStorage.setItem(
                "products",
                JSON.stringify(state.products)
            );
        },
        initialiseStore(state) {
            if (localStorage.getItem("products")) {
                Object.assign(
                    state.products,
                    JSON.parse(localStorage.getItem("products"))
                );
            }
        },
    },
    actions: {
        createItem({ commit }, formData) {
            commit("setItem", formData);
        },
        deleteItem({ commit }, index) {
            commit("delItem", index);
        },
    },
    modules: {},
    getters: {
        products: (s) => s.products,
    },
});
