To create a Toolbar, declare the component in the markup and add at least one item.

You can display Toolbar items from the [items](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/) array or a [dataSource](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#dataSource). A Toolbar item may be plain text ([text](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#text)) or a UI component ([widget](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget)). If the item is a UI component, declare its [options](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options).

The following list shows all UI components that you can use in the Toolbar:

- [dxButton](/Documentation/ApiReference/UI_Components/dxButton/) 
- [dxAutocomplete](/Documentation/ApiReference/UI_Components/dxAutocomplete/)
- [dxCheckBox](/Documentation/ApiReference/UI_Components/dxCheckBox/) 
- [dxDateBox](/Documentation/ApiReference/UI_Components/dxDateBox/)
- [dxMenu](/Documentation/ApiReference/UI_Components/dxMenu/)
- [dxSelectBox](/Documentation/ApiReference/UI_Components/dxSelectBox/)
- [dxTabs](/Documentation/ApiReference/UI_Components/dxTabs/)
- [dxTextBox](/Documentation/ApiReference/UI_Components/dxTextBox/) 
- [dxButtonGroup](/Documentation/ApiReference/UI_Components/dxButtonGroup/) 
- [dxDropDownButton](/Documentation/ApiReference/UI_Components/dxDropDownButton/)

In Angular, Vue, and React, import modules for all the components except the [dxButton](/Documentation/ApiReference/UI_Components/dxButton/).

The following code creates a Toolbar and adds a [dxTextBox](/Documentation/ApiReference/UI_Components/dxTextBox/) and a [dxButton](/Documentation/ApiReference/UI_Components/dxButton/). The button notifies users on click. The Toolbar displays these items in the center.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        function showMessage(name) {
            DevExpress.ui.notify(
                {
                    message: name + ' button has been clicked!',
                    width: 300
                },
                'info',
                500
            );
        };
        
        $("#toolbar").dxToolbar({
            items: [
                {
                    widget: 'dxTextBox',
                    options: {
                        placeholder: 'Search...',
                        showClearButton: true
                    }
                },
                {
                    widget: 'dxButton',
                    options: {
                        icon: 'search',
                        onClick() {
                            showMessage('Search');
                        }
                    }
                }
            ]
        });

    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_21_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_21_2/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
            <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
            <div id="toolbar"></div>
        </body>
    </html>


##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar>
        <dxi-item 
            widget="dxTextBox" 
            [options]="textBoxOptions"
        >
        </dxi-item>
        <dxi-item  
            widget="dxButton" 
            [options]="searchButtonOptions"
        >
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import notify from 'devextreme/ui/notify';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        textBoxOptions = {
            placeholder: 'Search...',
            showClearButton: true
        }

        searchButtonOptions = {
            icon: 'search',
            onClick() {
                showMessage('Search');
            }
        }
    }

    function showMessage(name: string) {
        notify(
            {
                message: name + ' button has been clicked!',
                width: 300
            },
            'info',
            500
        );
    };

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxToolbarModule, DxTextBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxToolbarModule,
            DxTextBoxModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar>
            <dxItem 
                widget="dxTextBox" 
                :options="textBoxOptions"
            >
            </dxItem>
            <dxItem  
                widget="dxButton" 
                :options="searchButtonOptions"
            >
            </dxItem>
        </DxToolbar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
    import notify from "devextreme/ui/notify";
    import 'devextreme/ui/text_box';


    export default {
        components: {
            DxToolbar
            DxItem
        },
        data() {
            return {
                textBoxOptions: {
                    placeholder: 'Search...',
                    showClearButton: true
                },
                searchButtonOptions: {
                    icon: 'search',
                    onClick: () => {
                        this.showMessage('Search');
                    }
                }
            }
        },
        methods: {    
            showMessage(name) {
                notify(
                    {
                        message: name + ' button has been clicked!',
                        width: 300
                    },
                    'info',
                    500
                );
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Toolbar, { Item } from 'devextreme-react/toolbar';
    import notify from 'devextreme/ui/notify';
    import 'devextreme/ui/text_box';

    import 'devextreme/dist/css/dx.light.css';

    const showMessage = (name) => {
        notify(
            {
                message: name + ' button has been clicked!',
                width: 300
            },
            'info',
            500
        );
    }

    const textBoxOptions = {
        placeholder: 'Search...',
        showClearButton: true
    }

    const searchButtonOptions = {
        icon: 'search',
        onClick() {
            showMessage('Search');
        }
    }

    function App() {
        return (
            <Toolbar>
                <Item  
                    widget="dxTextBox" 
                    options={textBoxOptions}
                >
                </Item>
                <Item 
                    widget="dxButton" 
                    options={searchButtonOptions}
                >
                </Item>
            </Toolbar>
        );
    }

    export default App;

---