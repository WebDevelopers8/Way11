import {defineStore} from "pinia";
import {ref} from "vue";


export const useControlStore = defineStore('control' , () => {

    const forcedScroll = ref(false);

    function temporarilyAllowForcedScroll() {
        forcedScroll.value = true;
        setTimeout(() => forcedScroll.value = false, 1000)
    }

    return {forcedScroll, temporarilyAllowForcedScroll}
})