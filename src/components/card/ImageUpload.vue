<template>
  <div class="row">
    <div class="col-sm-12">
      <h4>Upload Image:</h4>
      <div class="form-group">
        <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
      </div>
      <br />
      <progress value="" max="100" id="progressBar"></progress>
      <br />
      <img id="image">
      <button type="button" id="SetImageButton" @click="setImage" style="display: none;">Set Image</button>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data() {
    return {
      file: null
    }
  },
  methods: {
    uploadFile (event) {

      document.getElementById('SetImageButton').style.display = "none"
      //console.log(event)
      this.file = event.target.files[0]
      var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name)
      var upload = storageRef.put(this.file)
      // create thumbnail image
      var reader = new FileReader()
      reader.readAsDataURL(this.file)

      reader.onload = function(e) {
        document.getElementById('image').src = e.target.result
      }
      // progress bar
      upload.on('state_changed', (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById('progressBar').value = progress;

          if(progress === 100){
            document.getElementById('SetImageButton').style.display = 'inline-block'
          }
      })

    },
    setImage () {
      this.$emit('displayImageChanged', this.file.name)
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 200px;
  }
</style>
