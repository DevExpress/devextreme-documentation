The PieChart can visualize data from different sources. Refer to the following demos for details on how to bind the PieChart to your data source:

- [Simple Array](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleArray/)
- [JSON Data](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/)
- [OData Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/)
- [SignalR Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SignalRService/)

This tutorial uses an array as a PieChart data source. To bind the PieChart to data, pass the array to the PieChart's [dataSource](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#dataSource') property.

Once you assign the data source, specify the [series](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/') [type](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type'). The PieChart has two series types: the **Pie** (default) and **Doughnut**. The only difference between them is the **Doughnut** has a blank center. 

To display data, specify the [series](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/') nested options: [argumentField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/argumentField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField') and [valueField](/api-reference/10%20UI%20Components/dxPieChart/5%20Series%20Types/CommonPieChartSeries/valueField.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#valueField'). This allows the component to determine the corresponding object fields (arguments and values) in the array.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            dataSource: billionaires
            series: {
                argumentField: "country",
                valueField: "amount",
            },
            type: "doughnut"
        });
    });

    <!-- tab: index.html -->
    <head>
         <!-- ... -->
        <script type="text/javascript" src="data.js"></script>
    </head>

    <!-- tab: data.js -->
    const billionaires = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-pie-chart
        [dataSource]="billionaires"
        type="doughnut"
    >
        <dxi-series 
            argumentField="country" 
            valueField="amount"
        >
        </dxi-series>
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Billionaires, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service],
    })

    export class AppComponent {
        billionaires: Billionaires[];
        constructor(private service: Service) {
            this.billionaires = service.getBillionaires();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Billionaires {
        country: string;
        amount: number;
    }

    const billionaires: Billionaires[] = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
    ];

    @Injectable()
    export class Service {
        getBillionaires(): Billionaires[] {
            return billionaires;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart
            :data-source="billionaires"
            type="doughnut"
        >
            <DxSeries
                argument-field="country"
                value-field="amount"
            >
            </DxSeries>
        </DxPieChart> 
    </template>

    <script>
    // ...
    import { DxPieChart, DxSeries } from 'devextreme-vue/pie-chart';
    import { billionaires } from './data';

    export default {
        components: {
            DxPieChart,
            DxSeries
        },
        data() {
            return {
                billionaires
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    export const billionaires = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
    ];

##### React

    <!-- tab: App.js -->
    // ...
    import { PieChart, Series } from 'devextreme-react/pie-chart';
    import { billionaires } from './data';

    function App() {
        return (
            <PieChart
                dataSource={billionaires}
                type="doughnut"
            >
                <Series 
                    argumentField="country" 
                    valueField="amount"
                >
                </Series>
            </PieChart>
        ); 
    }

    export default App;

    <!-- tab: data.js -->
    export const billionaires = [
    {
        country: "China",
        amount: 1002
    },
    {
        country: "United States",
        amount: 716
    },
    {
        country: "India",
        amount: 215
    },
    {
        country: "United Kingdom",
        amount: 150
    },
    {
        country: "Germany",
        amount: 145
    }
    ];

--- 
