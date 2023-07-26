import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        darkMode: true,
        visited: false,
    }),

    getters: {
        getMode: (state) => state.darkMode,
        getVisited: (state) => state.visited,
    },

    actions: {
        setMode() {
            this.darkMode = !this.darkMode;
        },
        setVisited() {
            this.visited = true;
        }
    }
})