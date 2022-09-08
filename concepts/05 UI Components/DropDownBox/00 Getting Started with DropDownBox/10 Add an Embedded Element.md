You can add any element in a DropDownBox content field. This tutorial uses the [List](/Documentation/Guide/UI_Components/List/Getting_Started_with_List/) component as an embedded element. To see how to use other components, such as [DataGrid](/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/) or [TreeView](/Documentation/Guide/UI_Components/TreeView/Getting_Started_with_TreeView/), refer to the following demo: [DropDownBox: Single Selection](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/Angular/Light/)

Use the [contentTemplate](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#contentTemplate) function or specify content inside the DropDownBox markup, depending on the framework.

The following code adds the List component, [binds it to data](/Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource), enables [item deleting](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting) and [forbids users to delete](/Documentation/ApiReference/UI_Components/dxList/Configuration/#onItemDeleting) the last item. Additionally, the code gets the List's [instance](/Documentation/ApiReference/UI_Components/dxList/Methods/#instance).

---
##### jQuery

    <!-- tab: index.js -->
    const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
    const dataSource = fruits;
    let list;

    $(function() {
        $("#drop-down-box").dxDropDownBox({
            contentTemplate: function(e) {
                const $list = $("<div>").dxList({
                    dataSource,
                    allowItemDeleting: true,
                    onItemDeleting: function(e) {
                        if (dataSource.length === 1) {
                            e.cancel = true;
                        }
                    }
                });
                list = $list.dxList('instance');
                return $list;
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box>
        <dx-list 
            [dataSource]="dataSource" 
            [allowItemDeleting]="true"
            (onItemDeleting)="onItemDeleting($event)"
        >
        </dx-list>
    </dx-drop-down-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild(DxListComponent, { static: false }) list: DxListComponent
        fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        dataSource = this.fruits;
        
        onItemDeleting(e: { cancel: boolean; }) {
            if (this.dataSource.length === 1) {
                e.cancel = true;
            }
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDropDownBoxModule, DxListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDropDownBoxModule,
            DxListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownBox>
            <DxList
                :data-source="dataSource"
                :allow-item-deleting="true"
                @item-deleting="onItemDeleting($event)"
                @initialized="saveListInstance"
            >
            </DxList>
        </DxDropDownBox>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import { DxDropDownBox } from 'devextreme-vue/drop-down-box';
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
                listInstance: null
            }
        },
        methods: {
            onItemDeleting(e) {
                if (this.dataSource.length === 1) {
                    e.cancel = true;
                }
            },
            saveListInstance(e) {
                this.listInstance = e.component;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useRef, useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DropDownBox } from 'devextreme-react/drop-down-box';
    import { List } from "devextreme-react/list";

    const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

    function App() {
        const [dataSource, setDataSource] = useState(fruits);
        const listRef = useRef(null);
        const onItemDeleting = useCallback((e) => {
            if (dataSource.length === 1) {
                e.cancel = true;
            }
        }, [dataSource]);
        return (
            <DropDownBox>
                <List
                    ref={listRef}
                    dataSource={dataSource}
                    allowItemDeleting={true}
                    onItemDeleting={onItemDeleting}
                />
            </DropDownBox>
        );
    }

    export default App;

---
