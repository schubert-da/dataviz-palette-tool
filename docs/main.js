(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\schub\Desktop\Projects\Palette Tool\dataviz-palette-tool\src\main.ts */"zUnb");


/***/ }),

/***/ "4fOB":
/*!****************************************************************!*\
  !*** ./src/app/components/graphs/treemap/treemap.component.ts ***!
  \****************************************************************/
/*! exports provided: TreemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreemapComponent", function() { return TreemapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class TreemapComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [
            { "name": "Origin", "parent": null, "value": null },
            { "name": "Apples", "parent": "Origin", "value": 40 },
            { "name": "Bananas", "parent": "Origin", "value": 18 },
            { "name": "Hi", "parent": "Origin", "value": 8 },
            { "name": "Peaches", "parent": "Origin", "value": 20 },
            { "name": "Tomtatoes", "parent": "Origin", "value": 32 },
            { "name": "Oranges", "parent": "Origin", "value": 10 },
        ];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#treemap")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        const root = d3__WEBPACK_IMPORTED_MODULE_1__["stratify"]()
            .id(function (d) { return d["name"]; }) // Name of the entity (column name is name in csv)
            .parentId(function (d) { return d["parent"]; }) // Name of the parent (column name is parent in csv)
        (this.data);
        root.sum(function (d) { return +d["value"]; }); // Compute the numeric value for each entity
        // Then d3.treemap computes the position of each element of the hierarchy
        // The coordinates are added to the root object above
        d3__WEBPACK_IMPORTED_MODULE_1__["treemap"]()
            .size([chart.width, chart.height])
            .padding(3)(root);
        // use this information to add rectangles:
        this.svg
            .selectAll(".treemap_rect")
            .data(root.leaves())
            .join("rect")
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('class', "treemap_rect")
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "#222")
            .style("stroke-width", 0.75)
            .style("fill", "#69b3a2");
        // and to add the text names
        this.svg
            .selectAll("text")
            .data(root.leaves())
            .join("text")
            .attr("x", function (d) { return d.x0 + 5; }) // +10 to adjust position (more right)
            .attr("y", function (d) { return d.y0 + 15; }) // +20 to adjust position (lower)
            .text(function (d) { return d.data.name; })
            .attr("font-size", "15px")
            .attr("fill", "white");
    }
    updateColors() {
        this.svg.selectAll(".treemap_rect")
            .style("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
TreemapComponent.ɵfac = function TreemapComponent_Factory(t) { return new (t || TreemapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
TreemapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreemapComponent, selectors: [["app-treemap"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "treemap"]], template: function TreemapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tree Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: [".viz[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px !important;\n}\n\n.viz-header[_ngcontent-%COMP%] {\n  background-color: cadetblue;\n  color: #efefef;\n  font-size: 30px;\n  font-family: Helvetica;\n  padding: 2% 3%;\n}\n\n#treemap[_ngcontent-%COMP%] {\n  margin: 0% 2% 5% 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvdHJlZW1hcC90cmVlbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkZBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy90cmVlbWFwL3RyZWVtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudml6e1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpei1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBwYWRkaW5nOiAyJSAzJTtcclxufVxyXG5cclxuI3RyZWVtYXB7XHJcbiAgICBtYXJnaW46IDAlIDIlIDUlIDMlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreemapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-treemap',
                templateUrl: './treemap.component.html',
                styleUrls: ['./treemap.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7iX/":
/*!**************************************************************************!*\
  !*** ./src/app/components/graphs/tints-shades/tints-shades.component.ts ***!
  \**************************************************************************/
/*! exports provided: TintsShadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TintsShadesComponent", function() { return TintsShadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class TintsShadesComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        // This is simply multiple area charts on top of one another
        // and not how you would create an actual stacked area chart.
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#shades")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        const x_vals = [0, 1, 2, 3, 4, 5, 6];
        const y_vals = [0, 1, 2, 3, 4, 5, 6];
        for (let x_val of x_vals) {
            for (let y_val of y_vals) {
                this.data.push({ "x": x_val, "y": y_val, "data": 1 });
            }
        }
        // Build X scales and axis:
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([0, chart.width])
            .domain(x_vals.map(d => "" + d))
            .padding(0.03);
        this.svg.append("g")
            .attr("transform", `translate(0, ${chart.height})`)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        // Build X scales and axis:
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([chart.height, 0])
            .domain(y_vals.map(d => "" + d))
            .padding(0.1);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        this.svg.selectAll()
            .data(this.data, function (d) { return d.x + '-' + d.y; })
            .join("rect")
            .attr("class", "shade-tile")
            .attr("data-row-index", d => d.y)
            .attr("x", function (d) { return x("" + d.x); })
            .attr("y", function (d) { return y("" + d.y); })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", function (d) { return "red"; });
    }
    updateColors() {
        this.svg.selectAll(".shade-tile")
            .style("fill", (d, i) => {
            let color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](this.colors[d.y % this.colors.length]);
            let new_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](color.h, color.s, color.l - 0.1 * (3 - d.x));
            return new_color;
        });
    }
}
TintsShadesComponent.ɵfac = function TintsShadesComponent_Factory(t) { return new (t || TintsShadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
TintsShadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TintsShadesComponent, selectors: [["app-tints-shades"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "shades"]], template: function TintsShadesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tints and Shades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#shades[_ngcontent-%COMP%] {\n  margin: 5% 5% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvdGludHMtc2hhZGVzL3RpbnRzLXNoYWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy90aW50cy1zaGFkZXMvdGludHMtc2hhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NoYWRlcyB7XHJcbiAgICBtYXJnaW46IDUlIDUlIDAlIDUlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TintsShadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tints-shades',
                templateUrl: './tints-shades.component.html',
                styleUrls: ['./tints-shades.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FQbm":
/*!****************************************************!*\
  !*** ./src/app/services/colour-service.service.ts ***!
  \****************************************************/
