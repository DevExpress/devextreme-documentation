---
uid: common\grids:EditingBase.texts
---
---
##### shortDescription
Contains properties that specify texts for editing-related UI elements.

---
<!--
The following code shows the **editing**.**texts** declaration syntax:

---
##### jQuery

    &lt;!-- tab: index.js --&gt;
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                // ...
                texts: {
                    deleteRow: "Remove"
                }
            }
        });
    });

##### Angular

    &lt;!-- tab: app.component.html --&gt;
    &lt;dx-{widget-name} ... &gt;
        &lt;dxo-editing ... &gt;
            &lt;dxo-texts
                deleteRow="Remove"&gt;
            &lt;/dxo-texts&gt;
        &lt;/dxo-editing&gt;
    &lt;/dx-{widget-name}&gt;

    &lt;!-- tab: app.component.ts --&gt;
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    &lt;!-- tab: app.module.ts --&gt;
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
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;Dx{WidgetName} ... &gt;
            &lt;DxEditing ... &gt;
                &lt;DxTexts
                    delete-row="Remove"
                /&gt;
            &lt;/DxEditing&gt;
        &lt;/Dx{WidgetName}&gt; 
    &lt;/template&gt;

    &lt;script&gt;
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxEditing,
        DxTexts
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxEditing,
            DxTexts
        },
        data() {
            // ...
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Editing,
        Texts
    } from 'devextreme-react/{widget-name}';

    class App extends React.Component {
        render() {
            return (
                &lt;{WidgetName} ... &gt;
                    &lt;Editing&gt;
                        &lt;Texts
                            deleteRow="Remove"
                        /&gt;
                    &lt;/Editing&gt;
                &lt;/{WidgetName}&gt;
            );
        }
    }
    export default App;

---
-->