Templates are passed as options that end with **...Template** (in jQuery, Angular, and Vue) or **...Render**/**...Component** (in React).

Each template has access to the following parameters:

- `data`     
A data source object or an object with fields specific to a particular template. For information on the contents of `data`, refer to the **Template Data** section of the template's API reference article.

- `index`       
A zero-based index of the item in the collection. Available only in collection widget templates.

- `element`     
A jQuery element that represents the widget element being customized. Available only if you use jQuery.

The following code shows how to declare a template and use these parameters. This code declares an [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemTemplate) for the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#listContainer").dxList({
            items: [
                { itemProperty: "someValue" },
                // ...
            ],
            itemTemplate: function (data, index, element) {
                return index + " - " + data.itemProperty;

                // ===== or using the "element" parameter =====
                const $item = $("<div>").text(
                    index + " - " + data.itemProperty
                );
                element.append($item);
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-list
        [items]="listData"
        itemTemplate="list-item">
        <div *dxTemplate="let data of 'list-item'; let index = index">
            {{index}} - {{data.itemProperty}}
        </div>
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        listData = [
            { itemProperty: "someValue" },
            // ...
        ]
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList
            :items="listData"
            item-template="list-item">
            <template #list-item="{ data, index }">
                {{ index }} - {{ data.itemProperty }}
            </template>
        </DxList>
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

    const renderListItem = (data, index) => {
        return (
            <div>{index} - {data.itemProperty}</div>
        );
    }

    class App extends React.Component {
        listData = [
            { itemProperty: 'someValue' },
            // ...
        ];

        render() {
            return (
                <List
                    items={this.listData}
                    itemRender={renderListItem}
                />
            );
        }
    }
    export default App;

---

Collection widgets also support templates for individual items. Do not specify the widget's **dataSource** option if you use individual templates.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#listContainer").dxList({
            items: [{
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

##### Angular

    <!-- tab: app.component.html -->
    <dx-list>
        <dxi-item>
            <i>Item 1</i>
        </dxi-item>
        <dxi-item>
            <b>Item 2</b>
        </dxi-item>
        <dxi-item>
            <div *dxTemplate>
                Item with a nested component
                <dx-button text="Click me"></dx-button>
            </div>
        </dxi-item>
    </dx-list>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxListModule, DxButtonModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxListModule,
            DxButtonModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList>
            <DxItem>
                <template #default>
                    <i>Item 1</i>
                </template>
            </DxItem>
            <DxItem>
                <template #default>
                    <i>Item 2</i>
                </template>
            </DxItem>
            <DxItem>
                <template #default>               
                    <div>
                        Item with a nested component
                        <DxButton text="Click me" />
                    </div>
                </template>
            </DxItem>
        </DxList>
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
                        Item with a nested component
                        <Button text="Click me" />
                    </Item>
                </List>
            );
        }
    }
    export default App;

---

#####See Also#####
- **Declare Content in the Markup**: [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Declare_Content_in_the_Markup) | [Vue](/Documentation/Guide/Vue_Components/Component_Configuration_Syntax/#Declare_Content_in_the_Markup) | [React](/Documentation/Guide/React_Components/Component_Configuration_Syntax/#Declare_Content_in_the_Markup)
