<template>
  <LightGallery
      class="flex flex-wrap items-center justify-center"
      :settings="{ plugins: plugins, dynamicEl: gallery }"
      :onInit="onInit"
  >
      <a v-for="photo in gallery"
         data-lg-size="1406-1390"
          class="gallery-item"
          :data-src="'src/assets/img/' + photo.pictureURL"
          :data-sub-html=photo.caption
      >
        <img class="img-responsive custom-image" :src="'src/assets/img/' + photo.pictureURL" :alt="photo.caption" />
      </a>
  </LightGallery>
</template>

<script>
import LightGallery from 'lightgallery/vue/LightGalleryVue.umd'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

let lightGallery = null

export default {
  name: "imageGallery",
  components: {LightGallery},

  watch: {
    gallery(newVal, oldVal) {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },

  data: () => ({
    plugins: [lgZoom, lgThumbnail],
    gallery: [],
  }),

  methods: {
    onInit(detail) {
      lightGallery = detail.instance
    },
    getPhotos() {
      this.gallery = this.$store.getters.getImages;
    },
  },
  mounted() {
    this.getPhotos();
  },
}
</script>

<style>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';


.custom-image {
  height: 240px;
  width: 240px;
  margin: 1rem;
}
</style>
