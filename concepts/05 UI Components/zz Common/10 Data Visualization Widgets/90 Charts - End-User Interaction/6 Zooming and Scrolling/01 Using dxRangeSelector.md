The **Chart** and **RangeSelector** UI components can operate together, allowing an end-user to zoom and scroll through a chart. Follow the steps below to implement these capabilities.

- **Configure Chart**     

    Create and configure the **Chart** UI component using one of the available data-binding approaches. For details, see the "Create and Configure a Widget" guide for [jQuery](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/01%20Create%20and%20Configure%20a%20Component.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Create_and_Configure_a_Component'), [AngularJS](/concepts/Getting%20Started/Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/') or [Knockout](/concepts/Getting%20Started/Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/').

        <!--JavaScript-->var chartOptions = {
            // Chart configuration
        };
        
- **Configure RangeSelector**     

    Create and configure the **RangeSelector** UI component in a similar manner. **Chart** and **RangeSelector** must have completely identical argument axes. Hence, you need to assign the same data source to both UI components.
        
        <!--JavaScript-->var dataSource = [...];
        var chartOptions = {
            dataSource: dataSource,
            // ...
        };
        var rangeSelectorOptions = {
            dataSource: dataSource,
            // ...
        };
        
    Optionally, you can display the chart in miniature in the background of **RangeSelector**. For this purpose, assign the same array of series configurations to both UI components.

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
        
- **Implement UI component Interaction**      

    To make **Chart** and **RangeSelector** interact with each other, handle the [valueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/4%20Events/valueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Events/#valueChanged') event. For this purpose, assign a function to the [onValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#onValueChanged') option of **RangeSelector**. Within this function, call the [zoomArgument](/api-reference/10%20UI%20Components/dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#zoomArgumentstartValue_endValue') method of the [chart instance](/api-reference/10%20UI%20Components/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#instance'). This method accepts the start and end range values as its parameters.

        <!--JavaScript-->var rangeSelectorOptions = {
            // ...
            onValueChanged: function (e) {
                chartInstance.zoomArgument(e.value[0], e.value[1]);
            },
            behavior: { callValueChanged: 'onMoving' }
        };
        
    [note] The **valueChanged** event can fire either when an end-user keeps dragging the [sliders](/concepts/05%20UI%20Components/RangeSelector/10%20Visual%20Elements/20%20Sliders.md '/Documentation/Guide/UI_Components/RangeSelector/Visual_Elements/#Sliders') or when he/she has released them. This depends on the value of the **behavior**.[callValueChanged](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/behavior/callValueChanged.md '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/behavior/#callValueChanged') option. When implementing zooming/scrolling, make sure that this option is set to *'onMoving'*.

    By default, the chart adjusts its value axis to the currently selected minimum and maximum values. To change this behavior, set the [adjustOnZoom](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#adjustOnZoom') option to **false**.
    
<h4>Free and Fixed Range Scrolling</h4>

Following the steps above, you get free range scrolling. It means that an end-user scrolls the chart by selecting a range in **RangeSelector** and dragging it to any side. You can fix the selected range. In this instance, an end-user will be able to scroll the chart dragging the predefined range. For this purpose, set the **minRange** and **maxRange** option of the [scale](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/scale/') configuration object to the same value. Then, specify the initial range using the [value](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#value') array.

    <!--JavaScript-->var rangeSelectorOptions = {
        // ...
        scale: {
            minRange: 10,
            maxRange: 10,
        },
        value: [0, 10]   
    };