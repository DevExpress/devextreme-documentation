---
id: GridBase.Options.onAdaptiveDetailRowPreparing
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an adaptive detail row is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.formOptions): Object
The properties of the [Form](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') UI component.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
Adaptive detail rows display information from columns that were hidden when the UI component adapted to the screen or container size. Each adaptive detail row contains the [Form](/api-reference/10%20UI%20Components/dxForm '/Documentation/ApiReference/UI_Components/dxForm/') UI component that you can customize within the **onAdaptiveDetailRowPreparing** function using the **formOptions** object. Refer to the [Form Configuration](/api-reference/10%20UI%20Components/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Components/dxForm/Configuration/') section for details on properties of the Form UI component.

[note]

The following Form properties cannot be specified using **formOptions**:

- [template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template')        
- [editorType](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/editorType.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#editorType')        
- any [event](/api-reference/10%20UI%20Components/dxForm/4%20Events '/Documentation/ApiReference/UI_Components/dxForm/Events/') handler ([properties](/api-reference/10%20UI%20Components/Widget/1%20Configuration/onContentReady.md '/Documentation/ApiReference/UI_Components/dxForm/Configuration/#onContentReady') whose name starts with *"on..."*)

[/note]

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onAdaptiveDetailRowPreparing: function(e) {
                e.formOptions.colCount = 2;
                e.formOptions.colCountByScreen = {
                    xs: 2
                }
                e.formOptions.labelLocation = 'left';
            }
        })
    })

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing(e) {
            e.formOptions.colCount = 2;
            e.formOptions.colCountByScreen = {
                xs: 2
            }
            e.formOptions.labelLocation = 'left';
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName}
            @adaptive-detail-row-preparing="onAdaptiveDetailRowPreparing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-vue/{widget-name}';
  
    export default {
        components: {
            Dx{WidgetName}
        },
        methods: {
            onAdaptiveDetailRowPreparing(e) {
                e.formOptions.colCount = 2;
                e.formOptions.colCountByScreen = {
                    xs: 2
                }
                e.formOptions.labelLocation = 'left';
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName}
            @adaptive-detail-row-preparing="onAdaptiveDetailRowPreparing"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-vue/{widget-name}';
    
    const onAdaptiveDetailRowPreparing = (e) => {
        e.formOptions.colCount = 2;
        e.formOptions.colCountByScreen = {
            xs: 2
        }
        e.formOptions.labelLocation = 'left';
    }
    </script>

##### React

    <!-- tab: App.js -->
    import { useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() {
        const onAdaptiveDetailRowPreparing = useCallback((e) => {
            e.formOptions.colCount = 2;
            e.formOptions.colCountByScreen = {
                xs: 2
            }
            e.formOptions.labelLocation = 'left';
        }, []);
 
        return (
            <{WidgetName}
                onAdaptiveDetailRowPreparing={onAdaptiveDetailRowPreparing}
            />
        );
    }

---

#####See Also#####
- [columnHidingEnabled](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/columnHidingEnabled.md '{basewidgetpath}/Configuration/#columnHidingEnabled')
- **columns[]**.[hidingPriority](/api-reference/_hidden/GridBaseColumn/hidingPriority.md '{basewidgetpath}/Configuration/columns/#hidingPriority')
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability '/Documentation/Guide/UI_Components/{WidgetName}/Columns/Adaptability/')
- [Customize Adaptive Detail Row](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability/15%20Customize%20Adaptive%20Detail%20Row.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/#Customize_Adaptive_Detail_Row')