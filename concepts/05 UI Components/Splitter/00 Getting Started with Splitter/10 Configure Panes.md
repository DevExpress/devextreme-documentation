The following options specify the Splitter state and available user interaction capabilities:

- [resizable](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/resizable.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#resizable') (default: `true`)    
If true, a handle appears on the pane separator. Drag the handle to adjust pane size.

- [collapsible](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/collapsible.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#collapsible') (default: `false`)    
If true, an arrow appears on the handle. Click the arrow to collapse/expand the pane.

- [collapsed](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/collapsed.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#collapsed') (default: `false`)    
Specifies whether the pane is collapsed.

Use the following properties to specify pane size. Note that all these properties depend on Splitter [orientation](/api-reference/10%20UI%20Components/dxSplitter/1%20Configuration/orientation.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/#orientation'). They specify width in   *'horizontal'* orientation and height in *'vertical'* orientation. 

- [size](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/size.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#size')    
Pane width/height.

- [minSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/minSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#minSize')    
Minimum width/height for a resizable pane.

- [maxSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/maxSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#maxSize')    
Maximum width/height for a resizable pane.

- [collapsedSize](/api-reference/10%20UI%20Components/dxSplitter/7%20Interfaces/dxSplitterItem/collapsedSize.md '/Documentation/ApiReference/UI_Components/dxSplitter/Configuration/items/#collapsedSize')    
Pane width/height in the collapsed state.

This tutorial explicitly specifies the following properties: **size**, **minSize**, **maxSize**, and **collapsible**. All panes are **resizable**, since this is a default behavior.

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
                        <Item collapsible={true} maxSize="30px"/>
                    </Splitter>
                </Item>
            </Splitter>
        </container>
    </React.Fragment>
    );

    export default App;

---