/*! exports provided: ColourServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColourServiceService", function() { return ColourServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ColourServiceService {
    constructor() {
        this.palette = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.background = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.paletteChanged$ = this.palette.asObservable();
        this.backgroundChanged$ = this.background.asObservable();
    }
    // Service message commands
    changePalette(palette) {
        this.palette.next(palette.slice(0, palette.length - 1));
        this.background.next(palette.slice(-1)[0]);
    }
}
ColourServiceService.ɵfac = function ColourServiceService_Factory(t) { return new (t || ColourServiceService)(); };
ColourServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColourServiceService, factory: ColourServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColourServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ix65":
/*!**********************************************************************!*\
  !*** ./src/app/components/graphs/typography/typography.component.ts ***!
  \**********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class TypographyComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#typography")
            .append("div");
    }
    drawChart() {
        var chart = this;
        // Bars
        this.svg.selectAll(".typo")
            .data(this.colors)
            .enter()
            .append()
            .html(d => {
            let hsl_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](d);
            var highlight_text_color = hsl_color.l > 0.9 ? "#666" : "#fff";
            return `Some choose to highlight <b style="color: ${d}">like this</b>, 
        while others <b style="background-color: ${d}; color: ${highlight_text_color}; padding: 1px 3px">prefer this</b><br>`;
        })
            .attr("class", "typo")
            .style("font-size", "1.0em");
    }
    updateColors() {
        this.svg.selectAll(".typo")
            .data(this.colors)
            .enter()
            .append()
            .html(d => {
            let hsl_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](d);
            var highlight_text_color = hsl_color.l > 0.9 ? "#666" : "#fff";
            return `Some choose to highlight <b style="color: ${d}">like this</b>, 
        while others <b style="background-color: ${d}; color: ${highlight_text_color}; padding: 1px 3px">prefer this</b><br>`;
        })
            .attr("class", "typo")
            .style("font-size", "1.0em");
    }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
TypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["app-typography"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "typography"]], template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Typography ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#typography[_ngcontent-%COMP%] {\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3R5cG9ncmFwaHl7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-typography',
                templateUrl: './typography.component.html',
                styleUrls: ['./typography.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-color-selection/main-color-selection.component */ "u8zk");
/* harmony import */ var _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/graphs/bar-chart/bar-chart.component */ "b+wk");
/* harmony import */ var _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graphs/line-chart/line-chart.component */ "tM6+");
/* harmony import */ var _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/graphs/treemap/treemap.component */ "4fOB");
/* harmony import */ var _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/graphs/scatter-plot/scatter-plot.component */ "ynmJ");
/* harmony import */ var _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graphs/pie-chart/pie-chart.component */ "uNZM");
/* harmony import */ var _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/graphs/choropleth-map/choropleth-map.component */ "Y3VV");
/* harmony import */ var _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/graphs/stacked-area-chart/stacked-area-chart.component */ "YnzT");
/* harmony import */ var _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/graphs/tints-shades/tints-shades.component */ "7iX/");
/* harmony import */ var _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/graphs/typography/typography.component */ "Ix65");












