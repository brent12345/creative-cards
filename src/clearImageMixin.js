export const clearImageMixin = {
  methods: {
    clearImage () {
      if(this.imageName != '') {
      this.imageName = 'raccons.jpg'
      }
    }
  }
}
