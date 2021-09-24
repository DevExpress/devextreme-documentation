import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { Dx{WidgetName}Module } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        Dx{WidgetName}Module
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }