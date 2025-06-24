When working with large datasets, you can improve Chart performance by rendering less data. This help topic covers multiple ways to do so.

### Implement Zoom and Pan Operations

Enable zooming and panning to improve performance on datasets with long argument axes. These operations allow users to view the entirety of your dataset using scrolling. You can also implement on-demand data loading to improve the component's performance. For more information about loading data on-demand, refer to the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LoadDataOnDemand/"
}

### Data Aggregation

Aggregation groups data points by averaging them. Enable data aggregation to render fewer data points. Set one of the following properties to `true`:

- **series**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#enabled): Enables aggregation for a specific series.
- **commonSeriesSettings**.**aggregation**.[enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/aggregation/#enabled): Enables aggregation for all series.

For discrete axes, you do not need to define additional parameters to enable aggregation. For continuous and logarithmic axes, specify one of the following properties:

- **argumentAxis**.[aggregationInterval](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/): Defines aggregation interval in axis units.
- **argumentAxis**.[aggregationGroupWidth](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth): Defines aggregation interval in pixels.

[note] If you specify both properties, **aggregationInterval** overrides **aggregationGroupWidth**.

For more information on data aggregation, refer to the following help topic: [Data Aggregation](/Documentation/Guide/UI_Components/Chart/Data_Aggregation/).

### Hide Unnecessary Chart Elements

You can hide unnecessary elements to improve Chart performance. For instance, disable **series**.**point**.[visible](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#visible) to render only chart lines. You can also hide unused Chart elements and controls, as well as disable animations.