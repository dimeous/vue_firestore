<template>
    <form @submit="saveInputs" class="w-full max-w-lg"  >

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input v-model="$store.state.items.firstName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input v-model="$store.state.items.lastName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-skype">
                    Skype
                </label>
                <input v-model="$store.state.items.skype" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-skype" type="text" placeholder="Skypename">
                <p class="text-gray-600 text-xs italic">Your skype</p>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    City
                </label>
                <input v-model="$store.state.items.city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
            </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Zip
                </label>
                <input v-model="$store.state.items.zip" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
            </div>
        </div>
        <h5 class="ml-6 pt-3 text-sm ">Filled data:</h5>
        <div class="flex flex-wrap p-4">
            <base-progress :percentage="contentProgress" class="mx-2 mb-2 h-5">
                <span class="text-xs text-white w-full flex justify-end pr-2">{{contentProgress}}%</span>
            </base-progress>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                Save
            </button>
        </div>
    </form>
</template>

<script>
    import { db } from '../main'
    import BaseProgress from "../components/BaseProgress";

    export default {
        name: 'Form1',
        components: {
            BaseProgress
        },
        data () {
            return {
                progress: 0
            }
        },
        computed: {
            items() {
                return this.$store.state.items
            },
            contentProgress(){
                var progress=0;
                for (let key in this.$store.state.items) {
                    if (this.$store.state.items[key])
                        progress += 20;
                }
              return progress;
            }
        },

        methods: {

            async saveInputs() {
                console.log(this.inputs);
                const res = await db.collection('form1').doc('inputs').set(
                    this.$store.state.items
                );
                console.log(res);
            },

        },
        created() {

        }
    }
</script>
