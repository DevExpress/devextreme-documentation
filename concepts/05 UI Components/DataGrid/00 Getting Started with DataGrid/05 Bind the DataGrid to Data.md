The DataGrid component can load and update data from different data source types. To use a local array, assign it to the [dataSource](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#dataSource') property and specify the key field in the [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr') property. If you want to use another data source type, refer to one of the following articles:

- [Read-Only Data in JSON Format](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/20%20Read-Only%20Data%20in%20JSON%20Format.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/')
- [Web API, PHP, MongoDB](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/')
- [OData](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/40%20OData.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/')
- [Custom Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/60%20Custom%20Data%20Sources '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/')

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            dataSource: employees,
            keyExpr: "EmployeeID",
        });
    });

    <!-- tab: data.js -->
    const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 2,
        "FullName": "Andrew Fuller",
        "Position": "Vice President, Sales",
        "TitleOfCourtesy": "Dr.",
        "BirthDate": "1972-02-19T00:00:00.000Z",
        "HireDate": "2011-08-14T00:00:00.000Z",
        "Address": "908 W. Capital Way",
        "City": "Tacoma",
        "Region": "WA",
        "PostalCode": "98401",
        "Country": "USA",
        "HomePhone": "(206) 555-9482",
        "Extension": "3457",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
        "Notes": "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
        "ReportsTo": null
    }, {
        "EmployeeID": 3,
        "FullName": "Janet Leverling",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1983-08-30T00:00:00.000Z",
        "HireDate": "2011-04-01T00:00:00.000Z",
        "Address": "722 Moss Bay Blvd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
        "Notes": "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 4,
        "FullName": "Margaret Peacock",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mrs.",
        "BirthDate": "1957-09-19T00:00:00.000Z",
        "HireDate": "2012-05-03T00:00:00.000Z",
        "Address": "4110 Old Redmond Rd.",
        "City": "Redmond",
        "Region": "WA",
        "PostalCode": "98052",
        "Country": "USA",
        "HomePhone": "(206) 555-8122",
        "Extension": "5176",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
        "Notes": "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 5,
        "FullName": "Steven Buchanan",
        "Position": "Sales Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1975-03-04T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "14 Garrett Hill",
        "City": "London",
        "Region": "UK",
        "PostalCode": "SW1 8JR",
        "Country": "UK",
        "HomePhone": "(71) 555-4848",
        "Extension": "3453",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
        "Notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses \"Successful Telemarketing\" and \"International Sales Management.\"  He is fluent in French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 6,
        "FullName": "Michael Suyama",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1983-07-02T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "Coventry House\r\nMiner Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "EC2 7JR",
        "Country": "UK",
        "HomePhone": "(71) 555-7773",
        "Extension": "428",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
        "Notes": "Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses \"Multi-Cultural Selling\" and \"Time Management for the Sales Professional.\"  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 7,
        "FullName": "Robert King",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1980-05-29T00:00:00.000Z",
        "HireDate": "2012-01-02T00:00:00.000Z",
        "Address": "Edgeham Hollow\r\nWinchester Way",
        "City": "London",
        "Region": "UK",
        "PostalCode": "RG1 9SP",
        "Country": "UK",
        "HomePhone": "(71) 555-5598",
        "Extension": "465",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
        "Notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled \"Selling in Europe,\" he was transferred to the London office in March 2013.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 8,
        "FullName": "Laura Callahan",
        "Position": "Inside Sales Coordinator",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1978-01-09T00:00:00.000Z",
        "HireDate": "2012-03-05T00:00:00.000Z",
        "Address": "4726 - 11th Ave. N.E.",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98105",
        "Country": "USA",
        "HomePhone": "(206) 555-1189",
        "Extension": "2344",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
        "Notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 9,
        "FullName": "Brett Wade",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1986-01-27T00:00:00.000Z",
        "HireDate": "2012-11-15T00:00:00.000Z",
        "Address": "7 Houndstooth Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "WG2 7LT",
        "Country": "UK",
        "HomePhone": "(71) 555-4444",
        "Extension": "452",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
        "Notes": "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
        "ReportsTo": 5
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid
        [dataSource]="employees"
        keyExpr="EmployeeID">
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { Employee, EmployeesService } from './employees.service';

    #include angular-component-decorator
    export class AppComponent {
        employees: Employee[] = [];

        constructor(service: EmployeesService) {
            this.employees = service.getEmployees();
        }
    }

    <!-- tab: employees.service.ts -->
    import { Injectable } from '@angular/core';

    export interface Employee {
        EmployeeID: Number,
        FullName: String,
        Position: String,
        TitleOfCourtesy: String,
        BirthDate: String,
        HireDate: String,
        Address: String,
        City: String,
        Region: String,
        PostalCode: String,
        Country: String,
        HomePhone: String,
        Extension: String,
        Photo: String,
        Notes: String,
        ReportsTo: Number
    }

    const employees: Employee[] = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 2,
        "FullName": "Andrew Fuller",
        "Position": "Vice President, Sales",
        "TitleOfCourtesy": "Dr.",
        "BirthDate": "1972-02-19T00:00:00.000Z",
        "HireDate": "2011-08-14T00:00:00.000Z",
        "Address": "908 W. Capital Way",
        "City": "Tacoma",
        "Region": "WA",
        "PostalCode": "98401",
        "Country": "USA",
        "HomePhone": "(206) 555-9482",
        "Extension": "3457",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
        "Notes": "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
        "ReportsTo": null
    }, {
        "EmployeeID": 3,
        "FullName": "Janet Leverling",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1983-08-30T00:00:00.000Z",
        "HireDate": "2011-04-01T00:00:00.000Z",
        "Address": "722 Moss Bay Blvd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
        "Notes": "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 4,
        "FullName": "Margaret Peacock",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mrs.",
        "BirthDate": "1957-09-19T00:00:00.000Z",
        "HireDate": "2012-05-03T00:00:00.000Z",
        "Address": "4110 Old Redmond Rd.",
        "City": "Redmond",
        "Region": "WA",
        "PostalCode": "98052",
        "Country": "USA",
        "HomePhone": "(206) 555-8122",
        "Extension": "5176",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
        "Notes": "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 5,
        "FullName": "Steven Buchanan",
        "Position": "Sales Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1975-03-04T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "14 Garrett Hill",
        "City": "London",
        "Region": "UK",
        "PostalCode": "SW1 8JR",
        "Country": "UK",
        "HomePhone": "(71) 555-4848",
        "Extension": "3453",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
        "Notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses \"Successful Telemarketing\" and \"International Sales Management.\"  He is fluent in French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 6,
        "FullName": "Michael Suyama",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1983-07-02T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "Coventry House\r\nMiner Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "EC2 7JR",
        "Country": "UK",
        "HomePhone": "(71) 555-7773",
        "Extension": "428",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
        "Notes": "Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses \"Multi-Cultural Selling\" and \"Time Management for the Sales Professional.\"  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 7,
        "FullName": "Robert King",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1980-05-29T00:00:00.000Z",
        "HireDate": "2012-01-02T00:00:00.000Z",
        "Address": "Edgeham Hollow\r\nWinchester Way",
        "City": "London",
        "Region": "UK",
        "PostalCode": "RG1 9SP",
        "Country": "UK",
        "HomePhone": "(71) 555-5598",
        "Extension": "465",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
        "Notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled \"Selling in Europe,\" he was transferred to the London office in March 2013.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 8,
        "FullName": "Laura Callahan",
        "Position": "Inside Sales Coordinator",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1978-01-09T00:00:00.000Z",
        "HireDate": "2012-03-05T00:00:00.000Z",
        "Address": "4726 - 11th Ave. N.E.",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98105",
        "Country": "USA",
        "HomePhone": "(206) 555-1189",
        "Extension": "2344",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
        "Notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 9,
        "FullName": "Brett Wade",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1986-01-27T00:00:00.000Z",
        "HireDate": "2012-11-15T00:00:00.000Z",
        "Address": "7 Houndstooth Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "WG2 7LT",
        "Country": "UK",
        "HomePhone": "(71) 555-4444",
        "Extension": "452",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
        "Notes": "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
        "ReportsTo": 5
    }];

    @Injectable({
        providedIn: 'root'
    })
    export class EmployeesService {
        getEmployees(): Employee[] {
            return employees;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div id="app-container">
            <DxDataGrid
                :data-source="employees"
                key-expr="EmployeeID">
            </DxDataGrid>
        </div>
    </template>

    <script>
    // ...
    import service from './employees.service';

    export default {
        // ...
        data() {
            return {
                employees: service.getEmployees(),
            }
        },
    }
    </script>

    <!-- tab: employees.service.js -->
    const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 2,
        "FullName": "Andrew Fuller",
        "Position": "Vice President, Sales",
        "TitleOfCourtesy": "Dr.",
        "BirthDate": "1972-02-19T00:00:00.000Z",
        "HireDate": "2011-08-14T00:00:00.000Z",
        "Address": "908 W. Capital Way",
        "City": "Tacoma",
        "Region": "WA",
        "PostalCode": "98401",
        "Country": "USA",
        "HomePhone": "(206) 555-9482",
        "Extension": "3457",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
        "Notes": "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
        "ReportsTo": null
    }, {
        "EmployeeID": 3,
        "FullName": "Janet Leverling",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1983-08-30T00:00:00.000Z",
        "HireDate": "2011-04-01T00:00:00.000Z",
        "Address": "722 Moss Bay Blvd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
        "Notes": "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 4,
        "FullName": "Margaret Peacock",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mrs.",
        "BirthDate": "1957-09-19T00:00:00.000Z",
        "HireDate": "2012-05-03T00:00:00.000Z",
        "Address": "4110 Old Redmond Rd.",
        "City": "Redmond",
        "Region": "WA",
        "PostalCode": "98052",
        "Country": "USA",
        "HomePhone": "(206) 555-8122",
        "Extension": "5176",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
        "Notes": "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 5,
        "FullName": "Steven Buchanan",
        "Position": "Sales Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1975-03-04T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "14 Garrett Hill",
        "City": "London",
        "Region": "UK",
        "PostalCode": "SW1 8JR",
        "Country": "UK",
        "HomePhone": "(71) 555-4848",
        "Extension": "3453",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
        "Notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses \"Successful Telemarketing\" and \"International Sales Management.\"  He is fluent in French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 6,
        "FullName": "Michael Suyama",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1983-07-02T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "Coventry House\r\nMiner Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "EC2 7JR",
        "Country": "UK",
        "HomePhone": "(71) 555-7773",
        "Extension": "428",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
        "Notes": "Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses \"Multi-Cultural Selling\" and \"Time Management for the Sales Professional.\"  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 7,
        "FullName": "Robert King",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1980-05-29T00:00:00.000Z",
        "HireDate": "2012-01-02T00:00:00.000Z",
        "Address": "Edgeham Hollow\r\nWinchester Way",
        "City": "London",
        "Region": "UK",
        "PostalCode": "RG1 9SP",
        "Country": "UK",
        "HomePhone": "(71) 555-5598",
        "Extension": "465",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
        "Notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled \"Selling in Europe,\" he was transferred to the London office in March 2013.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 8,
        "FullName": "Laura Callahan",
        "Position": "Inside Sales Coordinator",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1978-01-09T00:00:00.000Z",
        "HireDate": "2012-03-05T00:00:00.000Z",
        "Address": "4726 - 11th Ave. N.E.",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98105",
        "Country": "USA",
        "HomePhone": "(206) 555-1189",
        "Extension": "2344",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
        "Notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 9,
        "FullName": "Brett Wade",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1986-01-27T00:00:00.000Z",
        "HireDate": "2012-11-15T00:00:00.000Z",
        "Address": "7 Houndstooth Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "WG2 7LT",
        "Country": "UK",
        "HomePhone": "(71) 555-4444",
        "Extension": "452",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
        "Notes": "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
        "ReportsTo": 5
    }];

    export default {
        getEmployees() {
            return employees;
        }
    }

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import {
        DataGrid
    } from 'devextreme-react/data-grid';
    import { employees } from './employees';

    function App() {
        return (
            <div className="App">
                <DataGrid
                    dataSource={employees}
                    keyExpr="EmployeeID">
                </DataGrid>
            </div>
        );
    }

    export default App;

    <!-- tab: employees.js -->
    export const employees = [{
        "EmployeeID": 1,
        "FullName": "Nancy Davolio",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1968-12-08T00:00:00.000Z",
        "HireDate": "2011-05-01T00:00:00.000Z",
        "Address": "507 - 20th Ave. E.\r\nApt. 2A",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98122",
        "Country": "USA",
        "HomePhone": "(206) 555-9857",
        "Extension": "5467",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png",
        "Notes": "Education includes a BA in psychology from Colorado State University in 1990.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 2,
        "FullName": "Andrew Fuller",
        "Position": "Vice President, Sales",
        "TitleOfCourtesy": "Dr.",
        "BirthDate": "1972-02-19T00:00:00.000Z",
        "HireDate": "2011-08-14T00:00:00.000Z",
        "Address": "908 W. Capital Way",
        "City": "Tacoma",
        "Region": "WA",
        "PostalCode": "98401",
        "Country": "USA",
        "HomePhone": "(206) 555-9482",
        "Extension": "3457",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png",
        "Notes": "Andrew received his BTS commercial in 1994 and a Ph.D. in international marketing from the University of Dallas in 2001.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 2012 and to vice president of sales in March 2013.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
        "ReportsTo": null
    }, {
        "EmployeeID": 3,
        "FullName": "Janet Leverling",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1983-08-30T00:00:00.000Z",
        "HireDate": "2011-04-01T00:00:00.000Z",
        "Address": "722 Moss Bay Blvd.",
        "City": "Kirkland",
        "Region": "WA",
        "PostalCode": "98033",
        "Country": "USA",
        "HomePhone": "(206) 555-3412",
        "Extension": "3355",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png",
        "Notes": "Janet has a BS degree in chemistry from Boston College (2004).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 2011 and promoted to sales representative in February 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 4,
        "FullName": "Margaret Peacock",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mrs.",
        "BirthDate": "1957-09-19T00:00:00.000Z",
        "HireDate": "2012-05-03T00:00:00.000Z",
        "Address": "4110 Old Redmond Rd.",
        "City": "Redmond",
        "Region": "WA",
        "PostalCode": "98052",
        "Country": "USA",
        "HomePhone": "(206) 555-8122",
        "Extension": "5176",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png",
        "Notes": "Margaret holds a BA in English literature from Concordia College (1978) and an MA from the American Institute of Culinary Arts (1986).  She was assigned to the London office temporarily from July through November 2012.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 5,
        "FullName": "Steven Buchanan",
        "Position": "Sales Manager",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1975-03-04T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "14 Garrett Hill",
        "City": "London",
        "Region": "UK",
        "PostalCode": "SW1 8JR",
        "Country": "UK",
        "HomePhone": "(71) 555-4848",
        "Extension": "3453",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png",
        "Notes": "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1996.  Upon joining the company as a sales representative in 2012, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 2013.  Mr. Buchanan has completed the courses \"Successful Telemarketing\" and \"International Sales Management.\"  He is fluent in French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 6,
        "FullName": "Michael Suyama",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1983-07-02T00:00:00.000Z",
        "HireDate": "2012-10-17T00:00:00.000Z",
        "Address": "Coventry House\r\nMiner Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "EC2 7JR",
        "Country": "UK",
        "HomePhone": "(71) 555-7773",
        "Extension": "428",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
        "Notes": "Michael is a graduate of Sussex University (MA, economics, 2003) and the University of California at Los Angeles (MBA, marketing, 2006). He has also taken the courses \"Multi-Cultural Selling\" and \"Time Management for the Sales Professional.\"  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 7,
        "FullName": "Robert King",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1980-05-29T00:00:00.000Z",
        "HireDate": "2012-01-02T00:00:00.000Z",
        "Address": "Edgeham Hollow\r\nWinchester Way",
        "City": "London",
        "Region": "UK",
        "PostalCode": "RG1 9SP",
        "Country": "UK",
        "HomePhone": "(71) 555-5598",
        "Extension": "465",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png",
        "Notes": "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 2002, the year he joined the company.  After completing a course entitled \"Selling in Europe,\" he was transferred to the London office in March 2013.",
        "ReportsTo": 5
    }, {
        "EmployeeID": 8,
        "FullName": "Laura Callahan",
        "Position": "Inside Sales Coordinator",
        "TitleOfCourtesy": "Ms.",
        "BirthDate": "1978-01-09T00:00:00.000Z",
        "HireDate": "2012-03-05T00:00:00.000Z",
        "Address": "4726 - 11th Ave. N.E.",
        "City": "Seattle",
        "Region": "WA",
        "PostalCode": "98105",
        "Country": "USA",
        "HomePhone": "(206) 555-1189",
        "Extension": "2344",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png",
        "Notes": "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
        "ReportsTo": 2
    }, {
        "EmployeeID": 9,
        "FullName": "Brett Wade",
        "Position": "Sales Representative",
        "TitleOfCourtesy": "Mr.",
        "BirthDate": "1986-01-27T00:00:00.000Z",
        "HireDate": "2012-11-15T00:00:00.000Z",
        "Address": "7 Houndstooth Rd.",
        "City": "London",
        "Region": "UK",
        "PostalCode": "WG2 7LT",
        "Country": "UK",
        "HomePhone": "(71) 555-4444",
        "Extension": "452",
        "Photo": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png",
        "Notes": "Brett has a BA degree in English from St. Lawrence College.  He is fluent in French and German.",
        "ReportsTo": 5
    }];

---

If you run this code, a DataGrid is created with a column for each data field. All the columns have equal widths and the same order as their data fields.

[tags] data binding