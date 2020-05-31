(function (window) {
        
    /* inject CC output for object-assign.js */
    (function(){ var k="function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){a!=Array.prototype&&a!=Object.prototype&&(a[d]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function m(a,d){if(d){var c=l;a=a.split(".");for(var b=0;b<a.length-1;b++){var e=a[b];e in c||(c[e]={});c=c[e]}a=a[a.length-1];b=c[a];d=d(b);d!=b&&null!=d&&k(c,a,{configurable:!0,writable:!0,value:d})}}
    m("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}});var n="function"==typeof Object.assign?Object.assign:function(a,d){for(var c=1;c<arguments.length;c++){var b=arguments[c];if(b)for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a};m("Object.assign",function(a){return a||n});
    var p=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=function(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return!1;var d={};for(a=0;10>a;a++)d["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(d).map(function(b){return d[b]}).join(""))return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(b){c[b]=b});return"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},
    c)).join("")?!1:!0}catch(b){return!1}}()?Object.assign:function(a,d){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var b,e=1;e<arguments.length;e++){var f=Object(arguments[e]);for(var h in f)q.call(f,h)&&(c[h]=f[h]);if(p){b=p(f);for(var g=0;g<b.length;g++)r.call(f,b[g])&&(c[b[g]]=f[b[g]])}}return c};window.__NODE_MODULES__OBJECT_ASSIGN=t; return window.__NODE_MODULES__OBJECT_ASSIGN; }).call(this);
    /* end CC inject */
    
    if(typeof module !== "undefined")
        module.exports = window['__NODE_MODULES__OBJECT_ASSIGN'];

    return window['__NODE_MODULES__OBJECT_ASSIGN'];

})(this);