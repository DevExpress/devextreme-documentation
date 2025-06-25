This help topic describes how to improve Chart performance by rendering less data when working with large datasets. 

### Implement Zoom and Pan Operations

Enable zoom and pan to improve performance with long argument axes. These features allow users to view smaller data sets and scroll through the chart. To optimize further, use on-demand data loading. See the demo for details:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LoadDataOnDemand/"
}

### Data Aggregation

You can group data and show summary values to reduce the number of points. To do this, set one of the following properties to `true`:

- **series**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#enabled): Enables aggregation for a specific series.
- **commonSeriesSettings**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/aggregation/#enabled): Enables aggregation for all series.

For discrete axes, you do not need to define additional parameters to enable aggregation. For continuous and logarithmic axes, specify one of the following properties:

- **argumentAxis**.[aggregationInterval](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/): Defines the aggregation interval in axis units.
- **argumentAxis**.[aggregationGroupWidth](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth): Defines the aggregation interval in pixels.

[note] If you specify both properties, **aggregationInterval** overrides **aggregationGroupWidth**.

For more information on data aggregation, refer to the following help topic: [Data Aggregation](/Documentation/Guide/UI_Components/Chart/Data_Aggregation/).

### Hide Unnecessary Chart Elements

You can hide unnecessary elements to improve Chart performance. For instance, disable **series**.**point**.[visible](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#visible) to render chart lines without markers. You can also hide unused Chart elements and controls or disable animations.