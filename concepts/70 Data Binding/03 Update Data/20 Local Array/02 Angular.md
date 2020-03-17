Ensure that one- or two-way binding is used to bind the **dataSource** option to the array. Then, use <a href="http://www.w3schools.com/js/js_array_methods.asp" target="_blank">standard methods</a> to change the array. This updates the widget automatically.


    <!-- tab: app.component.html -->
    <dx-chart ...
        [dataSource]="fruits">
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fruits = [
            { fruit: 'Apples', count: 10 },
            { fruit: 'Oranges', count: 12 },
            { fruit: 'Lemons', count: 15 }
        ];

        addPineapple() {
            this.fruits.push({ fruit: 'Pineapples', count: 3 });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

#####See Also#####
- [One-Way Option Binding](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/32%20One-Way%20Option%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#One-Way_Option_Binding')
- [Two-Way Option Binding](/concepts/40%20Angular%20Components/20%20Component%20Configuration%20Syntax/33%20Two-Way%20Option%20Binding.md '/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/#Two-Way_Option_Binding')
