---
module: ui/form
export: default
inherits: ..\Widget\Widget.md
---
---
##### widgettree
formData: {
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsite.com"
}

##### lib
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Form** widget represents fields of a data object as a collection of label-editor pairs. These pairs can be arranged in several groups, tabs and columns.

---
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/')  

    <!--JavaScript-->
    var companyData = {
        id: 1,
        name: "Super Mart of the West",
        city: "Bentonville",
        state: "Arkansas",
        zip: 72716,
        phone: "(800) 555-2797",
        fax: "(800) 555-2171",
        website: "http://www.nowebsite.com"
    };
    $(function () {
        $("#form").dxForm({
            formData: companyData,
            items: [
                "name", {
                    itemType: "group",
                    caption: "Location",
                    items: ["city", "state", "zip"]
                }, {
                    itemType: "group",
                    caption: "Contacts",
                    items: ["phone", "fax", "website"]
                }
            ]
        });
    });

    <!--HTML--><div id="form"></div>

#####[**Angular**](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/')  

    <!--HTML-->
    <dx-form
        [formData]="companyData">
        <dxi-item datafield="name"></dxi-item>
        <dxi-item
            itemType="group"
            caption="Location">
            <dxi-item dataField="city"></dxi-item>
            <dxi-item dataField="state"></dxi-item>
            <dxi-item dataField="zip"></dxi-item>
        </dxi-item>
        <dxi-item
            itemType="group"
            caption="Contacts">
            <dxi-item dataField="phone"></dxi-item>
            <dxi-item dataField="fax"></dxi-item>
            <dxi-item dataField="website"></dxi-item>
        </dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        companyData = {
            id: 1,
            name: "Super Mart of the West",
            city: "Bentonville",
            state: "Arkansas",
            zip: 72716,
            phone: "(800) 555-2797",
            fax: "(800) 555-2171",
            website: "http://www.nowebsite.com"
        };
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

#####[**AngularJS**](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/')  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-form="{
            formData: companyData,
            items: [
                'name', {
                    itemType: 'group',
                    caption: 'Location',
                    items: ['city', 'state', 'zip']
                }, {
                    itemType: 'group',
                    caption: 'Contacts',
                    items: ['phone', 'fax', 'website']
                }
            ]
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.companyData = {
                id: 1,
                name: "Super Mart of the West",
                city: "Bentonville",
                state: "Arkansas",
                zip: 72716,
                phone: "(800) 555-2797",
                fax: "(800) 555-2171",
                website: "http://www.nowebsite.com"
            };
        });

#####[**Knockout**](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/')  

    <!--HTML--><div data-bind="dxForm: {
        formData: companyData,
        items: [
            'name', {
                itemType: 'group',
                caption: 'Location',
                items: ['city', 'state', 'zip']
            }, {
                itemType: 'group',
                caption: 'Contacts',
                items: ['phone', 'fax', 'website']
            }
        ]
    }"></div>

    <!--JavaScript-->
    var viewModel = {
        companyData: {
            id: 1,
            name: "Super Mart of the West",
            city: "Bentonville",
            state: "Arkansas",
            zip: 72716,
            phone: "(800) 555-2797",
            fax: "(800) 555-2171",
            website: "http://www.nowebsite.com"
        }
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(new {
            ID = 1,
            Name = "Super Mart of the West",
            City = "Bentonville",
            State = "Arkansas",
            Zip = 727161232,
            Phone = "(800) 555-2797",
            Fax = "(800) 555-2171",
            Website = "http://www.nowebsite.com"
        })
        .Items(formItems => {
            formItems.AddSimple().DataField("Name");
            formItems.AddGroup().Caption("Location").Items(locationItems => {
                locationItems.AddSimple().DataField("City");
                locationItems.AddSimple().DataField("State");
                locationItems.AddSimple().DataField("Zip");
            });
            formItems.AddGroup().Caption("Contacts").Items(contactsItems => {
                contactsItems.AddSimple().DataField("Phone");
                contactsItems.AddSimple().DataField("Fax");
                contactsItems.AddSimple().DataField("Website");
            });
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(New With {
            .Id = 1,
            .Name = "Super Mart of the West",
            .City = "Bentonville",
            .State = "Arkansas",
            .Zip = 727161232,
            .Phone = "(800) 555-2797",
            .Fax = "(800) 555-2171",
            .Website = "http://www.nowebsite.com"
        }) _
        .Items(Sub(formItems)
            formItems.AddSimple().DataField("name")
            formItems.AddGroup().Caption("Location").Items(Sub(locationItems)
                locationItems.AddSimple().DataField("City")
                locationItems.AddSimple().DataField("State")
                locationItems.AddSimple().DataField("Zip")
            End Sub)
            formItems.AddGroup().Caption("Contacts").Items(Sub(contactsItems)
                contactsItems.AddSimple().DataField("Phone")
                contactsItems.AddSimple().DataField("Fax")
                contactsItems.AddSimple().DataField("Website")
            End Sub)
        End Sub)
    )  

---

 

#####See Also#####
- [Form - Overview](/concepts/05%20Widgets/Form/00%20Overview.md '/Documentation/Guide/Widgets/Form/Overview/')