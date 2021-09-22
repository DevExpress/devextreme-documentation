A field panel is an element that displays pivot grid fields involved in summary calculation. This panel consists of four field areas: column, row, data, and filter. Users can drag and drop fields between these areas.

![DevExtreme PivotGrid: Field panel](/images/pivotgrid/field-panel.png)

To display the field panel, enable the [fieldaPanel](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/).[visible](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#visible) property. Use other **fieldPanel** properties to configure optional features. For example, you can hide the filter field area:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // ...
            fieldPanel: {
                visible: true,
                showFilterFields: false
            },
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldPanel/"
}