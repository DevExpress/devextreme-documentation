Use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate') to apply customization to all items. To customize an individual item, specify the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template') property of the item.

Note that Angular and Vue use [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template') property. In React, specify the [render](/api-reference/_hidden/CollectionWidgetItem/render.md '/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#render') property.

The following code adds a fourth custom tab:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tabs").dxTabs({
            items: [
                // ...
                {   
                    template: '<div id="fourth">Fourth</div>'
                },
            ]
        });
    });

    <!-- tab: index.css -->
    #fourth {
        text-align: center;
        font-style: italic;
        color: #F05B41;
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-tabs>
        <!-- ... -->
        <dxi-item>
            <div *dxTemplate>
                <div id="fourth">Fourth</div>
            </div>
        </dxi-item>
    </dx-tabs>

    <!-- tab: app.component.css -->
    #fourth {
        text-align: center;
        font-style: italic;
        color: #F05B41;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTabs>
            <!-- ... -->
            <dxItem>
                <div id="fourth">Fourth</div>
            </dxItem>
        </DxTabs>
    </template>

    <script>
    // ...
    </script>

    <style>
        #fourth {
            text-align: center;
            font-style: italic;
            color: #F05B41;
        }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    const renderFourth = () => {
        return <div id="fourth">Fourth</div>;
    }

    function App() {
        return (
            <Tabs>
                <!-- ... -->
                <Item
                    render={renderFourth}
                >
                </Item>
            </Tabs>
        );
    }

    export default App;

    <!-- tab: index.css -->
    #fourth {
        text-align: center;
        font-style: italic;
        color: #F05B41;
    }

---