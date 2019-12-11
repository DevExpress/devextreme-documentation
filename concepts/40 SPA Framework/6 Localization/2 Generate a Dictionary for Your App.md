Use the **DevExpress.localization.message.getDictionary()** utility to generate a dictionary for your application. Run this utility in the browser's console. Choose the required frame in the console (e.g., the top frame) so that the DevExpress namespace is available.

![Localization_getDictionary](/images/PhoneJS/Localization_getDictionary.png)

This utility gathers all the @-keys in HTML code of the application as well as all the @-keys found in the referenced libraries. The return value of this utility is an object whose fields represent the found keys. The field values are the strings that are converted from the keys. Copy the field-value pairs that represent the keys that are specified in this certain application to the clipboard.

Create a JavaScript file giving the *localization.XX.js* name to it, replacing XX with the identifier of the required locale. Call the [localization.loadMessages()](/api-reference/50%20Common/utils/localization/loadMessages().md '/Documentation/ApiReference/Common/utils/localization/#loadMessages') function in it. Pass an object containing a field named after the required locale. For example, "en". Paste the field-value pairs copied to the clipboard to the object assigned to the created field.

    <!--JavaScript-->
    DevExpress.localization.loadMessages({
        "en": {
            "billTotal": "Bill Total",
            "typeHere": "Type here",
            //...
        }
    });

[note]If you generated a default dictionary for your application, but then added more keys to the application, call the **getDictionary** utility with **true** passed as a parameter. The returned object will include only the keys that are not contained in the application's dictionaries.