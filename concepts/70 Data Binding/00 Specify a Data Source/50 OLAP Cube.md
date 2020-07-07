[note] This article describes how to bind a DevExtreme widget to an OLAP cube in jQuery, Angular, Vue, and React. For information on data binding in ASP.NET MVC Controls, refer to <a href="https://docs.devexpress.com/AspNetCore/401023/devextreme-based-controls/concepts/bind-controls-to-data/olap-cube" target="_blank">docs.devexpress.com</a>.

An OLAP cube is a multi-dimensional dataset that allows data mining and analysis. DevExtreme provides the [PivotGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/Overview) widget to display data from an OLAP cube.

To access an OLAP cube, implement the [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'): specify the OLAP server's [url](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/url.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url'), the [catalog](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/catalog.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog') that contains the OLAP cube that you access, and the [cube](/api-reference/30%20Data%20Layer/XmlaStore/1%20Configuration/cube.md '/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube').

Wrap the **XmlaStore** into a **PivotGridDataSource**. This component enables you to group, sort, filter, and perform other data shaping operations on the store's data. Bind the **PivotGrid** to this **PivotGridDataSource**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        var adventureWorksStore = new DevExpress.data.XmlaStore({
            url: "https://my-web-srv01/OLAP/msmdpump.dll",
            catalog: "AdventureWorksDW2012",
            cube: "Adventure Works"
        });

        var adventureWorksDataSource = new DevExpress.data.PivotGridDataSource({
            store: adventureWorksStore
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: adventureWorksDataSource
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        adventureWorksDataSource: PivotGridDataSource;

        constructor() {
            const adventureWorksStore = new XmlaStore({
                url: 'https://my-web-srv01/OLAP/msmdpump.dll',
                catalog: 'AdventureWorksDW2012',
                cube: 'Adventure Works'
            });

            this.adventureWorksDataSource = new PivotGridDataSource({
                store: adventureWorksStore
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxPivotGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxPivotGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: app.component.html -->
    <dx-pivot-grid
        [dataSource]="adventureWorksDataSource">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="adventureWorksDataSource"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxPivotGrid from 'devextreme-vue/pivot-grid';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const adventureWorksStore = new XmlaStore({
        url: 'https://my-web-srv01/OLAP/msmdpump.dll',
        catalog: 'AdventureWorksDW2012',
        cube: 'Adventure Works'
    });

    const adventureWorksDataSource = new PivotGridDataSource({
        store: adventureWorksStore
    });

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                adventureWorksDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import PivotGrid from 'devextreme-react/pivot-grid';
    import XmlaStore from 'devextreme/ui/pivot_grid/xmla_store';
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const adventureWorksStore = new XmlaStore({
        url: 'https://my-web-srv01/OLAP/msmdpump.dll',
        catalog: 'AdventureWorksDW2012',
        cube: 'Adventure Works'
    });

    const adventureWorksDataSource = new PivotGridDataSource({
        store: adventureWorksStore
    });

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={adventureWorksDataSource}
                />
            );
        }
    }
    export default App;

---
