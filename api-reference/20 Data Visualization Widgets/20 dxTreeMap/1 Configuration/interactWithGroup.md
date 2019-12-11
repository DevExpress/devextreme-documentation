---
default: false
type: boolean
---
---
##### shortDescription
Specifies whether the user will interact with a single tile or its group.

---
By default, the [click](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/4%20Events/click.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click'), [hoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/4%20Events/hoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#hoverChanged') and [selectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/20%20dxTreeMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#selectionChanged') events are fired for the tile that has been clicked, hovered over or selected. If you need these events to be passed on to the parent group of the tile, set the **interactWithGroup** option to *true*. This setting impacts appearance as well. For example, when the user hovers the cursor over a tile, the whole group to which the tile belongs will apply the hover style.