class AppComponent {
    constructor() {
        this.title = 'dataviz-palette-tool';
        this.default_palette = ["#4F091D", "#DD4A48", "#f7f3e8", "#97BFB4"];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 9, consts: [[1, "viz-container", 3, "colors"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-color-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-bar-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-line-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-treemap", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-scatter-plot", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pie-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-choropleth-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-stacked-area-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-tints-shades", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-typography", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.default_palette);
    } }, directives: [_components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_1__["MainColorSelectionComponent"], _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"], _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_4__["TreemapComponent"], _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_5__["ScatterPlotComponent"], _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_6__["PieChartComponent"], _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_7__["ChoroplethMapComponent"], _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_8__["StackedAreaChartComponent"], _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_9__["TintsShadesComponent"], _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1em;\n  margin-top: 9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUVBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGFBQUE7RUFFQSxjQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDFlbTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiA5JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Y3VV":
/*!******************************************************************************!*\
  !*** ./src/app/components/graphs/choropleth-map/choropleth-map.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChoroplethMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoroplethMapComponent", function() { return ChoroplethMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class ChoroplethMapComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [{ "name": "a", "value": 9 }, { "name": "b", "value": 20 }, { "name": "c", "value": 30 }, { "name": "d", "value": 8 }, { "name": "e", "value": 12 }];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#choropleth")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + ", " + this.height / 2 + ")");
    }
    drawChart() {
        var chart = this;
        const path = d3__WEBPACK_IMPORTED_MODULE_1__["geoPath"]();
        const projection = d3__WEBPACK_IMPORTED_MODULE_1__["geoMercator"]()
            .scale(70)
            .center([80, -40])
            .translate([chart.width / 2, chart.height / 2]);
        // Data and color scale
        let data = new Map();
        const colorScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .range(this.colors);
        // Load external data and boot
        Promise.all([
            d3__WEBPACK_IMPORTED_MODULE_1__["json"]("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
            d3__WEBPACK_IMPORTED_MODULE_1__["csv"]("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function (d) {
                return data.set(d.code, +d.pop);
            })
        ]).then(function (loadData) {
            let topo = loadData[0];
            console.log(chart.colors);
            // Draw the map
            chart.svg.append("g")
                .selectAll("path.choropleth_area")
                .data(topo.features)
                .join("path")
                // draw each country
                .attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["geoPath"]()
                .projection(projection))
                .attr("class", "choropleth_area")
                // set the color of each country
                .attr("fill", (d, i) => { return chart.colors[i % chart.colors.length]; })
                .attr("stroke", "#444")
                .attr("stroke-width", 0.25);
        });
    }
    updateColors() {
        this.svg.selectAll(".choropleth_area")
            .attr("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
ChoroplethMapComponent.ɵfac = function ChoroplethMapComponent_Factory(t) { return new (t || ChoroplethMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
ChoroplethMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChoroplethMapComponent, selectors: [["app-choropleth-map"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "choropleth"]], template: function ChoroplethMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Choropleth Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#choropleth[_ngcontent-%COMP%] {\n  margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvY2hvcm9wbGV0aC1tYXAvY2hvcm9wbGV0aC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy9jaG9yb3BsZXRoLW1hcC9jaG9yb3BsZXRoLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaG9yb3BsZXRoe1xyXG4gICAgbWFyZ2luOiAzJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChoroplethMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-choropleth-map',
                templateUrl: './choropleth-map.component.html',
                styleUrls: ['./choropleth-map.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YnzT":
/*!**************************************************************************************!*\
  !*** ./src/app/components/graphs/stacked-area-chart/stacked-area-chart.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StackedAreaChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedAreaChartComponent", function() { return StackedAreaChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class StackedAreaChartComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [
            { "name": "A", "year": "2012", "Value": "16" },
            { "name": "A", "year": "2013", "Value": "17" },
            { "name": "A", "year": "2014", "Value": "18" },
            { "name": "A", "year": "2015", "Value": "23" },
            { "name": "A", "year": "2016", "Value": "24" },
            { "name": "A", "year": "2017", "Value": "26" },
            { "name": "A", "year": "2018", "Value": "30" },
            { "name": "B", "year": "2012", "Value": "11" },
            { "name": "B", "year": "2013", "Value": "14" },
            { "name": "B", "year": "2014", "Value": "14" },
            { "name": "B", "year": "2015", "Value": "15" },
            { "name": "B", "year": "2016", "Value": "20" },
            { "name": "B", "year": "2017", "Value": "21" },
            { "name": "B", "year": "2018", "Value": "24" },
            { "name": "C", "year": "2012", "Value": "9" },
            { "name": "C", "year": "2013", "Value": "10" },
            { "name": "C", "year": "2014", "Value": "11" },
            { "name": "C", "year": "2015", "Value": "12" },
            { "name": "C", "year": "2016", "Value": "14" },
            { "name": "C", "year": "2017", "Value": "18" },
            { "name": "C", "year": "2018", "Value": "19" },
            { "name": "D", "year": "2012", "Value": "5" },
            { "name": "D", "year": "2013", "Value": "6" },
            { "name": "D", "year": "2014", "Value": "6" },
            { "name": "D", "year": "2015", "Value": "7" },
            { "name": "D", "year": "2016", "Value": "10" },
            { "name": "D", "year": "2017", "Value": "12" },
            { "name": "D", "year": "2018", "Value": "15" },
            { "name": "E", "year": "2012", "Value": "2" },
            { "name": "E", "year": "2013", "Value": "3" },
            { "name": "E", "year": "2014", "Value": "4" },
            { "name": "E", "year": "2015", "Value": "5" },
            { "name": "E", "year": "2016", "Value": "5" },
            { "name": "E", "year": "2017", "Value": "8" },
            { "name": "E", "year": "2018", "Value": "10" },
        ];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        // This is simply multiple area charts on top of one another
        // and not how you would create an actual stacked area chart.
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#stacked-area")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data, d => +d.year))
            .range([0, chart.width]);
        this.svg.append("g")
            .attr("transform", `translate(0,${chart.height})`)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        // Add Y axis
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](this.data, d => +d.Value)])
            .range([chart.height, 0]);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        for (let name of this.data.map(d => d.name)) {
            let currentData = this.data.filter(d => d.name == name);
            // Add the area
            this.svg.append("path")
                .datum(currentData)
                .attr("fill", "#cce5df")
                .attr("class", "stacked-path")
                .attr("stroke", "#eee")
                .attr("stroke-width", 1.1)
                .attr("d", d3__WEBPACK_IMPORTED_MODULE_1__["area"]()
                .x(d => x(+d["year"]) + 1)
                .y0(y(0) - 1)
                .y1(d => y(+d["Value"])));
        }
    }
    updateColors() {
        this.svg.selectAll(".stacked-path")
            .attr("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
StackedAreaChartComponent.ɵfac = function StackedAreaChartComponent_Factory(t) { return new (t || StackedAreaChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
StackedAreaChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackedAreaChartComponent, selectors: [["app-stacked-area-chart"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "stacked-area"]], template: function StackedAreaChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Stacked Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#stacked-area[_ngcontent-%COMP%] {\n  margin: 5% 5% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvc3RhY2tlZC1hcmVhLWNoYXJ0L3N0YWNrZWQtYXJlYS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy9zdGFja2VkLWFyZWEtY2hhcnQvc3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YWNrZWQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDUlIDUlIDAlIDUlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackedAreaChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stacked-area-chart',
                templateUrl: './stacked-area-chart.component.html',
                styleUrls: ['./stacked-area-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-color-selection/main-color-selection.component */ "u8zk");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/test-component/test-component.component */ "ciOt");
