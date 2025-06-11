<template>
  <div :class="{ 'max-h-screen overflow-hidden': mobileMenu }" class="relative">
    <div id="main" class="relative">
      <div class="bg-grey-50" id="about">
        <div
            class="container flex flex-col items-center py-16 md:py-20 lg:flex-row"
        >
          <div class="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Full Biography
            </h4>
            <p class="pt-6 font-body leading-relaxed text-grey-20" v-html="profile.fullBio">

            </p>
            <h4
                class="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              Student Achievements
            </h4>
            <p  class="pt-6 font-body leading-relaxed text-grey-20" v-html="profile.achievements"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'bio',
  data() {
    return {
      mobileMenu: false,
      profile: {}
    }
  },
  methods: {

    fetch_profile() {
      this.profile = this.$store.getters.getProfile
    }
  },
  created() {
    this.fetch_profile()
  }
}
</script>