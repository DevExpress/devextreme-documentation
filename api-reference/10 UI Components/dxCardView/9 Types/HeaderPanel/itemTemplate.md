---
id: HeaderPanel.itemTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for header panel items.

##### param(data): ColumnTemplateData
The column's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
<!-- Description goes here -->

---

##### jQuery

    <!-- tab: index.js -->
    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        headerPanel: {
            itemTemplate(data) {
                return $('<div>').text(`${data.column.visibleIndex+1}: ${data.column.caption}`);
            },
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxo-card-view-header-panel
            itemTemplate="headerItemTemplate"
        ></dxo-card-view-header-panel>
        <div *dxTemplate="let data of 'headerItemTemplate'">
            <div>{{ data.column.visibleIndex+1 }}: {{ data.column.caption }}</div>
        </div>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxHeaderPanel
                item-template="headerItemTemplate"
            />
            <template #headerItemTemplate="{ data }">
                <div>
                    <div>{{ data.column.visibleIndex+1 }}: {{ data.column.caption }}</div>
                </div>
            </template>
        </DxCardView>
    </template>

##### React

    <!-- tab: App.tsx -->
    import CardView, { CardViewTypes, HeaderPanel } from "devextreme-react/card-view"
    
    function headerItemRender(data: CardViewTypes.ColumnTemplateData) {
        return (
            <div>
                <div>{`${data.column.visibleIndex+1}: ${data.column.caption}`}</div>
            </div>
        )
    }

    // ...
    function App() {
        return (
            <CardView ... >
                <HeaderPanel
                    itemRender={headerItemRender}
                />
            </CardView>
        )
    }

---