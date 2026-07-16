
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#{widgetName}").dx{WidgetName}({
            value: 40,
            valueIndicator: {
                type: "${{indicatorTypeCamelCase}}",
            },
            subvalueIndicator: {
                type: "${{indicatorTypeCamelCase}}",
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} [value]="40">
        <dxo-{widget-name}-value-indicator
            type="${{indicatorTypeCamelCase}}"
        ></dxo-{widget-name}-value-indicator>
        <dxo-{widget-name}-subvalue-indicator
            type="${{indicatorTypeCamelCase}}"
        ></dxo-{widget-name}-subvalue-indicator>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} :value="40">
            <DxValueIndicator
                type="${{indicatorTypeCamelCase}}"
            />
            <DxSubvalueIndicator
                type="${{indicatorTypeCamelCase}}"
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, DxValueIndicator, DxSubvalueIndicator } from 'devextreme-vue/{widget-name}';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, ValueIndicator, SubvalueIndicator } from 'devextreme-react/{widget-name}';

    function App(): JSX.Element {
        return (
            <{WidgetName} value={40}>
                <ValueIndicator
                    type="${{indicatorTypeCamelCase}}"
                />
                <SubvalueIndicator
                    type="${{indicatorTypeCamelCase}}"
                />
            </{WidgetName}>
        );
    }

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().{WidgetName}()
        .ID("{widgetName}")
        .Value(40)
        .ValueIndicator(vi => vi.Type(GaugeIndicatorType.${{indicatorTypePascalCase}}))
        .SubvalueIndicator(svi => svi.Type(GaugeIndicatorType.${{indicatorTypePascalCase}}))
    )


---
