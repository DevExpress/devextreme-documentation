const employees = ["John Heart", "Samantha Bright", "Arthur Miller", "Robert Reagan", "Greta Sims", "Brett Wade", 
    "Sandra Johnson", "Ed Holmes", "Barb Banks", "Kevin Carter", "Cindy Stanwick", "Sammy Hill", "Davey Jones", "Victor Norris", 
    "Mary Stern", "Robin Cosworth", "Kelly Rodriguez", "James Anderson", "Antony Remmen", "Olivia Peyton", "Taylor Riley", 
    "Amelia Harper", "Wally Hobbs", "Brad Jameson", "Karen Goodson", "Marcus Orbison", "Sandy Bright", "Morgan Kennedy", 
    "Violet Bailey", "Ken Samuelson", "Nat Maguiree", "Bart Arnaz", "Leah Simpson", "Arnie Schwartz", "Billy Zimmer", "Samantha Piper", 
    "Maggie Boxter", "Terry Bradley", "Gabe Jones", "Lucy Ball", "Jim Packard", "Hannah Brookly", "Harv Mudd", "Clark Morgan", 
    "Todd Hoffman", "Jackie Garmin", "Lincoln Bartlett", "Brad Farkus", "Jenny Hobbs", "Dallas Lou", "Stu Pizaro"
];

$(function() {
    const isDarkTheme = document.cookie.includes("theme=dark");
    DevExpress.ui.themes.current(isDarkTheme ? "material.blue.dark" : "material.blue.light")

    let dropDownCentered = true;

    const lookup = $("#dropDownCentered-lookup").dxLookup({
        dataSource: employees,
        dropDownCentered: dropDownCentered,
        value: employees[7],
        dropDownOptions: {
            height: 140
        }
    }).dxLookup("instance");

    $("#dropDownCentered-checkBox").dxCheckBox({
        value: dropDownCentered,
        text: "dropDownCentered",
        onValueChanged: function(e) {
            lookup.option("dropDownCentered", e.value);
        }
    });
});