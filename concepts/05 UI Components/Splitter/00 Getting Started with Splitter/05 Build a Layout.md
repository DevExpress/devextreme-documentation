In this tutorial, the Splitter takes up only a part of the page. To achieve this goal, set the component's [width](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/width.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#width') and [height](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/height.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#height') properties to 500px and 400px respectively.

[note] If you want to split the entire page, place a Splitter in the `<body>` tag and set the width and height options to 100% for both the Splitter and the `<html>` tag.

A Splitter can [arrange its items](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#orientation') either horizontally (default) or vertically.

You can use two options to specify Splitter item content:

- [items](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/')    
Specifies pane content directly in code. This option is used in this tutorial.

- [dataSource](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#dataSource')    
Obtains pane content stored separately from the main code.

Each pane can hold another [Splitter](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/splitter.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#splitter'). Each nested Splitter uses the same configuration properties as its parent.

Once you set up pane layout, the Splitter displays separator bars between panes. You can specify the [width of these bars](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/separatorSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#separatorSize') in pixels.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            width: 500,
            height: 400,
            separatorSize: 5,
            items: [
                { },
                {
                    splitter: {
                        separatorSize: 5,
                        orientation: "vertical",
                        items: [
                            { },
                            { },
                            { }
                        ]
                    }
                }
            ]
        });
    });

    <!-- tab: index.html -->
    <div id="container">
        <div id="splitter"></div>
    </div>

##### Angular

    <!-- tab: app.component.html -->
    <container>
        <dx-splitter
            [width]="500"
            [height]="400"
            [separatorSize]="5"
        >
            <dxi-item></dxi-item>
            <dxi-item>
                <dx-splitter orientation="vertical" [separatorSize]="5">
                    <dxi-item></dxi-item>
                    <dxi-item></dxi-item>
                    <dxi-item></dxi-item>
                </dx-splitter>
            </dxi-item>
            </dx-splitter>
    </container>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxSplitterModule } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxSplitterModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <container>
              <DxSplitter :width="500" :height="400" :separator-size="5">
                <DxItem />
                <DxItem>
                <DxSplitter orientation="vertical" :separator-size="5">
                    <DxItem />
                    <DxItem />
                    <DxItem />
                </DxSplitter>
                </DxItem>
            </DxSplitter>
        </container>
    </template>

    <script setup>  
        import 'devextreme/dist/css/dx.light.css';
        import { DxSplitter, DxItem } from 'devextreme-vue/splitter';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Splitter, { Item } from 'devextreme-react/splitter';
    import 'devextreme/dist/css/dx.light.css';

    const App = () => (
    <React.Fragment>
        <container>
            <Splitter
                width={500}
                height={400}
                separatorSize={5}
            >
                <Item />
                <Item>
                    <Splitter orientation="vertical" separatorSize={5}>
                        <Item />
                        <Item />
                        <Item />
                    </Splitter>
                </Item>
            </Splitter>
        </container>
    </React.Fragment>
    );

    export default App;

---