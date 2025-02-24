<template>
  <div class="calendar-container">
    <CalendarHeader />
    <CalendarControls />
    <WeekView />
  </div>
</template>

<script>
import CalendarHeader from '@/components/CalendarHeader.vue'
import CalendarControls from '@/components/CalendarControls.vue'
import WeekView from './WeekView.vue'

export default {
  name: 'CalendarView',
  components: {
    CalendarHeader,
    CalendarControls,
    WeekView,
  },
}
</script>

<style scoped>
.calendar-container {
  border-radius: 10px;
  border: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  box-shadow: 0px 1px 2px 0px color(display-p3 0 0 0 / 0.35), 0px 2px 8px 0px color(display-p3 0 0 0 / 0.22);
  background-color: var(--Grayscale-800, color(display-p3 0.102 0.1255 0.1529));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}
</style>
