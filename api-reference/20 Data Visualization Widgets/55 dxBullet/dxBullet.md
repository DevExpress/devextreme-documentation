---
module: viz/bullet
inherits: ..\BaseSparkline\BaseSparkline.md
---
---
##### widgettree
target: 30,
value: 20

##### lib
dx.viz.js, dx.viz-web.js, dx.all.js

##### shortDescription
The **Bullet** widget is useful when you need to compare a single measure to a target value. The widget comprises a horizontal bar indicating the measure and a vertical line indicating the target value.

---
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxBullet` jQuery plug-in.

        <!--HTML--><div id="bulletContainer"></div>

    <!---->

        <!--JavaScript-->$("#bulletContainer").dxBullet({
			startScaleValue: 0,
			endScaleValue: 35,
			value: 27,
			target: 24 
		});

- **Knockout**  
 Add a div element and apply the `dxBullet` binding to this element.

        <!--HTML-->
        <div data-bind="dxBullet: {
			startScaleValue: 0,
			endScaleValue: 35,
			value: 27,
			target: 24 
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-bullet` directive to this element.

        <!--HTML-->
        <div dx-bullet="{
			startScaleValue: 0,
			endScaleValue: 35,
			value: 27,
			target: 24 
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/concepts/20%20Data%20Visualization/05%20Basics/01%20Installation '/Documentation/Guide/Data_Visualization/Basics/Installation/') article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartsbulletbulletssimplebullets/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=Ax5kgKvFKvs&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=22" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>