
To scroll through ScrollView content by a specified distance, call the [scrollBy(distance)](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollBy(distance).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollBydistance') method and pass a `Number` as a parameter. If you need to scroll in the opposite direction, the `distance` parameter should be a negative number.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 200
        }).dxScrollView("instance");

        $("#scrollUpButton").dxButton({
            text: "Scroll Up",
            onClick: function() {
                scrollView.scrollBy(-100);
            }
        });

        $("#scrollDownButton").dxButton({
            text: "Scroll Down",
            onClick: function() {
                scrollView.scrollBy(100);
            }
        });
    });

    <!--HTML-->
    <div id="scrollUpButton"></div>
    <div id="scrollDownButton"></div>
    <div id="scrollViewContainer">Content</div>

##### Angular

    <!--HTML-->
    <dx-button 
        text="Scroll Up"
        (onClick)="scrollUp()">
    </dx-button>
    <dx-button
        text="Scroll Down"
        (onClick)="scrollDown()">
    </dx-button>
    <dx-scroll-view
        [height]="200">
        <div>Content</div>
    </dx-scroll-view>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxScrollViewModule, DxScrollViewComponent, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

        scrollUp() {
            this.scrollView.instance.scrollBy(-100);
        }

        scrollDown() { 
            this.scrollView.instance.scrollBy(100); 
        }
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton
                text="Scroll Up"
                @click="scrollUp">
            </DxButton>
            <DxButton
                text="Scroll Down"
                @click="scrollDown">
            </DxButton>
            <DxScrollView
                :ref="myScrollViewRef"
                :height="200">
                <div>Content</div>
            </DxScrollView>
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxButton } from 'devextreme-vue';
    import { DxScrollView } from 'devextreme-vue/scroll-view';

    const myScrollViewRef = 'my-scroll-view';

    export default {
        components: {
            DxButton,
            DxScrollView
        },
        data() {
            return {
                myScrollViewRef
            }
        },
        methods: {
            scrollUp() {
                this.scrollView.scrollBy(-100);
            }
            scrollDown() {
                this.scrollView.scrollBy(100);
            }
        },
        computed: {
            scrollView: function() {
                return this.$refs[myScrollViewRef].instance;
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react';
    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.scrollViewRef = React.createRef();
        }

        get scrollView() {
            return this.scrollViewRef.current.instance();
        }

        render() {
            return (
                <Button
                    text="Scroll Up"
                    onClick={this.scrollUp}>
                </Button>
                 <Button
                    text="Scroll Down"
                    onClick={this.scrollDown}>
                </Button>
                <ScrollView
                    ref={this.scrollViewRef}
                    height={200}>
                    <div>Content</div>
                </ScrollView>
            );
        }

        scrollUp = () => {
            this.scrollView.scrollBy(-100);
        }

        scrollDown = () => {
            this.scrollView.scrollBy(100);
        }
    }

    export default App;

---


To scroll content vertically and horizontally, call the [scrollBy(distance)](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollBy(distance).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollBydistance') method with an object as an argument. The format of the object is the following: { left: *value1*, top: *value2* }. In this case, set the [direction](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#direction') property to *"both"*:


---

##### jQuery

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 200,
            width: 100,
            direction: "both"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function() {
                scrollView.scrollBy({ left: 100, top: 100 });
            }
        });
    });

    <!--HTML-->
    <div id="scrollButton"></div>
    <div id="scrollViewContainer">Content</div>

