---
id: dxPieChart.Options.centerTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for content in the pie's center.

---
You need to render template content as an [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) element. The following code snippet shows how to specify a custom template for content in the {WidgetName}'s center:

---
##### jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            type: "doughnut", 
            centerTemplate: (pie, container) => {
                const circle = createCircle("green", "yellow");
                const text = createText(20, 80, 12, 'start', "Doughnut {WidgetName}");

                container.appendChild(circle);
                container.appendChild(text);
            },
        });
    });

    function createCircle(stroke, fill) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    
        circle.setAttribute('cx', 72);
        circle.setAttribute('cy', 80);
        circle.setAttribute('r', 70);
        circle.setAttribute('stroke-width', 4);
        circle.setAttribute('stroke', stroke);
        circle.setAttribute('fill', fill);
        
        return circle;
    }

    function createText(x, y, fontSize, textAnchor, content) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('fill', '#000');
        text.setAttribute('text-anchor', textAnchor);
        text.setAttribute('font-size', fontSize);
            
        text.textContent = content;
        
        return text;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} type="doughnut" centerTemplate="centerTemplate" ... >
        <svg *dxTemplate="let pie of 'centerTemplate'">
            <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
            <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
               Doughnut {WidgetName}
            </text>
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
        <Dx{WidgetName} type="doughnut" center-template="centerTemplate" ... >
            <template #centerTemplate="data">
                <svg>
                    <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                    <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                        Doughnut {WidgetName}
                    </text>
                </svg>
            </template>
        >
        </Dx{WidgetName}>
    </template>

    <script>
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
        <Dx{WidgetName} type="doughnut" center-template="centerTemplate" ... >
            <template #centerTemplate="data">
                <svg>
                    <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                    <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                        Doughnut {WidgetName}
                    </text>
                </svg>
            </template>
        >
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const data = { ... };
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import { useCallback } from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName} from 'devextreme-react/{widget-name}';

    export default function App() { 

        const CenterTemplate = useCallback((pie) => {
            return (
                <svg>
                    <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                    <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                        Doughnut Pie Chart
                    </text>
                </svg>
            );
        }, []);

        return ( 
            <{WidgetName} type="doughnut" centerRender={CenterTemplate} ... >   
                // ...
            </{WidgetName}>       
        ); 
    } 

---