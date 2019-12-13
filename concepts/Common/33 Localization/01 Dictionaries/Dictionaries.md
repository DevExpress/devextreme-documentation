Dictionaries contain localized strings for different languages. The strings are represented by key/value pairs and are shipped as JavaScript or JSON files (depending on the package you use).

DevExpress curates the following dictionaries:

- English (en) (default)
- German (de)
- Japanese (ja)
- Russian (ru)

There are also dictionaries that the community contributes and curates. The list of dictionaries is available <a href="https://github.com/DevExpress/DevExtreme/tree/19_2/js/localization/messages" target="_blank">on GitHub</a>.

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on CDN or npm.

* **CDN or local file**        

    Link the required dictionaries using the `<script>` tag.

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_19_2/js/dx.all.js"></script>
            <!-- Dictionary files for German and Russian languages -->
            <script src="https://cdn3.devexpress.com/jslib/minor_19_2/js/localization/dx.messages.de.js"></script>
            <script src="https://cdn3.devexpress.com/jslib/minor_19_2/js/localization/dx.messages.ru.js"></script>
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

* **npm**       

    Include the dictionaries using the `import` or `require` statement&mdash;the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    ---
    ##### npm: ECMAScript 6 syntax

        <!--JavaScript-->
        // ...
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
        // Dictionaries for German and Russian languages
        const deMessages = require('devextreme/localization/messages/de.json');
        const ruMessages = require('devextreme/localization/messages/ru.json');
        const localization = require('devextreme/localization');

        localization.loadMessages(deMessages);
        localization.loadMessages(ruMessages);
        localization.locale(navigator.language);
        
    ---

