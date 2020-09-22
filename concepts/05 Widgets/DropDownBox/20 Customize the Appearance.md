You can customize the text field and the drop-down button using the [fieldTemplate](/api-reference/10%20UI%20Widgets/dxDropDownBox/1%20Configuration/fieldTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#fieldTemplate') and [dropDownButtonTemplate](/api-reference/10%20UI%20Widgets/dxDropDownEditor/1%20Configuration/dropDownButtonTemplate.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownButtonTemplate'). To adjust the drop-down field, use the [dropDownOptions](/api-reference/10%20UI%20Widgets/dxDropDownEditor/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownOptions') object that contains options described in the [Popup Configuration](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') section.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        const fruits = [
            { id: 1, text: "Apples", image: "images/Apples.svg" }, 
            { id: 2, text: "Oranges", image: "images/Oranges.svg" }, 
            { id: 3, text: "Lemons", image: "images/Lemons.svg" }, 
            { id: 4, text: "Pears", image: "images/Pears.svg" }, 
            { id: 5, text: "Pineapples", image: "images/Pineapples.svg" }
        ];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.ArrayStore({ data: fruits, key: "id" }),
            }),
            dropDownOptions: {
                title: "Fruits",
                showTitle: true,
                fullScreen: true,
                showCloseButton: true
            },
            dropDownButtonTemplate: function() {
                return $("<img />").attr("src", "images/icons/custom-dropbutton-icon.svg");
            },
            fieldTemplate: function (value, fieldElement) {
                return $("<div class='custom-item' />").append(
                    $("<img />").attr("src", value.image),
                    $("<div class='product-name' />").dxTextBox({ value: value.text, readOnly: true })
                );
            },
            contentTemplate: function(e) {
                const list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    } 
                });
                return list;
            }
        });
    });

    <!--CSS-->
    .custom-item {
        position: relative;
        min-height: 30px;
    }
    .custom-item > img {
        left: 1px;
        margin-top: 3px;
        max-height: 30px;
        width: auto;
        position: absolute;
    }
    .product-name  {
        display: inline-block;
        padding-left: 45px;
        text-indent: 0;
        line-height: 30px;
        font-size: 15px;
        width: 100%;
    }

