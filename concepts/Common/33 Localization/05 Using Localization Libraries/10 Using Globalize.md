Activating Globalize in your project requires the following files:

- Globalize library
- CLDR library
- CLDR JSON files for each required language.

You can find the Globalize and CLDR libraries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js directory.

CLDR JSON files are available in the [Unicode-CLDR](https://github.com/unicode-cldr) repository. Refer to [this table](https://github.com/globalizejs/globalize#2-cldr-content) for details on which CLDR JSONs you may require.

All the components are also available via CDN and npm. 

* **CDN or local files**      

    Include the Globalize and CLDR libraries along with the [dictionaries](/concepts/Common/33%20Localization/01%20Dictionaries.md '/Documentation/Guide/Common/Localization/#Dictionaries') using `<script>` tags as shown below. The order is important. Then, load CLDR JSONs using `$.getJSON` calls (you need to add the jQuery script) and set the locale using the `Globalize.locale()` method:

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
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.all.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/localization/dx.messages.ru.js"></script>
        </head>
        <script>
            $(function() {
                $.when(
                    // Gets language-specific CLDR JSONs for German and Russian
                    $.getJSON("https://unpkg.com/cldr-dates-full/main/de/ca-gregorian.json"),
                    $.getJSON("https://unpkg.com/cldr-numbers-full/main/de/numbers.json"),
                    $.getJSON("https://unpkg.com/cldr-numbers-full/main/de/currencies.json"),
                    $.getJSON("https://unpkg.com/cldr-dates-full/main/ru/ca-gregorian.json"),
                    $.getJSON("https://unpkg.com/cldr-numbers-full/main/ru/numbers.json"),
                    $.getJSON("https://unpkg.com/cldr-numbers-full/main/ru/currencies.json"),
                    $.getJSON("https://unpkg.com/cldr-core/supplemental/likelySubtags.json"),
                    $.getJSON("https://unpkg.com/cldr-core/supplemental/timeData.json"),
                    $.getJSON("https://unpkg.com/cldr-core/supplemental/weekData.json"),
                    $.getJSON("https://unpkg.com/cldr-core/supplemental/currencyData.json"),
                    $.getJSON("https://unpkg.com/cldr-core/supplemental/numberingSystems.json")
                ).then(function () {
                    // Normalizes $.getJSON results getting only the JSON without the request statuses
                    return [].slice.apply( arguments, [0] ).map(function( result ) {
                        return result[0];
                    });
                }).then( Globalize.load ).then(function() {
                    Globalize.locale(navigator.language || navigator.browserLanguage);
                });
            });
        </script>

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/jQuery/Light/"
    }

* **npm**       

    Install the `cldr-data` and `globalize` packages:

        npm install --save-dev cldr-data globalize

    Then, include Globalize, CLDR, CLDR JSONs, and the dictionaries using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 syntax used with a SystemJS module loader, and CommonJS syntax used with a Webpack module bundler:

    ---
    ##### npm: ECMAScript 6 syntax / SystemJS configuration

        <!--JavaScript-->
        import 'devextreme/localization/globalize/number';
        import 'devextreme/localization/globalize/date';
        import 'devextreme/localization/globalize/currency';
        import 'devextreme/localization/globalize/message';

        // Dictionaries for German and Russian languages
        import deMessages from 'devextreme/localization/messages/de.json!json';
        import ruMessages from 'devextreme/localization/messages/ru.json!json';

        // Language-specific CLDR JSONs for German and Russian
        import deCaGregorian from 'cldr-data/main/de/ca-gregorian.json!json';
        import deNumbers from 'cldr-data/main/de/numbers.json!json';
        import deCurrencies from 'cldr-data/main/de/currencies.json!json';
        import ruCaGregorian from 'cldr-data/main/ru/ca-gregorian.json!json';
        import ruNumbers from 'cldr-data/main/ru/numbers.json!json';
        import ruCurrencies from 'cldr-data/main/ru/currencies.json!json';

        import likelySubtags from 'cldr-data/supplemental/likelySubtags.json!json';
        import timeData from 'cldr-data/supplemental/timeData.json!json';
        import weekData from 'cldr-data/supplemental/weekData.json!json';
        import currencyData from 'cldr-data/supplemental/currencyData.json!json';
        import numberingSystems from 'cldr-data/supplemental/numberingSystems.json!json';

        import Globalize from 'globalize';

        Globalize.load(
            deCaGregorian, deNumbers, deCurrencies,
            ruCaGregorian, ruNumbers, ruCurrencies,
            likelySubtags,
            timeData,
            weekData,
            currencyData,
            numberingSystems
        );

        Globalize.loadMessages(deMessages);
        Globalize.loadMessages(ruMessages);

        Globalize.locale(navigator.language || navigator.browserLanguage)

    **config.js**

        <!--JavaScript-->
        System.config({
            // ...
            paths: {
                'npm:': 'node_modules/'
            },
            map: {
                // ...
                'globalize': 'npm:globalize/dist/globalize',
                'cldr': 'npm:cldrjs/dist/cldr',
                'cldr-data': 'npm:cldr-data',
                'json': 'npm:systemjs-plugin-json/json.js',
            },
            packages: {
                app: {
                    // ...
                    'globalize': {
                        main: '../globalize.js',
                        defaultExtension: 'js'
                    },
                    'cldr': {
                        main: '../cldr.js',
                        defaultExtension: 'js'
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
            // Language-specific CLDR JSONs for German and Russian
            require('cldr-data/main/de/ca-gregorian.json'),
            require('cldr-data/main/de/numbers.json'),
            require('cldr-data/main/de/currencies.json'),
            require('cldr-data/main/ru/ca-gregorian.json'),
            require('cldr-data/main/ru/numbers.json'),
            require('cldr-data/main/ru/currencies.json'),
            require('cldr-data/supplemental/likelySubtags.json'),
            require('cldr-data/supplemental/timeData.json'),
            require('cldr-data/supplemental/weekData.json'),
            require('cldr-data/supplemental/currencyData.json'),
            require('cldr-data/supplemental/numberingSystems.json')
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
                    globalize$: path.resolve( __dirname, 'node_modules/globalize/dist/globalize.js' ),
                    globalize: path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),
                    cldr$: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
                    cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr')
                }
            }
        }

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/Angular/Light/"
    }

Strings, numbers, dates, and currencies are now automatically localized and formatted according to the specified locale. You can also use a currency other than USD (see the last example in the [Using Intl](/concepts/Common/33%20Localization/05%20Using%20Localization%20Libraries/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Using_Localization_Libraries/Using_Intl') topic).

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
    import { DxDataGridModule } from 'devextreme-angular';
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
- [Sample Projects on GitHub](https://github.com/DevExpress/devextreme-examples)
