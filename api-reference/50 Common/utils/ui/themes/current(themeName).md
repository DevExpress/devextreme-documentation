---
id: ui.themes.current(themeName)
---
---
##### shortDescription
Switches the active theme.

##### param(themeName): String
The theme name.

---
**current(themeName)** switches between themes that you link in the `<head>` element. Add a `<link rel="dx-theme">` element for each theme:

    <!-- tab: index.html -->
    <link rel="dx-theme" data-theme="fluent-next.blue.dark" href="css/dx.fluent-next.blue.dark.css" data-active="true">
    <link rel="dx-theme" data-theme="fluent-next.blue.light" href="css/dx.fluent-next.blue.light.css" data-active="false">

Pass a `data-theme` attribute value to **current(themeName)** to switch the active theme. The **current(themeName)** method updates DevExtreme styles automatically. To ensure that specific components apply the new styles, call their **repaint()** methods (if available) in a [ready(callback)](/Documentation/ApiReference/Common/utils/ui/themes/#readycallback) callback function. If you use [container-specific theme modes](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes) with a Fluent Next theme, call [refreshMode()](/Documentation/ApiReference/Common/utils/ui/themes/#refreshMode) to apply updated modes to open overlays.

Callback functions passed to **ready(callback)** run only once, so register a callback before each **current(themeName)** call:

---
##### jQuery  

    <!-- tab: index.js -->
    function switchToLightTheme() {
        DevExpress.ui.themes.ready(() => {
            dataGridInstance.repaint();
            DevExpress.ui.themes.refreshMode();
        });
        DevExpress.ui.themes.current('fluent-next.blue.light');
    }

##### Angular

    <!-- tab: app.component.ts -->
    import themes from "devextreme/ui/themes";

    // ...
    export class AppComponent {
        switchToLightTheme() {
            themes.ready(() => {
                dataGridInstance.repaint();
                themes.refreshMode();
            });
            themes.current('fluent-next.blue.light');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import themes from "devextreme/ui/themes";

    function switchToLightTheme() {
        themes.ready(() => {
            dataGridInstance.repaint();
            themes.refreshMode();
        });
        themes.current('fluent-next.blue.light');
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useCallback } from 'react';
    import themes from "devextreme/ui/themes";

    export default function App() {
        const switchToLightTheme = useCallback(() => {
            themes.ready(() => {
                dataGridInstance.repaint();
                themes.refreshMode();
            });
            themes.current('fluent-next.blue.light');
        }, []);

        // ...
    }

---

#####See Also#####

- [Predefined Themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/)
- [Fluent Next Theme Customization](/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/)