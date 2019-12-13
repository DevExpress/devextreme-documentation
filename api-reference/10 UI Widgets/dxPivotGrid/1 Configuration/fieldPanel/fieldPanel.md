---
id: dxPivotGrid.Options.fieldPanel
type: Object
---
---
##### shortDescription
Configures the [field panel](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/15%20Field%20Panel.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel').

---
The field panel is a component that displays the fields involved in the calculation of grid summaries. It consists of four field areas: column, row, data and filter. Each area holds fields of the corresponding type.

By default, the field panel is hidden. To make it visible, assign **true** to the [visible](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldPanel/visible.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#visible') property. To control the visibility of an individual field area, change the [showColumnFields](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldPanel/showColumnFields.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showColumnFields'), [showRowFields](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showRowields), [showDataFields](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldPanel/showDataFields.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showDataFields') or [showFilterFields](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldPanel/showFilterFields.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#showFilterFields') property respectively.

The field panel partially covers the functionality provided by the [field chooser](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/10%20Field%20Chooser/01%20Field%20Chooser.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser'). For example, the user can reorder fields within a single field area or even between them. This capability is controlled by the value of the  [allowFieldDragging](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/fieldPanel/allowFieldDragging.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldPanel/#allowFieldDragging') property.

In addition, if the [allowSorting](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting') and [allowFiltering](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowFiltering') options are **true**, the user can apply sorting and filtering to fields directly from the field panel.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/FieldPanel/"
}