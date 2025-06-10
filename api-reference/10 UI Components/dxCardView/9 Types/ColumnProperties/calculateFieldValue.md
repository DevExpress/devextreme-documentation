---
id: ColumnProperties.calculateFieldValue
type: function(cardData)
---
---
##### shortDescription
Calculates custom field values.

##### param(cardData): Object
The data of the card to which the field belongs.

##### return: any
A field's custom value.

##### context: Column
The `this` keyword refers to the column's configuration.

---


---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        columns: [{
            caption: 'Location',
            calculateFieldValue(cardData) {
                return `${cardData.City}, ${cardData.State}`;
            }
        }]
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxi-card-view-column
            caption="Location"
            [calculateFieldValue]="calculateLocation"
        ></dxi-card-view-column>
    </dx-card-view>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        calculateLocation(cardData: cardDataObject): string {
            return `${cardData.City}, ${cardData.State}`;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumn
                caption="Location"
                :calculate-field-value="calculateLocation"
            />
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxColumn } from 'devextreme-vue/card-view';

    function calculateLocation(cardData: cardDataObject): string {
        return `${cardData.City}, ${cardData.State}`;
    }
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView, { Column } from 'devextreme-react/card-view';

    function calculateLocation(cardData: cardDataObject): string {
        return `${cardData.City}, ${cardData.State}`;
    }

    function App() {
        return (
            <CardView ... >
                <Column
                    caption="Location"
                    calculateFieldValue={calculateLocation}
                />
            </CardView>
        )
    }

---