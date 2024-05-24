collapsible
resizable
collapsed
size
minSize
maxSize

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            // ...
            items: [
                {
                    size: '285px',
                },
                {
                    splitter: {
                        // ...
                        items: [
                            { 
                               size: '80%', 
                            },
                            { 
                                collapsible: true,
                                minSize: '40px',
                            },
                            { 
                                collapsed: true,
                                collapsible: true,
                                maxSize: '30px',
                            }
                        ]
                    }
                }
            ]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <container>
        <dx-splitter ... >
            <dxi-item size="285px"></dxi-item>
            <dxi-item>
                <dx-splitter ...>
                    <dxi-item size="80%"></dxi-item>
                    <dxi-item [collapsible]="true" minSize="40px"></dxi-item>
                    <dxi-item
                        [collapsed]="true"
                        [collapsible]="true"
                        maxSize="30px"
                    ></dxi-item>
                </dx-splitter>
            </dxi-item>
            </dx-splitter>
    </container>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <container>
              <DxSplitter ... >
                <DxItem size="285px" />
                <DxItem>
                <DxSplitter ... >
                    <DxItem size="80%" />
                    <DxItem :collapsible="true" minSize="40px" />
                    <DxItem 
                        :collapsed="true"
                        :collapsible="true"
                        maxSize="30px"
                    />
                </DxSplitter>
                </DxItem>
            </DxSplitter>
        </container>
    </template>

    <script setup>  
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Splitter, { Item } from 'devextreme-react/splitter';
    import 'devextreme/dist/css/dx.light.css';

    const App = () => (
    <React.Fragment>
        <container>
            <Splitter ... >
                <Item size="285px" />
                <Item>
                    <Splitter orientation="vertical" separatorSize={5}>
                        <Item size="80%" />
                        <Item collapsible={true} minSize="40px" />
                        <Item collapsed={true} collapsible={true} maxSize="30px"/>
                    </Splitter>
                </Item>
            </Splitter>
        </container>
    </React.Fragment>
    );

    export default App;

---