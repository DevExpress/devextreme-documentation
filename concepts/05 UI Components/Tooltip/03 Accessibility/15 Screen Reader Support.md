The Tooltip component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards.

The default ARIA role for Tooltip is <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role" target="_blank">tooltip</a>. If you put focusable content inside Tooltip, you may want to change the role to <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role" target="_blank">dialog</a>. To implement this functionality, use the [onShowing](/api-reference/10%20UI%20Components/dxTooltip/1%20Configuration/onShowing.md '/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#onShowing') event handler:

---
##### jQuery

    <!-- tab: index.js -->
    const tooltip = $('#tooltip').dxTooltip({
        // ...
        onShowing: function (e) {
            var $overlayContent = $(e.component.content()).parent()
            $overlayContent.attr("role", "dialog");
        },
    }).dxTooltip('instance');

##### Angular

    <!-- tab: app.component.html -->
    <dx-tooltip ...
        (onShowing)="onShowingHandler($event)"
    >
    </dx-tooltip>

    <!-- tab: app.component.ts -->
    import { Component } from "@angular/core";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        onShowingHandler(e) {
            const overlayContent = e.component.content().parentElement;
            overlayContent.setAttribute("role", "dialog");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxTooltip ...
        @showing="onShowingHandler"
    />
    </template>

    <script>
    import { DxTooltip } from 'devextreme-vue/tooltip';

    export default {
        components: {
            DxTooltip
        },
        methods: {
            onShowingHandler(e) {
                const overlayContent = e.component.content().parentElement;
                overlayContent.setAttribute("role", "dialog");
            },
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Tooltip from 'devextreme-react/tooltip';

    const onShowingHandler = (e) => {
        const overlayContent = e.component.content().parentElement;
        overlayContent.setAttribute("role", "dialog");
    };

    const App = () => {
        return (
            <Tooltip ...
                onShowing={onShowingHandler}
            />
        );
    };

    export default App;

---

Accessibility readers do not notify users when the Tooltip is opened since it is not a focusable element. To receive reader notifications for an open dialog, programmatically focus an element in Tooltip after its activation:

---
##### jQuery

    <!-- tab: index.js -->
    $('#tooltip').dxTooltip({
        // ...
        contentTemplate: () => '<div id="content" tabIndex="1">Content template</div>',
        onShown: function (e) {
            $('#content').focus();
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tooltip ...
        (onShown)="onShownHandler($event)"
    >
        <div #contentElement id="content" tabindex="1">
            Content template
        </div>
    </dx-tooltip>

    <!-- tab: app.component.ts -->
    import { Component, ElementRef, ViewChild } from "@angular/core";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        @ViewChild('contentElement') contentElement!: ElementRef;

        onShownHandler(e) {
            this.contentElement.nativeElement.focus();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxTooltip ...
        @shown="onShownHandler"
    >
        <div id="content" tabindex="1" ref="contentRef">
            Content template
        </div>
    </DxTooltip>
    </template>

    <script>
    import { DxTooltip } from 'devextreme-vue/tooltip';

    export default {
        components: {
            DxTooltip
        },
        methods: {
            onShownHandler() {
                if (this.contentRef) {
                    this.contentRef.focus();
                }
            },
        },
        mounted() {
            this.contentRef = this.$refs.contentRef;
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useRef } from 'react';
    import Tooltip from 'devextreme-react/tooltip';

    const App = () => {
        const contentRef = useRef(null);

        const onShownHandler = () => {
            if (contentRef.current) {
                contentRef.current.focus();
            }
        };

        return (
            <Tooltip ...
                onShown={onShownHandler}
            >
                <div id="content" tabIndex="1" ref={contentRef}>
                    Content template
                </div>
            </Tooltip>
        );
    };

    export default App;

---