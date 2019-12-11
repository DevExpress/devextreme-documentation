---
default: 5
type: Number
---
---
##### shortDescription
Specifies a limit for the views that can be [cached](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache').

---
When adding information about a view to a filled cache, the first added view is removed from the cache, releasing a place for the last view.

When a view is requested from the cache to be displayed repeatedly, it becomes the last in the cache stack.

For details on the process of view caching and displaying, refer to the [View Life Cycle](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.