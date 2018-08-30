<template>
  <div>

    <h1 class="text-center">Creative Cards</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardFront'">Front</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideLeft'">Inside Left</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideRight'">Inside Right</a></li>
      <li class="nav-item"><a class="nav-link" @click="pageSelected='cardBack'">Back</a></li>

    </ul>

  </div>

</template>
<script>
export default {
 data() {
   return {
     pageSelected: null
   }
 },
 watch: {
   pageSelected: function () {
     this.$emit('pageWasChanged', this.pageSelected)
   }
 }
}
</script>
<style>

</style>
