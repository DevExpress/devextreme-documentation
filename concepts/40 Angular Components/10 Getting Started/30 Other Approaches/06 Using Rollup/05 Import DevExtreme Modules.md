Import the required DevExtreme modules *after* the stylesheets in the same `NgModule`. Note that because DevExtreme modules <a href="https://github.com/DevExpress/devextreme-angular/issues/353" target="_blank">do not support tree shaking</a> with Rollup, you should import the modules from specific files (as shown below) rather than from the main `devextreme-angular` module.

    <!-- tab: app.module.ts -->
    // ...
    // DevExtreme stylesheets are imported here
    // ...
    import { DxButtonModule } from 'devextreme-angular/ui/button';

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
