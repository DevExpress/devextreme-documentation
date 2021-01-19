---
id: dxTreeMap.Options.interactWithGroup
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the user will interact with a single tile or its group.

---
By default, the [click](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/click.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#click'), [hoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/hoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#hoverChanged') and [selectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/4%20Events/selectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#selectionChanged') events are fired for the tile that has been clicked, paused on or selected. If you need these events to be passed on to the parent group of the tile, set the **interactWithGroup** option to **true**. This setting impacts appearance as well. For example, when the user pauses on a tile, the whole group to which the tile belongs will apply the hover style.