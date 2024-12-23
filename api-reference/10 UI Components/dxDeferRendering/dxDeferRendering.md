---
id: dxDeferRendering
module: ui/defer_rendering
export: default
inherits: Widget
---
---
##### shortDescription
The DeferRendering is a UI component that waits for its content to be ready before rendering it. While the content is getting ready, the DeferRendering displays a loading indicator.

##### lib
dx.web.js, dx.all.js

---
[important]

This component is **deprecated**. To defer rendering in other components, enable the corresponding [deferRendering](/api-reference/10%20UI%20Components/dxAccordion/1%20Configuration/deferRendering.md '/Documentation/ApiReference/UI_Components/dxAccordion/Configuration/#deferRendering') properties. You can also create a [loading indicator](/concepts/05%20UI%20Components/LoadIndicator/00%20Overview.md '/Documentation/Guide/UI_Components/LoadIndicator/Overview/') and display it based on your logic.

---
##### Angular

For details on how to defer loading in {Framework}, refer to the following help topic: [Deferred loading with @defer](https://angular.dev/guide/templates/defer).

##### Vue

For details on how to defer loading in {Framework}, refer to the following help topic: [Suspense](https://vuejs.org/guide/built-ins/suspense).

##### React

For details on how to defer loading in {Framework}, refer to the following help topics: [Suspense](https://react.dev/reference/react/Suspense) and [useDeferredValue](https://react.dev/reference/react/useDeferredValue).

---

[/important]

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget