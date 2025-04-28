# asboy2035-ui

**ash's personal Vue 3 UI component library 💖**  
_cute. clean. reusable. customizable._

Licensed under **Apache 2.0**

---

## 📦 Install

```bash
npm install asboy2035-ui
```

---

## 🛠 Usage

### Option 1: Use the Plugin (Recommended 💖)

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { installasboy2035ui } from 'asboy2035-ui'

const app = createApp(App)

app.use(installasboy2035ui)
app.mount('#app')
```

✅ Automatically registers all components  
✅ Automatically injects styles — **no manual CSS import needed!**

---

### Option 2: Import Specific Components (Advanced)

```vue
<script setup lang="ts">
import { ashButton, ashInput, ashCard } from 'asboy2035-ui'
import 'asboy2035-ui/dist/asboy2035-ui.css' <!-- if manually importing -->
</script>

<template>
  <ash-card>
    <ash-input placeholder="Type here..." />
    <ash-button>Click me</ash-button>
  </ash-card>
</template>
```

✅ Manually import components you need  
✅ **You must also manually import the CSS** if you don't use the plugin

---

## 🎀 Components

### ✨ Utils

| Component | Usage Example | Purpose |
|-----------|----------------|---------|
| `ashButton` | `<ash-button type="submit">Save</ash-button>` | Customizable button component with native props |
| `ashInput`  | `<ash-input placeholder="Your name" v-model="name" />` | Styled input with two-way binding |
| `ashSpacer` | `<ash-spacer />` | Adds space between elements |
| `ashDivider`| `<ash-divider />` | Simple horizontal divider |
| `ashHero`   | `<ash-hero>Important text</ash-hero>` | Bold hero text component |

---

### ✨ Layout

| Component | Usage Example | Purpose |
|-----------|----------------|---------|
| `ashCard` | `<ash-card>Content here</ash-card>` | Aesthetic padded container |
| `ashGrid` | `<ash-grid>...</ash-grid>` | Responsive grid layout wrapper |
| `ashInteriorItem` | `<ash-interior-item>Inner content</ash-interior-item>` | Decorative inner item wrapper |
| `HStack` | `<h-stack>Item 1 Item 2</h-stack>` | Horizontal stack (flex row) |
| `VStack` | `<v-stack>Item 1 Item 2</v-stack>` | Vertical stack (flex column) |

---

## 🌈 Notes

- **Vue 3.x only** (requires Vue 3)
- **Typescript ready** (`.d.ts` typings included)
- **Auto-injected styles** with plugin install
- **Customizable and composable** 🛠
