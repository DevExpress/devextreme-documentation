The master-detail interface adds an expandable section that contains detail data (*"detail section"*) to a standard data row (*"master row"*). The detail section can contain anything.

Master-detail data representation is configured in the [masterDetail](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/) object. To specify detail sections' contents, implement the [template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template). Users can expand and collapse details sections if you set the [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled) option to **true**:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGrid").dxDataGrid({
            // ...
            masterDetail: {
                enabled: true,
                template: function (_, options) {
                    const employee = options.data;
                    const photo = $("<img>")
                        .addClass("employee-photo")
                        .attr("src", employee.Photo);
                    const notes = $("<p>")
                        .addClass("employee-notes")
                        .text(employee.Notes);
                    return $("<div>").append(photo, notes);
                }
            },
        });
    });

    <!-- tab: index.css -->
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }

    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

    /* ... */

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <!-- ... -->
        <dxo-master-detail
            [enabled]="true"
            [template]="'employee-info'">
        </dxo-master-detail>
        <div *dxTemplate="let employee of 'employee-info'">
            <img class="employee-photo" [src]="employee.data.Photo">
            <p class="employee-notes">{{ employee.data.Notes }}</p>
        </div>
    </dx-data-grid>

    <!-- tab: app.component.css -->
    .employee-photo {
        height: 140px;
        float: left;
        padding: 0 20px 20px 0;
    }
    
    .employee-notes {
        text-align: justify;
        white-space: normal;
    }

    /* ... */

---

Run the code and click the Expand button in any row. You should see a detail section that contains an employee's photo and information.