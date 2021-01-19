The **TileView** UI component contains a collection of tiles. Tiles can store much more information than ordinary buttons, that is why they are very popular in apps designed for touch devices.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TileView/Basics/"
}

The following code adds a primitive **TileView** to your page.

---
##### jQuery

    <!--HTML--><div id="tileViewContainer"></div>

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            dataSource: [
                { text: "Alabama" },
                { text: "Alaska" },
                { text: "Arizona" },
                // ...
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Alabama" },
            { text: "Alaska" },
            { text: "Arizona" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTileView :data-source="dataSource"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTileView } from 'devextreme-vue/tile-view';

    export default {
        components: {
            DxTileView
        },
        data() {
            return {
                dataSource: [
                    { text: 'Alabama' },
                    { text: 'Alaska' },
                    { text: 'Arizona' },
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TileView } from 'devextreme-react/tile-view';

    const dataSource = [
        { text: 'Alabama' },
        { text: 'Alaska' },
        { text: 'Arizona' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TileView dataSource={dataSource}/>
            );
        }
    }

    export default App;

---

Note that field names in these data source items are [conventional](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/'). This provides a default tile appearance, which can be customized later. 

By default, the UI component is oriented horizontally, but you can orient it vertically using the [direction](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#direction') option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#tileViewContainer").dxTileView({
            // ...
            direction: "vertical"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view ...
        direction="vertical">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxTileView direction="vertical"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxTileView } from 'devextreme-vue/tile-view';

    export default {
        components: {
            DxTileView
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TileView } from 'devextreme-react/tile-view';

    class App extends React.Component {
        render() {
            return (
                <TileView direction="vertical"/>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tile_View/Directions/"
}

#####See Also#####
#include common-link-configurewidget
- [TileView - Specify the Size of Tiles](/concepts/05%20Widgets/TileView/03%20Specify%20the%20Size%20of%20Tiles.md '/Documentation/Guide/Widgets/TileView/Specify_the_Size_of_Tiles')
- [TileView - Customize Tile Appearance](/concepts/05%20Widgets/TileView/05%20Customize%20Tile%20Appearance.md '/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance')
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Components/dxTileView/')

[tags]dxtileview, tile view, tileView, collection container, collection UI component, navigation, overview