To create a Toolbar, declare the component in the markup and add at least one item.

You can use the [items](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/') array or specify a [dataSource](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#dataSource') to populate a Toolbar with items. A Toolbar item can display plain text ([text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#text')) or a UI component ([widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#widget')). If the item is a UI component, declare its [options](/api-reference/_hidden/dxToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#options').

The following list shows all UI components that you can use in the Toolbar:

- [dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/') 
- [dxAutocomplete](/api-reference/10%20UI%20Components/dxAutocomplete '/Documentation/ApiReference/UI_Components/dxAutocomplete/')
- [dxCheckBox](/api-reference/10%20UI%20Components/dxCheckBox '/Documentation/ApiReference/UI_Components/dxCheckBox/') 
- [dxDateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/')
- [dxMenu](/api-reference/10%20UI%20Components/dxMenu '/Documentation/ApiReference/UI_Components/dxMenu/')
- [dxSelectBox](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')
- [dxTabs](/api-reference/10%20UI%20Components/dxTabs '/Documentation/ApiReference/UI_Components/dxTabs/')
- [dxTextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') 
- [dxButtonGroup](/api-reference/10%20UI%20Components/dxButtonGroup '/Documentation/ApiReference/UI_Components/dxButtonGroup/') 
- [dxDropDownButton](/api-reference/10%20UI%20Components/dxDropDownButton '/Documentation/ApiReference/UI_Components/dxDropDownButton/')

---

##### Angular 

Import modules for all the components except the [dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/').

##### Vue

Import modules for all the components except the [dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/').

##### React

Import modules for all the components except the [dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/').

---

The following code creates a Toolbar and adds a [dxTextBox](/api-reference/10%20UI%20Components/dxTextBox '/Documentation/ApiReference/UI_Components/dxTextBox/') and [dxButton](/api-reference/10%20UI%20Components/dxButton '/Documentation/ApiReference/UI_Components/dxButton/'). The button responds to user clicks. The Toolbar displays these items in the center.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        function showMessage(name) {
            DevExpress.ui.notify(
                {
                    message: `${name} button has been clicked!`,
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
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_24_2/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_24_2/js/dx.all.js"></script>
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
                message: `${name} button has been clicked!`,
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
                        message: `${name} button has been clicked!`,
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
                message: `${name} button has been clicked!`,
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
