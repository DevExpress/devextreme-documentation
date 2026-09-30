Fluent Next themes allow you to define theme modes for specific containers in your application. Container-specific modes allow you to use dark mode styles in a light mode application and vice versa. These modes apply to HTML elements and DevExtreme components (both HTML- and SVG-based).

Use one of the following classes to specify a theme mode for a container:

- `dx-theme-mode-light`: Applies **light** mode styles to a container and its children
- `dx-theme-mode-dark`: Applies **dark** mode styles to a container and its children
- `dx-theme-mode-inverted`: Applies the opposite theme mode relative to a container's nearest enclosing mode

Fluent Next stylesheets store current modes in the `--dx-theme-mode` CSS variable. Each container that uses theme modes defines this variable, including the document root. Use the [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@container) CSS at-rule to add mode-specific styles to your application:

    <!-- tab: CSS -->
    @container style(--dx-theme-mode: dark) {
        .my-panel {
            background: #1d1d1d;
        }
    }

Mode-specific rules apply to descendants of a theme mode container, but not to the container itself (style queries evaluate an element's ancestors).

Component overlays (for instance, popups and drop-down lists) open in the theme mode of the component's container, even though DevExtreme renders overlays at the viewport level.

You can change container theme modes at runtime. Styles in custom elements and DevExtreme components update immediately. If an overlay is open when you change the mode, call [refreshMode()](/Documentation/ApiReference/Common/Utils/ui/themes/#refreshMode) to update the overlay's styles:

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
            // Updates open overlays
            DevExpress.ui.themes.refreshMode();
        },
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";
    import { refreshMode } from "devextreme/ui/themes";
    import { DxButtonModule } from "devextreme-angular";
    
    @Component({
        imports: [DxButtonModule],
        template: `
            <div [class]="containerClass">
                <dx-button
                    text="Change Theme Mode"
                    (onClick)="changeThemeMode()"
                ></dx-button>
            </div>
        `,
    })
    export class AppComponent {
        containerClass: string = 'dx-theme-mode-light';

        changeThemeMode() {
            this.containerClass = 'dx-theme-mode-dark';
            // Updates open overlays
            refreshMode();
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
    import { ref } from "vue";
    import { refreshMode } from "devextreme/ui/themes";
    import { DxButton } from 'devextreme-vue/button';

    const containerClass = ref('dx-theme-mode-light');

    function changeThemeMode() {
        containerClass.value = 'dx-theme-mode-dark';
        // Updates open overlays
        refreshMode();
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback, useState } from 'react';
    import Button from 'devextreme-react/button';
    import { refreshMode } from 'devextreme/ui/themes';

    export default function App() {
        const [containerClass, setContainerClass] = useState('dx-theme-mode-light');

        const changeThemeMode = useCallback(() => {
            setContainerClass('dx-theme-mode-dark');
            // Updates open overlays
            refreshMode();
        }, []);

        return (
            <div className={containerClass}>
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
    <!DOCTYPE html>
    <html class="dx-theme-mode-dark">
        <!-- Dark mode for the entire page -->
        <head><!-- ... --></head>
        <body class="dx-viewport">
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
    </html>

Call the [mode(element)](/Documentation/ApiReference/Common/Utils/ui/themes/#modeelement) method to get the calculated theme mode of an element (*"light"* or *"dark"*) in JavaScript. The following code snippet returns *"light"* for the `.three` element from the previous sample:

---

##### jQuery  

    <!-- tab: index.js -->
    const calculatedMode = DevExpress.ui.themes.mode($('.three'));

##### Angular

    <!-- tab: app.component.ts -->
    import { AfterViewInit } from "@angular/core";
    import { mode } from "devextreme/ui/themes";
    
    // ...
    export class AppComponent implements AfterViewInit {
        calculatedMode = '';

        ngAfterViewInit() {
            this.calculatedMode = mode(document.querySelector('.three')!);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { mode } from "devextreme/ui/themes";

    const calculatedMode = ref('');

    onMounted(() => {
        calculatedMode.value = mode(document.querySelector('.three')!);
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import { useEffect, useState } from 'react';
    import { mode } from "devextreme/ui/themes";

    export default function App() {
        const [calculatedMode, setCalculatedMode] = useState('');

        useEffect(() => {
            setCalculatedMode(mode(document.querySelector('.three')!));
        }, []);
        // ...
    }

---

[note] You can call **mode(element)** for any element, inside or outside a theme mode container. If no container declares a mode, the method reads the mode from the active Fluent Next stylesheet and always returns *"light"* or *"dark"*.
