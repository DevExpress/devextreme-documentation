---
id: dxCardView.Options.cardFooterTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for a card footer.

##### param(data): CardTemplateData
The card's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/Overview"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        cardFooterTemplate() {
            return $('<div>').dxButton({
                text: 'Click',
                onClick() {
                    // Implement custom logic here
                }
            })
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... 
        cardFooterTemplate="footerTemplate"
    >
        <div *dxTemplate="let params of 'footerTemplate'">
            <dx-button
                text="Click"
                (onClick)="handleOnClick()" // Implement custom logic here
            ></dx-button>
        </div>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ...
            card-footer-template="footerTemplate"
        >
            <template #footerTemplate="{ data }">
                <DxButton
                    text="Click"
                    @click="handleOnClick" // Implement custom logic here
                />
            </template>
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView from 'devextreme-vue/card-view';
    import DxButton from 'devextreme-vue/button';
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView from 'devextreme-react/card-view';
    import Button from 'devextreme-react/button';

    function CardFooterTemplate() {
        return (
            <Button
                text="Click"
                onClick={handleOnClick} // Implement custom logic here
            />
        )
    }

    function App() {
        return (
            <CardView ... 
                cardContentRender={CardFooterTemplate}
            />
        )
    }

---