import './global.css'

import {
  ashButton,
  ashInput,
  ashSpacer,
  ashDivider,
  ashHero,
  ashCard,
  ashGrid,
  ashInteriorItem,
  HStack,
  VStack
} from './index'

import type { App } from 'vue'

export default {
  install(app: App) {
    app.component('AshButton', ashButton)
    app.component('AshInput', ashInput)
    app.component('AshSpacer', ashSpacer)
    app.component('AshDivider', ashDivider)
    app.component('AshHero', ashHero)
    app.component('AshCard', ashCard)
    app.component('AshGrid', ashGrid)
    app.component('AshInteriorItem', ashInteriorItem)
    app.component('HStack', HStack)
    app.component('VStack', VStack)
  }
}