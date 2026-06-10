To use DropDownBox with an embedded UI component, synchronize the two components' data and selection state. The steps below use an embedded DataGrid as an example. The same approach applies to other DevExtreme UI components.

1. **Specify data sources**    
The DropDownBox's and embedded UI component's data sources can be the same or different. If they are different, the UI component's key field must be present in the DropDownBox's data source.        

        <!--JavaScript-->
        // Different data sources, both have the ID field
        const widgetData = [
            { ID: 1, fullName: "John Heart", position: "CEO"},
            { ID: 2, fullName: "Samantha Bright", position: "COO", headID: 1 },
            // ...
        ];
        const dropDownBoxData = [
            { ID: 1, email: "jheart@dx-email.com" },
            { ID: 2, email: "samanthab@dx-email.com" },
            // ...
        ];

1. **Specify the shared key field**       
Assign the field's name to the DropDownBox's [valueExpr](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#valueExpr') property and to the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') property of the embedded UI component's store. The following example uses an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'):

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            // ...
            $("#dropDownBox").dxDropDownBox({ 
                dataSource: dropDownBoxData,
                valueExpr: "ID",
                displayExpr: "email",
                contentTemplate: function (e) {
                    const $dataGrid = $("<div>").dxDataGrid({
                        dataSource: new DevExpress.data.ArrayStore({ 
                            key: "ID",
                            data: widgetData
                        }),
                        // ...
                    });
                    return $dataGrid;
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-drop-down-box
            valueExpr="ID"
            displayExpr="email"
            [dataSource]="dropDownBoxData">
            <dx-data-grid
                [dataSource]="gridDataSource">
            </dx-data-grid>
        </dx-drop-down-box>

        <!--TypeScript-->
        import { Component } from "@angular/core";
        import { DxDropDownBoxComponent } from "devextreme-angular/ui/drop-down-box";
        import { DxDataGridComponent } from "devextreme-angular/ui/data-grid";
        import ArrayStore from "devextreme/data/array_store";

        @Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            standalone: true,
            imports: [DxDropDownBoxComponent, DxDataGridComponent]
        })
        export class AppComponent {
            widgetData: any;
            dropDownBoxData: any;
            gridDataSource: ArrayStore;
            constructor () {
                // ...
                this.gridDataSource = new ArrayStore({
                    key: "ID",
                    data: this.widgetData
                });
            }
        }

    ##### Vue

        <!--tab: App.vue-->
        <template>
            <div>
                <DxDropDownBox
                    value-expr="ID"
                    display-expr="email"
                    :data-source="dropDownBoxData">
                    <DxDataGrid :data-source="gridDataSource" />
                </DxDropDownBox>
            </div>
        </template>

        <script setup lang="ts">
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

        import DxDropDownBox from 'devextreme-vue/drop-down-box';
        import { DxDataGrid } from 'devextreme-vue/data-grid';
        import ArrayStore from 'devextreme/data/array_store';

        const dropDownBoxData = dropDownBoxData;
        const gridDataSource = new ArrayStore({
            data: widgetData,
            key: 'ID',
        });
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import React from 'react';
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

        import { DropDownBox } from 'devextreme-react/drop-down-box';
        import { DataGrid } from 'devextreme-react/data-grid';
        import ArrayStore from 'devextreme/data/array_store';

        const dropDownBoxData = [/* ... */];
        const gridDataSource = new ArrayStore({
            data: widgetData,
            key: 'ID',
        });

        export default function App() {
            return (
                <DropDownBox
                    dataSource={dropDownBoxData}
                    valueExpr="ID"
                    displayExpr="email">
                    <DataGrid dataSource={gridDataSource} />
                </DropDownBox>
            );
        }

    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DropDownBox()
            .ID("dropDownBox")
            .DataSource(new JS("dropDownBoxData"))
            .ValueExpr("ID")
            .DisplayExpr("email")
            .ContentTemplate(new TemplateName("dataGrid"))
        )
        @using (Html.DevExtreme().NamedTemplate("dataGrid")) {
            @(Html.DevExtreme().DataGrid()
                .ID("dataGrid")
                .DataSource(ds => ds.Array()
                    .Key("ID")
                    .Data(new JS("widgetData"))
                )
            )
        }

    ---

1. **Synchronize the DropDownBox's value and the embedded UI component's selection**        
The synchronization implementation depends on the embedded UI component's API and the library/framework you use. If the library/framework supports two-way binding, you can bind the DropDownBox's [value](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#value') and the UI component's **selectedRowKeys**/**selectedItemKeys** to the same variable. If not, handle events as follows:
    1. **Set the initial selection in the embedded UI component**     
        Implement the UI component's **onContentReady** handler to select data items according to the DropDownBox's initial value. In some UI components, you can set **selectedRowKeys** or **selectedItemKeys** directly instead of using **onContentReady**.
    1. **Update the selection**     
        Implement the DropDownBox's [onValueChanged](/api-reference/10%20UI%20Components/dxDropDownBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onValueChanged') handler to update the selection when the DropDownBox's value changes.
    1. **Update the DropDownBox's value**     
        Implement the embedded UI component's **onSelectionChanged** handler to update the DropDownBox's value when the selection changes.

    [important] Ensure the type of **value** matches the **selectedRowKeys**/**selectedItemKeys** type (such as [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)).

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            // ...
            let dataGridInstance;
            $("#dropDownBox").dxDropDownBox({ 
                // ...
                value: [1],
                contentTemplate: function (e) {
                    const value = e.component.option("value"),
                        $dataGrid = $("<div>").dxDataGrid({
                            // ...
                            selection: { mode: "multiple" },
                            selectedRowKeys: value,
                            onSelectionChanged: function (info) {
                                e.component.option("value", info.selectedRowKeys);
                            }
                        });
                    dataGridInstance = $dataGrid.dxDataGrid("instance");
                    return $dataGrid;
                },
                onValueChanged: function (e) {
                    dataGridInstance.selectRows(e.value, false);
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-drop-down-box
            [(value)]="dropDownBoxValue">
            <dx-data-grid
                [(selectedRowKeys)]="dropDownBoxValue">
                <dxo-data-grid-selection mode="multiple"></dxo-data-grid-selection>
            </dx-data-grid>
        </dx-drop-down-box>

        <!--TypeScript-->
        import { Component } from "@angular/core";
        import { DxDropDownBoxComponent } from "devextreme-angular/ui/drop-down-box";
        import { DxDataGridComponent, DxoDataGridSelectionComponent } from "devextreme-angular/ui/data-grid";

        @Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            standalone: true,
            imports: [DxDropDownBoxComponent, DxDataGridComponent, DxoDataGridSelectionComponent]
        })
        export class AppComponent {
            _dropDownBoxValue: number[] = [1];
            get dropDownBoxValue(): number[] {
                return this._dropDownBoxValue;
            }
            set dropDownBoxValue(value: number[]) {
                this._dropDownBoxValue = value || [];
            }
        }

    ##### Vue

        <!--tab: App.vue-->
        <template>
            <div>
                <DxDropDownBox ...
                    v-model:value="dropDownBoxValues">
                    <DxDataGrid ...
                        v-model:selected-row-keys="dropDownBoxValues">
                        <DxSelection mode="multiple" />
                    </DxDataGrid>
                </DxDropDownBox>
            </div>
        </template>

        <script setup lang="ts">
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

        import DxDropDownBox from 'devextreme-vue/drop-down-box';
        import { DxDataGrid, DxSelection } from 'devextreme-vue/data-grid';
        import { ref, computed } from 'vue';

        const _dropDownBoxValues = ref<number[]>([1]);

        const dropDownBoxValues = computed<number[]>({
            get: () => _dropDownBoxValues.value,
            set: (value) => { _dropDownBoxValues.value = value ?? []; },
        });
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import React, { useState, useRef } from 'react';
        import 'devextreme/dist/css/dx.fluent.blue.light.css';

        import { DropDownBox, DropDownBoxRef } from 'devextreme-react/drop-down-box';
        import { DataGrid, Selection } from 'devextreme-react/data-grid';
        import type { SelectionChangedEvent } from 'devextreme/ui/data_grid';

        export default function App() {
            const [dropDownBoxValues, setDropDownBoxValues] = useState<number[]>([1]);
            const dropDownBoxRef = useRef<DropDownBoxRef>(null);
            const changeDropDownBoxValue = (e: SelectionChangedEvent) => {
                setDropDownBoxValues(e.selectedRowKeys as number[]);
                dropDownBoxRef.current?.instance().close();
            };
            return (
                <DropDownBox
                    ref={dropDownBoxRef}
                    value={dropDownBoxValues}>
                    <DataGrid
                        selectedRowKeys={dropDownBoxValues}
                        onSelectionChanged={changeDropDownBoxValue}>
                        <Selection mode="multiple" />
                    </DataGrid>
                </DropDownBox>
            );
        }

    ##### ASP.NET MVC Controls

        <!--Razor C#-->
        @(Html.DevExtreme().DropDownBox()
            // ...
            .Value(1)
            .ContentTemplate(new TemplateName("dataGrid"))
            .OnValueChanged("dropDownBox_valueChanged")
        )
        @using (Html.DevExtreme().NamedTemplate("dataGrid")) {
            @(Html.DevExtreme().DataGrid()
                // ...
                .Selection(s => s.Mode(SelectionMode.Single))
                .SelectedRowKeys(new JS("component.option('value')"))
                .OnSelectionChanged("innerDataGrid_selectionChanged")
            )
        }

        <script>
            function innerDataGrid_selectionChanged(info) {
                $("#dropDownBox").dxDropDownBox("option", "value", info.selectedRowKeys)
            }
            function dropDownBox_valueChanged(e) {
                $("#dataGrid").dxDataGrid("selectRows", e.value, false);
            }
        </script>

    ---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/",
    name: "Single Selection"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/MultipleSelection/",
    name: "Multiple Selection"
}

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-dropdownbox-display-tags-in-input-field"
}
#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-dropdownbox-filter-data-in-nested-widget"
}
