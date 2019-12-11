---
type: boolean
---
---
##### shortDescription
Specifies whether or not [view caching](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache') is disabled.

---
By default, this option is not specified, which means that view caching is enabled. In this instance, the first time a view is displayed, it is cached. Thereafter, when the view must be displayed repeatedly, it is obtained from the cache, so that the application does not need to create a view each time it is displayed. For details on the view display process, refer to the [View Life Cycle](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/8%20View%20Life%20Cycle.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle') topic.

To disable view caching, set this option to *true*. In this mode, each view will be created and rendered each time it is displayed.

To disable the caching of a specific view only, set the [disableCache](/api-reference/40%20SPA%20Framework/Markup%20Components/dxView/1%20Configuration/disableCache.md '/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#disableCache') configuration option of the dxView component representing this view to *true*.