DevExtreme UI text localization uses dictionaries from `devextreme/localization/messages/<code>.json`. Each dictionary contains over 800 localized strings. 

A dictionary key (for example `de`, `fr`, `zh-tw`) is a [BCP 47](https://developer.mozilla.org/en-US/docs/Glossary/BCP_47_language_tag) language tag. If you set a region-qualified locale and no exact dictionary exists, DevExtreme resolves the locale through parent fallback and then to English (`en`). For example, `de-AT` resolves to `de`, and `ca-ES` resolves to `ca`.

Locale matching is case-insensitive. For example, `zh-TW` and `zh-tw` resolve to the same dictionary.

Use one of the following dictionary delivery formats:

- `<code>.json` in module-based projects (Angular, Vue, React, or any bundler workflow).
- `dx.messages.<code>.js` in script-tag projects (jQuery, CDN, or non-module setups).

---
##### jQuery

Use the script-tag dictionary file and set the locale after the file is loaded:

    <!--HTML-->
    <head>
        <!-- DevExtreme library -->
        <script src="https://cdn3.devexpress.com/jslib/minor_26_1/js/dx.all.js"></script>
        <!-- German dictionary -->
        <script src="https://cdn3.devexpress.com/jslib/minor_26_1/js/localization/dx.messages.de.js"></script>
    </head>
    <body>
        <script>
            DevExpress.localization.locale("de");
            // ...
        </script>
    </body>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        template: '',
        standalone: true
    })
    export class AppComponent {
        constructor() {
            loadMessages(deMessages);
            locale('de');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';

    loadMessages(deMessages);
    locale('de');
    </script>

##### React

    <!-- tab: App.tsx -->
    import deMessages from 'devextreme/localization/messages/de.json';
    import { loadMessages, locale } from 'devextreme/localization';

    loadMessages(deMessages);
    locale('de');

    export default function App() {
        return null;
    }

---
