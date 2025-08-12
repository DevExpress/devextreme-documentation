
---

##### jQuery
[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the code below to create a Tooltip. To display the component, specify a [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) and define the [showEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/) or [visible](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#visible) property.

    <!-- tab: index.js -->
    $(function() {
        $('#tooltip').dxTooltip({
            target: '#target',
            showEvent: 'mouseenter',
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <!-- ... -->
            <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css">
            <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script type="text/javascript" src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="tooltip"></div>
        </body>
    </html>

##### Angular

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the code below to create a Tooltip. To display the component, specify a [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) and define the [showEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/) or [visible](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#visible) property.

    <!-- tab: app.component.html -->
    <dx-tooltip
      target="#target"
      showEvent="mouseenter"
    ></dx-tooltip>

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxTooltipModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the code below to create a Tooltip. To display the component, specify a [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) and define the [showEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/) or [visible](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#visible) property.

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { DxTooltip } from 'devextreme-vue/tooltip';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    </script>
    <template>
        <DxTooltip
            target="#target"
            show-event="mouseenter"
        />
    </template>

##### React

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the code below to create a Tooltip. To display the component, specify a [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) and define the [showEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/) or [visible](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#visible) property.

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Tooltip } from 'devextreme-react/tooltip';

    function App(): JSX.Element {
        return (
            <Tooltip
                target="#target"
                showEvent="mouseenter"
            />
        );
    }

---

This example creates three [Button](/) components and assigns Tooltips to them. Button ID attributes are specified as Tooltip targets. Additionally, this example configures the [hideEvent](/) property for all Tooltips:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $('#like').dxButton({
            icon: 'like',
        });

        $('#like-tooltip').dxTooltip({
            target: '#like',
            showEvent: 'mouseenter',
            hideEvent: 'mouseleave',
        });

        $('#trash').dxButton({
            icon: 'trash',
        });

        $('#trash-tooltip').dxTooltip({
            target: '#trash',
            showEvent: 'mouseenter',
            hideEvent: 'mouseleave',
        });

        $('#info').dxButton({
            icon: 'info',
        });

        $('#info-tooltip').dxTooltip({
            target: '#info',
            showEvent: 'mouseenter',
            hideEvent: 'mouseleave',
        });
    });

    <!-- tab: index.html -->
    <body class="dx-viewport">
        <div class="main-container">
            <div class="buttons">
                <div id="like"></div>
                <div id="trash"></div>
                <div id="info"></div>
            </div>
            <div class="tooltips">
                <div id="like-tooltip"></div>
                <div id="trash-tooltip"></div>
                <div id="info-tooltip"></div>
            </div>
        </div>
    </body>

##### Angular

    <!-- tab: app.component.html -->
    <div class="dx-viewport">
        <div class="buttons">
            <dx-button id="like" icon="like"></dx-button>
            <dx-button id="trash" icon="trash"></dx-button>
            <dx-button id="info" icon="info"></dx-button>
        </div>
        <div class="tooltips">
            <dx-tooltip
                target="#like"
                showEvent="mouseenter"
                hideEvent="mouseleave"
            ></dx-tooltip>
            <dx-tooltip
                target="#trash"
                showEvent="mouseenter"
                hideEvent="mouseleave"
            ></dx-tooltip>
            <dx-tooltip
                target="#info"
                showEvent="mouseenter"
                hideEvent="mouseleave"
            ></dx-tooltip>
        </div>
    </div>

    <!-- tab: app.module.ts -->
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { DxButtonModule } from 'devextreme-angular/ui/button';
    import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            DxButtonModule,
            DxTooltipModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { DxButton } from 'devextreme-vue/button';
    import { DxTooltip } from 'devextreme-vue/tooltip';

    </script>
    <template>
        <div class="dx-viewport">
            <div class="buttons">
                <DxButton
                    id="like"
                    icon="like"
                />
                <DxButton
                    id="trash"
                    icon="trash"
                />
                <DxButton
                    id="info"
                    icon="info"
                />
            </div>
            <div class="tooltips">
                <DxTooltip
                    target="#like"
                    show-event="mouseenter"
                    hide-event="mouseleave"
                />
                <DxTooltip
                    target="#trash"
                    show-event="mouseenter"
                    hide-event="mouseleave"
                />
                <DxTooltip
                    target="#info"
                    show-event="mouseenter"
                    hide-event="mouseleave"
                />
            </div>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    import { Button } from 'devextreme-react/button';
    import { Tooltip } from 'devextreme-react/tooltip';

    function App(): JSX.Element {
        return (
            <div className="dx-viewport">
                <div className="buttons">
                    <Button
                        id="like"
                        icon="like"
                    />
                    <Button
                        id="trash"
                        icon="trash"
                    />
                    <Button
                        id="info"
                        icon="info"
                    />
                </div>
                <div className="tooltips">
                    <Tooltip
                        target="#like"
                        showEvent="mouseenter"
                        hideEvent="mouseleave"
                    />
                    <Tooltip
                        target="#trash"
                        showEvent="mouseenter"
                        hideEvent="mouseleave"
                    />
                    <Tooltip
                        target="#info"
                        showEvent="mouseenter"
                        hideEvent="mouseleave"
                    />
                </div>
            </div>
        );
    }

---
