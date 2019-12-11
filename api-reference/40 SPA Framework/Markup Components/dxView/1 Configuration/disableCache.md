---
type: Boolean
---
---
##### shortDescription
Indicates whether to cache the view.

---
By default, this option is not specified, which means that [caching](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache') of this view is enabled. In this instance, the first time the view is displayed - it is cached. Each following time when this view must be displayed repeatedly, it is obtained from the cache. This allows the application to not have to create this view each time it is displayed. For details on the process of the view display, refer to the [View Life Cycle](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.

To disable view caching, set this option to **true**. In this mode, this view will be created and rendered each time it is displayed.

To disable caching totally for all application views, set the application's [disableViewCache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/disableViewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#disableViewCache') configuration option to **true**.