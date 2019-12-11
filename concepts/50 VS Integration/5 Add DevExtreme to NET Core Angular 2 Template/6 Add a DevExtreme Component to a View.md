After you have performed all the steps described above, you can add DevExtreme controls on application views. To see how this works, replace the existing table in the "ClientApp/app/components/fetchdata/fetchdata.component.html" file with the DevExtreme data grid.

    <dx-data-grid [dataSource]="forecasts"></dx-data-grid>

For more information on working with DevExtreme controls in an Angular 2 approach, refer to the [DevExtreme-Angular library description](https://github.com/DevExpress/devextreme-angular).