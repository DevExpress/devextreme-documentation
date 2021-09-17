---
id: dxFilterBuilderField.format
type: format
default: ''
---
---
##### shortDescription
Formats a value before it is displayed.

---
See the [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') section for details on accepted values.

This property also controls the user input in cells that use the [DateBox](/api-reference/10%20UI%20Components/dxDateBox '/Documentation/ApiReference/UI_Components/dxDateBox/') UI component for editing. For cells that use other UI components, you can specify the [editorOptions](/api-reference/_hidden/dxFilterBuilderField/editorOptions.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#editorOptions').**format** property.

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
        <dxi-field
            dataField="SaleAmount"
            format="currency"
            [editorOptions]="saleAmountEditorOptions">
        </dxi-field>
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
    import 'devextreme/dist/css/dx.light.css';

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
    import 'devextreme/dist/css/dx.light.css';

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
- [customizeText]({currentpath}/#customizeText)
- [Value Formatting](/Documentation/Guide/Common/Value_Formatting/)