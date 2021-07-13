---
id: dxPivotGrid.Options.fieldPanel.allowFieldDragging
type: Boolean
default: true
---
---
##### shortDescription
Makes fields on the [field panel](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Panel') draggable.

---
When this property is **true**, the user can move the fields of the field panel using drag and drop. These fields can be moved not only within a particular area, but between areas as well. When this property is **false**, the field panel simply shows the fields without enabling the user to move them.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldPanel/"
}

The field panel can work on its own or in conjunction with the [field chooser](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Field_Chooser'). If latter cases, the user can move the fields within the field panel, within the field chooser and between these components as well.