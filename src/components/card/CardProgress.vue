<template>
 <div class="row">
   <div class="col-sm-12">
     <p>Completed: <span id="counter">0</span>/4:</p>
     <progress value="0" max="100" id="cardProgress">0%</progress>
   </div>
 </div>
</template>

<script>
import { EventBus } from '../../main.js'

export default {
 created: function () {
   console.log("event created")
   EventBus.$on('mark-as-completed', function(data) {
     console.log("in event bus")
     if(data) {
       console.log("up date checked")
       document.getElementById('counter').innerText++;
       document.getElementById('cardProgress').value+=25;
       console.log(document.getElementById('counter').innerText)
     } else {
       document.getElementById('counter').innerText--;
       document.getElementById('cardProgress').innerText-=25;
     }
   })
 }
}
</script>

<style scoped>
  progress {
    width: 100%;
  }
</style>

