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




var TreemapComponent = /** @class */ (function () {
    function TreemapComponent(colorservice) {
        var _this = this;
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
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    TreemapComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    TreemapComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#treemap")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    };
    TreemapComponent.prototype.drawChart = function () {
        var chart = this;
        var root = d3__WEBPACK_IMPORTED_MODULE_1__["stratify"]()
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
    };
    TreemapComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".treemap_rect")
            .style("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return TreemapComponent;
}());

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

/***/ "6BrK":
/*!*********************************************************************!*\
  !*** ./src/app/components/import-colors/import-colors.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImportColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportColorsComponent", function() { return ImportColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var ImportColorsComponent = /** @class */ (function () {
    function ImportColorsComponent() {
        this.colorImported = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ImportColorsComponent.prototype.ngOnInit = function () {
    };
    ImportColorsComponent.prototype.importColors = function (event) {
        var textbox = document.getElementById("import-color-list");
        var color_input = textbox.value;
        // replace operations to get a list of hex values
        color_input = color_input.replace("[", '');
        color_input = color_input.replace("]", '');
        var find = '[#"\'\\s]*'; // removing # so that colors with/ wo # are treated the same
        var re = new RegExp(find, 'g');
        color_input = color_input.replace(re, '');
        var color_list = color_input.split(",");
        // Add the # again to get list of hex codes
        color_list = color_list.map(function (currentElement) {
            return "#" + currentElement;
        });
        this.colorImported.emit(color_list);
    };
    ImportColorsComponent.prototype.cancel = function () {
        this.colorImported.emit(this.colors);
    };
    ImportColorsComponent.ɵfac = function ImportColorsComponent_Factory(t) { return new (t || ImportColorsComponent)(); };
    ImportColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImportColorsComponent, selectors: [["app-import-colors"]], inputs: { colors: "colors" }, outputs: { colorImported: "colorImported" }, decls: 10, vars: 0, consts: [[1, "form-group"], ["for", "import-color-list", 1, "form-text"], ["type", "text", "placeholder", "eg #fffcf2, #ccc5b9, #403d39, ... #eb5e28", "id", "import-color-list", "name", "import-color-list", 1, "form-control"], ["id", "emailHelp", 1, "form-text"], [1, "btn", "btn-secondary", "confirm", 3, "click"], [1, "btn", "btn-light", "cancel", 3, "click"]], template: function ImportColorsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter a list of hex values ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Most palette tools have an option to export a similar format. Note that the '#' is optional");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportColorsComponent_Template_button_click_6_listener($event) { return ctx.importColors($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Import");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImportColorsComponent_Template_button_click_8_listener() { return ctx.cancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["div.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\ndiv.form-group[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\ndiv.form-group[_ngcontent-%COMP%]   button.btn.btn-secondary.confirm[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\ndiv.form-group[_ngcontent-%COMP%]   .form-text[_ngcontent-%COMP%] {\n  color: #efefef;\n  margin-bottom: 5px;\n}\ndiv.form-group[_ngcontent-%COMP%]   label.form-text[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbXBvcnQtY29sb3JzL2ltcG9ydC1jb2xvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxrQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbXBvcnQtY29sb3JzL2ltcG9ydC1jb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICBidXR0b24uYnRue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uLmJ0bi5idG4tc2Vjb25kYXJ5LmNvbmZpcm17XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mb3JtLXRleHR7XHJcbiAgICAgICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsYWJlbC5mb3JtLXRleHR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
    return ImportColorsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-import-colors',
                templateUrl: './import-colors.component.html',
                styleUrls: ['./import-colors.component.scss']
            }]
    }], null, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colorImported: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");





var TintsShadesComponent = /** @class */ (function () {
    function TintsShadesComponent(colorservice) {
        var _this = this;
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    TintsShadesComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    TintsShadesComponent.prototype.createSvg = function () {
        // This is simply multiple area charts on top of one another
        // and not how you would create an actual stacked area chart.
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("figure#shades")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    };
    TintsShadesComponent.prototype.drawChart = function () {
        var e_1, _a, e_2, _b;
        var chart = this;
        var x_vals = [0, 1, 2, 3, 4, 5, 6];
        var y_vals = [0, 1, 2, 3, 4, 5, 6];
        try {
            for (var x_vals_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(x_vals), x_vals_1_1 = x_vals_1.next(); !x_vals_1_1.done; x_vals_1_1 = x_vals_1.next()) {
                var x_val = x_vals_1_1.value;
                try {
                    for (var y_vals_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(y_vals)), y_vals_1_1 = y_vals_1.next(); !y_vals_1_1.done; y_vals_1_1 = y_vals_1.next()) {
                        var y_val = y_vals_1_1.value;
                        this.data.push({ "x": x_val, "y": y_val, "data": 1 });
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (y_vals_1_1 && !y_vals_1_1.done && (_b = y_vals_1.return)) _b.call(y_vals_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (x_vals_1_1 && !x_vals_1_1.done && (_a = x_vals_1.return)) _a.call(x_vals_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Build X scales and axis:
        var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
            .range([0, chart.width])
            .domain(x_vals.map(function (d) { return "" + d; }))
            .padding(0.03);
        this.svg.append("g")
            .attr("transform", "translate(0, " + chart.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x));
        // Build X scales and axis:
        var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
            .range([chart.height, 0])
            .domain(y_vals.map(function (d) { return "" + d; }))
            .padding(0.1);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y));
        this.svg.selectAll()
            .data(this.data, function (d) { return d.x + '-' + d.y; })
            .join("rect")
            .attr("class", "shade-tile")
            .attr("data-row-index", function (d) { return d.y; })
            .attr("x", function (d) { return x("" + d.x); })
            .attr("y", function (d) { return y("" + d.y); })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", function (d) { return "red"; });
    };
    TintsShadesComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".shade-tile")
            .style("fill", function (d, i) {
            var color = d3__WEBPACK_IMPORTED_MODULE_2__["hsl"](_this.colors[d.y % _this.colors.length]);
            var new_color = d3__WEBPACK_IMPORTED_MODULE_2__["hsl"](color.h, color.s, color.l - 0.1 * (3 - d.x));
            return new_color;
        });
    };
    TintsShadesComponent.ɵfac = function TintsShadesComponent_Factory(t) { return new (t || TintsShadesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"])); };
    TintsShadesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TintsShadesComponent, selectors: [["app-tints-shades"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "shades"]], template: function TintsShadesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Tints and Shades ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "figure", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.background);
        } }, styles: ["#shades[_ngcontent-%COMP%] {\n  margin: 5% 5% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvdGludHMtc2hhZGVzL3RpbnRzLXNoYWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy90aW50cy1zaGFkZXMvdGludHMtc2hhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NoYWRlcyB7XHJcbiAgICBtYXJnaW46IDUlIDUlIDAlIDUlO1xyXG59Il19 */"] });
    return TintsShadesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TintsShadesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-tints-shades',
                templateUrl: './tints-shades.component.html',
                styleUrls: ['./tints-shades.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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
var environment = {
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



var ColourServiceService = /** @class */ (function () {
    function ColourServiceService() {
        this.palette = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.background = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string streams
        this.paletteChanged$ = this.palette.asObservable();
        this.backgroundChanged$ = this.background.asObservable();
    }
    // Service message commands
    ColourServiceService.prototype.changePalette = function (palette) {
        this.palette.next(palette.slice(0, palette.length - 1));
        this.background.next(palette.slice(-1)[0]);
    };
    ColourServiceService.ɵfac = function ColourServiceService_Factory(t) { return new (t || ColourServiceService)(); };
    ColourServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColourServiceService, factory: ColourServiceService.ɵfac, providedIn: 'root' });
    return ColourServiceService;
}());

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




var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(colorservice) {
        var _this = this;
        this.colorservice = colorservice;
        this.background = "#fff";
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    TypographyComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    TypographyComponent.prototype.createSvg = function () {
        this.container = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#typography")
            .append("div");
    };
    TypographyComponent.prototype.drawChart = function () {
        this.container.selectAll(".typo")
            .data(this.colors, function (_, i) { return i; })
            .enter()
            .append()
            .html(function (d) {
            var hsl_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](d);
            var highlight_text_color = hsl_color.l > 0.9 ? "#666" : "#fff";
            return "Some choose to highlight <b style=\"color: " + d + "\">like this</b>, \n        while others <b style=\"background-color: " + d + "; color: " + highlight_text_color + "; padding: 1px 3px\">prefer this</b><br>";
        })
            .attr("class", "typo")
            .style("font-size", "1.0em")
            .exit()
            .remove();
    };
    TypographyComponent.prototype.updateColors = function () {
        // adjust the color of non-highlighted text based on whether the bg is light or dark
        var base_font_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](this.background).l < 0.25 ? "#aaa" : "#222";
        // remove all lines of text
        this.container.selectAll(".typo").remove();
        this.container.selectAll(".typo")
            .data(this.colors, function (_, i) { return i; })
            .enter()
            .append()
            .html(function (d) {
            var hsl_color = d3__WEBPACK_IMPORTED_MODULE_1__["hsl"](d);
            var highlight_text_color = hsl_color.l > 0.9 ? "#666" : "#fff"; // adjust color of highlighted text based on highlight bg
            return "<span style=\"color: " + base_font_color + "\">Some choose to highlight <b style=\"color: " + d + "\">like this</b>, \n        while others <b style=\"background-color: " + d + "; color: " + highlight_text_color + "; padding: 1px 3px\">prefer this</b></span><br>";
        })
            .attr("class", "typo")
            .style("font-size", "1.0em")
            .exit()
            .remove();
    };
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
    return TypographyComponent;
}());

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












