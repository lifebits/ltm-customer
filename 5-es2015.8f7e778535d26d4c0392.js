(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"Yt+F":function(t,e,n){"use strict";n.r(e),n.d(e,"MapsModule",(function(){return b}));var o=n("ofXK"),a=n("tyNb"),r=n("fXoL");let s=(()=>{class t{constructor(){this.defaultMapsOptions={center:{lat:50.7775672,lng:86.6954942},zoom:8,scrollwheel:!0}}static loadScript(){console.log("Loading Map API..");let t=document.createElement("script");t.async=!0,t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcuLH_XAAW8Ggg-9YN_Y_8QYcYp0Qa5fU&language=ru&callback=onMapApiLoaded",t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)}addMarkers(t,e,n){let o=[];return e.forEach(e=>{let a=new this.googleAPI.maps.Marker({position:{lat:e.latitude,lng:e.longitude},map:t,title:e.city,icon:"assets/maps/map-marker.png",item:{location:e.city.toLowerCase().replace(/\s/g,""),state:e.state,rank:e.rank}});n&&a.addListener("click",(function(){n(this)})),o.push(a)}),o}clearMarkers(t){this.setMapOnAll(null,t)}showMarkers(t,e){this.setMapOnAll(t,e)}clearMarkersAndClusterer(t){t.clearMarkers()}setMapOnAll(t,e){e.forEach(e=>{e.setMap(t)})}loadAPI(){return new Promise(e=>{window.onMapApiLoaded=()=>{console.log("google maps API loaded"),this.googleAPI=window.google,e(this.googleAPI),delete window.onMapApiLoaded},t.loadScript()})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),i=(()=>{class t extends s{constructor(){super(),this.mapIsCreated=!1}initMap(){return Promise.all([this.loadAPI()]).then(t=>{const e=t[0].maps,n=Object.assign(this.defaultMapsOptions,{mapTypeControlOptions:{style:e.MapTypeControlStyle.DEFAULT,position:e.ControlPosition.TOP_RIGHT}});this.map=new e.Map(document.getElementById("map"),n),this.mapIsCreated=!0,console.log("INIT",{result:t,mapsOptions:n}),console.log(document.getElementById("map"))})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-aggregator-top-side"]],decls:17,vars:0,consts:[[1,"top-side"],[2,"display","flex","justify-content","space-between","margin-left","80px","margin-right","80px"],[1,"container","left"],["height","30px","src","assets/images/logo.png","alt","logo"],[1,"container","right"],[1,"inc"],["width","12","height","18","viewBox","0 0 12 18","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6 0.875C2.90186 0.875 0.375 3.40186 0.375 6.5C0.375 7.37891 0.731446 8.38721 1.21484 9.48828C1.69824 10.5894 2.3208 11.7588 2.95312 12.8477C4.21777 15.0278 5.49219 16.8516 5.49219 16.8516L6 17.5938L6.50781 16.8516C6.50781 16.8516 7.78223 15.0278 9.04688 12.8477C9.6792 11.7588 10.3018 10.5894 10.7852 9.48828C11.2686 8.38721 11.625 7.37891 11.625 6.5C11.625 3.40186 9.09814 0.875 6 0.875ZM6 2.125C8.42432 2.125 10.375 4.07568 10.375 6.5C10.375 7.00049 10.1064 7.94775 9.65234 8.98047C9.19824 10.0132 8.5708 11.1582 7.95312 12.2227C6.97168 13.917 6.36133 14.813 6 15.3477C5.63867 14.813 5.02832 13.917 4.04688 12.2227C3.4292 11.1582 2.80176 10.0132 2.34766 8.98047C1.89355 7.94775 1.625 7.00049 1.625 6.5C1.625 4.07568 3.57568 2.125 6 2.125ZM6 5.25C5.30908 5.25 4.75 5.80908 4.75 6.5C4.75 7.19092 5.30908 7.75 6 7.75C6.69092 7.75 7.25 7.19092 7.25 6.5C7.25 5.80908 6.69092 5.25 6 5.25Z","fill","#222222"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8 0.5C4.51367 0.5 1.58887 2.89502 0.753906 6.125H2.04297C2.84131 3.59082 5.20703 1.75 8 1.75C11.4473 1.75 14.25 4.55273 14.25 8C14.25 11.4473 11.4473 14.25 8 14.25C5.20703 14.25 2.84131 12.4092 2.04297 9.875H0.753906C1.58887 13.105 4.51367 15.5 8 15.5C12.1357 15.5 15.5 12.1357 15.5 8C15.5 3.86426 12.1357 0.5 8 0.5ZM7.58984 5.05078L6.69141 5.94922L8.11719 7.375H0.5V8.625H8.11719L6.69141 10.0508L7.58984 10.9492L10.0898 8.44922L10.5195 8L10.0898 7.55078L7.58984 5.05078Z","fill","#222222"],[1,"text"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Lb(3,"img",3),r.Nb(4,"span"),r.jc(5,"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d"),r.Mb(),r.Mb(),r.Nb(6,"div",4),r.Nb(7,"div",5),r.Yb(),r.Nb(8,"svg",6),r.Lb(9,"path",7),r.Mb(),r.Xb(),r.Nb(10,"div"),r.jc(11,"\u0411\u0438\u0439\u0441\u043a, \u0440-\u043d \u041d\u0430\u0433\u043e\u0440\u043d\u044b\u0439 (\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439)"),r.Mb(),r.Mb(),r.Nb(12,"div",5),r.Yb(),r.Nb(13,"svg",8),r.Lb(14,"path",9),r.Mb(),r.Xb(),r.Nb(15,"div",10),r.jc(16,"\u0412\u044b\u0439\u0442\u0438"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb())},styles:[".top-side[_ngcontent-%COMP%]{padding:16px 0;box-shadow:0 1px 4px rgba(17,17,26,.1);background-color:#fff}.container[_ngcontent-%COMP%]{color:#222}.container[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%]{display:flex;align-items:center}.container[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%]{height:100%}.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:16px;height:16px}.left[_ngcontent-%COMP%]{font-weight:500}.right[_ngcontent-%COMP%]{font-size:15px;font-weight:400}"]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Eb({type:t,selectors:[["app-user-aggregator"]],decls:5,vars:0,consts:[[1,"aggregator"],[1,"container"]],template:function(t,e){1&t&&(r.Nb(0,"section",0),r.Lb(1,"app-aggregator-top-side"),r.Lb(2,"div",1),r.Nb(3,"p"),r.jc(4,"user-aggregator works!"),r.Mb(),r.Mb())},directives:[c],styles:[".aggregator[_ngcontent-%COMP%]{position:absolute;left:60px;right:60px;top:60px;bottom:60px;background-color:#e5e5e5;border-radius:10px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.aggregator[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;min-height:400px;background-color:#97bf0d}"]}),t})();const l=[{path:"",component:(()=>{class t{constructor(t){this.map=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(i))},t.\u0275cmp=r.Eb({type:t,selectors:[["app-map"]],decls:3,vars:0,consts:[[2,"position","absolute","top","0","left","0","right","0","bottom","0"],["id","map",2,"height","100vh"]],template:function(t,e){1&t&&(r.Nb(0,"section",0),r.Lb(1,"section",1),r.Lb(2,"app-user-aggregator"),r.Mb())},directives:[p],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[a.b.forChild(l)],a.b]}),t})(),d=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[o.b]]}),t})(),b=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[o.b,g,d]]}),t})()}}]);