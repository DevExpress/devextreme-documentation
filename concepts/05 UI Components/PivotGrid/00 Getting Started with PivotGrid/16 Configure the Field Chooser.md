The field chooser allows users to manage pivot grid fields. To open it, users should click the Field Chooser icon or select Show Field Chooser from a row or column header's context menu.

![DevExtreme PivotGrid: Field chooser](/images/pivotgrid/field-chooser.png)

To configure the field chooser, declare the [fieldChooser](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/) object. Use the [enabled](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/#enabled) property to specify whether the Field Chooser icon and the corresponding context menu command are available. This property's default value is **true**.

The field chooser window displays five field sections:

- Row Fields
- Column Fields
- Data Fields
- Filter Fields
- All Fields

The All Fields section includes fields declared in the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array and auto-generated fields. In this tutorial, we disable the [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource).[retrieveFields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields) property to hide the auto-generated fields.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // ...
            dataSource: {
                // ...
                retrieveFields: false
            },
            // fieldChooser: {
            //     Configuration options go here
            // },
        });
    });

---

DevExtreme also includes a standalone [PivotGridFieldChooser](/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/) component. Unlike the field chooser integrated into the PivotGrid, the standalone field chooser can remain visible on the page at all times. Refer to the following demos for more information on both field choosers:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/IntegratedFieldChooser/",
    name: "Integrated Field Chooser"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/",
    name: "Standalone Field Chooser"
}