<template>
  <div>
    <div class="content">
      <!-- Article title -->
      <h2 class="text-2xl sm:text-3xl leading-tight font-bold pb-5">
        {{ page.title }}
      </h2>

      <!-- Content -->
      <nuxt-content :document="page"></nuxt-content>
    </div>
  </div>
</template>
<script>
export default {
  name: "wiki-article",
  transition: "slide",

  async asyncData({ $content, params }) {
    var slug = params.slug;
    var category = params.category;
    const page = await $content(`wiki/${category}/${slug}`).fetch();

    return {
      page,
    };
  },
};
</script>
