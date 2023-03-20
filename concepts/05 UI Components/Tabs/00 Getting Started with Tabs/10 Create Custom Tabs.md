---

##### jQuery

Use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate') to apply customization to all items. To customize an individual item, specify the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#template') property of the item.

The following code adds a fourth custom tab:

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

Use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate') to apply customization to all items. To customize an individual item, specify a [custom template](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

The following code adds a fourth custom tab:

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

Use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate') to apply customization to all items. To customize an individual item, specify a [custom template](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates').

The following code adds a fourth custom tab:

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

Use an [itemRender](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemRender.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemRender') to apply customization to all items. To customize an individual item, specify the [render](/api-reference/_hidden/CollectionWidgetItem/render.md '/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#render') property of the item.

The following code adds a fourth custom tab:

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