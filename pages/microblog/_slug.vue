<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half-desktop">
            <!-- Micro post -->
            <div class="content has-text-black">
              <h1 class="title">
                {{ page.title }}
              </h1>
              <p class="has-text-dark is-size-6">
                {{ createdAt }}
              </p>
              <nuxt-content :document="page"></nuxt-content>
            </div>

            <post-footer :page="page"></post-footer>
          </div>
        </div>
      </div>
    </div>

    <!-- Surround posts -->
    <post-surround :prev="prev" :next="next" show-route="micropost.show"></post-surround>
  </div>
</template>
<script>
import PostSurround from "~/components/web/PostSurround.vue";
import PostFooter from "~/components/web/PostFooter";
export default {
  name: "micropost",
  transition: "slide",

  components: {
    PostFooter,
    PostSurround,
  },

  computed: {
    createdAt() {
      return this.$moment(this.page.createdAt)
        .locale(this.$store.getters["lang/locale"])
        .format("lll");
    },
  },

  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description },
        { hid: "og:title", property: "og:title", content: this.page.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.page.description,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.page.description,
        },
      ],
    };
  },

  async asyncData({ $content, params }) {
    var slug = params.slug;
    const page = await $content("microblog", slug).fetch();
    const [prev, next] = await $content("microblog")
      .only(["title", "description", "slug", "tags", "updatedAt"])
      .sortBy("updatedAt", "asc")
      .surround(slug)
      .fetch();

    return {
      page,
      prev,
      next,
    };
  },
};
</script>
