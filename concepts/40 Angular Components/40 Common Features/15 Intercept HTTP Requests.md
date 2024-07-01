HTTP request interception in DevExtreme components might be useful for the following cases:

- Intercept errors to display more informative messages to a user.

- Inject an authentication token in the [Authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization).

- Log API requests and responses for debugging or usage analysis.

- Track upload progress and display a progress bar.

In Angular apps, you can use [HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor) to intercept Ajax requests in DevExtreme components such as [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'), [FileUploader](/api-reference/10%20UI%20Components/dxFileUploader '/Documentation/ApiReference/UI_Components/dxFileUploader/'), and [Map](/api-reference/10%20UI%20Components/dxMap '/Documentation/ApiReference/UI_Components/dxMap/'). This task requires that you import `DxHttpModule`.

[note] If you use `DxHttpModule`, Angular restricts access to [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). This means you cannot get the XHR object in functions such as ODataContext.[errorHandler](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/errorHandler.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#errorHandler'), FileManager.fileSystemProvider.[beforeAjaxSend](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/beforeAjaxSend.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeAjaxSend'), FileUploader.[onUploadStarted](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/onUploadStarted.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#onUploadStarted'), etc.

The following code snippet demonstrates how to intercept a request in DataSource:

---
##### Angular

    <!-- tab: app.component.ts -->
    import { Component, effect, signal } from '@angular/core';
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';
    import { DxTreeViewModule } from 'devextreme-angular';
    import { DxHttpModule } from 'devextreme-angular/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [],
        standalone: true,
        imports: [DxHttpModule, DxTreeViewModule],
    })
    export class AppComponent {
        title = 'DxHttpModule Example';
        dataSource = new DataSource({
            onLoadError: (error) => {
                if (error.message) {
                    this.loadError.set(error.message);
                }
            },
            store: new ODataStore({
                version: 2,
                url: 'http://www.example.com/Northwind.svc',
            }),
        });
        loadError = signal('');
        noDataText = '';

        constructor() {
            effect(() => {
                this.noDataText = this.loadError();
            });

            this.dataSource.load().then((data) => {
                console.log('DataSource is loaded:', data);
            });
        }
    }

    <!-- tab: interceptors.ts -->
    import { Injectable } from '@angular/core';
    import { throwError } from 'rxjs';
    import {
        HttpHandler,
        HttpInterceptor,
        HttpRequest,
    } from '@angular/common/http';

    @Injectable()
    export class LoggingInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            // to show that request is intercepted, a permission access error is raised
            return throwError(() => ({
                status: 403,
                statusText: 'Request intercepted. Access Denied',
            }));
            // return next.handle(req);
        }
    }

    <!-- tab: main.ts -->
    import { bootstrapApplication } from '@angular/platform-browser';
    import { AppComponent } from './app/app.component';
    import { HTTP_INTERCEPTORS } from '@angular/common/http';
    import { LoggingInterceptor } from './app/interceptors';

    bootstrapApplication(AppComponent, {
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
        ],
    });

---

[tags] angular