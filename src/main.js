
import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import './assets/tailwind.css';

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vuex from 'vuex'

const firebaseConfig = {
    apiKey: "AIzaSyDgOW_xzak8hY6ZkZVW9xObbV2iJl5GmfY",
    authDomain: "test-8984e.firebaseapp.com",
    databaseURL: "https://test-8984e.firebaseio.com",
    projectId: "test-8984e",
    storageBucket: "test-8984e.appspot.com",
    messagingSenderId: "313559093802",
    appId: "1:313559093802:web:0ab3e8c9b5246612b2a953",
    measurementId: "G-H201FL3VM1"
};



export const db = firebase.initializeApp(firebaseConfig).firestore();
const  itemsRef = db.collection('form1').doc('inputs');

Vue.use(Vuex);
let store = new Vuex.Store({
    strict: true,
    state: { items: [] },
    mutations: vuexfireMutations,
    getters: {
        items: state => state.items,
    },
    actions: {
        setItemsRef: firestoreAction(({ bindFirestoreRef }, ref) => {
            bindFirestoreRef('items', ref)
        }),
    },
})


new Vue({
    store: store,
    computed: Vuex.mapGetters(['items']),
    created() {
        this.source = itemsRef
        this.$store.dispatch('setItemsRef', this.source)
    },
  render: h => h(App),
}).$mount('#app');