##### Angular

    <!--HTML-->
    <dx-button 
        text="Scroll"
        (onClick)="scroll()">
    </dx-button>
    <dx-scroll-view
        [height]="200"
        [width]="100"
        direction="both">
        <div>Content</div>
    </dx-scroll-view>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxScrollViewModule, DxScrollViewComponent, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

        scroll() {
            this.scrollView.instance.scrollBy({ left: 100, top: 100 });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton
                text="Scroll"
                @click="scroll">
            </DxButton>
            <DxScrollView
                :ref="myScrollViewRef"
                :height="200"
                :width="100"
                direction="both">
                <div>Content</div>
            </DxScrollView>
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxButton } from 'devextreme-vue';
    import { DxScrollView } from 'devextreme-vue/scroll-view';

    const myScrollViewRef = 'my-scroll-view';

    export default {
        components: {
            DxButton,
            DxScrollView
        },
        data() {
            return {
                myScrollViewRef
            }
        },
        methods: {
            scroll() {
                this.scrollView.scrollBy({ left: 100, top: 100 });
            }
        },
        computed: {
            scrollView: function() {
                return this.$refs[myScrollViewRef].instance;
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react';
    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.scrollViewRef = React.createRef();
        }

        get scrollView() {
            return this.scrollViewRef.current.instance();
        }

        render() {
            return (
                <Button
                    text="Scroll"
                    onClick={this.scroll}>
                </Button>
                <ScrollView
                    ref={this.scrollViewRef}
                    height={200}
                    width={100}
                    direction="both">
                    <div>Content</div>
                </ScrollView>
            );
        }

        scroll = () => {
            this.scrollView.scrollBy({ left: 100, top: 100 });
        }
    }

    export default App;

---

To scroll the content to a specific position, call the [scrollTo(targetLocation)](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollTo(targetLocation).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollTotargetLocation') method. Just like the **scrollBy()** method from the previous examples, the **scrollTo()** method accepts either a numeric value (when [directon](/api-reference/10%20UI%20Components/dxScrollable/1%20Configuration/direction.md '/Documentation/ApiReference/UI_Components/dxScrollView/Configuration/#direction') is *"left"* or *"right"*) or an object (when **direction** is *"both"*). The object should have the following format: { left: *value1*, top: *value2* }. Note that the top left corner of the ScrollView has the { left: 0, top: 0 } coordinates.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 200,
            width: 100,
            direction: "vertical"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function() {
                scrollView.scrollTo(300);
            }
        });
    });

    <!--HTML-->
    <div id="scrollButton"></div>
    <div id="scrollViewContainer">Content</div>

