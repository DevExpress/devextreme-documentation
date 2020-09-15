---
id: dxRangeSelector
module: viz/range_selector
export: default
inherits: BaseWidget,DataHelperMixin
---
---
##### shortDescription
The **RangeSelector** is a widget that allows a user to select a range of values on a scale.

##### widgettree
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 3
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 6
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 8
}]

##### lib
dx.viz.js, dx.all.js

---
This widget represents a scale (numeric or date-time) and two sliders. A user selects the required range by moving the sliders.

<img style="margin:0px auto;display:block" src="/Content/images/doc/20_2/ChartJS/RangeSelector_new.gif" alt="RangeSelector" />

A chart can be displayed in the [background](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/background '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/') of the **RangeSelector** widget. This allows end users to select the required range in a chart series. You can also integrate the **RangeSelector** widget with a stand-alone [Chart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/') widget to emulate chart [zooming and scrolling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/6%20Zooming%20and%20Scrolling/01%20Using%20dxRangeSelector.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Zooming_and_Scrolling/#Using_dxRangeSelector').

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSelector/NumericScaleLightweight/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget