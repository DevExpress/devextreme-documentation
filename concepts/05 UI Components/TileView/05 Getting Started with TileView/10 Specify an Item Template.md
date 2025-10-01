
---

##### jQuery

At this point, tiles display text defined in the **items[]**.[text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text') property. To customize tile content, define [templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates '/Documentation/Guide/UI_Components/Common/Templates/'). Specify **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template') to customize a specific item and [itemTemplate](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate') to customize all items. This example uses the **itemTemplate** property:

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

At this point, tiles display text defined in the **items[]**.[text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text') property. To customize tile content, define [templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates '/Documentation/Guide/UI_Components/Common/Templates/'). Specify **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template') to customize a specific item and [itemTemplate](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate') to customize all items. This example uses the **itemTemplate** property:

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

At this point, tiles display text defined in the **items[]**.[text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text') property. To customize tile content, define [templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates '/Documentation/Guide/UI_Components/Common/Templates/'). Specify **items[]**.[template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template') to customize a specific item and [itemTemplate](/api-reference/10%20UI%20Components/dxTileView/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate') to customize all items. This example uses the **itemTemplate** property:

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

At this point, tiles display text defined in the **items[]**.[text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text') property. To customize tile content, define [templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates '/Documentation/Guide/UI_Components/Common/Templates/'). Specify **items[]**.[render](/api-reference/_hidden/CollectionWidgetItem/render.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#render') or **items[]**.[component](/api-reference/_hidden/CollectionWidgetItem/component.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#component') to customize a specific item and [itemRender](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemRender.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemRender') or [itemComponent](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemComponent.md '/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemComponent') to customize all items. This example uses the **itemRender** property:

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
