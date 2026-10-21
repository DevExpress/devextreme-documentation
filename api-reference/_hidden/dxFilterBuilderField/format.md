---
id: dxFilterBuilderField.format
type: Format
default: ''
---
---
##### shortDescription
Formats a value before it is displayed.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for information on accepted values.

If you do not specify this property, the component uses the global [dateFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateFormat), [dateTimeFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormat), or [numberFormat](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#numberFormat) that matches the [dataType](/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataType) value. If you do not specify the matching global format either, the component formats dates based on the current application [locale](/Documentation/ApiReference/Common/utils/localization/#locale) and displays unformatted numbers. Date formats that you specify in **format** also use this locale. Number formats use the **numberFormat** locale if this global format specifies a locale. To specify another locale, define the [locale](/Documentation/ApiReference/Common/Object_Structures/format/#locale) property in **format**. To change a predefined date format's locale in all components, override this format in [dateTimeFormatPresets](/Documentation/ApiReference/Common/Object_Structures/GlobalConfig/#dateTimeFormatPresets).

This property also controls user input in cells that use the [DateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/') UI component for editing. For cells that use other UI components, you can specify the [editorOptions](/api-reference/_hidden/dxFilterBuilderField/editorOptions.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorOptions') **format** property.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#filterBuilderContainer").dxFilterBuilder({
            fields: [{
                dataField: "SaleAmount",
                format: "currency",
                editorOptions: {
                    format: "$ #,##0.##"
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder ... >
        <dxi-filter-builder-field
            dataField="SaleAmount"
            format="currency"
            [editorOptions]="saleAmountEditorOptions">
        </dxi-filter-builder-field>
    </dx-filter-builder>

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        saleAmountEditorOptions = {
            format: "$ #,##0.##"
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder ... >
            <DxField
                data-field="SaleAmount"
                format="currency"
                :editor-options="saleAmountEditorOptions"
            />
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import DxFilterBuilder, {
        DxField
    } from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder,
            DxField
        },
        data() {
            return {
                saleAmountEditorOptions: {
                    format: "$ #,##0.##"
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import FilterBuilder, {
        Field
    } from 'devextreme-react/filter-builder';

    const saleAmountEditorOptions = {
        format: "$ #,##0.##"
    };

    export default function App() {
        return (
            <FilterBuilder>
                <Field
                    dataField="SaleAmount"
                    format="currency"
                    editorOptions={saleAmountEditorOptions}
                />
            </FilterBuilder>
        );
    }

---

#####See Also#####
- [customizeText](/api-reference/_hidden/dxFilterBuilderField/customizeText.md '{currentpath}/#customizeText')
- [Value Formatting](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/00%20Value%20Formatting.md '/Documentation/Guide/Common/Localization_and_Globalization/Value_Formatting/')

