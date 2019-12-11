---
id: dxPieChart.Options.sizeGroup
type: String
default: undefined
---
---
##### shortDescription
Allows you to display several adjoining pies in the same size.

---
Besides the pie itself, the **PieChart** widget comprises other diverse elements that affect the size of the pie. Therefore, when you display several **PieChart** widgets side by side, their pies may differ in size. To eliminate these differences, collect all the **PieChart** widgets in a single size group by setting their **sizeGroup** option to identical values. The widgets should have identical layouts, that is, the same container's size, position of the [title](/concepts/05%20Widgets/PieChart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/Widgets/PieChart/Title_and_Subtitle/') and [legend](/concepts/05%20Widgets/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Legend/Overview/'), etc. Note also that a single page can contain many size groups, but a widget can be a member of only one of them.

#####See Also#####
- [size](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/size '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/size/')
- [diameter](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/diameter.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#diameter')
- [minDiameter](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/minDiameter.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#minDiameter')