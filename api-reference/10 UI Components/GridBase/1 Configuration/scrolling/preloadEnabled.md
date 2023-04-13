---
id: GridBase.Options.scrolling.preloadEnabled
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the UI component should load adjacent pages. Applies only if **scrolling**.[mode](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/scrolling/mode.md '{basewidgetpath}/Configuration/scrolling/#mode') is *"virtual"* or *"infinite"*.

---
In virtual and infinite scrolling modes, pages are loaded on demand. If you set this property to **true**, the adjacent pages are loaded in advance for smoother scrolling. This property can reduce the performance on older devices.