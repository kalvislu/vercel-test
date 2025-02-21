<!-- EXAMPLE PAGE -->

<template>
  <div class="d-flex flex-column gap-4">
    <div>
      We use <a href="https://matteo-gabriele.gitbook.io/vue-gtag/" target="_blank">vue-gtag</a> plugin for interactions
      with google analytics.
      <div>
        You can use
        <a
          href="https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna"
          target="_blank"
          >this</a
        >
        debugger plugin to see analytics events in the console
      </div>
    </div>
    <div class="d-flex gap-4">
      <e-btn @click="$gtag.event('CLICK_EVENT_TEMPLATE', {})"> Send event (template) </e-btn>
      <e-btn @click="sendAnalyticsEvent"> Send event (composition api) </e-btn>
    </div>
  </div>
</template>

<script setup>
/**
 *  packages
 *  - vue-gtag
 */
import { useGtag } from 'vue-gtag-next'

const sendAnalyticsEvent = () => {
  const { event } = useGtag()
  event('CLICK_EVENT_COMPOSITION_API')
}
</script>
