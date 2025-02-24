<template>
  <div class="day-events">
    <div class="date-indicator">{{ getDate() }}</div>
    <EventItem v-for="(event, index) in events" :key="index" :event="event" />
  </div>
</template>

<script>
import EventItem from './EventItem.vue'

export default {
  name: 'DayEvents',
  components: {
    EventItem,
  },
  props: {
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      events: [
        { type: 'school', time: '09:00 - 9:30 AM', title: 'School starts' },
        { type: 'other', time: '09:30 - 11:30 AM', title: 'Some other event' },
        { type: 'meeting', time: '02:00 - 05:00 PM', title: 'Weekly Meeting' },
        { type: 'absent', name: 'Dianna Jones', time: '12:00 AM - 03:00 PM' },
        { type: 'absent', name: 'Mark Mets' },
      ],
    }
  },
  methods: {
    getDate() {
      // This is a placeholder. In a real application, you'd calculate the actual date based on the current week.
      return Math.floor(Math.random() * 28) + 1
    },
  },
}
</script>

<style scoped>
.day-events {
  flex: 1;
  position: relative;
  border-bottom: 1px solid var(--Grayscale-300, color(display-p3 0.8196 0.8353 0.8588));
  padding: 12px;
}

.date-indicator {
  position: absolute;
  top: 8px;
  left: 2px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(72, 159, 254, 1);
  color: #ffffff;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
}
</style>
