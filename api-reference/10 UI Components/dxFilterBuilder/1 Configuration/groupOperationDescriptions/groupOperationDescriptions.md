---
id: dxFilterBuilder.Options.groupOperationDescriptions
type: Object
---
---
##### shortDescription
Specifies group operation descriptions.

---

The following code sample illustrates how to set this property:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            groupOperationDescriptions: {
                and: "Plus"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-group-operation-descriptions
            and="Plus">
        </dxo-group-operation-descriptions>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ... >
            <DxGroupOperationDescriptions
                and="Plus"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxGroupOperationDescriptions
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxGroupOperationDescriptions
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        GroupOperationDescriptions
    } from 'devextreme-react/{widget-name}';

    export default function App() {
        return (
            <{WidgetName} ... >
                <GroupOperationDescriptions
                    and="Plus"
                />
            </{WidgetName}>
        );
    }

---

#####See Also#####
- [groupOperations](/api-reference/10%20UI%20Components/dxFilterBuilder/1%20Configuration/groupOperations.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#groupOperations')