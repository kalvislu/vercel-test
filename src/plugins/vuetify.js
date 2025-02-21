import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import { config } from '@k12tech/ekool-vue-framework/src/main.js'

import { EBtn } from '@k12tech/ekool-vue-framework/src/components/EBtn'
import { EBtnGroup, EBtnGroupItem } from '@k12tech/ekool-vue-framework/src/components/EBtnGroup'
import { EHint } from '@k12tech/ekool-vue-framework/src/components/EHint'
import { ESelect } from '@k12tech/ekool-vue-framework/src/components/ESelect'
import { ESwitch } from '@k12tech/ekool-vue-framework/src/components/ESwitch'

const vuetify = createVuetify({
  components,
  directives,
  aliases: {
    EBtn,
    EBtnGroup,
    EBtnGroupItem,
    ESelect,
    EHint,
    ESwitch,
  },
  ...config,
})

export default vuetify
