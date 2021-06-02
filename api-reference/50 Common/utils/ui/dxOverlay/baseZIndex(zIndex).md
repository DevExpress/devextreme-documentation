---
id: ui.dxOverlay.baseZIndex(zIndex)
module: ui/overlay
export: dxOverlay.baseZIndex
---
---
##### shortDescription
Specifies the base z-index for all overlay UI components.

##### param(zIndex): Number
The z-index value.

---
The z-index of all overlay UI components located on a page is calculated based on the value passed to this method. Since an overlay UI component is added, its z-index is increased by one relative to a previously added overlay UI component.

The following example demonstrates how to call the method.

    DevExpress.ui.dxOverlay.baseZIndex(2000);
    // ===== or when using modules =====
    import { baseZIndex } from 'devextreme/ui/overlay';
    baseZIndex(2000);

By default, the base z-index for all overlay UI components except Toast is 1500.

[note]The base z-index for Toast UI components is greater than the value specified by this method by 8000. For example, if you pass 2000 to the **baseZIndex** method, the Toast base z-index is 10000.

The method affects the following UI components.

- [LoadPanel](/api-reference/10%20UI%20Components/dxLoadPanel '/Documentation/ApiReference/UI_Components/dxLoadPanel/')
- [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/')
- [Popup](/api-reference/10%20UI%20Components/dxPopup '/Documentation/ApiReference/UI_Components/dxPopup/')
- [Toast](/api-reference/10%20UI%20Components/dxToast '/Documentation/ApiReference/UI_Components/dxToast/')
- [Tooltip](/api-reference/10%20UI%20Components/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/')
