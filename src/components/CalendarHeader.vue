<template>
  <header class="calendar-header">
    <nav class="calendar-nav">
      <button class="nav-tab active" aria-current="page">
        <span>Events</span>
        <div class="active-indicator"></div>
      </button>
      <button v-for="tab in tabs" :key="tab" class="nav-tab">
        <span>{{ tab }}</span>
        <div class="inactive-indicator"></div>
      </button>
    </nav>
    <button class="open-timetable-btn">
      <span>Open timetable</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/b39f30042a1d9f740c8d9a49b35384ebcbad71c77adce7f11e090d2f86ae7ae6?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
        alt=""
        class="icon" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'CalendarHeader',
  data() {
    return {
      tabs: ['Classes', 'Teachers', 'Rooms', 'Test plan', 'My bookings'],
    }
  },
}
</script>

<style scoped>
.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  border-bottom: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  color: #9ca3af;
  font: 400 16px Inter, sans-serif;
}

.calendar-nav {
  display: flex;
  gap: 16px;
}

.nav-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 44px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
}

.nav-tab.active {
  color: #489ffe;
}

.active-indicator {
  width: 100%;
  height: 2px;
  background-color: var(--Primary-300, color(display-p3 0.2824 0.6235 0.9961));
  margin-top: 18px;
}

.inactive-indicator {
  width: 100%;
  height: 1px;
  background-color: var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  margin-top: 19px;
}

.open-timetable-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--Base-Graybase, color(display-p3 0.0866 0.0911 0.0958));
  border: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 991px) {
  .calendar-header {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
</style>
