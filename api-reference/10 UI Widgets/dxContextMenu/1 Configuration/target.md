---
default: undefined
type: String | Node | jQuery
---
---
##### shortDescription
The target element associated with the context menu.

---
Specify this option to indicate the element for which the context menu will be invoked. This option can take on one of the following values.

    <!--JavaScript-->
    //CSS selector
    target: '#targetElement';
 
    //jQuery wrapper
    target: $('#targetElement');
 
    //DOM element
    target: document.getElementById('targetElement');

To align the context menu near this element, use the [position](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#position') option.