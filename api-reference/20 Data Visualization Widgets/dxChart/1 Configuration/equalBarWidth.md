---
default: true
type: Boolean
---
---
##### shortDescription
Specifies whether all bars should have equal width, even if some values are missing from a series. Applies only to bar-like series.

---
If a value in a series equals to zero or is undefined, the bar visualizing this value will not be displayed on the chart making an empty space. If you need to fill this space by extending the neighbouring bars, set the **equalBarWidth** option to **false**.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AutoCalculatedBarWidth/jQuery/Light/"
}

#####See Also#####
- [barWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/barWidth.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barWidth') - controls the width of bars when **equalBarWidth** is **true**.
- **series**.[minBarSize](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/minBarSize.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#minBarSize') - sets the minimal possible height for bars in a bar-like series.