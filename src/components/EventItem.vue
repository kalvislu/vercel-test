<template>
  <div :class="['event-item', `event-${event.type}`]">
    <div v-if="event.type === 'absent'" class="absent-event">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/a662241a50ce6cde642730bc91f9f53dcac266c50b92b6ffbe161d3a7c0fff6c?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
        alt=""
        class="event-icon" />
      <div class="event-details">
        <div class="event-time">{{ event.time }}</div>
        <div class="event-title">{{ event.name }}</div>
        <div class="event-status">Absent</div>
      </div>
    </div>
    <template v-else>
      <div class="event-indicator"></div>
      <div class="event-details">
        <div class="event-time">{{ event.time }}</div>
        <div class="event-title">{{ event.title }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.event-item {
  border-radius: 6px;
  padding: 4px;
  margin-bottom: 4px;
  overflow: hidden;
}

.event-school {
  background-color: rgba(0, 0, 0, 0.16);
}

.event-other,
.event-meeting {
  background-color: rgba(0, 0, 0, 0.25);
}

.event-absent {
  background-color: rgba(0, 0, 0, 0.25);
}

.absent-event {
  display: flex;
  align-items: center;
  gap: 4px;
}

.event-icon {
  width: 14px;
  height: 14px;
}

.event-indicator {
  width: 3px;
  height: 100%;
  border-radius: 4px;
}

.event-school .event-indicator {
  background-color: var(--Extended-Orange-500, color(display-p3 0.9686 0.5059 0.4));
}

.event-other .event-indicator {
  background-color: var(--Extended-Blue-500, color(display-p3 0.0746 0.0999 0.708));
}

.event-meeting .event-indicator {
  background-color: var(--Extended-Lime-400, color(display-p3 0.5255 0.5922 0.0314));
}

.event-details {
  display: flex;
  flex-direction: column;
}

.event-time {
  color: #ffffff;
  font-weight: 500;
}

.event-title {
  color: #9ca3af;
  font-weight: 400;
}

.event-status {
  color: #9ca3af;
  font-weight: 400;
}
</style>
