The PieChart can visualize data from different sources. Refer to the following demos for details on how to bind the PieChart to your data source:

- [Simple Array](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SimpleArray/)
- [JSON Data](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/AjaxRequest/)
- [OData Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/)
- [SignalR Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SignalRService/)

This tutorial uses an array as a PieChart data source. To bind the PieChart to data, pass the array to the PieChart's [dataSource](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#dataSource) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pie-chart").dxPieChart({
            dataSource: billionaires
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
    >
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
        country: string | undefined;
        amount: number | undefined;
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
        getBillionaires() {
            return billionaires;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPieChart
            :data-source="billionaires"
        /> 
    </template>

    <script>
    // ...
    import { billionaires } from './data';

    export default {
        components: {
            DxPieChart
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
    import { billionaires } from './data';

    function App() {
        return (
            <PieChart
                dataSource={billionaires}
            />
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
