Dictionaries contain localized strings for different languages. The strings are represented by key/value pairs and are shipped as JavaScript or JSON files (depending on the package you use).

DevExpress curates the following dictionaries:

- English (en) (default)
- German (de)
- Japanese (ja)

There are also dictionaries that the community contributes and curates. The list of dictionaries is available <a href="https://github.com/DevExpress/DevExtreme/tree/22_1/js/localization/messages" target="_blank">on GitHub</a>.

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on CDN or npm.

* **CDN or local file**        

    Link the required dictionaries using the `<script>` tag. Place the links *after* a link to the DevExtreme library:

    ---
    ##### CDN

        <!--HTML-->
        <head>
            <!-- ... -->
            <!-- DevExtreme library -->
            <script src="https://cdn3.devexpress.com/jslib/minor_22_1/js/dx.all.js"></script>
            <!-- Dictionary files for German language -->
            <script src="https://cdn3.devexpress.com/jslib/minor_22_1/js/localization/dx.messages.de.js"></script>
        </head>
        <body>
            <script>
                DevExpress.localization.locale(navigator.language);
                // ...
                // DevExtreme UI components are configured here
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
        // Dictionaries for German language
        import deMessages from "devextreme/localization/messages/de.json";
        import { locale, loadMessages } from "devextreme/localization";

        // ===== Angular ======
        export class AppComponent {
            constructor() {
                loadMessages(deMessages);
                locale(navigator.language);
            }
        }

        // ===== Vue ======
        export default {
            created() {
                loadMessages(deMessages);
                locale(navigator.language);
            }
        }

        // ===== React ======
        class App extends React.Component {
            constructor(props) {
                super(props);
                loadMessages(deMessages);
                locale(navigator.language);
            }
        }

    ##### npm: CommonJS syntax

        <!--JavaScript-->
        // ...
        // Dictionaries for German language
        const deMessages = require('devextreme/localization/messages/de.json');
        const localization = require('devextreme/localization');

        localization.loadMessages(deMessages);
        localization.locale(navigator.language);
        
    ---

