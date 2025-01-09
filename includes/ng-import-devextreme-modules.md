If you use [standalone](https://angular.dev/guide/components) components, import the modules as shown below:

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxButtonModule } from 'devextreme-angular';

    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [DxButtonModule],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent { }
    
If you use `NgModule`, import the DevExtreme modules as demonstrated in the following code snippet. If [tree shaking](/concepts/40%20Angular%20Components/40%20Common%20Features/10%20Tree%20Shaking.md '/Documentation/Guide/Angular_Components/Common_Features/Tree_Shaking/') is configured in your application, import the modules from `devextreme-angular`. If not, import them from files.

    <!-- tab: app.module.ts -->
    // ...
    import { DxButtonModule } from 'devextreme-angular';
    // or if tree shaking is not configured
    // import { DxButtonModule } from 'devextreme-angular/ui/button';

    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })
    export class AppModule { }

Now you can use the DevExtreme UI component in your application:

    <!-- tab: app.component.html -->
    <dx-button
        text="Click me"
        (onClick)="helloWorld()">
    </dx-button>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        helloWorld() {
            alert('Hello world!');
        }
    }
