#include tutorials-intro-installationnote

**SelectBox** is an editor that allows users to select a value from a drop-down list or add a new value.

In this tutorial, we will create the **SelectBox** and configure its basic features. The created widget has a populated drop-down list, allows users to search through it, and logs the previous and current selected items to the console.

<div class="simulator-desktop-container" data-view="/Content/Applications/20_2/GettingStartedWith/SelectBox/index.html, /Content/Applications/20_2/GettingStartedWith/SelectBox/index.js, /Content/Applications/20_2/GettingStartedWith/SelectBox/index.css"></div>

Refer to the subtopics for details on every configuration step. You can also see the full code below or download it from <a href="https://github.com/DevExpress-Examples/getting-started-with-selectbox" target="_blank">this GitHub repository</a>.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const data = [{
            ID: 1,
            Name: 'Banana',
            Category: 'Fruits',
        }, {
            ID: 2,
            Name: 'Cucumber',
            Category: 'Vegetables',
        }, {
            ID: 3,
            Name: 'Apple',
            Category: 'Fruits',
        }, {
            ID: 4,
            Name: 'Tomato',
            Category: 'Vegetables',
        }, {
            ID: 5,
            Name: 'Apricot',
            Category: 'Fruits',
        }]

        const dataSource = new DevExpress.data.DataSource({
            store: data,
            type: 'array',
            key: "ID",
            group: "Category"
        });

        $("#selectBox").dxSelectBox({
            dataSource: dataSource,
            valueExpr: "ID",
            displayExpr: "Name",
            searchEnabled: true,
            onValueChanged: function(e) {
                const item = data.filter(i => i.ID === e.value)[0];
                console.log(item.ID + ": " + item.Name);
            },
            grouped: true
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.common.css">
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/20.1.4/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/20.1.4/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body>
            <div id="selectBox"></div>
        </body>
    </html>


##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        [dataSource]="dataSource"
        valueExpr="ID"
        displayExpr="Name"
        [searchEnabled]="true"
        (onValueChanged)="onValueChanged($event)"
        [grouped]="true">
    </dx-select-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';
    import { AppService, Item } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        data: Item[];
        dataSource: DataSource;

        constructor(service: AppService) {
            this.data = service.getItems();
            this.dataSource = new DataSource({
                store: {
                    data: this.data,
                    type: 'array',
                    key: 'ID'
                },
                group: "Category"
            });
        }

        onValueChanged(e) {
            const item = this.data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class Item {
        ID: number;
        Name: string;
        Category: string;
    }
    
    const items: Item[] = [{
        ID: 1,
        Name: 'Banana',
        Category: 'Fruits',
    }, {
        ID: 2,
        Name: 'Cucumber',
        Category: 'Vegetables',
    }, {
        ID: 3,
        Name: 'Apple',
        Category: 'Fruits',
    }, {
        ID: 4,
        Name: 'Tomato',
        Category: 'Vegetables',
    }, {
        ID: 5,
        Name: 'Apricot',
        Category: 'Fruits',
    }]

    @Injectable()
    export class AppService {
        getItems(): Item[] {
            return items;
        }
    }


    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxSelectBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSelectBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            :data-source="dataSource"
            value-expr="ID"
            display-expr="Name"
            :search-enabled="true"
            @value-changed="onValueChange"
            :grouped="true"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { DxSelectBox } from 'devextreme-vue/select-box';
    import DataSource from 'devextreme/data/data_source';
    import { data } from './data';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            return {
                dataSource: new DataSource({
                    store: {
                        data: data,
                        type: 'array',
                        key: 'ID',
                    },
                    group: "Category"
                })
            }
        },
        methods: {
            onValueChange(e) {
                const item = data.filter(i => i.ID === e.value)[0];
                console.log(item.ID + ": " + item.Name);
            }
        },
    }
    </script>

    <!-- tab: data.js -->
    export const data = [{
        ID: 1,
        Name: 'Banana',
        Category: 'Fruits',
    }, {
        ID: 2,
        Name: 'Cucumber',
        Category: 'Vegetables',
    }, {
        ID: 3,
        Name: 'Apple',
        Category: 'Fruits',
    }, {
        ID: 4,
        Name: 'Tomato',
        Category: 'Vegetables',
    }, {
        ID: 5,
        Name: 'Apricot',
        Category: 'Fruits',
    }];

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import { SelectBox } from 'devextreme-react/select-box';
    import DataSource from 'devextreme/data/data_source';
    import { data } from './data';

    const dataSource = new DataSource({
        store: {
            data: data,
            type: 'array',
            key: 'ID'
        },
        group: "Category"
    });

    class App extends React.Component {
        onValueChanged(e) {
            const item = data.filter(i => i.ID === e.value)[0];
            console.log(item.ID + ": " + item.Name);
        }

        render() {
            return (
                <SelectBox
                    dataSource={dataSource}
                    valueExpr="ID"
                    displayExpr="Name"
                    searchEnabled={true}
                    onValueChanged={this.onValueChanged}
                    grouped={true}
                />
            );        
        }

    }

    export default App;

    <!-- tab: data.js -->
    export const data = [{
        ID: 1,
        Name: 'Banana',
        Category: 'Fruits',
    }, {
        ID: 2,
        Name: 'Cucumber',
        Category: 'Vegetables',
    }, {
        ID: 3,
        Name: 'Apple',
        Category: 'Fruits',
    }, {
        ID: 4,
        Name: 'Tomato',
        Category: 'Vegetables',
    }, {
        ID: 5,
        Name: 'Apricot',
        Category: 'Fruits',
    }];

---



