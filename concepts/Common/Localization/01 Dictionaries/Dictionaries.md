Dictionaries contain localized strings for different languages. These strings are key/value pairs and are shipped as JavaScript or JSON files (depending on the package you use).

DevExtreme dictionaries are community-sourced. For a list of all available dictionaries, refer to the DevExtreme repo on GitHub: [DevExtreme Dictionaries](https://github.com/DevExpress/DevExtreme/tree/25_2/packages/devextreme/js/localization/messages).

To localize your project, you can import dictionaries from the following locations:

- `js/localization` within the `devextreme-dist` package.
- `js/localization` in DevExtreme libraries on the DevExpress CDN.
- `C:\Program Files\DevExpress 25.2\Components\Sources\DevExtreme\Lib\js\localization` on your computer if you used the DevExpress Unified Component Installer.

---
##### jQuery

Use the `<script>` tag to link the required dictionaries, and place the links *after* a link to the DevExtreme library:

    <!--HTML-->
    <head>
        <!-- ... -->
        <!-- DevExtreme library -->
        <script src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
        <!-- Dictionary files for German language -->
        <script src="https://cdn3.devexpress.com/jslib/minor_25_2/js/localization/dx.messages.de.js"></script>
    </head>
    <body>
        <script>
            DevExpress.localization.locale(navigator.language);
            // ...
            // DevExtreme UI components are configured here
            // ...
        </script>
    </body>

##### Angular

Include the dictionaries using the `import` or `require` statement the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    <!-- tab: ECMAScript 6 syntax -->
    // ...
    // Dictionaries for German language
    import deMessages from "devextreme/localization/messages/de.json";
    import { locale, loadMessages } from "devextreme/localization";

    export class AppComponent {
        constructor() {
            loadMessages(deMessages);
            locale(navigator.language);
        }
    }

    <!-- tab: CommonJS syntax -->
    // ...
    // Dictionaries for German language
    const deMessages = require('devextreme/localization/messages/de.json');
    const localization = require('devextreme/localization');

    localization.loadMessages(deMessages);
    localization.locale(navigator.language);

##### Vue

Include the dictionaries using the `import` or `require` statement the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    <!-- tab: ECMAScript 6 syntax -->
    // ...
    // Dictionaries for German language
    import deMessages from "devextreme/localization/messages/de.json";
    import { locale, loadMessages } from "devextreme/localization";

    export default {
        created() {
            loadMessages(deMessages);
            locale(navigator.language);
        }
    }

    <!-- tab: CommonJS syntax -->
    // ...
    // Dictionaries for German language
    const deMessages = require('devextreme/localization/messages/de.json');
    const localization = require('devextreme/localization');

    localization.loadMessages(deMessages);
    localization.locale(navigator.language);

##### React

Include the dictionaries using the `import` or `require` statement the statement depends on the syntax for working with modules. The following code shows ECMAScript 6 and CommonJS syntaxes:

    <!-- tab: ECMAScript 6 syntax -->
    // ...
    // Dictionaries for German language
    import deMessages from "devextreme/localization/messages/de.json";
    import { locale, loadMessages } from "devextreme/localization";

    class App extends React.Component {
        constructor(props) {
            super(props);
            loadMessages(deMessages);
            locale(navigator.language);
        }
    }

    <!-- tab: CommonJS syntax -->
    // ...
    // Dictionaries for German language
    const deMessages = require('devextreme/localization/messages/de.json');
    const localization = require('devextreme/localization');

    localization.loadMessages(deMessages);
    localization.locale(navigator.language);

---    

