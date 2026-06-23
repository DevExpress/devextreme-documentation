To add a tooltip to a Form item label, use the **label**.[template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/label/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/label/#template') property. Inside the template, render the label text alongside a [Tooltip](/api-reference/10%20UI%20Components/dxTooltip '/Documentation/ApiReference/UI_Components/dxTooltip/') component that displays additional information when a user hovers over the label.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                position: "CEO"
            },
            items: [{
                dataField: "name",
                label: {
                    template: function(data, element) {
                        var labelText = $("<span>").text(data.text);
                        var iconEl = $("<i>")
                            .addClass("dx-icon dx-icon-info")
                            .attr("id", "nameTooltipTarget")
                            .css({ "margin-left": "4px", "cursor": "pointer" });

                        var tooltipEl = $("<div>");
                        tooltipEl.dxTooltip({
                            target: "#nameTooltipTarget",
                            showEvent: "mouseenter",
                            hideEvent: "mouseleave",
                            contentTemplate: function() {
                                return "Enter the full name as it appears on official documents.";
                            }
                        });

                        element.append(labelText, iconEl, tooltipEl);
                    }
                }
            },
            "position"]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-form [formData]="employee">
        <dxi-form-item dataField="name">
            <dxo-label [template]="labelTemplate"></dxo-label>
        </dxi-form-item>
        <dxi-form-item dataField="position"></dxi-form-item>
    </dx-form>

    <ng-template #labelTemplate let-data>
        <span>{{ data.text }}</span>
        <i id="nameTooltipTarget" class="dx-icon dx-icon-info tooltip-icon"></i>
        <dx-tooltip
            target="#nameTooltipTarget"
            showEvent="mouseenter"
            hideEvent="mouseleave">
            <div *dxTemplate="let t of 'content'">
                Enter the full name as it appears on official documents.
            </div>
        </dx-tooltip>
    </ng-template>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { DxFormModule, DxTooltipModule } from "devextreme-angular";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrl: "./app.component.css",
        standalone: true,
        imports: [DxFormModule, DxTooltipModule]
    })
    export class AppComponent {
        employee = {
            name: "John Heart",
            position: "CEO"
        };
    }

    <!-- tab: app.component.css -->
    .tooltip-icon {
        margin-left: 4px;
        cursor: pointer;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :form-data="employee">
            <DxSimpleItem data-field="name">
                <DxLabel :template="labelTemplate" />
            </DxSimpleItem>
            <DxSimpleItem data-field="position" />
        </DxForm>

        <DxTooltip
            target="#nameTooltipTarget"
            show-event="mouseenter"
            hide-event="mouseleave">
            <template #content>
                Enter the full name as it appears on official documents.
            </template>
        </DxTooltip>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxForm, DxSimpleItem, DxLabel } from 'devextreme-vue/form';
    import { DxTooltip } from 'devextreme-vue/tooltip';
    import { h, ref } from 'vue';

    const employee = ref({
        name: 'John Heart',
        position: 'CEO'
    });

    const labelTemplate = (data: { text: string }) => h('span', [
        data.text,
        h('i', {
            id: 'nameTooltipTarget',
            class: 'dx-icon dx-icon-info tooltip-icon'
        })
    ]);
    </script>

    <style>
    .tooltip-icon {
        margin-left: 4px;
        cursor: pointer;
    }
    </style>

##### React

    <!-- tab: App.css -->
    .tooltip-icon {
        margin-left: 4px;
        cursor: pointer;
    }

    <!-- tab: App.tsx -->
    import React from 'react';

    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import './App.css';

    import { Form, SimpleItem, Label } from 'devextreme-react/form';
    import { Tooltip } from 'devextreme-react/tooltip';

    const employee = {
        name: 'John Heart',
        position: 'CEO'
    };

    function LabelTemplate({ data }: { data: { text: string } }) {
        return (
            <>
                <span>{data.text}</span>
                <i
                    id="nameTooltipTarget"
                    className="dx-icon dx-icon-info tooltip-icon"
                />
                <Tooltip
                    target="#nameTooltipTarget"
                    showEvent="mouseenter"
                    hideEvent="mouseleave">
                    Enter the full name as it appears on official documents.
                </Tooltip>
            </>
        );
    }

    export default function App() {
        return (
            <Form formData={employee}>
                <SimpleItem dataField="name">
                    <Label render={(data) => <LabelTemplate data={data} />} />
                </SimpleItem>
                <SimpleItem dataField="position" />
            </Form>
        );
    }

---

You can find a full implementation example in the [Form - Item Customization](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/ItemCustomization/) demo.
