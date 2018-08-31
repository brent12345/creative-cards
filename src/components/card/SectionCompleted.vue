'<template>
  <div class="row">
    <div class="form-check form-check-inline">
      <div class="form-check-label">
        <input type="checkbox" v-model="checked" @change="sectionCompleted" class="form-check-input"> Mark Completed
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main.js'
export default {
data() {
  return {
    checked: ''
  }
},
methods: {
  sectionCompleted () {
    EventBus.$emit('mark-as-completed', this.checked)
  }
}
}
</script>

<style>

</style>
'