/* harmony import */ var _services_colour_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/colour-service.service */ "FQbm");
/* harmony import */ var _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/viz-container/viz-container.component */ "fL9a");
/* harmony import */ var _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/graphs/bar-chart/bar-chart.component */ "b+wk");
/* harmony import */ var _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graphs/line-chart/line-chart.component */ "tM6+");
/* harmony import */ var _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graphs/treemap/treemap.component */ "4fOB");
/* harmony import */ var _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/graphs/scatter-plot/scatter-plot.component */ "ynmJ");
/* harmony import */ var _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graphs/pie-chart/pie-chart.component */ "uNZM");
/* harmony import */ var _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/graphs/choropleth-map/choropleth-map.component */ "Y3VV");
/* harmony import */ var _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/graphs/stacked-area-chart/stacked-area-chart.component */ "YnzT");
/* harmony import */ var _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/graphs/tints-shades/tints-shades.component */ "7iX/");
/* harmony import */ var _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/graphs/typography/typography.component */ "Ix65");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_colour_service_service__WEBPACK_IMPORTED_MODULE_8__["ColourServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_4__["MainColorSelectionComponent"],
        _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"],
        _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_9__["VizContainerComponent"],
        _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"],
        _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
        _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_12__["TreemapComponent"],
        _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_13__["ScatterPlotComponent"],
        _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_14__["PieChartComponent"],
        _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_15__["ChoroplethMapComponent"],
        _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_16__["StackedAreaChartComponent"],
        _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_17__["TintsShadesComponent"],
        _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_18__["TypographyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_4__["MainColorSelectionComponent"],
                    _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_7__["TestComponentComponent"],
                    _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_9__["VizContainerComponent"],
                    _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"],
                    _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
                    _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_12__["TreemapComponent"],
                    _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_13__["ScatterPlotComponent"],
                    _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_14__["PieChartComponent"],
                    _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_15__["ChoroplethMapComponent"],
                    _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_16__["StackedAreaChartComponent"],
                    _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_17__["TintsShadesComponent"],
                    _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_18__["TypographyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"]
                ],
                providers: [_services_colour_service_service__WEBPACK_IMPORTED_MODULE_8__["ColourServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b+wk":
/*!********************************************************************!*\
  !*** ./src/app/components/graphs/bar-chart/bar-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class BarChartComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [
            { "Label": "A", "Value": "5" },
            { "Label": "B", "Value": "40" },
            { "Label": "C", "Value": "35" },
            { "Label": "D", "Value": "15" },
            { "Label": "F", "Value": "30" },
            { "Label": "G", "Value": "14" },
        ];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        // Build the pie chart
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]()
            .range([this.margin, this.width - this.margin])
            .domain(this.data.map(function (d) { return d.Label; }))
            .padding(0.075);
        this.svg.append("g")
            .attr("transform", "translate(0," + (this.height - this.margin) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x))
            .selectAll("text")
            .attr("transform", "translate(0,0) rotate(0)")
            .style("text-anchor", "middle");
        var range = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data.map(d => +d.Value));
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, +range[1]])
            .range([this.height - this.margin, this.margin])
            .nice();
        this.svg.append("g")
            .attr("transform", "translate(" + this.margin + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(5));
        // Bars
        this.svg.selectAll(".bars")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("class", "bars")
            .attr("x", function (d) { return +x(d.Label); })
            .attr("y", function (d) { return 0 + y(d.Value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return +chart.height - y(+d.Value) - chart.margin; })
            .attr("fill", "#69b3a2");
    }
    updateColors() {
        this.svg.selectAll(".bars")
            .attr("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "bar"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Bar charts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: [".viz[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.viz-header[_ngcontent-%COMP%] {\n  background-color: cadetblue;\n  color: #efefef;\n  font-size: 30px;\n  font-family: Helvetica;\n  padding: 2% 3%;\n}\n\n#bar[_ngcontent-%COMP%] {\n  margin: 0% 0% 5% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aXp7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAxNHB4IDI4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnZpei1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBwYWRkaW5nOiAyJSAzJTtcclxufVxyXG5cclxuI2JhcntcclxuICAgIG1hcmdpbjogMCUgMCUgNSUgNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ciOt":
/*!***********************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TestComponentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " STUFF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TestComponentComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.colors = [];
        this.background = "#fff";
    }
    ngOnInit() {
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            // this.createColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
            // this.createColors();
            // this.drawChart();
        });
        // this.createSvg();
        // this.createColors();
        // this.drawChart();
    }
}
TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"])); };
TestComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponentComponent, selectors: [["app-test-component"]], decls: 14, vars: 13, consts: [[2, "padding", "10px", "width", "500px"], [4, "ngFor", "ngForOf"]], template: function TestComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Test Component starts here! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " COLOR 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " COLOR 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " COLOR 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " COLOR 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " COLOR 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TestComponentComponent_div_13_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.colors[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.colors[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.colors[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.colors[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.colors[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1jb21wb25lbnQvdGVzdC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-component',
                templateUrl: './test-component.component.html',
                styleUrls: ['./test-component.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"] }]; }, null); })();


/***/ }),

/***/ "fL9a":
/*!*********************************************************************!*\
  !*** ./src/app/components/viz-container/viz-container.component.ts ***!
  \*********************************************************************/
/*! exports provided: VizContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VizContainerComponent", function() { return VizContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");



class VizContainerComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
    }
    ngOnInit() {
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
}
VizContainerComponent.ɵfac = function VizContainerComponent_Factory(t) { return new (t || VizContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"])); };
VizContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VizContainerComponent, selectors: [["app-viz-container"]], decls: 2, vars: 2, consts: [[1, "viz-container"], [2, "height", "1000px"]], template: function VizContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: [".viz-container[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXotY29udGFpbmVyL3Zpei1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXotY29udGFpbmVyL3Zpei1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudml6LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VizContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viz-container',
                templateUrl: './viz-container.component.html',
                styleUrls: ['./viz-container.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"] }]; }, null); })();


/***/ }),

