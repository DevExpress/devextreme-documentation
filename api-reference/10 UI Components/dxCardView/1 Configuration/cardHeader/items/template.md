---
id: dxCardView.Options.cardHeader.items.template
type: template
---
---
##### shortDescription
Configures a custom template for the item.

##### return: String | Element | jQuery
Template name or container.

##### param(itemData): CollectionWidgetItem
<!-- %param(itemData)% -->

##### param(itemIndex): Number
<!-- %param(itemIndex)% -->

##### param(itemElement): DxElement
<!-- %param(itemElement)% -->

---
---
##### jQuery

This property supports the following values:

- Template container as a jQuery object or DOM Node
- A function that returns a template container (as a jQuery object or DOM node)

For more information about templates, refer to the following topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: index.js -->
    $("#card-view-container").dxCardView({
        cardHeader: {
            items: [{ // ...
                template: '<div>Custom Item</div>'
            }],
        },
    });

##### Angular

For more information about templates, refer to the following topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: app.component.html -->
    <dx-card-view>
        <dxo-card-view-card-header>
            <dxi-card-view-item>
                <div *dxTemplate>
                    <div>Custom Item</div>
                </div>
            </dxi-card-view-item>
        </dxo-card-view-card-header>
    </dx-card-view>

##### Vue

For more information about templates, refer to the following topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: App.vue -->
    <template>
        <DxCardView>
            <DxCardHeader>
                <DxItem>
                    <div>Custom Item</div>
                </DxItem>
            </DxCardHeader>
        </DxCardView>
    </template>

    <script>
    import { DxCardView, DxCardHeader, DxItem } from 'devextreme-vue/card-view';

    </script>

##### React

[note] Use the React-specific [render](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardHeader/items/render.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/cardHeader/items/#render') and [component](/api-reference/10%20UI%20Components/dxCardView/1%20Configuration/cardHeader/items/component.md '/Documentation/ApiReference/UI_Components/dxCardView/Configuration/cardHeader/items/#component') properties instead of **template**.

For more information about templates, refer to the following topic: [DevExtreme {Framework} - Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

    <!-- tab: App.tsx -->
    import { CardView, CardHeader, Item } from 'devextreme-react/card-view';

    function renderCustomItem() {
        return <div>Custom Item</div>;
    }

    function App() {
        return (
            <CardView>
                <CardHeader>
                    <Item ...
                        render={renderCustomItem}
                    />
                </CardHeader>
            </CardView>
        );
    }

---

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
