import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/nazarov/Projects/Personal/Liga/lessons/monorepo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}