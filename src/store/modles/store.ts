import { ref, computed } from "vue";
import { defineStore } from "pinia";



export const useCounterStore = defineStore("counter", () => {
    const count = ref(0); 
    const addCount = computed(()=>{
       return count.value++
    })
    return { count,addCount };
},{persist: true}); 
