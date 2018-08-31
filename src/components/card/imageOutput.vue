<template>
<div class="img-container"
      :style="styleObject"
      @mouseover="showOptions = true"
      @mouseleave="showOptions = false">
  <transition
  enter-active-class="custom-enter-active"
  leave-active-class="custom-leave-active">
  <button type="button" class="btn btn-danger btn-sm"
            v-show="showOptions" @click="clearImageProp">Remove Image</button>
  </transition>
  <img id="outputImage">{{displayImage}}
</div>
</template>

<script>
import Firebase from 'firebase'
export default {
   props:{
     displayImage: {
       type: String
     },
     containerHeight: {
       type: Number,
       default: 200
     },
     clearImageProp: Function
   },
   data() {
     return {
       showOptions: false
     }
   },
   watch: {
     displayImage () {
        var storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage)
        storageRef.getDownloadURL().then((url) => {
          var img = document.getElementById('outputImage')
          img.src = url
          setDraggable();
        } )
     }
   },
   computed: {
   styleObject () {
     return {
       height: this.containerHeight + 'px'
     }
   }
 }
}

function setDraggable () {
  $('#outputImage').draggable();
}
</script>

<style>
.img-container {
  border: 1px dotted grey;
  overflow: hidden;
  margin: 5px 0;
}

button {
  position: absolute;
  z-index: 1;
}

img {
  width: 130%;
}


</style>
