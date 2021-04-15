---
id: dxGantt.Options.validation
type: Object
---
---
##### shortDescription
Configures validation properties.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            validation: {
                autoUpdateParentTasks: true,
                validateDependencies: true
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-validation
            [autoUpdateParentTasks]="true" 
            [validateDependencies]="true">
        </dxo-validation>
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        // ...      
    }    

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxGanttModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            BrowserModule,
            DxGanttModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxValidation
                :auto-update-parent-tasks="true"
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
                    autoUpdateParentTasks={true}
                    validateDependencies={true} />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Validation(e => {
            e.AutoUpdateParentTasks(true)
            e.ValidateDependencies(true)
        })
        // ...
    )

---
