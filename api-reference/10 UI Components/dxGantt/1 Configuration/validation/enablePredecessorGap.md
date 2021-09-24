---
id: dxGantt.Options.validation.enablePredecessorGap
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether users can move or resize a predecessor to change a gap before a successor according to the [dependency rules](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/validation/validateDependencies.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/validation/#validateDependencies').

---

The **Gantt** component allows users to change the gap between tasks only if they move/resize a successor task. Note that users can use only a successor to create the gap between tasks.

The following image illustrates that the Gantt does not resize the gap between tasks when users move the predecessor:

![DevExtreme Gantt - Move Successor to Change Gap](/images/Gantt/move-only-successor.gif) 

The **enablePredecessorGap** option allows users to increase/decrease the gap between the tasks with a predecessor. The **Gantt** component validates these changes and shifts the successor task to comply with the dependency rules if they are violated.

![DevExtreme Gantt - Move Successor to Change Gap](/images/Gantt/enable-predecessor-gap.gif)

[note]The **enablePredecessorGap** option is in effect if the [validateDependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/validation/validateDependencies.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/validation/#validateDependencies') option is set to **true**.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            validation: {
                validateDependencies: true,
                enablePredecessorGap: true
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-validation
            [enablePredecessorGap]="true" 
            [validateDependencies]="true">
        </dxo-validation>
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxValidation
                :enable-predecessor-gap="true"
                :validate-dependencies="true" 
             />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxValidation, 
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxValidation, 
                // ... 
            }
        };
    </script>
	
##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        Validation, 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <Validation
                    enablePredecessorGap={true}
                    validateDependencies={true} />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Validation(e => {
            e.EnablePredecessorGap(true)
            e.ValidateDependencies(true)
        })
        // ...
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Validation(e => {
            e.EnablePredecessorGap(true)
            e.ValidateDependencies(true)
        })
        // ...
    )

---
