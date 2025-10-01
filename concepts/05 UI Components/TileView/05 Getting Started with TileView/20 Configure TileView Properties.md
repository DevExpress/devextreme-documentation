This example specifies the following TileView properties:

- [itemMargin](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/itemMargin.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemMargin')    
Configures the margin between TileView items.
- [baseItemWidth](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/baseItemWidth.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemWidth')/[baseItemHeight](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/baseItemHeight.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#baseItemHeight')    
Specify the base width/height of TileView items.
- [height](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#height')    
Configures component height.
- [activeStateEnabled](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/activeStateEnabled.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#activeStateEnabled')    
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

- **items[]**.[widthRatio](/api-reference/_hidden/dxTileViewItem/widthRatio.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#widthRatio')/**items[]**.[heightRatio](/api-reference/_hidden/dxTileViewItem/heightRatio.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#heightRatio')    
Adjust an item's width/height. Set these properties to create tiles of different sizes.
- [onItemClick](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/onItemClick.md 'Documentation/ApiReference/UI_Components/dxTileView/Configuration/#onItemClick')    
Configures a handler function for the [ItemClickEvent](/api-reference/10%20UI%20Components/dxTileView/9%20Types/ItemClickEvent '/Documentation/ApiReference/UI_Components/dxTileView/Types/ItemClickEvent/').
- [direction](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#direction')    
Specifies TileView orientation.
- [showScrollbar](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#showScrollbar')    
Configures scrollbar visibility. The TileView scrollbar appears at the bottom of the component when **direction** is *"horizontal"* (default) and on the right when **direction** is *"vertical"*.
