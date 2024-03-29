---
##### jQuery

A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') property is **false**. You can change this property using the [columnOption(id, optionName, optionValue)](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id_optionName_optionValue).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid_optionName_optionValue') method. For example, the following code hides an *"Email"* column:

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "Email", "visible", false);

##### Angular

A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') property is **false**. You can bind this property to a component property and change the latter property. For example, the following code hides an *"Email"* column:

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="Email"
            [(visible)]="isEmailVisible"
        ></dxi-column>
    </dx-data-grid>

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

    import { DxDataGridModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') property is **false**. You can bind this property to a component property and change the latter property. For example, the following code hides an *"Email"* column:

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="Email"
                v-model:visible="isEmailVisible"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
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

A column is considered hidden when its [visible](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') property is **false**. You can bind this property to a state property and change the latter property. For example, the following code hides an *"Email"* column:

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isEmailVisible: true
            };

            this.handleOptionChange = this.handleOptionChange.bind(this);
            this.hideEmails = this.hideEmails.bind(this);
        }

        handleOptionChange(e) {
            if(e.fullName === 'columns[0].visible') {
                this.setState({
                    isEmailVisible: e.value
                });
            }
        }

        hideEmails() {
            this.setState({
                isEmailVisible: false
            });
        }

        render() {
            return (
                <DataGrid ...
                    onOptionChanged={this.handleOptionChange}>
                    <Column 
                        dataField="Email"
                        visible={this.state.isEmailVisible}
                    />
                </DataGrid>
            );
        }
    }
    export default App;
    
---

#####See Also#####
- [Column Chooser](/concepts/05%20UI%20Components/DataGrid/15%20Columns/60%20Column%20Chooser.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Chooser/')