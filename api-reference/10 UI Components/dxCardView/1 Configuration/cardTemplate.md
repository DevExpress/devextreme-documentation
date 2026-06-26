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
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/CardTemplate/"
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

        const cardEl = $('<div>');
        
        const name = `${TrademarkName} ${Name}`;
        const priceText = card.fields.find(f => f.column.dataField === 'Price')?.text;

        const vehicleInfo = $('<div>').append(
                $('<div>').text(name).attr('title', name),
                $('<div>').text(priceText),
                $('<div>').text(CategoryName)
            )

        const imageWrapper = $('<div>').append(
                $('<img>').attr({
                        src: `images/vehicles/image_${ID}.png`,
                        alt: name,
                    })
        );

        cardEl.append(imageWrapper, vehicleInfo);

        return cardEl;
    };

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ...
        cardTemplate="vehicleCardTemplate"
    >
        <div *dxTemplate="let model of 'vehicleCardTemplate'">
            <ng-container *ngIf="model.card?.data as data">
                <div>
                    <img
                        src="images/vehicles/image_{{ data.ID }}.png"
                        alt="{{ data.trademarkName + ' ' + data.Name }}"
                    />
                </div>
                <div>
                    <div title="{{ data.trademarkName + ' ' + data.Name }}">
                        {{ data.TrademarkName + ' ' + data.Name }}
                    </div>
                    <div>{{ getFormattedPrice(model.card) }}</div>
                    <div>{{ data.CategoryName }}</div>
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

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ...
            card-template="vehicleCardTemplate"
        >
            <template #vehicleCardTemplate="{ data: { card } }">
                <div>
                    <div>
                        <img
                            :src="`images/vehicles/image_${card.data.ID}.png`"
                            :alt="`${card.data.TrademarkName} ${card.data.Name}`"
                        >
                    </div>
                    <div>
                        <div :title="`${card.data.TrademarkName} ${card.data.Name}`">
                            {{ card.data.TrademarkName + ' ' + card.data.Name }}
                        </div>
                        <div>{{ card.fields?.find(f => f.column?.dataField === 'Price')?.text }}</div>
                        <div>{{ card.data.CategoryName }}</div>
                    </div>
                </div>
            </template>
        </DxCardView>
    </template>

##### React

    <!-- tab: App.tsx -->
    import CardView, { CardViewTypes } from "devextreme-react/card-view"

    // ...
    function vehicleCardRender(model: CardViewTypes.CardTemplateData) {
        const { TrademarkName, Name, CategoryName, ID } = model.card.data;
        const name = `${TrademarkName} ${Name}`;
        const price = model.card.fields.find(f => f.column.dataField === 'Price')?.text;

        return (
            <div>
                <div>
                    <img
                        src={`images/vehicles/image_${ID}.png`}
                        alt={name}
                    />
                </div>
                <div>
                    <div title={name}>{name}</div>
                    <div>{price}</div>
                    <div>{CategoryName}</div>
                </div>
            </div>
        )
    }

    function App() {
        return (
            <CardView ...
                cardRender={vehicleCardRender}
            >
            </CardView>
        )
    }

---