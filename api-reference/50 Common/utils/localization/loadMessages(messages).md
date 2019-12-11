---
module: localization
export: loadMessages
---
---
##### shortDescription
Loads localized messages.

##### param(messages): Object
The messages to be loaded.

---
---
##### jQuery

    <!--JavaScript-->
    DevExpress.localization.loadMessages({
        "en": {
            "Yes": "Yes",
            "No": "No",
            // ...
        },
        "es": {
            "Yes": "Si",
            "No": "No",
            // ...
        }
    });

##### Angular

    <!--TypeScript-->
    import { localization } from "devextreme";
    // ...
    export class AppComponent {
        constructor() {
            localization.loadMessages({
                "en": {
                    "Yes": "Yes",
                    "No": "No",
                    // ...
                },
                "es": {
                    "Yes": "Si",
                    "No": "No",
                    // ...
                }
            });
        }
    }

---

[note]It is necessary to reload the page each time you load new messages.