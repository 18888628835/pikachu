parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
window.onload=function(){var n='\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n    \n    *::after,\n    ::before {\n        margin: 0;\n        padding: 0;\n    }\n    \n    body {\n        background: relative;\n        background-color: #FCE54D;\n    }\n    \n    .nose {\n        width: 0px;\n        height: 0px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        top: 200px;\n        border: 10px solid;\n        border-color: black transparent transparent transparent;\n    }\n    \n    .nose2 {\n        width: 18px;\n        height: 6px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        top: -15px;\n        border-radius: 12px 12px 0 0;\n        background-color: black;\n        border-color: black transparent transparent transparent;\n    \n    }\n    \n    .lefteye {\n        border: 3px solid;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        position: absolute;\n        left: 50%;\n        top: 160px;\n        background-color: rgb(46, 46, 46);\n        margin-left: -150px;\n        animation: closeeye 3s ease infinite;\n    }\n    \n    .lefteye-white,\n    .righteye-white {\n        width: 30px;\n        height: 25px;\n        background-color: white;\n        border-radius: 50%;\n        position: absolute;\n        left: 20%;\n        top: 10%;\n    }\n    \n    .righteye {\n        border: 3px solid;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        position: absolute;\n        left: 50%;\n        top: 160px;\n        background-color: black;\n        margin-left: 92px;\n        background-color: rgb(46, 46, 46);\n        animation: closeeye 3s ease infinite;\n    }\n    @keyframes closeeye {\n        0% {\n            transform: rotateX(89deg);\n        }\n    \n        10% {\n            transform: rotateX(0deg);\n        }\n    \n        20% {\n            transform: rotateX(0deg);\n        }\n    \n        30% {\n            transform: rotateX(0deg);\n        }\n    \n        40% {\n            transform: rotateX(0deg);\n        }\n    \n        50% {\n            transform: rotateX(0deg);\n        }\n    \n        60% {\n            transform: rotateX(0deg);\n        }\n    \n        70% {\n            transform: rotateX(0deg);\n        }\n    \n        80% {\n            transform: rotateX(0deg);\n        }\n        90% {\n            transform: rotateX(0deg);\n        }\n        100% {\n            transform: rotateX(89deg);\n        }\n    }\n\n    .leftface {\n        width: 80px;\n        height: 80px;\n        background-color: #EB3223;\n        border-radius: 50%;\n        border: 2px solid black;\n        position: absolute;\n        top: 260px;\n        left: 50%;\n        transform: translateX(-210px);\n    }\n    \n    .rightface {\n        width: 80px;\n        height: 80px;\n        background-color: #EB3223;\n        border-radius: 50%;\n        border: 2px solid black;\n        position: absolute;\n        top: 260px;\n        left: 50%;\n        transform: translateX(127px);\n    }\n    \n    .mouth {\n        width: 180px;\n        height: 180px;\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        top: 239px;\n        overflow: hidden;\n    }\n    \n    .mouth1 {\n        border: 3px solid black;\n        width: 150px;\n        height: 1000px;\n        position: absolute;\n        bottom: 0%;\n        border-radius: 80px/300px;\n        left: 50%;\n        transform: translateX(-50%);\n        overflow: hidden;\n        background-color: #8E1B17;\n    }\n    \n    .mouth2 {\n        background-color: #EC5763;\n        height: 150px;\n        width: 180px;\n        position: absolute;\n        bottom: 0px;\n        left: -15px;\n        border-radius: 200px 200px 0 0;\n    }\n    \n    .topmouth-r {\n        top: 230px;\n        position: absolute;\n        width: 90px;\n        height: 25px;\n        border: 3px solid black;\n        border-radius: 0px 0px 25px 0px;\n        border-top: none;\n        border-left: none;\n        left: 50%;\n        transform: rotate(20deg);\n        background-color: rgb(252, 229, 77);\n        z-index: 1;\n    }\n    \n    .topmouth-l {\n        top: 230px;\n        position: absolute;\n        width: 90px;\n        height: 25px;\n        border: 3px solid black;\n        border-radius: 0px 25px 0px 0px;\n        border-left: none;\n        border-bottom: none;\n        left: 50%;\n        transform: translateX(-100%) rotate(160deg);\n        background-color: rgb(252, 229, 77);\n        z-index: 1;\n    }\n    \n    \n    .circle {\n        width: 120px;\n        height: 120px;\n        position: absolute;\n        left: 50%;\n        top: 550px;\n        margin-left: -60px;\n        border-radius: 30px;\n        background: rgb(221, 80, 75);\n        background: linear-gradient(90deg, rgba(221, 80, 75, 1) 45%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 1) 55%, rgba(255, 255, 255, 1) 55%);\n        transform: rotate(90deg);\n        display: flex;\n        align-items: center;\n    }\n    \n    .circle-2 {\n        width: 40px;\n        height: 40px;\n        background-color: black;\n        border-radius: 50%;\n        margin: 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .circle-2::after {\n        content: "";\n        display: block;\n        width: 20px;\n        height: 20px;\n        background-color: white;\n        border-radius: 50%;\n    }',o=document.createElement("style");document.head.append(o);var r=0;!function t(){"\n"===n[r]?"</br>":n[r],o.innerHTML=n.substring(0,r),window.scroll(0,99999),r>=n.length-1||(setTimeout(function(){t()},2),r++)}()};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.0a918d2f.js.map