---
id: localization.formatMessage(key, value)
module: localization
export: formatMessage
---
---
##### shortDescription
Substitutes the provided value(s) for placeholders in a message that the key specifies.

##### return: String
The formatted message.

##### param(key): String
The key that identifies the message in a dictionary.

##### param(value): String | Array<String>
One or several values used to fill placeholders in the message.

---
---
##### jQuery

    <!--JavaScript-->
    // Load the "greeting" message for the "en" and "es" locales
    DevExpress.localization.loadMessages({
        "en": {
            "greeting": "Hello, {0} {1}!",
        },
        "es": {
            "greeting": "Hola, {0} {1}!",
        }
    });
    
    // Set the current locale to "en"
    DevExpress.localization.locale("en");
    console.log(DevExpress.localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hello, John Smith!"

    // Set the current locale to "es"
    DevExpress.localization.locale("es");
    console.log(DevExpress.localization.formatMessage("greeting", ["John", "Smith"])); // logs "Hola, John Smith!"

##### Angular

    <!--TypeScript-->
    import { formatMessage, loadMessages, locale } from "devextreme/localization";
    // ...
    export class AppComponent {
        constructor() {
            // Load the "greeting" message for the "en" and "es" locales
            loadMessages({
                "en": {
                    "greeting": "Hello, {0} {1}!",
                },
                "es": {
                    "greeting": "Hola, {0} {1}!",
                }
            });

            // Set the current locale to "en"
            locale("en");
            console.log(formatMessage("greeting", ["John", "Smith"])); // logs "Hello, John Smith!"

            // Set the current locale to "es"
            locale("es");
            console.log(formatMessage("greeting", ["John", "Smith"])); // logs "Hola, John Smith!"
        }
    }

---