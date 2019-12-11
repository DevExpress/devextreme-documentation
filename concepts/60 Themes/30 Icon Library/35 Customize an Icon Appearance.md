Since DevExtreme built-in icons are shipped as a font, you can customize their color, size and weight using the same CSS rules you use to customize a text element appearance.

---
#####jQuery

    <!--HTML-->
    <div id="remove-button"></div>

    <!--JavaScript-->
    $("#remove-button").dxButton({
        icon: "remove",
        text: "Remove"
    });

    <!--CSS-->
    #remove-button .dx-icon{
        color: red;
        font-size: large;
        font-weight: bold;
    }

#####AngularJS#####

    <!--HTML-->
    <div id="remove-button" dx-button="{
        icon: 'remove',
        text: 'Remove'
    }"></div>

    <!--CSS-->
    #remove-button .dx-icon{
        color: red;
        font-size: large;
        font-weight: bold;
    }

#####Knockout#####

    <!--HTML-->
    <div id="remove-button" data-bind="dxButton: {
        icon: 'remove',
        text: 'Remove'
    }"></div>

    <!--CSS-->
    #remove-button .dx-icon{
        color: red;
        font-size: large;
        font-weight: bold;
    }

---

[note]These rules are predefined for separate icons and icons used within widgets. Thus, to apply custom rules to an icon, ensure that custom rules have higher priority than predefined rules.