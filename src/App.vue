<script setup>
import { useHead } from "@vueuse/head";

useHead({
  link: [{ rel: "icon", href: require("./assets/logoOnly.svg") }],
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
