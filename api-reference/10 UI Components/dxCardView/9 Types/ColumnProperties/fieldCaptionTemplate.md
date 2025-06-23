---
id: ColumnProperties.fieldCaptionTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the field caption.

##### param(data): FieldTemplateData
The field's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
<!-- Description goes here -->

---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        columns: [{
            // ...
            fieldCaptionTemplate(data) {
                return $('<div>')
                    .append(
                        $('<i>').addClass("dx-icon-errorcircle"),
                        $('<span>').text(data.field.column.caption)
                    )
            },
        }]
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxi-card-view-column ...
            fieldCaptionTemplate="captionTemplate"
        ></dxi-card-view-column>
        <div *dxTemplate="let data of 'captionTemplate'">
            <i class="dx-icon-errorcircle"></i>
            <span>{{ data.field.column.caption }}</span>
        </div>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumn ...
                field-caption-template="captionTemplate"
            />
            <template #captionTemplate="{ data }">
                <div>
                    <i class="dx-icon-errorcircle"></i>
                    <span>{{ data.field.column.caption }}</span>
                </div>
            </template>
        </DxCardView>
    </template>

##### React

    <!-- tab: App.tsx -->
    import CardView, { CardViewTypes } from "devextreme-react/card-view"
    
    function captionRender(data: CardViewTypes.FieldTemplateData) {
        return (
            <div>
                <i class="dx-icon-errorcircle"></i>
                <span>{data.field.column.caption}</span>
            </div>
        )
    }

    // ...
    function App() {
        return (
            <CardView ... >
                <Column ...
                    fieldCaptionRender={captionRender}
                />
            </CardView>
        )
    }

---