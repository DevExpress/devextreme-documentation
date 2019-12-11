---
module: localization
export: loadMessages
---
---
##### shortDescription
Loads DevExtreme messages.

##### param(messages): Object
An object containing messages to load.

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