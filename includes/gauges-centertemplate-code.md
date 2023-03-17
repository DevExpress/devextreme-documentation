The following code snippet shows how to specify a custom template for content in the {WidgetName}'s center:

---
##### jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            centerTemplate: (gauge, container) => {
                const bottomGroup = createGroup(43, 140);
                const baseRect = createRect(190, 200, 'transparent', 0);
                const bottomRect = createRect(100, 36, '#fff', 8);
                const bottomText = createText(15, 23, 12, 'start', 20, 'Custom label');

                bottomRect.setAttribute('class', 'description');

                bottomGroup.appendChild(bottomRect);
                bottomGroup.appendChild(bottomText);
                container.appendChild(baseRect);
                container.appendChild(bottomGroup);
            },
        });

        function createRect(width, height, fill, radius) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

            rect.setAttribute('x', 0);
            rect.setAttribute('y', 0);
            rect.setAttribute('width', width);
            rect.setAttribute('height', height);
            rect.setAttribute('fill', fill);
            rect.setAttribute('rx', radius);

            return rect;
        }

        function createText(x, y, fontSize, textAnchor, dy, content) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

            text.setAttribute('x', x);
            text.setAttribute('y', y);
            text.setAttribute('fill', '#000');
            text.setAttribute('text-anchor', textAnchor);
            text.setAttribute('font-size', fontSize);

            const tspan = createTSpan(x, 0, content);

            text.appendChild(tspan);

            return text;
        }

        function createGroup(x, y) {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

            group.setAttribute('transform', `translate(${x} ${y})`);

            return group;
        }

        function createTSpan(x, dy, content) {
            const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

            tspan.setAttribute('x', x);
            tspan.setAttribute('dy', dy);
            tspan.textContent = content;

            return tspan;
        }

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        <svg *dxTemplate="let gauge of 'centerTemplate'">
            <rect x="0" y="0" width="190" height="200" fill="transparent"></rect>
            <g transform="translate(43 140)">
            <rect
                class="description"
                x="0"
                y="0"
                width="100"
                height="36"
                rx="8"
                fill="#fff"
            ></rect>
            <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                <tspan x="15">Custom label</tspan>
            </text>
            </g>
        </svg>
    </dx-{widget-name}>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { Dx{WidgetName}Module } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            Dx{WidgetName}Module 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 

    export class AppModule { } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <Dx{WidgetName} ...
            <template #centerTemplate="data">
                <svg>
                    <rect x="0" y="0" width="190" height="200" fill="transparent"></rect>
                    <g transform="translate(43 140)">
                        <rect
                            class="description"
                            x="0"
                            y="0"
                            width="100"
                            height="36"
                            rx="8"
                            fill="#fff"
                        ></rect>
                        <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                            <tspan x="15">Custom label</tspan>
                        </text>
                    </g>
                </svg>
            </template>
        >
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css'; 
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}'; 

    export default {
        components: {
            Dx{WidgetName}
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <Dx{WidgetName} ...
            <template #centerTemplate="data">
                <svg>
                    <rect x="0" y="0" width="190" height="200" fill="transparent"></rect>
                    <g transform="translate(43 140)">
                        <rect
                            class="description"
                            x="0"
                            y="0"
                            width="100"
                            height="36"
                            rx="8"
                            fill="#fff"
                        ></rect>
                        <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                            <tspan x="15">Custom label</tspan>
                        </text>
                    </g>
                </svg>
            </template>
        >
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import { useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() { 

        const CenterTemplate = useCallback((gauge) => {
            return (
                <svg>
                    <rect x="0" y="0" width="190" height="200" fill="transparent"></rect>
                    <g transform="translate(43 140)">
                        <rect
                            class="description"
                            x="0"
                            y="0"
                            width="100"
                            height="36"
                            rx="8"
                            fill="#fff"
                        ></rect>
                        <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                            <tspan x="15">Custom label</tspan>
                        </text>
                    </g>
                </svg>
            );
        }, []);

        return ( 
            <{WidgetName} ...
                centerRender={CenterTemplate}
            />        
        ); 
    } 

---