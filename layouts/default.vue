<template>
  <div class="layout">
    <navbar></navbar>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
