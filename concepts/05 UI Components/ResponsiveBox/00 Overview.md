The ResponsiveBox UI component allows you to create an application or a website with a layout adapted to different screen sizes.

![DevExtreme HTML5 JavaScript ResponsiveBox](/images/UiWidgets/responsive-box.png)

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/ResponsiveBox/Overview/"
}

The following code creates a simple ResponsiveBox. The UI component defines an ordinary page layout: a header, a footer, content area, left- and right-side bars. On small and extra small screens, the bars are hidden to give more space to the content. Note that the height of all elements that are ancestors to the ResponsiveBox (such as `<body>` and `<html>`) is explicitly set to *"100%"*. This makes the ResponsiveBox occupy full screen height.

---

##### jQuery

    <!--HTML-->
    <div id="responsiveBoxContainer">
        <div class="header" data-options="dxItem: {
            location: [
                { screen: 'md lg', row: 0, col: 0, colspan: 3 },
                { screen: 'xs sm', row: 0, col: 0 }
            ]
        }"> <p>Header</p> </div>

        <div class="content" data-options="dxItem: {
            location: [
                { screen: 'md lg', row: 1, col: 1 },
                { screen: 'xs sm', row: 1, col: 0 }
            ]
        }"> <p>Content</p> </div>

        <div class="left-side-bar" data-options="dxItem: {
            location: { screen: 'md lg', row: 1, col: 0 }
        }"> <p>Left Bar</p> </div>

        <div class="right-side-bar" data-options="dxItem: {
            location: { screen: 'md lg', row: 1, col: 2 }
        }"> <p>Right Bar</p> </div>

        <div class="footer" data-options="dxItem: {
            location: [
                { screen: 'md lg', row: 2, col: 0, colspan: 3 },
                { screen: 'xs sm', row: 2, col: 0 }
            ]
        }"> <p>Footer</p> </div>
    </div>

    <!--JavaScript-->
    $(function() {
        $("#responsiveBoxContainer").dxResponsiveBox({
            rows: [
                { ratio: 1 },
                { ratio: 2 },
                { ratio: 0.7 }
            ],
            cols: [
                { ratio: 0.5, screen: "md lg" },
                { ratio: 2 },
                { ratio: 0.5, screen: "md lg" }
            ]
        });
    });

    <!--CSS-->
    html, body { height: 100%; }
    #responsiveBoxContainer p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }

##### Angular

    <!--HTML-->
    <dx-responsive-box>
        <dxi-row [ratio]="1"></dxi-row>
        <dxi-row [ratio]="2"></dxi-row>
        <dxi-row [ratio]="0.7"></dxi-row>
        <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
        <dxi-col [ratio]="2"></dxi-col>
        <dxi-col [ratio]="0.5" screen="md lg"></dxi-col>
        
        <dxi-item class="header">
            <dxi-location screen="md lg" [row]="0" [col]="0" [colspan]="3"></dxi-location>
            <dxi-location screen="xs sm" [row]="0" [col]="0"></dxi-location>
            <p>Header</p>
        </dxi-item>
        
        <dxi-item class="content">
            <dxi-location screen="md lg" [row]="1" [col]="1"></dxi-location>
            <dxi-location screen="xs sm" [row]="1" [col]="0"></dxi-location>
            <p>Content</p>
        </dxi-item>
        
        <dxi-item class="left-side-bar">
            <dxi-location screen="md lg" [row]="1" [col]="0"></dxi-location>
            <p>Left Bar</p>
        </dxi-item>
        
        <dxi-item class="right-side-bar">
            <dxi-location screen="md lg" [row]="1" [col]="2"></dxi-location>
            <p>Right Bar</p>
        </dxi-item>
        
        <dxi-item class="footer">
            <dxi-location screen="md lg" [row]="2" [col]="0" [colspan]="3"></dxi-location>
            <dxi-location screen="xs sm" [row]="2" [col]="0"></dxi-location>
            <p>Footer</p>
        </dxi-item>
    </dx-responsive-box>

    <!--TypeScript-->
    import { DxResponsiveBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxResponsiveBoxModule
        ],
        // ...
    })

    <!--CSS-->
    html, body { height: 100%; }
    #responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }

##### Vue

    <!--HTML-->
    <template>
        <DxResponsiveBox>
            <DxRow :ratio="1"/>
            <DxRow :ratio="2"/>
            <DxRow :ratio="0.7"/>
            <DxCol :ratio="0.5" screen="md lg"/>
            <DxCol :ratio="2"/>
            <DxCol :ratio="0.5" screen="md lg"/>

            <DxItem>
                <DxLocation screen="md lg" :row="0" :col="0" :colspan="3"/>
                <DxLocation screen="xs sm" :row="0" :col="0"/>
                <template #default>
                    <div class="header">
                        <p>Header</p>
                    </div>
                </template>
            </DxItem>
            
            <DxItem>
                <DxLocation screen="md lg" :row="1" :col="1"/>
                <DxLocation screen="xs sm" :row="1" :col="0"/>
                <template #default>
                    <div class="content">
                        <p>Content</p>
                    </div>
                </template>
            </DxItem>
            
            <DxItem>
                <DxLocation screen="md lg" :row="1" :col="0"/>
                <template #default>
                    <div class="left-side-bar">
                        <p>Left Bar</p>
                    </div>
                </template>
            </DxItem>
            
            <DxItem>
                <DxLocation screen="md lg" :row="1" :col="2"/>
                <template #default>
                    <div class="right-side-bar">
                        <p>Right Bar</p>
                    </div>
                </template>
            </DxItem>
            
            <DxItem class="footer">
                <DxLocation screen="md lg" :row="2" :col="0" :colspan="3"/>
                <DxLocation screen="xs sm" :row="2" :col="0"/>
                <template #default>
                    <div class="footer">
                        <p>Footer</p>
                    </div>
                </template>
            </DxItem>
        </DxResponsiveBox>
    </template>
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxResponsiveBox, DxItem, DxLocation, DxCol, DxRow } from 'devextreme-vue/responsive-box';

    export default {
        components: {
            DxResponsiveBox,
            DxItem,
            DxLocation,
            DxCol,
            DxRow
        }
    };
    </script>
    <style>
    html, body { height: 100%; }
    #responsiveBox p {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }
    </style>
    