var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dataviz-palette-tool';
        this.default_palette = ["#4F091D", "#DD4A48", "#f7f3e8", "#97BFB4"];
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
    return AppComponent;
}());

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




var ChoroplethMapComponent = /** @class */ (function () {
    function ChoroplethMapComponent(colorservice) {
        var _this = this;
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [{ "name": "a", "value": 9 }, { "name": "b", "value": 20 }, { "name": "c", "value": 30 }, { "name": "d", "value": 8 }, { "name": "e", "value": 12 }];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    ChoroplethMapComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    ChoroplethMapComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#choropleth")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + ", " + this.height / 2 + ")");
    };
    ChoroplethMapComponent.prototype.drawChart = function () {
        var chart = this;
        var path = d3__WEBPACK_IMPORTED_MODULE_1__["geoPath"]();
        var projection = d3__WEBPACK_IMPORTED_MODULE_1__["geoMercator"]()
            .scale(70)
            .center([80, -40])
            .translate([chart.width / 2, chart.height / 2]);
        // Data and color scale
        var data = new Map();
        var colorScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .range(this.colors);
        // Load external data and boot
        Promise.all([
            d3__WEBPACK_IMPORTED_MODULE_1__["json"]("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
            d3__WEBPACK_IMPORTED_MODULE_1__["csv"]("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function (d) {
                return data.set(d.code, +d.pop);
            })
        ]).then(function (loadData) {
            var topo = loadData[0];

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
                .attr("fill", function (d, i) { return chart.colors[i % chart.colors.length]; })
                .attr("stroke", "#444")
                .attr("stroke-width", 0.25);
        });
    };
    ChoroplethMapComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".choropleth_area")
            .attr("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return ChoroplethMapComponent;
}());

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");





