[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) is the short name used to refer to a particular [ECMAScript Internationalization API](https://ecma-international.org/ecma-402/1.0) object. DevExtreme supports this API via the [DevExtreme-Intl](https://github.com/DevExpress/DevExtreme-Intl) module. It is available on CDN and npm, or you can save the module (JavaScript file) on your local machine.

* **CDN or local file**        

    Use the `<script>` tag as shown in the example below to include the DevExtreme-Intl module. German and Russian [dictionaries](/concepts/Common/33%20Localization/01%20Dictionaries '/Documentation/Guide/Common/Localization/#Dictionaries') are included in this example. You can also add or replace dictionaries.

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
            <!-- DevExtreme-Intl module -->
            <script src="https://unpkg.com/devextreme-intl@18.2/dist/devextreme-intl.min.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/localization/dx.messages.ru.js"></script>
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
        import deMessages from "devextreme/localization/messages/de.json!json";
        import ruMessages from "devextreme/localization/messages/ru.json!json";

        // In projects created with Angular CLI 6+
        // import deMessages from "devextreme/localization/messages/de.json";
        // import ruMessages from "devextreme/localization/messages/ru.json";
        
        import { locale, loadMessages } from "devextreme/localization";

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

#####Angular

    <!--TypeScript-->
    import config from "devextreme/core/config";
    import { DxDataGridModule } from "devextreme-angular";
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

You can use structures compatible with the Intl API for value formatting. See an example in the DevExtreme-Intl README's [API](https://github.com/DevExpress/DevExtreme-Intl#api) section. The [Value Formatting](/concepts/Common/34%20Value%20Formatting '/Documentation/Guide/Common/Value_Formatting/') article provides information on the extended formatting functionality DevExtreme provides out of the box.

You can use the [Intl-Angular](https://github.com/DevExpress/devextreme-examples/tree/18_2/intl-angular) sample project as a starting point for creating new apps or as an example to copy code from when implementing specific functionality in your app.
