The following code example shows how to declare a UI component configuration object using TypeScript.

    window.onload = () => {
        var properties: DevExpress.viz.charts.dxChartOptions;
        options = {
            dataSource: [
                { fruit: 'Oranges', total: 10 },
                { fruit: 'Apples', total: 15 },
                { fruit: 'Bananas', total: 9 }
            ],
            series: { argumentField: 'fruit', valueField: 'total' }
        };  
    };

Any configuration object should have a specific type. In this example, the `options` object has the `dxChartOptions` type, which configures the Chart UI component. Type names are formed by concatenating the UI component name (in this example, `dxChart`) and `Options`.

The part that preceeds the type is its namespace. DevExtreme UI components are declared in the following namespaces.

- `DevExpress.viz.charts` - [dxChart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/'), [dxPieChart](/api-reference/10%20UI%20Components/dxPieChart '/Documentation/ApiReference/UI_Components/dxPieChart/') and [dxPolarChart](/api-reference/10%20UI%20Components/dxPolarChart '/Documentation/ApiReference/UI_Components/dxPolarChart/')
- `DevExpress.viz.treeMap` - [dxTreeMap](/api-reference/10%20UI%20Components/dxTreeMap '/Documentation/ApiReference/UI_Components/dxTreeMap/')
- `DevExpress.viz.gauges` - [dxCircularGauge](/api-reference/10%20UI%20Components/dxCircularGauge '/Documentation/ApiReference/UI_Components/dxCircularGauge/'), [dxLinearGauge](/api-reference/10%20UI%20Components/dxLinearGauge '/Documentation/ApiReference/UI_Components/dxLinearGauge/') and [dxBarGauge](/api-reference/10%20UI%20Components/dxBarGauge '/Documentation/ApiReference/UI_Components/dxBarGauge/')
- `DevExpress.viz.rangeSelector` - [dxRangeSelector](/api-reference/10%20UI%20Components/dxRangeSelector '/Documentation/ApiReference/UI_Components/dxRangeSelector/')
- `DevExpress.viz.sparklines` - [dxSparkline](/api-reference/10%20UI%20Components/dxSparkline '/Documentation/ApiReference/UI_Components/dxSparkline/') and [dxBullet](/api-reference/10%20UI%20Components/dxBullet '/Documentation/ApiReference/UI_Components/dxBullet/')
- `DevExpress.viz.map` - [dxVectorMap](/api-reference/10%20UI%20Components/dxVectorMap '/Documentation/ApiReference/UI_Components/dxVectorMap/')
- `DevExpress.ui` - [all other UI components](/api-reference/10%20UI%20Components '/Documentation/ApiReference/UI_Components/')

After you have declared a configuration object, pass it to the [jQuery plugin](/concepts/58%20jQuery%20Components/20%20Component%20Configuration%20Syntax/01%20Create%20and%20Configure%20a%20Component.md '/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Create_and_Configure_a_Component').

    $("#chartContainer").dxChart(options);  

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart').[Configuration](/api-reference/10%20UI%20Components/dxChart/1%20Configuration '/Documentation/ApiReference/UI_Components/dxChart/Configuration/')

[tags] jquery