---
id: Format.precision
type: Number
---
---
##### shortDescription
Specifies a precision for values of numeric or currency [format types](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/LabelsCustomization/"
}

[note]

When you specify a precision for a *"decimal"* format type, it applies to the integer part instead of the fractional part of a decimal number:

    <!-- tab: JavaScript-->
    const decimalNumber = 1.234;

    format: {
        type: "decimal",
        precision: 2
    }
    // 01.234

To apply the precision to the fractional part, use the *"fixedPoint"* format type:

    <!-- tab: JavaScript-->
    const decimalNumber = 1.234;

    format: {
        type: "fixedPoint",
        precision: 2
    }
    // 1.23

[/note]