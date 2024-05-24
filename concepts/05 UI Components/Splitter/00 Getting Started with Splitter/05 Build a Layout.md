width
height
separatorSize
items
splitter
orientation

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