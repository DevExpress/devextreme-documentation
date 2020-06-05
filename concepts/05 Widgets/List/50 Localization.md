Static messages for any DevExtreme widget are defined in a locale-specific dictionary as key-value pairs. To localize the **List** widget, you need to redefine the following keys' values. To load the dictionaries, use the [loadMessages(messages)](/api-reference/50%20Common/utils/localization/loadMessages(messages).md '/Documentation/ApiReference/Common/utils/localization/#loadMessagesmessages') method defined in the `DevExpress.localization` namespace.

---
#####jQuery

    <!--JavaScript-->DevExpress.localization.loadMessages({
        // Replace "en" with the target locale of the dictionary
        "en": {
            "dxCollectionWidget-noDataText": "No data to display",
            "dxList-pullingDownText": "Pull down to refresh...",
            "dxList-pulledDownText": "Release to refresh...",
            "dxList-refreshingText": "Refreshing...",
            "dxList-pageLoadingText": "Loading...",
            "dxList-nextButtonText": "More",
            "dxList-selectAll": "Select All",
            "dxListEditDecorator-delete": "Delete",
            "dxListEditDecorator-more": "More"
        },
        "de": {
            "dxCollectionWidget-noDataText": "Keine Daten verfügbar",
            // ...
        }
    });

    // Sets the locale
    DevExpress.localization.locale(navigator.language);

#####Angular

    <!--TypeScript-->
    import { locale, loadMessages } from "devextreme/localization";

    loadMessages({
        // Replace "en" with the target locale of the dictionary
        "en": {
            "dxCollectionWidget-noDataText": "No data to display",
            "dxList-pullingDownText": "Pull down to refresh...",
            "dxList-pulledDownText": "Release to refresh...",
            "dxList-refreshingText": "Refreshing...",
            "dxList-pageLoadingText": "Loading...",
            "dxList-nextButtonText": "More",
            "dxList-selectAll": "Select All",
            "dxListEditDecorator-delete": "Delete",
            "dxListEditDecorator-more": "More"
        },
        "de": {
            "dxCollectionWidget-noDataText": "Keine Daten verfügbar",
            // ...
        }
    });

    // Sets the locale
    locale(navigator.language);

---

[note] DevExtreme ships several predefined dictionaries for most locales. See the [Localization](/concepts/Common/Localization '/Documentation/Guide/Common/Localization/') topic for more information. 

Some messages can be defined by **List** options as well as keys. The following table illustrates the options and keys that define the same messages. Note that the options always take precedence over keys.

<table class="dx-table">
    <tr>
        <th>Option</th>
        <th>Key</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#noDataText">noDataText</a></td>
        <td><code>dxCollectionWidget-noDataText</code></td>
        <td>Displayed when the <b>List</b> is empty.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pullingDownText">pullingDownText</a></td>
        <td><code>dxList-pullingDownText</code></td>
        <td>Displayed when the user begins <a href="/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/">pulling</a> the <b>List</b> down.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pulledDownText">pulledDownText</a></td>
        <td><code>dxList-pulledDownText</code></td>
        <td>Displayed when the user have pulled the <b>List</b> down.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#refreshingText">refreshingText</a></td>
        <td><code>dxList-refreshingText</code></td>
        <td>Displayed while data in the <b>List</b> is being refreshed.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pageLoadingText">pageLoadingText</a></td>
        <td><code>dxList-pageLoadingText</code></td>
        <td>Displayed while another <a href="/Documentation/Guide/Widgets/List/Paging/">page</a> is loading.</td>
    </tr>
    <tr>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#nextButtonText">nextButtonText</a></td>
        <td><code>dxList-nextButtonText</code></td>
        <td>Displayed on the button that loads the next page. Appears only if the <a href="/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pageLoadMode">pageLoadMode</a> option is <i>"nextButton"</i>.</td>
    </tr>
</table>

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, localization, translation, localization keys, localize messages, localize texts
