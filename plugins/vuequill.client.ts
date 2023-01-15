import { QuillEditor } from '@vueup/vue-quill';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('QuillEditor', QuillEditor);
});
