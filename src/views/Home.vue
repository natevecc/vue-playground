<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <VuePlayground msg="Welcome to NateVeccs Think-tank!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VuePlayground from "@/components/VuePlayground.vue";

export default {
  name: "home",
  components: {
    VuePlayground,
  }
};
</script>
