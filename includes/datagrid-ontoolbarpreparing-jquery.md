The following code snippet adds a refresh button to the toolbar:

---

##### jQuery
    
    $("#container").dx{WidgetName}({
        onToolbarPreparing(e) {
            const {widgetName} = e.component;
            e.toolbarOptions.items.unshift({
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "refresh",
                    onClick: function() {
                        {widgetName}.refresh();
                    }
                }
            });
        }
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        (onToolbarPreparing)="handleToolbarPreparing"
    ></dx-{widget-name}> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

    @Component({ 
        imports: [Dx{WidgetName}Module],
        // ...
    })
    export class AppComponent { 
        handleToolbarPreparing(e: Dx{WidgetName}Types.ToolbarPreparingEvent) {
            const {widgetName} = e.component;
            e.toolbarOptions?.items?.unshift({
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "refresh",
                    onClick: function() {
                        {widgetName}.refresh();
                    }
                }
            });
        }
    }

##### Vue 
  
    <!-- tab: App.vue -->
    <template> 
        <Dx{WidgetName}
            @toolbar-preparing="handleToolbarPreparing"
        />            
    </template> 
  
    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    function handleToolbarPreparing(e: Dx{WidgetName}Types.ToolbarPreparingEvent) {
        const {widgetName} = e.component;
        e.toolbarOptions?.items?.unshift({
            location: "after",
            widget: "dxButton",
            options: {
                icon: "refresh",
                onClick: function() {
                    {widgetName}.refresh();
                }
            }
        });
    }
    </script>

##### React 

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';  
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}'; 

    export default function App() {
        const handleToolbarPreparing = useCallback((e: {WidgetName}Types.ToolbarPreparingEvent) => {
            const {widgetName} = e.component;
            e.toolbarOptions?.items?.unshift({
                location: "after",
                widget: "dxButton",
                options: {
                    icon: "refresh",
                    onClick: function() {
                        {widgetName}.refresh();
                    }
                }
            });
        }, [])

        return ( 
            <{WidgetName}
                onToolbarPreparing={handleToolbarPreparing}
            />
        );
    }

---

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-datagrid-custom-column-chooser"
}

You can use **onToolbarPreparing** to modify the keyboard navigation behavior of the built-in {WidgetName} toolbar. The following code snippet disables [allowKeyboardNavigation](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation) to allow users to navigate between toolbar items using the **Tab** key:

---

##### jQuery
    
    $("#container").dx{WidgetName}({
        onToolbarPreparing(e) {
            e.toolbarOptions.allowKeyboardNavigation = false;
        }
    });

##### Angular 

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        (onToolbarPreparing)="handleToolbarPreparing"
    ></dx-{widget-name}> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

    @Component({ 
        imports: [Dx{WidgetName}Module],
        // ...
    })
    export class AppComponent { 
        handleToolbarPreparing(e: Dx{WidgetName}Types.ToolbarPreparingEvent) {
            e.toolbarOptions.allowKeyboardNavigation = false;
        }
    }

##### Vue 
  
    <!-- tab: App.vue -->
    <template> 
        <Dx{WidgetName}
            @toolbar-preparing="handleToolbarPreparing"
        />            
    </template> 
  
    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    function handleToolbarPreparing(e: Dx{WidgetName}Types.ToolbarPreparingEvent) {
        e.toolbarOptions.allowKeyboardNavigation = false;
    }
    </script>

##### React 

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';  
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}'; 

    export default function App() {
        const handleToolbarPreparing = useCallback((e: {WidgetName}Types.ToolbarPreparingEvent) => {
            e.toolbarOptions.allowKeyboardNavigation = false;
        }, [])

        return ( 
            <{WidgetName}
                onToolbarPreparing={handleToolbarPreparing}
            />
        );
    }

---
