<template>
  <div class="day-header">
    {{ day }}
  </div>
</template>

<script>
export default {
  name: 'DayHeader',
  props: {
    day: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.day-header {
  height: 44px;
  border-bottom: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  background-color: var(--Grayscale-800, color(display-p3 0.102 0.1255 0.1529));
  color: #9ca3af;
  font-weight: 500;
  padding: 12px;
}
</style>
