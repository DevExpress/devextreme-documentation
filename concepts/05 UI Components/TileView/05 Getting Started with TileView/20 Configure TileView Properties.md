This example specifies the following TileView properties:

- [itemMargin](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemMargin)    
Configures the margin between TileView items.
- [baseItemWidth](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemWidth)/[baseItemHeight](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemHeight)    
Specify the base width/height of TileView items.
- [height](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#height)    
Configures component height.
- [activeStateEnabled](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#activeStateEnabled)    
Specifies if TileView items are clickable.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: tiles,
            itemMargin: 16,
            baseItemWidth: 280,
            baseItemHeight: 160,
            height: 368,
            activeStateEnabled: false,
            itemTemplate() {
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="tiles"
        [itemMargin]="16"
        [baseItemWidth]="280"
        [baseItemHeight]="160"
        [height]="368"
        [activeStateEnabled]="false"
        itemTemplate="tileTemplate"
    >
        <!-- ... -->
    </dx-tile-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTileView
            :data-source="tiles"
            :item-margin="16"
            :base-item-width="280"
            :base-item-height="160"
            :height="368"
            :active-state-enabled="false"
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
                dataSource={tiles}
                itemMargin={16}
                baseItemWidth={280}
                baseItemHeight={160}
                height={368}
                activeStateEnabled={false}
                itemRender={TileRender}
            />
        );
    }

---

You can also configure the following properties to further customize the TileView component:

- **items[]**.[widthRatio](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#widthRatio)/**items[]**.[heightRatio](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#heightRatio)    
Specify a multiplier for an item's width/height. Implement these properties to create tiles of different sizes.
- [onItemClick](Documentation/ApiReference/UI_Components/dxTileView/Configuration/#onItemClick)    
Configures a handler function for the [ItemClickEvent](/Documentation/ApiReference/UI_Components/dxTileView/Types/ItemClickEvent/).
- [direction](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#direction)    
Specifies TileView orientation.
- [showScrollbar](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#showScrollbar)    
Configures scrollbar visibility. The TileView scrollbar appears at the bottom of the component when **direction** is *"horizontal"* (default) and on the right when **direction** is *"vertical"*.
