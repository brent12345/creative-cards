<template>
  <div @mouseover="showOptions = true"
      @mouseleave = "showOptions = true">
      <transition name="fade">
    <form class="small" v-show="showOptions">
     <label for="selectBox" class="">Font size: </label>
     <select id="selectBox" width="10px" class="custom-select" v-model="setFontSize">
       <option value="42">42px</option>
       <option value="48">48px</option>
       <option value="56">56px</option>
       <option value="64">64px</option>
     </select>
        <div class="form-check form-check-inline">
          <label for="" class="form-check-label">
            <input type="radio" class="form-check-input" value="left" v-model="setTextAlign"> Left
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label for="" class="form-check-label">
            <input type="radio" class="form-check-input" value="center" v-model="setTextAlign"> Center
          </label>
        </div>
        <div class="form-check form-check-inline">
          <label for="" class="form-check-label">
            <input type="radio" class="form-check-input" value="right" v-model="setTextAlign"> Right
          </label>
        </div>
        <div class="form-check form-check-inline">
            <label for="" class="form-check-label">
              <input type="checkbox" class="for-check-input" v-model="setBold"> Bold
            </label>
        </div>
        <div class="form-check form-check-inline">
            <label for="" class="form-check-label">
              <input type="checkbox" class="for-check-input" v-model="setItalic"> Italic
            </label>
        </div>
    </form>
    </transition>
    <p :style="styleObject"
    :class="{ bold: setBold, italic: setItalic }">
    {{ displayText }}
    </p>
  </div>
</template>

<script>
export default {
props: {
  displayText: [String],
  containerHeight: {
    type: Number,
    default: 200
  }
},
data() {
   return {
      showOptions: false,
      setFontSize: null,
      setTextAlign: null,
      setBold: false,
      setItalic: false
   }
 },
 computed: {
   styleObject () {
     return {
       textAlign: this.setTextAlign,
       fontSize: this.setFontSize + 'px',
       height: this.containerHeight + 'px'
     }
   }
 }
}
</script>

<style scoped>
p {
  font-family: 'Tangerine', cursive;
  font-size: 42px;
  line-height: 42px;
  text-shadow: 2px 2px 2px #aaa;
  color: #4d4d4d;
  margin: 5px 0;
  border: 1px dotted grey;
  white-space: pre-line;
  overflow: hidden;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

form {
  position: absolute;
  border-bottom: 1px dotter grey;
  margin-top: 10px;
  margin-bottom: 5px;
  padding-bottom: 5px;
}

select {
  height: 40%;;
}

.custom-select {
  width: 6% !important;
}






</style>
