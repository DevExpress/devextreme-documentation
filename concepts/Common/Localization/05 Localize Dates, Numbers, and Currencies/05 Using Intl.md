<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> is the short name used to refer to a particular <a href="http://ecma-international.org/ecma-402/1.0/" target="_blank">ECMAScript Internationalization API</a> object. DevExtreme supports this API out of the box. All you need to do is set the locale:

---
##### jQuery

    <!-- tab: index.js -->
    DevExpress.localization.locale(navigator.language);
    // ...
    // DevExtreme UI components are configured here
    // ...

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <!-- DevExtreme library -->
        <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
        <!-- Dictionary files for German and Russian languages -->
        <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/localization/dx.messages.de.js"></script>
        <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/localization/dx.messages.ru.js"></script>
        <script src="index.js"></script>
    </head>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    // Dictionaries for German and Russian languages
    import deMessages from "devextreme/localization/messages/de.json";
    import ruMessages from "devextreme/localization/messages/ru.json";  
    import { locale, loadMessages } from "devextreme/localization";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            loadMessages(deMessages);
            loadMessages(ruMessages);
            locale(navigator.language);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
    </template>

    <script>
    // Dictionaries for German and Russian languages
    import deMessages from "devextreme/localization/messages/de.json";
    import ruMessages from "devextreme/localization/messages/ru.json";
    
    import { locale, loadMessages } from "devextreme/localization";

    export default {
        created() {
            loadMessages(deMessages);
            loadMessages(ruMessages);
            locale(navigator.language);
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    // Dictionaries for German and Russian languages
    import deMessages from "devextreme/localization/messages/de.json";
    import ruMessages from "devextreme/localization/messages/ru.json";
    
    import { locale, loadMessages } from "devextreme/localization";

    class App extends React.Component {
        constructor(props) {
            super(props);
            loadMessages(deMessages);
            loadMessages(ruMessages);
            locale(navigator.language);
        }

        render() {
            return (
                {/* ... */}
            );
        }
    }
    export default App;

##### CommonJS syntax

    <!--JavaScript-->
    // ...
    // Dictionaries for German and Russian languages
    const deMessages = require('devextreme/localization/messages/de.json');
    const ruMessages = require('devextreme/localization/messages/ru.json');
    const localization = require('devextreme/localization');

    localization.loadMessages(deMessages);
    localization.loadMessages(ruMessages);
    localization.locale(navigator.language);

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
}

Strings, numbers, dates, and currencies are now automatically localized and formatted according to the specified locale. You can also specify a currency other than USD globally (using the [defaultCurrency](/api-reference/50%20Common/Object%20Structures/globalConfig/defaultCurrency.md '/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultCurrency') setting) or in format definitions:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        // Specifying a currency globally
        DevExpress.config({ defaultCurrency: "EUR" });

        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "Price",
                // Specifying a currency in a format definition
                format: {
                    type: "currency",
                    currency: "RUB"
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import config from 'devextreme/core/config';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            // Specifying a currency globally
            config({ defaultCurrency: 'EUR' });      
        }
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column dataField="price">
            <!-- Specifying a currency in a format definition -->
            <dxo-format
                type="currency"
                currency="RUB">
            </dxo-format>
        </dxi-column>
    </dx-data-grid>
    
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

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn data-field="price">
                <!-- Specifying a currency in a format definition -->
                <DxFormat
                    type="currency"
                    currency="RUB"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import config from 'devextreme/core/config';

    import DxDataGrid, {
        DxColumn,
        DxFormat
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn,
            DxFormat
        },
        created() {
            // Specifying a currency globally
            config({ defaultCurrency: 'EUR' });  
        }
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';
    import config from 'devextreme/core/config';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column, Format
    } from 'devextreme-react/data-grid';

    class App extends React.Component {
        constructor(props) {
            super(props);
            // Specifying a currency globally
            config({ defaultCurrency: 'EUR' });
        }

        render() {
            return (
                <DataGrid ... >
                    <Column dataField="price">
                        // Specifying a currency in a format definition
                        <Format
                            type="currency"
                            currency="RUB"
                        />
                    </Column>
                </DataGrid>
            );
        }
    }
    export default App;

---

You can use structures compatible with the Intl API for value formatting. Refer to the [Intl Formats](/concepts/Common/Value%20Formatting/10%20Format%20Widget%20Values/15%20Intl%20Formats.md '/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Intl_Formats') section in the [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') article for more information.
