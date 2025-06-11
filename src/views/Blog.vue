<template>
  <div class="bg-grey-50" id="blog">
    <div class="container py-16 md:py-20">
      <h2
          class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        My Blog!
      </h2>
      <h4
          class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        Check out my latest posts!
      </h4>
      <div
          class="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
      >
        <div v-if="posts.length === 0">
          <div class="shadow">
            <div class="relative">
            <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
            ></span>
            </div>
            <div class="bg-white px-5 py-6 xl:py-8">
            <span class="block font-body text-lg font-semibold text-black"
            >No Posts Yet</span
            >
              <span class="block pt-2 font-body text-grey-20"
              >Check back later for updates!</span
              >
            </div>
          </div>
        </div>
        <div v-for="post in posts" :key="post.title">
          <router-link :to="{name: 'blogPost', params: {id: post._id }}" class="shadow">
            <div class="relative">
            <span
                class="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
            ></span>


            </div>
            <div class="bg-white px-5 py-6 xl:py-8">
            <span class="block font-body text-lg font-semibold text-black"
            >{{ post.title }}</span
            >
              <span class="block pt-2 font-body text-grey-20"
              >{{ post.description }}</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    getPosts() {
      this.posts = this.$store.getters.getPosts;

    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style></style>
