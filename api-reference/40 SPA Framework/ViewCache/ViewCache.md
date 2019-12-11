---
module: framework/view_cache
type: object
inherits: ..\..\10 UI Widgets\EventsMixin\EventsMixin.md
---
---
##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
An object that stores information about views displayed in the application.

---
An application uses the **viewCache** object to save information on the views that were displayed so that this information is used the next time these views are displayed. This allows you to avoid gathering information on a view each time it is displayed and thus shorten the time a view display process takes. You may need to access the application's view cache. To access the application's view cache, use the [viewCache](/api-reference/40%20SPA%20Framework/HtmlApplication/2%20Fields/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Fields/#viewCache') field of the HtmlApplication object.

You can influence the way the application's view cache works. In addition, you can provide a custom view cache object to be used by the application. For details, refer to the description of the [viewCache](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/viewCache.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache') application configuration option.