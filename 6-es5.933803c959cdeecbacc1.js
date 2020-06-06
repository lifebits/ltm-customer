function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"Yt+F":function(t,e,n){"use strict";n.r(e),n.d(e,"MapsModule",(function(){return $}));var o,i,a,l,r=n("ofXK"),s=n("tyNb"),c=n("fXoL"),u=((l=function(){function t(){_classCallCheck(this,t),this.defaultMapsOptions={center:{lat:50.7775672,lng:86.6954942},zoom:8,scrollwheel:!0}}return _createClass(t,[{key:"addMarkers",value:function(t,e,n){var o=this,i=[];return e.forEach((function(e){var a=new o.googleAPI.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:t,title:e.city,icon:"assets/maps/map-marker.png",item:{location:e.city.toLowerCase().replace(/\s/g,""),state:e.state,rank:e.rank}});n&&a.addListener("click",(function(){n(this)})),i.push(a)})),i}},{key:"clearMarkers",value:function(t){this.setMapOnAll(null,t)}},{key:"showMarkers",value:function(t,e){this.setMapOnAll(t,e)}},{key:"clearMarkersAndClusterer",value:function(t){t.clearMarkers()}},{key:"setMapOnAll",value:function(t,e){e.forEach((function(e){e.setMap(t)}))}},{key:"loadAPI",value:function(){var e=this;return new Promise((function(n){window.onMapApiLoaded=function(){console.log("google maps API loaded"),e.googleAPI=window.google,n(e.googleAPI),delete window.onMapApiLoaded},t.loadScript()}))}}],[{key:"loadScript",value:function(){console.log("Loading Map API..");var t=document.createElement("script");t.async=!0,t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcuLH_XAAW8Ggg-9YN_Y_8QYcYp0Qa5fU&language=ru&callback=onMapApiLoaded",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)}}]),t}()).\u0275fac=function(t){return new(t||l)},l.\u0275prov=c.Hb({token:l,factory:l.\u0275fac,providedIn:"root"}),l),g=((a=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.call(this)).mapIsCreated=!1,t}return _createClass(n,[{key:"initMap",value:function(){var t=this;return Promise.all([this.loadAPI()]).then((function(e){var n=e[0].maps,o=Object.assign(t.defaultMapsOptions,{mapTypeControlOptions:{style:n.MapTypeControlStyle.DEFAULT,position:n.ControlPosition.TOP_RIGHT}});t.map=new n.Map(document.getElementById("map"),o),t.mapIsCreated=!0,console.log("INIT",{result:e,mapsOptions:o}),console.log(document.getElementById("map"))}))}}]),n}(u)).\u0275fac=function(t){return new(t||a)},a.\u0275prov=c.Hb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),h=((i=function(){function t(){_classCallCheck(this,t),this.close=new c.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.close.emit(!0)}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=c.Fb({type:i,selectors:[["app-aggregator-top-side"]],outputs:{close:"close"},decls:17,vars:0,consts:[[1,"top-side"],[2,"display","flex","justify-content","space-between","max-width","1200px","min-width","800px","margin","0 auto"],[1,"container","left"],["height","30px","src","assets/images/logo.png","alt","logo"],[1,"container","right"],[1,"inc"],["width","12","height","18","viewBox","0 0 12 18","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6 0.875C2.90186 0.875 0.375 3.40186 0.375 6.5C0.375 7.37891 0.731446 8.38721 1.21484 9.48828C1.69824 10.5894 2.3208 11.7588 2.95312 12.8477C4.21777 15.0278 5.49219 16.8516 5.49219 16.8516L6 17.5938L6.50781 16.8516C6.50781 16.8516 7.78223 15.0278 9.04688 12.8477C9.6792 11.7588 10.3018 10.5894 10.7852 9.48828C11.2686 8.38721 11.625 7.37891 11.625 6.5C11.625 3.40186 9.09814 0.875 6 0.875ZM6 2.125C8.42432 2.125 10.375 4.07568 10.375 6.5C10.375 7.00049 10.1064 7.94775 9.65234 8.98047C9.19824 10.0132 8.5708 11.1582 7.95312 12.2227C6.97168 13.917 6.36133 14.813 6 15.3477C5.63867 14.813 5.02832 13.917 4.04688 12.2227C3.4292 11.1582 2.80176 10.0132 2.34766 8.98047C1.89355 7.94775 1.625 7.00049 1.625 6.5C1.625 4.07568 3.57568 2.125 6 2.125ZM6 5.25C5.30908 5.25 4.75 5.80908 4.75 6.5C4.75 7.19092 5.30908 7.75 6 7.75C6.69092 7.75 7.25 7.19092 7.25 6.5C7.25 5.80908 6.69092 5.25 6 5.25Z","fill","#222222"],[1,"text"],[1,"inc",2,"margin-left","20px","cursor","pointer"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8 0.5C4.51367 0.5 1.58887 2.89502 0.753906 6.125H2.04297C2.84131 3.59082 5.20703 1.75 8 1.75C11.4473 1.75 14.25 4.55273 14.25 8C14.25 11.4473 11.4473 14.25 8 14.25C5.20703 14.25 2.84131 12.4092 2.04297 9.875H0.753906C1.58887 13.105 4.51367 15.5 8 15.5C12.1357 15.5 15.5 12.1357 15.5 8C15.5 3.86426 12.1357 0.5 8 0.5ZM7.58984 5.05078L6.69141 5.94922L8.11719 7.375H0.5V8.625H8.11719L6.69141 10.0508L7.58984 10.9492L10.0898 8.44922L10.5195 8L10.0898 7.55078L7.58984 5.05078Z","fill","#222222"],[1,"text",3,"click"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div",1),c.Ob(2,"div",2),c.Mb(3,"img",3),c.Ob(4,"span"),c.kc(5,"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d"),c.Nb(),c.Nb(),c.Ob(6,"div",4),c.Ob(7,"div",5),c.Zb(),c.Ob(8,"svg",6),c.Mb(9,"path",7),c.Nb(),c.Yb(),c.Ob(10,"div",8),c.kc(11,"\u0411\u0438\u0439\u0441\u043a, \u0440-\u043d \u041d\u0430\u0433\u043e\u0440\u043d\u044b\u0439 (\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439)"),c.Nb(),c.Nb(),c.Ob(12,"div",9),c.Zb(),c.Ob(13,"svg",10),c.Mb(14,"path",11),c.Nb(),c.Yb(),c.Ob(15,"div",12),c.Wb("click",(function(){return e.onClose()})),c.kc(16,"\u0412\u044b\u0439\u0442\u0438"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb())},styles:[".top-side[_ngcontent-%COMP%]{padding:16px 0;box-shadow:0 1px 4px rgba(17,17,26,.1);background-color:#fff}.container[_ngcontent-%COMP%]{color:#222}.container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:16px;height:16px;margin-top:2px;margin-left:6px}.left[_ngcontent-%COMP%]{font-weight:500}.right[_ngcontent-%COMP%]{font-size:15px;font-weight:400;text-align:right}"]}),i),d=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c.Fb({type:o,selectors:[["app-aggregator-tag-viewer"]],decls:11,vars:0,consts:[[1,"tag-viewer"],[1,"tag"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"span",1),c.kc(2,"#\u041a\u043e\u0440\u043e\u043d\u043e\u0412\u0438\u0440\u0443\u0441"),c.Nb(),c.Ob(3,"span",1),c.kc(4,"#\u0421\u0438\u0434\u0438\u043c\u0414\u043e\u043c\u0430"),c.Nb(),c.Ob(5,"span",1),c.kc(6,"#\u041c\u0443\u0441\u043e\u0440\u0412\u0413\u043e\u0440\u043e\u0434\u0435"),c.Nb(),c.Ob(7,"span",1),c.kc(8,"#\u041d\u0430\u043a\u043e\u0440\u043c\u0438\u0413\u043e\u043b\u043e\u0434\u043d\u044b\u0445"),c.Nb(),c.Ob(9,"span",1),c.kc(10,"#\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0435 \u0434\u043e\u0440\u043e\u0433\u0438"),c.Nb(),c.Nb())},styles:[".tag-viewer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;position:relative;height:60px;width:60%;min-width:700px;margin:0 auto;padding:0 20px;background-color:#fff;box-shadow:0 1px 4px rgba(17,17,26,.1);border-radius:8px}.tag[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:20px;color:#af52de;cursor:pointer}"]}),o),p=n("8LU1");n("HDdC"),n("LRne");var b=n("XNiG"),f=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=arguments.length>1?arguments[1]:void 0,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];_classCallCheck(this,t),this._multiple=n,this._emitChanges=i,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new b.a,o&&o.length&&(n?o.forEach((function(t){return e._markSelected(t)})):this._markSelected(o[0]),this._selectedToEmit.length=0)}return _createClass(t,[{key:"select",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];this._verifyValueAssignment(n),n.forEach((function(e){return t._markSelected(e)})),this._emitChangeEvent()}},{key:"deselect",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];this._verifyValueAssignment(n),n.forEach((function(e){return t._unmarkSelected(e)})),this._emitChangeEvent()}},{key:"toggle",value:function(t){this.isSelected(t)?this.deselect(t):this.select(t)}},{key:"clear",value:function(){this._unmarkAll(),this._emitChangeEvent()}},{key:"isSelected",value:function(t){return this._selection.has(t)}},{key:"isEmpty",value:function(){return 0===this._selection.size}},{key:"hasValue",value:function(){return!this.isEmpty()}},{key:"sort",value:function(t){this._multiple&&this.selected&&this._selected.sort(t)}},{key:"isMultipleSelection",value:function(){return this._multiple}},{key:"_emitChangeEvent",value:function(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}},{key:"_markSelected",value:function(t){this.isSelected(t)||(this._multiple||this._unmarkAll(),this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}},{key:"_unmarkSelected",value:function(t){this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}},{key:"_unmarkAll",value:function(){var t=this;this.isEmpty()||this._selection.forEach((function(e){return t._unmarkSelected(e)}))}},{key:"_verifyValueAssignment",value:function(t){if(t.length>1&&!this._multiple)throw Error("Cannot pass multiple values into SelectionModel with single-value mode.")}},{key:"selected",get:function(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}}]),t}();n("DH7j"),n("lJxs"),n("XoHu"),n("Cfvw");var m,_,v,C,y=new c.q("NgValueAccessor"),k=n("FKr1"),w=n("u47x"),O=["button"],M=["*"],x=new c.q("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS"),T={provide:y,useExisting:Object(c.T)((function(){return S})),multi:!0},P=function t(){_classCallCheck(this,t)},N=0,A=function t(e,n){_classCallCheck(this,t),this.source=e,this.value=n},S=((m=function(){function t(e,n){_classCallCheck(this,t),this._changeDetector=e,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=function(){},this._onTouched=function(){},this._name="mat-button-toggle-group-".concat(N++),this.valueChange=new c.n,this.change=new c.n,this.appearance=n&&n.appearance?n.appearance:"standard"}return _createClass(t,[{key:"ngOnInit",value:function(){this._selectionModel=new f(this.multiple,void 0,!1)}},{key:"ngAfterContentInit",value:function(){var t;(t=this._selectionModel).select.apply(t,_toConsumableArray(this._buttonToggles.filter((function(t){return t.checked}))))}},{key:"writeValue",value:function(t){this.value=t,this._changeDetector.markForCheck()}},{key:"registerOnChange",value:function(t){this._controlValueAccessorChangeFn=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"setDisabledState",value:function(t){this.disabled=t}},{key:"_emitChangeEvent",value:function(){var t=this.selected,e=Array.isArray(t)?t[t.length-1]:t,n=new A(e,this.value);this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}},{key:"_syncButtonToggle",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.multiple||!this.selected||t.checked||(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then((function(){return n._updateModelValue(o)})):this._updateModelValue(o)}},{key:"_isSelected",value:function(t){return this._selectionModel&&this._selectionModel.isSelected(t)}},{key:"_isPrechecked",value:function(t){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some((function(e){return null!=t.value&&e===t.value})):t.value===this._rawValue)}},{key:"_setSelectionByValue",value:function(t){var e=this;if(this._rawValue=t,this._buttonToggles)if(this.multiple&&t){if(!Array.isArray(t))throw Error("Value must be an array in multiple-selection mode.");this._clearSelection(),t.forEach((function(t){return e._selectValue(t)}))}else this._clearSelection(),this._selectValue(t)}},{key:"_clearSelection",value:function(){this._selectionModel.clear(),this._buttonToggles.forEach((function(t){return t.checked=!1}))}},{key:"_selectValue",value:function(t){var e=this._buttonToggles.find((function(e){return null!=e.value&&e.value===t}));e&&(e.checked=!0,this._selectionModel.select(e))}},{key:"_updateModelValue",value:function(t){t&&this._emitChangeEvent(),this.valueChange.emit(this.value)}},{key:"name",get:function(){return this._name},set:function(t){var e=this;this._name=t,this._buttonToggles&&this._buttonToggles.forEach((function(t){t.name=e._name,t._markForCheck()}))}},{key:"vertical",get:function(){return this._vertical},set:function(t){this._vertical=Object(p.a)(t)}},{key:"value",get:function(){var t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map((function(t){return t.value})):t[0]?t[0].value:void 0},set:function(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}},{key:"selected",get:function(){var t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}},{key:"multiple",get:function(){return this._multiple},set:function(t){this._multiple=Object(p.a)(t)}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=Object(p.a)(t),this._buttonToggles&&this._buttonToggles.forEach((function(t){return t._markForCheck()}))}}]),t}()).\u0275fac=function(t){return new(t||m)(c.Lb(c.h),c.Lb(x,8))},m.\u0275dir=c.Gb({type:m,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,e,n){var o;1&t&&c.Eb(n,L,!0),2&t&&c.ec(o=c.Xb())&&(e._buttonToggles=o)},hostAttrs:["role","group",1,"mat-button-toggle-group"],hostVars:5,hostBindings:function(t,e){2&t&&(c.Cb("aria-disabled",e.disabled),c.Db("mat-button-toggle-vertical",e.vertical)("mat-button-toggle-group-appearance-standard","standard"===e.appearance))},inputs:{appearance:"appearance",name:"name",vertical:"vertical",value:"value",multiple:"multiple",disabled:"disabled"},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[c.Ab([T,{provide:P,useExisting:m}])]}),m),I=Object(k.e)((function t(){_classCallCheck(this,t)})),L=((C=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,i,a,l,r){var s;_classCallCheck(this,n),(s=e.call(this))._changeDetectorRef=o,s._elementRef=i,s._focusMonitor=a,s._isSingleSelector=!1,s._checked=!1,s.ariaLabelledby=null,s._disabled=!1,s.change=new c.n;var u=Number(l);return s.tabIndex=u||0===u?u:null,s.buttonToggleGroup=t,s.appearance=r&&r.appearance?r.appearance:"standard",s}return _createClass(n,[{key:"ngOnInit",value:function(){var t=this.buttonToggleGroup;this._isSingleSelector=t&&!t.multiple,this._type=this._isSingleSelector?"radio":"checkbox",this.id=this.id||"mat-button-toggle-".concat(N++),this._isSingleSelector&&(this.name=t.name),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked)),this._focusMonitor.monitor(this._elementRef,!0)}},{key:"ngOnDestroy",value:function(){var t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}},{key:"focus",value:function(t){this._buttonElement.nativeElement.focus(t)}},{key:"_onButtonClick",value:function(){var t=!!this._isSingleSelector||!this._checked;t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new A(this,this.value))}},{key:"_markForCheck",value:function(){this._changeDetectorRef.markForCheck()}},{key:"buttonId",get:function(){return"".concat(this.id,"-button")}},{key:"appearance",get:function(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance},set:function(t){this._appearance=t}},{key:"checked",get:function(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked},set:function(t){var e=Object(p.a)(t);e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled},set:function(t){this._disabled=Object(p.a)(t)}}]),n}(I)).\u0275fac=function(t){return new(t||C)(c.Lb(S,8),c.Lb(c.h),c.Lb(c.l),c.Lb(w.a),c.Tb("tabindex"),c.Lb(x,8))},C.\u0275cmp=c.Fb({type:C,selectors:[["mat-button-toggle"]],viewQuery:function(t,e){var n;1&t&&c.nc(O,!0),2&t&&c.ec(n=c.Xb())&&(e._buttonElement=n.first)},hostAttrs:[1,"mat-button-toggle"],hostVars:11,hostBindings:function(t,e){1&t&&c.Wb("focus",(function(){return e.focus()})),2&t&&(c.Cb("tabindex",-1)("id",e.id)("name",null),c.Db("mat-button-toggle-standalone",!e.buttonToggleGroup)("mat-button-toggle-checked",e.checked)("mat-button-toggle-disabled",e.disabled)("mat-button-toggle-appearance-standard","standard"===e.appearance))},inputs:{disableRipple:"disableRipple",ariaLabelledby:["aria-labelledby","ariaLabelledby"],tabIndex:"tabIndex",appearance:"appearance",checked:"checked",disabled:"disabled",id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],value:"value"},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[c.yb],ngContentSelectors:M,decls:6,vars:9,consts:[["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"id","disabled","click"],["button",""],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,e){if(1&t&&(c.cc(),c.Ob(0,"button",0,1),c.Wb("click",(function(){return e._onButtonClick()})),c.Ob(2,"div",2),c.bc(3),c.Nb(),c.Nb(),c.Mb(4,"div",3),c.Mb(5,"div",4)),2&t){var n=c.fc(1);c.dc("id",e.buttonId)("disabled",e.disabled||null),c.Cb("tabindex",e.disabled?-1:e.tabIndex)("aria-pressed",e.checked)("name",e.name||null)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),c.Bb(5),c.dc("matRippleTrigger",n)("matRippleDisabled",e.disableRipple||e.disabled)}},directives:[k.b],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],encapsulation:2,changeDetection:0}),C),E=((v=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:v}),v.\u0275inj=c.Ib({factory:function(t){return new(t||v)},imports:[[k.a,k.c],k.a]}),v),V=((_=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||_)},_.\u0275cmp=c.Fb({type:_,selectors:[["app-aggregator-filter-nav"]],decls:20,vars:1,consts:[[2,"margin","30px 20px"],["name","fontStyle","aria-label","Font Style",2,"display","flex","justify-content","space-between"],["value","all",3,"checked"],["value","bold"],["value","italic"],["value","underline"]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Ob(1,"mat-button-toggle-group",1),c.Ob(2,"mat-button-toggle",2),c.kc(3,"\u0412\u0441\u0435"),c.Nb(),c.Ob(4,"mat-button-toggle",3),c.kc(5,"\u041d\u043e\u0432\u044b\u0435"),c.Nb(),c.Ob(6,"mat-button-toggle",4),c.kc(7,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"),c.Nb(),c.Ob(8,"mat-button-toggle",5),c.kc(9,"\u041e\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043c\u044b\u0435"),c.Nb(),c.Ob(10,"mat-button-toggle",5),c.kc(11,"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435"),c.Nb(),c.Ob(12,"mat-button-toggle",5),c.kc(13,"\u0414\u043e\u0440\u043e\u0433\u0438"),c.Nb(),c.Ob(14,"mat-button-toggle",5),c.kc(15,"\u0411\u043b\u0430\u0433\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"),c.Nb(),c.Ob(16,"mat-button-toggle",5),c.kc(17,"\u0412\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u0441\u0442\u0432\u043e"),c.Nb(),c.Ob(18,"mat-button-toggle",5),c.kc(19,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),c.Nb(),c.Nb(),c.Nb()),2&t&&(c.Bb(2),c.dc("checked",!0))},directives:[S,L],styles:["mat-button-toggle[_ngcontent-%COMP%]{flex-grow:1}mat-button-toggle[_ngcontent-%COMP%]     .mat-button-toggle-label-content{line-height:40px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#37474f;color:#fff}"]}),_);function j(t,e){if(1&t&&(c.Ob(0,"div",7),c.Zb(),c.Ob(1,"svg",13),c.Mb(2,"path",14),c.Nb(),c.Yb(),c.Ob(3,"span"),c.kc(4),c.Nb(),c.Nb()),2&t){var n=c.ac().$implicit;c.Bb(4),c.lc(n.likeCount)}}function B(t,e){if(1&t&&(c.Ob(0,"div",3),c.Ob(1,"h3"),c.kc(2),c.Nb(),c.Ob(3,"div",4),c.Ob(4,"div",5),c.Ob(5,"span"),c.kc(6),c.Nb(),c.kc(7," \u2022 "),c.Ob(8,"span"),c.kc(9),c.Nb(),c.Nb(),c.Ob(10,"div",6),c.Ob(11,"div",7),c.Zb(),c.Ob(12,"svg",8),c.Mb(13,"path",9),c.Nb(),c.Yb(),c.Ob(14,"span"),c.kc(15),c.Nb(),c.Nb(),c.Ob(16,"div",7),c.Zb(),c.Ob(17,"svg",10),c.Mb(18,"path",11),c.Nb(),c.Yb(),c.Ob(19,"span"),c.kc(20),c.Nb(),c.Nb(),c.jc(21,j,5,1,"div",12),c.Nb(),c.Nb(),c.Nb()),2&t){var n=e.$implicit;c.Bb(2),c.lc(n.title),c.Bb(4),c.lc(n.userName),c.Bb(3),c.lc(n.data),c.Bb(6),c.lc(n.viewCount),c.Bb(5),c.lc(n.msgCount),c.Bb(1),c.dc("ngIf",n.likeCount)}}var H,F,R=[{title:"\u041f\u043e\u0441\u0430\u0434\u0438 \u0441\u0432\u043e\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u0434\u0440\u0443\u0436\u0435, \u0441\u0434\u0435\u043b\u0430\u0439 \u0433\u043e\u0440\u043e\u0434 \u0437\u0435\u043b\u0435\u043d\u0435\u0435",userName:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430",data:"1 \u0438\u044e\u043d\u044f 2020",viewCount:"11\u043a",msgCount:"1001",likeCount:"101"},{title:"\u0412 \u0411\u0438\u0439\u0441\u043a\u0435 \u0432\u0432\u0435\u043b\u0438 \u0440\u0435\u0436\u0438\u043c \u0427\u0421 \u0438\u0437-\u0437\u0430 \u0441\u043a\u043e\u043f\u0438\u0432\u0448\u0435\u0433\u043e\u0441\u044f \u043c\u0443\u0441\u043e\u0440\u0430",userName:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430",data:"1 \u0438\u044e\u043d\u044f 2020",viewCount:"11\u043a",msgCount:"1001"},{title:"\u041f\u0440\u043e\u0439\u0434\u0435\u0442 \u043c\u0438\u0440\u043d\u043e\u0435 \u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u0437\u0430\u0449\u0438\u0442\u0443 \u0431\u044d\u043a\u0435\u043d\u0434\u0435\u0440\u043e\u0432",userName:"\u0422\u0430\u0442\u044c\u044f\u043d\u0430",data:"1 \u0438\u044e\u043d\u044f 2020",viewCount:"11\u043a",msgCount:"1001"}],Z=((F=function(){function t(){_classCallCheck(this,t),this.newsList=R}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=c.Fb({type:F,selectors:[["app-aggregaation-news-base"]],decls:7,vars:1,consts:[[1,"news-container"],[2,"width","300px","border-right","1px"],["class","news",4,"ngFor","ngForOf"],[1,"news"],[1,"info"],[1,"left"],[1,"right"],[1,"inc"],["width","20","height","10","viewBox","0 0 20 10","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10 0C4.79004 0 0.78125 4.58984 0.78125 4.58984L0.410156 5L0.78125 5.41016C0.78125 5.41016 4.43603 9.57764 9.29688 9.96094C9.52881 9.99023 9.76074 10 10 10C10.2393 10 10.4712 9.99023 10.7031 9.96094C15.564 9.57764 19.2188 5.41016 19.2188 5.41016L19.5898 5L19.2188 4.58984C19.2188 4.58984 15.21 0 10 0ZM10 1.25C11.377 1.25 12.6465 1.62598 13.75 2.12891C14.1479 2.78809 14.375 3.54736 14.375 4.375C14.375 6.6333 12.6807 8.48877 10.4883 8.73047C10.4761 8.73291 10.4614 8.72803 10.4492 8.73047C10.3003 8.73779 10.1514 8.75 10 8.75C9.83398 8.75 9.67285 8.74023 9.51172 8.73047C7.31934 8.48877 5.625 6.6333 5.625 4.375C5.625 3.55957 5.84473 2.80029 6.23047 2.14844H6.21094C7.32422 1.63574 8.6084 1.25 10 1.25ZM10 2.5C8.96484 2.5 8.125 3.33984 8.125 4.375C8.125 5.41016 8.96484 6.25 10 6.25C11.0352 6.25 11.875 5.41016 11.875 4.375C11.875 3.33984 11.0352 2.5 10 2.5ZM4.53125 3.08594C4.43359 3.50586 4.375 3.92822 4.375 4.375C4.375 5.47119 4.6875 6.49658 5.23438 7.36328C3.65967 6.45264 2.56592 5.36621 2.20703 5C2.50732 4.69238 3.34473 3.87695 4.53125 3.08594ZM15.4688 3.08594C16.6553 3.87695 17.4927 4.69238 17.793 5C17.4341 5.36621 16.3403 6.45264 14.7656 7.36328C15.3125 6.49658 15.625 5.47119 15.625 4.375C15.625 3.92822 15.5664 3.50098 15.4688 3.08594Z","fill","#717171"],["width","16","height","17","viewBox","0 0 16 17","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M0.5 0.5V10.5H3V13H5.5V16.175L9.46973 13H15.5V12.375V3H13V0.5H0.5ZM1.75 1.75H11.75V3H3V9.25H1.75V1.75ZM4.25 4.25H14.25V11.75H9.03027L6.75 13.5737V11.75H4.25V4.25ZM6.125 6.125V7.375H12.375V6.125H6.125ZM6.125 8.625V9.875H9.875V8.625H6.125Z","fill","#717171"],["class","inc",4,"ngIf"],["width","20","height","12","viewBox","0 0 20 12","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.625 0.375C3.56201 0.375 1.875 2.06201 1.875 4.125C1.875 5.36523 2.48535 6.46875 3.41797 7.15234C1.77002 7.97021 0.625 9.66455 0.625 11.625H1.875C1.875 9.54736 3.54736 7.875 5.625 7.875C7.70264 7.875 9.375 9.54736 9.375 11.625H10.625C10.625 9.54736 12.2974 7.875 14.375 7.875C16.4526 7.875 18.125 9.54736 18.125 11.625H19.375C19.375 9.67188 18.2422 7.9751 16.6016 7.15234C17.0947 6.85693 17.5562 6.51758 17.9688 6.17578C18.96 5.35791 19.668 4.53516 19.668 4.53516L20.0391 4.125L19.6875 3.71484C19.6875 3.71484 18.9722 2.89209 17.9883 2.07422C17.0044 1.25635 15.752 0.375 14.375 0.375C12.312 0.375 10.625 2.06201 10.625 4.125C10.625 5.36523 11.2354 6.46875 12.168 7.15234C11.2573 7.604 10.4932 8.31689 10 9.20312C9.50684 8.31689 8.74268 7.604 7.83203 7.15234C8.76465 6.46875 9.375 5.36523 9.375 4.125C9.375 2.06201 7.68799 0.375 5.625 0.375ZM5.625 1.625C7.01416 1.625 8.125 2.73584 8.125 4.125C8.125 5.51416 7.01416 6.625 5.625 6.625C4.23584 6.625 3.125 5.51416 3.125 4.125C3.125 2.73584 4.23584 1.625 5.625 1.625ZM14.375 1.625C15.144 1.625 16.2939 2.30615 17.1875 3.05078C17.8345 3.58789 18.064 3.86865 18.3008 4.125C18.0591 4.38135 17.8223 4.65967 17.168 5.19922C16.2622 5.94385 15.1001 6.625 14.375 6.625C12.9883 6.625 11.875 5.51172 11.875 4.125C11.875 2.73828 12.9883 1.625 14.375 1.625Z","fill","#FF9500"]],template:function(t,e){1&t&&(c.Ob(0,"section",0),c.Ob(1,"div"),c.Ob(2,"h2"),c.kc(3,"\u041a\u0430\u043a \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e \u0432\u043e\u043b\u043e\u043d\u0442\u0435\u0440\u044b \u043d\u0430\u043a\u043e\u0440\u043c\u0438\u043b\u0438 101 \u0441\u0435\u043c\u044c\u044e"),c.Nb(),c.Mb(4,"div"),c.Nb(),c.Ob(5,"div",1),c.jc(6,B,22,6,"div",2),c.Nb(),c.Nb()),2&t&&(c.Bb(6),c.dc("ngForOf",e.newsList))},directives:[r.h,r.i],styles:[".news-container[_ngcontent-%COMP%]{position:relative;display:flex;padding:40px;background-color:#fff}h2[_ngcontent-%COMP%]{font-size:52px;line-height:56px;margin:0 0 40px;padding-right:40px}h3[_ngcontent-%COMP%]{margin:0 0 20px;font-size:20px;font-weight:500;line-height:24px;color:#222}.news[_ngcontent-%COMP%]{width:300px}.news[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px;color:#717171}.news[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{font-size:14px;font-weight:400;line-height:16px}.news[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px;line-height:12px}.news[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:10px;height:20px}.news[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:4px}"]}),F),G=((H=function(){function t(){_classCallCheck(this,t),this.close=new c.n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onClose",value:function(){this.close.emit(!0)}}]),t}()).\u0275fac=function(t){return new(t||H)},H.\u0275cmp=c.Fb({type:H,selectors:[["app-user-aggregator"]],outputs:{close:"close"},decls:6,vars:0,consts:[[1,"aggregator"],[3,"close"],[1,"container"]],template:function(t,e){1&t&&(c.Ob(0,"section",0),c.Ob(1,"app-aggregator-top-side",1),c.Wb("close",(function(){return e.onClose()})),c.Nb(),c.Ob(2,"div",2),c.Mb(3,"app-aggregator-tag-viewer"),c.Mb(4,"app-aggregator-filter-nav"),c.Mb(5,"app-aggregaation-news-base"),c.Nb(),c.Nb())},directives:[h,d,V,Z],styles:[".aggregator[_ngcontent-%COMP%]{position:absolute;left:100px;right:100px;top:60px;bottom:60px;background-color:#e5e5e5;border-radius:10px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);overflow:scroll}.aggregator[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;min-height:400px;max-width:1200px;min-width:800px;margin:0 auto;padding:30px 0}"]}),H);function D(t,e){if(1&t){var n=c.Pb();c.Ob(0,"app-user-aggregator",3),c.Wb("close",(function(){return c.gc(n),c.ac().onCloseAggregator()})),c.Nb()}}var z,Y,W,J,X=[{path:"",component:(z=function(){function t(e){_classCallCheck(this,t),this.map=e,this.aggregatorIsOpen=!0}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onCloseAggregator",value:function(){this.aggregatorIsOpen=!1}}]),t}(),z.\u0275fac=function(t){return new(t||z)(c.Lb(g))},z.\u0275cmp=c.Fb({type:z,selectors:[["app-map"]],decls:3,vars:1,consts:[[2,"position","absolute","top","0","left","0","right","0","bottom","0"],["id","map",2,"height","100vh"],[3,"close",4,"ngIf"],[3,"close"]],template:function(t,e){1&t&&(c.Ob(0,"section",0),c.Mb(1,"section",1),c.jc(2,D,1,0,"app-user-aggregator",2),c.Nb()),2&t&&(c.Bb(2),c.dc("ngIf",e.aggregatorIsOpen))},directives:[r.i,G],styles:[""]}),z)}],U=((J=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:J}),J.\u0275inj=c.Ib({factory:function(t){return new(t||J)},imports:[[s.b.forChild(X)],s.b]}),J),Q=((W=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:W}),W.\u0275inj=c.Ib({factory:function(t){return new(t||W)},imports:[[r.b,E]]}),W),$=((Y=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:Y}),Y.\u0275inj=c.Ib({factory:function(t){return new(t||Y)},imports:[[r.b,U,Q]]}),Y)}}]);