The field chooser allows users to manage pivot grid fields. Its window displays five field sections, four of which correspond to pivot grid areas and the fifth contains all fields. Users can drag and drop fields between these sections.

To open the field chooser, users should click the Field Chooser icon or select Show Field Chooser from a row or column header's context menu.

![DevExtreme PivotGrid: Field chooser](/images/pivotgrid/field-chooser.png)

To configure the field chooser, declare the [fieldChooser](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/) object. Use the [enabled](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/#enabled) property to specify whether the Field Chooser icon and the corresponding context menu command are available. This property's default value is **true**.

The All Fields section includes fields declared in the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array and fields auto-generated from the data source model. If the All Fields section contains so many fields that users find it hard to navigate them, you can disable the [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource).[retrieveFields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields) property to hide the auto-generated fields. Alternatively, you can enable the [allowSearch](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/#allowSearch) property to allow users to search in the All Fields section.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // ...
            dataSource: {
                // ...
                // retrieveFields: false
            },
            fieldChooser: {
                allowSearch: true
            },
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