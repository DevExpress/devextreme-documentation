---
id: dxMenuItem.url
type: String
---
---
##### shortDescription
Specifies a web address to be opened when a user clicks on an item.

---

The following code opens a link in the same frame the item was clicked:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const menu = $("#menu").dxMenu({
            items: [
                {
                    icon: 'home',
                    url: 'https://js.devexpress.com',
                }
            ]
        }).dxMenu('instance');
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-menu>
        <dxi-item 
            icon="home"
            url="https://js.devexpress.com"
        >
        </dxi-item>
    </dx-menu>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dxMenu>
            <dxItem 
                icon="home"
                url="https://js.devexpress.com"
            />
        </dxMenu>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    // ...
                };
            }
        }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Menu, { Item } from 'devextreme-react/menu';

    function App() {
        return (
            <Menu>
                <Item
                    icon="home"
                    url="https://js.devexpress.com"
                />
            </Menu>
        );
    }

    export default App;

---

To assign link attributes, specify the [linkAttr](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#linkAttr) property.

---

##### jQuery

If you specify a [template](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#template) for an item, do not specify this property. Define a link in the markup instead.

    <!-- tab: index.js -->
    $(function() {
        $("#menu").dxMenu({
            items: [
                {
                    template: '<a href="http://js.devexpress.com" target="_blank">Home</a>'
                }
            ]
        });
    });

##### Angular

If you specify a [template](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#template) for an item, do not specify this property. Define a link in the markup instead. 

    <!-- tab: app.component.html -->
    <dx-menu>
        <dxi-item>
            <div *dxTemplate>
                <a href="http://js.devexpress.com" target="_blank">Home</a>
            </div>
        </dxi-item>  
    </dx-menu>

If you use <a href="https://angular.io/guide/routing-overview" target="_blank">routing</a> for your project, specify `<a>` links inside items. Alternatively, you can implement the [onItemClick](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#onItemClick) event handler to process clicks on links.

    <!-- tab: app.component.html -->
    <dx-menu>
        <dxi-item><a routerLink="/">Home</a></dxi-item>
        <dxi-item><a routerLink="/about">About</a></dxi-item>
    </dx-menu>
    <router-outlet></router-outlet>

##### Vue

If you specify a [template](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#template) for an item, do not specify this property. Define a link in the markup instead. 

    <!-- tab: App.vue -->
    <template>
        <DxMenu>
            <DxItem><a href="http://js.devexpress.com" target="_blank">Home</a></DxItem>
        </DxMenu>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    // ...
                };
            }
        }
    </script>

If you use <a href="https://vuejs.org/guide/scaling-up/routing.html" target="_blank">routing</a> for your project, specify `<router-link>` links inside items. Alternatively, you can implement the [onItemClick](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#onItemClick) event handler to process clicks on links.

    <!-- tab: App.vue -->
    <template>
        <DxMenu>
            <DxItem><template #default><router-link to="/">Home</router-link></template></DxItem>
            <DxItem><template #default><router-link to="/about">About</router-link></template></DxItem>
        </DxMenu>
        <router-view/>
    </template>

    <script>
        import DxMenu, { DxItem } from 'devextreme-vue/menu';

        export default {
            components: {
                DxMenu,
                DxItem
            },
            data() {
                return {
                    // ...
                };
            }
        }
    </script>

##### React

If you specify a [rendering function](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#render) or a [component](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/items/#component) for an item, do not specify this property. Define a link in the markup instead. 

    <!-- tab: App.js -->
    import React from 'react';
    import Menu, { Item } from 'devextreme-react/menu';

    const renderLink = () => {
        return <a href="http://js.devexpress.com" target="_blank">Home</a>;
    }

    function App() {
        return (
            <Menu>
                <Item render={renderLink} />
            </Menu>
        );
    }

    export default App;

If you use <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">routing</a> for your project, specify `<Link>` links inside items. Alternatively, you can implement the [onItemClick](/Documentation/ApiReference/UI_Components/dxMenu/Configuration/#onItemClick) event handler to process clicks on links.

    <!-- tab: App.js -->
    import React from 'react';
    import Menu, { Item } from 'devextreme-react/menu';
    import { Routes, Outlet, Route, Link } from "react-router-dom";

    function App() {
        return (
            <Menu>
                <Item>
                  <Link to="/">Home</Link>
                </Item>
                <Item>
                  <Link to="/about">About</Link>
                </Item>
            </Menu>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Outlet />
        );
    }

    export default App;

---