<template>
  <div class="filter-bar mb-2">
    <div class="bg-light d-flex justify-content-between p-2 rounded">
      <!-- @click="filter_toggle = !filter_toggle" -->
      <div class="cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        <i class="fa-solid fa-filter"></i> Filter Values
      </div>
      <div class="cursor-pointer">
        Add <i class="fa-solid fa-circle-plus"></i>
      </div>
    </div>

    <div class="collapse" id="collapseExample">
      <div class="card p-2 shadow-sm">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['add-data'],
  data() {
    return {
      filter_toggle: false,
    };
  },
};
</script>

<style>
</style>
