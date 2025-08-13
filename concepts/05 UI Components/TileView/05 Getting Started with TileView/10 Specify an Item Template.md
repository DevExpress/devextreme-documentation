
---

##### jQuery

The default behavior of TileView is to display tile text defined in the **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text) property. To implement custom tile content, define [templates](/Documentation/Guide/UI_Components/Common/Templates/). Specify **items[]**.[template](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template) to customize a specific item and [itemTemplate](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate) to customize all items. This example implements the **itemTemplate** property:

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: tiles,
            itemTemplate(itemData, itemIndex, itemElement) {
                const iconBox = $('<div>')
                    .addClass('icon-box')
                    .append(
                        $('<i>').addClass(`dx-icon-${itemData.icon}`),
                    );

                const textBox = $('<div>')
                    .addClass('text-box')
                    .append(
                        $('<h3>')
                            .addClass('tile-title')
                            .text(itemData.title),
                        $('<p>')
                            .addClass('tile-text')
                            .text(itemData.text),
                    );

                itemElement.append(iconBox);
                itemElement.append(textBox);
            },
        });
    });

##### Angular

The default behavior of TileView is to display tile text defined in the **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text) property. To implement custom tile content, define [templates](/Documentation/Guide/UI_Components/Common/Templates/). Specify **items[]**.[template](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template) to customize a specific item and [itemTemplate](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate) to customize all items. This example implements the **itemTemplate** property:

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="tiles"
        itemTemplate="tileTemplate"
    >
        <div *dxTemplate="let data of 'tileTemplate'">
            <div class="icon-box">
                <i class="dx-icon-{{data.icon}}"></i>
            </div>
            <div class="text-box">
                <h3 class="tile-title">{{data.title}}</h3>
                <p class="tile-text">{{data.text}}</p>
            </div>
        </div>
    </dx-tile-view>

##### Vue

The default behavior of TileView is to display tile text defined in the **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text) property. To implement custom tile content, define [templates](/Documentation/Guide/UI_Components/Common/Templates/). Specify **items[]**.[template](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template) to customize a specific item and [itemTemplate](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate) to customize all items. This example implements the **itemTemplate** property:

    <!-- tab: App.vue -->
    <template>
        <DxTileView
            :data-source="tiles"
            item-template="tileTemplate"
        >
            <template #tileTemplate="data">
                <div class="icon-box">
                    <i :class="`dx-icon-${data.data.icon}`"></i>
                </div>
                <div class="text-box">
                    <h3 class="tile-title">{{ data.data.title }}</h3>
                    <p class="tile-text">{{ data.data.text }}</p>
                </div>
            </template>
        </DxTileView>
    </template>

##### React

The default behavior of TileView is to display tile text defined in the **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text) property. To implement custom tile content, define [templates](/Documentation/Guide/UI_Components/Common/Templates/). Specify **items[]**.[render](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#render) or **items[]**.[component](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#component) to customize a specific item and [itemRender](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemRender) or [itemComponent](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemComponent) to customize all items. This example implements the **itemRender** property:

    <!-- tab: App.tsx -->
    function TileRender(data: { icon: string; title: string; text: string }): JSX.Element {
        return (
            <>
                <div className="icon-box">
                    <i className={`dx-icon-${data.icon}`}></i>
                </div>
                <div className="text-box">
                    <h3 className="tile-title">{data.title}</h3>
                    <p className="tile-text">{data.text}</p>
                </div>
            </>
        );
    }

    export default function App(): JSX.Element {
        return (
            <TileView
                dataSource={tiles}
                itemRender={TileRender}
            />
        );
    }

---
