---
##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the code below to create a TileView component. This example specifies the [dataSource](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/') property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: tiles,
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <script type="text/javascript" src="data.js"></script>
        </head>
        <body>
            <div id="tileview"></div>
        </body>
    </html>

    <!-- tab: data.js -->
    const tiles = [{
        icon: 'datatrending',
        title: 'Boost Productivity',
        text: 'Tools and data that help you get the most from your team.',
    }, ... ]

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the code below to create a TileView component. This example specifies the [dataSource](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/') property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="tiles"
    ></dx-tile-view>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { tiles } from './data';

    export class AppComponent {
        // Create a local version of tiles to implement in app.component.html
        tiles = tiles;
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
    export const tiles = [{
        icon: 'datatrending',
        title: 'Boost Productivity',
        text: 'Tools and data that help you get the most from your team.',
    }, ... ]

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the code below to create a TileView component. This example specifies the [dataSource](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/') property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: App.vue -->
    <script setup lang="ts">
        import { DxTileView } from 'devextreme-vue/tile-view';
        import { tiles } from '@/data.js';
    </script>
    <template>
        <DxTileView
            :data-source="tiles"
        ></DxTileView>
    </template>

    <!-- tab: data.js -->
    export const tiles = [{
        icon: 'datatrending',
        title: 'Boost Productivity',
        text: 'Tools and data that help you get the most from your team.',
    }, ... ]

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the code below to create a TileView component. This example specifies the [dataSource](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#dataSource/') property to define items. You can also specify TileView items in the [items[]](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/) array.

    <!-- tab: App.tsx -->
    import { TileView } from 'devextreme-react/tile-view';
    import { tiles } from './data.js';

    export default function App(): JSX.Element {
        return (
            <TileView
                dataSource={tiles}
            />
        );
    }

    <!-- tab: data.js -->
    const tiles = [{
        icon: 'datatrending',
        title: 'Boost Productivity',
        text: 'Tools and data that help you get the most from your team.',
    }, ... ]

---
