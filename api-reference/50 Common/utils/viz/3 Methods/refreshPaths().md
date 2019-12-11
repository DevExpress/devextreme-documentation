---
module: viz/utils
export: refreshPaths
---
---
##### shortDescription
The method to be called every time the active entry in the browser history is modified without reloading the current page.

---
Each data visualization widget addresses its inner elements by their URLs. Those URLs break when the active history entry is modified without reloading the current page (see [Adding and modifying history entries](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries)). As a result, some widget elements may get mixed up or disappear completely. To fix the URLs, call the **refreshPaths()** method right after the history entry  modification, _and_ in the [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate) event handler or, if you use a routing library, in its counterpart.

    <!--JavaScript-->window.history.pushState({ foo: "bar" }, "title", "?foo=bar");
    DevExpress.viz.refreshPaths();

    window.onpopstate = function(event) {
        DevExpress.viz.refreshPaths();
    }

The problem with broken URLs may also emerge if the page uses a path modifying HTML tag; for example, `<base>` or `<iframe>`. To resolve it, set the [pathModified](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/pathModified.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pathModified') option of the widget to *true*.