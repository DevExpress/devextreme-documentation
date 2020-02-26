An end user can use the following keys to interact with the widget.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Key</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Shift + Mouse Wheel</td>
      <td>Scrolls the content left/right if the <a href="/Documentation/ApiReference/UI_Widgets/dxTileView/Configuration/#direction">direction</a> option is <i>"horizontal"</i>.</td>
    </tr>
    <tr>
      <td>&larr;&rarr;&uarr;&darr;</td>
      <td>Moves focus to the neighboring tile.</td>
   </tr>
    <tr>
      <td>Home</td>
      <td>Moves focus to the very first tile.</td>
    </tr>
    <tr>
      <td>End</td>
      <td>Moves focus to the very last tile.</td>
    </tr>
    <tr>
      <td>Enter or Space</td>
      <td>Selects the focused tile.</td>
    </tr>
    </tbody>
  </table>
</div>

You can implement a custom handler for a key using the [registerKeyHandler(key, handler)](/api-reference/10%20UI%20Widgets/Widget/3%20Methods/registerKeyHandler(key_handler).md '/Documentation/ApiReference/UI_Widgets/dxTileView/Methods/#registerKeyHandlerkey_handler') method.

---
##### jQuery

    <!--JavaScript-->
    function registerKeyHandlers () {
        const tileView =  $("#tileViewContainer").dxTileView("instance");
        tileView.registerKeyHandler("backspace", function (e) {
            // The argument "e" contains information on the event
        });
        tileView.registerKeyHandler("space", function (e) {
            // ...
        });
    }
    

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxTileViewModule, DxTileViewComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxTileViewComponent, { static: false }) tileView: DxTileViewComponent
        // Prior to Angular 8
        // @ViewChild(DxTileViewComponent) tileView: DxTileViewComponent
        ngAfterViewInit () {
            this.tileView.instance.registerKeyHandler("backspace", function (e) {
                // The argument "e" contains information on the event
            });
            this.tileView.instance.registerKeyHandler("space", function (e) {
                // ...
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTileViewModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTileView :ref="myTileViewRef" />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTileView from 'devextreme-vue/tile-view';

    const myTileViewRef = 'my-tile-view';

    export default {
        components: {
            DxTileView
        },
        data() {
            return {
                myTileViewRef
            };
        },
        computed: {
            tileView: function() {
                return this.$refs[myTileViewRef].instance;
            }
        },
        mounted: function() {
            this.tileView.registerKeyHandler("backspace", function(e) {
                // The argument "e" contains information on the event
            });
            this.tileView.registerKeyHandler("space", function(e) {
                // ...
            });
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { TileView } from 'devextreme-react/tile-view';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.tileViewRef = React.createRef();
        }
        get tileView() {
            return this.tileViewRef.current.instance;
        }
        render() {
            return (
                <TileView ref={this.tileViewRef} />
            );
        }
        componentDidMount() {
            this.tileView.registerKeyHandler('backspace', function(e) {
                // The argument "e" contains information on the event
            });
            this.tileView.registerKeyHandler('space', function(e) {
                // ...
            });
        }
    }
    export default App;

---

#####See Also#####
#include common-link-callmethods
- [TileView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TileView/Overview)
- [TileView API Reference](/api-reference/10%20UI%20Widgets/dxTileView '/Documentation/ApiReference/UI_Widgets/dxTileView/')

[tags]tile view, tileView, accessibility, keyboard shortcuts