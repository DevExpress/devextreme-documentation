The **Chart** and **RangeSelector** widgets can operate together, allowing an end-user to zoom and scroll through a chart. Follow the steps below to implement these capabilities.

- **Configure Chart**     

    Create and configure the **Chart** widget using one of the available data-binding approaches. For details, see the "Create and Configure a Widget" guide for [jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget'), [AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget') or [Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget').

        <!--JavaScript-->var chartOptions = {
            // Chart configuration
        };
        
- **Configure RangeSelector**     

    Create and configure the **RangeSelector** widget in a similar manner. **Chart** and **RangeSelector** must have completely identical argument axes. Hence, you need to assign the same data source to both widgets.
        
        <!--JavaScript-->var dataSource = [...];
        var chartOptions = {
            dataSource: dataSource,
            // ...
        };
        var rangeSelectorOptions = {
            dataSource: dataSource,
            // ...
        };
        
    Optionally, you can display the chart in miniature in the background of **RangeSelector**. For this purpose, assign the same array of series configurations to both widgets.

        <!--JavaScript-->var dataSource = [...];
        var series = [...];
        var chartOptions = {
            dataSource: dataSource,
            series: series
            // ...
        };
        var rangeSelectorOptions = {
            dataSource: dataSource,
            chart: {
                series: series    
            }
            // ...
        };
        
- **Implement Widget Interaction**      

    To make **Chart** and **RangeSelector** interact with each other, handle the [selectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/4%20Events/selectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Events/#selectedRangeChanged') event. For this purpose, assign a function to the [onSelectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/onSelectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onSelectedRangeChanged') option of **RangeSelector**. Within this function, call the [zoomArgument](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue') method of the [chart instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance'). This method accepts the start and end range values as its parameters.

        <!--JavaScript-->var rangeSelectorOptions = {
            // ...
            onSelectedRangeChanged: function (e) {
                chartInstance.zoomArgument(e.startValue, e.endValue);
            },
            behavior: { callSelectedRangeChanged: 'onMoving' }
        };
        
    [note] The **selectedRangeChanged** event can fire either when an end-user keeps dragging the [sliders](/concepts/20%20Data%20Visualization/30%20RangeSelector/10%20RangeSelector%20Elements/20%20Sliders.md '/Documentation/Guide/Data_Visualization/RangeSelector/RangeSelector_Elements/#Sliders') or when he/she has released them. This depends on the value of the **behavior** | [callSelectedRangeChanged](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/behavior/callSelectedRangeChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callSelectedRangeChanged') option. When implementing zooming/scrolling, make sure that this option is set to *'onMoving'*.

    By default, the chart adjusts its value axis to the currently selected minimum and maximum values. To change this behavior, set the [adjustOnZoom](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom') option to *false*.
    
<h4>Free and Fixed Range Scrolling</h4>

Following the steps above, you get free range scrolling. It means that an end-user scrolls the chart by selecting a range in **RangeSelector** and dragging it to any side. You can fix the selected range. In this instance, an end-user will be able to scroll the chart dragging the predefined range. For this purpose, set the **minRange** and **maxRange** option of the [scale](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/') configuration object to the same value. Then, specify the initial range using the [selectedRange](/api-reference/20%20Data%20Visualization%20Widgets/25%20dxRangeSelector/1%20Configuration/selectedRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/selectedRange/') option.

    <!--JavaScript-->var rangeSelectorOptions = {
        // ...
        scale: {
            minRange: 10,
            maxRange: 10,
        },
        selectedRange: { startValue: 0, endValue: 10 }      
    };