var StackedAreaChartComponent = /** @class */ (function () {
    function StackedAreaChartComponent(colorservice) {
        var _this = this;
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
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    StackedAreaChartComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    StackedAreaChartComponent.prototype.createSvg = function () {
        // This is simply multiple area charts on top of one another
        // and not how you would create an actual stacked area chart.
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("figure#stacked-area")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    };
    StackedAreaChartComponent.prototype.drawChart = function () {
        var e_1, _a;
        var chart = this;
        var x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleTime"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_2__["extent"](this.data, function (d) { return +d.year; }))
            .range([0, chart.width]);
        this.svg.append("g")
            .attr("transform", "translate(0," + chart.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x));
        // Add Y axis
        var y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.data, function (d) { return +d.Value; })])
            .range([chart.height, 0]);
        this.svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y));
        var _loop_1 = function (name_1) {
            var currentData = this_1.data.filter(function (d) { return d.name == name_1; });
            // Add the area
            this_1.svg.append("path")
                .datum(currentData)
                .attr("fill", "#cce5df")
                .attr("class", "stacked-path")
                .attr("stroke", "#eee")
                .attr("stroke-width", 1.1)
                .attr("d", d3__WEBPACK_IMPORTED_MODULE_2__["area"]()
                .x(function (d) { return x(+d["year"]) + 1; })
                .y0(y(0) - 1)
                .y1(function (d) { return y(+d["Value"]); }));
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.data.map(function (d) { return d.name; })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                _loop_1(name_1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    StackedAreaChartComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".stacked-path")
            .attr("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
    StackedAreaChartComponent.ɵfac = function StackedAreaChartComponent_Factory(t) { return new (t || StackedAreaChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"])); };
    StackedAreaChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StackedAreaChartComponent, selectors: [["app-stacked-area-chart"]], inputs: { colors: "colors" }, decls: 4, vars: 2, consts: [[1, "viz"], [1, "viz-header"], ["id", "stacked-area"]], template: function StackedAreaChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Stacked Area Chart ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "figure", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.background);
        } }, styles: ["#stacked-area[_ngcontent-%COMP%] {\n  margin: 5% 5% 0% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvc3RhY2tlZC1hcmVhLWNoYXJ0L3N0YWNrZWQtYXJlYS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYXBocy9zdGFja2VkLWFyZWEtY2hhcnQvc3RhY2tlZC1hcmVhLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YWNrZWQtYXJlYSB7XHJcbiAgICBtYXJnaW46IDUlIDUlIDAlIDUlO1xyXG59Il19 */"] });
    return StackedAreaChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StackedAreaChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-stacked-area-chart',
                templateUrl: './stacked-area-chart.component.html',
                styleUrls: ['./stacked-area-chart.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"] }]; }, { colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-color-selection/main-color-selection.component */ "u8zk");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/test-component/test-component.component */ "ciOt");
/* harmony import */ var _services_colour_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/colour-service.service */ "FQbm");
/* harmony import */ var _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/viz-container/viz-container.component */ "fL9a");
/* harmony import */ var _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graphs/bar-chart/bar-chart.component */ "b+wk");
/* harmony import */ var _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graphs/line-chart/line-chart.component */ "tM6+");
/* harmony import */ var _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/graphs/treemap/treemap.component */ "4fOB");
/* harmony import */ var _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graphs/scatter-plot/scatter-plot.component */ "ynmJ");
/* harmony import */ var _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/graphs/pie-chart/pie-chart.component */ "uNZM");
/* harmony import */ var _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/graphs/choropleth-map/choropleth-map.component */ "Y3VV");
/* harmony import */ var _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/graphs/stacked-area-chart/stacked-area-chart.component */ "YnzT");
/* harmony import */ var _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/graphs/tints-shades/tints-shades.component */ "7iX/");
/* harmony import */ var _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/graphs/typography/typography.component */ "Ix65");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_import_colors_import_colors_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/import-colors/import-colors.component */ "6BrK");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_colour_service_service__WEBPACK_IMPORTED_MODULE_9__["ColourServiceService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordionModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopoverModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapseModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_5__["MainColorSelectionComponent"],
        _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_8__["TestComponentComponent"],
        _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_10__["VizContainerComponent"],
        _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_11__["BarChartComponent"],
        _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
        _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_13__["TreemapComponent"],
        _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_14__["ScatterPlotComponent"],
        _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_15__["PieChartComponent"],
        _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_16__["ChoroplethMapComponent"],
        _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_17__["StackedAreaChartComponent"],
        _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_18__["TintsShadesComponent"],
        _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"],
        _components_import_colors_import_colors_component__WEBPACK_IMPORTED_MODULE_21__["ImportColorsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordionModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopoverModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapseModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_main_color_selection_main_color_selection_component__WEBPACK_IMPORTED_MODULE_5__["MainColorSelectionComponent"],
                    _components_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_8__["TestComponentComponent"],
                    _components_viz_container_viz_container_component__WEBPACK_IMPORTED_MODULE_10__["VizContainerComponent"],
                    _components_graphs_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_11__["BarChartComponent"],
                    _components_graphs_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
                    _components_graphs_treemap_treemap_component__WEBPACK_IMPORTED_MODULE_13__["TreemapComponent"],
                    _components_graphs_scatter_plot_scatter_plot_component__WEBPACK_IMPORTED_MODULE_14__["ScatterPlotComponent"],
                    _components_graphs_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_15__["PieChartComponent"],
                    _components_graphs_choropleth_map_choropleth_map_component__WEBPACK_IMPORTED_MODULE_16__["ChoroplethMapComponent"],
                    _components_graphs_stacked_area_chart_stacked_area_chart_component__WEBPACK_IMPORTED_MODULE_17__["StackedAreaChartComponent"],
                    _components_graphs_tints_shades_tints_shades_component__WEBPACK_IMPORTED_MODULE_18__["TintsShadesComponent"],
                    _components_graphs_typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"],
                    _components_import_colors_import_colors_component__WEBPACK_IMPORTED_MODULE_21__["ImportColorsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordionModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopoverModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapseModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]
                ],
                providers: [_services_colour_service_service__WEBPACK_IMPORTED_MODULE_9__["ColourServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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




var BarChartComponent = /** @class */ (function () {
    function BarChartComponent(colorservice) {
        var _this = this;
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
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    BarChartComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#bar")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    };
    BarChartComponent.prototype.drawChart = function () {
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
        var range = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data.map(function (d) { return +d.Value; }));
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
    };
    BarChartComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".bars")
            .attr("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return BarChartComponent;
}());

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
var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent(colorservice) {
        this.colorservice = colorservice;
        this.colors = [];
        this.background = "#fff";
    }
    TestComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            // this.createColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
            // this.createColors();
            // this.drawChart();
        });
        // this.createSvg();
        // this.createColors();
        // this.drawChart();
    };
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
    return TestComponentComponent;
}());

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



