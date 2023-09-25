<template>
  <div class="tw-relative tw-flex tw-items-center tw-w-spacer-10 tw-rounded-lg tw-bg-dark-blue tw-overflow-hidden tw-px-2 tw-py-2">
    <div class="tw-grid tw-place-items-center tw-w-12">
      <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-6 tw-w-6" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    </div>

    <input
        class="tw-h-full tw-w-full tw-outline-none tw-text-sm tw-text-white tw-bg-dark-blue tw-pr-2"
        type="text"
        id="search"
        placeholder="Search something.."/>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>

</style>