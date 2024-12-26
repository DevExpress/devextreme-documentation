---
##### jQuery

[Add DevExtreme to your jQuery application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/') and use the following code to create a Scheduler:

    <!-- tab: index.js -->
    $(function() { 
        $("#scheduler").dxScheduler({
            // Configuration goes here
        });
    });

    <!-- tab: index.html -->
    <html>
        <head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_25_1/css/dx.light.css" />
            <link rel="stylesheet" href="index.css">

            <script src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
            <script src="index.js"></script>
        </head>
        <body class="dx-viewport">
            <div id="scheduler"></div>
        </body>
    </html>

    <!-- tab: index.css -->
    #scheduler {
        height: 600px;
    }

##### Angular 

[Add DevExtreme to your Angular application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/') and use the following code to create a Scheduler:

    <!-- tab: app.component.html -->
    <dx-scheduler id="scheduler">
        <!-- Configuration goes here -->
    </dx-scheduler> 

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core'; 

    @Component({ 
        selector: 'app-root', 
        templateUrl: './app.component.html', 
        styleUrls: ['./app.component.css'] 
    }) 
    export class AppComponent { 

    } 

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser'; 
    import { NgModule } from '@angular/core'; 
    import { AppComponent } from './app.component'; 
    import { DxSchedulerModule } from 'devextreme-angular'; 

    @NgModule({ 
        declarations: [ 
            AppComponent 
        ], 
        imports: [ 
            BrowserModule, 
            DxSchedulerModule
        ], 
        providers: [ ], 
        bootstrap: [AppComponent] 
    }) 
    export class AppModule { }

    <!-- tab: app.component.css -->
    #scheduler {
        height: 600px;
    }

##### Vue 

[Add DevExtreme to your Vue application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/') and use the following code to create a Scheduler:

    <!-- tab: App.vue -->
    <template> 
        <DxScheduler id="scheduler>
            <!-- Configuration goes here -->
        </DxScheduler>
    </template> 

    <script>  
    import 'devextreme/dist/css/dx.light.css'; 

    import { DxScheduler } from 'devextreme-vue/scheduler'; 

    export default { 
        components: {
            DxScheduler,
        }
    } 
    </script>

    <style>
    #scheduler {
        height: 600px;
    }
    </style>

##### React 

[Add DevExtreme to your React application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/') and use the following code to create a Scheduler:

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';
    import './App.css';

    import { Scheduler } from 'devextreme-react/scheduler';

    function App() {
        return (
            <Scheduler id="scheduler">
                {/* Configuration goes here */}
            </Scheduler>
        );
    }

    export default App;

    <!-- tab: App.css -->
    #scheduler {
        height: 600px;
    }

---
