---
id: dxCardView.Options.cardCover
type: CardCover
inheritsType: CardCover
---
---
##### shortDescription
Configures the card cover.

---
<!-- Description goes here -->

---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        cardCover: {
            imageExpr: (data) => data.imgUrl,
            altExpr: (data) => data.imgAlt,
            aspectRatio: 3.5,
            maxHeight: 200,
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-card-cover
            imageExpr="imgUrlExpr"
            altExpr="imgAltExpr"
            aspectRatio="3.5"
            maxHeight="200"
        ></dxo-card-view-card-cover>
    </dx-card-view>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        imgUrlExpr(data: Employee): string {
            return data.imgUrl;
        }
        imgAltExpr(data: Employee): string {
            return data.imgAlt;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxCardCover
                image-expr="imgUrlExpr"
                alt-expr="imgAltExpr"
                aspect-ratio="3.5"
                max-height="200"
            />
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxCardCover } from 'devextreme-vue/card-view';

    function imgUrlExpr(data: Employee): string {
        return data.imgUrl;
    }
    function imgAltExpr(data: Employee): string {
        return data.imgAlt;
    }
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView, { CardCover } from 'devextreme-react/card-view';

    function imgUrlExpr(data: Employee): string {
        return data.imgUrl;
    }
    function imgAltExpr(data: Employee): string {
        return data.imgAlt;
    }

    function App() {
        return (
            <CardView ... >
                <CardCover
                    imageExpr="imgUrlExpr"
                    altExpr="imgAltExpr"
                    aspectRatio="3.5"
                    maxHeight="200"
                />
            </CardView>
        )
    }

---