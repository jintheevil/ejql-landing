import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        darkMode: true
    }),

    getters: {
        getMode: (state) => state.darkMode
    },

    actions: {
        setMode() {
            this.darkMode = !this.darkMode;
        }
    }
})