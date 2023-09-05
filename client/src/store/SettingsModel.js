import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        darkMode: true,
        visited: false,
        modal: false,
    }),

    getters: {
        getMode: (state) => state.darkMode,
        getVisited: (state) => state.visited,
        getModal: (state) => state.modal,
    },

    actions: {
        setMode() {
            this.darkMode = !this.darkMode;
        },
        setVisited() {
            this.visited = true;
        },
        setModal() {
            this.modal = !this.modal;
        }
    }
})