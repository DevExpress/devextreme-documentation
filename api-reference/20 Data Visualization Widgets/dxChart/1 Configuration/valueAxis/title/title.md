---
id: dxChart.Options.valueAxis.title
type: String | Object
---
---
##### shortDescription
Configures the axis title.

---
The axis title is a short text displayed alongside the axis. Usually, the axis title shows units of measurement for values displayed by the axis. You can put any text in the axis title though.

![DevExtreme HTML5 Charts AxisTitles](/images/ChartJS/visual_elements/axis_titles.png)

If you assign an object to the **title** option, specifying the **text** field of this object is necessary for the axis title to be displayed. Besides the object, the **title** option accepts a string, thus providing a shortcut for setting the axis title. Therefore, this:

    title: 'Axis Title'

is the same as this:

    title: {
        text: 'Axis Title'
    }

#####See Also#####
- **commonAxisSettings**.[title](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/title '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAxisSettings/title/') - configures all axis titles in the widget.