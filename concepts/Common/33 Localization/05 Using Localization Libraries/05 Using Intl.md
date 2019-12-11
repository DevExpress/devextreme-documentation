[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) is the short name used to refer to a particular [ECMAScript Internationalization API](https://ecma-international.org/ecma-402/1.0) object. DevExtreme supports this API via the [DevExtreme-Intl](https://github.com/DevExpress/DevExtreme-Intl) module. It is available on CDN and npm, or you can save the module (JavaScript file) on your local machine and use it.

* **CDN or local file**        

    Include the DevExtreme-Intl module using the `<script>` tag as shown in the example below. German and Russian [dictionaries](/concepts/Common/33%20Localization/01%20Dictionaries.md '/Documentation/Guide/Common/Localization/#Dictionaries') are included in this example as well. You can replace or complement them with additional dictionaries.

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/dx.all.js"></script>
            <!-- DevExtreme-Intl module -->
            <script src="https://unpkg.com/devextreme-intl@17.2/dist/devextreme-intl.min.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_17_2/js/localization/dx.messages.ru.js"></script>
        </head>
        <body>
            <script>
                DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
                // ...
                // DevExtreme widgets are configured here
                // ...
            </script>
        </body>

    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/jQuery/Light/"
    }

* **npm**       

    Install the `devextreme-intl` package:

        npm install --save-dev devextreme-intl

    Then, include the `devextreme-intl` module and the dictionaries using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        // ...
        import 'devextreme-intl';
        // Dictionaries for German and Russian languages
        import deMessages from 'devextreme/localization/messages/de.json!json';
        import ruMessages from 'devextreme/localization/messages/ru.json!json';
        import { locale, loadMessages } from 'devextreme/localization';

        loadMessages(deMessages);
        loadMessages(ruMessages);
        locale(navigator.language || navigator.browserLanguage)

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
        localization.locale(navigator.language || navigator.browserLanguage);
        
    ---

    #include common-demobutton with {
        url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/Angular/Light/"
    }

The Intl setup automatically localizes and formats string, number, date, and currency values according to the specified locale. You can also use a currency other than USD globally or in format definitions:

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

#####Angular

    <!--TypeScript-->
    import config from 'devextreme/core/config';
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        constructor() {
            // Specifying a currency globally
            config({ defaultCurrency: "EUR" });      
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })    

    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="price">
            <!-- Specifying a currency in a format definition -->
            <dxo-format
                type="currency"
                currency="RUB">
            </dxo-format>
        </dxi-column>
    </dx-data-grid>

---

In addition, you can use structures compatible with the Intl API for value formatting. See an example in the DevExtreme-Intl README's [API](https://github.com/DevExpress/DevExtreme-Intl#api) section. Note that DevExtreme provides extended formatting functionality out of the box, which is detailed [here](/concepts/Common/33%20Localization/15%20Value%20Formatting '/Documentation/Guide/Common/Localization/#Value_Formatting').

[Sample projects](https://github.com/DevExpress/devextreme-examples) are available on GitHub, including localization projects. Use them as a starting point for creating new apps or as examples to copy code from when implementing certain functionality in your app.
