import Vue from 'vue'
import App from './App.vue'

Vue.component('text-input', {
  template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
  data () {
    return {
      textValue: 'Type here'
    }
  },
  methods: {
  changeText () {
    this.textValue = 'text changed'
  }
}
})

new Vue({
  el: '#app',
  //render: h => h(App)
})
