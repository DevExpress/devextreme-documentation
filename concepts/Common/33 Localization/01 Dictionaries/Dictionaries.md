Dictionaries contain localized strings for different languages. These are JavaScript or JSON files depending on the package you use. DevExpress curates the following dictionaries:

- English (en) (default)
- German (de)
- Japanese (ja)
- Russian (ru)

There are also dictionaries that the community contributes and curates. The list of dictionaries is available [on GitHub](https://github.com/DevExpress/DevExtreme/tree/18_2/js/localization/messages).

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on CDN or npm.

* **CDN or local file**        

    Link the required dictionaries using the `<script>` tag.

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
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

* **npm**       

    Include the dictionaries using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        // ...
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
        // Dictionaries for German and Russian languages
        const deMessages = require('devextreme/localization/messages/de.json');
        const ruMessages = require('devextreme/localization/messages/ru.json');
        const localization = require('devextreme/localization');

        localization.loadMessages(deMessages);
        localization.loadMessages(ruMessages);
        localization.locale(navigator.language || navigator.browserLanguage);
        
    ---

