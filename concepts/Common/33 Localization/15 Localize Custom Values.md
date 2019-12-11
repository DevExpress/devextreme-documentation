DevExtreme provides an [API](/api-reference/50%20Common/utils/localization '/Documentation/ApiReference/Common/utils/localization/') for localizing messages, dates, or numbers in your app. 

The following example demonstrates how to localize a message. The [loadMessages()](/api-reference/50%20Common/utils/localization/loadMessages(messages).md '/Documentation/ApiReference/Common/utils/localization/#loadMessagesmessages') method loads dictionaries for several locales. The current locale is specified using the [locale()](/api-reference/50%20Common/utils/localization/locale(locale).md '/Documentation/ApiReference/Common/utils/localization/#localelocale') method. The [formatMessage()](/api-reference/50%20Common/utils/localization/formatMessage(key_value).md '/Documentation/ApiReference/Common/utils/localization/#formatMessagekey_value') method gets a message from the current locale's dictionary.

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
        })
        DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
        $("#greeting").text(
            DevExpress.localization.formatMessage("greetingMessage", userName)
        )
    })

    <!--HTML-->
    <h1 id="greeting"></h1>

##### Angular

    <!--TypeScript-->
    import { formatMessage, loadMessages, locale } from "devextreme/localization";
    // ...
    export class AppComponent {
        constructor() {
            loadMessages({
                "en": {
                    "greetingMessage": "Good morning, {0}!"
                },
                "de": {
                    "greetingMessage": "Guten morgen, {0}!"
                }
            })
            locale(navigator.language || navigator.browserLanguage)
        }
        userName: string = "John";
        get greeting() {
            return formatMessage("greetingMessage", this.userName);
        }
    }

    <!--HTML-->
    <h1>{{greeting}}</h1>

---

To localize a custom date or number, apply a format to it as shown in the [Format Custom Values](/concepts/Common/34%20Value%20Formatting/40%20Format%20Custom%20Values.md '/Documentation/Guide/Common/Value_Formatting/#Format_Custom_Values') article. You app should have [Intl](/concepts/Common/33%20Localization/05%20Localize%20Dates,%20Numbers,%20and%20Currencies/05%20Using%20Intl.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl') or [Globalize](/concepts/Common/33%20Localization/05%20Localize%20Dates,%20Numbers,%20and%20Currencies/10%20Using%20Globalize.md '/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize') configured.
