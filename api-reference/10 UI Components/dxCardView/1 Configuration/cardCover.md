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
            imageExpr: "/images/image.jpg",
            altExpr: "A blank image.",
            aspectRatio: 3.5,
            maxHeight: 200,
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-card-cover
            imageExpr="/images/image.jpg"
            altExpr="A blank image."
            aspectRatio="3.5"
            maxHeight="200"
        ></dxo-card-view-card-cover>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxCardCover
                image-expr="/images/image.jpg"
                alt-expr="A blank image."
                aspect-ratio="3.5"
                max-height="200"
            />
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxCardCover } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView, { CardCover } from 'devextreme-react/card-view';

    function App() {
        return (
            <CardView ... >
                <CardCover
                    imageExpr="/images/image.jpg"
                    altExpr="A blank image."
                    aspectRatio="3.5"
                    maxHeight="200"
                />
            </CardView>
        )
    }

---