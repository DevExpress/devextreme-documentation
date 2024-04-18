Use CSS rules to make a full page Splitter layout:

---
##### jQuery

    <!-- tab: index.css -->
    #splitter {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    <!-- tab: index.html -->
    <div id="splitter"></div>

##### Angular

    <!-- tab: app.component.css -->
    ::ng-deep #splitter {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    <!-- tab: app.component.html -->
    <dx-splitter id="splitter">
        <!-- ... -->
    </dx-splitter>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSplitter class="splitter">
            <!-- ... -->
        </DxSplitter>
    </template>

    <style>
        .splitter {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    </style>

##### React

    <!-- tab: styles.css -->
    #splitter {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    <!-- tab: App.js -->
    const App = () => (
        <React.Fragment>
            <Splitter id="splitter">
                <!-- ... -->
            </Splitter>
        </React.Fragment>
    );
    export default App;

---