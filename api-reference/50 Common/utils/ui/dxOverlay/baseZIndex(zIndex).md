---
id: ui.dxOverlay.baseZIndex(zIndex)
module: ui/overlay
export: dxOverlay.baseZIndex
---
---
##### shortDescription
Specifies the base z-index for all overlay widgets.

##### param(zIndex): Number
The z-index value.

---
The z-index of all overlay widgets located on a page is calculated based on the value passed to this method. Since an overlay widget is added, its z-index is increased by one relative to a previously added overlay widget.

The following example demonstrates how to call the method.

    DevExpress.ui.dxOverlay.baseZIndex(2000);
    // ===== or when using modules =====
    import * as overlay from 'devextreme/ui/overlay';
    overlay.baseZIndex(2000);

By default, the base z-index for all overlay widgets except **Toast** is 1500.

[note]The base z-index for **Toast** widgets is greater than the value specified by this method by 8000. For example, if you pass 2000 to the **baseZIndex** method, the **Toast** base z-index is 10000.

The method affects the following widgets.

- [LoadPanel](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')
- [Popover](/api-reference/10%20UI%20Widgets/dxPopover '/Documentation/ApiReference/UI_Widgets/dxPopover/')
- [Popup](/api-reference/10%20UI%20Widgets/dxPopup '/Documentation/ApiReference/UI_Widgets/dxPopup/')
- [Toast](/api-reference/10%20UI%20Widgets/dxToast '/Documentation/ApiReference/UI_Widgets/dxToast/')
- [Tooltip](/api-reference/10%20UI%20Widgets/dxTooltip '/Documentation/ApiReference/UI_Widgets/dxTooltip/')