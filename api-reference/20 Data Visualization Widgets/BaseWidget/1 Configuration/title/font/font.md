---
id: BaseWidget.Options.title.font
type: Object
inherits: Font
---
---
##### shortDescription
Specifies font options for the title.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            title: {
                font: {
                    color: "black"
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-title ... >
            <dxo-font
                color="black">
            </dxo-font>
        </dxo-title>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
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
        <dx-{widget-name} ... >
            <dx-title ... >
                <dx-font
                    color="black"
                />
            </dx-title>
        </dx-{widget-name}>
    </template>

    <script>
    import Dx{WidgetName}, {
        DxTitle,
        DxFont
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxTitle,
            DxFont
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import {WidgetName}, {
        Title,
        Font
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                <{WidgetName} ... >
                    <Title ... >
                        <Font color="black" />
                    </Title>
                </{WidgetName}>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Title(t => t
            .Font(f => f.Color("black"))
        )
    )

---