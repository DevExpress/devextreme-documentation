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

Pass a `data-theme` attribute value to **current(themeName)** to switch the active theme. This method updates DevExtreme styles automatically. To ensure that specific components apply the new styles, call their **repaint()** methods (if available) in a callback function passed to [ready(callback)](/api-reference/50%20Common/utils/ui/themes/ready(callback).md '/Documentation/ApiReference/Common/utils/ui/themes/#readycallback'). If you applied an [inverted dark/light mode to specific containers](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/15%20Theme%20Modes/05%20Container-Specific%20Theme%20Modes.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/#Theme_Modes/Container-Specific_Theme_Modes') while using a Fluent Next theme, call [refreshMode()](/api-reference/50%20Common/utils/ui/themes/refreshMode().md '/Documentation/ApiReference/Common/utils/ui/themes/#refreshMode') to apply updated modes to open overlays.

Callback functions passed to **ready(callback)** run only once, so call **ready(callback)** before each **current(themeName)** call:

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

- [Predefined Themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/')
- [Fluent Next Theme Customization](/concepts/60%20Themes%20and%20Styles/07%20Fluent%20Next%20Theme%20Customization/00%20Fluent%20Next%20Theme%20Customization.md '/Documentation/Guide/Themes_and_Styles/Fluent_Next_Theme_Customization/')