<template>
  <div class="calendar-controls">
    <div class="left-controls">
      <div class="date-navigation">
        <button class="nav-btn" aria-label="Previous month">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/3c1f51d328b659fdc1e1dd8f1b80bc6c09d650e6269df8c91ebfeb81e404a44f?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
            alt=""
            class="icon" />
        </button>
        <div class="current-date">January 2025</div>
        <button class="nav-btn" aria-label="Next month">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/ecb9ff81a75459d3a88aa25d076597fb1b560136c7fe6d1124f2c5df991154f4?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
            alt=""
            class="icon" />
        </button>
      </div>
      <div class="view-toggle">
        <button class="toggle-btn">Month</button>
        <button class="toggle-btn active">Week</button>
      </div>
      <button class="today-btn">Go to today</button>
      <button class="filter-btn" aria-label="Filter">
        <span class="visually-hidden">Filter</span>
      </button>
    </div>
    <div class="right-controls">
      <button class="action-btn" aria-label="More options">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/8fa6feec386322c493fbfcd8c62ddce19c71e698b5808c820515613099b37641?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
          alt=""
          class="icon" />
      </button>
      <button class="add-btn">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/38d9faf7b7f8476181d3bfe72d56aca7/c5dac19569641733798ce3eb8743c82ddd239c2383c6c2c60de5c5ab3dce25d5?apiKey=38d9faf7b7f8476181d3bfe72d56aca7&"
          alt=""
          class="icon" />
        <span>Add</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarControls',
}
</script>

<style scoped>
.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  font: 600 14px/1 Inter, sans-serif;
}

.left-controls,
.right-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.date-navigation {
  display: flex;
  align-items: center;
  border: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  border-radius: 6px;
  overflow: hidden;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
}

.current-date {
  padding: 0 16px;
  color: #9ca3af;
}

.view-toggle {
  display: flex;
  background-color: var(--Base-Graybase, color(display-p3 0.0866 0.0911 0.0958));
  border-radius: 6px;
  padding: 4px;
}

.toggle-btn {
  padding: 0 20px;
  height: 28px;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
}

.toggle-btn.active {
  background-color: var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  border-radius: 4px;
  color: #f3f4f6;
}

.today-btn,
.filter-btn {
  height: 36px;
  background-color: var(--Base-Graybase, color(display-p3 0.0866 0.0911 0.0958));
  border: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
}

.today-btn {
  padding: 0 16px;
}

.filter-btn {
  width: 36px;
}

.action-btn {
  width: 36px;
  height: 36px;
  background-color: var(--Base-Graybase, color(display-p3 0.0866 0.0911 0.0958));
  border: 1px solid var(--Grayscale-700, color(display-p3 0.2157 0.2549 0.3176));
  border-radius: 6px;
  cursor: pointer;
}

.add-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  background-color: var(--Primary-300, color(display-p3 0.2824 0.6235 0.9961));
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
}

.icon {
  width: 20px;
  height: 20px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 991px) {
  .calendar-controls {
    flex-wrap: wrap;
    gap: 12px;
  }
}
</style>
