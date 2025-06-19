---
id: dxCardView.Options.cardTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the card.

##### param(data): CardTemplateData
The card's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/CardTemplate"
}


---

##### jQuery

    <!-- tab: index.js -->
    $('#card-view').dxCardView({
        // ...
        cardTemplate: (info) => {
            return createVehicleCard(info.card);
        },
    })

    const createVehicleCard = (card) => {
        const { TrademarkName, Name, CategoryName, ID } = card.data;

        const cardEl = $('<div>').addClass('vehicle__card');
        
        const name = `${TrademarkName} ${Name}`;
        const priceText = card.fields.find(f => f.column.dataField === 'Price')?.text;

        const vehicleInfo = $('<div>')
            .addClass('vehicle__info')
            .append(
                $('<div>').addClass('vehicle__name')
                    .text(name)
                    .attr('title', name),
                $('<div>').addClass('vehicle__price')
                    .text(priceText),
                $('<div>').addClass('vehicle__type-container')
                    .append(
                        $('<div>').addClass('vehicle__type')
                            .text(CategoryName)
                    )
            )

        const imageWrapper = $('<div>')
            .addClass('vehicle__img-wrapper')
            .append(
                $('<img>').addClass('vehicle__img')
                    .attr({
                        src: `images/vehicles/image_${ID}.png`,
                        alt: `${TrademarkName} ${Name}`,
                    })
            );

        cardEl.append(imageWrapper, vehicleInfo);

        return cardEl;
    };

    <!-- tab: styles.css -->
    .vehicle__name {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        height: 28px;
        padding: 0 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .vehicle__price {
        padding: 0 12px;
        height: 32px;
        font-weight: 700;
        font-size: 24px;
        color: var(--dx-color-primary);
    }

    .vehicle__type-container {
        padding: 12px;
        display: inline-block;
    }

    .vehicle__type {
        padding: 2px 6px;
        background-color: var(--dx-color-separator);
        border-radius: 13px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ...
        cardTemplate="vehicleCardTemplate"
    >
        <!-- ... -->
        <div *dxTemplate="let model of 'vehicleCardTemplate'">
            <ng-container *ngIf="model.card?.data as data">
                <div class="vehicle__card">
                    <div class="vehicle__img-wrapper">
                        <img
                            class="vehicle__img"
                            src="images/vehicles/image_{{ data.ID }}.png"
                            alt="{{ data.trademarkName + ' ' + data.Name }}"
                        />
                    </div>
                    <div class="vehicle__info">
                        <div class="vehicle__name" title="{{ data.trademarkName + ' ' + data.Name }}">
                            {{ data.TrademarkName + ' ' + data.Name }}
                        </div>
                    <div class="vehicle__price">{{ getFormattedPrice(model.card) }}</div>
                        <div class="vehicle__type-container">
                            <div class="vehicle__type">{{ data.CategoryName }}</div>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    </dx-card-view>

    <!-- tab: app.component.ts -->
    import { CardInfo } from 'devextreme-angular/ui/card-view';

    // ...
    export class AppComponent {
        getFormattedPrice(card: CardInfo): string {
            const priceText = card.fields.find(f => f?.column?.dataField === 'Price');
            return priceText?.text ?? '';
        }
    }

    <!-- tab: app.component.css -->
    .vehicle__name {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        height: 28px;
        padding: 0 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .vehicle__price {
        padding: 0 12px;
        height: 32px;
        font-weight: 700;
        font-size: 24px;
        color: var(--dx-color-primary);
    }

    .vehicle__type-container {
        padding: 12px;
        display: inline-block;
    }

    .vehicle__type {
        padding: 2px 6px;
        background-color: var(--dx-color-separator);
        border-radius: 13px;
    }

    .vehicle__img {
        height: 100%;
        width: 100%;
        object-fit: scale-down;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ...
            card-template="cardTemplate"
        >
            <!-- ... -->
            <template #cardTemplate="{
                data: {
                    card: {
                        data: {
                            ID,
                            TrademarkName,
                            Name,
                            CategoryName,
                        },
                        fields,
                    }
                }
            }">
                <div class="vehicle__card">
                    <div class="vehicle__img-wrapper">
                        <img class="vehicle__img"
                            :src="`images/vehicles/image_${ID}.png`"
                            :alt="`${TrademarkName} ${Name}`"
                        >
                    </div>
                    <div class="vehicle__info">
                        <div class="vehicle__name" :title="`${model}`">
                            {{ TrademarkName + ' ' + Name }}
                        </div>
                        <div class="vehicle__price">
                            {{ fields?.find(f => f.column?.dataField === 'Price')?.text }}
                        </div>
                        <div class="vehicle__type-container">
                            <div class="vehicle__type">
                                {{ CategoryName }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DxCardView>
    </template>

##### React

    <!-- tab: App.tsx -->

---