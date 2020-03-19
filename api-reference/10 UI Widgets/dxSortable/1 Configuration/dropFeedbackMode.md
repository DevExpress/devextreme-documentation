---
id: dxSortable.Options.dropFeedbackMode
acceptValues: 'push' | 'indicate'
type: String
default: 'push'
---
---
##### shortDescription
Specifies how to highlight the item's drop position.

---
This option accepts the following values:

- *"push"*    
  Items move apart with animation, making free space for the dragged item to be placed. To use this mode, make sure [allowDropInsideItem](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#allowDropInsideItem) is disabled.

- *"indicate"*    
  Items do not animate, a blue square appears at the place where the dragged item is going to be placed.
 
