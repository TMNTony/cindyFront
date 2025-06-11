<template>
  <div>
    <div
        class="mx-auto grid w-full items-center   gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
    >
      <div v-for="video in videos" :key="video.id"
           class=" mx-auto  md:mx-0">
        <div class="relative aspect-w-16 aspect-h-9">
          <iframe
              :src="video.videoURL"
              allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "videoGallery",

  data() {
    return {
      videos: [],

    }
  },
  methods: {
    getVideos() {
      this.videos = this.$store.getters.getVideos;
    },
  },
  created() {
    this.getVideos();

  },
}
</script>

<style>

</style>