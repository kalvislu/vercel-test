<template>
  <div class="week-view">
    <TimeColumn />
    <div v-for="day in weekDays" :key="day" class="day-column">
      <DayHeader :day="day" />
      <DayEvents :day="day" />
    </div>
  </div>
</template>

<script>
import TimeColumn from '@/components/TimeColumn.vue'
import DayHeader from '@/components/DayHeader.vue'
import DayEvents from '@/components/DayEvents.vue'

export default {
  name: 'WeekView',
  components: {
    TimeColumn,
    DayHeader,
    DayEvents,
  },
  data() {
    return {
      weekDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }
  },
}
</script>

<style scoped>
.week-view {
  display: flex;
  border-top: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  min-height: 808px;
  overflow: hidden;
  font: 14px Inter, sans-serif;
}

.day-column {
  flex: 1;
  border-right: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .week-view {
    overflow-x: auto;
  }
}
</style>
