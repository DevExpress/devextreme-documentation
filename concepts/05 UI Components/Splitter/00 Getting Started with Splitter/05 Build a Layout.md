In this tutorial, we create a component that splits only the part of the page. To achieve this functionality, we set Splitter [width](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#width) and [height](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#height) properties to 500 and 400px respectively.

[note] If you want to split the entire page, place Splitter in the `<body>` tag. Set the width and height options to 100%. Then set the `<html>` tag width and height styles to 100% too.

Splitter can be [orientated](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#orientation) either horizontally (default) or vertically.

You can specify the Splitter item layout through two options:

- [items](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/)    
Specify panes explicitly in the code. This option is used in this tutorial.

- [dataSource](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#dataSource)    
You can predefine pane structure and store it separately from the main code.

Each Splitter item can hold another [splitter](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#splitter). The nested splitter uses the same configuration properties as the main one.

Additionally, you can specify the [size of a separator bar](/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#separatorSize) in pixels.

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