[important] React projects created with the [Create React App](https://facebook.github.io/create-react-app) <a href="https://github.com/facebook/create-react-app/issues/4508" target="_blank">do not support Globalize</a>. [DevExtreme React Template](/concepts/50%20React%20Components/02%20Create%20a%20DevExtreme%20Application/00%20Create%20a%20DevExtreme%20Application.md '/Documentation/Guide/React_Components/Create_a_DevExtreme_Application/') is one of such projects. [Use Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') in these projects instead.

Activating Globalize in your project requires the following files:

- Globalize library
- CLDR library
- CLDR data

All the components are available via CDN and npm.

* **CDN or local files**      

    Include the Globalize and CLDR libraries using `<script>` tags as shown below. In this example, German and Russian [dictionaries](/concepts/Common/Localization/01%20Dictionaries '/Documentation/Guide/Common/Localization/#Dictionaries') are also included. Note that the order you include the libraries is important. Then, set the locale using the `Globalize.locale()` method:

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <!-- ... -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr/event.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr/supplemental.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/message.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/number.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/currency.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/date.min.js"></script>
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/dx.all.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_20_2/js/localization/dx.messages.ru.js"></script>
            <!-- Common and language-specific CLDR data -->
            <script src="https://unpkg.com/devextreme-cldr-data/supplemental.js"></script>
            <script src="https://unpkg.com/devextreme-cldr-data/de.js"></script>
            <script src="https://unpkg.com/devextreme-cldr-data/ru.js"></script>
        </head>
        <script>
            $(function() {
                Globalize.locale(navigator.language);
            });
        </script>

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/"
    }

* **npm**       

    Install the `devextreme-cldr-data` and `globalize` packages:

        npm install --save-dev devextreme-cldr-data globalize

    Register Globalize in your project as described in the [Angular](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies/02%20Globalize%20Registration.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies/Globalize_Registration'), [Vue](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/63%20Register%203rd-Party%20Dependencies/2%20Globalize%20Registration.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Register_3rd-Party_Dependencies/Globalize_Registration'), or [React](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/65%20Additional%20Configuration%20for%20Webpack.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Additional_Configuration_for_Webpack') articles.
    
    Then, include Globalize, CLDR, and language-specific CLDR data using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The code below shows ECMAScript 6 and CommonJS syntaxes. These examples include German and Russian dictionaries.

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        import "devextreme/localization/globalize/number";
        import "devextreme/localization/globalize/date";
        import "devextreme/localization/globalize/currency";
        import "devextreme/localization/globalize/message";

        // Dictionaries for German and Russian languages
        import deMessages from "devextreme/localization/messages/de.json";
        import ruMessages from "devextreme/localization/messages/ru.json";
        
        // Common and language-specific CLDR JSONs
        import supplemental from "devextreme-cldr-data/supplemental.json";
        import deCldrData from "devextreme-cldr-data/de.json";
        import ruCldrData from "devextreme-cldr-data/ru.json";
        
        import Globalize from "globalize";

        // ===== Angular ======
        export class AppComponent {
            constructor() {
                Globalize.load(
                    supplemental, deCldrData, ruCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.loadMessages(ruMessages);
                Globalize.locale(navigator.language);
            }
        }

        // ===== Vue ======
        export default {
            created() {
                Globalize.load(
                    supplemental, deCldrData, ruCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.loadMessages(ruMessages);
                Globalize.locale(navigator.language);
            }
        }

        // ===== React ======
        class App extends React.Component {
            constructor(props) {
                super(props);
                Globalize.load(
                    supplemental, deCldrData, ruCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.loadMessages(ruMessages);
                Globalize.locale(navigator.language);
            }
        }

    ##### npm: CommonJS syntax

        <!--JavaScript-->
        require('devextreme/localization/globalize/message');
        require('devextreme/localization/globalize/number');
        require('devextreme/localization/globalize/currency');
        require('devextreme/localization/globalize/date');

        // Dictionaries for German and Russian languages
        const deMessages = require('devextreme/localization/messages/de.json');
        const ruMessages = require('devextreme/localization/messages/ru.json');
        
        const Globalize = require('globalize');
        Globalize.load(
            // Common and language-specific CLDR JSONs
            require('devextreme-cldr-data/supplemental.json'),
            require('devextreme-cldr-data/main/de.json'),
            require('devextreme-cldr-data/main/ru.json')
        );

        Globalize.loadMessages(deMessages);
        Globalize.loadMessages(ruMessages);

        Globalize.locale(navigator.language);

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/Angular/Light/"
    }

Strings, numbers, dates, and currencies are now automatically localized and formatted according to the specified locale. You can also use a currency other than USD (see the last example in the [Using Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') topic).

In addition, you can now format values using structures accepted by <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md" target="_blank">numberFormatter</a>, <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/currency/currency-formatter.md" target="_blank">currencyFormatter</a>, and <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md" target="_blank">dateFormatter</a>, for example:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "OrderDate",
                format: { skeleton: "yMMMd" }
            }, {
                dataField: "SaleAmount",
                format: { currency: "EUR", maximumFractionDigits: 2 }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="OrderDate"
            [format]="{ skeleton: 'yMMMd' }">
        </dxi-column>
        <dxi-column
            dataField="SaleAmount"
            [format]="{ currency: 'EUR', maximumFractionDigits: 2 }">
        </dxi-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    // ...
    // import dictionaries and localization modules here

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
            <DxColumn
                data-field="OrderDate"
                :format="{ skeleton: 'yMMMd' }"
            />
            <DxColumn
                data-field="SaleAmount"
                :format="{ currency: 'EUR', maximumFractionDigits: 2 }"
            />
        </DxDataGrid>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    // ...
    // import dictionaries and localization modules here

    import DxDataGrid, {
        DxColumn
    } from 'devextreme-vue/data-grid';

    export default {
        components: {
            DxDataGrid,
            DxColumn
        },
        // ...
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DataGrid, {
        Column
    } from 'devextreme-react/data-grid';
    // ...
    // import dictionaries and localization modules here

    class App extends React.Component {
        constructor(props) {
            super(props);
            // ...
        }

        render() {
            return (
                <DataGrid ... >
                    <Column
                        dataField="price"
                        format={{ currency: 'EUR', maximumFractionDigits: 2 }}
                    />
                </DataGrid>
            );
        }
    }
    export default App;

---


#####See Also#####
- <a href="https://github.com/DevExpress/devextreme-examples/tree/20_2/angular-cli-globalize" target="_blank">DevExtreme sample project with Globalize created using Angular CLI</a>
- <a href="https://github.com/DevExpress/devextreme-examples/tree/20_2/systemjs-angular-globalize" target="_blank">DevExtreme Angular sample project with SystemJS and Globalize</a>
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting')
