# asboy2035-ui
ash's personal Vue 3 UI component library 💖  
cute. clean. reusable. customizable.

**Apache 2.0**

---

## Install

```bash
npm install asboy2035-ui
```

---

## Usage

Import specific components:

```vue
<script setup lang="ts">
import { ashButton, ashInput, ashCard } from 'asboy2035-ui'
</script>

<template>
  <ash-card>
    <ash-input placeholder="Type here..." />
    <ash-button>Click me</ash-button>
  </ash-card>
</template>
```

&& import the stylesheet (should be removed in the future, but I'm new to this):

```ts
import 'asboy2035-ui/dist/asboy2035-ui.css'
```

---

## Components ✨

### Utils
| Component | Usage Example | Purpose |
|-----------|----------------|---------|
| `ashButton` | `<ash-button type="submit">Save</ash-button>` | Customizable button component with native props |
| `ashInput`  | `<ash-input placeholder="Your name" v-model="name" />` | Styled input with native props support |
| `ashSpacer` | `<ash-spacer />` | Adds space between elements |
| `ashDivider`| `<ash-divider />` | Simple horizontal line divider |
| `ashHero`   | `<ash-hero>Important text</ash-hero>` | Big bold attention-grabber text |

---

### Layout
| Component | Usage Example | Purpose |
|-----------|----------------|---------|
| `ashCard` | `<ash-card>Content here</ash-card>` | Aesthetic container with padding & styling |
| `ashGrid` | `<ash-grid>...</ash-grid>` | Grid layout wrapper |
| `ashInteriorItem` | `<ash-interior-item>...</ash-interior-item>` | Styled content wrapper for inner elements |
| `HStack` | `<h-stack>Item 1 Item 2</h-stack>` | Flex row (horizontal stack) |
| `VStack` | `<v-stack>Item 1 Item 2</v-stack>` | Flex column (vertical stack) |
