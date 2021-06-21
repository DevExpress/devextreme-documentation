You can use [templates](/api-reference/50%20Common/Object%20Structures/template '/Documentation/ApiReference/Common/Object_Structures/template/') to customize the appearance of individual items. In the following code, a template makes the `Today` item bold:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const now = new Date();
        const startOfWeek = new Date(
            now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
        );
        const startOfDay = new Date(now.setHours(0,0,0,0));
        const boldFont = (data) => {
            return "<b>" + data.text + "</b>";
        }

        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                // ...
                headerFilter: {
                    dataSource: [{
                        text: 'Today',
                        value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                        template: boldFont
                    }, {
                        text: 'This week',
                        value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                    }, {
                        text: 'Earlier',
                        value: ['OrderDate', '<', startOfWeek]
                    }]
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxi-column>
            <dxo-header-filter
                [dataSource]="headerFilterData">
            </dxo-header-filter>
        </dxi-column>
        <div *dxTemplate="let data of 'boldFont'">
            <b>{{data.text}}</b>
        </div>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        headerFilterData: any;
        constructor() {
            const now = new Date();
            const startOfWeek = new Date(
                now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
            );             
            const startOfDay = new Date(now.setHours(0,0,0,0));

            this.headerFilterData = [{
                text: 'Today',
                value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                template: 'boldFont'
            }, {
                text: 'This week',
                value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
            }, {
                text: 'Earlier',
                value: ['OrderDate', '<', startOfWeek]
            }];
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { Dx{WidgetName}Module } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            Dx{WidgetName}Module
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn>
                <DxHeaderFilter
                    :data-source="headerFilterData"
                />
            </DxColumn>
            <template #bold-font="{ data }">
                <b>{{data.text}}</b>
            </template>
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        Dx{WidgetName},
        DxColumn,
        DxHeaderFilter
    } from 'devextreme-vue/{widget-name}';

    const now = new Date();
    const startOfWeek = new Date(
        now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
    );             
    const startOfDay = new Date(now.setHours(0,0,0,0));

    export default {
        components: {
            Dx{WidgetName},
            DxColumn,
            DxHeaderFilter
        },
        data() {
            return {
                headerFilterData: [{
                    text: 'Today',
                    value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
                    template: 'bold-font'
                }, {
                    text: 'This week',
                    value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
                }, {
                    text: 'Earlier',
                    value: ['OrderDate', '<', startOfWeek]
                }]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { {WidgetName}, Column, HeaderFilter } from 'devextreme-react/{widget-name}';

    const now = new Date();
    const startOfWeek = new Date(
        now.setDate(now.getDate() - now.getDay() - 1 + (now.getDay() === 0 ? -6 : 1))
    );
    const startOfDay = new Date(now.setHours(0, 0, 0, 0));

    const renderBoldText = (data) => <b>{data.text}</b>;

    const headerFilterData = [{
        text: 'Today',
        value: [['OrderDate', '>=', startOfDay], 'and', ['OrderDate', '<=', now]],
        template: 'boldFont'
    }, {
        text: 'This week',
        value: [['OrderDate', '>=', startOfWeek], 'and', ['OrderDate', '<', startOfDay]]
    }, {
        text: 'Earlier',
        value: ['OrderDate', '<', startOfWeek]
    }];

    class App extends React.Component {
        render() {
            return (
                <{WidgetName}>
                    <Column>
                        <HeaderFilter
                            dataSource={headerFilterData}
                        />
                    </Column>
                     <Template name="boldFont" render={renderBoldText} />
                </{WidgetName}>
            );
        }
    }

    export default App;

---
