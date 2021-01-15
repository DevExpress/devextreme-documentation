---
id: BaseWidget.Options.redrawOnResize
type: Boolean
default: true
notUsedInTheme: 
---
---
##### shortDescription
Specifies whether to redraw the UI component when the size of the parent browser window changes or a mobile device rotates.

---
When this option is set to _true_, the UI component will be redrawn automatically in case the size of its parent window changes.

[note]To redraw the UI component after the size of its container has changed, call the [render()](/api-reference/10%20UI%20Components/BaseWidget/3%20Methods/render().md '{basewidgetpath}/Methods#render') method of the UI component's instance.