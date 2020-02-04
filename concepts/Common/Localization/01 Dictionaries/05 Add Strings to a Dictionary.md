In the following example, the [loadMessages(messages)](/api-reference/50%20Common/utils/localization/loadMessages(messages).md '/Documentation/ApiReference/Common/utils/localization/#loadMessagesmessages') method adds a string with the `greetingMessage` key to the English and German dictionaries. The [formatMessage(key, value)](/api-reference/50%20Common/utils/localization/formatMessage(key_value).md '/Documentation/ApiReference/Common/utils/localization/#formatMessagekey_value') method then uses this key to retrieve the string from the dictionary that corresponds to the locale set by the [locale(locale)](/api-reference/50%20Common/utils/localization/locale(locale).md '/Documentation/ApiReference/Common/utils/localization/#localelocale') method.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var userName = "John";
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
            DevExpress.localization.formatMessage("greetingMessage", userName);
        )
    })

    <!--HTML-->
    <h1 id="greeting"></h1>

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
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
            locale(navigator.language);
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

    <script>
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    export default {
        created() {
            loadMessages({
                'en': {
                    'greetingMessage': 'Good morning, {0}!'
                },
                'de': {
                    'greetingMessage': 'Guten morgen, {0}!'
                }
            });
            locale('de');
        },
        data() {
            return {
                userName: 'John'
            }
        },
        computed: {
            greeting() {
                return formatMessage('greetingMessage', this.userName);
            }
        }
    }
    </script>
    
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.userName = 'John';

            loadMessages({
                'en': {
                    'greetingMessage': 'Good morning, {0}!'
                },
                'de': {
                    'greetingMessage': 'Guten morgen, {0}!'
                }
            });

            this.greeting = formatMessage('greetingMessage', this.userName);
            
            locale(navigator.language);
        }

        render() {
            return (
                <h1>{ this.greeting }</h1>
            );
        }
    }
    export default App;

---