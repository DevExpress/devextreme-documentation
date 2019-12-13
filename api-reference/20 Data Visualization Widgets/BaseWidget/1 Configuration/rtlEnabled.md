---
id: BaseWidget.Options.rtlEnabled
type: Boolean
default: false
notUsedInTheme: 
---
---
##### shortDescription
Switches the widget to a right-to-left representation.

---
When this option is set to **true**, the widget text flows from right to left, and the layout of elements is reversed. To switch the entire application/site to the right-to-left representation, assign **true** to the **rtlEnabled** field of the object passed to the [DevExpress.config(config)](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') method.

    <!--JavaScript-->DevExpress.config({
        rtlEnabled: true
    });

[note]In a right-to-left representation, SVG elements have the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/direction" target="_blank">direction</a> attribute with the *rtl* value. This might cause problems when rendering left-to-right texts. Use this option if you have only right-to-left texts.