Use [loadMessages(messages)](/api-reference/50%20Common/utils/localization/loadMessages(messages).md '/Documentation/ApiReference/Common/utils/localization/#loadMessagesmessages') to add custom keys to one or more dictionaries. Use [formatMessage(key, value)](/api-reference/50%20Common/utils/localization/formatMessage(key_value).md '/Documentation/ApiReference/Common/utils/localization/#formatMessagekey_value') to retrieve the message for the active locale.

The following examples add `greetingMessage` to English and German dictionaries.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        const userName = "John";
        DevExpress.localization.loadMessages({
            "en": {
                "greetingMessage": "Good morning, {0}!"
            },
            "de": {
                "greetingMessage": "Guten morgen, {0}!"
            }
        });
        DevExpress.localization.locale(navigator.language);
        $("#greeting").text(
            DevExpress.localization.formatMessage("greetingMessage", userName)
        );
    });

    <!--HTML-->
    <h1 id="greeting"></h1>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true
    })
    export class AppComponent {
        constructor() {
            loadMessages({
                'en': {
                    'greetingMessage': 'Good morning, {0}!'
                },
                'de': {
                    'greetingMessage': 'Guten morgen, {0}!'
                }
            });
            locale('de');
        }

        userName: string = 'John';
        get greeting() {
            return formatMessage('greetingMessage', this.userName);
        }
    }

    <!-- tab: app.component.html -->
    <h1>{{ greeting }}</h1>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <h1>{{ greeting }}</h1>
    </template>

    <script setup lang="ts">
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    loadMessages({
        'en': {
            'greetingMessage': 'Good morning, {0}!'
        },
        'de': {
            'greetingMessage': 'Guten morgen, {0}!'
        }
    });
    locale('de');

    const userName = 'John';
    const greeting = formatMessage('greetingMessage', userName);
    </script>
    
##### React

    <!-- tab: App.tsx -->
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    loadMessages({
        'en': {
            'greetingMessage': 'Good morning, {0}!'
        },
        'de': {
            'greetingMessage': 'Guten morgen, {0}!'
        }
    });
    locale('de');

    export default function App() {
        const greeting = formatMessage('greetingMessage', 'John');
        return <h1>{greeting}</h1>;
    }

---

See this approach in the following demos:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/",
    name: "Using Intl"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/",
    name: "Using Globalize"
}