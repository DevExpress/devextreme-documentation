Activating Globalize in your project requires the following files:

- Globalize library
- CLDR library
- CLDR data

All the components are available via CDN and npm.

* **CDN or local files**      

    Include the Globalize and CLDR libraries using `<script>` tags as shown below. In this example, German and Russian [dictionaries](/concepts/Common/33%20Localization/01%20Dictionaries '/Documentation/Guide/Common/Localization/#Dictionaries') are also included. Note that the order you include the libraries is important. Then, set the locale using the `Globalize.locale()` method:

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
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
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/localization/dx.messages.ru.js"></script>
            <!-- Common and language-specific CLDR data -->
            <script src="https://unpkg.com/devextreme-cldr-data/supplemental.js"></script>
            <script src="https://unpkg.com/devextreme-cldr-data/de.js"></script>
            <script src="https://unpkg.com/devextreme-cldr-data/ru.js"></script>
        </head>
        <script>
            $(function() {
                Globalize.locale(navigator.language || navigator.browserLanguage);
            });
        </script>

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/"
    }

* **npm**       

    Install the `devextreme-cldr-data` and `globalize` packages:

        npm install --save-dev devextreme-cldr-data globalize

    Then, include Globalize, CLDR, and language-specific CLDR data using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The code below shows ECMAScript 6 syntax used with a SystemJS module loader, and CommonJS syntax used with a Webpack module bundler. These examples include German and Russian dictionaries.

    ---
    ##### npm: ECMAScript 6 syntax / SystemJS configuration

        <!--JavaScript-->
        import "devextreme/localization/globalize/number";
        import "devextreme/localization/globalize/date";
        import "devextreme/localization/globalize/currency";
        import "devextreme/localization/globalize/message";

        // Dictionaries for German and Russian languages
        import deMessages from "devextreme/localization/messages/de.json!json";
        import ruMessages from "devextreme/localization/messages/ru.json!json";
        
        // Common and language-specific CLDR JSONs
        import supplemental from "devextreme-cldr-data/supplemental.json!json";
        import deCldrData from "devextreme-cldr-data/de.json!json";
        import ruCldrData from "devextreme-cldr-data/ru.json!json";

        // In projects created with Angular CLI 6+
        // import deMessages from "devextreme/localization/messages/de.json";
        // import ruMessages from "devextreme/localization/messages/ru.json";
        // import supplemental from "devextreme-cldr-data/supplemental.json";
        // import deCldrData from "devextreme-cldr-data/de.json";
        // import ruCldrData from "devextreme-cldr-data/ru.json";

        import Globalize from "globalize";

        Globalize.load(
            supplemental, deCldrData, ruCldrData
        );

        Globalize.loadMessages(deMessages);
        Globalize.loadMessages(ruMessages);

        Globalize.locale(navigator.language || navigator.browserLanguage)

    In projects created with Angular CLI 6+, register Globalize as described [here](https://github.com/DevExpress/devextreme-angular/blob/master/docs/setup-3rd-party-dependencies.md#globalize-registration). In other projects, configure **config.js**:

        <!--JavaScript-->
        System.config({
            // ...
            paths: {
                "npm:": "node_modules/"
            },
            map: {
                // ...
                "globalize": "npm:globalize/dist/globalize",
                "cldr": "npm:cldrjs/dist/cldr",
                "cldr-data": "npm:cldr-data",
                "json": "npm:systemjs-plugin-json/json.js",
            },
            packages: {
                app: {
                    // ...
                    "globalize": {
                        main: "../globalize.js",
                        defaultExtension: "js"
                    },
                    "cldr": {
                        main: "../cldr.js",
                        defaultExtension: "js"
                    }
                }
            }
        });

    ##### npm: CommonJS syntax / Webpack configuration

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

        Globalize.locale(navigator.language || navigator.browserLanguage);

    **webpack.config.js**

        <!--JavaScript-->
        module.exports = {
            // ...
            resolve: {
                alias: {
                    globalize$: path.resolve( __dirname, "node_modules/globalize/dist/globalize.js" ),
                    globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
                    cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
                    cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
                }
            }
        }

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/Angular/Light/"
    }

Strings, numbers, dates, and currencies are now automatically localized and formatted according to the specified locale. You can also use a currency other than USD (see the last example in the [Using Intl](/concepts/Common/33%20Localization/05%20Localize%20Dates,%20Numbers,%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') topic).

In addition, you can now format values using structures accepted by [numberFormatter](https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md), [currencyFormatter](https://github.com/globalizejs/globalize/blob/master/doc/api/currency/currency-formatter.md), and [dateFormatter](https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md), for example:

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

    <!--HTML-->
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

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---


#####See Also#####
- [DevExtreme Angular sample project with Webpack and Globalize](https://github.com/DevExpress/devextreme-examples/tree/18_2/webpack-angular-globalize)
- [DevExtreme Angular sample project with SystemJS and Globalize](https://github.com/DevExpress/devextreme-examples/tree/18_2/systemjs-angular-globalize)
- [Value Formatting](/concepts/Common/34%20Value%20Formatting '/Documentation/Guide/Common/Value_Formatting')
- [Third-Party Dependencies Registration in Angular CLI 6+](https://github.com/DevExpress/devextreme-angular/blob/master/docs/setup-3rd-party-dependencies.md)
