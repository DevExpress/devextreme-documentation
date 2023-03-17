The following code snippet shows how to specify a custom template for content in the {WidgetName}'s center:

---
##### jQuery

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            centerTemplate: (gauge, container) => {
                const rect = createRect(50, 50, '#fff');
                const text = createText(15, 23, 12, 'start', gauge.value());

                container.appendChild(rect);
                container.appendChild(text);
            },
        });
    });

    function createRect(width, height, fill) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        rect.setAttribute('x', 0);
        rect.setAttribute('y', -150);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fill);

        return rect;
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
    <dx-{widget-name} ...
        <svg *dxTemplate="let gauge of 'centerTemplate'">
            <rect x="0" y="-150" width="50" height="50"></rect>
            <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
               {{gauge.value()}}
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
        <Dx{WidgetName} ...
            <template #centerTemplate="data">
                <svg>
                    <rect x="0" y="-150" width="50" height="50"></rect>
                    <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                        {{ data.data.value() }}
                    </text>
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
                    <rect x="0" y="-150" width="50" height="50"></rect>
                    <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                        {{ data.data.value() }}
                    </text>
                </svg>
            </template>
        >
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName} from 'devextreme-vue/{widget-name}';

    const data = {...};
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
                    <rect x="0" y="-150" width="50" height="50"></rect>
                    <text text-anchor="start" y="23" x="15" fill="#000" font-size="12">
                        {gauge.value()}
                    </text>
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