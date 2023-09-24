<template>
  <button class="tw-bg-dark-blue tw-rounded tw-shadow tw-text-white tw-duration-500 tw-px-6 tw-py-2 tw-cursor-pointer">{{ message }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ['message']
}
</script>

<style scoped>
  button:hover {
    color: var(--var-light);
  }

  button {
    font-weight: bold;
  }
</style>