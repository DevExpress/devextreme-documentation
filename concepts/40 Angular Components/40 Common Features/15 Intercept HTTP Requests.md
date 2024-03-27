To intercept Ajax requests in DevExtreme Angular components like [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), [FileUploader](/Documentation/ApiReference/UI_Components/dxFileUploader/), and [Map](/Documentation/ApiReference/UI_Components/dxMap/) with Angular [HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor), import additional `DxHttpModule`.

---
##### Angular

    <!-- tab: app.component.ts -->
    import DataSource from 'devextreme/data/data_source';
    import ODataStore from 'devextreme/data/odata/store';
    import { DxHttpModule } from 'devextreme-angular/http';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [],
        imports: [DxHttpModule],
    })

    export class AppComponent {
        dataSource = new DataSource({
            store: new ODataStore({
                version: 2,
                url: 'http://www.example.com/Northwind.svc',
            }),
        });

        constructor() {
            // ...
        }
    }

---