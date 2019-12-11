---
id: positionConfig
type: Object
---
---
##### shortDescription
The **position** object specifies the widget positioning options.

---
This object is passed to the **position** configuration option of a widget that overlays the main screen ([LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/'), [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/'), [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/'), and [Toast](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')).

The positionConfig object may contain the following fields: **my**, **at**, **of**, **offset** and **collision**. Look at the following sentence to see how to use these fields to position the required element against the target element.

"Place **my** 'left' side **at** the 'left bottom' corner **of** the '#targetElement'." The italic quoted phrase located after each option name within the sentence represents a value of the appropriate option.