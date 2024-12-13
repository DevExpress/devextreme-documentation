To customize the Diagram component and its elements, use the following properties:

- [simpleView](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#simpleView)    
Activates a mode where the content uses all available space.

- [pageColor](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/#pageColor)    
Specifies the Diagram page's color.

- [defaultItemProperties](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/defaultItemProperties/)    
Defines initial properties for new items. In this tutorial, the different font is applied to the items.

Diagram UI customization [tools](/Documentation/Guide/UI_Components/Diagram/Diagram_Tools/) include:

- [propertiesPanel](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/propertiesPanel '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/propertiesPanel/')    
Configures the properties panel settings. This tutorial adds a custom group that allows users to change the item appearance.

- [toolbox](/api-reference/10%20UI%20Components/dxDiagram/1%20Configuration/toolbox '/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/toolbox/')    
The toolbox contains groups of shapes. In this tutorial, we use this configuration object to [disable search](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/toolbox/#showSearch) and limit the [shapes](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/toolbox/groups/#shapes) in the general [category](/Documentation/ApiReference/UI_Components/dxDiagram/Configuration/toolbox/groups/#category).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#diagram").dxDiagram({
            simpleView: true,
            pageColor: "#f0f0f0",
            defaultItemProperties: {
                textStyle: "font-family: 'Courier New', monospace;"
            },
            propertiesPanel: {
                tabs: [
                    {
                        groups: [{ title: 'Object Properties', commands: ['lineStyle', 'lineColor', 'fillColor'] }],
                    },
                ],
            },
            toolbox: {
                showSearch: false,
                groups: [{
                    category: 'general',
                    shapes: ['text', 'rectangle'],
                }]
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-diagram
        [simpleView]="true"
        pageColor="#f0f0f0"
    >
        <dxo-default-item-properties 
            textStyle="font-family: 'Courier New', monospace;">
        </dxo-default-item-properties>
        <dxo-properties-panel>
            <dxi-tab>
                <dxi-group
                    title="Object Properties"
                    [commands]="['lineStyle', 'lineColor', 'fillColor']"
                ></dxi-group>
            </dxi-tab>
        </dxo-properties-panel>
        <dxo-toolbox [showSearch]="false">
            <dxi-group category="general" [shapes]="['text', 'rectangle']"></dxi-group>
        </dxo-toolbox>
    </dx-diagram>

##### Vue

    <!-- tab: App.vue -->
    <template>
    <DxDiagram
        :simple-view="true"
        page-color="#f0f0f0"
    >
        <DxDefaultItemProperties :text-style="'font-family: "Courier New", monospace;'"/>
        <DxPropertiesPanel>
            <DxTab>
                <DxGroup
                    :title="'Object Properties'"
                    :commands="['lineStyle', 'lineColor', 'fillColor']"
                />
            </DxTab>
        </DxPropertiesPanel>
        <DxToolbox :show-search="false">
            <DxGroup
                :category="'general'"
                :shapes="['text', 'rectangle']"
            />
        </DxToolbox>
    </DxDiagram>
    </template>

    <script setup>
    import {
        DxDiagram, DxDefaultItemProperties, DxPropertiesPanel, DxTab, DxGroup
    } from 'devextreme-vue/diagram';
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from "react";
    import Diagram, { DefaultItemProperties, Toolbox, PropertiesPanel, Tab, Group } from 'devextreme-react/diagram';
    // ...

    const objectCommands = ['lineStyle', 'lineColor', 'fillColor'];
    const toolboxShapes = ['text', 'rectangle'];

    const App = () => {
        return (
            <Diagram
                simpleView={true}
                pageColor="#f0f0f0"
            >
                <DefaultItemProperties  
                    textStyle="font-family: 'Courier New', monospace;"
                />
                <PropertiesPanel>
                    <Tab>
                        <Group
                            title="Object Properties"
                            commands={objectCommands}
                        />
                    </Tab>
                </PropertiesPanel>
                <Toolbox showSearch={false} >
                    <Group
                        category="general"
                        shapes={toolboxShapes}
                    />
                </Toolbox>
            </Diagram>
        );
    };

    export default App;

---