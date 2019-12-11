---
##### shortDescription
A static method that specifies the base z-index for all overlay widgets.

##### param(zIndex): number
The z-index value.

---
The z-index of all overlay widgets located on a page is calculated based on the value passed to this method. Since an overlay widget is added, its z-index is increased by one relative to a previously added overlay widget.

The following example demonstrates how to call the method.

    <!--JavaScript-->
    $(function(){
        DevExpress.ui.dxOverlay.baseZIndex(2000);
    });

By default, base z-index for all overlay widgets except **Toast** is 1500.

[note]Base z-index for **Toast** widgets is greater than the value specified by this method by 8000. For example, if you pass 2000 to the **baseZIndex** method, the **Toast** base z-index is 10000.