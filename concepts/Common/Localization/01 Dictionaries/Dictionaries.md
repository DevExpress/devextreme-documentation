Dictionaries contain localized strings for different languages. The strings are key/value pairs and are shipped as JavaScript or JSON files (depending on the package you use).

All dictionaries are contributed and curated by the community. The list of dictionaries is available <a href="https://github.com/DevExpress/DevExtreme/tree/25_1/packages/devextreme/js/localization/messages" target="_blank">on GitHub</a>.

---
##### jQuery

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on CDN.

Use the `<script>` tag to link the required dictionaries, and place the links *after* a link to the DevExtreme library:

    <!--HTML-->
    <head>
        <!-- ... -->
        <!-- DevExtreme library -->
        <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
        <!-- Dictionary files for German language -->
        <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/localization/dx.messages.de.js"></script>
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

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on npm.

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

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on npm.

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

You can find all the dictionaries on your local machine in the DevExtreme installation folder's or ZIP archive's Lib\js\localization directory. These dictionaries are also available on npm.

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

