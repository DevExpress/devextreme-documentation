---
id: dxPieChart.Options.sizeGroup
type: String | undefined
default: undefined
---
---
##### shortDescription
Allows you to display several adjoining pies in the same size.

---
Besides the pie itself, the PieChart UI component comprises other diverse elements that affect the size of the pie. Therefore, when you display several PieChart UI components side by side, their pies may differ in size. To eliminate these differences, collect all the PieChart UI components in a single size group by setting their **sizeGroup** property to identical values. The UI components should have identical layouts, that is, the same container's size, position of the [title](/concepts/05%20UI%20Components/PieChart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/UI_Components/PieChart/Title_and_Subtitle/') and [legend](/concepts/05%20UI%20Components/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Legend/Overview/'), etc. Note also that a single page can contain many size groups, but a UI component can be a member of only one of them.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PiesWithEqualSize/"
}

#####See Also#####
- [size](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/size '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/size/')
- [diameter](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/diameter.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#diameter')
- [minDiameter](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/minDiameter.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#minDiameter')