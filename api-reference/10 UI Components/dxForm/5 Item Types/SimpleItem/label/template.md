---
id: dxFormSimpleItem.label.template
type: template
---
---
##### shortDescription
A template that can be used to replace the label with custom content.

##### param(itemData): Object
The item's data.

##### field(itemData.component): dxForm
The Form instance.

##### field(itemData.dataField): String
The item's [dataField](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/dataField.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#dataField').

##### field(itemData.editorOptions): any
The item editor's [configuration](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorOptions.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorOptions').

##### field(itemData.editorType): String
The editor's [type](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType').

##### field(itemData.name): String
The item's [name](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/name.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#name').

##### field(itemData.text): String
The label's [text](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/text.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#text').

##### param(itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### return: String | Element | jQuery
The template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/"
}

The following code adds a custom label to the SimpleItem:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#formContainer").dxForm({
            // ...
            items: [{
                label: {
                    template(data) {
                        return `Custom ${data.text}`;
                    }
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form ... >
        <dxi-item ... >
            <dxo-label template="customLabel"></dxo-label>
        </dxi-item>
        <div *dxTemplate="let data of 'customLabel'">
            <span>Custom {{ data.text }}</span>
        </div>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm ...>
            <DxSimpleItem ...>
                <DxLabel template="customLabel"/>
            </DxSimpleItem>
            <template #customLabel="{ data }">
                <span>
                    Custom {{ data.text }}
                </span>
            </template>
        </DxForm>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->

    const customItem = (data) => {
        return `Custom ${data.text}`;
    }

    function App() {
        return (
            <Form ...>
                <SimpleItem ...>
                    <Label render={customItem} />
                </SimpleItem>
            </Form>
        );
    };

    export default App;

---