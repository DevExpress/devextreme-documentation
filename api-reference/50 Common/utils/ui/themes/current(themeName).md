---
id: ui.themes.current(themeName)
---
---
##### shortDescription
Switches the active theme.

##### param(themeName): String
The theme name.

---
To switch the active theme in your application using **current(themeName)**, add stylesheets to switch between in your application's `<head>` element as follows:

    <!-- tab: index.html -->
    <link rel="dx-theme" data-theme="fluent-next.blue.dark" href="css/dx.fluent-next.blue.dark.css" data-active="true">
    <link rel="dx-theme" data-theme="fluent-next.blue.light" href="css/dx.fluent-next.blue.light.css" data-active="false">

Pass a `data-theme` attribute value to **current(themeName)** to switch the active theme. The **current(themeName)** method updates DevExtreme styles automatically. To ensure specific component styles update, call the component's **repaint()** method (if available) in the [ready()](/Documentation/ApiReference/Common/utils/ui/themes/#readycallback) method's **callback** function. If you use [container-specific theme modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes) with a Fluent Next theme, call [refreshMode()](/Documentation/ApiReference/Common/utils/ui/themes/#refreshMode) to apply updated modes to open overlays.

---
##### jQuery  

    <!-- tab: index.js -->
    DevExpress.ui.themes.ready(() => {
        dataGridInstance.repaint();
        DevExpress.ui.themes.refreshMode();
    });

    function switchToLightTheme() {
        DevExpress.ui.themes.current('fluent-next.blue.light');
    }

##### Angular

    <!-- tab: app.component.ts -->
    import { AfterViewInit } from "@angular/core";
    import { current, ready, refreshMode } from "devextreme/ui/themes";
    
    // ...
    export class AppComponent implements AfterViewInit {
        ngAfterViewInit() {
            ready(() => {
                dataGridInstance.repaint();
                refreshMode();
            });
        }

        switchToLightTheme() {
            current('fluent-next.blue.light');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { onMounted } from "vue";
    import { current, ready, refreshMode } from "devextreme/ui/themes";

    onMounted(() => {
        ready(() => {
            dataGridInstance.repaint();
            refreshMode();
        });
    });

    function switchToLightTheme() {
        current('fluent-next.blue.light');
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useEffect } from 'react';
    import { current, ready, refreshMode } from "devextreme/ui/themes";

    export default function App() {
        useEffect(() => {
            ready(() => {
                dataGridInstance.repaint();
                refreshMode();
            });
        }, []);
        
        const switchToLightTheme = useEffect(() => {
            current('fluent-next.blue.light');
        }, []);
    }

---

#####See Also#####
- [Predefined Themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/)
- [Fluent Next Theme Customization](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/)