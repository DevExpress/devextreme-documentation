[important]

The Globalize package is outdated and potentially unsafe.
 
Use Globalize at your own risk. We recommend switching to [Intl](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/04%20Using%20Intl.md) for a more secure solution.

[/important]

[note]We recommend against using Globalize if you apply [CSP rules](/concepts/Common/Security%20Considerations/40%20Content%20Security%20Policy/00%20Content%20Security%20Policy.md '/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy'). Use [Intl](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/04%20Using%20Intl.md) instead.

The following libraries and data are required to activate Globalize in your project:

- Globalize library
- CLDR library
- CLDR data

---
##### jQuery

Specify the Globalize and CLDR libraries using `<script>` tags as shown below. In this example, the German [dictionary](/concepts/Common/Localization%20and%20Globalization/05%20UI%20Text%20Localization/05%20DevExtreme%20Dictionaries%20Reference.md) is included. Include libraries in the order shown. Then, set the locale using the `Globalize.locale()` method:

    <!--HTML-->
    <head>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <!-- ... -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr/event.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.5.0/cldr/supplemental.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/message.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/number.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/currency.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.3.0/globalize/date.min.js"></script>
        <!-- DevExtreme library -->
        <script src="https://cdn3.devexpress.com/jslib/minor_26_1/js/dx.all.js"></script>
        <!-- Dictionary files for German language -->
        <script src="https://cdn3.devexpress.com/jslib/minor_26_1/js/localization/dx.messages.de.js"></script>
        <!-- Common and language-specific CLDR data -->
        <script src="https://unpkg.com/devextreme-cldr-data/supplemental.js"></script>
        <script src="https://unpkg.com/devextreme-cldr-data/de.js"></script>
    </head>
    <script>
        $(function() {
            Globalize.locale(navigator.language);
        });
    </script>

##### Angular

Install the `devextreme-cldr-data` and `globalize` packages:

    npm install --save-dev devextreme-cldr-data globalize
    
Register Globalize in your project as described in the following help topic: [Globalize Registration](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies/02%20Globalize%20Registration.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies/Globalize_Registration').

    <!--TypeScript-->
    import "devextreme/localization/globalize/number";
    import "devextreme/localization/globalize/date";
    import "devextreme/localization/globalize/currency";
    import "devextreme/localization/globalize/message";

    import deMessages from "devextreme/localization/messages/de.json";
    import supplemental from "devextreme-cldr-data/supplemental.json";
    import deCldrData from "devextreme-cldr-data/de.json";
    import Globalize from "globalize";

    export class AppComponent {
        constructor() {
            Globalize.load(supplemental, deCldrData);
            Globalize.loadMessages(deMessages);
            Globalize.locale(navigator.language);
        }
    }
    
##### Vue

Install the `devextreme-cldr-data` and `globalize` packages:

    npm install --save-dev devextreme-cldr-data globalize
    
Register Globalize in your project as described in the following help topic: [Globalize Registration](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/63%20Register%203rd-Party%20Dependencies/2%20Globalize%20Registration.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/#Register_3rd-Party_Dependencies/Globalize_Registration').

    <!--TypeScript-->
    import "devextreme/localization/globalize/number";
    import "devextreme/localization/globalize/date";
    import "devextreme/localization/globalize/currency";
    import "devextreme/localization/globalize/message";

    import deMessages from "devextreme/localization/messages/de.json";
    import supplemental from "devextreme-cldr-data/supplemental.json";
    import deCldrData from "devextreme-cldr-data/de.json";
    import Globalize from "globalize";

    Globalize.load(supplemental, deCldrData);
    Globalize.loadMessages(deMessages);
    Globalize.locale(navigator.language);
    
##### React

Install the `devextreme-cldr-data` and `globalize` packages:

    npm install --save-dev devextreme-cldr-data globalize
    
Register Globalize in your project as described in the following help topic: [Additional Configuration for Webpack](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/65%20Additional%20Configuration%20for%20Webpack.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/#Additional_Configuration_for_Webpack').

    <!--TypeScript-->
    import "devextreme/localization/globalize/number";
    import "devextreme/localization/globalize/date";
    import "devextreme/localization/globalize/currency";
    import "devextreme/localization/globalize/message";

    import deMessages from "devextreme/localization/messages/de.json";
    import supplemental from "devextreme-cldr-data/supplemental.json";
    import deCldrData from "devextreme-cldr-data/de.json";
    import Globalize from "globalize";

    Globalize.load(supplemental, deCldrData);
    Globalize.loadMessages(deMessages);
    Globalize.locale(navigator.language);

---

Apply the **format**.[type](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/Format/#type') property to format and localize strings, numbers, dates, and currencies automatically according to a locale.

You can also format values using structures accepted by <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/number/number-formatter.md" target="_blank">numberFormatter</a>, <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/currency/currency-formatter.md" target="_blank">currencyFormatter</a>, and <a href="https://github.com/globalizejs/globalize/blob/master/doc/api/date/date-formatter.md" target="_blank">dateFormatter</a>, for example:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "OrderDate",
                format: { skeleton: "yMMMd" }
            }, {
                dataField: "SaleAmount",
                format: { currency: "EUR", maximumFractionDigits: 2 }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-data-grid-column
            dataField="OrderDate"
            [format]="{ skeleton: 'yMMMd' }">
        </dxi-data-grid-column>
        <dxi-data-grid-column
            dataField="SaleAmount"
            [format]="{ currency: 'EUR', maximumFractionDigits: 2 }">
        </dxi-data-grid-column>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    // import dictionaries and localization modules here

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn
                data-field="OrderDate"
                :format="{ skeleton: 'yMMMd' }"
            />
            <DxColumn
                data-field="SaleAmount"
                :format="{ currency: 'EUR', maximumFractionDigits: 2 }"
            />
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    // ...
    // import dictionaries and localization modules here

    import DxDataGrid, { DxColumn } from 'devextreme-vue/data-grid';
    </script>
    
##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    // ...
    // import dictionaries and localization modules here

    import DataGrid, { Column } from 'devextreme-react/data-grid';

    export default function App() {
        return (
            <DataGrid ... >
                <Column
                    dataField="SaleAmount"
                    format={{ currency: 'EUR', maximumFractionDigits: 2 }}
                />
            </DataGrid>
        );
    }

---

