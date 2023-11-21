The Popup component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards.

The default Popup ARIA role is the non-modal <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role" target="_blank">dialog</a>. If you use Popup as a modal, enable the <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal" target="_blank">aria-modal</a> attribute as follows:

---
##### jQuery

    <!-- tab: index.js -->
    const popup = $('#popup').dxPopup({
        // ...
        onShowing: function (e) {
            var $overlayContent = $(e.component.content()).parent()
            $overlayContent.attr("aria-modal", "true");
        },
    }).dxPopup('instance');

##### Angular

    <!-- tab: app.component.html -->
    <dx-popup ...
        (onShowing)="onShowingHandler($event)"
    >
    </dx-popup>

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
            overlayContent.setAttribute("aria-modal", "true");
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxPopup ...
        @showing="onShowingHandler"
    />
    </template>

    <script>
    import { DxPopup } from 'devextreme-vue/popup';

    export default {
        components: {
            DxPopup
        },
        methods: {
            onShowingHandler(e) {
                const overlayContent = e.component.content().parentElement;
                overlayContent.setAttribute("aria-modal", "true");
            },
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Popup from 'devextreme-react/popup';

    const onShowingHandler = (e) => {
        const overlayContent = e.component.content().parentElement;
        overlayContent.setAttribute('aria-modal', 'true');
    };

    const App = () => {
        return (
            <Popup ...
                onShowing={onShowingHandler}
            />
        );
    };

    export default App;

---