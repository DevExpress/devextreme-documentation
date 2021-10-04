The PivotGrid component can work with data from local arrays, OLAP services (Microsoft SQL Server Analysis Services), or any other data sources. Regardless of the data source type, use the [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource) property to bind the PivotGrid to data. This property accepts a [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) instance or configuration object.

PivotGridDataSource allows you to process data before displaying it in the PivotGrid. At its core, PivotGridDataSource contains a [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) that encapsulates data access logic. Different store types should be used with different data source types.

In this tutorial, we use the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) to bind the PivotGrid to an OLAP service. To configure the XmlaStore, specify the OLAP service's [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url), the [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog) that contains the OLAP cube to use, and the name of the [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube). The following code binds the PivotGrid to a sample OLAP service:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                store: {
                    type: "xmla",
                    url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
                    catalog: "Adventure Works DW Standard Edition",
                    cube: "Adventure Works"
                }
            },
        });
    });

##### Angular

    <!-- tab: adventureworks.service.ts -->
    import { Injectable } from '@angular/core';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    });

    @Injectable({
        providedIn: 'root'
    })
    export class AdventureWorksService {
        getPivotGridDataSource(): PivotGridDataSource {
            return dataSource;
        }
    }

    export { PivotGridDataSource }

    <!-- tab: app.component.html -->
    <dx-pivot-grid
        [dataSource]="dataSource">
    </dx-pivot-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AdventureWorksService, PivotGridDataSource } from './adventureworks.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        dataSource: PivotGridDataSource;
        constructor(service: AdventureWorksService) {
            this.dataSource = service.getPivotGridDataSource();
        }
    }

##### Vue

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    });

    export default {
        getPivotGridDataSource() {
            return dataSource;
        }
    }

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="dataSource">
        </DxPivotGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxPivotGrid } from 'devextreme-vue/pivot-grid';
    import AdventureWorksService from './adventureworks.service';

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                dataSource: AdventureWorksService.getPivotGridDataSource()
            }
        }
    }
    </script>

##### React

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    });

    export default {
        getPivotGridDataSource() {
            return dataSource;
        }
    }

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import AdventureWorksService from './adventureworks.service';
    import { PivotGrid } from 'devextreme-react/pivot-grid';

    const dataSource = AdventureWorksService.getPivotGridDataSource();

    export default function App() {
        return (
            <PivotGrid
                dataSource={dataSource}>
            </PivotGrid>
        );
    }

---

If you want to bind the PivotGrid to other data source types, refer to the following demos for more information:

- [Simple Array](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/SimpleArray/)

- [Web API Service](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/)