<p align='center'>
  <img src='public/screenshot.png' alt='Boost your productivity with Vue Boost - work smarter, not harder.'/>
</p>
<br/>

<p align='center'>
Vue Boost for Nuxt 3
</p>

<br>

<p align='center'>
Inspired by <a href="https://github.com/blade-01/vueboost">Vue Boost</a>
</p>

<br>

<p align='center'>
<a href="https://vueboost-nuxt3.vercel.app/">Live Demo</a>
</p>

<br>

## Features

- [💚 Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [TailwindCSS](https://tailwindcss.com/)

- 😃 [Use icons from Iconify](https://iconify.design)

- 🌍 [I18n ready](./locales)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 📥 APIs auto importing - use Composition API and others directly

- 🧩 [Reuseable Components](#reuseable-components) - a little something to improve productivity

- 🦾 TypeScript, of course

<br>

## Pre-packed

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.js.org)

### Reuseable Components

- [Parent Folder](/components/reusables/)
  - [Button](/components/reusables/BaseButton.vue) - Reusable button component
  - [Editor](/components/reusables/BaseEditor.vue) - Rich Text Editor Component
  - [Input](/components/reusables/BaseInput.vue) - Form input component (Types: text, email, and password)
  - [File](/components/reusables/BaseFile.vue) - File upload component
  - [Textarea](/components/reusables/BaseTextarea.vue) - Textarea component
  - [Modal](/components/reusables/BaseFile.vue) - Reusable modal component
  - [Phone](/components/reusables/BasePhone.vue) - Phone number validation component
  - [Select](/components/reusables/BaseSelect.vue) - Select dropdown component
  - [Submit Button](/components/reusables/BaseSubmitButton.vue) - Submit Button with loader upon request
  - [Table](/components/reusables/BaseTable.vue) - Data table component
  - [Table Action](/components/reusables/BaseTableAction.vue) - Table Action component (view, edit and delete)
- [Samples Folder](/components/samples/)
  - You can find out how to use these components in the [Samples](/components/samples/) folder or visit [Vue Boost Dashboard](https://vueboost-nuxt3.vercel.app/dashboard) for the visualization

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-community/color-mode-module) - dark and Light mode with auto detection made easy with Nuxt.
- [Tailwind](https://github.com/nuxt-community/tailwindcss-module) - the instant on-demand TailwindCSS engine.
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.

### Plugins

- [Vuelidate](https://vuelidate-next.netlify.app/) - form input field validation libray for Vue
- [Vue Select](https://vue-select.org/) - flexible dropdown list for Vue
- [Vue3 Lazy](https://github.com/liangyuanchai/vue3-plugin-lazy) - image lazy/skeleton loader for Vue
- [Vue3 Quill Editor](https://vueup.github.io/vue-quill/) - text rich editor for vue
- [Vue3 Apexcharts](https://github.com/apexcharts/vue3-apexcharts) - Vue 3 component for ApexCharts to build interactive visualizations in vue.

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/).

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/blade-01/vueboost-nuxt3/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit blade-01/vueboost-nuxt3 my-template
cd my-template
pnpm i or yarn i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

OR

```bash
yarn dev
```

### Build

To build the App, run

```bash
pnpm build
```

OR

```bash
yarn build
```

And you will see the generated file in `dist` that is ready to be served.

### Deploy

Deploy anywhere.

## Why

To boost our collective productivity as developers.
