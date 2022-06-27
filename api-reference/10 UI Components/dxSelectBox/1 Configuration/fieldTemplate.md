---
id: dxSelectBox.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the text field. Must contain the [TextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') UI component.

##### param(selectedItem): Object
The selected item's data.

##### param(fieldElement): DxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Element | jQuery
A template name or container.

---
If you define a **fieldTemplate**, the component does not render the underlying HTML. In this case, manually render hidden input with the corresponding name attribute to submit values through HTML form.

The example below shows how to define the **fieldTemplate**. If you want to customize field text, use the TextBox's [text](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#text) property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            // ...
            fieldTemplate(data, container) {
                container.append(
                    $('<div>').dxTextBox({
                        text: data.Category + ": " + data.Name,
                        readOnly: true
                    })
                )
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        fieldTemplate="field"
    >
        <div *dxTemplate="let data of 'field'">
            <div>
                <dx-text-box 
                    text="{{ data && data.Category + ': ' + data.Name }}" 
                    [readOnly]="true"
                >
                </dx-text-box>
            </div>
        </div>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            field-template="field"
        >
            <template #field="{ data }">
                <DxTextBox 
                    :text="data && data.Category + ': ' + data.Name" 
                    :read-only="true"
                />
            </template>
        </Dx{WidgetName}>
    </template>

    <script>
    // ...
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';
    import DxTextBox from 'devextreme-vue/text-box';

    export default {
        components: {
            Dx{WidgetName},
            DxTextBox
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import {WidgetName} from "devextreme-react/{widget-name}";
    import TextBox from "devextreme-react/text-box";

    function Field(data) {
        return <TextBox text={data && data.Category + ': ' + data.Name} readOnly={true} />;
    }
    function App() {
        return (
        <{WidgetName} ...
            fieldRender={Field}
        />
        </div>
        );
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/{WidgetName}/Overview/"
}

#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/UI_Components/{WidgetName}/Customize_Item_Appearance/)
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')