##### Angular

    <!--HTML-->
    <dx-drop-down-box
        [(value)]="selectedFruit"
        [(opened)]="isDropDownBoxOpened"
        fieldTemplate="fieldTemplate"
        dropDownButtonTemplate="dropDownButtonTemplate"
        [dataSource]="dataSource">
        <dxo-drop-down-options
            title="Fruits"
            [showTitle]="true"
            [fullScreen]="true"
            [showCloseButton]="true">
        </dxo-drop-down-options>
        <dx-list 
            [dataSource]="fruits"
            selectionMode="single"
            (onSelectionChanged)="changeDropDownBoxValue($event)">
        </dx-list>
        <div *dxTemplate="let data of 'dropDownButtonTemplate'">
            <img src="images/icons/custom-dropbutton-icon.svg">
        </div>
        <div *dxTemplate="let data of 'fieldTemplate'">
            <div class="custom-item">
                <img src="{{data.image}}">
                <div class="product-name">
                    <dx-text-box
                        [value]="data.text"
                        [readOnly]="true">
                    </dx-text-box>
                </div>
            </div>
        </div>
    </dx-drop-down-box>

    <!--TypeScript-->
    import { DxDropDownBoxModule, DxListModule, DxTextBoxModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import ArrayStore from "devextreme/data/array_store";
    // ...
    export class AppComponent {
        fruits = [
            { id: 1, text: "Apples", image: "images/Apples.svg" }, 
            { id: 2, text: "Oranges", image: "images/Oranges.svg" }, 
            { id: 3, text: "Lemons", image: "images/Lemons.svg" }, 
            { id: 4, text: "Pears", image: "images/Pears.svg" }, 
            { id: 5, text: "Pineapples", image: "images/Pineapples.svg" }
        ];
        dataSource: DataSource;
        selectedFruit = this.fruits[0];
        isDropDownBoxOpened: Boolean = false;
        constructor() {
            this.dataSource = new DataSource({
                store: new ArrayStore({ data: this.fruits, key: "id" })
            });
        }
        changeDropDownBoxValue = function (args) {
            this.selectedFruit = args.addedItems[0];
            this.isDropDownBoxOpened = false;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDropDownBoxModule,
            DxListModule,
            DxTextBoxModule
        ],
        // ...
    })

    <!--CSS-->
    ::ng-deep .custom-item {
        position: relative;
        min-height: 30px;
    }
    ::ng-deep .custom-item > img {
        left: 1px;
        margin-top: 3px;
        max-height: 30px;
        width: auto;
        position: absolute;
    }
    ::ng-deep .product-name  {
        display: inline-block;
        padding-left: 45px;
        text-indent: 0;
        line-height: 30px;
        font-size: 15px;
        width: 100%;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxDropDownBox
                v-model:value="selectedFruit"
                v-model:opened="isDropDownBoxOpened"
                :data-source="dataSource"
                drop-down-button-template="dropDownButtonTemplate"
                field-template="fieldTemplate">
                <div slot="dropDownButtonTemplate" slot-scope="{ data }">
                    <img src="images/icons/custom-dropbutton-icon.svg">
                </div>
                <div slot="fieldTemplate" slot-scope="{ data }">
                    <div class="custom-item">
                        <img :src="data.image">
                        <div class="product-name">
                            <DxTextBox
                                :value="data.text"
                                :read-only="true">
                            </DxTextBox>
                        </div>
                    </div>
                </div>
                <DxDropDownOptions
                    title="Fruits"
                    :show-title="true"
                    :full-screen="true"
                    :show-close-button="true"
                />
                <DxList
                    :data-source="dataSource"
                    selection-mode="single"
                    @selection-changed="changeDropDownBoxValue">
                </DxList>
            </DxDropDownBox>
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDropDownBox, DxDropDownOptions } from "devextreme-vue/drop-down-box";
    import DxList from "devextreme-vue/list";
    import DxTextBox from "devextreme-vue/text-box";
    import ArrayStore from "devextreme/data/array_store";

    export default {
        components: {
            DxDropDownBox,
            DxList,
            DxTextBox,
            DxDropDownOptions
        },
        data() {
            const fruits = [
                { ID: 1, text: "Apples", image: "images/Apples.svg" }, 
                { ID: 2, text: "Oranges", image: "images/Oranges.svg" }, 
                { ID: 3, text: "Lemons", image: "images/Lemons.svg" }, 
                { ID: 4, text: "Pears", image: "images/Pears.svg" }, 
                { ID: 5, text: "Pineapples", image: "images/Pineapples.svg" }
            ];
            return {
                dataSource: new ArrayStore({
                    data: fruits,
                    key: "ID"
                }),
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

    <style>
        .custom-item {
            position: relative;
            min-height: 30px;
        }
        .custom-item > img {
            left: 1px;
            margin-top: 3px;
            max-height: 30px;
            width: auto;
            position: absolute;
        }
        .product-name  {
            display: inline-block;
            padding-left: 45px;
            text-indent: 0;
            line-height: 30px;
            font-size: 15px;
            width: 100%;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox, DropDownOptions } from 'devextreme-react/drop-down-box';
    import List from "devextreme-react/list";
    import TextBox from "devextreme-react/text-box";
    import ArrayStore from "devextreme/data/array_store";
    
    const fruits = [
        { ID: 1, text: "Apples", image: "images/Apples.svg" }, 
        { ID: 2, text: "Oranges", image: "images/Oranges.svg" }, 
        { ID: 3, text: "Lemons", image: "images/Lemons.svg" }, 
        { ID: 4, text: "Pears", image: "images/Pears.svg" }, 
        { ID: 5, text: "Pineapples", image: "images/Pineapples.svg" }
    ];

    const renderDropDownButton = () => {
        return (
            <img src="images/icons/custom-dropbutton-icon.svg" />
        );
    }

    const renderField = (data) => {
        return (
            <div className="custom-item">
                <img src={data.image} />
                <div className="product-name">
                    <TextBox
                        value={data.text}
                        readOnly={true}
                    />
                </div>
            </div>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                selectedValue: fruits[0].ID
            };

            this.dataSource = new ArrayStore({
                data: fruits,
                key: "ID"
            });
            this.dropDownBoxRef = React.createRef();

            this.changeDropDownBoxValue = this.changeDropDownBoxValue.bind(this);
        }

        changeDropDownBoxValue(e) {
            this.setState({
                selectedValue: e.addedItems[0]
            });

            this.dropDownBoxRef.current.instance.close();
        }

        render() {
            return (
                <div>
                    <DropDownBox
                        ref={this.dropDownBoxRef}
                        value={this.state.selectedValue}
                        dataSource={this.dataSource}
                        keyExpr="ID"
                        dropDownButtonRender={renderDropDownButton}
                        fieldRender={renderField}>
                        <DropDownOptions
                            title="Fruits"
                            showTitle={true}
                            fullScreen={true}
                            showCloseButton={true}
                        />
                        <List
                            dataSource={this.dataSource}
                            selectionMode="single"
                            onSelectionChanged={this.changeDropDownBoxValue}
                        />
                    </DropDownBox>
                </div>
            );
        }
    }

    export default App;


    <!-- tab: styles.css -->
    .custom-item {
        position: relative;
        min-height: 30px;
    }
    .custom-item > img {
        left: 1px;
        margin-top: 3px;
        max-height: 30px;
        width: auto;
        position: absolute;
    }
    .product-name  {
        display: inline-block;
        padding-left: 45px;
        text-indent: 0;
        line-height: 30px;
        font-size: 15px;
        width: 100%;
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DropDownBox()
        .ID("dropDownBox")
        .DataSource(ds => ds.Array()
            .Key("ID")
            .Data(new JS("fruits"))
        )
        .Value(new JS("value"))
        .ContentTemplate(new TemplateName("list"))
        .DropDownButtonTemplate("<img src= 'images/icons/custom-dropbutton-icon.svg' />")
        .FieldTemplate(new TemplateName("field_template"))
        .DropDownOptions(o => o
            .Title("Fruits")
            .ShowTitle(true)
            .FullScreen(true)
            .ShowCloseButton(true)
        )
    )
    @using (Html.DevExtreme().NamedTemplate("list")) {
        @(Html.DevExtreme().List()
            .ID("list")
            .DataSource(new JS("component.option('dataSource')"))
            .SelectionMode(ListSelectionMode.Single)
            .OnSelectionChanged("innerList_selectionChanged")
        )
    }
    @using (Html.DevExtreme().NamedTemplate("field_template")) {
        <div class="custom-item">
            <img src="<% value.image %>">
            <div class="product-name">
                @(Html.DevExtreme().TextBox()
                    .Value(new JS("value.text"))
                    .ReadOnly(true)
                )
            </div>
        </div>
    }

    <script>
        const fruits = [
            { ID: 1, text: "Apples", image: "images/Apples.svg" },
            { ID: 2, text: "Oranges", image: "images/Oranges.svg" },
            { ID: 3, text: "Lemons", image: "images/Lemons.svg" },
            { ID: 4, text: "Pears", image: "images/Pears.svg" },
            { ID: 5, text: "Pineapples", image: "images/Pineapples.svg" }
        ];
        const value = fruits[0];
        function innerList_selectionChanged (e) {
            const dropDownBox = $("#dropDownBox").dxDropDownBox("instance");
            dropDownBox.option("value", e.addedItems[0]);
            dropDownBox.close();
        }
    </script>

    <!--CSS-->
    .custom-item {
        position: relative;
        min-height: 30px;
    }
    .custom-item > img {
        left: 1px;
        margin-top: 3px;
        max-height: 30px;
        width: auto;
        position: absolute;
    }
    .product-name  {
        display: inline-block;
        padding-left: 45px;
        text-indent: 0;
        line-height: 30px;
        font-size: 15px;
        width: 100%;
    }

---
