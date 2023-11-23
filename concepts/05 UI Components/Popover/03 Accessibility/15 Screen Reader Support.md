The Popover component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards.

The default ARIA role for Popover is <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role" target="_blank">tooltip</a>. If you put focusable content inside Popover, you may want to change the role to <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role" target="_blank">dialog</a>. To implement this functionality, use the [onShowing](/api-reference/10%20UI%20Components/dxPopover/1%20Configuration/onShowing.md '/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#onShowing') event handler:

---
##### jQuery

    <!-- tab: index.js -->
    const popover = $('#popover').dxPopover({
        // ...
        onShowing: function (e) {
            var $overlayContent = $(e.component.content()).parent()
            $overlayContent.attr("role", "dialog");
        },
    }).dxPopover('instance');

##### Angular

    <!-- tab: app.component.html -->
    <dx-popover ...
        (onShowing)="onShowingHandler($event)"
    >
    </dx-popover>

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
    <DxPopover ...
        @showing="onShowingHandler"
    />
    </template>

    <script>
    import { DxPopover } from 'devextreme-vue/Popover';

    export default {
        components: {
            DxPopover
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
    import Popover from 'devextreme-react/popover';

    const onShowingHandler = (e) => {
        const overlayContent = e.component.content().parentElement;
        overlayContent.setAttribute("role", "dialog");
    };

    const App = () => {
        return (
            <Popover ...
                onShowing={onShowingHandler}
            />
        );
    };

    export default App;

---

Accessibility readers do not notify users when the Popover is opened since it is not a focusable element. To receive reader notifications for an open dialog, programmatically focus an element in Popover after its activation:

---
##### jQuery

    <!-- tab: index.js -->
    $('#popover').dxPopover({
        // ...
        contentTemplate: () => '<div id="content" tabIndex="1">Content template</div>',
        onShown: function (e) {
            $('#content').focus();
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-popover ...
        (onShown)="onShownHandler($event)"
    >
        <div #contentElement id="content" tabindex="1">
            Content template
        </div>
    </dx-popover>

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
    <DxPopover ...
        @shown="onShownHandler"
    >
        <div id="content" tabindex="1" ref="contentRef">
            Content template
        </div>
    </DxPopover>
    </template>

    <script>
    import { DxPopover } from 'devextreme-vue/Popover';

    export default {
        components: {
            DxPopover
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
    import Popover from 'devextreme-react/popover';

    const App = () => {
        const contentRef = useRef(null);

        const onShownHandler = () => {
            if (contentRef.current) {
                contentRef.current.focus();
            }
        };

        return (
            <Popover ...
                onShown={onShownHandler}
            >
                <div id="content" tabIndex="1" ref={contentRef}>
                    Content template
                </div>
            </Popover>
        );
    };

    export default App;

---