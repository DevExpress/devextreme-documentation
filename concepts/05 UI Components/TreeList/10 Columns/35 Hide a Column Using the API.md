A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible') property is **false**. You can change this property programmatically using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#columnOptionid_optionName_optionValue') method. For example, the following code hides an *"Email"* column:

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "Email", "visible", false);

##### Angular

    <!-- tab: app.component.html -->
    <dx-tree-list ... >
        <dxi-column
            dataField="Email"
            [(visible)]="isEmailVisible"
        ></dxi-column>
    </dx-tree-list>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        isEmailVisible: boolean = true;
        hideEmails() {
            this.isEmailVisible = false;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTreeListModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeListModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTreeList ... >
            <DxColumn
                data-field="Email"
                v-model:visible="isEmailVisible"
            />
        </DxTreeList>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxTreeList, {
        DxColumn
    } from 'devextreme-vue/tree-list';

    export default {
        components: {
            DxTreeList,
            DxColumn
        },
        data() {
            return() {
                isEmailVisible: true
            }
        },
        methods: {
            hideEmails() {
                this.isEmailVisible = false;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import TreeList, {
        Column
    } from 'devextreme-react/tree-list';

    export default function App() {
        const [isEmailVisible, setIsEmailVisible] = useState(true);
        const handleOptionChange = useCallback((e) => {
            if(e.fullName === 'columns[0].visible') {
                setIsEmailVisible(e.value);
            }
        }, []);

        const hideEmails = useCallback(() => {
            setIsEmailVisible(false);
        }, []);

	    return (
            <TreeList ...
                onOptionChanged={handleOptionChange}>
                <Column 
                    dataField="Email"
                    visible={isEmailVisible}
                />
            </TreeList>
        );
    }
    
---

#####See Also#####
- [Column Chooser](/concepts/05%20Widgets/TreeList/10%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/UI_Components/TreeList/Columns/Column_Chooser/')