---
id: dxDropDownBox.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the text field. Must contain the [TextBox](/concepts/05%20UI%20Components/TextBox/00%20Overview.md '/Documentation/Guide/UI_Components/TextBox/Overview/') UI component.

##### param(value): Object
Selected values.

##### param(fieldElement): DxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Element | jQuery
A template name or container.

---

In the following code, the **fieldTemplate** is used to stylize the text field with a custom CSS class:

---

##### jQuery

    <!--tab: index.js -->
    $(function () {
        $("#dropDownBoxContainer").dxDropDownBox({
            // ...
            fieldTemplate: function (value, fieldElement) {
                const result = $("<div class='custom-item'>");
                result
                    .dxTextBox({
                        value: value,
                        readOnly: true
                    });
                fieldElement.append(result);
            }
        });
    });

    <!--tab: style.css -->
    .custom-item {
        font-size: 16px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box ...
        fieldTemplate="field">
        <div *dxTemplate="let data of 'field'">
            <div class="custom-item">
                <dx-text-box
                    [value]="data"
                    [readOnly]="true"
                ></dx-text-box>
            </div>
        </div>
    </dx-drop-down-box>

    <!-- tab: app.component.css -->
    .custom-item {
        font-size: 16px;
    }

##### AngularJS

    <!-- tab: index.html -->
    <div dx-drop-down-box="{
        ...
        fieldTemplate: 'field'
    }" dx-item-alias="data">
        <div data-options="dxTemplate: { name: 'field' }">
            <div class="custom-item">
                <div dx-text-box="{ value: data, readOnly: true }"></div>
            </div>
        </div>
    </div>

    <!-- tab: style.css -->
    .custom-item {
        font-size: 16px;
    }

##### Knockout

    <!-- tab: index.html -->
    <div data-bind="dxDropDownBox: {
        ...
        fieldTemplate: 'field'
    }">
        <div data-options="dxTemplate: { name: 'field' }">
            <div class="custom-item">
                <div data-bind="dxTextBox: { value: $data, readOnly: true }"></div>
            </div>
        </div>
    </div>

    <!-- tab: style.css -->
    .custom-item {
        font-size: 16px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownBox ...
            field-template="field">
            <template #field="{ value }">
                <div class="custom-item">
                    <DxTextBox
                        :value="value"
                        :read-only="true"
                    />
                </div>
            </template>
        </DxDropDownBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownBox from 'devextreme-vue/drop-down-box';
    import DxTextBox from 'devextreme-vue/text-box';

    export default {
        components: {
            DxDropDownBox,
            DxTextBox,
        },
        data() {
            // ...
        },
        methods: {
            // ...
        }
    };
    </script>

    <!-- tab: style.css -->
    .custom-item {
        font-size: 16px;
    }

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';
    import { TextBox } from 'devextreme-react/text-box';

    const fieldRender = value => {
        return (
            <div class="custom-item">
                <TextBox
                    defaultValue={value}
                    readOnly={true}
                />
            </div>
        );
    }

    const App = () => <DropDownBox fieldRender={fieldRender}/>;

    export default App;

    <!-- tab: style.css -->
    .custom-item {
        font-size: 16px;
    }

---

#####See Also#####

- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')
