Splitter displays native scroll bars when pane content doesn't fit into the pane, for example, when resizing a pane.

You can hide native scroll bars and use a DevExtreme ScrollView component. This component includes extended scroll bar settings. For example, you can use different [scroll bar visibility modes](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/showScrollbar.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#showScrollbar'). For more information about the available options, refer to the [ScrollView API section](/api-reference/10%20UI%20Components/dxScrollView/1%20Configuration '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/').

The following live example demonstrates the basic implementation of the ScrollView component inside a Splitter pane:

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/UIWidgets/Splitter/scrolling/index.html, /Content/Applications/25_1/UIWidgets/Splitter/scrolling/index.js, /Content/Applications/25_1/UIWidgets/Splitter/scrolling/index.css"></div>

The next snippet contains the code for the example above. 

[note] To turn off native scroll bars, the CSS stylesheet includes `overflow: hidden;` for the pane class.

---
##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#splitter").dxSplitter({
            items: [
                {
                    text: "Pane 1",
                },
                {
                    splitter: {
                        orientation: "vertical",
                        items: [
                            {
                                text: "Pane 2",
                            },
                            {
                                template() {
                                    const htmlContent =
                                        "<div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque at justo non suscipit. Nulla non blandit dolor, non vulputate augue. Praesent at lectus mollis, consectetur ex id, congue tortor. Proin feugiat tempor iaculis. Maecenas in lectus eget magna pretium posuere. Integer ac pellentesque libero, a cursus orci. Morbi iaculis nisl in ex malesuada, eget pellentesque tellus aliquam. Sed in fermentum diam. Nulla lectus nunc, molestie eget mi eu, tincidunt cursus ipsum. Maecenas hendrerit commodo sem, quis tincidunt ipsum semper vitae. Vestibulum leo lectus, imperdiet ut luctus in, euismod id tellus. Integer gravida, sem sagittis egestas placerat, mi orci bibendum tellus, quis sodales sapien tellus ut neque.</div>";
                                    const $scrollView = $("<div/>");
                                    $scrollView.append($("<div/>").html(htmlContent));
                                    $scrollView.dxScrollView({
                                        width: "100%",
                                        height: "100%",
                                        direction: "both",
                                    });
                                    return $scrollView;
                                },
                            },
                        ],
                    },
                },
                {
                    text: "Pane 4",
                },
            ],
        });
    });

    <!-- tab: index.css -->
    .caption {
        width: 330px;
        height: 330px;
        border: dashed;
        padding: 5px;
    }

    #container {
        height: 400px;
    }

    .dx-item-content .dx-splitter-item-content {
        overflow: hidden; 
    }

    <!-- tab: index.html -->
    <div id="container">
        <div id="splitter"></div>
    </div>

