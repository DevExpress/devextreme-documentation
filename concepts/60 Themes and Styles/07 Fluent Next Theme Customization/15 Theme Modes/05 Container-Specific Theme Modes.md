Fluent Next themes allow you to define theme modes for specific containers in your application. Container-specific modes allow you to use dark mode styles in a lght mode application and vice versa. These modes apply to DevExtreme components and HTML elements.

[note]

- SVG components do not support container-specific theme modes and always use the application's theme mode (from the active Fluent Next stylesheet).
- You do not need to import both light and dark stylesheets to use container-specific theme modes. All Fluent Next stylesheets ship with both light and dark CSS rules.

[/note]

Use one of the following classes to specify a theme mode for a container:

- `dx-theme-mode-light`: Applies **light** mode styles to a container and its children
- `dx-theme-mode-dark`: Applies **dark** mode styles to a container and its children
- `dx-theme-mode-inverted`: Applies the opposite theme mode relative to a container's parent

You can change container theme modes at runtime. To ensure DevExtreme component styles are updated, call [refreshMode()]() after you update a container's theme mode:

---

##### jQuery  

    <!-- tab: index.html -->
    <div class="dx-theme-mode-light">
        <div id="button-container"></div>
    </div>

    <!-- tab: index.js -->
    $('#button-container').dxButton({
        text: 'Change Theme Mode',
        onClick() {
            $('.dx-theme-mode-light')
                .removeClass('dx-theme-mode-light')
                .addClass('dx-theme-mode-dark');
            DevExpress.ui.themes.refreshMode();
        },
    })

##### Angular

    <!-- tab: app.component.ts -->
    import refreshMode from "devextreme/ui/themes";
    import { DxButtonModule } from "devextreme-angular";
    
    @Component({
        template: `
            <div [class]="containerClass">
                <dx-button
                    text="Change Theme Mode"
                    (onClick)="changeThemeMode($event)"
                ></dx-button>
            </div>
        `,
    })
    export class AppComponent {
        containerClass: string = 'dx-theme-mode-light';

        changeThemeMode() {
            this.containerClass = 'dx-theme-mode-dark';
            refreshTheme();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div :class="containerClass">
            <DxButton
                text="Change Theme Mode"
                @click="changeThemeMode"
            />
        </div>
    </template>

    <script setup lang="ts">
    import refreshMode from "devextreme/ui/themes";
    import { DxButton } from 'devextreme-vue/button';

    const containerClass: string = 'dx-theme-mode-light';

    function changeThemeMode() {
        containerClass = 'dx-theme-mode-dark';
        refreshTheme();
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import Button from 'devextreme-react/button';
    import refreshMode from 'devextreme/ui/themes';

    export default function App() {
        const [containerClass, setContainerClass] = useState('dx-theme-mode-light');

        const changeThemeMode = useCallback(() => {
            setContainerClass('dx-theme-mode-dark');
            refreshMode();
        }, []);

        return (
            <div class={containerClass}>
                <Button
                    text="Change Theme Mode"
                    onClick={changeThemeMode}
                />
            </div>
        );
    }

---

`dx-theme-mode-inverted` supports nesting. The following code snippet demonstrates three nesting levels:

    <!-- tab: HTML -->
    <body class="dx-viewport dx-theme-mode-dark">
        <!-- Dark mode within body -->

        <div class="one dx-theme-mode-inverted">
            <!-- Light mode within .one -->
            <div class="two dx-theme-mode-inverted">
                <!-- Dark mode within .two -->
                <div class="three dx-theme-mode-inverted">
                    <!-- Light mode within .three -->
                </div>
            </div>
        </div>
    </body>

You can call the [mode(element)]() method to get the calculated theme mode of an element (*"light"* or *"dark"*). The following code snippet returns *"light"* for the `.three` element from the previous sample:

---

##### jQuery  

    <!-- tab: index.js -->
    const calculatedMode = DevExpress.ui.themes.mode('.three');

##### Angular

    <!-- tab: app.component.ts -->
    import mode from "devextreme/ui/themes";
    
    // ...
    export class AppComponent {
        calculatedMode: string = mode('.three');
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import mode from "devextreme/ui/themes";

    const calculatedMode: string = mode('.three');
    </script>

##### React

    <!-- tab: App.tsx -->
    import mode from "devextreme/ui/themes";

    const calculatedMode: string = mode('.three');

---
