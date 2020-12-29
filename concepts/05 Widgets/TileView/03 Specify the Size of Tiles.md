The size of all tiles in the UI component is determined by the [baseItemHeight](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemHeight.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemHeight') and [baseItemWidth](/api-reference/10%20UI%20Widgets/dxTileView/1%20Configuration/baseItemWidth.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#baseItemWidth') options. If you need to set the size of a specific tile, use the [heightRatio](/api-reference/_hidden/dxTileViewItem/heightRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/items/#heightRatio') and [widthRatio](/api-reference/_hidden/dxTileViewItem/widthRatio.md '/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/items/#widthRatio') options of this tile. In this case, the size will be calculated according to the following formulas.

<span style="font-size:13px">height = baseItemHeight * heightRatio<br />
width = baseItemWidth * widthRatio</span>

For example, the following code makes the *"Massachusetts"* tile twice bigger than the other tiles.

---
##### jQuery

    <!--JavaScript-->$(function() {
        const tileViewData = [
            { text: "Maine", capital: "Augusta" },
            { text: "Maryland", capital: "Annapolis" },
            { text: "Massachusetts", capital: "Boston", height: 2, widthRatio: 2 }
            // ...
        ];

        $("#tileViewContainer").dxTileView({
            dataSource: tileViewData,
            baseItemHeight: 130,
            baseItemWidth: 180
        });
    });

##### Angular

    <!--HTML-->
    <dx-tile-view 
        [dataSource]="tileViewData"
        [baseItemHeight]="130"
        [baseItemWidth]="180">
    </dx-tile-view>

    <!--TypeScript-->
    import { DxTileViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tileViewData = [
            { text: "Maine", capital: "Augusta" },
            { text: "Maryland", capital: "Annapolis" },
            { text: "Massachusetts", capital: "Boston", height: 2, widthRatio: 2 }
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
        <DxTileView
            :data-source="tileViewData"
            :base-item-height="130"
            :base-item-width="180"
        />
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
                tileViewData: [
                    { text: 'Maine', capital: 'Augusta' },
                    { text: 'Maryland', capital: 'Annapolis' },
                    { text: 'Massachusetts', capital: 'Boston', height: 2, widthRatio: 2 }
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

    const tileViewData = [
        { text: 'Maine', capital: 'Augusta' },
        { text: 'Maryland', capital: 'Annapolis' },
        { text: 'Massachusetts', capital: 'Boston', height: 2, widthRatio: 2 }
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <TileView
                    dataSource={tileViewData}
                    baseItemHeight={130}
                    baseItemWidth={180}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [TileView - Customize Tile Appearance](/concepts/05%20Widgets/TileView/05%20Customize%20Tile%20Appearance.md '/Documentation/Guide/Widgets/TileView/Customize_Tile_Appearance')
- [TileView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TileView/Overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, tile size, customize