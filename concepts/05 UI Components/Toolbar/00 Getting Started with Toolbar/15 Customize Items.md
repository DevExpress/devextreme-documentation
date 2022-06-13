To apply the same customization to all items, use an [itemTemplate](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#itemTemplate'). To customize an individual item, specify the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#template') property of the item.

Note that Angular and Vue use [custom templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates') instead of the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#template') property. In React, specify the [render](/api-reference/_hidden/CollectionWidgetItem/render.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/items/#render') property.

The following code adds a custom item after the **Back** button. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        // ...

        $("#toolbar").dxToolbar({
            items: [
                // ...
                {   
                    location: 'before',
                    template: '<div id="back">Go back</div>'
                },
            ]
        });

    });

    <!-- tab: index.css -->
    #back {
        margin-left: 5px;
    }


##### Angular

    <!-- tab: app.component.html -->
    <dx-toolbar>
        <!-- ... -->
        <dxi-item
            location="before"
        >
            <div *dxTemplate>
                <div id="back">Go back</div>
            </div>
        </dxi-item>
    </dx-toolbar>

    <!-- tab: app.component.css -->
    #back {
        margin-left: 5px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxToolbar>
            <!-- ... -->
            <dxItem
                location="before"
            >
                <div id="back">Go back</div>
            </dxItem>
        </DxToolbar>
    </template>

    <script>
    // ...
    </script>

    <style>
        #back {
            margin-left: 5px;
        }
    </style>

##### React

    <!-- tab: App.js -->
    // ...
    const renderBack = () => {
        return <div id="back">Go back</div>;
    }

    function App() {
        return (
            <Toolbar>
                <!-- ... -->
                <Item
                    location="before"
                    render={renderBack}
                >
                </Item>
            </Toolbar>
        );
    }

    export default App;

    <!-- tab: index.css -->
    #back {
        margin-left: 5px;
    }

---