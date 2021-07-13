---
id: dxPivotGridFieldChooser.Options.dataSource
type: PivotGridDataSource
default: null
---
---
##### shortDescription
The data source of a [PivotGrid](/api-reference/10%20UI%20Components/dxPivotGrid '/Documentation/ApiReference/UI_Components/dxPivotGrid/') UI component.

---
It is important for the data source of the PivotGridFieldChooser to be the same as the data source of its PivotGrid UI component. This will allow the field chooser to manage data in the pivot grid. Use the PivotGrid's [getDataSource](/api-reference/10%20UI%20Components/dxPivotGrid/3%20Methods/getDataSource().md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#getDataSource') method to acquire its data source.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/"
}