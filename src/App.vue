<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Button from "@/components/Button.vue";

const links = [
  {name: "Go to Home", link: "/"},
  {name: "Go to About", link: "/about"}
];

let open = false;

function openMenu() {
  open = !open;
  console.log(open);
}

function getClass(){
  console.log("eopdkkdok")
  return {
    'tw-left-1/5' : open,
    'tw-left-[-100%]' : !open
  }
}

</script>

<template>
  <header class="md:tw-flex tw-items-center tw-justify-between">
    <h1>Séverine Coffinot</h1>
    <span class="tw-absolute md:tw-hidden tw-right-6 tw-top-9 tw-text-4xl tw-cursor-pointer" @click="openMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </span>
    <div
      class="md:tw-flex tw-flex-wrap tw-items-center md:tw-space-x-spacer-5 max-md:tw-space-y-spacer-3 max-md:tw-absolute"
      :class="getClass()">
      <template v-for="link in links">
        <router-link class="tw-block" v-bind:to="link.link">{{ link.name }}</router-link>
      </template>
      <Button message="Prendre rendez-vous"></Button>
      <SearchBar></SearchBar>
    </div>
  </header>
  <router-view></router-view>
</template>
