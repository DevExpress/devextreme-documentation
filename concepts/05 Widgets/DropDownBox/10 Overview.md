The **DropDownBox** is a widget that consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/"
}

The simplest widget configuration requires specifying a [dataSource](/api-reference/10%20UI%20Widgets/dxDropDownBox/1%20Configuration/dataSource '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dataSource'), [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value') and [contentTemplate](/api-reference/10%20UI%20Widgets/dxDropDownBox/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#contentTemplate'). The following code adds the **DropDownBox** to your page: 

---

##### **jQuery**

    <!--JavaScript-->
    $(function () {
        const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            contentTemplate: function(e) {
                const $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    } 
                });
                return $list;
            }
        });
    });

##### **Angular**

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedFruit"
        [(opened)]="isDropDownBoxOpened"
        [dataSource]="fruits">
        <dx-list 
            [dataSource]="fruits"
            selectionMode="single"
            (onSelectionChanged)="changeDropDownBoxValue($event)">
        </dx-list>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        selectedFruit = this.fruits[0];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue = function (args) {
            this.selectedFruit = args.addedItems[0];
            this.isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule,
            DxListModule
        ],
        // ...
    })

##### Vue

    <!--tab: App.vue-->
    <template>
        <div>
            <DxDropDownBox
                v-model:value="selectedFruit"
                v-model:opened="isDropDownBoxOpened"
                :data-source="dataSource">
                <DxList
                    :data-source="dataSource"
                    selection-mode="single"
                    @selection-changed="changeDropDownBoxValue($event)">
                </DxList>
            </DxDropDownBox>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxDropDownBox from "devextreme-vue/drop-down-box";
    import DxList from "devextreme-vue/list";

    export default {
        components: {
            DxDropDownBox,
            DxList
        },
        data() {
            const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
            return {
                dataSource: fruits,
                isDropDownBoxOpened: false,
                selectedFruit: fruits[0]
            }
        },
        methods: {
            changeDropDownBoxValue(e) {
                this.selectedFruit = e.addedItems[0];
                this.isDropDownBoxOpened = false;
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';
    import { List } from 'devextreme-react/list';

    const fruits = ['Apples', 'Oranges', 'Lemons', 'Pears', 'Pineapples'];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedFruit: fruits[0]
            };

            this.dataSource = fruits;
            this.dropDownBoxRef = React.createRef();

            this.changeDropDownBoxValue = this.changeDropDownBoxValue.bind(this);
        }

        changeDropDownBoxValue(e) {
            this.setState({
                selectedFruit: e.addedItems[0]
            });
            this.dropDownBoxRef.current.instance.close();
        }

        render() {
            return (
                <DropDownBox
                    ref={this.dropDownBoxRef}
                    value={this.state.selectedFruit}
                    dataSource={this.dataSource}>
                    <List
                        dataSource={this.dataSource}
                        selectionMode="single"
                        onSelectionChanged={this.changeDropDownBoxValue}
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
        .DataSource(new[] { "Apples", "Oranges", "Lemons", "Pears", "Pineapples" })
        .Value("Apples")
        .ContentTemplate(new TemplateName("list"))
    )
    @using (Html.DevExtreme().NamedTemplate("list")) {
        @(Html.DevExtreme().List()
            .DataSource(new JS("component.option('dataSource')"))
            .SelectionMode(ListSelectionMode.Single)
            .OnSelectionChanged("innerList_selectionChanged")
        )
    }

    <script>
        function innerList_selectionChanged (e) {
            const dropDownBox = $("#dropDownBox").dxDropDownBox("instance");
            dropDownBox.option("value", e.addedItems[0]);
            dropDownBox.close();
        }
    </script>

---

If your data is an array of objects, specify: 

- [valueExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr')     
    The data field whose value is written into the [value](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value') option.
- [displayExpr](/api-reference/10%20UI%20Widgets/DataExpressionMixin/1%20Configuration/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr')     
    The data field whose value is displayed in the input field of the widget.

<!---->

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        const customers = [
            { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
            { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" },
            // ...
        ];
        const selectedValue = customers[0].ID;
        $("#dropDownBoxContainer").dxDropDownBox({
            value: selectedValue,
            valueExpr: "ID",
            displayExpr: "companyName",
            dataSource: new DevExpress.data.ArrayStore({
                data: customers,
                key: "ID"
            }),
            contentTemplate: function(e){
                const $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["companyName", "city", "phone"],
                    height: 265,
                    selection: { mode: "single" },
                    selectedRowKeys: [selectedValue],
                    onSelectionChanged: function(selectedItems){
                        const keys = selectedItems.selectedRowKeys,
                            hasSelection = keys.length;
                        e.component.option("value", hasSelection ? keys[0] : null); 
                        e.component.close();
                    }
                });
                return $dataGrid;
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedValue"
        [(opened)]="isDropDownBoxOpened"
        valueExpr="ID"
        displayExpr="companyName"
        [dataSource]="customerDataSource">
        <dx-data-grid 
            [dataSource]="customerDataSource"
            [selection]="{ mode: 'single' }"
            [columns]="['companyName', 'city', 'phone']"
            [height]="265"
            [(selectedRowKeys)]="selectedCustomers"
            (onSelectionChanged)="changeDropDownBoxValue($event)">
        </dx-data-grid>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxDataGridModule } from "devextreme-angular";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent  {
        customers = [
            { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
            { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" },
            // ...
        ];
        customerDataSource = new ArrayStore({
            data: this.customers,
            key: "ID"
        });
        selectedCustomers = [this.customers[0].ID];
        selectedValue = this.selectedCustomers[0];
        isDropDownBoxOpened = false;
        changeDropDownBoxValue(args) {
            this.selectedValue = this.selectedCustomers[0];
            this.isDropDownBoxOpened = false;
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
                v-model:value="selectedValue"
                v-model:opened="isDropDownBoxOpened"
                :data-source="customerDataSource"
                value-expr="ID"
                display-expr="companyName">
                <DxDataGrid
                    :data-source="customerDataSource"
                    :columns="['companyName', 'city', 'phone']"
                    :height="265"
                    v-model:selected-row-keys="selectedCustomers"
                    @selection-changed="changeDropDownBoxValue">
                    <DxSelection mode="single"/>
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
            const customers = [
                { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
                { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" },
                // ...
            ];
            return {
                customerDataSource: new ArrayStore({
                    data: customers,
                    key: "ID"
                }),
                isDropDownBoxOpened: false,
                selectedCustomers: [customers[0].ID],
                selectedValue: customers[0].ID
            }
        },
        methods: {
            changeDropDownBoxValue(e) {
                this.selectedValue = this.selectedCustomers[0];
                this.isDropDownBoxOpened = false;
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
    
    const customers = [
        { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
        { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" },
        // ...
    ];

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedCustomers: [customers[0].ID],
                selectedValue: customers[0].ID
            };

            this.customerDataSource = new ArrayStore({
                data: customers,
                key: "ID"
            });
            this.dropDownBoxRef = React.createRef();

            this.changeDropDownBoxValue = this.changeDropDownBoxValue.bind(this);
        }

        changeDropDownBoxValue(selectedItems) {
            const keys = selectedItems.selectedRowKeys;
            this.setState({
                selectedCustomers: keys,
                selectedValue: keys[0]
            });

            this.dropDownBoxRef.current.instance.close();
        }

        render() {
            return (
                <DropDownBox
                    ref={this.dropDownBoxRef}
                    value={this.state.selectedValue}
                    dataSource={this.customerDataSource}
                    valueExpr="ID"
                    displayExpr="companyName">
                    <DataGrid
                        dataSource={this.customerDataSource}
                        columns={['companyName', 'city', 'phone']}
                        height={265}
                        selectedRowKeys={this.state.selectedCustomers}
                        onSelectionChanged={this.changeDropDownBoxValue}>
                        <Selection mode="single"/>
                    </DataGrid>
                </DropDownBox>
            );
        }
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DropDownBox()
        .ID("dropDownBox")
        .DataSource(ds => ds.Array()
            .Key("ID")
            .Data(new JS("customers"))
        )
        .Value(new JS("selectedValue"))
        .ValueExpr("ID")
        .DisplayExpr("companyName")
        .ContentTemplate(new TemplateName("dataGrid"))
    )
    @using (Html.DevExtreme().NamedTemplate("dataGrid")) {
        @(Html.DevExtreme().DataGrid()
            .DataSource(new JS("component.option('dataSource')"))
            .Columns(c => {
                c.Add().DataField("companyName");
                c.Add().DataField("city");
                c.Add().DataField("phone");
            })
            .Height(265)
            .Selection(s => s.Mode(SelectionMode.Single))
            .SelectedRowKeys(new JS("selectedValue"))
            .OnSelectionChanged("innerDataGrid_selectionChanged")
        )
    }

    <script>
        const customers = [
            { ID: 1, companyName: "Premier Buy", city: "Dallas", phone: "(233)2123-11" },
            { ID: 2, companyName: "ElectrixMax", city: "Naperville", phone: "(630)438-7800" }, 
            // ...
        ];
        const selectedValue = customers[0].ID;
        function innerDataGrid_selectionChanged(selectedItems) {
            const keys = selectedItems.selectedRowKeys,
                hasSelection = keys.length,
                dropDownBox = $("#dropDownBox").dxDropDownBox("instance");
            dropDownBox.option("value", hasSelection ? keys[0] : null);
            dropDownBox.close();
        }
    </script>

---

#####See Also#####
- [DropDownBox - Customize the Appearance](/concepts/05%20Widgets/DropDownBox/20%20Customize%20the%20Appearance.md '/Documentation/Guide/Widgets/DropDownBox/Customize_the_Appearance/')

[tags]dxdropdownbox