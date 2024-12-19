[important]

The Globalize package is outdated and potentially insecure. Reports from the Snyk security checker highlight vulnerabilities associated with this package.

Use Globalize at your own risk. In v25.1, we will remove Globalize from our installation, templates, and demos. We recommend switching to Intl for a more secure solution.

[/important]

---
##### React
[important] React projects created with the [Create React App](https://facebook.github.io/create-react-app) <a href="https://github.com/facebook/create-react-app/issues/4508" target="_blank">do not support Globalize</a>. [DevExtreme React Template](/concepts/50%20React%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/React_Components/Application_Template/') is one of such projects. [Use Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') in these projects instead.

---

[note]If you apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'), we do not recommend that you use the Globalize technique. Use the [Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') technique instead.

The following files are required to activate Globalize in your project:

- Globalize library
- CLDR library
- CLDR data

To include these components, you can use CDN or npm.

* **CDN or local files**      

    Specify the Globalize and CLDR libraries using `<script>` tags as shown below. In this example, the German [dictionary](/concepts/Common/Localization/01%20Dictionaries '/Documentation/Guide/Common/Localization/#Dictionaries') is included. Note that the order in which you include the libraries is important. Then, set the locale using the `Globalize.locale()` method:

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
            <script src="https://cdn3.devexpress.com/jslib/minor_24_2/js/dx.all.js"></script>
            <!-- Dictionary files for German language -->
            <script src="https://cdn3.devexpress.com/jslib/minor_24_2/js/localization/dx.messages.de.js"></script>
            <!-- Common and language-specific CLDR data -->
            <script src="https://unpkg.com/devextreme-cldr-data/supplemental.js"></script>
            <script src="https://unpkg.com/devextreme-cldr-data/de.js"></script>
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
        
    ---
    ##### Angular
    
    Register Globalize in your project as described in the following help topic: [Globalize Registration](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies/02%20Globalize%20Registration.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies/Globalize_Registration').
    
    ##### Vue
    
    Register Globalize in your project as described in the following help topic: [Globalize Registration](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/63%20Register%203rd-Party%20Dependencies/2%20Globalize%20Registration.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Register_3rd-Party_Dependencies/Globalize_Registration').
    
    ##### React
    
    Register Globalize in your project as described in the following help topic: [Additional Configuration for Webpack](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/65%20Additional%20Configuration%20for%20Webpack.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Additional_Configuration_for_Webpack').

    ---
    
    Then, include Globalize, CLDR, and language-specific CLDR data using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The code below shows ECMAScript 6 and CommonJS syntaxes. These examples include the German dictionary.

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        import "devextreme/localization/globalize/number";
        import "devextreme/localization/globalize/date";
        import "devextreme/localization/globalize/currency";
        import "devextreme/localization/globalize/message";

        // Dictionaries for the German language
        import deMessages from "devextreme/localization/messages/de.json";
        
        // Common and language-specific CLDR JSONs
        import supplemental from "devextreme-cldr-data/supplemental.json";
        import deCldrData from "devextreme-cldr-data/de.json";
        
        import Globalize from "globalize";

        // ===== Angular ======
        export class AppComponent {
            constructor() {
                Globalize.load(
                    supplemental, deCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.locale(navigator.language);
            }
        }

        // ===== Vue ======
        export default {
            created() {
                Globalize.load(
                    supplemental, deCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.locale(navigator.language);
            }
        }

        // ===== React ======
        class App extends React.Component {
            constructor(props) {
                super(props);
                Globalize.load(
                    supplemental, deCldrData
                );
                Globalize.loadMessages(deMessages);
                Globalize.locale(navigator.language);
            }
        }

    ##### npm: CommonJS syntax

        <!--JavaScript-->
        require('devextreme/localization/globalize/message');
        require('devextreme/localization/globalize/number');
        require('devextreme/localization/globalize/currency');
        require('devextreme/localization/globalize/date');

        // Dictionaries for the German language
        const deMessages = require('devextreme/localization/messages/de.json');
        
        const Globalize = require('globalize');
        Globalize.load(
            // Common and language-specific CLDR JSONs
            require('devextreme-cldr-data/supplemental.json'),
            require('devextreme-cldr-data/main/de.json')
        );

        Globalize.loadMessages(deMessages);

        Globalize.locale(navigator.language);

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize"
    }

You can format and localize strings, numbers, dates, and currencies automatically according to a locale. For this, apply the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/Format/#type') property. You can also use a currency other than USD (see the last example in the [Using Intl](/concepts/Common/Localization/05%20Localize%20Dates%2C%20Numbers%2C%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') topic).

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
- [Value Formatting](/concepts/Common/Value%20Formatting '/Documentation/Guide/Common/Value_Formatting')