var VizContainerComponent = /** @class */ (function () {
    function VizContainerComponent(colorservice) {
        this.colorservice = colorservice;
    }
    VizContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    };
    VizContainerComponent.ɵfac = function VizContainerComponent_Factory(t) { return new (t || VizContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_1__["ColourServiceService"])); };
    VizContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VizContainerComponent, selectors: [["app-viz-container"]], decls: 2, vars: 2, consts: [[1, "viz-container"], [2, "height", "1000px"]], template: function VizContainerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
        } }, styles: [".viz-container[_ngcontent-%COMP%] {\n  width: 400px;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXotY29udGFpbmVyL3Zpei1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXotY29udGFpbmVyL3Zpei1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudml6LWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn0iXX0= */"] });
    return VizContainerComponent;
}());

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




var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(colorservice) {
        var _this = this;
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
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    LineChartComponent.prototype.createSvg = function () {
        this.data = this.raw_data.map(function (d) {
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
    };
    LineChartComponent.prototype.drawChart = function () {
        var chart = this;
        var range = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](this.data.map(function (d) { return +d.Value; }));
        // group the data: I want to draw one line per group
        var sumstat = d3__WEBPACK_IMPORTED_MODULE_1__["group"](this.data, function (d) { return d["Label"]; }); // nest function allows to group the calculation per level of a factor
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
                .x(function (b) { return x(b["date"]); })
                .y(function (b) { return y(b["Value"]); })(d[1]);
        });
    };
    LineChartComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".lines")
            .attr("stroke", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return LineChartComponent;
}());

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/colour-service.service */ "FQbm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _import_colors_import_colors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../import-colors/import-colors.component */ "6BrK");








function MainColorSelectionComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Color Palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainColorSelectionComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainColorSelectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainColorSelectionComponent_div_8_span_1_Template, 3, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainColorSelectionComponent_div_8_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorPickerChange", function MainColorSelectionComponent_div_8_Template_input_colorPickerChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var index_r2 = ctx.$implicit; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r6.color_list[index_r2] = $event); })("colorPickerChange", function MainColorSelectionComponent_div_8_Template_input_colorPickerChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.colorPickerChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MainColorSelectionComponent_div_8_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.colorChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var index_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx_r0.color_list[index_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colorPicker", ctx_r0.color_list[index_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.color_list[index_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", index_r2);
} }
function MainColorSelectionComponent_app_import_colors_16_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-import-colors", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorImported", function MainColorSelectionComponent_app_import_colors_16_Template_app_import_colors_colorImported_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.updateImportedColors($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@enterAnimation", undefined)("colors", ctx_r1.color_list);
} }
var MainColorSelectionComponent = /** @class */ (function () {
    function MainColorSelectionComponent(colourservice) {
        this.colourservice = colourservice;
        this.num_colors = 4;
        this.list = [0, 1, 2, 3, 4];
        this.color_list = [];
        this.background = "#ffffff";
        this.isCollapsed = false;
        this.default_palette = ["#4F091D", "#DD4A48", "#F5EEDC", "#97BFB4"];
    }
    MainColorSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = Array.from({ length: this.num_colors }, function (_, i) { return i; });
        this.color_list = Array.from({ length: this.num_colors }, function (_, i) { return _this.default_palette[i % 4]; });
    };
    MainColorSelectionComponent.prototype.colorPickerChanged = function () {
        this.colourservice.changePalette(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.color_list, [this.background]));
    };
    MainColorSelectionComponent.prototype.numColorsChange = function (event) {
        var _this = this;
        this.list = Array.from({ length: event.target.value }, function (_, i) { return i; }).slice();
        this.color_list = Array.from({ length: event.target.value }, function (_, i) { return _this.color_list[i]; });
        this.color_list = this.color_list.map(function (color) { return color === undefined ? "#ffffff" : color; });
        this.colourservice.changePalette(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.color_list, [this.background]));
    };
    MainColorSelectionComponent.prototype.colorChanged = function (event) {
        var color = event.target.value;
        var index = event.target.dataset.index; 
        
        if (index == "background") {
            this.background = color;
            this.colorPickerChanged();
        }
        else {
            this.color_list[index] = color;
            this.colorPickerChanged();
        }
    };
    // Update colors when event is emitted from import colours component.
    MainColorSelectionComponent.prototype.updateImportedColors = function (event) {
        this.color_list = Array.from(event);
        // Change the index list for the color pickers for the palette
        this.list = event.slice().map(function (_, i) { return i; });
        // Update palette and background colors
        this.color_list = event.slice();
        this.num_colors = this.color_list.length;
        this.colourservice.changePalette(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.color_list, [this.background]));
        this.isCollapsed = false;
    };
    MainColorSelectionComponent.ɵfac = function MainColorSelectionComponent_Factory(t) { return new (t || MainColorSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"])); };
    MainColorSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainColorSelectionComponent, selectors: [["app-main-color-selection"]], decls: 17, vars: 7, consts: [[1, "color-palette"], [1, "selection"], [1, "num-colors-selection"], ["for", "num_colors", 1, "selection-label"], ["type", "number", "name", "num_colors", 3, "value", "valueChange", "change"], ["type", "button", "value", "Import colors", 1, "import-btn", "btn", "btn-light", 3, "click"], ["class", "color-selection", 4, "ngFor", "ngForOf"], [1, "background-selection"], [1, "background-selection-label"], [1, "background-selection-picker", 3, "colorPicker", "colorPickerChange"], ["type", "text", "data-index", "background", 1, "background-selection-text", 3, "value", "change"], [3, "colors", "colorImported", 4, "ngIf"], [1, "color-selection"], ["class", "color-selection-label", 4, "ngIf"], [1, "color-selection-picker", 3, "colorPicker", "colorPickerChange"], ["type", "text", 1, "color-selection-text", 3, "value", "change"], [1, "color-selection-label"], [3, "colors", "colorImported"]], template: function MainColorSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Number of colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function MainColorSelectionComponent_Template_input_valueChange_6_listener($event) { return ctx.num_colors = $event; })("change", function MainColorSelectionComponent_Template_input_change_6_listener($event) { return ctx.numColorsChange($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainColorSelectionComponent_Template_input_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MainColorSelectionComponent_div_8_Template, 6, 7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Background");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorPickerChange", function MainColorSelectionComponent_Template_input_colorPickerChange_13_listener($event) { return ctx.background = $event; })("colorPickerChange", function MainColorSelectionComponent_Template_input_colorPickerChange_13_listener() { return ctx.colorPickerChanged(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MainColorSelectionComponent_Template_input_change_15_listener($event) { return ctx.colorChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MainColorSelectionComponent_app_import_colors_16_Template, 1, 2, "app-import-colors", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.num_colors);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.background);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colorPicker", ctx.background);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.background);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCollapsed);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _import_colors_import_colors_component__WEBPACK_IMPORTED_MODULE_6__["ImportColorsComponent"]], styles: [".color-palette[_ngcontent-%COMP%] {\n  position: fixed;\n  background: cadetblue;\n  width: 100%;\n  padding: 5px 5px 10px 10px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  overflow-x: auto;\n}\n.color-palette[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.2em;\n  align-items: flex-start;\n  min-width: 500px;\n  padding-bottom: 10px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #efefef;\n}\n.color-palette[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .import-btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.color-palette[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 2px;\n  border: 1px solid #eeeeee;\n  outline: none;\n}\n.color-palette[_ngcontent-%COMP%]   .num-colors-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 125px;\n  margin-right: 10px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-selection-picker[_ngcontent-%COMP%] {\n  height: 10vh;\n  max-width: 92%;\n  margin-bottom: 2px;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection[_ngcontent-%COMP%]   .color-selection-text[_ngcontent-%COMP%] {\n  max-width: 92%;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100px;\n  margin: 0 15px;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%]   .background-selection-picker[_ngcontent-%COMP%] {\n  height: 10vh;\n  max-width: 92%;\n  margin-bottom: 2px;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection[_ngcontent-%COMP%]   .background-selection-text[_ngcontent-%COMP%] {\n  max-width: 92%;\n}\n.color-palette[_ngcontent-%COMP%]   .background-selection-label[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .color-selection-label[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .selection-label[_ngcontent-%COMP%] {\n  font-family: Helvetica;\n  color: #efefef;\n  font-size: 1em;\n}\n.color-palette[_ngcontent-%COMP%]   .color-selection-picker[_ngcontent-%COMP%], .color-palette[_ngcontent-%COMP%]   .background-selection-picker[_ngcontent-%COMP%] {\n  border: 1px solid #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWNvbG9yLXNlbGVjdGlvbi9tYWluLWNvbG9yLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlGQUFBO0VBRUEsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBRFI7QUFHUTtFQUNJLGVBQUE7QUFEWjtBQUtJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFIUjtBQU1JO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9JO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFPUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVFRO0VBQ0ksY0FBQTtBQU5aO0FBVUk7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUlI7QUFVUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFSWjtBQVdRO0VBQ0ksY0FBQTtBQVRaO0FBYUk7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBWFI7QUFjSTtFQUNJLHlCQUFBO0FBWlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tY29sb3Itc2VsZWN0aW9uL21haW4tY29sb3Itc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBhbGV0dGV7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XHJcblxyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAuc2VsZWN0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiAwLjJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG5cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcblxyXG4gICAgICAgIC5pbXBvcnQtYnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGUgPSBcIm51bWJlclwiXXtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bS1jb2xvcnMtc2VsZWN0aW9ue1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9yLXNlbGVjdGlvbntcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcblxyXG4gICAgICAgIC5jb2xvci1zZWxlY3Rpb24tcGlja2Vye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmNvbG9yLXNlbGVjdGlvbi10ZXh0e1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tncm91bmQtc2VsZWN0aW9ue1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuXHJcbiAgICAgICAgLmJhY2tncm91bmQtc2VsZWN0aW9uLXBpY2tlcntcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5iYWNrZ3JvdW5kLXNlbGVjdGlvbi10ZXh0e1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkyJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tncm91bmQtc2VsZWN0aW9uLWxhYmVsLCAuY29sb3Itc2VsZWN0aW9uLWxhYmVsLCAuc2VsZWN0aW9uLWxhYmVse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICAgICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9yLXNlbGVjdGlvbi1waWNrZXIsIC5iYWNrZ3JvdW5kLXNlbGVjdGlvbi1waWNrZXJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0, "overflow-y": "hidden" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 1, "overflow-y": "hidden" }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ] } });
    return MainColorSelectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainColorSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-main-color-selection',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0, "overflow-y": "hidden" }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 1, "overflow-y": "hidden" }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                        ])
                    ])
                ],
                templateUrl: './main-color-selection.component.html',
                styleUrls: ['./main-color-selection.component.scss']
            }]
    }], function () { return [{ type: src_app_services_colour_service_service__WEBPACK_IMPORTED_MODULE_3__["ColourServiceService"] }]; }, null); })();


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




