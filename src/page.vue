<template>
    <div>
        <h3>tent : {{tent}}</h3>
        <h3>state : {{state}}</h3>
       
        <div v-if="profileLine">
            userid : {{profileLine.userId}}
            displayName : {{profileLine.displayName}}
        </div>
       
      
        
    </div>
</template>
<script setup>
import { computed,ref } from 'vue';
import {useRoute} from 'vue-router';
import {useLiff} from './hooks/useLiff'
const route = useRoute();
const {onInit} = useLiff();
const profileLine = ref()
onInit((profile) => {
    profileLine.value = profile
    
    // getProfile(profile => {
    //     console.log(profile);
    // })
   
})

let tent = computed(() => route.query.tent)
let state = computed(() => route.query.state)
console.log(route.query);
</script>