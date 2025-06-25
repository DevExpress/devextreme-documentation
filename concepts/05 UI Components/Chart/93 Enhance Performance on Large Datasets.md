When working with large datasets, you can improve Chart performance by rendering less data. This help topic describes multiple ways to do so.

### Implement Zoom and Pan Operations

Activate zoom and pan operations to improve performance on datasets with long argument axes. These operations allow users to display smaller data sub-sets and scroll the chart horizontally. You can also implement on-demand data loading to further optimize the component's performance. For more information about loading data on-demand, refer to the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LoadDataOnDemand/"
}

### Data Aggregation

You can aggregate data - group arguments and display a summary value. Use this method to render fewer data points. Set one of the following properties to `true`:

- **series**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#enabled): Enables aggregation for a specific series.
- **commonSeriesSettings**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/aggregation/#enabled): Enables aggregation for all series.

For discrete axes, you do not need to define additional parameters to enable aggregation. For continuous and logarithmic axes, specify one of the following properties:

- **argumentAxis**.[aggregationInterval](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/): Defines aggregation interval in axis units.
- **argumentAxis**.[aggregationGroupWidth](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth): Defines aggregation interval in pixels.

[note] If you specify both properties, **aggregationInterval** overrides **aggregationGroupWidth**.

For more information on data aggregation, refer to the following help topic: [Data Aggregation](/Documentation/Guide/UI_Components/Chart/Data_Aggregation/).

### Hide Unnecessary Chart Elements

You can hide unnecessary elements to improve Chart performance. For instance, disable **series**.**point**.[visible](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#visible) to render only chart lines, without markers. You can also hide unused Chart elements and controls or disable animations.