##### Angular

    <!-- tab: app.component.html -->
    <container>
        <dx-splitter>
            <dxi-item text="Pane 1"></dxi-item>
            <dxi-item [resizable]="true">
                <dx-splitter orientation="vertical">
                    <dxi-item text="Pane 2"></dxi-item>
                    <dxi-item template="scrollableContent"></dxi-item>
                    <div *dxTemplate="let data of 'scrollableContent'">
                        <dx-scroll-view width="100%" height="100%" direction="both">
                            <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque at justo non suscipit. Nulla non blandit dolor, non vulputate augue. Praesent at lectus mollis, consectetur ex id, congue tortor. Proin feugiat tempor iaculis. Maecenas in lectus eget magna pretium posuere. Integer ac pellentesque libero, a cursus orci. Morbi iaculis nisl in ex malesuada, eget pellentesque tellus aliquam. Sed in fermentum diam. Nulla lectus nunc, molestie eget mi eu, tincidunt cursus ipsum. Maecenas hendrerit commodo sem, quis tincidunt ipsum semper vitae. Vestibulum leo lectus, imperdiet ut luctus in, euismod id tellus. Integer gravida, sem sagittis egestas placerat, mi orci bibendum tellus, quis sodales sapien tellus ut neque.</div>
                        </dx-scroll-view>
                    </div>
                </dx-splitter>
            </dxi-item>
            <dxi-item text="Pane 4"></dxi-item>
        </dx-splitter>
    </container>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxSplitterModule, DxScrollViewModule } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxSplitterModule,
            DxScrollViewModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    export class AppModule { }

    <!-- tab: app.component.css -->
    .caption {
        width: 330px;
        height: 330px;
        border: dashed;
        padding: 5px;
    }

    #container {
        height: 400px;
    }

    .dx-item-content .dx-splitter-item-content {
        overflow: hidden; 
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <container>
            <DxSplitter>
                <DxItem text="Pane 1" />
                <DxItem>
                    <DxSplitter orientation="vertical">
                        <DxItem text="Pane 2" />
                        <DxItem template="scrollableContent" />
                        <template #scrollableContent>
                            <DxScrollView width="100%" height="100%" direction="both">
                                <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque at justo non suscipit. Nulla non blandit dolor, non vulputate augue. Praesent at lectus mollis, consectetur ex id, congue tortor. Proin feugiat tempor iaculis. Maecenas in lectus eget magna pretium posuere. Integer ac pellentesque libero, a cursus orci. Morbi iaculis nisl in ex malesuada, eget pellentesque tellus aliquam. Sed in fermentum diam. Nulla lectus nunc, molestie eget mi eu, tincidunt cursus ipsum. Maecenas hendrerit commodo sem, quis tincidunt ipsum semper vitae. Vestibulum leo lectus, imperdiet ut luctus in, euismod id tellus. Integer gravida, sem sagittis egestas placerat, mi orci bibendum tellus, quis sodales sapien tellus ut neque.</div>
                            </DxScrollView>
                        </template>
                    </DxSplitter>
                </DxItem>
                <DxItem text="Pane 4" />
            </DxSplitter>
        </container>
    </template>

    <script setup>
        import { DxSplitter, DxItem } from 'devextreme-vue/splitter';
        import { DxScrollView } from 'devextreme-vue/scroll-view';
    </script>

    <style scoped>
        .caption {
            width: 330px;
            height: 330px;
            border: dashed;
            padding: 5px;
        }

        #container {
            height: 400px;
        }

        .dx-item-content .dx-splitter-item-content {
            overflow: hidden;
        }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Splitter, { Item } from 'devextreme-react/splitter';
    import ScrollView from 'devextreme-react/scroll-view';

    const App = () => (
    <React.Fragment>
        <container>
            <Splitter>
                <Item text="Pane 1" />
                <Item resizable={true}>
                    <Splitter orientation="vertical">
                        <Item text="Pane 2" />
                        <Item>
                            <ScrollView width="100%" height="100%" direction="both">
                                <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque at justo non suscipit. Nulla non blandit dolor, non vulputate augue. Praesent at lectus mollis, consectetur ex id, congue tortor. Proin feugiat tempor iaculis. Maecenas in lectus eget magna pretium posuere. Integer ac pellentesque libero, a cursus orci. Morbi iaculis nisl in ex malesuada, eget pellentesque tellus aliquam. Sed in fermentum diam. Nulla lectus nunc, molestie eget mi eu, tincidunt cursus ipsum. Maecenas hendrerit commodo sem, quis tincidunt ipsum semper vitae. Vestibulum leo lectus, imperdiet ut luctus in, euismod id tellus. Integer gravida, sem sagittis egestas placerat, mi orci bibendum tellus, quis sodales sapien tellus ut neque.</div>
                            </ScrollView>
                        </Item>
                    </Splitter>
                </Item>
                <Item text="Pane 4" />
            </Splitter>
        </container>
    </React.Fragment>
    );
    export default App;

    <!-- tab: styles.css -->
    .caption {
        width: 330px;
        height: 330px;
        border: dashed;
        padding: 5px;
    }

    #container {
        height: 400px;
    }

    .dx-item-content .dx-splitter-item-content {
        overflow: hidden; 
    }

---
