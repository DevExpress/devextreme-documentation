---
type: string | Node | jQuery
---
---
##### shortDescription
The target element associated with a popover.

---
Specify this option to indicate the element for which the popover will be invoked. This option can take on one of the following values.

	<!--JavaScript-->//CSS selector
	target: '#targetElement';
 
	//jQuery wrapper
	target: $('#targetElement');
 
	//DOM element
	target: document.getElementById('targetElement');

To align the popover near this element, use the [position](/api-reference/10%20UI%20Widgets/dxPopover/1%20Configuration/position.md '/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#position') option.