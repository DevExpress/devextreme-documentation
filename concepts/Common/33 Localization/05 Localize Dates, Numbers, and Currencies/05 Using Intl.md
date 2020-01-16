<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> is the short name used to refer to a particular <a href="http://ecma-international.org/ecma-402/1.0/" target="_blank">ECMAScript Internationalization API</a> object. DevExtreme supports this API via the <a href="https://github.com/DevExpress/DevExtreme-Intl" target="_blank">DevExtreme-Intl</a> module. It is available on CDN and npm, or you can save the module (JavaScript file) on your local machine.

* **CDN or local file**        

    Use the `<script>` tag as shown in the example below to include the DevExtreme-Intl module. German and Russian [dictionaries](/concepts/Common/33%20Localization/01%20Dictionaries '/Documentation/Guide/Common/Localization/#Dictionaries') are included in this example. You can also add or replace dictionaries.

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_19_1/js/dx.all.js"></script>
            <!-- DevExtreme-Intl module -->
            <script src="https://unpkg.com/devextreme-intl@19.1/dist/devextreme-intl.min.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_19_1/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_19_1/js/localization/dx.messages.ru.js"></script>
        </head>
        <body>
            <script>
                DevExpress.localization.locale(navigator.language);
                // ...
                // DevExtreme widgets are configured here
                // ...
            </script>
        </body>

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
    }

* **npm**       

    Install the `devextreme-intl` package:

        npm install --save-dev devextreme-intl

    Then, include the `devextreme-intl` module using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The code below shows ECMAScript 6 and CommonJS syntaxes. These examples include German and Russian dictionaries.

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        // ...
        import "devextreme-intl";
        // Dictionaries for German and Russian languages
        import deMessages from "devextreme/localization/messages/de.json";
        import ruMessages from "devextreme/localization/messages/ru.json";

        // In projects created with Angular CLI earlier than 6
        // import deMessages from "devextreme/localization/messages/de.json!json";
        // import ruMessages from "devextreme/localization/messages/ru.json!json";
        
        import { locale, loadMessages } from "devextreme/localization";

        // ===== Angular ======
        export class AppComponent {
            constructor() {
                loadMessages(deMessages);
                loadMessages(ruMessages);
                locale(navigator.language);
            }
        }

        // ===== Vue ======
        export default {
            created() {
                loadMessages(deMessages);
                loadMessages(ruMessages);
                locale(navigator.language);
            }
        }

        // ===== React ======
        class App extends React.Component {
            constructor(props) {
                super(props);
                loadMessages(deMessages);
                loadMessages(ruMessages);
                locale(navigator.language);
            }
        }

    ##### npm: CommonJS syntax

        <!--JavaScript-->
        // ...
        require("devextreme-intl");
        // Dictionaries for German and Russian languages
        const deMessages = require('devextreme/localization/messages/de.json');
        const ruMessages = require('devextreme/localization/messages/ru.json');
        const localization = require('devextreme/localization');

        localization.loadMessages(deMessages);
        localization.loadMessages(ruMessages);
        localization.locale(navigator.language);
        
    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/Angular/Light/"
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
    // ...
    // import dictionaries and localization modules here

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
    // ...
    // import dictionaries and localization modules here

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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column, Format
    } from 'devextreme-react/data-grid';
    // ...
    // import dictionaries and localization modules here

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

You can use structures compatible with the Intl API for value formatting. See an example in the DevExtreme-Intl README's <a href="https://github.com/DevExpress/DevExtreme-Intl#api" target="_blank">API</a> section. The [Value Formatting](/concepts/Common/34%20Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') article provides information on the extended formatting functionality DevExtreme provides out of the box.

You can use the <a href="https://github.com/DevExpress/devextreme-examples/tree/19_1/intl-angular" target="_blank">Intl-Angular</a> sample project as a starting point for creating new apps or as an example to copy code from when implementing specific functionality in your app.
