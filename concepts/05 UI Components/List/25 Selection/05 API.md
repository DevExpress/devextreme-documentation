Add or remove an item's key from the [selectedItemKeys](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectedItemKeys.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectedItemKeys') collection to select the item or cancel its selection:

---
##### jQuery

    <!--JavaScript-->
    const list = $("#listContainer").dxList("instance");
    let selectedKeys = list.option("selectedItemKeys");
    // Selects the item with key 5
    selectedKeys.push(5);
    list.option("selectedItemKeys", selectedKeys);
    // Cancels the selection of the item with key 5
    selectedKeys = $.grep(selectedKeys, function(key) {
        return key !== 5;
    });
    list.option("selectedItemKeys", selectedKeys);

##### Angular

    <!-- tab: app.component.html -->
    <dx-list ...
        [(selectedItemKeys)]="selectedKeys">
    </dx-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        selectedKeys: Array<number> = [6, 2, 5];
        selectItem(key) {
            if(!this.selectedKeys.includes(key)) {
                this.selectedKeys.push(key);
            }
        }
        deselectItem(key) {
            this.selectedKeys = this.selectedKeys.filter((data) => {
                return data !== key;
            });
        }
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
        <DxList ...
            v-model:selected-item-keys="selectedKeys"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        data() {
            return {
                selectedKeys: [6, 2, 5]
            }
        },
        methods: {
            selectItem(key) {
                if(!this.selectedKeys.includes(key)) {
                    this.selectedKeys = [...this.selectedKeys, key];
                }
            },
            deselectItem(key) {
                this.selectedKeys = this.selectedKeys.filter((data) => {
                    return data !== key;
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    export default function App() {
        const [selectedKeys, setSelectedKeys] = useState([6, 2, 5]);
        const selectItem = (key) => {
            if (!selectedKeys.includes(key)) {
                const newSelectedKeys = [...selectedKeys, key];
                setSelectedKeys(newSelectedKeys);
            }
        };
        const deselectItem = (key) => {
            const filteredSelectedKeys = selectedKeys.filter((data) => {
                return data !== key;
            });
            setSelectedKeys(filteredSelectedKeys);
        };
        const handleSelectionChange = (e) => {
            if (e.name === "selectedItemKeys") {
                setSelectedKeys(e.value);
            }
        };
        
        return (
            <List ...
                selectedItemKeys={selectedKeys}
                onOptionChanged={handleSelectionChange}
            />
        );
    }

---

[note]To specify the key field, use the [keyExpr](/api-reference/10%20UI%20Components/dxList/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#keyExpr') property of the List or the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key') property of the **Store**.

#####See Also#####
#include common-link-callmethods
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection)
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')