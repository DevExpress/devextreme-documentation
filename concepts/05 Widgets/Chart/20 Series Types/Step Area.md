The *stepArea* series type has all the features and characteristics of the *area* series type, but the line that joins points in the shortest way in the *area* series is replaced by the vertical and horizontal lines in the *stepArea* series. These lines form so-called "steps".

![StepAreaSeriesType ChartJS](/images/ChartJS/StepArea.png)

To use this series type, assign *'steparea'* to the **type** property of the **series** configuration object.

    <!--JavaScript-->var chartOptions = {
        // ...
        series: {
            type: 'steparea'
        }
    };

To learn how to specify data for a series, refer to the [Data Binding](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/85%20Charts%20-%20Data%20Binding/10%20Provide%20Data '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/') topic.

To change the series default appearance, set the options of the **series** configuration object. For instance, you can change the following.

*   **Area Color**  
    A color from the chart's [palette](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/70%20Appearance%20Customization/1%20Palettes/10%20Palettes.md '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Palettes') is used by default. Set a custom color using the series' [color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#color') property. This color will be used for the series' border. The color of the series area will be the same, but a specified [opacity](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/opacity.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/AreaSeries/#opacity') will be applied.

*   **Border Options**  
    Make a border visible by setting the **visible** property of the series' [border](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/border '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/border/') object. When the border is visible, you can change its width and color, using the **width**, **color** and **dashStyle** properties of the series' **border** object. In addition, you can change the border settings when the series is hovered or selected. To do this, set the properties of the **border** object within the series' [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StepAreaSeries/hoverstyle/hoverStyle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/hoverStyle/') or [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StepAreaSeries/selectionstyle/selectionStyle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/selectionStyle/') configuration object.

*   **Point Options**  
    Make points visible by setting the **visible** property of the series' [point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/point/') object. For details on other point options, refer to the [Series Points](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Points') topic.

*   **Point Label Options**  
    Make point labels visible by setting the **visible** property of the series' [label](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StepAreaSeries/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/label/') object. For details on other label options, refer to the [Series Point Labels](/concepts/05%20Widgets/Chart/10%20Visual%20Elements/030%20Series%20Point%20Labels.md '/Documentation/Guide/Widgets/Chart/Visual_Elements/#Series_Point_Labels') topic.

These and other options that can be set for series of the *stepArea* type are explained in the [StepAreaSeries](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StepAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StepAreaSeries/') Reference section. Set the required series options within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') object of the chart's configuration object.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsareaseriesstep/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>