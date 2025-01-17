---
id: dxPieChart.Options.centerTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for content in the pie's center.

##### param(component): dxPieChart
The UI component's instance.

##### param(element): SVGGElement
An empty SVGGElement that acts as a container for the template content.

##### return: String | SVGElement | jQuery
One of the following:

- SVG markup as a string
- An SVGElement
- SVG markup wrapped in a jQuery element

---
You need to render template content as an [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) element. The following code snippet shows how to specify a custom template for content in the PieChart's center:

---
##### jQuery

    $(function(){
        $("#pieChartContainer").dxPieChart({
            // ...
            type: "doughnut", 
            centerTemplate: (pie, container) => {
                const circle = createCircle("green", "yellow");
                const text = createText(20, 80, 12, 'start', "Doughnut PieChart");

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
    <dx-pie-chart type="doughnut" centerTemplate="centerTemplate" ... >
        <svg *dxTemplate="let pie of 'centerTemplate'">
            <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
            <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
               Doughnut PieChart
            </text>
        </svg>
    </dx-pie-chart>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxPieChartModule } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxPieChartModule 
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 

    export class AppModule { } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxPieChart type="doughnut" center-template="centerTemplate" ... >
            <template #centerTemplate="data">
                <svg>
                    <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                    <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                        Doughnut PieChart
                    </text>
                </svg>
            </template>
        >
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart'; 

    export default {
        components: {
            DxPieChart
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
        <DxPieChart type="doughnut" center-template="centerTemplate" ... >
            <template #centerTemplate="data">
                <svg>
                    <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                    <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                        Doughnut PieChart
                    </text>
                </svg>
            </template>
        >
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart from 'devextreme-vue/pie-chart';

    const data = { ... };
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import PieChart from 'devextreme-react/pie-chart';

    const CenterTemplate = (pie) => {
        return (
            <svg>
                <circle cx="72" cy="80" r="70" stroke="green" stroke-width="4" fill="yellow" />
                <text text-anchor="start" y="80" x="20" fill="#000" font-size="12">
                    Doughnut Pie Chart
                </text>
            </svg>
        );
    }

    export default function App() {   
        return ( 
            <PieChart type="doughnut" centerRender={CenterTemplate} ... >   
                { /* ... */ } 
            </PieChart>       
        ); 
    } 

---