##### Angular

    <!--HTML-->
    <dx-button 
        text="Scroll"
        (onClick)="scroll()">
    </dx-button>
    <dx-scroll-view
        [height]="200"
        [width]="100"
        direction="vertical">
        <div>Content</div>
    </dx-scroll-view>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxScrollViewModule, DxScrollViewComponent, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

        scroll() {
            this.scrollView.instance.scrollTo(300);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton
                text="Scroll"
                @click="scroll">
            </DxButton>
            <DxScrollView
                :ref="myScrollViewRef"
                :height="200"
                :width="100"
                direction="vertical">
                <div>Content</div>
            </DxScrollView>
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxButton } from 'devextreme-vue';
    import { DxScrollView } from 'devextreme-vue/scroll-view';

    const myScrollViewRef = 'my-scroll-view';

    export default {
        components: {
            DxButton,
            DxScrollView
        },
        data() {
            return {
                myScrollViewRef
            }
        },
        methods: {
            scroll() {
                this.scrollView.scrollTo(300);
            }
        },
        computed: {
            scrollView: function() {
                return this.$refs[myScrollViewRef].instance;
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react';
    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.scrollViewRef = React.createRef();
        }

        get scrollView() {
            return this.scrollViewRef.current.instance();
        }

        render() {
            return (
                <Button
                    text="Scroll"
                    onClick={this.scroll}>
                </Button>
                <ScrollView
                    ref={this.scrollViewRef}
                    height={200}
                    width={100}
                    direction="vertical">
                    <div>Content</div>
                </ScrollView>
            );
        }

        scroll = () => {
            this.scrollView.scrollTo(300);
        }
    }

    export default App;

---

To scroll content to a specific element, call the [scrollToElement(element)](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollToElement(element).md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollToElementelement') method. 

---

##### jQuery

    <!--HTML-->
    <div id="scrollButton"></div>
    <div id="scrollViewContainer">
        <!-- Here goes long content -->
        <div id="end"></div>
    </div>

    <!--JavaScript-->
    $(function() {
        var scrollView = $("#scrollViewContainer").dxScrollView({
            height: 200,
            width: 100,
            direction: "vertical"
        }).dxScrollView("instance");

        $("#scrollButton").dxButton({
            text: "Scroll",
            onClick: function() {
                // Scrolls the content to the element with the "end" id
                scrollView.scrollToElement($("#end"));
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button 
        text="Scroll"
        (onClick)="scroll()">
    </dx-button>
    <dx-scroll-view
        [height]="200"
        [width]="100"
        direction="vertical">
        <!-- Here goes long content -->
        <div id="end"></div>
    </dx-scroll-view>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxScrollViewModule, DxScrollViewComponent, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;
        // Prior to Angular 8
        // @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

        scroll() {
            // Scrolls the content to the element with the "end" id
            this.scrollView.instance.scrollToElement(document.querySelector('#end'));
        }
    }
    @NgModule({
        imports: [
            // ...
            DxScrollViewModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxButton
                text="Scroll"
                @click="scroll">
            </DxButton>
            <DxScrollView
                :ref="myScrollViewRef"
                :height="200"
                :width="100"
                direction="vertical">
                <!-- Here goes long content -->
                <div id="end"></div>
            </DxScrollView>
        </div>
    </template>
    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxButton } from 'devextreme-vue';
    import { DxScrollView } from 'devextreme-vue/scroll-view';

    const myScrollViewRef = 'my-scroll-view';

    export default {
        components: {
            DxButton,
            DxScrollView
        },
        data() {
            return {
                myScrollViewRef
            }
        },
        methods: {
            scroll() {
                // Scrolls the content to the element with the "end" id
                this.scrollView.scrollToElement(document.querySelector('#end'));
            }
        },
        computed: {
            scrollView: function() {
                return this.$refs[myScrollViewRef].instance;
            }
        }
    };
    </script>

##### React

    <!--tab: App.js-->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Button } from 'devextreme-react';
    import { ScrollView } from 'devextreme-react/scroll-view';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.scrollViewRef = React.createRef();
        }

        get scrollView() {
            return this.scrollViewRef.current.instance();
        }

        render() {
            return (
                <Button
                    text="Scroll"
                    onClick={this.scroll}>
                </Button>
                <ScrollView
                    ref={this.scrollViewRef}
                    height={200}
                    width={100}
                    direction="vertical">
                    {/* Here goes long content */}
                    <div id="end"></div>
                </ScrollView>
            );
        }

        scroll = () => {
            // Scrolls the content to the element with the "end" id
            this.scrollView.scrollToElement(document.querySelector('#end'));
        }
    }

    export default App;

---

To get the current scroll position against the top left corner, call the [scrollOffset()](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollOffset().md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollOffset') method. It returns an object of the following format: { top: *topScrollOffset*, left: *leftScrollOffset* }. If you need to get only the top or left scroll offset, use the [scrollTop()](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollTop().md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollTop') and [scrollLeft()](/api-reference/10%20UI%20Components/dxScrollable/3%20Methods/scrollLeft().md '/Documentation/ApiReference/UI_Components/dxScrollView/Methods/#scrollLeft') methods, respectively.

#####See Also#####
- [ScrollView - Handle Scroll Gestures](/concepts/05%20UI%20Components/ScrollView/10%20Handle%20Scroll%20Gestures.md '/Documentation/Guide/UI_Components/ScrollView/Handle_Scroll_Gestures/')
- [ScrollView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/ScrollView/Overview)
- [ScrollView API Reference](/api-reference/10%20UI%20Components/dxScrollView '/Documentation/ApiReference/UI_Components/dxScrollView/')
