You can allow users to type in the DropDownBox text field to add more values to the List. In this tutorial, the Enter keystroke passes values to the List. To implement this functionality, enable the [acceptCustomValue](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#acceptCustomValue) property, disable the [openOnFieldClick](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#openOnFieldClick) property, and handle the [enterKey](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#onEnterKey) event. In this handler, update the shared data source and [reload](/Documentation/ApiReference/UI_Components/dxList/Methods/#reload) the List.

---
##### jQuery

    <!-- tab: index.js -->
    // ...
    $(function() {
        $("#drop-down-box").dxDropDownBox({
            // ...
            acceptCustomValue: true,
            openOnFieldClick: false,
            onEnterKey: function(e) {
                dataSource.push(e.component.option("value"));
                e.component.option("value", "");
                list.reload();
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-drop-down-box ...
        [acceptCustomValue]="true"
        [openOnFieldClick]="false"
        (onEnterKey)="addItem()"
    >
        <dx-list ...
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
        // ...
        addItem () {
            this.dataSource.push(this.selectedFruit);
            this.selectedFruit = '';
            this.list.instance.reload();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDropDownBox ...
            :accept-custom-value="true"
            :open-on-field-click="false"
            @enter-key="addItem"
        >
            <DxList ...
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
            // ...
        },
        methods: {
            // ...
            addItem() {
                this.dataSource.push(this.selectedFruit);
                this.selectedFruit = '';
                this.listInstance.reload();
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

    // ...
    
    function App() {
        // ...
        const addItem = useCallback(() => {
            setDataSource([...dataSource, selectedFruit]);
            setSelectedFruit('');
            listRef.current.instance.reload();
        }, [dataSource, selectedFruit]);
        return (
            <DropDownBox ...
                acceptCustomValue={true}
                openOnFieldClick={false}
                onEnterKey={addItem}
            >
                <List ...
                />
            </DropDownBox>
        );
    }

    export default App;

---
