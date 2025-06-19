---
id: dxCardView.Options.cardContentTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for card content.

##### param(data): CardTemplateData
The card's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
<!-- Description goes here -->

---

##### jQuery

    <!-- tab: index.js -->
    $('#card-view').dxCardView({
        // ...
        cardContentTemplate: (info) => {
            return createVehicleCardContent(info.card);
        },
    })

    const createVehicleCardContent = (card) => {
        const { TrademarkName, Name, CategoryName } = card.data;
        
        const name = `${TrademarkName} ${Name}`;
        const priceText = card.fields.find(f => f.column.dataField === 'Price')?.text;

        return $('<div>').append(
            $('<div>').text(name).attr('title', name),
            $('<div>').text(priceText),
            $('<div>').text(CategoryName)
        )
    };

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ...
        cardContentTemplate="vehicleCardContentTemplate"
    >
        <div *dxTemplate="let model of 'vehicleCardContentTemplate'">
            <ng-container *ngIf="model.card?.data as data">
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
            card-content-template="vehicleCardContentTemplate"
        >
            <template #vehicleCardContentTemplate="{ data: { card } }">
                <div>
                    <div :title="`${card.data.TrademarkName} ${card.data.Name}`">
                        {{ card.data.TrademarkName + ' ' + card.data.Name }}
                    </div>
                    <div>{{ card.fields?.find(f => f.column?.dataField === 'Price')?.text }}</div>
                    <div>{{ card.data.CategoryName }}</div>
                </div>
            </template>
        </DxCardView>
    </template>

##### React

    <!-- tab: App.tsx -->
    import CardView, { CardViewTypes } from "devextreme-react/card-view"

    // ...
    function vehicleCardContentRender(model: CardViewTypes.CardTemplateData) {
        const { TrademarkName, Name, CategoryName } = model.card.data;
        const name = `${TrademarkName} ${Name}`;
        const price = model.card.fields.find(f => f.column.dataField === 'Price')?.text;

        return (
            <div>
                <div title={name}>{name}</div>
                <div>{price}</div>
                <div>{CategoryName}</div>
            </div>
        )
    }

    function App() {
        return (
            <CardView ...
                cardContentRender={vehicleCardContentRender}
            >
            </CardView>
        )
    }

---