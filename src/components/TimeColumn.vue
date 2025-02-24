<template>
  <div class="time-column">
    <div class="time-header"></div>
    <div class="time-cells">
      <div v-for="hour in hours" :key="hour" class="time-cell">
        <span class="time-label">{{ hour }}</span>
        <div class="time-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeColumn',
  data() {
    return {
      hours: ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM']
    }
  }
}
</script>

<style scoped>
.time-column {
  width: 54px;
  border-right: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  font-size: 10px;
  color: #ffffff;
  font-weight: 500;
}

.time-header {
  height: 44px;
}

.time-cells {
  height: 764px;
  display: flex;
  flex-direction: column;
}

.time-cell {
  flex: 1;
  position: relative;
  padding: 0 12px;
}

.time-label {
  position: absolute;
  top: -6px;
}

.time-divider {
  position: absolute;
  top: 0;
  right: -1287px;
  width: 1287px;
  border-top: 1px solid rgba(55, 65, 81, 1);
}

@media (max-width: 991px) {
  .time-column {
    display: none;
  }
}
</style>