/***/ "tM6+":
/*!**********************************************************************!*\
  !*** ./src/app/components/graphs/line-chart/line-chart.component.ts ***!
  \**********************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class LineChartComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.raw_data = [
            { "Label": "A", "date": 2012, "Value": 25 },
            { "Label": "A", "date": 2013, "Value": 40 },
            { "Label": "A", "date": 2014, "Value": 35 },
            { "Label": "A", "date": 2015, "Value": 30 },
            { "Label": "A", "date": 2016, "Value": 20 },
            { "Label": "A", "date": 2017, "Value": 20 },
            { "Label": "A", "date": 2018, "Value": 15 },
            { "Label": "B", "date": 2012, "Value": 15 },
            { "Label": "B", "date": 2013, "Value": 30 },
            { "Label": "B", "date": 2014, "Value": 14 },
            { "Label": "B", "date": 2015, "Value": 15 },
            { "Label": "B", "date": 2016, "Value": 20 },
            { "Label": "B", "date": 2017, "Value": 30 },
            { "Label": "B", "date": 2018, "Value": 32 },
            { "Label": "C", "date": 2012, "Value": 15 },
            { "Label": "C", "date": 2013, "Value": 20 },
            { "Label": "C", "date": 2014, "Value": 18 },
            { "Label": "C", "date": 2015, "Value": 15 },
            { "Label": "C", "date": 2016, "Value": 12 },
            { "Label": "C", "date": 2017, "Value": 18 },
            { "Label": "C", "date": 2018, "Value": 19 },
            { "Label": "D", "date": 2012, "Value": 5 },
            { "Label": "D", "date": 2013, "Value": 6 },
            { "Label": "D", "date": 2014, "Value": 8 },
            { "Label": "D", "date": 2015, "Value": 8 },
            { "Label": "D", "date": 2016, "Value": 12 },
            { "Label": "D", "date": 2017, "Value": 12 },
            { "Label": "D", "date": 2018, "Value": 17 },
            { "Label": "E", "date": 2012, "Value": 48 },
            { "Label": "E", "date": 2013, "Value": 36 },
            { "Label": "E", "date": 2014, "Value": 38 },
            { "Label": "E", "date": 2015, "Value": 38 },
            { "Label": "E", "date": 2016, "Value": 32 },
            { "Label": "E", "date": 2017, "Value": 28 },
            { "Label": "E", "date": 2018, "Value": 22 },
        ];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.data = this.raw_data.map(d => {
            return {
                Label: d["Label"],
                date: d3__WEBPACK_IMPORTED_MODULE_1__["timeParse"]("%Y")(d["date"] + ""),
                Value: d["Value"]
            };
        });
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#line")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        var range = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data.map(d => +d.Value));
        // group the data: I want to draw one line per group
        const sumstat = d3__WEBPACK_IMPORTED_MODULE_1__["group"](this.data, d => { return d["Label"]; }); // nest function allows to group the calculation per level of a factor
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data, function (d) { return +d["date"]; }))
            .range([this.margin, this.width - this.margin]);
        this.svg.append("g")
            .attr("transform", "translate(0," + (this.height - this.margin) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).ticks(4))
            .selectAll("text")
            .attr("transform", "translate(0,0) rotate(0)")
            .style("text-anchor", "middle")
            .style("font-size", "9px");
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, +range[1]])
            .range([this.height - this.margin, this.margin])
            .nice();
        this.svg.append("g")
            .attr("transform", "translate(" + this.margin + ",0)")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(6));
        this.svg.selectAll(".lines")
            .data(sumstat)
            .join("path")
            .attr("class", "lines")
            .attr("fill", "none")
            .attr("stroke", "#222")
            .attr("stroke-width", 2)
            .attr("d", function (d) {
            return d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
                .x((b) => { return x(b["date"]); })
                .y((b) => { return y(b["Value"]); })(d[1]);
        });
    }
    updateColors() {
        this.svg.selectAll(".lines")
            .attr("stroke", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "line"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Line chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: [".viz[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n}\n\n.viz-header[_ngcontent-%COMP%] {\n  background-color: cadetblue;\n  color: #efefef;\n  font-size: 30px;\n  font-family: Helvetica;\n  padding: 2% 3%;\n}\n\n#line[_ngcontent-%COMP%] {\n  margin: 0% 0% 5% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0ZBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudml6e1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi52aXotaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgcGFkZGluZzogMiUgMyU7XHJcbn1cclxuXHJcbiNsaW5le1xyXG4gICAgbWFyZ2luOiAwJSAwJSA1JSA1JTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-chart',
                templateUrl: './line-chart.component.html',
                styleUrls: ['./line-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "u8zk":
/*!***********************************************************************************!*\
  !*** ./src/app/components/main-color-selection/main-color-selection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MainColorSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainColorSelectionComponent", function() { return MainColorSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");





function MainColorSelectionComponent_div_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Color Palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainColorSelectionComponent_div_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainColorSelectionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainColorSelectionComponent_div_7_span_1_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainColorSelectionComponent_div_7_span_2_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function MainColorSelectionComponent_div_7_Template_input_colorPickerChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const index_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r5.color_list[index_r1] = $event); })("colorPickerChange", function MainColorSelectionComponent_div_7_Template_input_colorPickerChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.colorPickerChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainColorSelectionComponent_div_7_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.colorChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.color_list[index_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx_r0.color_list[index_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.color_list[index_r1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-index", index_r1);
} }
class MainColorSelectionComponent {
    constructor(colourservice) {
        this.colourservice = colourservice;
        this.num_colors = 4;
        this.list = [0, 1, 2, 3, 4];
        this.color_list = [];
        this.background = "#ffffff";
        this.default_palette = ["#4F091D", "#DD4A48", "#F5EEDC", "#97BFB4"];
    }
    ngOnInit() {
        this.list = Array.from({ length: this.num_colors }, (_, i) => i);
        this.color_list = Array.from({ length: this.num_colors }, (_, i) => this.default_palette[i % 4]);
    }
    colorPickerChanged() {
        this.colourservice.changePalette([...this.color_list, this.background]);
    }
    numColorsChange(event) {
        this.list = Array.from({ length: event.target.value }, (_, i) => i).slice();
        this.color_list = Array.from({ length: event.target.value }, (_, i) => this.color_list[i]);
        this.color_list = this.color_list.map(color => color === undefined ? "#ffffff" : color);
        this.colourservice.changePalette([...this.color_list, this.background]);
    }
    colorChanged(event) {
        let color = event.target.value;
        let index = event.target.dataset.index;
        console.log("color " + index + " changed to " + color);
        if (index == "background") {
            this.background = color;
        }
        else {
            this.color_list[index] = color;
            this.colorPickerChanged();
        }
    }
}
MainColorSelectionComponent.ɵfac = function MainColorSelectionComponent_Factory(t) { return new (t || MainColorSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"])); };
MainColorSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainColorSelectionComponent, selectors: [["app-main-color-selection"]], decls: 15, vars: 6, consts: [[1, "color-palette"], [1, "selection"], [1, "num-colors-selection"], ["for", "num_colors", 1, "selection-label"], ["type", "number", "name", "num_colors", 3, "value", "valueChange", "change"], ["class", "color-selection", 4, "ngFor", "ngForOf"], [1, "background-selection"], [1, "background-selection-label"], [1, "background-selection-picker", 3, "colorPicker", "colorPickerChange"], ["type", "text", "data-index", "background", 1, "background-selection-text", 3, "value", "change"], [1, "color-selection"], ["class", "color-selection-label", 4, "ngIf"], [1, "color-selection-picker", 3, "colorPicker", "colorPickerChange"], ["type", "text", 1, "color-selection-text", 3, "value", "change"], [1, "color-selection-label"]], template: function MainColorSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Number of colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MainColorSelectionComponent_Template_input_valueChange_6_listener($event) { return ctx.num_colors = $event; })("change", function MainColorSelectionComponent_Template_input_change_6_listener($event) { return ctx.numColorsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainColorSelectionComponent_div_7_Template, 6, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function MainColorSelectionComponent_Template_input_colorPickerChange_12_listener($event) { return ctx.background = $event; })("colorPickerChange", function MainColorSelectionComponent_Template_input_colorPickerChange_12_listener() { return ctx.colorPickerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainColorSelectionComponent_Template_input_change_14_listener($event) { return ctx.colorChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.num_colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colorPicker", ctx.background);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.background);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".color-palette[_ngcontent-%COMP%] {\n  position: fixed;\n  background: cadetblue;\n  width: 100%;\n  padding: 5px 5px 10px 10px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  overflow-x: auto;\n}\n.color-palette[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.2em;\n  align-items: flex-start;\n  width: 60%;\n  min-width: 500px;\n}\n.color-palette[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 2px;\n  border: 1px solid #eeeeee;\n  outline: none;\n}\n.color-palette[_ngcontent-%COMP%]   .num-colors-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 125px;\n  margin-right: 10px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-selection-picker[_ngcontent-%COMP%] {\n  height: 10vh;\n  max-width: 92%;\n  margin-bottom: 2px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-selection-text[_ngcontent-%COMP%] {\n  max-width: 92%;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100px;\n  margin: 0 15px;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%]   .background-selection-picker[_ngcontent-%COMP%] {\n  height: 10vh;\n  max-width: 92%;\n  margin-bottom: 2px;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%]   .background-selection-text[_ngcontent-%COMP%] {\n  max-width: 92%;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection-label[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .color-selection-label[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .selection-label[_ngcontent-%COMP%] {\n  font-family: Helvetica;\n  color: #efefef;\n  font-size: 1em;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection-picker[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .background-selection-picker[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbG9yLXNlbGVjdGlvbi9tYWluLWNvbG9yLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlGQUFBO0VBRUEsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQURSO0FBSUk7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZSO0FBS0k7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxjQUFBO0FBSlo7QUFRSTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFOUjtBQVFRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU5aO0FBU1E7RUFDSSxjQUFBO0FBUFo7QUFZSTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFWUjtBQWFJO0VBQ0kseUJBQUE7QUFYUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1jb2xvci1zZWxlY3Rpb24vbWFpbi1jb2xvci1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItcGFsZXR0ZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCAxMHB4IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDFweCAycHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAycHggNnB4IDJweDtcclxuXHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG5cclxuICAgIC5zZWxlY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDAuMmVtO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlID0gXCJudW1iZXJcIl17XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5udW0tY29sb3JzLXNlbGVjdGlvbntcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogMTI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xvci1zZWxlY3Rpb257XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgICAuY29sb3Itc2VsZWN0aW9uLXBpY2tlcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jb2xvci1zZWxlY3Rpb24tdGV4dHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrZ3JvdW5kLXNlbGVjdGlvbntcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIC5iYWNrZ3JvdW5kLXNlbGVjdGlvbi1waWNrZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuYmFja2dyb3VuZC1zZWxlY3Rpb24tdGV4dHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuYmFja2dyb3VuZC1zZWxlY3Rpb24tbGFiZWwsIC5jb2xvci1zZWxlY3Rpb24tbGFiZWwsIC5zZWxlY3Rpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgICAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sb3Itc2VsZWN0aW9uLXBpY2tlciwgLmJhY2tncm91bmQtc2VsZWN0aW9uLXBpY2tlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainColorSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-color-selection',
                templateUrl: './main-color-selection.component.html',
                styleUrls: ['./main-color-selection.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"] }]; }, null); })();


/***/ }),

