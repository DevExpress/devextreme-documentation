This example specifies the following TileView properties:

- [itemMargin](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemMargin)    
Configures the margin between TileView items.
- [baseItemWidth](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemWidth)/[baseItemHeight](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemHeight)    
Specify the base width/height of TileView items.
- [showScrollbar](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#showScrollbar)    
Configures scrollbar visibility. The scrollbar appears at the bottom of the component when [direction](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#direction) is *"horizontal"* (default) and on the right when **direction** is *"vertical"*.
- [height](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#height)    
Specifies component height.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: bikes,
            itemMargin: 5,
            baseItemWidth: 175,
            baseItemHeight: 175,
            showScrollbar: 'always',
            height: 370,
            itemTemplate() {
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="bikes"
        [itemMargin]="5"
        [baseItemWidth]="175"
        [baseItemHeight]="175"
        showScrollbar="always"
        [height]="370"
        itemTemplate="tileTemplate"
    >
        <!-- ... -->
    </dx-tile-view>

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { formatNumber } from 'devextreme/localization';

    </script>
    <template>
        <DxTileView
            :data-source="bikes"
            :item-margin="5"
            :base-item-width="175"
            :base-item-height="175"
            show-scrollbar="always"
            :height="370"
            item-template="tileTemplate"
        >
            <!-- ... -->
        </DxTileView>
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App(): JSX.Element {
        return (
            <TileView
                dataSource={bikes}
                itemMargin={5}
                baseItemWidth={175}
                baseItemHeight={175}
                showScrollbar="always"
                height={370}
                itemRender={TileRender}
            />
        );
    }

---

You can also configure the following properties to customize individual tiles:

- **items[]**.[widthRatio](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#widthRatio)/**items[]**.[heightRatio](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#heightRatio)    
Specify a multipler for an item's width/height. Implement these properties to create tiles of different sizes.
- **items[]**.[disabled](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#disabled)    
Configures whether an item responds to user interaction.
