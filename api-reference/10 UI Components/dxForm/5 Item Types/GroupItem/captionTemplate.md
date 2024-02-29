---
id: dxFormGroupItem.captionTemplate
type: template
---
---
##### shortDescription
Specifies a template that can be used to replace group caption with custom content.

##### param(data): Object
The group item's data.

##### field(data.caption): String
The group [caption](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption).

##### field(data.component): dxForm
The Form instance.

##### field(data.name): String
The group item's [name](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#name).

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
The template name or container.

---
This property overrides the [caption](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/GroupItem/#caption).

The following code example adds an icon to the existing caption:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                itemType: "group",
                caption: "Personal Data",
                captionTemplate: (data, $element) => {
                    $('<i class="dx-icon dx-icon-user"></i>').appendTo($element);
                    $(`<span>${data.caption}</span>`).appendTo($element);
                },
                items: ["firstName", "lastName", "position"]
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item
            itemType="group"
            caption="Personal Data"
            captionTemplate="caption-template"
        >
                <dxi-item dataField="firstName"></dxi-item>
                <dxi-item dataField="lastName"></dxi-item>
                <dxi-item dataField="position"></dxi-item>
        </dxi-item>
        <div *dxTemplate="let data of 'caption-template'">
            <i class="dx-icon dx-icon-user"></i>
            {{ data.caption }}
        </div>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ... >
            <DxGroupItem 
                caption="Personal Data"
                caption-template="caption-template"
            >
                <DxSimpleItem data-field="firstName" />
                <DxSimpleItem data-field="lastName" />
                <DxSimpleItem data-field="position" />
            </DxGroupItem>
            <template #caption-template="{ data }">
                <i class="dx-icon dx-icon-user"></i>
                {{ data.caption }}
            </template>
        </DxForm>
    </template>
    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    const renderCaption = (data) => {
        return (
            <div>
                <i class="dx-icon dx-icon-user"></i>
                <span>{data.caption}</span>
            </div>
        );
    }

    export default function App() {
        return (
            <Form ... >
                <GroupItem 
                    caption="Personal Data"
                    captionRender={renderCaption}
                >
                    <SimpleItem dataField="firstName" />
                    <SimpleItem dataField="lastName" />
                    <SimpleItem dataField="position" />
                </GroupItem>
            </Form>
        );
    }

    export default App;

---