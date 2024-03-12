---
id: dxSplitterItem.size
type: Number | String
default: undefined
---
---
##### shortDescription
Specifies the size of an item (pane) in pixels or as a percentage. 

---
If you do not specify pane sizes, the UI component splits up the panes automatically with even distribution. 

[note]

- The **size** value must not exceed [maxSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#maxSize) or be less then [minSize](/Documentation/ApiReference/UI_Components/dxSplitter/Interfaces/dxSplitterItem/#minSize).

- The total pane size should not exceed Splitter size.

[/note]