var PieChartComponent = /** @class */ (function () {
    function PieChartComponent(colorservice) {
        var _this = this;
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [{ "name": "a", "value": 9 }, { "name": "b", "value": 20 }, { "name": "c", "value": 30 }, { "name": "d", "value": 8 }, { "name": "e", "value": 12 }];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        this.radius = Math.min(this.width, this.height) / 2 - this.margin;
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
            // this.drawChart();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    PieChartComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#pie")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + ", " + this.height / 2 + ")");
    };
    PieChartComponent.prototype.drawChart = function () {
        var chart = this;
        // set the color scale
        var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"]()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
        // Compute the position of each group on the pie:
        var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]()
            .value(function (d) { return +d; });
        var data_ready = pie(chart.data.map(function (d) { return +d.value; }));
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
    };
    PieChartComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".pie-slice")
            .attr("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return PieChartComponent;
}());

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




var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

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




var ScatterPlotComponent = /** @class */ (function () {
    function ScatterPlotComponent(colorservice) {
        var _this = this;
        this.colorservice = colorservice;
        this.background = "#fff";
        this.data = [];
        this.margin = 20;
        this.width = 200;
        this.height = 200;
        for (var i = 0; i < 100; i++) {
            var data_value = Math.random() * 100;
            var noise_param = 30;
            var noiseX = Math.random() * noise_param - (noise_param / 2);
            var noiseY = Math.random() * noise_param - (noise_param / 2);
            var row = { "x": data_value + noiseX, "y": data_value + noiseY, "value": Math.random() * 8 };
            this.data.push(row);
        }
        this.palette_subscription = this.colorservice.paletteChanged$.subscribe(function (data) {
            _this.colors = data;
            _this.updateColors();
        });
        this.background_subscription = this.colorservice.backgroundChanged$.subscribe(function (data) {
            _this.background = data;
        });
    }
    ScatterPlotComponent.prototype.ngOnInit = function () {
        this.createSvg();
        this.drawChart();
        this.updateColors();
    };
    ScatterPlotComponent.prototype.createSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("figure#scatter")
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .attr('preserveAspectRatio', 'xMinYMin');
    };
    ScatterPlotComponent.prototype.drawChart = function () {
        var chart = this;
        var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
            .domain([0, 105])
            .range([0, chart.width]);
        this.svg.append("g")
            .attr("transform", "translate(0, " + chart.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x));
        // Add Y axis
        var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
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
    };
    ScatterPlotComponent.prototype.updateColors = function () {
        var _this = this;
        this.svg.selectAll(".scatter_dot")
            .style("fill", function (d, i) { return _this.colors[i % _this.colors.length]; });
    };
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
    return ScatterPlotComponent;
}());

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
    .catch(function (err) { return console.error(err); });


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