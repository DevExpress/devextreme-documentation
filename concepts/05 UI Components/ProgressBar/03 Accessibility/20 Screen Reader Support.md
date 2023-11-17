The ProgressBar component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards. 

To improve accessibility, use the [elementAttr](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#elementAttr) property to specify <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" target="_blank">aria-label</a> for the component.

Not all screen readers pronounce the progress [status](/Documentation/ApiReference/UI_Components/dxProgressBar/Configuration/#showStatus). To make sure the status is pronounced, add the following aria-* attributes:

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#progressBarContainer").dxProgressBar({
            elementAttr: {
                'aria-live': 'polite',
                'aria-describedby': 'status',
            },
            onContentReady: ({ element }) => {
                $(element).find('.dx-progressbar-status').attr('id', 'status');
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-progress-bar
        [elementAttr]="elementAttr"
        (onContentReady)="onContentReady($event)"
    >
    </dx-progress-bar>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        elementAttr = {
            'aria-live': 'polite',
            'aria-describedby': 'status'
        };
        onContentReady: ({ element }) => {
            element.querySelector('.dx-progressbar-status').setAttribute('id', 'status');
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxProgressBar
        :element-attr="elementAttr"
        @on-content-ready="onContentReady"
    />
    </template>

    <script>
    import { DxProgressBar } from 'devextreme-vue/progress-bar';

    export default {
        components: {
            DxProgressBar,
        },
        data() {
            return {
                elementAttr: {
                    'aria-live': 'polite',
                    'aria-describedby': 'status',
                },
            };
        },
        methods: {
            onContentReady({ element }) {
                element.querySelector('.dx-progressbar-status').setAttribute('id', 'status');
            },
        },
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { ProgressBar } from 'devextreme-react/progress-bar';

    function App() {
        const elementAttr = {
            'aria-live': 'polite',
            'aria-describedby': 'status',
        };

        const onContentReady = ({ element }) => {
            element.querySelector('.dx-progressbar-status').setAttribute('id', 'status');
        };

        return (
            <div>
                <ProgressBar
                    elementAttr={elementAttr}
                    onContentReady={onContentReady}
                />
            </div>
        );
    };

    export default App;

---