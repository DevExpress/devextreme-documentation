---
id: dxMenuItem.linkAttr
type: Object
default: {}
---
---
##### shortDescription
Specifies link attributes for the [url](/api-reference/_hidden/dxMenuItem/url.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#url') option.

---
You can assign all attributes described in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank">Attributes</a> article except for the following:

- `href`    
Use the [url](/api-reference/_hidden/dxMenuItem/url.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#url') property to specify a link instead.

- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank">Global attributes</a>    
You can specify only `id`, `class`, and <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes" target="_blank">aria-*</a> global attributes.

[note]

- If you assign a `target: '_blank'` attribute, add a `rel: 'noopener'` or `rel: 'noreferrer'` attribute to avoid <a href="https://developer.chrome.com/en/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/" target="_blank">security issues</a>.

- When an item receives focus, screen readers should announce a description of the link. Add an `aria-label` attribute with the description to inform users.

[/note]

The following code opens a link in a new window or tab:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            items: [
                {
                    text: 'Home',
                    url: 'https://js.devexpress.com',
                    linkAttr: {
                        target: '_blank',
                        rel: 'noopener'
                    }
                }
            ]
        }).dxMenu('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-menu>
        <dxi-item 
            text="Home"
            url="https://js.devexpress.com"
            [linkAttr]="linkAttr"
        >
        </dxi-item>
    </dx-menu>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    })

    export class AppComponent {
        linkAttr = {
            target: '_blank',
            rel: 'noopener'
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dxMenu>
            <dxItem 
                text="Home"
                url="https://js.devexpress.com"
                :link-attr="linkAttr"
            />
        </dxMenu>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    linkAttr: {
                        target: '_blank',
                        rel: 'noopener'
                    }
                };
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Menu, { Item } from 'devextreme-react/menu';

    const linkAttr = {
        target: '_blank',
        rel: 'noopener'
    };

    function App() {
        return (
            <Menu>
                <Item
                    text="Home"
                    url="https://js.devexpress.com"
                    linkAttr={linkAttr}
                />
            </Menu>
        );
    }

    export default App;

---