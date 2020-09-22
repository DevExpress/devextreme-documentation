You should synchronize the **DropDownBox** widget with an embedded element. The following instructions show how to do it when the embedded element is another DevExtreme widget, but they are also applicable in other cases.

1. **Specify data sources**    
The **DropDownBox**'s and embedded widget's data sources can be the same or different. If they are different, the widget's key field should be present in the **DropDownBox**'s data source.        

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

1. **Specify which data field provides the DropDownBox's values and the embedded widget's keys**       
Assign the field's name to the **DropDownBox**'s [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr') option and to the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') option of the embedded widget's store. The following example shows an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/'):

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
            <dx-data-grid ...
                [dataSource]="gridDataSource">
            </dx-data-grid>
        </dx-drop-down-box>

        <!--TypeScript-->
        import { DxDropDownBoxModule, DxDataGridModule } from "devextreme-angular";
        import ArrayStore from "devextreme/data/array_store";
        // ...
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
        @NgModule({
            imports: [
                // ...
                DxDropDownBoxModule,
                DxDataGridModule
            ],
            // ...
        })

    ##### Vue

        <!--tab: App.vue-->
        <template>
            <div>
                <DxDropDownBox
                    value-expr="ID"
                    display-expr="email"
                    :data-source="dropDownBoxData">
                    <DxDataGrid ...
                        :data-source="gridDataSource">
                    </DxDataGrid>
                </DxDropDownBox>
            </div>
        </template>

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxDropDownBox from "devextreme-vue/drop-down-box";
        import DxDataGrid, DxSelection from "devextreme-vue/data-grid";
        import ArrayStore from "devextreme/data/array_store";

        export default {
            components: {
                DxDropDownBox,
                DxDataGrid
            },
            data() {
                return {
                    dropDownBoxData: dropDownBoxData,
                    gridDataSource: new ArrayStore({
                        data: widgetData,
                        key: "ID"
                    }),
                    isDropDownBoxOpened: false
                }
            }
        }
        </script>

    ##### React

        import React from 'react';
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DropDownBox } from 'devextreme-react/drop-down-box';
        import { DataGrid, Selection } from "devextreme-react/data-grid";
        import ArrayStore from "devextreme/data/array_store";
        
        const dropDownBoxData = {/* ... */};
        const gridDataSource = new ArrayStore({
            data: widgetData,
            key: "ID"
        });

        class App extends React.Component {
            render() {
                return (
                    <DropDownBox
                        dataSource={dropDownBoxData}
                        valueExpr="ID"
                        displayExpr="email">
                        <DataGrid ...
                            dataSource={gridDataSource}
                        />
                    </DropDownBox>
                );
            }
        }

        export default App;

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

1. **Synchronize the DropDownBox's value and the embedded widget's selection**        
This step's implementation depends on the embedded widget's API and the library/framework you use. If the library/framework supports two-way binding, you can bind the **DropDownBox**'s [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value') and the widget's **selectedRowKeys**/**selectedItemKeys** to the same variable. If not, handle events as described below.
    1. **Set the initial selection in the embedded widget**     
        Implement the widget's **onContentReady** handler to select data items according to the **DropDownBox**'s initial value. In some widgets, you can set the **selectedRowKeys** or **selectedItemKeys** option instead.
    1. **Update the selection**     
        Implement the **DropDownBox**'s [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#onValueChanged') handler to update the selection when the **DropDownBox**'s value changes.
    1. **Update the DropDownBox's value**     
        Implement the embedded widget's **onSelectionChanged** handler to update the **DropDownBox**'s value when the selection changes.

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            // ...
            const dataGridInstance;
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
        <dx-drop-down-box ...
            [(value)]="dropDownBoxValue">
            <dx-data-grid ...
                [selection]="{ mode: 'multiple' }"
                [(selectedRowKeys)]="dropDownBoxValue">
            </dx-data-grid>
        </dx-drop-down-box>

        <!--TypeScript-->
        import { DxDropDownBoxModule, DxDataGridModule } from "devextreme-angular";
        import ArrayStore from "devextreme/data/array_store";
        // ...
        export class AppComponent {
            // ...
            _dropDownBoxValue: number[] = [1];
            get dropDownBoxValue(): number[] {
                return this._dropDownBoxValue;
            }
            set dropDownBoxValue(value: number[]) {
                this._dropDownBoxValue = value || [];
            }
        }
        @NgModule({
            imports: [
                // ...
                DxDropDownBoxModule,
                DxDataGridModule
            ],
            // ...
        })

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

        <script>
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import DxDropDownBox from "devextreme-vue/drop-down-box";
        import { DxDataGrid, DxSelection } from "devextreme-vue/data-grid";
        import ArrayStore from "devextreme/data/array_store";

        export default {
            components: {
                DxDropDownBox,
                DxDataGrid,
                DxSelection
            },
            data() {
                // ...
                return {
                    // ...
                    dropDownBox_values: [1]
                }
            },
            computed: {
                dropDownBoxValues: {
                    get: function() {
                        return this.dropDownBox_values;
                    },
                    set: function(value) {
                        this.dropDownBox_values = value || [];
                    }
                }
            }
        }
        </script>

    ##### React

        import React from 'react';
        import 'devextreme/dist/css/dx.common.css';
        import 'devextreme/dist/css/dx.light.css';

        import { DropDownBox } from 'devextreme-react/drop-down-box';
        import { DataGrid, Selection } from "devextreme-react/data-grid";
        import ArrayStore from "devextreme/data/array_store";

        class App extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    dropDownBoxValues: [1]
                };

                this.dropDownBoxRef = React.createRef();
            
                this.changeDropDownBoxValue = this.changeDropDownBoxValue.bind(this);
            }

            changeDropDownBoxValue(e) {
                const keys = e.selectedRowKeys;
                this.setState({
                    dropDownBoxValues: keys
                });

                this.dropDownBoxRef.current.instance.close();
            }

            render() {
                return (
                    <DropDownBox ...
                        ref={this.dropDownBoxRef}
                        value="this.state.dropDownBoxValues">
                        <DataGrid ...
                            selectedRowKeys={this.state.dropDownBoxValues}
                            onSelectionChanged={this.changeDropDownBoxValue}>
                            <Selection mode="multiple" />
                        </DataGrid>
                    </DropDownBox>
                );
            }
        }

        export default App;

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

#####See Also#####
- **Use the DropDownBox as a column editor in the DataGrid**: <a href="https://github.com/DevExpress-Examples/datagrid-how-to-use-dropdownbox-as-a-column-editor-in-edit-mode-t548916" target="_blank">jQuery</a> | <a href="https://github.com/DevExpress-Examples/mvc-datagrid-how-to-use-dropdownbox-as-a-column-editor-in-edit-mode-t576412" target="_blank">ASP.NET MVC</a>
