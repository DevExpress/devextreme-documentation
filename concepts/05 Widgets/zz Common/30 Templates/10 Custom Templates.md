DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component for Angular, AngularJS, and Knockout apps.

Implement a **dxTemplate** within the widget's container using the syntax of the used library (Angular, Knockout, etc.). You can access a template's context properties within the template and, in item templates, the item index as shown in the following code. Assign the template's **name** to a widget's **...Template** option. In the code below, it is the [List](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI) widget's [itemTemplate](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate') option. One widget can have multiple **dxTemplate**s.

If you use jQuery alone, set the widget's **...Template** option to a function that combines the HTML markup using jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>.

---
#####Angular

    <!--HTML-->
    <dx-list ...
        [dataSource]="listData"
        itemTemplate="listItem">
        <div *dxTemplate="let itemData of 'listItem'; let itemIndex = index">
            {{itemIndex}} - {{itemData.itemProperty}}
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        listData = [{ 
            itemProperty: "someValue",
            // ...
        },
        // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-list ...
            :data-source="listData"
            itemTemplate="item">
            <template #item="{ data, index }">
                {{ index }} - {{ data.itemProperty }}
            </template>
        </dx-list>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxList from 'devextreme-vue/list';
    
    export default {
        components: {
            DxList
        },
        data() {
            return {
                listData: [
                    { itemProperty: 'someValue' },
                    // ...
                ]
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const renderListItem = (itemData, itemIndex) => {
        return (
            <span>{ itemIndex } - { itemData.name }</span>
        );
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.listData = [
                { itemProperty: 'someValue' },
                // ...
            ];
        }
        render() {
            return (
                <List
                    dataSource={this.listData}
                    itemRender={renderListItem}
                />
            );
        }
    }
    export default App;

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{
            ...
            dataSource: listData,
            itemTemplate: 'listItem'
        }" dx-item-alias="itemData">
            <div data-options="dxTemplate: { name: 'listItem' }">
                {{$index}} - {{itemData.itemProperty}}
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.listData = [{ 
                itemProperty: "someValue",
                // ...
            },
            // ...
            ];
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: {
        ...
        dataSource: listData,
        itemTemplate: 'listItem'
    }">
        <div data-options="dxTemplate: { name: 'listItem' }">
            <span data-bind="text: $index"></span> - <span data-bind="text: itemProperty"></span>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        listData: [{ 
            itemProperty: "someValue",
            // ...
        },
        // ...
        ]
    };

    ko.applyBindings(viewModel);

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: [{ 
                itemProperty: "someValue",
                // ...
            },
            // ...
            ],
            itemTemplate: function (itemData, itemIndex, element) {
                element.append(
                    $("<span>").text(itemIndex) - $("<span>").text(itemData.itemProperty)
                )
            }
        });
    });

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ItemTemplate/"
}

You can define custom templates for individual items in<a name="In_Collection_Widgets" style="position: relative; top: -120px;">&nbsp;</a>collection widgets. When using any library or framework except jQuery, declare the items using the [dxItem](/api-reference/10%20UI%20Widgets/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/') component as shown in the following code. Do not set the widget's **dataSource** option. To do the same with jQuery, assign a function combining the HTML markup to a data source object's **template** option.

---
#####Angular

    <!--HTML-->
    <dx-list ... >
        <dxi-item>
            <i>Item 1</i>
        </dxi-item>
        <dxi-item>
            <b>Item 2</b>
        </dxi-item>
        <dxi-item>
            Item with a nested component
            <div *dxTemplate>
                <dx-button text="Click me"></dx-button>
            </div>
        </dxi-item>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-list>
            <dx-item>
                <template #default>
                    <i>Item 1</i>
                </template>
            </dx-item>
            <dx-item>
                <template #default>
                    <i>Item 2</i>
                </template>
            </dx-item>
            <dx-item>
                Item with a nested component
                <template #default>
                    <div>
                        <dx-button text="Click me" />
                    </div>
                </template>
            </dx-item>
        </dx-list>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxList, {
        DxItem
    } from 'devextreme-vue/list';
    import DxButton from 'devextreme-vue/button';
    
    export default {
        components: {
            DxList,
            DxItem,
            DxButton
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import List, { Item } from 'devextreme-react/list';
    import Button from 'devextreme-react/button';

    class App extends React.Component {
        render() {
            return (
                <List>
                    <Item>
                        <i>Item 1</i>
                    </Item>
                    <Item>
                        <i>Item 2</i>
                    </Item>
                    <Item>
                        <Button text="Click me" />
                    </Item>
                </List>
            );
        }
    }
    export default App;

#####AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-list="{ ... }">
            <div data-options="dxItem: { }">
                <i>Item 1</i>
            </div>
            <div data-options="dxItem: { }">
                <b>Item 2</b>
            </div>
            <div data-options="dxItem: { }">
                Item with a nested component
                <div dx-button="{
                    text: 'Click me'
                }"></div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            // ...
        });

#####Knockout

    <!--HTML-->
    <div data-bind="dxList: { ... }">
        <div data-options="dxItem: { }">
            <i>Item 1</i>
        </div>
        <div data-options="dxItem: { }">
            <b>Item 2</b>
        </div>
        <div data-options="dxItem: { }">
            Item with a nested component
            <div data-bind="dxButton: {
                text: 'Click me'
            }"></div>
        </div>
    </div>


    <!--JavaScript-->
    var viewModel = {
        // ...
    };

    ko.applyBindings(viewModel);

#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            dataSource: [{
                template: function () {
                    return $("<i>").text("Item 1")
                }
            }, {
                template: function () {
                    return $("<b>").text("Item 2")
                }
            },{
                template: function () {
                    return $("<div>").append(
                        $("<span>").text("Item with nested component"),
                        $("<div>").dxButton({
                            text: "Click me"
                        })
                    )
                }
            }]
        });
    });

---

Many widgets provide options that end with **...Template**, but particular widgets ([Button](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template'), [Drawer](/api-reference/10%20UI%20Widgets/dxDrawer/1%20Configuration/template.md '/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#template'), and others) have an option called **template**. These widgets allow you to declare the markup directly in the widget element to specify their content.

---
##### Angular

    <!-- tab: app.component.html -->
    <dx-button (onClick)="foo($event)">
        <i style="color:green">
            Refresh
        </i>
    </dx-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        foo(e) {
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-button @click="foo">
            <i style="color:green">
                Refresh
            </i>
        </dx-button>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxButton from 'devextreme-vue/button';
    
    export default {
        components: {
            DxButton
        },
        methods: {
            foo(e) {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Button from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.foo = (e) => {
                // ...
            }
        }
        render() {
            return (
                <Button
                    onClick={this.foo}>
                    <i style={{ color: 'green' }}>
                        Refresh
                    </i>
                </Button>
            );
        }
    }
    export default App;

##### jQuery

    <!--HTML-->
    <div id="buttonContainer">
        <i style="color:green">
            Refresh
        </i>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#buttonContainer").dxButton({
            onClick: function(e) {
                // ...
            }
        });
    });


---
