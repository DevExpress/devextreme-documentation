---
id: dxMenu.Options.showFirstSubmenuMode.delay
type: Object | Number
default: { show: 50, hide: 300 }
---
---
##### shortDescription
Specifies the delay in submenu showing and hiding.

---
Passing a number to this option is the same as passing an object whose **show** and **hide** fields hold equal values. For example, the following ways to specify the delay are identical.

    <!--JavaScript-->
    //number
    delay: 300

    //object
    delay: {
        show: 300,
        hide: 300
    }