$(function() {
    const treeList = $("#treeList").dxTreeList({
        dataSource: employees,
        rootValue: -1,
        keyExpr: "ID",
        parentIdExpr: "HeadID",
        autoExpandAll: true,
        allowColumnReordering: true,
        allowColumnResizing: true,
        columnAutoWidth: true,
        columnFixing: {
            enabled: true
        },
        columnChooser: { enabled: true },
        columns: [{
            dataField: "FullName",
            validationRules: [{
                type: "required"
            }],
            fixed: true
        }, {
            dataField: "Position",
            validationRules: [{
                type: "required"
            }]
        }, {
            dataField: "BirthDate", 
            dataType: "date",
            width: 100,
            validationRules: [{
                type: "required"
            }]
        }, {
            dataField: "HireDate", 
            dataType: "date",
            width: 100,
            validationRules: [{
                type: "required"
            }]
        }, "City", {
            dataField: "State",
            validationRules: [{
                type: "required"
            }]
        }, {
            dataField: "Email",
            visible: false
        }, "MobilePhone", "Skype"],
        filterRow: { visible: true },
        searchPanel: { visible: true },     
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        selection: { mode: "single" },
        onSelectionChanged: function(e) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                if(employee) {
                    $("#selected-employee").text(`Selected employee: ${employee.FullName}`);
                }
            });
        },
        rowDragging: {
            allowDropInsideItem: true,
            allowReordering: true,
            onDragChange: function(e) {
                var visibleRows = treeList.getVisibleRows(),
                    sourceNode = treeList.getNodeByKey(e.itemData.ID),
                    targetNode = visibleRows[e.toIndex].node;

                while (targetNode && targetNode.data) {
                    if (targetNode.data.ID === sourceNode.data.ID) {
                        e.cancel = true;
                        break;
                    }
                    targetNode = targetNode.parent;
                }
            },
            onReorder: function(e) {
                var visibleRows = e.component.getVisibleRows(),
                    sourceData = e.itemData,
                    targetData = visibleRows[e.toIndex].data;

                if (e.dropInsideItem) {
                    e.itemData.HeadID = targetData.ID;
                } else {
                    var sourceIndex = employees.indexOf(sourceData),
                        targetIndex = employees.indexOf(targetData);

                    if (sourceData.HeadID !== targetData.HeadID) {
                        sourceData.HeadID = targetData.HeadID;
                        if (e.toIndex > e.fromIndex) {
                            targetIndex++;
                        }
                    }
                    employees.splice(sourceIndex, 1);
                    employees.splice(targetIndex, 0, sourceData);
                }
                e.component.refresh();
            }
        },
        paging: {
            enabled: true,
            pageSize: 10
        }
    }).dxTreeList("instance");
});

