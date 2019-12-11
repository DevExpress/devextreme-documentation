---
default: false
type: string | Node | jQuery
---
---
##### shortDescription
Specifies the element used to invoke the context menu.

---
If this option is defined, the context menu is invoked on the specified element click.

This option can take on one of the following values.

    <!--JavaScript-->
    //CSS selector
    invokingElement: '#myElement';
 
    //jQuery wrapper
    invokingElement: $('#myElement');
 
    //DOM element
    invokingElement: document.getElementById('myElement');

The option makes sense only if the [enabled](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/alternativeInvocationMode/enabled.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/alternativeInvocationMode/#enabled') option is set to *true*.