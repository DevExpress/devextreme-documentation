The PieChart can visualize data from different sources. Refer to the following demos for details on how to bind the PieChart to your data source:

- [Simple Array](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleArray/)
- [JSON Data](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/)
- [OData Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/)
- [SignalR Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SignalRService/)

This tutorial uses an array as a PieChart data source. To bind the PieChart to data, pass the array to the PieChart's [dataSource](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#dataSource) property.

Once you assign the data source, specify the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) [type](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type). The PieChart has two series types: the default **Pie** and **Doughnut**. The only difference between them is the **Doughnut** has a blank center. 

To display the data, specify the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) nested options: [argumentField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#valueField). Then, the component can determine the object fields that indicate PieChart arguments and values in the array.

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
