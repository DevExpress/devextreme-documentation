---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the code below to create a TileView component with empty tiles. This example specifies the [dataSource](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/) property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: bikes,
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <script type="text/javascript" src="data.js"></script>
        </head>
        <body>
            <div id="tile-view"></div>
        </body>
    </html>

    <!-- tab: data.js -->
    const bikes = [{
        id: 1,
        price: 347,
        imageSrc: '../../data/bikes-catalog/bike-100351718.jpg',
    }, ... ]

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the code below to create a TileView component with empty tiles. This example specifies the [dataSource](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/) property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="bikes"
    ></dx-tile-view>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { bikes } from './data';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        bikes = bikes;
    }

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxTileViewModule } from 'devextreme-angular/ui/tile-view';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxTileViewModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

    <!-- tab: data.ts -->
    export const bikes = [{
        id: 1,
        price: 347,
        imageSrc: 'assets/bike-100351718.jpg',
    } ... ]

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the code below to create a TileView component with empty tiles. This example specifies the [dataSource](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/) property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: App.vue -->
    <script setup lang="ts">
        import { DxTileView } from 'devextreme-vue/tile-view';
        import { bikes } from '@/data.js';
    </script>
    <template>
        <DxTileView
            :data-source="bikes"
        ></DxTileView>
    </template>

    <!-- tab: data.js -->
    export const bikes = [{
        id: 1,
        price: 347,
        imageSrc: 'assets/bike-100351718.jpg',
    } ... ]

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the code below to create a TileView component with empty tiles. This example specifies the [dataSource](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/) property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: App.tsx -->
    import React from 'react';
    import { TileView } from 'devextreme-react/tile-view';
    import { bikes } from './data.js';

    export default function App(): JSX.Element {
        return (
            <TileView
                dataSource={bikes}
            />
        );
    }

    <!-- tab: data.js -->
    const bikes = [{
        id: 1,
        price: 347,
        imageSrc: '../../data/bikes-catalog/bike-100351718.jpg',
    }, ... ]

---

