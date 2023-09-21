<script setup>

import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <header class="tw-flex tw-items-center tw-justify-between">
    <h1>Séverine Coffinot</h1>
    <div class="tw-flex tw-space-x-spacer-5">
      <router-link class="tw-bg-dark-blue tw-rounded-lg tw-py-spacer-2 tw-px-spacer-4" to="/">Go to Home</router-link>
      <router-link class="tw-bg-dark-blue tw-rounded-lg tw-py-spacer-2 tw-px-spacer-4" to="/about">Go to about</router-link>
      <SearchBar></SearchBar>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>

</style>
