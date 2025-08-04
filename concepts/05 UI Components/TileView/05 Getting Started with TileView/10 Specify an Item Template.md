The default behavior of TileView is to display tile text defined in the **items[]**.[text](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#text) property. To implement custom tile content, specify **items[]**.[template](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/items/#template) or [itemTemplate](/Documentation/ApiReference/UI_Components/dxTileView/Configuration/#itemTemplate). This example configures a template for all items using the **itemTemplate** property:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#tileview').dxTileView({
            dataSource: bikes,
            itemTemplate(itemData, itemIndex, itemElement) {
                const text = itemData.disabled ? 'Out of stock' : DevExpress.localization.formatNumber(itemData.price, 'currency');

                const element = $('<div>')
                    .addClass('image')
                    .css('background-image', `url(${itemData.imageSrc})`)
                    .append($('<p>')
                    .text(text)
                    .addClass('price-text'));

                if (itemData.disabled) {
                    element.css('opacity', '50%');
                }

                itemElement.append(element);
            },
        });
    });

    <!-- tab: index.css -->
    .dx-tile-content .image {
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        padding: 5px;
    }

    .price-text {
        margin: 0;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-tile-view
        [dataSource]="bikes"
        itemTemplate="tileTemplate"
    >
        <div *dxTemplate="let data of 'tileTemplate'">
            @if (!data.disabled) {
                <div class="image" [style]="{ 'background-image': 'url(' + data.imageSrc + ')' }">
                    <p class="price-text">{{ formatNumber(data.price, 'currency') }}</p>
                </div>
            } @else {
                <div class="image" [style]="{ 'background-image': 'url(' + data.imageSrc + ')', 'opacity': '50%' }">
                    <p class="price-text">Out of stock</p>
                </div>
            }
        </div>
    </dx-tile-view>

    <!-- tab: app.component.scss -->
    .dx-tile-content .image {
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        padding: 5px;
    }

    .price-text {
        margin: 0;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTileView
            :data-source="bikes"
            item-template="tileTemplate"
        >
            <template #tileTemplate="data">
                <div
                    v-if="!data.data.disabled"
                    class="image"
                    :style="{ 'background-image': `url(${data.data.imageSrc})` }"
                >
                    <p class="price-text">{{ formatNumber(data.data.price, 'currency') }}</p>
                </div>
                <div
                    v-else
                    class="image"
                    :style="{ 'background-image': `url(${data.data.imageSrc})`, 'opacity': '50%' }"
                >
                    <p class="price-text">Out of stock</p>
                </div>
            </template>
        </DxTileView>
    </template>
    <style scoped>
    .dx-tile-content.image {
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        padding: 5px;
    }

    .price-text {
        margin: 0;
    }
    </style>

##### React

    <!-- tab: App.tsx -->
    function TileRender(itemData: { price: number; disabled: boolean | undefined; imageSrc: string }): JSX.Element {
        if (!itemData.disabled) {
            return (
                <div className="image" style={{ backgroundImage: `url(${itemData.imageSrc})` }}>
                    <p className="price-text">{ formatNumber(itemData.price, 'currency') }</p>
                </div>
            );
        }

        return (
            <div className="image" style={{ backgroundImage: `url(${itemData.imageSrc})`, opacity: '50%' }}>
                <p className="price-text">Out of stock</p>
            </div>
        );
    }

    export default function App(): JSX.Element {
        return (
            <TileView
                dataSource={bikes}
                itemRender={TileRender}
            />
        );
    }

    <!-- tab: App.css -->
    .dx-tile-content .image {
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        padding: 5px;
    }

    .price-text {
        margin: 0;
    }

---