/***/ "uNZM":
/*!********************************************************************!*\
  !*** ./src/app/components/graphs/pie-chart/pie-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class PieChartComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [{ "name": "a", "value": 9 }, { "name": "b", "value": 20 }, { "name": "c", "value": 30 }, { "name": "d", "value": 8 }, { "name": "e", "value": 12 }];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#pie")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + ", " + this.height / 2 + ")");
    }
    drawChart() {
        var chart = this;
        // set the color scale
        const color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
        // Compute the position of each group on the pie:
        const pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]()
            .value(function (d) { return +d; });
        const data_ready = pie(chart.data.map((d) => { return +d.value; }));
        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        this.svg
            .selectAll('pie-slice')
            .data(data_ready)
            .join('path')
            .attr('d', d3__WEBPACK_IMPORTED_MODULE_1__["arc"]()
            .innerRadius(0)
            .outerRadius(this.radius))
            .attr('fill', function (d) { return (color(d.data[1])); })
            .attr("stroke", "black")
            .attr("class", "pie-slice")
            .style("stroke-width", "0.5");
    }
    updateColors() {
        this.svg.selectAll(".pie-slice")
            .attr("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "pie"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pie chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#pie[_ngcontent-%COMP%] {\n  margin: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGlle1xyXG4gICAgbWFyZ2luOiAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie-chart',
                templateUrl: './pie-chart.component.html',
                styleUrls: ['./pie-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ynmJ":
/*!**************************************************************************!*\
  !*** ./src/app/components/graphs/scatter-plot/scatter-plot.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScatterPlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterPlotComponent", function() { return ScatterPlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");




class ScatterPlotComponent {
    constructor(colorservice) {
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        for (let i = 0; i < 100; i++) {
            let data_value = Math.random() * 100;
            let noise_param = 30;
            let noiseX = Math.random() * noise_param - (noise_param / 2);
            let noiseY = Math.random() * noise_param - (noise_param / 2);
            let row = { "x": data_value + noiseX, "y": data_value + noiseY, "value": Math.random() * 8 };
            this.data.push(row);
        }
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(data => {
            this.colors = data;
            this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(data => {
            this.background = data;
        });
    }
    ngOnInit() {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    }
    createSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#scatter")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    }
    drawChart() {
        var chart = this;
        const x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 105])
            .range([0, chart.width]);
        this.svg.append("g")
            .attr("transform", `translate(0, ${chart.height})`)
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        // Add Y axis
        const y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 105])
            .range([chart.height, 0]);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y));
        // Add dots
        this.svg.append('g')
            .selectAll(".scatter_dot")
            .data(this.data)
            .join("circle")
            .attr("class", "scatter_dot")
            .attr("cx", function (d) { return x(d.x); })
            .attr("cy", function (d) { return y(d.y); })
            .attr("r", function (d) { return d.value; })
            .style("fill", "#69b3a2")
            .style("stroke", "#666")
            .style("stroke-width", 0.5)
            .style("opacity", 0.8);
    }
    updateColors() {
        this.svg.selectAll(".scatter_dot")
            .style("fill", (d, i) => { return this.colors[i % this.colors.length]; });
    }
}
ScatterPlotComponent.ɵfac = function ScatterPlotComponent_Factory(t) { return new (t || ScatterPlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"])); };
ScatterPlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScatterPlotComponent, selectors: [["app-scatter-plot"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "scatter"]], template: function ScatterPlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Scatter Plot ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
    } }, styles: ["#scatter[_ngcontent-%COMP%] {\n  margin: 2% 3% 3% 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvc2NhdHRlci1wbG90L3NjYXR0ZXItcGxvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy9zY2F0dGVyLXBsb3Qvc2NhdHRlci1wbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjYXR0ZXJ7XHJcbiAgICBtYXJnaW46IDIlIDMlIDMlIDQlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScatterPlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scatter-plot',
                templateUrl: './scatter-plot.component.html',
                styleUrls: ['./scatter-plot.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_2__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map