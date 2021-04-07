---
id: dxGantt.Options.editing
type: Object
---
---
##### shortDescription
Configures edit properties.

---

The UI component allows users to add, modify and delete tasks, resources and dependencies. Set the [enabled](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/editing/enabled.md '{basewidgetpath}/Configuration/editing/#enabled') property to **true** to enable edit functionality. 

[note] Make sure that your data sources ([tasks](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/tasks '{basewidgetpath}/Configuration/#tasks'), [resources](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/resources '{basewidgetpath}/Configuration/#resources') and [dependencies](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/dependencies '{basewidgetpath}/Configuration/#dependencies')) support edit actions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gantt/Overview/"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            editing: {
                enabled: true,
                allowDependencyAdding: false, 
                allowDependencyDeleting: false, 
                allowResourceAdding: false, 
                allowResourceDeleting: false, 
                allowTaskAdding: false, 
                allowTaskDeleting: false, 
                allowTaskResourceUpdating: false, 
                allowTaskUpdating: false
            }
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt ... >
        <dxo-editing
            [enabled]="true" 
            [allowDependencyAdding]="false" 
            [allowDependencyDeleting]="false" 
            [allowResourceAdding]="false"
            [allowResourceDeleting]="false"
            [allowTaskAdding]="false"
            [allowTaskDeleting]="false"
            [allowTaskResourceUpdating]="false"
            [allowTaskUpdating]="false">
        </dxo-editing>
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
            <DxEditing
                :enabled="true"
                :allow-dependency-adding="false" 
                :allow-dependency-deleting="false" 
                :allow-resource-adding="false"
                :allow-resource-deleting="false"
                :allow-task-adding="false"
                :allow-task-deleting="false"
                :allow-task-resource-updating="false"
                :allow-task-updating="false"
             />
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt, 
            DxEditing, 
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt, 
                DxEditing, 
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
        Editing, 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt ... >
                <Editing 
                    enabled={true}
                    allowDependencyAdding={false}
                    allowDependencyDeleting={false}
                    allowResourceAdding={false}
                    allowResourceDeleting={false}
                    allowTaskAdding={false}
                    allowTaskDeleting={false}
                    allowTaskResourceUpdating={false}
                    allowTaskUpdating={false} />
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .Editing(e => {
            e.Enabled(true)
            e.AllowDependencyAdding(false)
            e.AllowDependencyDeleting(false)
            e.AllowResourceAdding(false)
            e.AllowResourceDeleting(false)
            e.AllowTaskAdding(false)
            e.AllowTaskDeleting(false)
            e.AllowTaskResourceUpdating(false)
            e.AllowTaskUpdating(false)
        })
        // ...
    )

---

#####See Also#####
- [Gantt Elements](/concepts/05%20UI%20Components/Gantt/10%20Gantt%20Elements/00%20Gantt%20Elements.md '/Documentation/Guide/UI_Components/Gantt/Gantt_Elements/')