##### React

    <!--HTML-->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import ResponsiveBox, { Row, Col, Item, Location } from 'devextreme-react/responsive-box';

    class App extends React.Component {
        render() {
            return (
                <ResponsiveBox>
                    <Row ratio={1}/>
                    <Row ratio={2}/>
                    <Row ratio={0.7}/>
                    <Col ratio={0.5} screen="md lg"/>
                    <Col ratio={2}/>
                    <Col ratio={0.5} screen="md lg"/>
                    
                    <Item>
                        <Location screen="md lg" row={0} col={0} colspan={3}/>
                        <Location screen="xs sm" row={0} col={0}/>
                        <div className="header item">
                            <p>Header</p>
                        </div>
                    </Item>
                    
                    <Item>
                        <Location screen="md lg" row={1} col={1}/>
                        <Location screen="xs sm" row={1} col={0}/>
                        <div className="content item">
                            <p>Content</p>
                        </div>
                    </Item>
                    
                    <Item>
                        <Location screen="md lg" row={1} col={0}/>
                        <div className="left-side-bar item">
                            <p>Left Bar</p>
                        </div>
                    </Item>
                    
                    <Item>
                        <Location screen="md lg" row={1} col={2}/>
                        <div className="right-side-bar item">
                            <p>Right Bar</p>
                        </div>
                    </Item>
                    
                    <Item>
                        <Location screen="md lg" row={2} col={0} colspan={3}/>
                        <Location screen="xs sm" row={2} col={0}/>
                        <div className="footer item">
                            <p>Footer</p>
                        </div>
                    </Item>
                </ResponsiveBox>
            );
        }
    }

    export default App;

    <!--CSS-->
    html, body { height: 100%; }
    #responsiveBox div {
        font-size: 16px;
        padding-top: 10px;
        text-align: center;
    }
    .item { height: 100%; }
    .header { background: #f39e6c }
    .content { background: #f5e5a6 }
    .left-side-bar { background: #94d7c7 }
    .right-side-bar { background: #77c7e7 }
    .footer { background: #7b9bcf }

---
    
The ResponsiveBox elements in the code above are declared using the [dxItem](/api-reference/10%20UI%20Components/Markup%20Components/dxItem '/Documentation/ApiReference/UI_Components/Markup_Components/#dxItem') markup component. An object passed to this component can have the following fields.

- [location](/api-reference/_hidden/dxResponsiveBoxItem/location '/Documentation/ApiReference/UI_Components/dxResponsiveBox/Configuration/items/location/')
- [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#template')
- [visible](/api-reference/_hidden/CollectionWidgetItem/visible.md '/Documentation/ApiReference/UI_Components/dxResponsiveBox/Configuration/items/#visible')

All ResponsiveBox elements are arranged against a layout grid defined by the [rows](/api-reference/10%20UI%20Components/dxResponsiveBox/1%20Configuration/rows '/Documentation/ApiReference/UI_Components/dxResponsiveBox/Configuration/rows/') and [cols](/api-reference/10%20UI%20Components/dxResponsiveBox/1%20Configuration/cols '/Documentation/ApiReference/UI_Components/dxResponsiveBox/Configuration/cols/') arrays. For further information, see the [Create the Layout Grid](/concepts/05%20UI%20Components/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/UI_Components/ResponsiveBox/Create_the_Layout_Grid/') topic.

#####See Also#####
#include common-link-configurewidget
- [ResponsiveBox - Size Qualifiers](/concepts/05%20UI%20Components/ResponsiveBox/05%20Size%20Qualifiers.md '/Documentation/Guide/UI_Components/ResponsiveBox/Size_Qualifiers/')
- [ResponsiveBox - Create the Layout Grid](/concepts/05%20UI%20Components/ResponsiveBox/10%20Create%20the%20Layout%20Grid.md '/Documentation/Guide/UI_Components/ResponsiveBox/Create_the_Layout_Grid/')
- [ResponsiveBox - Arrange Layout Elements](/concepts/05%20UI%20Components/ResponsiveBox/15%20Arrange%20Layout%20Elements.md '/Documentation/Guide/UI_Components/ResponsiveBox/Arrange_Layout_Elements/')
- [ResponsiveBox API Reference](/api-reference/10%20UI%20Components/dxResponsiveBox '/Documentation/ApiReference/UI_Components/dxResponsiveBox/')

[tags]dxresponsivebox, responsive box, responsiveBox, layout UI component, overview, dxItem, full screen UI component