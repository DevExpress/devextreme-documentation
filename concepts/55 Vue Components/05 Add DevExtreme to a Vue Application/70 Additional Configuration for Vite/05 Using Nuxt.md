Nuxt uses server-side rendering (SSR) as the default deployment. DevExtreme Vue components do not support SSR. To disable this Nuxt functionality, do one of the following:

- Disable SSR for an entire application in the `nuxt.config.ts` file:

        <!-- tab: nuxt.config.ts -->
        export default defineNuxtConfig({
            ssr: false,
        })

- Use [route rules](https://nuxt.com/docs/guide/concepts/rendering#route-rules) to disable SSR only for views that contain DevExtreme components.

- Use the `.client` prefix for Vue components that contain DevExtreme components. Refer to the following article for additional information: [.client Components](https://nuxt.com/docs/guide/directory-structure/components#client-components).