---
id: dxDropDownBox.Options.fieldTemplate
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for the text field. Must contain the [TextBox](/concepts/05%20Widgets/TextBox/00%20Overview.md '/Documentation/Guide/Widgets/TextBox/Overview/') widget.

##### param(value): Object
Selected values.

##### param(fieldElement): dxElement
#include common-ref-elementparam with { element: "field" }

##### return: String | Element | jQuery
A template name or container.

---
In the following code, the **fieldTemplate** is used to stylize the text field with a custom CSS class:

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dropDownBoxContainer").dxDropDownBox({
            // ...
            fieldTemplate: function (value, fieldElement) {
                var result = $("<div class='custom-item'>");
                result
                    .dxTextBox({
                        value: value,
                        readOnly: true 
                    });
                fieldElement.append(result);
            }
        });
    });

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####Angular

    <!--HTML-->
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

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####AngularJS

    <!--HTML-->
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

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####Knockout

    <!--HTML-->
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

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

---

#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')