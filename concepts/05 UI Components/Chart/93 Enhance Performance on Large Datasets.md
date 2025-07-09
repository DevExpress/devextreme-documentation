This help topic describes how to improve Chart performance by rendering less data when working with large datasets. 

### Implement Zoom and Pan Operations

Enable zoom and pan to improve performance with long argument axes. Configure these features in the [zoomAndPan](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/') object. Zooming and panning actions allow users to load smaller data sets and scroll through the chart. To load a smaller data set on component initialization, specify the initial zoom level. For instructions on how to do this, refer to the following topic: [Set the Initial Zoom](/concepts/05%20UI%20Components/Chart/95%20Zooming%20and%20Panning/15%20Set%20the%20Initial%20Zoom.md '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/#Set_the_Initial_Zoom').

To optimize Chart performance further, use on-demand data loading. See the demo for details: 

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LoadDataOnDemand/"
}

### Data Aggregation

You can group data and show summary values to reduce the number of points. To do this, set one of the following properties to `true`:

- **series**.**aggregation**.[enabled](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/enabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#enabled'): Enables aggregation for a specific series.
- **commonSeriesSettings**.**aggregation**.[enabled](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/enabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/aggregation/#enabled'): Enables aggregation for all series.

For discrete axes, you do not need to define additional parameters to enable aggregation. For continuous and logarithmic axes, specify one of the following properties:

- **argumentAxis**.[aggregationInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/'): Defines the aggregation interval in axis units.
- **argumentAxis**.[aggregationGroupWidth](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth'): Defines the aggregation interval in pixels.

[note] If you specify both properties, **aggregationInterval** overrides **aggregationGroupWidth**.

For more information on data aggregation, refer to the following help topic: [Data Aggregation](/concepts/05%20UI%20Components/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/').

### Hide Chart Elements

You can reduce the number of visible elements to improve Chart performance: 

- Disable **series**.**point**.[visible](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/visible.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#visible') to render chart lines without markers.
- Hide unused series to render fewer chart lines and points. For more information about how to hide a series, refer to the following topic: [Show and Hide a Series](/concepts/05%20UI%20Components/Chart/10%20Series/50%20Show%20and%20Hide%20a%20Series.md '/Documentation/Guide/UI_Components/Chart/Series/Show_and_Hide_a_Series/').
- Assign *'hide'* to [resolveLabelOverlapping](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/resolveLabelOverlapping.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#resolveLabelOverlapping') to reduce the number of visible labels. For more information on how to resolve overlapping labels, refer to the following topic: [Resolve Overlapping](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Resolve_Overlapping/').
- Disable [animations](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/animation '/Documentation/ApiReference/UI_Components/dxChart/Configuration/animation/').

[note] The component disables animations automatically when the number of displayed series points exceeds **animation**.[maxPointCountSupported](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/animation/maxPointCountSupported.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/animation/#maxPointCountSupported').
