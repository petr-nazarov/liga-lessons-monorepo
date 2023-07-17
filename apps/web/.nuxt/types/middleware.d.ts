import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/nazarov/Projects/Personal/Liga/lessons/monorepo/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}