---
id: dxButtonGroupItem.elementAttr
type: Object
---
---
##### shortDescription
Specifies the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" target="_blank">global attributes</a> to be attached to the button group item's container element.

---
---
##### jQuery

    $(function(){
        $("#buttonGroup").dxButtonGroup({
            items: [{
                // ...
                elementAttr: {
                    class: "class-name"
                }
            }, // ...
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ... 
        [items]="buttonGroupItems>
    </dx-button-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        buttonGroupItems = [{
            // ...
            elementAttr: {
                class: "class-name"
            }
        }, // ...
        ]
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButtonGroup ...
            :items="buttonGroupItems"
        />
    </template>

    <script>
    import DxButtonGroup from 'devextreme-vue/button-group';

    const buttonGroupItems = [{
        // ...
        elementAttr: {
            class: "class-name"
        }
    }, // ...
    ];
    
    export default {
        components: {
            DxButtonGroup,
        },
        data() {
            return {
                buttonGroupItems
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import ButtonGroup from 'devextreme-react/button-group';

    const buttonGroupItems = [{
        // ...
        elementAttr: {
            class: "class-name"
        }
    }, // ...
    ];

    export default function App() {
        return (
            <ButtonGroup ...
                items={buttonGroupItems}           
            />
        );
    }


---

