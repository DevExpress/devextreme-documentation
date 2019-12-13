Go to the `NgModule` in which you are going to use DevExtreme components and import the required DevExtreme modules. Note that if [tree shaking](/concepts/40%20Angular%20Components/40%20Common%20Features/10%20Tree%20Shaking.md '/Documentation/Guide/Angular_Components/Common_Features/Tree_Shaking/') is configured in your application, you can import the modules from `devextreme-angular`. Otherwise, you should import them from specific files. 

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

Now you can use the DevExtreme component in your application:

    <!-- tab: app.component.html -->
    <dx-button
        text="Click me"
        (onClick)="helloWorld()">
    </dx-button>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        helloWorld() {
            alert('Hello world!');
        }
    }
