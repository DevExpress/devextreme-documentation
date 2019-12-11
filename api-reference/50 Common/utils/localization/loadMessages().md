---
module: localization
export: loadMessages
---
---
##### shortDescription
Loads DevExtreme messages.

##### param(messages): Object
The messages to be loaded.

---
The object passed to this method should have the following structure. The first level keys are locale identifiers, which hold an object consisting of key-value pairs.

    <!--JavaScript-->
    {
        "en": {
            "Yes": "Yes",
            "No": "No",
            . . .
        },
        "es": {
            "Yes": "Si",
            "No": "No",
            . . .
        }
    }

[note] This method should be called only once - at the application's launch. It is necessary to reload the page each time you need to load new messages.