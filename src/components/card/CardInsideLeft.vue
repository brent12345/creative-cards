<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
        <cc-text-input @displayTextChanged="textBoxValue1 = $event"/>
        <cc-section-completed></cc-section-completed>
    </div>
    <div class="col-sm-6 card edit-display">
       <cc-text-output :displayText="textBoxValue1" :containerHeight="750"/>
    </div>
  </div>
</template>
<script>
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'
import SectionCompleted from './SectionCompleted.vue'
export default {
  data () {
    return {
      textBoxValue1: null
    }
  },
  components: {
    ccTextInput: TextInput,
    ccTextOutput: TextOutput,
    ccSectionCompleted: SectionCompleted
  }
}
</script>

<style>

</style>

