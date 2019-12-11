Static messages for any DevExtreme widget are defined in a locale-specific dictionary as key-value pairs. To localize the **List** widget in particular, you need to redefine values for the following keys. To load the dictionaries, use the [loadMessages](/api-reference/50%20Common/utils/localization/loadMessages().md '/Documentation/ApiReference/Common/utils/localization/#loadMessages') method defined in the `DevExpress.localization` namespace.

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
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);

#####Angular

    <!--TypeScript-->
    import { locale, loadMessages } from 'devextreme/localization';

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
    locale(navigator.language || navigator.browserLanguage);

---

[note] DevExtreme ships several predefined dictionaries for most widespread locales. For details, see the [Use Predefined Dictionaries](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/10%20Localization/2%20Use%20Predefined%20Dictionaries.md '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization/#Use_Predefined_Dictionaries') topic. 

#####See Also#####
- [Localization](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/10%20Localization '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization/')
- [Localization - Use Globalize](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/11%20Localization%20-%20Use%20Globalize '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/') 

Some messages can be defined by **List** options as well as by keys. The following table draws the correspondence between options and keys that define the same messages. Note that the options always take precedence over the keys.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Option</th>
      <th>Key</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
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
    </tbody>
  </table>
</div>

#####See Also#####
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light)
- [List API Reference](/api-reference/10%20UI%20Widgets/dxList '/Documentation/ApiReference/UI_Widgets/dxList/')

[tags]list, localization, translation, localization keys, localize messages, localize texts