---
##### jQuery

To create a submenu, use nested [items](/api-reference/_hidden/dxMenuItem/items.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#items'). An array within the base item object corresponds to a submenu. 

Use the [beginGroup](/api-reference/_hidden/dxMenuBaseItem/beginGroup.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#beginGroup') property to separate items in the submenu.

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            items: [
                // ...
                {   
                    text: 'Products',
                    items: [
                        {
                            text: 'Product 1',
                        },
                        {
                            text: 'Category',
                            items: [
                                {
                                    text: 'Product 2'
                                },
                                {
                                    beginGroup: true,
                                    text: 'Product 3'
                                },
                                {
                                    text: 'Product 4'
                                }
                            ]
                        },
                        {   
                            disabled: true,
                            text: 'Product 5'
                        }
                    ]
                },
                // ...
            ]
        }).dxMenu('instance');
    });

##### Angular

To create a submenu, use nested [items](/api-reference/_hidden/dxMenuItem/items.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#items'). A submenu is defined as another item in the base item's markup.

Use the [beginGroup](/api-reference/_hidden/dxMenuBaseItem/beginGroup.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#beginGroup') property to separate items in the submenu.

    <!-- tab: app.component.html -->
    <div id="container">
        <dx-menu>
            <!-- ... -->
            <dxi-item 
                text="Products"
            >
                <dxi-item 
                    text="Product 1"
                >
                </dxi-item> 
                <dxi-item 
                    text="Category"
                >
                    <dxi-item 
                        text="Product 2"
                    >
                    </dxi-item>
                    <dxi-item 
                        [beginGroup]="true"
                        text="Product 3"
                    >
                    </dxi-item>
                    <dxi-item 
                        text="Product 4"
                    >
                    </dxi-item>
                </dxi-item>
                <dxi-item 
                    [disabled]="true"
                    text="Product 5"
                >
                </dxi-item> 
            </dxi-item>
            <!-- ... -->
        </dx-menu>
    </div>

##### Vue

To create a submenu, use nested [items](/api-reference/_hidden/dxMenuItem/items.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#items'). A submenu is defined as another item in the base item's markup.

Use the [beginGroup](/api-reference/_hidden/dxMenuBaseItem/beginGroup.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#beginGroup') property to separate items in the submenu.

    <!-- tab: App.vue -->
    <template>
        <div id="container">
            <dxMenu>
                <!-- ... -->
                <dxItem 
                    text="Products"
                >
                    <dxItem 
                        text="Product 1" 
                    >
                    </dxItem>
                    <dxItem 
                        text="Category" 
                    >
                        <dxItem 
                            text="Product 2" 
                        >
                        </dxItem>
                        <dxItem 
                            :begin-group="true"
                            text="Product 3" 
                        >
                        </dxItem>
                        <dxItem 
                            text="Product 3" 
                        >
                        </dxItem>
                    </dxItem>
                    <dxItem 
                        :disabled="true"
                        text="Product 5" 
                    >
                    </dxItem>
                </dxItem>
                <!-- ... -->
            </dxMenu>
        </div>
    </template>

    <script>
        // ...
    </script>

##### React

To create a submenu, use nested [items](/api-reference/_hidden/dxMenuItem/items.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#items'). A submenu is defined as another item in the base item's markup.

Use the [beginGroup](/api-reference/_hidden/dxMenuBaseItem/beginGroup.md '/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#beginGroup') property to separate items in the submenu.

    <!-- tab: App.js -->
    // ...

    function App() {
        return (
            <div>
                <div id="container">
                    <Menu>
                        <!-- ... -->
                        <Item
                            text="Products"
                        >
                            <Item
                                text="Product 1"
                            >
                            </Item>
                            <Item
                                text="Category"
                            >
                                <Item
                                    text="Product 2"
                                >
                                </Item>
                                <Item
                                    beginGroup={true}
                                    text="Product 3"
                                >
                                </Item>
                                <Item
                                    text="Product 4"
                                >
                                </Item>
                            </Item>
                            <Item
                                disabled={true}
                                text="Product 5"
                            >
                            </Item>
                        </Item>
                        <!-- ... -->
                    </Menu>
                </div>
            </div>
        );
    }

    export default App;

---