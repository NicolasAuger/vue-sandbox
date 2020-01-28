<template>
  <div class="page camera">
    <div class="row">
      <div class="col col-12">
        <BreadCrumb
          class="text-left"
          :items="breadCrumb"
        />
      </div>
    </div>
    <div class="row">
      <div class="col col-12">
        <PageTitle :text="pageTitle" :icon="pageIcon"/>
      </div>
    </div>

    <main v-on:load="cameraStart" id="camera">
        <video id="camera-view" autoplay playsinline></video>
        <img src="//:0" alt="" id="camera-output">
    </main>
  </div>
</template>

<script>
import BreadCrumb from './fragments/BreadCrumb.vue'
import PageTitle from './fragments/PageTitle.vue'

const constraints = { video: { facingMode: "user" }, audio: false }

export default {
  name: 'Camera',
  data() {
    return {
      breadCrumb: ['Home', 'Camera'],
      pageTitle: 'Camera',
      pageIcon: 'web',
    }
  },
  methods: {
    cameraStart() {
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(stream) {
            const cameraView = document.querySelector("#camera-view")
            const track = stream.getTracks()[0];
            cameraView.srcObject = stream;
      })
      .catch(function(error) {
          console.error("Oops. Something is broken.", error);
      });
    }
  },
  mounted: function() {
    this.cameraStart()
  },
  components: { BreadCrumb, PageTitle },
}
</script>

<style lang="stylus" scoped>
.camera

  #camera, #camera-view
    height: auto
    object-fit: cover

  #camera-view
    transform: scaleX(-1)
</style>
