<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> is the ECMAScript Internationalization API. DevExtreme supports Intl for locale-aware number, date, and currency formatting out of the box.

Configure locale and message dictionaries in the [UI Text Localization](/concepts/Common/Localization%20and%20Globalization/05%20UI%20Text%20Localization/00%20UI%20Text%20Localization.md) section. This topic focuses on Intl-based value formatting.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/"
}

Use [defaultCurrency](/api-reference/50%20Common/Object%20Structures/GlobalConfig/defaultCurrency.md '/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#defaultCurrency') to set a global currency. Use **format**.[currency](/api-reference/50%20Common/Object%20Structures/format/currency.md '/Documentation/ApiReference/Common/Object_Structures/format/#currency') in an individual UI component to override that value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        DevExpress.config({ defaultCurrency: "EUR" });

        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "SaleAmount",
                format: {
                    type: "currency",
                    currency: "USD"
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxDataGridModule } from 'devextreme-angular';
    import config from 'devextreme/core/config';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        standalone: true,
        imports: [DxDataGridModule]
    })
    export class AppComponent {
        constructor() {
            config({ defaultCurrency: 'EUR' });
        }
    }

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-data-grid-column dataField="SaleAmount">
            <dxo-data-grid-format
                type="currency"
                currency="USD">
            </dxo-data-grid-format>
        </dxi-data-grid-column>
    </dx-data-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn data-field="SaleAmount">
                <DxFormat
                    type="currency"
                    currency="USD"
                />
            </DxColumn>
        </DxDataGrid>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import config from 'devextreme/core/config';
    import DxDataGrid, { DxColumn, DxFormat } from 'devextreme-vue/data-grid';

    config({ defaultCurrency: 'EUR' });
    </script>
    
##### React

    <!-- tab: App.tsx -->
    import config from 'devextreme/core/config';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import DataGrid, { Column, Format } from 'devextreme-react/data-grid';

    config({ defaultCurrency: 'EUR' });

    export default function App() {
        return (
            <DataGrid ... >
                <Column dataField="SaleAmount">
                    <Format
                        type="currency"
                        currency="USD"
                    />
                </Column>
            </DataGrid>
        );
    }

---

You can apply Intl option objects directly to the **format** property. Refer to [Intl Formats](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/15%20Intl%20Formats.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Intl_Formats') for details and additional examples.
