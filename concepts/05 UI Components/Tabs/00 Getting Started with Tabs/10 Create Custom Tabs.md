To apply customization to all items, use an [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate). To customize an individual item, specify the [template](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template) property of the item.

Note that Angular and Vue use [custom templates](/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates) instead of the [template](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template) property. In React, specify the [render](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#render) property.

The following code adds a fourth custom tab.

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