const employees = [{ 
    "ID": 1,
    "HeadID": -1,
    "FullName": "John Heart",
    "Prefix": "Mr.",
    "Position": "CEO",
    "City": "Los Angeles",
    "State": "California",
    "Email": "jheart@dx-email.com",
    "Skype": "jheart_DX_skype",
    "MobilePhone": "(213) 555-9392",
    "BirthDate": "1964-03-16",
    "HireDate": "1995-01-15"
}, {
    "ID": 2,
    "HeadID": 1,
    "FullName": "Samantha Bright",
    "Prefix": "Dr.",
    "Position": "COO",
    "City": "Los Angeles",
    "State": "California",
    "Email": "samanthab@dx-email.com",
    "Skype": "samanthab_DX_skype",
    "MobilePhone": "(213) 555-2858",
    "BirthDate": "1966-05-02",
    "HireDate": "2004-05-24"
}, {
    "ID": 3,
    "HeadID": 1,
    "FullName": "Arthur Miller",
    "Prefix": "Mr.",
    "Position": "CTO",
    "City": "Denver",
    "State": "Colorado",
    "Email": "arthurm@dx-email.com",
    "Skype": "arthurm_DX_skype",
    "MobilePhone": "(310) 555-8583",
    "BirthDate": "1972-07-11",
    "HireDate": "2007-12-18"
}, {
    "ID": 4,
    "HeadID": 1,
    "FullName": "Robert Reagan",
    "Prefix": "Mr.",
    "Position": "CMO",
    "City": "Bentonville",
    "State": "Arkansas",
    "Email": "robertr@dx-email.com",
    "Skype": "robertr_DX_skype",
    "MobilePhone": "(818) 555-2387",
    "BirthDate": "1974-09-07",
    "HireDate": "2002-11-08"
}, {
    "ID": 5,
    "HeadID": 1,
    "FullName": "Greta Sims",
    "Prefix": "Ms.",
    "Position": "HR Manager",
    "City": "Atlanta",
    "State": "Georgia",
    "Email": "gretas@dx-email.com",
    "Skype": "gretas_DX_skype",
    "MobilePhone": "(818) 555-6546",
    "BirthDate": "1977-11-22",
    "HireDate": "1998-04-23"
}, {
    "ID": 6,
    "HeadID": 3,
    "FullName": "Brett Wade",
    "Prefix": "Mr.",
    "Position": "IT Manager",
    "City": "Reno",
    "State": "Nevada",
    "Email": "brettw@dx-email.com",
    "Skype": "brettw_DX_skype",
    "MobilePhone": "(626) 555-0358",
    "BirthDate": "1968-12-01",
    "HireDate": "2009-03-06"
}, {
    "ID": 7,
    "HeadID": 5,
    "FullName": "Sandra Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "City": "Beaver",
    "State": "Utah",
    "Email": "sandraj@dx-email.com",
    "Skype": "sandraj_DX_skype",
    "MobilePhone": "(562) 555-2082",
    "BirthDate": "1974-11-15",
    "HireDate": "2005-05-11"
}, {
    "ID": 8,
    "HeadID": 4,
    "FullName": "Ed Holmes",
    "Prefix": "Dr.",
    "Position": "Sales Manager",
    "City": "Malibu",
    "State": "California",
    "Email": "edwardh@dx-email.com",
    "Skype": "edwardh_DX_skype",
    "MobilePhone": "(310) 555-1288",
    "BirthDate": "1973-07-14",
    "HireDate": "2005-06-19"
}, {
    "ID": 9,
    "HeadID": 3,
    "FullName": "Barb Banks",
    "Prefix": "Mrs.",
    "Position": "Support Manager",
    "City": "Phoenix",
    "State": "Arizona",
    "Email": "barbarab@dx-email.com",
    "Skype": "barbarab_DX_skype",
    "MobilePhone": "(310) 555-3355",
    "BirthDate": "1979-04-14",
    "HireDate": "2002-08-07"
}, {
    "ID": 10,
    "HeadID": 2,
    "FullName": "Kevin Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "City": "San Diego",
    "State": "California",
    "Email": "kevinc@dx-email.com",
    "Skype": "kevinc_DX_skype",
    "MobilePhone": "(213) 555-2840",
    "BirthDate": "1978-01-09",
    "HireDate": "2009-08-11"
}, {
    "ID": 11,
    "HeadID": 5,
    "FullName": "Cindy Stanwick",
    "Prefix": "Ms.",
    "Position": "HR Assistant",
    "City": "Little Rock",
    "State": "Arkansas",
    "Email": "cindys@dx-email.com",
    "Skype": "cindys_DX_skype",
    "MobilePhone": "(818) 555-6655",
    "BirthDate": "1985-06-05",
    "HireDate": "2008-03-24"
}, {
    "ID": 12,
    "HeadID": 8,
    "FullName": "Sammy Hill",
    "Prefix": "Mr.",
    "Position": "Sales Assistant",
    "City": "Pasadena",
    "State": "California",
    "Email": "sammyh@dx-email.com",
    "Skype": "sammyh_DX_skype",
    "MobilePhone": "(626) 555-7292",
    "BirthDate": "1984-02-17",
    "HireDate": "2012-02-01"
}, {
    "ID": 13,
    "HeadID": 10,
    "FullName": "Davey Jones",
    "Prefix": "Mr.",
    "Position": "Shipping Assistant",
    "City": "Pasadena",
    "State": "California",
    "Email": "davidj@dx-email.com",
    "Skype": "davidj_DX_skype",
    "MobilePhone": "(626) 555-0281",
    "BirthDate": "1983-03-06",
    "HireDate": "2011-04-24"
}, {
    "ID": 14,
    "HeadID": 10,
    "FullName": "Victor Norris",
    "Prefix": "Mr.",
    "Position": "Shipping Assistant",
    "City": "Little Rock",
    "State": "Arkansas",
    "Email": "victorn@dx-email.com",
    "Skype": "victorn_DX_skype",
    "MobilePhone": "(213) 555-9278",
    "BirthDate": "1986-07-23",
    "HireDate": "2012-07-23"
}, {
    "ID": 15,
    "HeadID": 10,
    "FullName": "Mary Stern",
    "Prefix": "Ms.",
    "Position": "Shipping Assistant",
    "City": "Beaver",
    "State": "Utah",
    "Email": "marys@dx-email.com",
    "Skype": "marys_DX_skype",
    "MobilePhone": "(818) 555-7857",
    "BirthDate": "1982-04-08",
    "HireDate": "2012-08-12"
}, {
    "ID": 16,
    "HeadID": 10,
    "FullName": "Robin Cosworth",
    "Prefix": "Mrs.",
    "Position": "Shipping Assistant",
    "City": "Los Angeles",
    "State": "California",
    "Email": "robinc@dx-email.com",
    "Skype": "robinc_DX_skype",
    "MobilePhone": "(818) 555-0942",
    "BirthDate": "1981-06-12",
    "HireDate": "2012-09-01"
}, {
    "ID": 17,
    "HeadID": 9,
    "FullName": "Kelly Rodriguez",
    "Prefix": "Ms.",
    "Position": "Support Assistant",
    "City": "Boise",
    "State": "Idaho",
    "Email": "kellyr@dx-email.com",
    "Skype": "kellyr_DX_skype",
    "MobilePhone": "(818) 555-9248",
    "BirthDate": "1988-05-11",
    "HireDate": "2012-10-13"
}, {
    "ID": 18,
    "HeadID": 9,
    "FullName": "James Anderson",
    "Prefix": "Mr.",
    "Position": "Support Assistant",
    "City": "Atlanta",
    "State": "Georgia",
    "Email": "jamesa@dx-email.com",
    "Skype": "jamesa_DX_skype",
    "MobilePhone": "(323) 555-4702",
    "BirthDate": "1987-01-29",
    "HireDate": "2012-10-18"
}, {
    "ID": 19,
    "HeadID": 9,
    "FullName": "Antony Remmen",
    "Prefix": "Mr.",
    "Position": "Support Assistant",
    "City": "Boise",
    "State": "Idaho",
    "Email": "anthonyr@dx-email.com",
    "Skype": "anthonyr_DX_skype",
    "MobilePhone": "(310) 555-6625",
    "BirthDate": "1986-02-19",
    "HireDate": "2013-01-19"
}, {
    "ID": 20,
    "HeadID": 8,
    "FullName": "Olivia Peyton",
    "Prefix": "Mrs.",
    "Position": "Sales Assistant",
    "City": "Atlanta",
    "State": "Georgia",
    "Email": "oliviap@dx-email.com",
    "Skype": "oliviap_DX_skype",
    "MobilePhone": "(310) 555-2728",
    "BirthDate": "1981-06-03",
    "HireDate": "2012-05-14"
}, {
    "ID": 21,
    "HeadID": 6,
    "FullName": "Taylor Riley",
    "Prefix": "Mr.",
    "Position": "Network Admin",
    "City": "San Jose",
    "State": "California",
    "Email": "taylorr@dx-email.com",
    "Skype": "taylorr_DX_skype",
    "MobilePhone": "(310) 555-7276",
    "BirthDate": "1982-08-14",
    "HireDate": "2012-04-14"
}, {
    "ID": 22,
    "HeadID": 6,
    "FullName": "Amelia Harper",
    "Prefix": "Mrs.",
    "Position": "Network Admin",
    "City": "Los Angeles",
    "State": "California",
    "Email": "ameliah@dx-email.com",
    "Skype": "ameliah_DX_skype",
    "MobilePhone": "(213) 555-4276",
    "BirthDate": "1983-11-19",
    "HireDate": "2011-02-10"
}, {
    "ID": 23,
    "HeadID": 6,
    "FullName": "Wally Hobbs",
    "Prefix": "Mr.",
    "Position": "Programmer",
    "City": "Chatsworth",
    "State": "California",
    "Email": "wallyh@dx-email.com",
    "Skype": "wallyh_DX_skype",
    "MobilePhone": "(818) 555-8872",
    "BirthDate": "1984-12-24",
    "HireDate": "2011-02-17"
}, {
    "ID": 24,
    "HeadID": 6,
    "FullName": "Brad Jameson",
    "Prefix": "Mr.",
    "Position": "Programmer",
    "City": "San Fernando",
    "State": "California",
    "Email": "bradleyj@dx-email.com",
    "Skype": "bradleyj_DX_skype",
    "MobilePhone": "(818) 555-4646",
    "BirthDate": "1988-10-12",
    "HireDate": "2011-03-02"
}, {
    "ID": 25,
    "HeadID": 6,
    "FullName": "Karen Goodson",
    "Prefix": "Miss",
    "Position": "Programmer",
    "City": "South Pasadena",
    "State": "California",
    "Email": "kareng@dx-email.com",
    "Skype": "kareng_DX_skype",
    "MobilePhone": "(626) 555-0908",
    "BirthDate": "1987-04-26",
    "HireDate": "2011-03-14"
}, {
    "ID": 26,
    "HeadID": 5,
    "FullName": "Marcus Orbison",
    "Prefix": "Mr.",
    "Position": "Travel Coordinator",
    "City": "Los Angeles",
    "State": "California",
    "Email": "marcuso@dx-email.com",
    "Skype": "marcuso_DX_skype",
    "MobilePhone": "(213) 555-7098",
    "BirthDate": "1982-03-02",
    "HireDate": "2005-05-19"
}, {
    "ID": 27,
    "HeadID": 5,
    "FullName": "Sandy Bright",
    "Prefix": "Ms.",
    "Position": "Benefits Coordinator",
    "City": "Denver",
    "State": "Colorado",
    "Email": "sandrab@dx-email.com",
    "Skype": "sandrab_DX_skype",
    "MobilePhone": "(818) 555-0524",
    "BirthDate": "1983-09-11",
    "HireDate": "2005-06-04"
}, {
    "ID": 28,
    "HeadID": 6,
    "FullName": "Morgan Kennedy",
    "Prefix": "Mrs.",
    "Position": "Graphic Designer",
    "City": "San Fernando Valley",
    "State": "California",
    "Email": "morgank@dx-email.com",
    "Skype": "morgank_DX_skype",
    "MobilePhone": "(818) 555-8238",
    "BirthDate": "1984-07-17",
    "HireDate": "2012-01-11"
}, {
    "ID": 29,
    "HeadID": 28,
    "FullName": "Violet Bailey",
    "Prefix": "Ms.",
    "Position": "Jr Graphic Designer",
    "City": "La Canada",
    "State": "California",
    "Email": "violetb@dx-email.com",
    "Skype": "violetb_DX_skype",
    "MobilePhone": "(818) 555-2478",
    "BirthDate": "1985-06-10",
    "HireDate": "2012-01-19"
}, {
    "ID": 30,
    "HeadID": 5,
    "FullName": "Ken Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "City": "St. Louis",
    "State": "Missouri",
    "Email": "kents@dx-email.com",
    "Skype": "kents_DX_skype",
    "MobilePhone": "(562) 555-9282",
    "BirthDate": "1972-09-11",
    "HireDate": "2009-04-22"
}];