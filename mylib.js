/* DevTools console filter expression =============
-Transition time out
====== end of DevTools console filter expression */
/* ============================================= */
/*         character compatibility proof         */
/*     ([a-zà-ÿA-ZÀ-Ÿ,0-9])(?![\.])\s+»\n/img    */
/* ============================================= */
// 10/11/2020 21:49
/* ============================================= */
/*               INITIALIZATIONS                 */
/* ============================================= */
{
/* 1. activitiesDic ========== [initializations] */
var activitiesDic = {
  "Frog": {
    "emoji": "🐸",
    "nr": 1,
    "wfId": "99d30b19-23b2-040b-3331-c48732c41a25",
    "wfDoneId": "f0c9793b-70fa-4164-43c1-c96de56a7c49",
    "wfMirrorId": "996609ea-f6fd-10f9-7ca4-552cbc0472b0",
    "type": "streak",
    "url": "https://workflowy.com/#/552cbc0472b0?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "spliceCount": 1
  },
  "Write": {
    "emoji": "✍️",
    "nr": 2,
    "url": "https://dynalist.io/d/f9Oz5SInhUnGepNWtQ_2eucd",
    "wfId": "30420d46-6b80-a70a-e95a-4790c8e982dd",
    "wfDoneId": "3fa39284-12ad-d468-aebc-9f2adf6a6a60",
    "type": "streak",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": {
      "noWorkFlowy": ""
    },
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "spliceCount": 3,
    "wfMirrorId": "ea5d65fd-2145-ca22-ce52-674e904efd5c"
  },
  "Piano": {
    "emoji": "🎹",
    "nr": 3,
    "launchShortcuts": {
      "Auto audio": "Piano",
      "noWorkFlowy": ""
    },
    "wfId": "f103f6bb-3a05-22ec-7550-9bc762132d03",
    "wfDoneId": "fa3ea9c4-10ad-b9f8-7c75-6dbc0ff17583",
    "type": "streak",
    "url": "https://workflowy.com/#/e485c0990086?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "c8038923-4ce2-c73c-fd88-e485c0990086"
  },
  "Social": {
    "emoji": "🐶",
    "nr": 4,
    "launchShortcuts": {
      "Auto audio": " Musique"
    },
    "wfId": "b5aea9da-ef6f-7153-824a-d3527b8fa206",
    "wfDoneId": "bfc95c4c-0856-b273-53a2-4a48aafb8f82",
    "type": "streak",
    "url": "https://workflowy.com/#/e12f95a71755?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "bfed5cd1-3669-6141-0822-e12f95a71755"
  },
  "Workout": {
    "emoji": "💪",
    "nr": 5,
    "locs": [
      "maison",
      "travail"
    ],
    "wfId": "bdf666f5-4647-fe58-5861-6ea563fbd7b9",
    "wfDoneId": "9c83f606-3e9b-fa51-e0f8-a248e2510c36",
    "type": "streak",
    "url": "https://workflowy.com/#/e5bf58994113?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "nextLoc": "maison",
    "timeLimit": "23:59",
    "spliceCount": 2,
    "wfMirrorId": "4bfb5727-88a3-cbc1-e0ef-e5bf58994113"
  },
  "Draw": {
    "emoji": "✏️",
    "nr": 6,
    "launchShortcuts": {
      "openURL": "SketchBook://"
    },
    "wfId": "67c30a60-33f2-e954-d95c-c66f82784dfe",
    "wfDoneId": "cf51a1a9-25d1-e997-b4f6-549d956d6e87",
    "type": "streak",
    "url": "https://workflowy.com/#/43f6bc84b40e?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "b6b83ab7-3894-6a8b-8d72-43f6bc84b40e"
  },
  "Birdfeeder": {
    "emoji": "🐦",
    "nr": 7,
    "wfId": "80e8f059-3352-5a65-5e46-02bdc97dc95d",
    "wfDoneId": "dba9aef9-0019-5e70-4a90-51b1da523f53",
    "type": "streak",
    "url": "https://workflowy.com/#/bd0706eb7d8e?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "46816ee1-ea5a-cbf9-03d4-bd0706eb7d8e"
  },
  "Improve my life": {
    "emoji": "🔨",
    "nr": 8,
    "wfId": "167f0b86-4401-8dc1-61a0-d2e6be40055a",
    "wfDoneId": "f5a7e713-dd4a-4e13-9102-986a8c75eb95",
    "type": "streak",
    "url": "https://workflowy.com/#/4b56bae7285a?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "b3a08705-d214-28bf-4691-4b56bae7285a"
  },
  "Learn": {
    "emoji": "📇",
    "nr": 9,
    "launchShortcuts": {
      "openURL": "fcd3://"
    },
    "wfId": "91c0d592-04e1-8b55-b166-c7f7de9ef7b6",
    "wfDoneId": "75c84d91-f899-617b-c759-5c0d21d86840",
    "type": "streak",
    "url": "https://workflowy.com/#/83dee8611ca4?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "93fa0d5e-ea12-9882-051f-83dee8611ca4"
  },
  "Read": {
    "emoji": "📕",
    "nr": 10,
    "wfId": "9ddab810-08b0-b731-6ae9-cc30b5415b9e",
    "wfDoneId": "0abf4034-15cb-4823-9174-a8ce2caf5a9c",
    "type": "streak",
    "url": "https://workflowy.com/#/abde11cb4e1f?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "spliceCount": 2,
    "wfMirrorId": "69f8bd87-92ff-f305-670c-abde11cb4e1f"
  },
  "Play": {
    "emoji": "🎮",
    "nr": 11,
    "wfId": "7c70596a-560e-5e4d-71db-f310fc3dccea",
    "wfDoneId": "71f9a2fb-2c17-652a-56b7-d7bc36cab0d8",
    "type": "streak",
    "url": "https://workflowy.com/#/75e36704239d?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "8300304a-00d5-8492-b76f-75e36704239d"
  },
  "Tidy up": {
    "emoji": "💦",
    "nr": 12,
    "wfId": "99601d66-07e6-a8d4-9426-7f8d93628ee7",
    "wfDoneId": "1f5c4d69-bba3-589a-76e8-16760b1542e7",
    "type": "streak",
    "url": "https://workflowy.com/#/0aec4aec6c0d?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "67317a26-3902-3889-1525-0aec4aec6c0d"
  },
  "Help": {
    "emoji": "😇",
    "nr": 13,
    "wfId": "f52013cc-b631-ba31-5a50-a473c21a3ef6",
    "wfMirrorId": "b3d5546b-caf2-3b42-b67e-2c1e985bbd02",
    "wfDoneId": "4d9f29de-9786-53b3-fd22-4e27b99d1cd1",
    "type": "streak",
    "url": "https://workflowy.com/#/2c1e985bbd02?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
  },
  "Mind": {
    "emoji": "😊",
    "nr": 14,
    "wfId": "7f495ace-f626-183c-b74b-67094bf3cec3",
    "wfDoneId": "8aeedf23-143f-cfb4-3309-554ebcb6854a",
    "type": "streak",
    "url": "https://workflowy.com/#/6caaf0702117?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "a790583e-ac30-c9d6-e77e-6caaf0702117"
  },
  "I arrive at work": {
    "emoji": "🎭",
    "locs": [
      "travail",
      "trajet travail"
    ],
    "url": "https://workflowy.com/#/c4ad0ecfda53?q=%23d%20-%5B",
    "wfId": "421c2015-fdfd-2710-5e68-93953e83a1dd",
    "type": "routine",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "nextLoc": "travail",
    "timeLimit": "23:59",
    "wfMirrorId": "a95e5a4d-18d6-6948-64c9-c4ad0ecfda53"
  },
  "I cleanup for girls": {
    "emoji": "🍆",
    "url": "https://workflowy.com/#/7a15336d3d7d?q=",
    "wfId": "053402f0-3bf3-9f51-56c4-61916a110d29",
    "type": "routine",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "6ccbbe4a-91fd-8008-230e-7a15336d3d7d"
  },
  "I get back from lunch": {
    "emoji": "🍕",
    "moments": [
      "après-midi"
    ],
    "wfId": "6f440f5c-77b0-03a8-f3bd-98132ddfe6d3",
    "type": "routine",
    "url": "https://workflowy.com/#/feb613d0f4a9?q=",
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "13e9ae12-a012-3c59-78c0-feb613d0f4a9"
  },
  "I get back home": {
    "emoji": "📬",
    "nextLoc": "maison",
    "launchShortcuts": [],
    "locs": [
      "trajet",
      "maison",
      "trajet maison"
    ],
    "wfId": "c2c0fa04-5d3a-a884-3778-795c5869446a",
    "type": "routine",
    "url": "https://workflowy.com/#/a04b0f05e10a?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "timeLimit": "23:59",
    "wfMirrorId": "d0389a9f-1573-5349-d1c8-a04b0f05e10a"
  },
  "I go to bed": {
    "emoji": "🌙 ",
    "timeLimit": "23:00",
    "locs": [
      "maison"
    ],
    "moments": [
      "soir"
    ],
    "launchShortcuts": [],
    "wfId": "86c48098-e436-cfa8-6a22-26a417f9187d",
    "type": "routine",
    "url": "https://workflowy.com/#/a3daebd7aa1b?q=",
    "nextLoc": "maison",
    "wfMirrorId": "2a2c2001-fb80-010e-337b-a3daebd7aa1b"
  },
  "I leave work": {
    "emoji": "🚆",
    "nextLoc": "trajet maison",
    "locs": [
      "travail",
      "trajet travail"
    ],
    "wfId": "a00869a2-29af-3fb1-8f94-0b3cfb3a6e8c",
    "type": "routine",
    "url": "https://workflowy.com/#/a3962ef62cf2?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "timeLimit": "23:59",
    "wfMirrorId": "a0c88ad3-0b21-e33b-11a5-a3962ef62cf2"
  },
  "I wake up": {
    "emoji": "☀️",
    "nextLoc": "demander",
    "locs": "maison",
    "moments": [
      "matin",
      "après-midi"
    ],
    "launchShortcuts": {
      "Dim": {
        "Fonction": 0
      },
      "bedsideCharge": " "
    },
    "wfId": "7253c1ea-e7b8-452c-8e27-4a7b88ce737c",
    "type": "routine",
    "url": "https://workflowy.com/#/bbae4aa585cd?q=",
    "timeLimit": "23:59",
    "wfMirrorId": "f40e4508-eac1-5c9e-5974-bbae4aa585cd"
  },
  "Movies": {
    "wfDoneId": "95db95a2-7fdb-db0a-f879-cb6bcd3bf1ba",
    "wfId": "f402f6e7-9131-0ee8-1a79-1e0b2fc86478",
    "type": "routine",
    "url": "https://workflowy.com/#/1e0b2fc86478?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59"
  },
  "Clothes": {
    "wfDoneId": "592277bd-71a9-b1fc-c083-1b391b79c213",
    "wfId": "d83a5c22-4893-51b2-4f1b-14c5cdbe0324",
    "type": "routine",
    "url": "https://workflowy.com/#/14c5cdbe0324?q=",
    "moments": [
      "matin",
      "après-midi",
      "soir"
    ],
    "launchShortcuts": [],
    "locs": [
      "maison",
      "trajet",
      "trajet travail",
      "travail",
      "trajet maison"
    ],
    "timeLimit": "23:59"
  }
};
/* ======================== end of activitiesDic */
/* 2. moment() =============== [initializations] */
!function(e,t){e.moment=t()}(this,function(){"use strict";var e,t;function n(){return e.apply(null,arguments)}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e){return void 0===e}function a(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function o(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function u(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){for(var n in t)d(t,n)&&(e[n]=t[n]);return d(t,"toString")&&(e.toString=t.toString),d(t,"valueOf")&&(e.valueOf=t.valueOf),e}function h(e,t,n,s){return bt(e,t,n,s,!0).utc()}function c(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function f(e){if(null==e._isValid){var n=c(e),s=t.call(n.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s);if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function _(e){var t=h(NaN);return null!=e?l(c(t),e):c(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var m=n.momentProperties=[];function y(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=c(t)),r(t._locale)||(e._locale=t._locale),m.length>0)for(n=0;n<m.length;n++)r(i=t[s=m[n]])||(e[s]=i);return e}var g=!1;function M(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)}function p(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function v(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=v(t)),n}function D(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&w(e[s])!==w(t[s]))&&a++;return a+r}function Y(e){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var s=!0;return l(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){for(var o in i+="\n["+a+"] ",arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}Y(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}var S,T={};function O(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t),T[e]||(Y(t),T[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=l({},e);for(n in t)d(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},l(s[n],e[n]),l(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)d(e,n)&&!d(t,n)&&i(e[n])&&(s[n]=l({},s[n]));return s}function L(e){null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,S=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)d(e,t)&&n.push(t);return n};var P={};function W(e,t){var n=e.toLowerCase();P[n]=P[n+"s"]=P[t]=e}function H(e){return"string"==typeof e?P[e]||P[e.toLowerCase()]:void 0}function F(e){var t,n,s={};for(n in e)d(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var C={};function R(e,t){C[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},j={};function E(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(j[e]=i),t&&(j[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(j[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=I(t,e.localeData()),V[t]=V[t]||function(e){var t,n,s,i=e.match(N);for(t=0,n=i.length;t<n;t++)j[i[t]]?i[t]=j[i[t]]:i[t]=(s=i[t]).match(/\[[\s\S]/)?s.replace(/^\[|\]$/g,""):s.replace(/\\/g,"");return function(t){var s,r="";for(s=0;s<n;s++)r+=b(i[s])?i[s].call(t,e):i[s];return r}}(t),V[t](e)):e.localeData().invalidDate()}function I(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;n>=0&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,J=/\d{3}/,$=/\d{4}/,q=/[+-]?\d{6}/,Q=/\d\d?/,B=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}) {1,2}/i,oe={};function ue(e,t,n){oe[e]=b(t)?t:function(e,s){return e&&n?n:t}}function de(e,t){return d(oe,e)?oe[e](t._strict,t._locale):new RegExp(le(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function le(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),a(t)&&(s=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)he[e[n]]=s}function fe(e,t){ce(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function _e(e,t,n){null!=t&&d(he,e)&&he[e](t,n._a,n,e)}var me=0,ye=1,ge=2,Me=3,pe=4,ve=5,we=6,De=7,Ye=8;function ke(e){return Se(e)?366:365}function Se(e){return e%4==0&&e%100!=0||e%400==0}E("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),E(0,["YY",2],0,function(){return this.year()%100}),E(0,["YYYY",4],0,"year"),E(0,["YYYYY",5],0,"year"),E(0,["YYYYYY",6,!0],0,"year"),W("year","y"),R("year",1),ue("Y",se),ue("YY",Q,z),ue("YYYY",ee,$),ue("YYYYY",te,q),ue("YYYYYY",te,q),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?n.parseTwoDigitYear(e):w(e)}),ce("YY",function(e,t){t[me]=n.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),n.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var Te,Oe=be("FullYear",!0);function be(e,t){return function(s){return null!=s?(Le(this,e,s),n.updateOffset(this,t),this):xe(this,e)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Le(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Se(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?Se(e)?29:28:31-s%7%2}Te=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},E("M",["MM",2],"Mo",function(){return this.month()+1}),E("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),E("MMMM",0,0,function(e){return this.localeData().months(this,e)}),W("month","M"),R("month",8),ue("M",Q),ue("MM",Q,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[ye]=w(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ye]=i:c(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Fe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=w(t);else if(!a(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Re(e){return null!=e?(Ce(this,e),n.updateOffset(this,!0),this):xe(this,"Month")}var Ue=ae;var Ne=ae;function Ge(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=h([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=le(s[t]),i[t]=le(i[t]);for(t=0;t<24;t++)r[t]=le(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ve(e){var t;if(e<100&&e>=0){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function je(e,t,n){var s=7+t-n;return-((7+Ve(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+je(e,s,i);return o<=0?a=ke(r=e-1)+o:o>ke(e)?(r=e+1,a=o-ke(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ae(e,t,n){var s,i,r=je(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ie(i=e.year()-1,t,n):a>Ie(e.year(),t,n)?(s=a-Ie(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ie(e,t,n){var s=je(e,t,n),i=je(e+1,t,n);return(ke(e)-s+i)/7}E("w",["ww",2],"wo","week"),E("W",["WW",2],"Wo","isoWeek"),W("week","w"),W("isoWeek","W"),R("week",5),R("isoWeek",5),ue("w",Q),ue("ww",Q,z),ue("W",Q),ue("WW",Q,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=w(e)});function Ze(e,t){return e.slice(t,7).concat(e.slice(0,t))}E("d",0,"do","day"),E("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),E("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),E("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),E("e",0,0,"weekday"),E("E",0,0,"isoWeekday"),W("day","d"),W("weekday","e"),W("isoWeekday","E"),R("day",11),R("weekday",11),R("isoWeekday",11),ue("d",Q),ue("e",Q),ue("E",Q),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=w(e)});var ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Je="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Qe=ae;var Be=ae;function Xe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],d=[];for(t=0;t<7;t++)n=h([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),d.push(s),d.push(i),d.push(r);for(a.sort(e),o.sort(e),u.sort(e),d.sort(e),t=0;t<7;t++)o[t]=le(o[t]),u[t]=le(u[t]),d[t]=le(d[t]);this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Ke(){return this.hours()%12||12}function et(e,t){E(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function tt(e,t){return t._meridiemParse}E("H",["HH",2],0,"hour"),E("h",["hh",2],0,Ke),E("k",["kk",2],0,function(){return this.hours()||24}),E("hmm",0,0,function(){return""+Ke.apply(this)+U(this.minutes(),2)}),E("hmmss",0,0,function(){return""+Ke.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),E("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),E("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),et("a",!0),et("A",!1),W("hour","h"),R("hour",13),ue("a",tt),ue("A",tt),ue("H",Q),ue("h",Q),ue("k",Q),ue("HH",Q,z),ue("hh",Q,z),ue("kk",Q,z),ue("hmm",B),ue("hmmss",X),ue("Hmm",B),ue("Hmmss",X),ce(["H","HH"],Me),ce(["k","kk"],function(e,t,n){var s=w(e);t[Me]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[Me]=w(e),c(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[Me]=w(e.substr(0,s)),t[pe]=w(e.substr(s)),c(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=w(e.substr(0,s)),t[pe]=w(e.substr(s,2)),t[ve]=w(e.substr(i)),c(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[Me]=w(e.substr(0,s)),t[pe]=w(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=w(e.substr(0,s)),t[pe]=w(e.substr(s,2)),t[ve]=w(e.substr(i))});var nt,st=be("Hours",!0),it={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Fe,week:{dow:0,doy:6},weekdays:ze,weekdaysMin:$e,weekdaysShort:Je,meridiemParse:/[ap]\.?m?\.?/i},rt={},at={};function ot(e){return e?e.toLowerCase().replace("_","-"):e}function ut(e){var t=null;if(!rt[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=nt._abbr,require("./locale/"+e),dt(t)}catch(e){}return rt[e]}function dt(e,t){var n;return e&&((n=r(t)?ht(e):lt(e,t))?nt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),nt._abbr}function lt(e,t){if(null!==t){var n,s=it;if(t.abbr=e,null!=rt[e])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=rt[e]._config;else if(null!=t.parentLocale)if(null!=rt[t.parentLocale])s=rt[t.parentLocale]._config;else{if(null==(n=ut(t.parentLocale)))return at[t.parentLocale]||(at[t.parentLocale]=[]),at[t.parentLocale].push({name:e,config:t}),null;s=n._config}return rt[e]=new L(x(s,t)),at[e]&&at[e].forEach(function(e){lt(e.name,e.config)}),dt(e),rt[e]}return delete rt[e],null}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return nt;if(!s(e)){if(t=ut(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=ot(e[r]).split("-")).length,n=(n=ot(e[r+1]))?n.split("-"):null;t>0;){if(s=ut(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&D(i,n,!0)>=t-1)break;t--}r++}return nt}(e)}function ct(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[ye]<0||n[ye]>11?ye:n[ge]<1||n[ge]>Pe(n[me],n[ye])?ge:n[Me]<0||n[Me]>24||24===n[Me]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?Me:n[pe]<0||n[pe]>59?pe:n[ve]<0||n[ve]>59?ve:n[we]<0||n[we]>999?we:-1,c(e)._overflowDayOfYear&&(t<me||t>ge)&&(t=ge),c(e)._overflowWeeks&&-1===t&&(t=De),c(e)._overflowWeekday&&-1===t&&(t=Ye),c(e).overflow=t),e}function ft(e,t,n){return null!=e?e:null!=t?t:n}function _t(e){var t,s,i,r,a,o=[];if(!e._d){for(i=function(e){var t=new Date(n.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[ge]&&null==e._a[ye]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ft(t.GG,e._a[me],Ae(xt(),1,4).year),s=ft(t.W,1),((i=ft(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var d=Ae(xt(),r,a);n=ft(t.gg,e._a[me],d.year),s=ft(t.w,d.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>Ie(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(a=ft(e._a[me],i[me]),(e._dayOfYear>ke(a)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),s=Ve(a,0,e._dayOfYear),e._a[ye]=s.getUTCMonth(),e._a[ge]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Me]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?Ve:function(e,t,n,s,i,r,a){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(c(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gt=/Z|[+-]\d\d(?::?\d\d)?/,Mt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],pt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],vt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||yt.exec(o);if(u){for(c(e).iso=!0,t=0,n=Mt.length;t<n;t++)if(Mt[t][1].exec(u[1])){i=Mt[t][0],s=!1!==Mt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=pt.length;t<n;t++)if(pt[t][1].exec(u[3])){r=(u[2]||" ")+pt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!gt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Tt(e)}else e._isValid=!1}var Dt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Yt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}var kt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function St(e){var t,n,s,i,r,a,o,u=Dt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(u){var d=(t=u[4],n=u[3],s=u[2],i=u[5],r=u[6],a=u[7],o=[Yt(t),Fe.indexOf(n),parseInt(s,10),parseInt(i,10),parseInt(r,10)],a&&o.push(parseInt(a,10)),o);if(!function(e,t,n){return!e||Je.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(c(n).weekdayMismatch=!0,n._isValid=!1,!1)}(u[1],d,e))return;e._a=d,e._tzm=function(e,t,n){if(e)return kt[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(u[8],u[9],u[10]),e._d=Ve.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function Tt(e){if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],c(e).empty=!0;var t,s,i,r,a,o=""+e._i,u=o.length,d=0;for(i=I(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],(s=(o.match(de(r,e))||[])[0])&&((a=o.substr(0,o.indexOf(s))).length>0&&c(e).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),d+=s.length),j[r]?(s?c(e).empty=!1:c(e).unusedTokens.push(r),_e(r,s,e)):e._strict&&!s&&c(e).unusedTokens.push(r);c(e).charsLeftOver=u-d,o.length>0&&c(e).unusedInput.push(o),e._a[Me]<=12&&!0===c(e).bigHour&&e._a[Me]>0&&(c(e).bigHour=void 0),c(e).parsedDateParts=e._a.slice(0),c(e).meridiem=e._meridiem,e._a[Me]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}(e._locale,e._a[Me],e._meridiem),_t(e),ct(e)}else St(e);else wt(e)}function Ot(e){var t=e._i,d=e._f;return e._locale=e._locale||ht(e._l),null===t||void 0===d&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),p(t)?new M(ct(t)):(o(t)?e._d=t:s(d)?function(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Tt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));l(e,n||t)}(e):d?Tt(e):function(e){var t=e._i;r(t)?e._d=new Date(n.now()):o(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=vt.exec(e._i);null===t?(wt(e),!1===e._isValid&&(delete e._isValid,St(e),!1===e._isValid&&(delete e._isValid,n.createFromInputFallback(e)))):e._d=new Date(+t[1])}(e):s(t)?(e._a=u(t.slice(0),function(e){return parseInt(e,10)}),_t(e)):i(t)?function(e){if(!e._d){var t=F(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),_t(e)}}(e):a(t)?e._d=new Date(t):n.createFromInputFallback(e)}(e),f(e)||(e._d=null),e))}function bt(e,t,n,r,a){var o,u={};return!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||s(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=a,u._l=n,u._i=e,u._f=t,u._strict=r,(o=new M(ct(Ot(u))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function xt(e,t,n,s){return bt(e,t,n,s,!1)}n.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var Lt=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=xt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:_()}),Pt=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=xt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:_()});function Wt(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return xt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}var Ht=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ft(e){var t=F(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,d=t.second||0,l=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Te.call(Ht,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ht.length;++s)if(e[Ht[s]]){if(n)return!1;parseFloat(e[Ht[s]])!==w(e[Ht[s]])&&(n=!0)}return!0}(t),this._milliseconds=+l+1e3*d+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Ct(e){return e instanceof Ft}function Rt(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ut(e,t){E(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+U(~~(e/60),2)+t+U(~~e%60,2)})}Ut("Z",":"),Ut("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Gt(re,e)});var Nt=/([\+\-]|\d\d)/gi;function Gt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Nt)||["-",0,0],i=60*s[1]+w(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Vt(e,t){var s,i;return t._isUTC?(s=t.clone(),i=(p(e)||o(e)?e.valueOf():xt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):xt(e).local()}function jt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var At=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Zt(e,t){var n,s,i,r=e,o=null;return Ct(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:a(e)?(r={},t?r[t]=e:r.milliseconds=e):(o=At.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:w(o[ge])*n,h:w(o[Me])*n,m:w(o[pe])*n,s:w(o[ve])*n,ms:w(Rt(1e3*o[we]))*n}):(o=It.exec(e))?(n="-"===o[1]?-1:1,r={y:zt(o[2],n),M:zt(o[3],n),w:zt(o[4],n),d:zt(o[5],n),h:zt(o[6],n),m:zt(o[7],n),s:zt(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Vt(t,e),e.isBefore(t)?n=Jt(e,t):((n=Jt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(xt(r.from),xt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ft(r),Ct(e)&&d(e,"_locale")&&(s._locale=e._locale),s}function zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Jt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(e,t){return function(n,s){var i;return null===s||isNaN(+s)||(O(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),qt(this,Zt(n="string"==typeof n?+n:n,s),e),this}}function qt(e,t,s,i){var r=t._milliseconds,a=Rt(t._days),o=Rt(t._months);e.isValid()&&(i=null==i||i,o&&Ce(e,xe(e,"Month")+o*s),a&&Le(e,"Date",xe(e,"Date")+a*s),r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}Zt.fn=Ft.prototype,Zt.invalid=function(){return Zt(NaN)};var Qt=$t(1,"add"),Bt=$t(-1,"subtract");function Xt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Kt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var en=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function tn(){return this._locale}var nn=1e3,sn=60*nn,rn=60*sn,an=3506328*rn;function on(e,t){return(e%t+t)%t}function un(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-an:new Date(e,t,n).valueOf()}function dn(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-an:Date.UTC(e,t,n)}function ln(e,t){E(0,[e,e.length],0,t)}function hn(e,t,n,s,i){var r;return null==e?Ae(this,s,i).year:(t>(r=Ie(e,s,i))&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ve(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}E(0,["gg",2],0,function(){return this.weekYear()%100}),E(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ln("gggg","weekYear"),ln("ggggg","weekYear"),ln("GGGG","isoWeekYear"),ln("GGGGG","isoWeekYear"),W("weekYear","gg"),W("isoWeekYear","GG"),R("weekYear",1),R("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",Q,z),ue("gg",Q,z),ue("GGGG",ee,$),ue("gggg",ee,$),ue("GGGGG",te,q),ue("ggggg",te,q),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=w(e)}),fe(["gg","GG"],function(e,t,s,i){t[i]=n.parseTwoDigitYear(e)}),E("Q",0,"Qo","quarter"),W("quarter","Q"),R("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[ye]=3*(w(e)-1)}),E("D",["DD",2],"Do","date"),W("date","D"),R("date",9),ue("D",Q),ue("DD",Q,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ge),ce("Do",function(e,t){t[ge]=w(e.match(Q)[0])});var cn=be("Date",!0);E("DDD",["DDDD",3],"DDDo","dayOfYear"),W("dayOfYear","DDD"),R("dayOfYear",4),ue("DDD",K),ue("DDDD",J),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),E("m",["mm",2],0,"minute"),W("minute","m"),R("minute",14),ue("m",Q),ue("mm",Q,z),ce(["m","mm"],pe);var fn=be("Minutes",!1);E("s",["ss",2],0,"second"),W("second","s"),R("second",15),ue("s",Q),ue("ss",Q,z),ce(["s","ss"],ve);var _n,mn=be("Seconds",!1);for(E("S",0,0,function(){return~~(this.millisecond()/100)}),E(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),E(0,["SSS",3],0,"millisecond"),E(0,["SSSS",4],0,function(){return 10*this.millisecond()}),E(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),E(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),E(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),E(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),E(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),W("millisecond","ms"),R("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,J),_n="SSSS";_n.length<=9;_n+="S")ue(_n,ne);function yn(e,t){t[we]=w(1e3*("0."+e))}for(_n="S";_n.length<=9;_n+="S")ce(_n,yn);var gn=be("Milliseconds",!1);E("z",0,0,"zoneAbbr"),E("zz",0,0,"zoneName");var Mn=M.prototype;function pn(e){return e}Mn.add=Qt,Mn.calendar=function(e,t){var s=e||xt(),i=Vt(s,this).startOf("day"),r=n.calendarFormat(this,i)||"sameElse",a=t&&(b(t[r])?t[r].call(this,s):t[r]);return this.format(a||this.localeData().calendar(r,this,xt(s)))},Mn.clone=function(){return new M(this)},Mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Vt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Xt(this,s)/12;break;case"month":r=Xt(this,s);break;case"quarter":r=Xt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:v(r)},Mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var s=this._isUTC?dn:un;switch(e){case"year":t=s(this.year()+1,0,1)-1;break;case"quarter":t=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=s(this.year(),this.month()+1,1)-1;break;case"week":t=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=rn-on(t+(this._isUTC?0:this.utcOffset()*sn),rn)-1;break;case"minute":t=this._d.valueOf(),t+=sn-on(t,sn)-1;break;case"second":t=this._d.valueOf(),t+=nn-on(t,nn)-1}return this._d.setTime(t),n.updateOffset(this,!0),this},Mn.format=function(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},Mn.from=function(e,t){return this.isValid()&&(p(e)&&e.isValid()||xt(e).isValid())?Zt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Mn.fromNow=function(e){return this.from(xt(),e)},Mn.to=function(e,t){return this.isValid()&&(p(e)&&e.isValid()||xt(e).isValid())?Zt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Mn.toNow=function(e){return this.to(xt(),e)},Mn.get=function(e){return b(this[e=H(e)])?this[e]():this},Mn.invalidAt=function(){return c(this).overflow},Mn.isAfter=function(e,t){var n=p(e)?e:xt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},Mn.isBefore=function(e,t){var n=p(e)?e:xt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},Mn.isBetween=function(e,t,n,s){var i=p(e)?e:xt(e),r=p(t)?t:xt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},Mn.isSame=function(e,t){var n,s=p(e)?e:xt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},Mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},Mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},Mn.isValid=function(){return f(this)},Mn.lang=en,Mn.locale=Kt,Mn.localeData=tn,Mn.max=Pt,Mn.min=Lt,Mn.parsingFlags=function(){return l({},c(this))},Mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:C[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=F(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},Mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var s=this._isUTC?dn:un;switch(e){case"year":t=s(this.year(),0,1);break;case"quarter":t=s(this.year(),this.month()-this.month()%3,1);break;case"month":t=s(this.year(),this.month(),1);break;case"week":t=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=s(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=on(t+(this._isUTC?0:this.utcOffset()*sn),rn);break;case"minute":t=this._d.valueOf(),t-=on(t,sn);break;case"second":t=this._d.valueOf(),t-=on(t,nn)}return this._d.setTime(t),n.updateOffset(this,!0),this},Mn.subtract=Bt,Mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},Mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},Mn.toDate=function(){return new Date(this.valueOf())},Mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},Mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},Mn.toJSON=function(){return this.isValid()?this.toISOString():null},Mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Mn.unix=function(){return Math.floor(this.valueOf()/1e3)},Mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Mn.year=Oe,Mn.isLeapYear=function(){return Se(this.year())},Mn.weekYear=function(e){return hn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Mn.isoWeekYear=function(e){return hn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},Mn.quarter=Mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},Mn.month=Re,Mn.daysInMonth=function(){return Pe(this.year(),this.month())},Mn.week=Mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},Mn.isoWeek=Mn.isoWeeks=function(e){var t=Ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},Mn.weeksInYear=function(){var e=this.localeData()._week;return Ie(this.year(),e.dow,e.doy)},Mn.isoWeeksInYear=function(){return Ie(this.year(),1,4)},Mn.date=cn,Mn.day=Mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},Mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},Mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},Mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},Mn.hour=Mn.hours=st,Mn.minute=Mn.minutes=fn,Mn.second=Mn.seconds=mn,Mn.millisecond=Mn.milliseconds=gn,Mn.utcOffset=function(e,t,s){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Gt(re,e)))return this}else Math.abs(e)<16&&!s&&(e*=60);return!this._isUTC&&t&&(i=jt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?qt(this,Zt(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:jt(this)},Mn.utc=function(e){return this.utcOffset(0,e)},Mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(jt(this),"m")),this},Mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Gt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},Mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?xt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},Mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},Mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Mn.isUtc=Et,Mn.isUTC=Et,Mn.zoneAbbr=function(){return this._isUTC?"UTC":""},Mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Mn.dates=k("dates accessor is deprecated. Use date instead.",cn),Mn.months=k("months accessor is deprecated. Use month instead",Re),Mn.years=k("years accessor is deprecated. Use year instead",Oe),Mn.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),Mn.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),(e=Ot(e))._a){var t=e._isUTC?h(e._a):xt(e._a);this._isDSTShifted=this.isValid()&&D(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var vn=L.prototype;function wn(e,t,n,s){var i=ht(),r=h().set(s,t);return i[n](r,e)}function Dn(e,t,n){if(a(e)&&(t=e,e=void 0),e=e||"",null!=t)return wn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=wn(e,s,n,"month");return i}function Yn(e,t,n,s){"boolean"==typeof e?(a(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,a(t)&&(n=t,t=void 0),t=t||"");var i,r=ht(),o=e?r._week.dow:0;if(null!=n)return wn(t,(n+o)%7,s,"day");var u=[];for(i=0;i<7;i++)u[i]=wn(t,(i+o)%7,s,"day");return u}vn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},vn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},vn.invalidDate=function(){return this._invalidDate},vn.ordinal=function(e){return this._ordinal.replace("%d",e)},vn.preparse=pn,vn.postformat=pn,vn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},vn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},vn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},vn.months=function(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone},vn.monthsShort=function(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},vn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=h([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Te.call(this._shortMonthsParse,a))?i:null:-1!==(i=Te.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Te.call(this._shortMonthsParse,a))?i:-1!==(i=Te.call(this._longMonthsParse,a))?i:null:-1!==(i=Te.call(this._longMonthsParse,a))?i:-1!==(i=Te.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=h([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},vn.monthsRegex=function(e){return this._monthsParseExact?(d(this,"_monthsRegex")||Ge.call(this),e?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=Ne),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},vn.monthsShortRegex=function(e){return this._monthsParseExact?(d(this,"_monthsRegex")||Ge.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=Ue),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},vn.week=function(e){return Ae(e,this._week.dow,this._week.doy).week},vn.firstDayOfYear=function(){return this._week.doy},vn.firstDayOfWeek=function(){return this._week.dow},vn.weekdays=function(e,t){var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ze(n,this._week.dow):e?n[e.day()]:n},vn.weekdaysMin=function(e){return!0===e?Ze(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},vn.weekdaysShort=function(e){return!0===e?Ze(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},vn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=h([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Te.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Te.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Te.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Te.call(this._weekdaysParse,a))?i:-1!==(i=Te.call(this._shortWeekdaysParse,a))?i:-1!==(i=Te.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Te.call(this._shortWeekdaysParse,a))?i:-1!==(i=Te.call(this._weekdaysParse,a))?i:-1!==(i=Te.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Te.call(this._minWeekdaysParse,a))?i:-1!==(i=Te.call(this._weekdaysParse,a))?i:-1!==(i=Te.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=h([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},vn.weekdaysRegex=function(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},vn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},vn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},vn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},vn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},dt("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),n.lang=k("moment.lang is deprecated. Use moment.locale instead.",dt),n.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ht);var kn=Math.abs;function Sn(e,t,n,s){var i=Zt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function Tn(e){return e<0?Math.floor(e):Math.ceil(e)}function On(e){return 4800*e/146097}function bn(e){return 146097*e/4800}function xn(e){return function(){return this.as(e)}}var Ln=xn("ms"),Pn=xn("s"),Wn=xn("m"),Hn=xn("h"),Fn=xn("d"),Cn=xn("w"),Rn=xn("M"),Un=xn("Q"),Nn=xn("y");function Gn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Vn=Gn("milliseconds"),jn=Gn("seconds"),En=Gn("minutes"),An=Gn("hours"),In=Gn("days"),Zn=Gn("months"),zn=Gn("years");var Jn=Math.round,$n={ss:44,s:45,m:45,h:22,d:26,M:11};var qn=Math.abs;function Qn(e){return(e>0)-(e<0)||+e}function Bn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=qn(this._milliseconds)/1e3,s=qn(this._days),i=qn(this._months);e=v(n/60),t=v(e/60),n%=60,e%=60;var r=v(i/12),a=i%=12,o=s,u=t,d=e,l=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Qn(this._months)!==Qn(h)?"-":"",_=Qn(this._days)!==Qn(h)?"-":"",m=Qn(this._milliseconds)!==Qn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?_+o+"D":"")+(u||d||l?"T":"")+(u?m+u+"H":"")+(d?m+d+"M":"")+(l?m+l+"S":"")}var Xn=Ft.prototype;Xn.isValid=function(){return this._isValid},Xn.abs=function(){var e=this._data;return this._milliseconds=kn(this._milliseconds),this._days=kn(this._days),this._months=kn(this._months),e.milliseconds=kn(e.milliseconds),e.seconds=kn(e.seconds),e.minutes=kn(e.minutes),e.hours=kn(e.hours),e.months=kn(e.months),e.years=kn(e.years),this},Xn.add=function(e,t){return Sn(this,e,t,1)},Xn.subtract=function(e,t){return Sn(this,e,t,-1)},Xn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+On(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(bn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},Xn.asMilliseconds=Ln,Xn.asSeconds=Pn,Xn.asMinutes=Wn,Xn.asHours=Hn,Xn.asDays=Fn,Xn.asWeeks=Cn,Xn.asMonths=Rn,Xn.asQuarters=Un,Xn.asYears=Nn,Xn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN},Xn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*Tn(bn(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=v(r/1e3),u.seconds=e%60,t=v(e/60),u.minutes=t%60,n=v(t/60),u.hours=n%24,a+=v(n/24),o+=i=v(On(a)),a-=Tn(bn(i)),s=v(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},Xn.clone=function(){return Zt(this)},Xn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},Xn.milliseconds=Vn,Xn.seconds=jn,Xn.minutes=En,Xn.hours=An,Xn.days=In,Xn.weeks=function(){return v(this.days()/7)},Xn.months=Zn,Xn.years=zn,Xn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=function(e,t,n){var s=Zt(e).abs(),i=Jn(s.as("s")),r=Jn(s.as("m")),a=Jn(s.as("h")),o=Jn(s.as("d")),u=Jn(s.as("M")),d=Jn(s.as("y")),l=i<=$n.ss&&["s",i]||i<$n.s&&["ss",i]||r<=1&&["m"]||r<$n.m&&["mm",r]||a<=1&&["h"]||a<$n.h&&["hh",a]||o<=1&&["d"]||o<$n.d&&["dd",o]||u<=1&&["M"]||u<$n.M&&["MM",u]||d<=1&&["y"]||["yy",d];return l[2]=t,l[3]=+e>0,l[4]=n,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,l)}(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)},Xn.toISOString=Bn,Xn.toString=Bn,Xn.toJSON=Bn,Xn.locale=Kt,Xn.localeData=tn,Xn.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Bn),Xn.lang=en,E("X",0,0,"unix"),E("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(w(e))}),n.version="2.24.0",e=xt,n.fn=Mn,n.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},n.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=h,n.unix=function(e){return xt(1e3*e)},n.months=function(e,t){return Dn(e,t,"months")},n.isDate=o,n.locale=dt,n.invalid=_,n.duration=Zt,n.isMoment=p,n.weekdays=function(e,t,n){return Yn(e,t,n,"weekdays")},n.parseZone=function(){return xt.apply(null,arguments).parseZone()},n.localeData=ht,n.isDuration=Ct,n.monthsShort=function(e,t){return Dn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){return Yn(e,t,n,"weekdaysMin")},n.defineLocale=lt,n.updateLocale=function(e,t){if(null!=t){var n,s,i=it;null!=(s=ut(e))&&(i=s._config),(n=new L(t=x(i,t))).parentLocale=rt[e],rt[e]=n,dt(e)}else null!=rt[e]&&(null!=rt[e].parentLocale?rt[e]=rt[e].parentLocale:null!=rt[e]&&delete rt[e]);return rt[e]},n.locales=function(){return S(rt)},n.weekdaysShort=function(e,t,n){return Yn(e,t,n,"weekdaysShort")},n.normalizeUnits=H,n.relativeTimeRounding=function(e){return void 0===e?Jn:"function"==typeof e&&(Jn=e,!0)},n.relativeTimeThreshold=function(e,t){return void 0!==$n[e]&&(void 0===t?$n[e]:($n[e]=t,"s"===e&&($n.ss=t-1),!0))},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=Mn,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},n.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElsfe:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}}),n.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),"jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");return n.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")},week:{dow:1,doy:4}}),n.locale("en"),n});
moment.locale("fr");
/* ========================== end of 2. moment() */
/* 3. global variables ======= [initializations] */
  var executionContext = getExecutionContext();
  var miniPc = getMiniPc();
  initialize();
  var nowAdjusted = new Date(moment().add(-5, "h"));
  var startOfToday = new Date(moment(nowAdjusted)
     .startOf("Day"));
  var endOfTomorrow = new Date(moment(startOfToday).add(2, 'd'));
  var lettersAndNumbers =
  'a-zA-Z0-9éèêëàáâäóòôöíìîïçûÉÈÊËÀÁÂÄÒÓÔÖÌÍÎÏÇÛ_-';
  /* iftttCalendarCommandPayload ------------------
  --------------------------- [global variables] */
  var iccp = [];
/* ================== end of 3. global variables */
/* 4. wf variables =========== [initializations] */
  var activitiesNode;
  var allTodayItems;
  var carrefourResetDom = false;
  var count = 0;
  var copyMode;
  var curLocTag = "";
  var curLocation;
  var cutNode;
  var debug = false;
  var dayIsFinishedHour = '21h50';
  var doneTodayItem;
  var doneTodayAsString;
  var hourItems;
  var imAtWork;
  var isWorkDay;
  var realHourItems;
  var realHourWfItems;
  var timer;
  var timerNode;
  var settingsNodeId =
    "6ee3d544-c124-cf2f-2a05-fb96aa119e53";
  var todayByAct = {};
  var todayByActAndDate = {};
  var todayItem;
  var wfLater;
  var laterDummies;
  var wfAllTodayEvents;
  var wfCurItem;
  var wfShelved;
  var wfTodayDateFormat = 'DD/MM/YYYY';
  var wfRecycleBin;
/* ========================= end of wf variables */
}
/* INITIALIZATIONS END ===== INITIALIZATIONS END */
/* ============================================= */
/*                   TESTING                     */
/* ============================================= */
/* createIWillDoThisMonths() =================== */
function createIWillDoThisMonths() {
  var oldMonth = moment()
      .add(-1, "months").format('MM/YYYY');
  var newMonth = moment().format('MM/YYYY');
  for (var i = 0; i < WF.starredItems().length; i++) {
    var starredItem = WF.starredItems()[i];
    if (starredItem.getName().includes(oldMonth)) {
      newItem = WF.createItem(starredItem.getParent(), 0 );
      newName = starredItem.getName().replace(oldMonth, newMonth)
      WF.setItemName(newItem, newName)
      WF.zoomTo(newItem);
      WF.toggleCurrentItemStarred();
      WF.zoomTo(starredItem);
      WF.toggleCurrentItemStarred();
    }
  }
}
/* ============== end of createIWillDoThisMonths */
/* wfChangeURL ===================== [WorkFlowy] */
function wfChangeURL(curItem) {
  if (typeof(curItem) == 'undefined') {
    wfCurItemUpdate()
    curItem = wfCurItem;
  }
  var newName = curItem.getName().replace(
  /(https:\/\/workflowy\.com\/#\/).{12}/gim,
  '$1bbae4aa585cd');
  WF.setItemName(curItem, newName);
  console.log(`763
    curItem.getName()|${curItem.getName()}|
    newName|${newName}|
  `);
}
/* ========================== end of wfChangeURL */
/* wfTodayRecycle() ================ [WorkFlowy] */
function wfTodayRecycle() {
  wfUpdateEventLists;
  allTodayItems.forEach(curItem => {
    if (curItem.isCompleted()) {
      if (!wfWasHiddenByLater(curItem) ) {
        console.log(`594 [wfTodayRecycle]
      curItem.getName()|${curItem.getName()}|
      `);
        wfRecycle(curItem);
      } else {
//       console.log(`595 [wfTodayRecycle] did not recycle
//         curItem.getName()|${curItem.getName()}|
//         wfWasHiddenByLater(curItem)|${ wfWasHiddenByLater(curItem)}|
//       `);
      }
    }
  })
}
/* ======================= end of wfTodayRecycle */
/* write code above this line ================== */
/* write comments under this line ================
*/
/* TESTING END ===================== TESTING END */

/* ============================================= */
/*                TEST BATTERY                   */
/* ============================================= */
functionsTests();
calTests();

/* ********************************************* */
/*              TEST BATTERY END                 */
/* ********************************************* */

/* ============================================= */
/*                  FUNCTIONS                    */
/* ============================================= */
function functionsTests() {
  typoOfProTest();
}
/* activitiesDicComplete() ========= [functions] */
function activitiesDicComplete() {
  getDic('activitiesDicMatrix.json').then(
    activitiesDicMatrix => {
    var activitiesDic = activitiesDicMatrix;
    console.log(`083
    activitiesDic |${JSON.stringify(activitiesDic
      , null, "  ")}|
    `);
    Object.keys(activitiesDicMatrix).forEach(
      activity => {
        var activityDic = activitiesDicMatrix[
          activity];
        /* type -------- [activitiesDicComplete] */
        if (activityDic
          .hasOwnProperty('nr')) {
          activityDic.type = 'streak';
        } else {
          activityDic.type = 'routine';
        };
        /* url --------- [activitiesDicComplete] */
        if (!activityDic
          .hasOwnProperty('url') &&
          !postLaunchShortcutsDic.hasOwnProperty(
          "noWorkFlowy")) {
          activityDic.url =
           'https://workflowy.com/#/'
           + activityDic.wfId
           .match(/([^-]*)$/)[1] + '?q=';
        };
        /* moments ----- [activitiesDicComplete] */
        if (!activityDic
          .hasOwnProperty('moments')) {
          activityDic.moments = [
            "matin",
            "après-midi",
            "soir"
          ];
        };
        /* launchShortcuts
        ---------------- [activitiesDicComplete] */
        if (!activityDic
          .hasOwnProperty('launchShortcuts')) {
          activityDic.launchShortcuts = [];
        };
        /* loc: nextLoc  [activitiesDicComplete] */
        /* must be before locs ----------------- */
        if (!activityDic
          .hasOwnProperty('nextLoc')) {
          if (activityDic
            .hasOwnProperty('locs')) {
            activityDic.nextLoc = activityDic
              .locs[0];
          }
        }
        /* locs -------- [activitiesDicComplete] */
        if (!activityDic
          .hasOwnProperty('locs')) {
          activityDic.locs = [
            "maison",
            "trajet",
            "trajet travail",
            "travail",
            "trajet maison"
          ];
        }
        /* timeLimit --- [activitiesDicComplete] */
        if (!activityDic
          .hasOwnProperty('timeLimit')) {
          activityDic.timeLimit = '23:59';
        };
    });
    /* end of activity loop -------------------- */
    saveDic("activitiesDic.json", activitiesDic);
    if (executionContext == 'Scriptable') {
      Script.setShortcutOutput(activitiesDic);
      Script.complete;
    }
  });
}
/* ================ end of activitiesDicComplete */
/* launchCommands() ===== [functions] */
function launchCommands(commandsArray){
  var invalidCommands = [];
  var validCommands = [];
    for (var i = 0; i < commandsArray.length; i++) {
      var command = commandsArray[i];
    var typeofCommand = typeofPro(command);
    if (typeofCommand != 'object') {
      if (command.match(/\{.*\=.*\}/)) {
        var reason = 'stupid formatting of JSON in google sheets, "=" instead of ":"';
      } else {
        var reason = "not an object"
      }
      invalidCommands.push({value:command, reason:reason});
      continue;
    }
    if (!command.hasOwnProperty('action')) {
      invalidCommands.push({value:command, reason:"no key named 'action'"});
      continue;      
    }
    validCommands.push(command);
  }
  invalidCommands.forEach(invalidCommandHandler);
  validCommands.forEach(validCommandHandler);
  function validCommandHandler(command) {    
    if (command.action == 'createEvent') {
        createEvent(command);
    }
    if (command.action == 'deleteEvent') {
      deleteEvent(command);
    }
  }
  function invalidCommandHandler(error) {
    easyLog([`5761 [launchCommands] invalidCommand 
    error.reason|${error.reason}|
    error.value |${JSON.stringify(error.value, null, "  ")}|
    `, , moment().format('DD/MM/YYYY HH:mm')]);    
  }
}
/* ============ end of launchCommands */
/* calCheckDummies ==================== [functions] */
async function calCheckDummies() {
  var events = await getEvents();
  var changes = calCheckDummiesChanges(events);
  calCheckDummiesApplyChanges(changes);
}


function calDummiesToCreate(existingEvents) {
  function dayPlusActivity(date, activity) {
    var day = moment(date).format("YYYYMMDD");
    return day + ' ' + activity;
  }
  function activityFromSlot(slot) {
    return streakSerie(slot)
  }
  function blankList(startDate, endDate) {
    blankList = {};
    var numberOfDays = moment(endDate).diff(startDate, 'd');
    for (var offset = 0; offset < numberOfDays; offset++) {
      Object.keys(activitiesDic).forEach(activity => {
        if (activitiesDic[activity].type == "streak" )
        blankList[dayPlusActivity(moment(startDate).add(offset, 'd'), activity)] = [];
      });
    }
    return blankList;
  }
  function insertInList(events, list) {
    events.forEach(event => {
      list[dayPlusActivity(event.startDate, event.notes.Série)].push(event);
    })
    return list;
  }
  function getMissingDummies(eventDic) {
    var eventsToCreate = [];
    Object.keys(eventDic).forEach(slot => {
      if (eventDic[slot].length == 0) {
        eventsToCreate.push(calEasyDummy(streakSerie(slot), moment(slot, "YYYYMMDD")));
      }
    })
    return eventsToCreate;
  }
  var existingEvents = existingEvents.filter(calIsStreakOrDummy);
  var output = getMissingDummies(insertInList(existingEvents, blankList(calGetEarliest(existingEvents).startDate, calGetLatest(existingEvents).endDate)));
  return output
}
function calEasyDummy(activity, date) {
  var activityDic = activitiesDic[activity];
  var nr = parseInt(activityDic.nr);
  nr = isNaN(nr)?nr = "":("" + nr)
    .padStart(2, ' ') + " ";
  return {
    title: `${nr}${activity.charAt(0)} ${
      activityDic.emoji}`,
    notes: JSON.stringify({
      "Série":activity,
      "Compteur":activityDic.nr,
      "URL":activityDic.url,
      "Type":"Dummy",
      "creationDate":moment().format(
        "YYYY-MM-DD HH:mm")
       }, null, "  "),
    startDate: date,
    color: 'grey'
  };
}
function calCheckDummiesChanges(events) {
  var startDate = moment();
  var curDay = moment(startDate);
  var dummies = {};
  var dummiesByAct = {};
  var eventsToDelete = [];
  var eventsToCreate = [];
  var lastDate;
  activitiesDic.Daylio = {Type: 'Streak'};
  adHocFunctionForNewStreaks();
  /* fills the dummy JSON file with existing ------
  streaks and events ------------ [checkDummies] */
  var myEvents = events.filter(calIsStreakOrDummy);
  myEvents.forEach(event => {
    var eventNotes = handleEventNotes(event
      .notes);
    if (eventNotes.hasOwnProperty("Série")){
      var curDate = moment(event.startDate)
        .format("YYYY-MM-DD");
      if (!dummies.hasOwnProperty(curDate)){
        dummies[curDate] = {}
        if (moment(event.startDate)
          .diff(lastDate) > 0) {
          lastDate = event.startDate
        }
      }
      var curAct = event.notes.Série;
      if (eventNotes.hasOwnProperty('Type')) {
        if (eventNotes.Type == 'Dummy') {
          /* populates dummiesByAct -------------
          --------------------- [checkDummies] */
          dummiesByAct[curAct]
            = curDate;
          if (dummies[curDate]
            .hasOwnProperty(curAct)) {
            eventsToDelete.push(event);
          } else {
            dummies[curDate][curAct]
              = 'Dummy' + event.id;
          }
        }
      } else {
        if (dummies[curDate].hasOwnProperty(
          curAct)) {
          /* there is already something ---------
          at that date -------- [checkDummies] */
          /* deletes duplicate dummies ------
          --------------------- [checkDummies] */
          var myReg = /Dummy(.*)/img
            .exec(dummies[curDate][curAct]);
          if (myReg != null) {
            eventsToDelete.push({id: myReg[1]});
          }
          /* deletes duplicate streaks ----------
          /* ------------------ [checkDummies] */
          var streakReg = /Streak(.*)/img
            .exec(dummies[curDate][curAct]);
          if (streakReg != null) {
            if (event.notes['Enregistré le']
            == JSON.parse(
              streakReg[1])
              .notes['Enregistré le']) {
              eventsToDelete.push(event);
            }
          }
        }
        dummies[curDate][curAct] = 'Streak'
          + JSON.stringify(event, null, "");
      }
    }
  })
  /* end of the loop on the events */
  var eventsToCreate = [];
  /* ------------------------ [checkDummies] */
  return ({eventsToDelete:eventsToDelete, eventsToCreate: calDummiesToCreate(myEvents)});
  function adHocFunctionForNewStreaks() {
  /* temp : add dummies for the new ---------------
  --------------- 'Mind' activity [checkDummies] */
  var firstDummyDate = '20201101';
  while (moment(curDay).diff(moment(firstDummyDate).add(1, 'd')
    , 'd') < 0) {
    dummies[moment(curDay).format('YYYY-MM-DD')]
      = {'Mind':'Dummy'};
    curDay = moment(curDay).add(1, 'd');
  }
  /* end of temp */
  }
}
function calCheckDummiesApplyChanges(changes){
  changes.eventsToCreate.forEach(event => {
    createEvent(event);
  });
  changes.eventsToDelete.forEach(event => {
    deleteEvent(event);
  });
}
function calIsNeitherStreakNorDummy(event) {
  return !calIsDummy(event) && !calIsStreak(event);
}


async function calCheckDummiesTest() {
  if (executionContext == 'console' || executionContext == 'GScript') {
    var events = await getEvents();
    var changes = calCheckDummiesChanges(events);
    easyWrite({fileName: 'calCheckDummiesChanges.json', fileContent: JSON.stringify(changes, null, "  ")});
    calCheckDummiesChanges = await easyRead('calCheckDummiesChanges.json')
    console.log(`2562 calCheckDummiesChanges`);
    console.log(calCheckDummiesChanges);  
  }
  if (executionContext == 'Scriptable') {
    output = await calCheckDummiesTestSc();
    console.log(output);
  }
  return (`959 calCheckDummiesTest finished`)
}
async function calCheckDummiesTestSc() {
  scEvents = await easyRead('rawScEvents.json');
  var events =
    convertScEvents(scEvents);
  changes = calCheckDummiesChanges(events);
  eventsToDelete = changes.eventsToDelete;
  console.log(eventsToDelete);
  console.log('937 eventsToDelete.filter(calIsStreak)');
  console.log(eventsToDelete.filter(calIsStreak));
  console.log('938 eventsToDelete.filter(calIsDummy)');
  console.log(eventsToDelete.filter(calIsDummy));
  console.log('939 eventsToDelete.filter(calIsNeitherStreakNorDummy)');
  console.log(eventsToDelete.filter(calIsNeitherStreakNorDummy));

}
/* ========================= end of checkDummies */
/* countWords() ==================== [functions] */
function countWords(str) {
  var myRegex = new RegExp(
    `[a-zA-Z0-9éèêëàáâäóòôöíìîïœçÉÈÊËÀÁÂÄÒÓÔÖÌÍÎ`
    + `ÏÇ’'\u002D\u2010\u2011]+`, `gmi`);
  return str.match(myRegex).length;
}
/* =========================== end of countWords */
/* createEvent() =================== [functions] */
function createEvent(params) {
  if (typeof(params) != 'object') {
    throw '168 createEvents() must have an object '
      + 'as argument';
  }
  if (!params.hasOwnProperty('title')) {
    throw '172 createEvents() error: '
      + 'no title provided';
  }
  if (!params.hasOwnProperty('toIccp')) {
    params.toIccp = false;
  }
  /* massages startDate and endDate
  -------------------------------- [createEvent] */
  if (params.hasOwnProperty('startDate')) {
    var dayStart = moment(
      params.startDate).startOf('d');
    if (params.hasOwnProperty('isAllDay')) {
      if (params.isAllDay == true) {
        params.startDate = moment(params.startDate)
          .startOf('d');
      } else {
        params.startDate = moment(params.startDate);
      };
    } else {
      if (moment(params.startDate).diff(dayStart)
        == 0) {
        params.isAllDay = true;
      } else {
        params.isAllDay = false;
        if (!params.hasOwnProperty('endDate')) {
          params.endDate = moment(dayStart)
            .add(30, 'm');
        }
      }
    }
    if (params.isAllDay) {
      params.endDate = moment(dayStart)
        .add(23, 'h').add(59, 'm');
    }
  } else {
    /* no startDate was provided - [createEvent] */
    if (params.hasOwnProperty('isAllDay')) {
      if (params.isAllDay) {
        params.startDate = moment().startOf('d');
      } else {
        params.startDate = moment();
        params.endDate = moment.add(30, 'd');
      }
    } else {
      params.startDate = moment();
      params.endDate = moment().add(30, 'd');
      params.isAllDay = false;
    }
  }
  params.startDate = new Date(moment(params
    .startDate));
  params.endDate = new Date(moment(params
    .endDate));
  /* massages the notes ---------- [createEvent] */
  if (params.hasOwnProperty('notes')) {
    params.notesAsString = (typeof(params.notes)
      == 'object')?JSON.stringify(params.notes
      , null, '  '):params.notes;
  }
  /* massages the color ---------- [createEvent] */
  if (!params.hasOwnProperty('color')) {
    params.color = 'blue'
  }
  /* google script --------------- [createEvent] */
  if (executionContext == 'GScript') {
    var newEvent = eventCal
      .createAllDayEvent(params.title, params
      .startDate
      , {description:params.notesAsString});
    if (params.color == 'grey') {
      newEvent.setColor(8);
    }
    easyLog([`1499 [createEvent] event created
    params |${JSON.stringify(params, null, "  ")}|
    `, , moment().format('DD/MM/YYYY HH:mm')]);
  }
  /* scriptable ------------------ [createEvent] */
  if (executionContext == 'Scriptable') {
    var getPlanifCal = Calendar
      .forEventsByTitle("Planification");
    getPlanifCal.then(planifCal =>{
      let newEvt = new CalendarEvent();
      newEvt.startDate = params.startDate;
      newEvt.endDate = params.endDate;
      newEvt.title = params.title;
      newEvt.isAllDay = params.isAllDay;
      if (params.hasOwnProperty('notesAsString')) {
        newEvt.notes = params.notesAsString;
      };
      newEvt.calendar = planifCal;
      newEvt.save();
    });
  }
  /* console --------------------- [createEvent] */
  if (executionContext == 'console'
    || executionContext == 'WorkFlowy') {
    params.action = 'createEvent';
    iccp.push(params);
    if (params.toIccp == false) {
      postToZapier(
        'https://hooks.zapier.com/hooks/'
        + 'catch/1458099/ol2q5bh/',
        {
          "myContent": '_' + 
            JSON.stringify(iccp)
        }
      );
    }
  }
}
/* ========================== end of createEvent */
function testPostToZapier() {
  if (executionContext != 'console' 
    && executionContext != 'WorkFlowy') {
    return;
  }
  postToZapier(
  'https://hooks.zapier.com/hooks/catch/1458099/ol2q5bh/'
  ,
    {
      myContent: '_' + 
        JSON.stringify(
          [
            {
              "startDate": "2020-11-23T23:00:00.000Z",
              "eventId": "4j9d8nd1mnsss8o9ikln1481lg",
              "toIccp": true,
              "calName": "Planification",
              "action": "deleteEvent"
            },
            {
              "startDate": "2020-11-23T23:00:00.000Z",
              "title": " 7 Feeder 🐦 491",
              "notes": {
                "Période actuelle": 491,
                "Plus longue série": 491,
                "Nombre d'enregistrements": 491,
                "Série": "Birdfeeder",
                "Enregistré le": "07/11/2020 22:10",
                "Date": "24/11/2020"
              },
              "emoji": "🐦",
              "toIccp": false,
              "isAllDay": true,
              "endDate": "2020-11-24T22:59:00.000Z",
              "notesAsString": "{\n  \"Période actuelle\": 491,\n  \"Plus longue série\": 491,\n  \"Nombre d'enregistrements\": 491,\n  \"Série\": \"Birdfeeder\",\n  \"Enregistré le\": \"07/11/2020 22:10\",\n  \"Date\": \"24/11/2020\"\n}",
              "color": "blue",
              "action": "createEvent"
            }
          ]
        )
    }
  )
}
/* postToZapier() =================== [functions] */
function postToZapier(url, payload) {
  if (executionContext == 'WorkFlowy') {
    wfShowMessage('1087 calling zapier')
  }
  url = `${url}?${jsonToUri(payload)}`;
  const proxyurl =
    "https://cors-anywhere.herokuapp.com/";
  fetch(proxyurl + url)
  .then(response => response.text())
  .then(contents => {
    if (executionContext == 'WorkFlowy') {
      wfShowMessage(contents);
    }
  })
  .catch(() => console.log("Can’t access "
    + url + " response. Blocked by browser?"));
}
/* ========================== end of postToZapier */
/* createEventGenerator() ============ functions */
function createEventGenerator() {
  var startDateIni = new Date(moment('2019-03-11')
    .toISOString());
  var startDateLast = new Date(moment('2019-03-23')
    .toISOString());
  var loopCount = moment(startDateLast)
    .diff(startDateIni, 'd') + 1;
  for (var i = 1; i <= loopCount; i++) {
    var curDate = moment(startDateIni).add(i - 1,
      'd');
    createEvent({
      title:"1 Write ✍️ " + i,
      notes:{
        "Période actuelle" : i,
        "Plus longue série" : i,
        "Nombre d'enregistrements" : i,
        "Série" : "Write",
        "Date" : curDate.format('DD/MM/YYYY'),
        "progress" : "generated by gs",
      },
      startDate:curDate,
    });
  }
}
/* ================= end of createEventGenerator */
/* deleteEvent() ==================== [functions]*/
function deleteEvent(params) {
  if (!params
    .hasOwnProperty('calName')) {
    params.calName = 'Planification';
  }
  if (executionContext == 'Scriptable') {
    getPlanifCal = Calendar
      .forEventsByTitle(params.calName)
      .then(
        planifCal => {
        CalendarEvent.between(
        new Date(moment(params.startDate)
          .add(-1, 'd'))
        , new Date(moment(params.startDate)
          .add(1, 'd'))
        , [planifCal]
      ).then(
        events => {
        if (!params.hasOwnProperty('id')) {
          params.id = params.eventId;
        }
        events.forEach(event => {
          if (event.identifier
            == params.id) {
              event.title
console.log(`9621 deleting
event.title|${event.title}|
`);
           event.remove();
          }
        });
      })
    })
  }
  /* console part ---------------- [deleteEvent] */
  if (executionContext == 'console'
  || executionContext == 'WorkFlowy') {
    params.action = 'deleteEvent';
    iccp.push(params);
    if (params.toIccp == false) {
      postToIFTTT('https://maker.ifttt.com/trigger/'
        + 'calendarCommand/'
        + 'with/key/iYJF6uSsJneO7t82S59SP',
        {
          "value1": JSON.stringify(
            params,
            null,
            "  ")
        }
      );
    }
  }
  /* google script part ---------- [deleteEvent] */
  if (executionContext == 'GScript') {
    if (!params.hasOwnProperty('eventId')) {
      params.eventId = params.id;
    }
    /* easyLog(`942 deleteEvent called on
    ${JSON.stringify(params, null, '  ')}
    params.eventId ${params.eventId}`);*/
    try {
      var eventToDelete = eventCal
        .getEventById(params.eventId);
      eventToDelete.deleteEvent();
     } catch (e) {
       easyLog( [`937 could not delete event because ${e} 
       params |${JSON.stringify(params, null, "  ")}|
       `, , moment().format('DD/MM/YYYY HH:mm')]);
     }
  }
}
/* ========================== end of deleteEvent */
/* cleanUpReminders() ============== [functions] */
function cleanUpReminders() {
  /* removes "je badge" reminders -----------------
  --------------------------- [cleanUpReminders] */
  if (executionContext == 'Scriptable') {
    Calendar.forRemindersByTitle('Rappels').then(
    reminderCal => {
      console.log(reminderCal);
      Reminder.allCompleted([reminderCal]).then(
      completedReminders => {
        completedReminders.forEach(curReminder => {
          if (curReminder.title
          .includes("badge")) {
            console.log(curReminder.title);
            curReminder.remove();
          }
        })
      })
    })
  } else {
    console.log(`685
    cleanUpReminders would clean up ios reminders
    `);
  }
}
/* ===================== end of cleanUpReminders */
/* doneToday() ===================== [functions] */
function doneToday(eventLists) {
  if (typeof(eventLists) !='undefined') {
    buildDoneToday(eventLists);
  } else {
    getEvents().then(events => {
      try {
        splitEvents(events, new Date()).then(
          seOutput => {
            buildDoneToday(seOutput)
          }
        ,
          error => {
          console.log(`doneToday.js failure
          at autoexecute section
          at getEvents
          at splitEvent
          the following failure was raised: ${
            error}
          `);
        }
        )
      } catch (e) {
        console.log(`doneToday.js autoexecute
          error triggered in doneToday ${e}
        `)}
    })
  }
  /* buildDoneToday() helper function
  ---------------------------------- [doneToday] */
  function buildDoneToday(eventLists) {
    for (var key in eventLists) {
      if (eventLists.hasOwnProperty(key)) {
        eval(`${key} = eventLists["${key}"]`)
      }
    }
    var dayOffset = - moment().add(-5, 'hours')
      .startOf('day').diff(moment().startOf('day'),
      'days');
    /* builds the output ------ [buildDoneToday] */
    if (executionContext != 'WorkFlowy') {
    var bordersOn = false;
    var titleSpaces = " ".repeat(
      doneTodayColl.length<10?9:8);
    var tableStyle = bordersOn? `table, th, td {
    border: 1px solid black;
  }`:"";
    var doneTodayHTML =
  `<HTML>
  <HEAD>
  <meta charset="utr-8">
  <TITLE>…|${titleSpaces}Faits aujourd'hui : ${
    doneTodayColl.length + titleSpaces
    }|…</TITLE>
  </HEAD>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 40px;
      margin-left:1em
        }
    td {
      font-size: 4em;
      padding-left:0.5em
    }
    a:link {
      color: grey;
      text-decoration: none;
    }
    .emoji {
      font-size:1em;
      text-decoration: none;
      text-align: center;
    }
    .hour {
      font-size:2em;
      color: gray;
      text-decoration: none;
    }
    ${tableStyle}
  </style>
  <BODY>`
    if (false) {
    doneTodayHTML = `${doneTodayHTML}
  <div id="dialog">Is this a 3 button dialog?</div>
<button id="trigger">Click me</button>
<p id="demo"></p>
<div id="dialog" title="Basic dialog">
  <p>This is the default dialog which is useful for displaying information. The dialog window can be moved, resized and closed with the 'x' icon.</p>
</div>`;
    };
    doneTodayHTML = `${doneTodayHTML}
    <table>`;
    }
    /* builds the body -------- [buildDoneToday] */
    var lastDateHeader;
    var sectionList = [
      "regStreaks",
      "todayStreaks",
      "advStreaks",
      "nextActsForSure",
      "nextActsMaybe"
    ];
    var sectionNames = [
      "Régularisation",
      "Aujourd’hui",
      "Anticipation",
      "À faire",
      "Plus tard"
    ];
    var recycleWasAdded = false;
    /* loops on the sections -- [buildDoneToday] */
    for (var i = 0; i < sectionList.length; i++) {
      var curSection = eval(sectionList[i]) ;
      if (curSection == "") continue;
      var isStreak = sectionList[i]
        .includes("Streak");
      if (!recycleWasAdded) {
        var recycleButton = `
      <a class="emoji"
        href =
        "scriptable:///run?scriptName=doneToday">
      ${htmlSpecialChars("🔄")}
      </a>`;
        recycleWasAdded = true;
      } else {
        recycleButton = "";
      };
      var colCount = 8;
      /* adds section name ---- [buildDoneToday] */
      doneTodayHTML = `${doneTodayHTML}
      <tr>
        <td colspan = ${colCount - 2}>
          <span ${sectionList[i] ==
            "nextActsMaybe"?'style="color:grey':''}">
          <b>${htmlSpecialChars(sectionNames[i])
            }${(sectionList[i] ==
            "nextActsMaybe")?'':' ('
            + curSection.length + ')'
            }</b>
          </span>
        </td>
        <td text-align:right padding-left:0em>
          ${recycleButton}
        </td>
      </tr>
      `;
      /* loops on the events -- [buildDoneToday] */
      for (var j = 0; j < curSection.length; j++) {
        /* adds date headers -- [buildDoneToday] */
        var event = curSection[j];
        if (event == null) continue;
        /* adds events themselves
        ----------------------- [buildDoneToday] */
        var markAsDoneOrShowInCalendar = isStreak
          ?`<a class="emoji" `
            + `href="shortcuts://run-shortcut?`
            + `name=showCalendarEvent&`
            + `input=%7B%22startDate%22:%22${
            moment(event.startDate).format()
            }%22,%22title%22:%22${
            streakShortName(event.title)
            }%22%7D">${
            htmlSpecialChars("📅")}
          </a>`
          :`<a class="emoji" href="scriptable:///run?${
            jsonToUri({
              scriptName: 'markAsDone',
              activity: event.notes.Série,
              date: event.startDate
            })}"> ${
            htmlSpecialChars("☑️")
          }</a>`
            streakShortName(event.notes.Série)
            activitiesDic[event
          .notes["Série"]].url
        doneTodayHTML = `${doneTodayHTML}
      <tr>
        <td width ='10%'>
        </td>
        <td>
          <span ${sectionList[i] ==
            "nextActsMaybe"?'style="color:grey':''}">
             ${streakShortName(event.notes.Série)}
           </span>
        </td>
        <td class="hour">
          ${
            htmlSpecialChars(moment(event.startDate)
            .calendar().split(" ")[0].toLowerCase())
          }
        </td>
        <td class="hour">
          ${
            isStreak?
            moment(event.notes["Enregistré le"]
            , "DD/MM/YYYY HH:mm").format("HH:mm")
            :''
          }
        </td>
        <td padding-left:0em>
          <a class="emoji"
            href="scriptable:///run?${
            jsonToUri({
              scriptName: 'launch',
              activity: event.notes.Série
            })}"
          >
          ${htmlSpecialChars(
          event.emoji)}
          </a>
        </td>
        <td padding-left:0em>
          ${markAsDoneOrShowInCalendar}
        </td>
        <td>
          <a class="emoji" href="scriptable:///run?scriptName=OpenURL&input=${
          encodeURIComponent(activitiesDic[event
          .notes["Série"]].url)}"
          >${
              htmlSpecialChars("📋")}
          </a>
        </td>
      </tr>
        `
      };
    }; /* end of loop on the sections
    --------------------------- [buildDoneToday] */
    doneTodayHTML =
   `${doneTodayHTML}
    </table>
    </BODY>
  </HTML>`
    /* presents the output ---- [buildDoneToday] */
    /* console ---------------- [buildDoneToday] */
    if (executionContext == 'console') {
      document.body.innerHTML = (doneTodayHTML);
    }
    /* scriptable ------------- [buildDoneToday] */
    if (executionContext == 'Scriptable') {
      Safari.open("shortcuts://run-shortcut?name="
        + "showHtml&input="
        + encodeURIComponent(doneTodayHTML));
    }
    /* WorkFlowy -------------- [buildDoneToday] */
    if (executionContext == 'WorkFlowy') {
      return;
      /* cleans up ------------ [buildDoneToday] */
      wfKillBarrenChildren(
        wfGetChildByName('Today').getChildren(),
        wfGetChildByName('Mirrors')
      );
      /* adjusts the hours ---- [buildDoneToday] */
//       var actCount = 0;
//       var startHour = parseInt(moment()
//         .format('HH'));
//       if (startHour > 21) {
//         startHour = 9;
//       }
//       for (var curHour = startHour; curHour < 25
//         ; curHour++) {
//         var hourItem = WF.createItem(WF
//         .getItemById(
//          '35d61fcb-8663-21c4-b7e5-f5591c1004f6')
//          , curHour - startHour);
//         if (curHour != 20 && curHour != 22 && curHour != 24) {
//           WF.setItemName(hourItem, (curHour + '')
//           .padStart(2, '0') + ':00'
//           + ((curHour == 22)?' go to bed':'') )
//         }
//         if (curHour == 20) {
//           WF.setItemName(hourItem, '20:00');
//           for (var j = 0; j < 3; j++) {
//             var actItem =  WF.createItem(hourItem,
//               j);
//             WF.setItemName(actItem, `dinner p${j}`);
//           }
//         }
//         if (curHour == startHour) {
//           for (var j = 0; j < 3; j++) {
//             var actItem =  WF.createItem(hourItem,
//               j);
//             WF.setItemName(actItem, `I wake up p${j}`);
//           }
//         }
//         if (curHour == 22) {
//           WF.setItemName(hourItem, '22:00');
//           for (var j = 0; j < 3; j++) {
//             var actItem =  WF.createItem(hourItem,
//               j);
//             WF.setItemName(actItem, `I go to bed p${j}`);
//           }
//         }
//         if (curHour == 23) {
//           WF.setItemNote(hourItem, 'in bed');
//         }
//         WF.expandItem(hourItem);
//       }
      /* end of the loop on the hours ---------- */
      insertActs();
      /* insertActs() helper function -------------
      ------------------------------ [doneToday] */
      function insertActs() {
          /* new method: inserts everything in
          "later" and lets the scan sort it out */
          var i = 0;
          nextActs.forEach(curDummy => {
            i++;
            var actItem = WF.createItem(wfLater
              , i);
            var prog = curDummy.notes
              .hasOwnProperty('progress')
              ?' ' + curDummy.notes.progress:'';
            var curAct = curDummy.notes
              .Série;
//             WF.setItemName(actItem, `${
//               activitiesDic[curAct].emoji} <b>${
//               streakShortName(curDummy
//               .notes.Série)}${prog}</b> ${
//               moment(curDummy
//               .startDate).calendar()
//               .split(" ")[0].toLowerCase()} `
//             );
            WF.setItemName(actItem,
              wfFormatEvent(curDummy, prog)
            );
          })
        }
    /* --------------------- end of insertActs() */

   /* ------ end of buildDoneToday() [doneToday] */
    }
  }
}
/* ============================ end of doneToday */
/* wfAddMissingHours() ============= [WorkFlowy] */
function wfAddMissingHours() {
  if (executionContext != 'WorkFlowy' ) {
    return;
  }
  return new Promise(resolve => {
    var startHour = parseInt(moment()
      .format('HH')) + 1;
    if (startHour < 9) {
      startHour = 9;
    }
    var existingHours = [];
    todayItem.getChildren().forEach(item => {
      var itemName = item.getName();
      var myReg = itemName.match(/(\d{2}):\d{2}/);
      if (myReg != null) {
        existingHours.push(parseInt(myReg[1]));
      }
    });
    /* inserts tomorrows activities ---------------
    ------------------------ [wfAddMissingHours] */
    if (moment().diff(moment(dayIsFinishedHour
      , 'HH[h]mm'), 'm') > 0) {
      startHour = 9;
    }
    if (existingHours.length == 0) {
      startHour = 9;
    }
    for (var curHour = 23; curHour >= startHour
      ; curHour--) {
      if (!existingHours.includes(curHour)) {
        var formattedHour = (curHour + '')
          .padStart(2, '0') + ':00';
        console.log(`425 inserting hour
        formattedHour|${formattedHour}|
        `);
        var newItem = WF.createItem(todayItem, 1);
        WF.setItemName(newItem, formattedHour);

      }
    }
    resolve(`wfAddMissingHours() finished`);
  })
  /* end of return promise - [wfAddMissingHours] */
}
/* ================== end of wfAddMissingHours() */
/* wfBringStrandedToTop() ========== [WorkFlowy] */
function wfBringStrandedToTop() {
  if (executionContext != 'WorkFlowy' ) {
    return;
  }
  return new Promise(resolve => {
    var existingHours = [];
    var firstHour;
    var itemsToMove = [];
    todayItem.getChildren().forEach(item => {
      var itemName = item.getName();
      var myReg = itemName.match(/(\d{2}):\d{2}/);
      if (myReg == null) {
        if (typeof(wfEventFromItem(item))
          != 'undefined') {
          itemsToMove.push(item);
        }
      } else {
        if (typeof(firstHour) == 'undefined') {
          firstHour = item
        }
      }
    });
    /* end of the loop on the children of today ---
    --------------------- [wfBringStrandedToTop] */
    if (itemsToMove.length > 0) {
      var debugInfo = '';
      itemsToMove.forEach(itemToMove => {
        /* uncompletes item if necessary ----------
        ----------------- [wfBringStrandedToTop] */
        if (!itemToMove.isCompleted()) {
          console.log(`1962[wfBringStrandedToTop]
          uncompletes
          itemToMove.getName()|${itemToMove.getName()}|
          `);
          WF.completeItem(itemToMove);
        }
        debugInfo  = `${debugInfo}
        ${itemToMove.getName()}`
      })
      console.log(`684 [wfBringStrandedToTop]
        moving ${debugInfo}
        into
        firstHour.getName()|${firstHour.getName()}|
      `);
      WF.moveItems(itemsToMove, firstHour, 0);
    }
//     /* inserts tomorrows activities ---------------
//     ------------------------ [wfBringStrandedToTop] */
// commented out since 06/11/2020
//     if (existingHours.length == 0
//       && startHour == 24) {
//       startHour = 9;
//     }
//     for (var curHour = 23; curHour >= startHour
//       ; curHour--) {
//       if (!existingHours.includes(curHour)) {
//         console.log(`576
//         curHour|${curHour}|
//         `);

//         var formattedHour = (curHour + '')
//           .padStart(2, '0') + ':00';
//         console.log(`425 inserting hour
//         formattedHour|${formattedHour}|
//         `);
//         var newItem = WF.createItem(todayItem, 1);
//         WF.setItemName(newItem, formattedHour);

//       }
//     }
    resolve(`wfBringStrandedToTop done`)
  })
  /* end of return promise - [wfBringStrandedToTop] */
}
/* ================== end of wfAddMissingHours() */

function easyRequestSend(request, body) {
  request.send(body);
  request.onloadend = function () {
    if (request.status != 200) {
      console.log(`1622 dropbox file not available`);
    }
  }
}
/* dropboxFetch() ================== [functions] */
function dropboxFetch(fileName) {
  return new Promise((resolve, reject) => {
    var dropboxToken
      = "Bearer sPxsxIdRTeYAAAAAAAAYxLIrh-nHk7"
        + "mZcrt9Ew6nqXI9yK9YkkjYnlxskNbAx5vD";
    var mainRequest = new XMLHttpRequest();
    mainRequest.onreadystatechange
      = getDropboxShareLink;
    mainRequest.open("POST"
      , "https://api.dropboxapi.com/"
      + "2/sharing/create_shared_link", true);
    mainRequest.setRequestHeader(
      "Authorization",
      dropboxToken
    );
    mainRequest.setRequestHeader("Content-type"
      , "application/json");
    mainRequest.onerror = function() {
      console.log(`9401
      `);
    };
    easyRequestSend(mainRequest, '{"path": "/Javascript/'
        + fileName + '"}');
    /* getDropboxShareLink() helper function ------
    ----------------------------- [dropboxFetch] */
    function getDropboxShareLink
      (readyStateChangeEvent) {
      var myRequest = readyStateChangeEvent.target;
      if (myRequest.readyState != 4) {
        return 0;
      };
      var stat = myRequest.status;
      if (stat != 200) {
         /* console.log("713 NOT FOUND"); */
        return 0;
      };
      /* gets the download url -- [dropboxFetch] */
      var fileProperties = JSON.parse(myRequest
        .responseText);
      var downloadURL
        = "https://dl.dropboxusercontent.com"
        + fileProperties.url.split(".com")[1];
      /* launches the download -- [dropboxFetch] */
      myRequest = new XMLHttpRequest();
      myRequest.onerror = function(e) {
        console.log(`7822 [getDropboxShareLink]
        e|${e}|
        `);
      };
      myRequest.onreadystatechange =
        getResponseText;
      myRequest.open("GET", downloadURL, true);
      myRequest.send(null);
    }
    /* ============== end of getDropboxShareLink */
    /* getResponseText helper function ---------- */
    function getResponseText(objectEvent) {
      var myRequest = objectEvent.target;
      if (myRequest.readyState != 4) {
        return 0;
        /* when ready ----------- [dropboxFetch] */
      }
      var stat = myRequest.status;
      if (stat != 200) {
          console.error("740 Can't Read the file");
        return 0;
      }
      resolve(myRequest.responseText);
    }
    /* ---- end of getResponseText [dropboxFetch] */
  }) /* end of main promise ----- [dropboxFetch] */
}
/* ========================= end of dropboxFetch */
/* dropboxWrite() ================== [functions] */
function dropboxWrite(fileName, fileContent) {
  var H = new Array(6);
  H[0] = "Authorization";
  H[1] = "Bearer sPxsxIdRTeYAAAAAAAAYxLIrh"
    + "-nHk7mZcrt9Ew6nqXI9yK9YkkjYnlxskNbAx5vD";
  H[2] = "Content-type";
  H[3] = "application/octet-stream";
  H[4] = "Dropbox-API-Arg";
  H[5] = '{"path": "/' + fileName;
  H[5] = H[5] + '","mode":{".tag":"overwrite"}}';
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = acb;
  myRequest.open("POST",
  "https://content.dropboxapi.com/2/files/upload"
  , true);
  myRequest.setRequestHeader(H[0], H[1]);
  myRequest.setRequestHeader(H[2], H[3]);
  myRequest.setRequestHeader(H[4], H[5]);
  myRequest.send(fileContent);
  function acb(objectEvent) {
    var myRequest = objectEvent.target;
    var G = myRequest.readyState;
    if (G != 4) {
      return 0;
    }
  }
}
/* = end of dropboxWrite
/* easyLog() ======================= [functions] */
function easyLog(thingToLog, logSheetName,
  clearFirst) {
  if (typeof(clearFirst) == 'undefined') {
    clearFirst = false;
  }
  if (JSON.stringify(thingToLog) == "[]") {
    console.log('1864 thingToLog = []');
    return;
  }
  if (typeof(logSheetName) == 'undefined'){
    logSheetName = 'log';
  }
  var logSheet = gsGetSheetByName(logSheetName);
  console.log('1873 easyLog' );
  console.log('1869' + logSheet.getName());
  if (clearFirst) {
    logSheet.clear();
  }
  var targetRow =  logSheet.getLastRow() + 1;
  if (isLoggable(thingToLog)) {
    if (isLoggable(thingToLog[0])) {
      /* thingToLog is a 2D object --- [easyLog] */
      logSheet.getRange(targetRow, 1
        , thingToLog.length
        , thingToLog[0].length).setValues(
        thingToLog);
    } else {
      /* thingToLog is a 1D object --- [easyLog] */
      logSheet.getRange(targetRow, 1
        , 1, thingToLog.length)
        .setValues([thingToLog]);
    }
  } else {
      /* thingToLog is not an object - [easyLog] */
    logSheet.getRange("A" + targetRow)
      .setValue(thingToLog);
  }
  /* isLoggable() helper function ---- [easyLog] */
  function isLoggable(thing) {
    if (typeof(thingToLog) != 'object') {
      return false;
    }
    if (JSON.stringify(thing).charAt(0) != "[") {
      return false;
    }
    return true;
  }
  /* ----------------------- end of isLoggable() */
}
function easyLogTest() {
  easyLog('1843 easyLogTest() ');
}
/* ============================== end of easyLog */
/* easyNotif() ===================== [functions] */
function easyNotif(params) {
  /* extracts content from params -- [easyNotif] */
  var body;
  var title;
  if (typeof(params) == 'object') {
    body = params.body;
    title = params.title;
  } else {
    body = params;
    title = '';
  }
  /* displays the message ---------- [easyNotif] */
  if (executionContext == 'Scriptable') {
    var date = new Date();
    let debugNotification = new Notification();
    debugNotification.body = body;
    debugNotification.schedule(date);
  }
  if (executionContext == 'console') {
    console.log(`${body}`);
  }
  if (executionContext == 'GScript') {
    Browser.msgBox(body);
	/* SpreadsheetApp.getActiveSpreadsheet()
      .toast(body, title); */
  }
}
/* ============================ end of easyNotif */
/* easyOpen() ================================== */
function easyOpen(URL) {
  if (executionContext == 'Scriptable') {
    Safari.open(URL);
  }
  if (executionContext == 'console'
  || executionContext == 'WorkFlowy') {
    console.log(`easyOpen() would open
    |${decodeURIComponent(URL)}|`);
  }
}
/* ================================ end of easyOpen
/* easyPrompt() ==================== [functions] */
function easyPrompt(msg, defaultValue) {
  return new Promise(resolve => {
    /* console part --------------- [easyPrompt] */
    if (executionContext == 'console'
      || executionContext == 'WorkFlowy') {
      var output = prompt(msg
        , defaultValue);
      resolve(output);
    }
    /* scriptable part ------------ [easyPrompt] */
    if (executionContext == 'Scriptable') {
      let getText = new Alert();
      getText.message = msg
      getText.addTextField();
      getText.title = "Enter text";
      getText.addAction("OK");
      getText.addCancelAction("Cancel");
      let result = getText.present().then(
        result => {
        if (result == -1) {
          resolve(null);
        } else {
          resolve(getText.textFieldValue(0));
        }
      });
    } /* end of scriptable part --- [easyPrompt] */
  }) /* end of return new Promise - [easyPrompt] */
}
/* =========================== end of easyPrompt */
/* easyRead() ====================== [functions] */
async function easyRead(params) {
  if (typeof(params) == 'undefined') {
    params = {fileName:'log.txt'};
  }
  if (typeof(params) == 'string') {
    params = {fileName:params};    
  }
  if (executionContext == 'WorkFlowy' || executionContext == 'console') {
    var output = await dropboxFetch(params.fileName);
  }
  return JSONParsePro(output);
}
async function easyReadTest() {

  text = await easyRead();
  console.log(`9779 text`);
  console.log(text);
  text = await  easyRead('events.json');
  console.log(`9779 text`);
  console.log(text);
}
/* ============================= end of easyRead */
/* extractTodoTasks ================ [functions] */
/* harvestToto tasks -------- [extractTodoTasks] */
function extractTodoTasks() {
  var content = document.getElementsByClassName(
    "taskItem-titleWrapper")
  var output = "";
  for (var i = 0; i < content.length; i++) {
    output = `${output}
${content[i].innerText}`;
  }
  console.log(output);
}
/* ===================== end of extractTodoTasks */
/* getActivitiesDic() ============== [functions] */
function getActivitiesDic(activitiesDicArg) {
  return new Promise((resolve, reject) => {
    resolve(activitiesDic);
//     /* activitiesDic was already declared
//     --------------------------- getActivitiesDic */
//     if (typeof(activitiesDicArg) != 'undefined') {
//       resolve(activitiesDicArg);
//     };
//     /* scriptable part ------ [getActivitiesDic] */
//     if (getExecutionContext() == 'Scriptable') {
//       resolve(activitiesDic);
//       /*
//       var fm = FileManager.iCloud();
//       var scActivitiesDicPath = fm
//         .joinPath(fm.documentsDirectory()
//         , "activitiesDic.json");
//       fm.downloadFileFromiCloud(scActivitiesDicPath)
//         .then(answer => {
//         var dummy = answer;
//         resolve(JSON.parse(fm
//           .readString(scActivitiesDicPath)));
//       }, e => {
//         throw("error 924 " + e);
//       })
//       */
//     };
//     /* google script part --- [getActivitiesDic] */
//     if (getExecutionContext() == 'GScript') {
//       var activitiesDic = activitiesDicfunction();
//       resolve(activitiesDic);
//     };
//     /* console part --------- [getActivitiesDic] */
//     if (executionContext == 'console'
//     || executionContext == 'WorkFlowy' ) {
//       if (typeof(window.activitiesDic)
//         == 'undefined') {
//         dropboxFetch('activitiesDic.json').then(
//           fetched => {
//             window.activitiesDic = JSON
//               .parse(fetched);
//             resolve(window.activitiesDic);
//           }
//         )
//       } else {
//         resolve(window.activitiesDic);
//       }
//     }
  }); /* ------------- end of return new Promise */
}
/* ============================== getActivityDic */
/* getDic() ======================== [functions] */
function getDic(dicName) {
  if (!dicName.includes('.json')) {
    dicName = dicName + '.json';
  }
  return new Promise((resolve, reject) => {
    /* scriptable part ---------------- [getDic] */
    if (getExecutionContext() == 'Scriptable') {
      var fm = FileManager.iCloud();
      var jsDicPath = fm
        .joinPath(fm.documentsDirectory()
        , dicName);
      fm.downloadFileFromiCloud(jsDicPath)
        .then(answer => {
        var dummy = answer;
        resolve(JSON.parse(fm
          .readString(jsDicPath)));
      }, e => {
        throw("error 812 " + e);
      })
    };
    /* google script part ------------- [getDic] */
    if (executionContext == 'GScript') {
      throw('817 getDic not handled for gs');
    };
    /* console part ------------------- [getDic] */
    if (executionContext == 'console'
    || executionContext == 'WorkFlowy') {
      if (typeof(window[dicName])
        == 'undefined') {
        dropboxFetch(dicName).then(
          fetched => {
            window[dicName] = JSON
              .parse(fetched);
            resolve(window[dicName]);
        });
      } else {
        resolve(window[dicName]);
      }
    };
  }); /* ------------- end of return new Promise */
}
/* =============================== end of getDic */
/* getEvents() ===================== [functions] */
function getEvents(param1, param2) {
  var params = massageGetEventsParams(param1, param2);
  return new Promise((resolve, reject) => {
    if (executionContext == 'GScript') {
      var googleEvents = gsGetEvents({
        startDate: params.startDate,
        endDate: params.endDate, 
        calendarId:planificationCalendarId
      });
      var events = calConvertGoogleEvents(googleEvents);
      resolve(events);
    };
    if (executionContext == 'console') {
        resolve(csGetEvents(params));
    }
    if (executionContext == 'Scriptable') {
      scGetEvents(params).then(scEvents => resolve(convertScEvents(scEvents)));      
    }
    if (executionContext == 'WorkFlowy') {
      resolve(window.events);
    }
  });
}
function easyDate(myDate) {
  if (typeof(myDate) == 'undefined') {
   return;
  }
  if (typeofPro(myDate) == 'date') {
    return myDate;
  }
  if (moment(myDate).isValid()) {
    return new Date(moment(myDate));
  }
  return
}
function easyDateTest() {
  var myUndefined;
  var expectedAnswers = 
  [
    {
      argument: myUndefined,
      expected: myUndefined
    },{
      argument: calDateExampleWithHour,
      expected: calDateExampleWithHour
    },{
      argument: '20151130T0200',
      expected: new Date('Mon Nov 30 2015 02:00:00 GMT+0100')
    },{
      argument: 'toto',
      expected: myUndefined
    }
  ]
  expectedAnswers.forEach(dic => {
    var expected = dic.expected;
    var argument = dic.argument;
    var actual = easyDate(argument);
    if (actual != expected) {
      if (typeofPro(actual) != 'date') {
        console.error(`2173 easyDate() failure`);
        console.error({argument});
        console.error({expected});
        console.error({actual});
      } else {
        if (actual.getTime() 
        !== expected.getTime()) {
          console.error(`2173 easyDate() failure`);
          console.error({argument});
          console.error({expected});
          console.error({actual});
        }
      }
    }
  })
}

function massageGetEventsParams(param1, param2) {
  var output = {};
  /* declares defaults */
  if (typeofPro(param1) == 'undefined') {
    output = {startDate:calDefaultStartDate, endDate:calDefaultEndDate};
  } else {
    if (typeof(param2) == 'undefined') {
      if (typeofPro(param1) == 'object') {
        if (param1.hasOwnProperty('startDate')) {
          output.startDate = easyDate(param1.startDate);
        } else {
          output.startDate = easyDate(moment(param1));
        }
        if (param1.hasOwnProperty('endDate')) {
          output.endDate = easyDate(param1.endDate);
        } else {
          output.startDate = easyDate(moment(param1));
        } 
      } 
    } else {
      if (typeof(easyDate(param1)) != 'undefined' &&
        typeof(easyDate(param2)) != 'undefined') {
          output.startDate = easyDate(param1);
          output.endDate = easyDate(param2);
        } else {
          console.error(`4453 massageGetEventsParams invalid params 
          param1|${param1}|
          param2|${param2}|
          `);
          throw (`4453 massageGetEventsParams invalid params `);
        }
      }
  }
  return output;
}
function massageGetEventsParamsTest() {
  var myUndefined;
  var expectedAnswers = 
  [
    {
      arguments: [myUndefined],
      expected: 
      {
        "startDate": calDefaultStartDate,
        "endDate": calDefaultEndDate
      }
    }, {
      arguments: [calDateExampleWithHour,
        calDateExampleWithoutHour],
      expected: 
      {
        "startDate": calDateExampleWithHour,
        "endDate": calDateExampleWithoutHour
      }
    }, {
      arguments: [{
        startDate:calDateExampleWithHour,
        endDate:calDateExampleWithoutHour
      }],
      expected: 
      {
        "startDate": calDateExampleWithHour,
        "endDate": calDateExampleWithoutHour
      }
    }, {
      arguments: [{
        startDate:'19810806T2312',
        endDate:'20200618T1030'
      }],
      expected: 
      {
        "startDate": new Date('Thu Aug 06 1981 23:12:00 GMT+0200'),
        "endDate": new Date('Thu Jun 18 2020 10:30:00 GMT+0200')
      }
    }
  ]
  expectedAnswers.forEach(dic => {
    var expected = dic.expected;
    var arguments = dic.arguments;
    var actual = massageGetEventsParams(arguments[0], arguments[1]);
    if (JSON.stringify(actual) != JSON.stringify(expected)) {
      console.error(`2173 massageGetEventsParams() failure`);
      console.error(`arguments: ${JSON.stringify(arguments, null, "  ")}|
`);
      console.error(`expected: 
${JSON.stringify(expected, null, "  ")}
actual: 
${JSON.stringify(actual, null, "  ")}`);
    }
  })
}
/* ============================ end of getEvents */
/* csGetEvents(params) = */
async function csGetEvents(params) {
  var dropboxEvents = await easyRead('events.json');
// console.log(`1907 dropboxEvents`);
  events = dropboxEvents.filter(isInTheParamsRange);
// console.log(`6703 events`);
// console.log(events);
//   events.slice(10,10).forEach(event => {
//     isInTheParamsRange(event)
//   })
  return events;
  function filterEventsWithinTheParams() {
    events.filter(isInTheParamsRange)
  }
  function isInTheParamsRange(event) {
// console.log(`0615
// (moment(event.startDate).diff(params.startDate, 'm') > 0)|${(moment(event.startDate).diff(params.startDate, 'm') > 0)}|
// params.startDate|${params.startDate}|
// moment(event.startDate)|${moment(event.startDate)}|
// (moment(event.endDate).diff(params.endDate, 'm') < 0)|${(moment(event.endDate).diff(params.endDate, 'm') < 0)}|
// params.endDate|${params.endDate}|
// moment(event.endDate)|${moment(event.endDate)}|
// `);

    return (moment(event.startDate).diff(params.startDate, 'm') > 0)
    && (moment(event.endDate).diff(params.endDate, 'm') < 0);
  }
}
/* getExecutionContext() =========== [functions] */
function getExecutionContext() {
  if (typeof(SpreadsheetApp) != 'undefined') {
    return 'GScript';
  }
  if (typeof(Script) != 'undefined') {
    return 'Scriptable';
  }
  if (typeof(window) != 'undefined') {
    if (window.location.origin ==
      "https://workflowy.com") {
      return 'WorkFlowy'
    }
  }
  return 'console';
}
/* ================== end of getExecutionContext */
/* getInput() ====================== [functions] */
function getInput(input) {
  return new Promise(resolve => {
    /* special paragraph for
    scheduleNotifs */
    if (input == "restart") {
      getSetting(
        "ScheduleNotification").then(setting =>
        resolve(setting))
    }
    if ((input === undefined)
      || (input === null)) input = args
      .shortcutParameter;
    if ((input === undefined)
      || (input === null))
    input = args.plainTexts[0];
    if (executionContext == 'Scriptable') {
      let Debug = importModule("Debug");
    };
    /* gets the value of args passed with URL
    scheme -------------------- [scheduleNotifs] */
    if (input === undefined || input === null) {
      input = {}
    }
    for (var key in args.queryParameters) {
      if (key!="scriptName") {
        input = args.queryParameters[key]
        resolve(input);
      }
    }
  });
}
/* ============================= end of getInput */
/* getSetting() ==================== [functions] */
function getSetting(key) {
  return new Promise(resolve => {
    getSettings().then(settings => {
      resolve(settings[key]);
    });
  });
}
/* =========================== end of getSetting */
/* getSettings() =================== [functions] */
function getSettings() {
  return new Promise(resolve => {
    /* scriptable part ------------ [getSetting] */
    if (executionContext == 'Scriptable') {
      scGetFile('settings.json').then(settings => {
        resolve(JSON.parse(settings))
      });
    }
    /* console part --------------- [getSettings] */
    if (executionContext == 'console') {
      dropboxFetch('settings.json').then(
      settings => {
        var settingsObj = JSON.parse(settings);
        if (!settingsObj
        .hasOwnProperty('location'))
        {
          settingsObj.location = 'home'
        }
        resolve(settingsObj);
      });
    };
    /* workflowy part ------------ [getSettings] */
    if (executionContext == 'WorkFlowy') {
      if (typeof(window.settings) == 'undefined') {
        dropboxFetch('settings.json').then(
        fetchedsettings => {
          var settingsObj = JSON
		    .parse(fetchedsettings);
          if (!settingsObj
          .hasOwnProperty('location'))
          {
            settingsObj.location = 'home'
          }
          window.settings = settingsObj;
          resolve(window.settings)
        });
      } else {
        resolve(window.settings);
      }
    }
  });
}
/* ========================== end of getSettings */
/* getYesterDayEvents() ============ [functions] */
function getYesterDayEvents() {
  getEvents({startDate:moment(), endDate:moment()
    .add(21, 'd')}).then(events => {
    var yesterdayEvents = [];
    for (var i = 0; i < events.length; i++) {
      if (!events[i].hasOwnProperty('notes')) {
        continue;
      }
      if (!events[i].notes
        .hasOwnProperty('Enregistré le')) {
        continue;
      }
      var thatDay =
        moment(events[i].notes['Enregistré le'], "DD/MM/YYYY HH:mm").add(-5, 'h').startOf('d').format();
      var yesterday = moment().add(-5, 'h').add(-1, 'd').startOf('d').format();
      var recHour = parseInt(moment(events[i].notes['Enregistré le'], "DD/MM/YYYY HH:mm").format('HH'));
      if (thatDay == yesterday && (recHour >= 21 || recHour < 5)) {
        yesterdayEvents.push(events[i]);
      }
    }
    /* creates the body of the notification -------
    ----------------------- [getYesterDayEvents] */
    var body = '';
      yesterdayEvents.forEach(curEvent => {
      body = `${body}\\n${curEvent.title}    ${
      curEvent.notes['Enregistré le']}`;
    });
    easyNotif({
      title: 'Yesterday events',
      body: body
    });
  });
}
/* =================== end of getYesterdayEvents */
/* handleEventNotes() ============== [functions] */
function handleEventNotes(eventNotes) {
  if (typeof(eventNotes) == 'undefined' || eventNotes == null) {
    return eventNotes
  }
  var output = {};
  var eventNotes0 = eventNotes;
  if (typeof(eventNotes) != "object") {
    eventNotes = eventNotes.replace(/<.*?>/img,"");
    eventNotes = eventNotes.split("}")[0] + "}";
    eventNotes = eventNotes.replace(/\s/img, " ");
    eventNotes = eventNotes.replace(/&nbsp;/img
      , " ");
    try {
      output = JSON.parse(eventNotes);
    }
    catch(error) {
      return eventNotes0;
    }
  } else {
    output = JSON.parse(JSON.stringify(
      eventNotes));
  }
  if (output.Série != undefined) {
    output['Série'] = streakSerie(
        output['Série']);
  }
  if (output.hasOwnProperty('Humeur')) {
    output.Série = "Daylio";
  }
  if (output.hasOwnProperty('Type')) {
    output.type = output.Type;
  }
  if (output.hasOwnProperty('URL')) {
    output.url = output.URL;
  }
  return output;
}
/* ===================== end of handleEventNotes */
/* htmlSpecialChars ================ [functions] */
function htmlSpecialChars(unsafe) {
/* aka htmlEncode, encodeHtml */
  if (unsafe == undefined) {
    return undefined;
  }
  unsafe = unsafe.replace(
  /[\u00A0-\u22A1<>\&]/gim, function(i) {
      return "&#" + i.charCodeAt(0);
  });
  var specialList = {
    "✍️": "&#9997;"  , "✏️": "&#9999;",
    "🚀": "&#57613;" , "🏭 ­": "&#58632;",
    "🐸": "&#58673;" , "🎮": "&#127918;",
    "🎹": "&#127929;", "🐦": "&#128038;",
    "🐶": "&#128054;", "💦": "&#128166;",
    "💪": "&#128170;", "📅": "&#128197;",
    "📇": "&#128199;", "📕": "&#128213;",
    "📋": "&#128203;", "🔄": "&#128260;",
    "🔨": "&#128296;", '☑️': "&#x2611;",
    '😇': "&#128519;", '😊': "&#128522;"
  }
  Object.keys(specialList).forEach(e => {
    unsafe = unsafe.replace(e, specialList[e]);
  });
  return unsafe;
}
/* ===================== end of htmlSpecialChars */
/* wfSlowChronos =================== [WorkFlowy] */
function wfSlowChronos() {
  wfLoadEvents(`2339 wfSlowChronos`);  
 /* resets saveSettings -------- [wfSlowChronos] */
  saveSetting({
    doNotScan:false,
    line:2347
  });
  /* launches updates on miniPc  [wfSlowChronos] */
  if (miniPc) {
    wfTodayMegaLauncher("interval");
    wfScan();
  }
}
/* ======================== end of wfSlowChronos */
/* wfInitialize() ================== [WorkFlowy] */
/* triggered when document loaded aka
documentloaded aka document ready aka
documentReady */
function wfInitialize() {
  wfInitializeNamedItems();
  if (!miniPc) {
    wfAddButtons();
  }
  createIWillDoThisMonths();
  /* if (typeof(doneTodayColl) != 'undefined') {
    wfUpdateEventLists();
  } */
  /* disables WorkFlowy spellcheck --------------
  ----------------------------- [wfInitialize] */
  window.document.body.spellcheck = false;
  /* triggers slowChronos every 5 seconds ---------
  ------------------------------- [wfInitialize] */
 setInterval(wfSlowChronos, 5000)
  /* place and location ------- [wfInitialize] */
  if (navigator.userAgent.search("Chrome")
    !=-1) {
    curLocation = "At home";
    curLocTag = "h";
  } else {
    if (navigator.userAgent.search("Mozilla")
        != -1 ) {
        curLocation = "At work";
        curLocTag = "w" ;
      imAtWork = true;
    } else {
        curLocation = "On the go" ;
        curLocTag = "x" ;
      imAtWork = false;
    }
  }
  /* adds events listeners */
  wfAddEventListener();
  /* launches the updates after a delay ---------
  ----------------------------- [wfInitialize] */
  wfAddKeyboardShortcuts();
  /* wfAddKeyboardShortcuts ====== [WorkFlowy] */
  function wfAddKeyboardShortcuts() {
    document.removeEventListener('keydown');
    document.addEventListener('keydown'
      , function(e) {
      /* alt p pins --- [wfAddKeyboardShortcuts] */
      if (e.keyCode == 80 && !e.shiftKey
        && !e.ctrlKey
        && e.altKey && !e.metaKey) {
        wfCurItemUpdate();
        wfPin();
      }
      /* -------------------------- end of alt p */
      /* alt s launches wfCorrectTags -
      ----------------- [wfAddKeyboardShortcuts] */
      if (e.keyCode == 83 && !e.shiftKey
        && !e.ctrlKey && e.altKey
        && !e.metaKey) {
        console.log(2634);
        wfCorrectTags();
      }
      /* ctrl alt c -----------------------------
      --------------- [wfAddKeyboardShortcuts] */
      if (e.keyCode == 67 && !e.shiftKey
        && e.ctrlKey && e.altKey && !e.metaKey) {
        if (!WF.focusedItem().getName()
          .includes("nbox")) {
          var cutNode = WF.focusedItem();
          wfShowMessage(cutNode.getName()
            + " copied");
          copyMode = "copy";
        }
      }
      /* ctrl alt x cuts ------------------------
      --------------- [wfAddKeyboardShortcuts] */
      if (e.keyCode == 88 && !e.shiftKey
        && e.ctrlKey && e.altKey && !e.metaKey) {
        if (!WF.focusedItem().getName().includes
          ("nbox")) {cutNode = WF.focusedItem();
          wfShowMessage(cutNode.getName()
            + " cut");
          copyMode = "cut";
        }
      }
      /* ctrl alt v pastes ----------------------
      --------------- [wfAddKeyboardShortcuts] */
      if (e.keyCode == 86 && !e.shiftKey
          && e.ctrlKey && e.altKey&& !e.metaKey) {
        var targetItem = WF.focusedItem()
          .getParent();
        if (copyMode == "cut") {
          WF.moveItems([cutNode], targetItem, 0);
        };
        if (copyMode == "copy") {
          var curZoomedItem = WF.currentItem();
          WF.zoomTo(cutNode.getParent());
          var newNode = WF.duplicateItem(cutNode);
          WF.zoomTo(curZoomedItem);
          WF.moveItems([cutNode],curZoomedItem, 0);
          WF.setItemName(newNode, newNode.getName()
            .replace(/#copy/img,""));
          copyMode = "";
        }
        if (copyMode != "") {
          copyMode = "";
          WF.hideMessage();
        };
      };
    }, false);
    /* end of document.addEventListener ---------
    ----------------- [wfAddKeyboardShortcuts] */
  }
  /* =========== end of wfAddKeyboardShortcuts */
}
/* ========================= end of wfInitialize */
function getMiniPc() {
  if (typeof(miniPc) == 'undefined') {
    if (typeof(window) == 'undefined') {
      output = false;
    } else {
      if (typeof(window.miniPc) == 'undefined') {
        var output = false;
      } else {
        var output = window.miniPc;
      }
    }
  } 
  else {
    output = miniPc;
  }
  return output;
}
/* initialize() ==================== [functions] */
function  initialize() {
  if (executionContext == 'console') {
    if (window.location.href
      .includes('doneToday')) {
      doneToday();
      var doteTodayinterval = setInterval(doneToday
        , 60* 60 * 1000);
    };
    /* dynalist ------------------- [initialize] */
    if (window.location.href
      .includes('dynalist')) {
      dyLaunchUpdates();
      var dynalistIntervalID = setInterval(
        function() {dyLaunchUpdates()}, 5000
      );
    }
    if (window.location.href
      .includes('markAsDone')) {
      console.log(decodeURIComponent(
        window.location.search));
    }
  }
  /* end of execution context is console ------- */
  if (executionContext == 'WorkFlowy') {
    wfInitializesIfLoaded();
  }

}
/* =========================== end of initialize */
/* isDateStamped() ================= [functions] */
function isDateStamped(curText) {
  curText = curText.replace(
    /\s*<\/{0,1}.*?>\s*/gm, ' ');
  var regExp =
    new RegExp(
    '\\(\\s*\\d{2}\\/\\d{2}\\/\\d{4}\\s*\\)'
    , 'gm');
  var matches = regExp.test(curText);
  return matches;
}
/* ======================== end of isDateStamped */
/* jsonToUri() ===================== [functions] */
function jsonToUri(srcjson) {
  if (typeof srcjson !== "object") {
    if (typeof console !== "undefined") {
      console.log(
        "\"srcjson\" is not a JSON object");
      return null;
    }
  }
  var u = encodeURIComponent;
  var urljson = "";
  var keys = Object.keys(srcjson);
  for(var i=0; i <keys.length; i++) {
      urljson += u(keys[i]) + "=" + u(srcjson[keys[i]]);
      if(i < (keys.length-1))urljson+="&";
  }
  return urljson;
}
/* ============================ end of jsonToUri */
/* launch() ======================== [functions] */
function launch(params) {
  /* see
  https://talk.automators.fm/t/
  more-example-scripts/1401/23
  part 'a shortcut/script that backs up shortcuts
  to a Git repository using Working Copy.'
  */
  if (typeof(params) == 'string') {
    params = {activity: params};
  };
  var activity = params.activity;
  var activityDic =
    activitiesDic[activity];
  splitEvents().then(seOutput => {
    var settings = {
      activity: activity,
    };
    if (activityDic.type == 'streak') {
      if (seOutput.lastDone
        .hasOwnProperty(activity)) {
          if (seOutput
            .lastDone[activity].hasOwnProperty('event')) {
          if (seOutput
            .lastDone[activity].event.notes
            .hasOwnProperty('progress')) {
            settings.progress = seOutput
              .lastDone[activity]
              .event.notes.progress;
          } else {
            settings.progress = '';
          };
        } else {
          settings.progress = '';
        }
      } else {
        settings.progress = '';
      }
    }
    if (activityDic.type == 'routine') {
      if (activityDic
        .hasOwnProperty('nextLoc')) {
        if (activityDic.nextLoc.length > 0) {
          settings.location = activityDic
            .nextLoc;
        }
      }
    }
    saveSetting({activity: activity});
    /* adds the event ----------------- [launch] */
    getEvents({startDate:moment().add(-200, 'm'),
      endDate:moment()})
      .then(events => {
      if (events.length == 0) {
        createEvent({
          title: activity,
          startDate: moment(),
          endDate: moment().add(30, 'm'),
          notes: 'Activité',
        });
      };
      if (events[events.length -1].title
        != activity) {
        createEvent({
          title: activity,
          startDate: moment(),
          endDate: moment().add(30, 'm'),
          notes: 'Activité',
        });
      };
    });
    scheduleNotifs();
    /* launches the  post launch shortcuts --------
    ----------------------------------- [launch] */
    var postLaunchShortcutsDic = activityDic
      .launchShortcuts;
    var postLaunchShortcuts = [];
    var openURLWasAdded = false;
    Object.keys(postLaunchShortcutsDic).forEach(
      shortcutName => {
      if (shortcutName != 'noWorkFlowy') {
        if (shortcutName.toLowerCase().includes(
          'openurl')) {
          openURLWasAdded = true;
        };
        postLaunchShortcuts.push({
          shortcut:shortcutName,
          input: postLaunchShortcutsDic[
            shortcutName],
        });
      }
    });
    if (!openURLWasAdded &&
      !postLaunchShortcutsDic
      .hasOwnProperty('noWorkFlowy')) {
      postLaunchShortcuts.push({
        shortcut: 'openURL',
        input: "scriptable:///run?scriptName="
          + "smartWorkFlowy"
      });
    };
    postLaunchShortcuts.push({
      shortcut: activity,
      input: ''
    });
    postLaunchShortcuts.push({
      shortcut: 'Routine checks',
      input: ''
    });
    /* cleans up the reminders -------- [launch] */
    cleanUpReminders()
    /* launches the postLaunchShortcuts [launch] */
    easyOpen('shortcuts://run-shortcut?'
      + 'name=shortcuts&input='
      + encodeURIComponent(JSON
      .stringify(postLaunchShortcuts)));
    /* launches the routine checks ---- [launch] */
  });
}
/* =============================== end of launch */
/* machine() ======================= [functions] */
function machine() {
  var cycleLength;
  var endDate;
  easyPrompt("durée du cycle")
  .then(cycleLength => {
    cycleLengthFormatted = cycleLength
      .replace(/(\d\d)$/, ':$1');
    easyPrompt("heure de fin").then(endDate => {
      var endDate = moment(endDate, 'hmm');
      cycleLength = moment
        .duration(cycleLengthFormatted);
      var startDate = moment(endDate)
        .add(-cycleLength);
      var offset = startDate.diff(moment(), 'm')
      offset = offset < 0
        ? offset + 24 * 60 : offset
      console.log(moment().startOf('d')
        .add(offset, 'm').format('HH:mm'))
      myConfirm(`Fin de la machine : ${
        endDate.format('HH:mm')}
durée du cycle: ${cycleLengthFormatted}
décalage à programmer: ${
        moment().startOf('d').add(offset, 'm')
        .format('HH:mm')}
      `);
    });
  });
  /* end of prompt for cycle duration  [machine] */
};
/* ============================== end of machine */
/* markAsDone() ==================== [functions] */
function markAsDone(options) {
  if (typeof(options) != 'object') {
    throw(`1491
    markAsDone() error, argument should be
    an object!!`);
  }
  var activity = options.activity;
  var progress = options.progress;
  streakDate = options.streakDate;
  var streakDateTemp = streakDate;
  var newEvent = {};
  var dummyToDeleteId;
  debug = true;
  var activityDic = activitiesDic[activity];
  if (activityDic.type == 'streak') {
    getEvents().then(getEventsOutput => {
      const promise =
      splitEvents(getEventsOutput);
      promise.then(function(seOutput) {
        /* gets Variables from splitEvent
        /* ---------------------- [markAsDone] */
        var dummies = seOutput.dummies;
        var actStreaks = seOutput
          .streaks[activity];
        var lastDone = seOutput
          .lastDone;
        /* if no streakDate was provided, finds
        the next streak due for that ------------
        activity ---------------- [markAsDone] */
        var streakDate = streakDateTemp;
        if (typeof(streakDate) == 'undefined') {
          for (var i = 0; i < dummies.length
            ; i++) {
            var dummy = dummies[i];
            if (typeof(dummy) == 'undefined') {
              continue;
            }
            try {
              if (dummy.notes['Série']
                == activity) {
                var nextDue = dummy;
                break;
              }
            } catch(e) {
              console.log(e)
            }
          }
          if (executionContext == 'Scriptable') {
            dummyToDeleteId = dummy.identifier;
          }
          if (executionContext == 'console'
            || executionContext == 'WorkFlowy') {
            dummyToDeleteId = dummy.id;
          };
          if (nextDue == undefined) {
            var streaks = seOutput
              .streaks[activity];
            var streakDate = moment(streaks[streaks
              .length -1].startDate).add(1, "Days");
          } else {
            var streakDate = moment(nextDue
              .startDate);
          }
        }
        /* finds previous record ------------------
        Assumes that the events are sorted, -------
        which is the case in Scriptable -----------
        and in the current Google Script ----------
        --------------------------- [markAsDone] */
        var curEventIsFound = false;
        for (let i = actStreaks.length - 1
          ; i>=0 ; i--) {
          var curDiff = moment(streakDate).diff(
            actStreaks[i].startDate, 'days');
          if (dateDiff >= 1) {
            break
          } else {
            var prevEvent = actStreaks[i];
            var dateDiff = curDiff;
          }
        } /* end of the for loop -- [markAsDone] */
        /* creates  JSON ---------- [markAsDone] */
        var périodeActuelle;
        if (typeof(prevEvent) == 'undefined') {
          /* first record of the streak -----------
          ------------------------- [markAsDone] */
          périodeActuelle = 1
          var newJSON = {
            "Période actuelle": 1,
            "Plus longue série": 1,
            "Nombre d'enregistrements": 1,
            "Série" : activity,
            "Enregistré le" : moment().format(
              'DD/MM/YYYY HH:mm'),
            "Date" : moment(streakDate).format(
              'DD/MM/YYYY'),
          };
        } else {
          /* increments JSON ------ [markAsDone] */
          var prevJSON = prevEvent.notes;
          périodeActuelle = (dateDiff = 1)?
            Number(prevJSON["Période actuelle"])
            + 1:1;
          var newJSON = {
            "Période actuelle" : périodeActuelle,
            "Plus longue série" : Math.max(
              périodeActuelle,
              Number(prevJSON
              ["Plus longue série"])),
            "Nombre d'enregistrements" :
              Number(prevJSON
              ["Nombre d'enregistrements"]) + 1,
            "Série" : activity,
            "Enregistré le" : moment().format(
              'DD/MM/YYYY HH:mm'),
            "Date" : moment(streakDate).format(
              'DD/MM/YYYY'),
          }
        }
        if (typeof(progress) != undefined) {
          newJSON.progress = progress;
        }
        /* creates the event ------ [markAsDone] */
        lastRecordTime = moment(lastDone[
          activity].recordDate);
        if (moment().diff(lastDone[activity]
        .recordDate, "m") < 30) {
          myConfirm(
  `Le dernier enregistrement était ${
            moment(lastRecordTime).calendar()
            .toLowerCase()
  }. Voulez-vous enregistrer à nouveau ? `
          ).then(
          r => {
            launchRecordStreak();
            }
          , e=> {
              console.log('160: Quit');
            }
          );
        } else {
          launchRecordStreak();
        }
        /* launchRecordStreak() helper function ---
        (must stay here or else variables are -----
        undefined) ---------------- [markAsDone] */
        function launchRecordStreak() {
          newEvent = {
            startDate:new Date(streakDate),
            title:streakTitle(activity
              , streakDate
              , périodeActuelle, activitiesDic),
            notes: newJSON,
            emoji:activityDic['emoji'],
            startDate:streakDate
          }
          /* deletes the dummy ---- [markAsDone] */
          deleteEvent({
            startDate: streakDate,
            eventId: dummyToDeleteId,
            toIccp: true
          });
          /* creates the event ---- [markAsDone] */
          createEvent(newEvent);
          /* relaunches doneToday - [markAsDone] */
          updateEventsColls();
        }
        /* updateEventsColls() helper function ----
        --------------------------- [markAsDone] */
        function updateEventsColls() {
          var updatedColl = {};
          Object.keys(seOutput).forEach(
            collName => {
            if (collName.includes('Dummies')
            || collName.includes('nextActs')) {
              updatedColl[collName] = [];
              var eventColl = seOutput[
                collName];
              if (collName != 'nextActsByAct'){
                eventColl.forEach(event => {
                  if (
                  event.id != dummyToDeleteId &&
                  event.identifier
                    != dummyToDeleteId
                  ) {
                    /* scriptable uses 'identifier'
                     and google uses 'id'. I should
                     solve that some day ----------
                    --------------- [markAsDone] */
                    updatedColl[collName]
                      .push(event);
                  };
                });
              }
            } else {
              updatedColl[collName] = Object
                .assign([],
                seOutput[collName]);
              updatedColl.frogIsDone =
                seOutput.frogIsDone;
              if (activity == 'Frog') {
                updatedColl.frogIsDone
                  = true;
              };
            }
          });
          /* adds the streak event to
          updateEventsColls ----- [markAsDone] */
          var nowAdjusted = moment()
            .add(-5,"h").startOf('d');
          var streakDateAdjusted = moment(
            newEvent.startDate).startOf('d');
            streakDateAdjusted
          if (nowAdjusted.diff(streakDateAdjusted
            , 'd') == 0) {
            updatedColl.todayStreaks
              .push(newEvent);
          };
          if (nowAdjusted.diff(streakDateAdjusted
            , 'd') > 0) {
            updatedColl.regStreaks
              .push(newEvent);
          };
          if (nowAdjusted.diff(streakDateAdjusted
            , 'd') < 0) {
            updatedColl.advStreaks
              .push(newEvent)
          };
          updatedColl.doneTodayColl
            .push(newEvent);
          if (executionContext == 'Scriptable') {
            doneToday(updatedColl);
          };
          /* marks the wf item as done and gets
          back to the activity node -------------
          ----------------------- [markAsDone] */
          if (executionContext == 'WorkFlowy') {
            var wfCurAct = WF.getItemById(
              activityDic.wfId);
              window.open('https://workflowy.com'
              + '/#/f5591c1004f6', '_self');
            if (!wfCurAct.isCompleted()) {
              /* WF.completeItem(wfCurAct); */
            };
            if (WF.completedVisible()) {
              WF.toggleCompletedVisible();
            }
          };
        }
        /* ------- end of updateEventsColls() ---
        ------------------------- [markAsDone] */
      }) /* end of "if splitEvents then" --------
      --------------------------- [markAsDone] */
    }
    , failure =>{
      console.log(`mylib.js recordStreak()
      getEvents()failure:
      ${failure}`)
      }
    ) /* end of "getEvents worked" ----------- */
  /* end of 'is a streak' ------- [markAsDone] */
  } else {
    recordNewLoc();
  };
  /* end of 'isn't a streak ----- [markAsDone] */
  /* records location change ---- [markAsDone] */
  function recordNewLoc() {
    var newLoc = activityDic.nextLoc;
    if (newLoc != "") {
      if (newLoc == 'demander') {
        myMenu({choices:['maison',
          'trajet',
          'trajet maison',
          'trajet travail',
          'travail'
        ]}).then(newLoc => {

            conclude();
        })
      } else {

        conclude();
      };
    } else {
      conclude();
    };
  };
  /* conclude() helper function --- [markAsDone] */
  function conclude() {
    if (executionContext == 'Scriptable')
    {
      Script.complete;
    };
  };
  /* -------------- end of conclude [markAsDone] */
}
/* =========================== end of markAsDone */
/* markAsDoneTest() ================== functions */
function markAsDoneTest() {
  if (executionContext == 'console'
    || executionContext == 'WorkFlowy') {
    markAsDone({activity: 'Improve my life'});
  }
  if (executionContext == 'GScript') {
            gsHarvestChanges(true);
  }
}
/* ======================= end of markAsDoneTest */
/* markDownToHtml() ================ [functions] */
function markDownToHtml(myStr) {
// adds non break space before question mark
  myStr=myStr.replace(/\s*\?/,"&nbsp;?");
  // markdown italics and bold
  myStr = myStr.replace(/_{1,}(.*?)_{1,}/img
  , "<i>$1</i>");
  myStr = myStr.replace(
    /\*{1,}(.*?)\*{1,}/img, "<b>$1</b>");
  /* in culture flashcards, removes bold text, as
  this is no longer my policy - [markDownToHtml] */
  if (myStr.includes("•")) {
    myStr = myStr.replace("•", "");
    myStr = myStr.replace(/<\/{0,1}b>/, "");
  };
  return strClean(myStr);
}
/* ======================= end of markDownToHtml */
/* myMenu(choices) ================= [functions] */
function myMenu(params) {
  return new Promise((resolve, reject) => {
    var choices = params.choices;
    let alert = new Alert();
    alert.title = "Selection Test";
    alert.message = "Choose an option.";
    choices.forEach(choice =>{
      alert.addAction(choice);
    });
    alert.presentAlert().then(intIndex =>{
      resolve(choices[intIndex]);
    });
  }); /* end of the promise ----------- [myMenu] */
}
/* =============================== end of myMenu */
/* myConfirm() ===================== [functions] */
function myConfirm(message) {
  return new Promise((resolve, reject) => {
    var response;
    if (executionContext == 'console') {
      console.log(
        '1833 answer to the prompt on the page!');
      if (window.confirm(message)) {
        resolve();
      } else {
        reject();
      };
    };
    if (executionContext == 'Scriptable') {
      let alert = new Alert();
      alert.title = '';
      alert.message = message;
      alert.addAction("Oui");
      alert.addAction("Non");
      alert.presentAlert().then(intIndex =>{
        if (intIndex == 0) {
          resolve();
        } else {
          reject();
        };
      });
    };
  }); /* end of the promise -------- [myConfirm] */
};
/* ============================ end of scConfirm */
/* postToIFTTT() =================== [functions] */
function postToIFTTT(url, payload) {
  url = `${url}?${jsonToUri(payload)}`;
  const proxyurl =
    "https://cors-anywhere.herokuapp.com/";
  fetch(proxyurl + url)
  .then(response => response.text())
  .then(contents => {
    if (executionContext == 'WorkFlowy') {
      wfShowMessage(contents);
    }
  })
  .catch(() => console.log("Can’t access "
    + url + " response. Blocked by browser?"));
}
/* ========================== end of postToIFTTT */
/* readText(url) =================== [functions] */
function readText(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    rawFile.onload = () => resolve(rawFile
      .responseText);
    rawFile.onerror = () => reject(rawFile
      .statusText);
    rawFile.send(null);
  });
}
/* ============================= end of readText */
/* remainingActivities() =========== [functions] */
function remainingActivities(hourName) {
  return Math.max(0, (3 + Math.floor(moment(
    hourName, 'HH:mm').diff(moment(), 'm') / 20)));
}
/* ================ end of remainingActivities() */
/* removeEmojis ==================== [functions] */
function removeEmojis(myStr) {
  var myRegex = new RegExp(`\s*([\u2700-\u27BF]`
    + `|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]`
    + `|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]`
    + `|\uD83E[\uDD10-\uDDFF])\s*`, `gm`);
  return strClean(myStr.replace(myRegex, ''));
};
/* ========================= end of removeEmojis */
/* saveDic() ======================= [functions] */
function saveDic(name, dic) {
  /* scriptable part ----------------- [saveDic] */
  if (executionContext == 'Scriptable') {
    var fm = FileManager.iCloud();
    var dir = fm.documentsDirectory();
    var path = fm.joinPath(dir, name);
    fm.writeString(
      path, JSON.stringify(
        dic, null, "  "
      )
    );
  };
  /* console part -------------------- [saveDic] */
  if (executionContext == 'console'
    || executionContext == 'WorkFlowy') {
    console.log(`saveDic() would write in
      "${name}"
      the following JSON ${
      JSON.stringify(dic, null, "  ")}
    `);
  }
}
/* ============================== end of saveDic */
function saveSetting(params, debugInfo) {
  /* scriptable ------------------ [saveSetting] */
  if (executionContext == 'Scriptable') {
    var fm = FileManager.iCloud();
    var dir = fm.documentsDirectory();
    var path = fm.joinPath(dir, 'settings.json');
    getSettings().then(curSettings => {
      Object.keys(params).forEach(key => {
        curSettings[key] = params[key];
      });
      scSaveFile('settings.json', JSON.stringify(
          curSettings, null, "  "
        )
      );
    });
  }
  /* console --------------------- [saveSetting] */
  if (executionContext == 'console') {
  console.log(`saveSetting would write
      JSON.stringify(params, null, "  ")}`);
  }
  /* WorkFlowy ------------------- [saveSetting] */
  if (executionContext == 'WorkFlowy') {
    getSettings().then(curSettings => {
      Object.keys(params).forEach(key => {
        curSettings[key] = params[key];
      });
      window.settings = curSettings;
      settings = curSettings;
    })
  }
}
/* ========================== end of saveSetting */
/* scheduleNotifs() ================ [functions] */
function scheduleNotifs() {
  getSettings().then(settings => {
    var activity = settings.activity;
    if (executionContext == 'Scriptable') {
      /* removes former notifications
      ------------------------- [scheduleNotifs] */
      Notification.removeAllPending();
      Notification.removeAllDelivered();
    } else {
      console.log('removing former notifications');
    }
    /* retrieves activity parameters --------------
    --------------------------- [scheduleNotifs] */
    var activityDic
      = activitiesDic[activity];
    /* schedules notifications
    --------------------------- [scheduleNotifs] */
    var notifSubtitle = activity + " " +
      activityDic['emoji'];
    var curDate = new Date();
    notifURL = "scriptable:///run?scriptName="
      + "scheduleNotifs";
    var actionDic = {
      "Mark as done ✅"
        : `scriptable:///run?${
          jsonToUri({
            scriptName: 'markAsDone',
            activity: activity
          })}`,
      "Restart ♻️":"scriptable:///run?scriptName="
        + "scheduleNotifs",

      "Stop ⛔️":"scriptable:///run?scriptName="
        + "Remove%20all%20pending",
    };
    /* loop on the future notifications -----------
    --------------------------- [scheduleNotifs] */
    for (var i = 0; i < 20; i++) {
      var triggerDate
        = new Date(moment().add(i * 5 + 1, 'm'));
      var notifTitle = (i)? i * 5 +" min" : "start";
      var notifBody =  `${notifSubtitle}
${settings.hasOwnProperty('progress')
?settings.progress != ''
  ?'Last done: ' + settings.progress
  :''
  :''}`;
      if (executionContext == 'Scriptable') {
        let notif = new Notification();
        notif.threadIdentifier
          = "activityReminder";
        notif.title = notifTitle ;
        notif.setTriggerDate(triggerDate);
        notif.body = notifBody;
        notif.openURL = notifURL;
        for (var actionTitle in actionDic) {
          notif.addAction(actionTitle,
            actionDic[actionTitle])
        }
        notif.schedule();
      } else {
        console.log(`267 [scheduleNotifs]
          would schedule notifications with
          triggerDate|${triggerDate}|
          notifTitle|${notifTitle}|
          notifBody|${notifBody}|
          notifURL|${notifURL}|
        `);
      };
    }
    /* end of the for loop on notifications -------
    --------------------------- [scheduleNotifs] */
    /* concludes -------------- [scheduleNotifs] */
    if (executionContext == 'Scriptable') {
      Script.complete();
    }
    /* ---------------------- [scheduleNotifs] */
  }); /* end of getSetting activity then ----- */
}
/* ======================= end of scheduleNotifs */
/* smartSpace() ==================== [functions] */
function smartSpace(str, OCRMode) {
  /* keywords: OCR correct */
  if (typeof(OCRMode) == 'undefined') {
    OCRMode = false;
  }
  var lettersAndNumbers = "A-Za-zÀ-ÖØ-öø-ÿ";
  str = str.replace(/\r/g, '\n');
  /* removes unnecessary line returns -------------
  --------------------------------- [smartSpace] */
  str = str.replace(RegExp(`([`
    + lettersAndNumbers
    + `'’,])\\s*(\\n|\r)+`, "img"), '$1 ');
  /* supposes that words with dashes are ----------
  hyphenated ---------------------- [smartSpace] */
   if (OCRMode== true) {
     str = str.replace(/-\n/img, '');
     str = str.replace(/\.\n/img, '. ');
   }
  /* adds tagging categories ------ [smartSpace] */
  str = str.replace(/(Qualité)(.*)/g, '\n$1$2');
  str = str.replace(/(Genre)(.*)/g, '\n$1$2');
  str = str.replace(/(Emploi)(.*)/g, '\n$1$2');
  str = str.replace(/\n+/g, '\n') ;
  /* handles # and @ tags --------- [smartSpace] */
  str = str.replace(/([#@])/img, " $1") ;
  str = str.replace(/[#@](.)/g
    , function(v) {return v.toUpperCase(); });
  str = strClean(str);
  str = str.replace(
   /([\s\S]*)( #Réaliste)([\s\S]*Genre[\s\S]*)/gm
    , "$1$3$2");
  /* removes duplicate tags ------- [smartSpace] */
  str = str.replace(
    /(#[a-zà-ÿA-ZÀ-Ÿ,0-9]+)(?=.+\1)\s/img, "");
  /* removes double # ------------- [smartSpace] */
  str = str.replace(/#\s+#/gm, "#");
  /* markdown italics and bold ==== [smartSpace] */
  str = str.replace(/_{1,}(.*)_{1,}/img
    , "<i>$1</i>");
  str = str.replace(/\*{1,}([.*]+)\*{1,}/img
    , "<b>$1</b>");
  /* double spaces ---------------- [smartSpace] */
  str = str.replace(/[^\S\r\n]{2,}/g, " ") ;
  return str;
}
/* =========================== end of smartSpace */
/* smartWorkFlowy() ================ [functions] */
function smartWorkFlowy() {
  getSettings().then(settings => {
    if (!settings.hasOwnProperty(location)) {
      settings.location = "";
    }
    var location = settings.location;
    var activity = settings.activity;
    getActivitiesDic().then(activitiesDic => {
      if (!activity) activity = "I wake up";
      var activityDic = activitiesDic[activity];
      if (activityDic.launchShortcuts.OpenURL) {
        var URL = activityDic.launchShortcuts
          .OpenURL;
        URL = URL.replace("?q=", "?q="
          + encodeURI(addSpaces));
      } else {
        var URL = activityDic.url;
        if (URL.toLowerCase()
          .includes("workflowy")) {
          var src = "";
          /* chooses between normal and express
          modes --------------- [smartWorkFlowy] */
          var now = new Date();
          now.setHours(now.getHours() - 5);
          var endDate = new Date(now.toDateString()
            + " " + activityDic.timeLimit);
          endDate.setHours(endDate.getHours() - 5);
          if (moment(endDate).diff(now, 'm') > 0
            || activityDic.type == 'streak') {
            src = '#d ';
          } else {
            src = '#e ';
          }
          /* add Location parameters --------------
          --------------------- [smartWorkFlowy] */
          if (location.includes("trajet")
            || location.includes("travail")) {
            src = src + " -#s -#h "
          }
          if (location.includes("maison")
            || location.includes("trajet")) {
            src = src + " -#w "
          }
          /* adds spaces to the search ------------
           to force refresh --- [smartWorkFlowy] */
          var addSpaces = ""
            .padEnd(Math.floor(Math.random() * 10),
            );
          src = src.replace(/^OR/, addSpaces);
          URL = URL + encodeURIComponent(src);
        }
      }
      /* opens the url -------- [smartWorkFlowy] */
      if (executionContext == 'console'
      || executionContext == 'WorkFlowy') {
        window.open(URL, "_self");
      }
      if (executionContext == 'Scriptable') {
        Safari.open(URL);
        Script.complete;
      }
    }); /* end of getActivitiesDic.then -----------
    --------------------------- [smartWorkFlowy] */
  }); /* end of getSettings then ------------------
------------------------------- [smartWorkFlowy] */
}
/* ======================= end of smartWorkFlowy */

/* splitEvents() =================== [functions] */
async function splitEvents(events) {
  if (typeof(events) != 'object') {
    events = await getEvents();
  }
  var output = splitter(events);
  easyWrite({fileName: 'splitEventsInput.json', fileContent: JSON.stringify(events, null, '  ')});
  easyWrite({fileName: 'splitEventsOutput.json', fileContent: JSON.stringify(output, null, '  ')});
  return splitter(events);
  /* splitter helper function -- [splitEvents] */
  function splitter(events) {
    /* filter events ------------ [splitter()] */
    var nowAdjusted = moment().add(-5, "h");
    var todayAdjusted = moment()
      .add(-5,"hours").startOf("Day");
    var dummies = [];
    var regDummies = [];
    var todayDummies = [];
    var advDummies = [];
    var regStreaks = [];
    var doneTodayColl = [];
    var advStreaks = [];
    var todayStreaks = [];
    var frogIsDone = false;
    /* initializes lastDone and streaks ---------
    ----------------------------- [splitter()] */
    var lastDone = {};
    var dateZero
      = new Date('1900-01-01T00:00:00');
    var streaks = {};
    Object.keys(activitiesDic)
      .forEach(function(activity) {
      if (activitiesDic[activity]
        .type == 'streak') {
        lastDone[activity]
          = {recordDate:dateZero};
        streaks[activity] = [];
      };
    });
    for (var i = 0; i < events.length; i++) {
      /* skips non relevant events ------------
      ------------------------- [splitter()] */
      if (!events[i].isAllDay) continue;
      if (events[i].notes == null) continue;
      if (events[i].title.includes("Daylio"))
        continue;
      var eventNotes = handleEventNotes(
        events[i].notes);
      if (typeof(eventNotes) != 'object') {
        continue;
      }
      if (eventNotes.Série == "Daylio") {
        continue;
      }
      var event = {};
      Object.keys(events[i]).forEach(key => {
        if (key != 'notes') {
          /* events properties other than notes
          --------------------- [splitter()] */
          event[key] = events[i][key];
          return;
        } else {
          /* notes */
          Object.keys(eventNotes)
            .forEach(function(notesKey) {
            try {
            event['notes']
              = eventNotes
            } catch (e)   {
              console.log(968)
              console.log(eventNotes)
              throw (e)
            }
          })
        };
      }); /* end of the loop on event keys
      ------------------------- [splitter()] */
      var jsEventStartDate = new Date(event
        .startDate);
      /* dummies -------------- [splitter()] */
      if (eventNotes.type == "Dummy") {
        dummies.push(event);
      }
      if (eventNotes.type == "Dummy") {
        var result = event.title.match(
          /^\s*(\d+)\s(.*?)\s+(.*?)\s*$/i);
        if (result) {
          event.actNr = Number(result[1]);
          event.emoji = result[3];
        };
        if (jsEventStartDate < nowAdjusted
          .startOf("Day")) {
          regDummies.push(event);
        } else {
          if (jsEventStartDate >
            moment(nowAdjusted)
            .startOf("Day")) {
            advDummies.push(event);
          } else {
            todayDummies.push(event);
          };
        };
      };
      /* regStreaks, advStreaks, todayStreaks -
       ------------------------ [splitter()] */
      if (eventNotes["Enregistré le"]) {
        var recordDateAdjusted = moment(
          eventNotes["Enregistré le"]
          , "DD/MM/YYYY hh:mm").add(-5,"h");
        if (moment(
          eventNotes["Enregistré le"]
          , "DD/MM/YYYY hh:mm").add(-5,"hours")
          .startOf('d').diff(moment()
          .add(-5,"hours")
          .startOf('d'), 'd') == 0) {
          var streakTitleRegexresult = event
          .title.match(
            /^\s*(\d+)\s(.*?)\s+(.*?)\s+(\d+)$/i);
          if (streakTitleRegexresult != null) {
            event.actNr = Number(
              streakTitleRegexresult[1]);
            event.actShortName
              = streakTitleRegexresult[2];
            event.emoji = streakTitleRegexresult[3];
            doneTodayColl.push(event);
            if (eventNotes.Série == 'Frog') {
              var frogIsDone = true;
            };
            if (eventNotes.Série == 'Write') {
              var writeIsDone = true;
            };
            if (jsEventStartDate < nowAdjusted
              .startOf("Day")) {
              regStreaks.push(event);
            } else {
              if (jsEventStartDate >
                moment(nowAdjusted)
                .startOf("Day")) {
                advStreaks.push(event);
              } else {
                todayStreaks.push(event);
              };
            };
          };
        };
        /* lastDone ----------- [splitter()] */
        curEventAct = strClean(removeEmojis(
          eventNotes['Série']));
        if (lastDone.hasOwnProperty(
          curEventAct)) {
          var curLastDone = new Date(
            lastDone[curEventAct].recordDate);
          var eventRecordDate = new
            Date(moment(eventNotes[
            'Enregistré le']
            , "DD/MM/YYYY hh:mm" ));
          if (eventRecordDate > curLastDone) {
            lastDone[curEventAct].recordDate
              = eventRecordDate;
            lastDone[curEventAct].event
              = event;
          };
        };
        /* streaks ------------ [splitter()] */
        if (streaks
          .hasOwnProperty(curEventAct)) {
          streaks[curEventAct].push(event);
        }
      } /* end of contains "enregistré" */
    } /* end of loop */
    /* sorts the dummies -------- [splitter()] */
    var regDummies = regDummies.sort(
      function(a, b) {
      if (a.startDate < b.startDate) {
        return 1;
      }
      if (a.startDate > b.startDate) {
        return -1;
      }
      if (a.startDate == b.startDate) {
        if (Number(a.title.trim()
          .split(" ")[0])
          > Number(b.title.trim()
          .split(" ")[0])) {
          return 1;
        } else {
          return -1;
        };
      };
    });
    var todayDummies = todayDummies.sort(function(a
      , b) {
      return (Number(a.title.trim().split(" ")[0])
        > Number(b.title.trim().split(" ")[0]));
    });
    var advDummies = advDummies
      .sort(function(a, b) {
      if (a.startDate > b.startDate) return 1;
      if (a.startDate < b.startDate) return -1;
      if (a.startDate == b.startDate) {
        if (Number(a.title.trim().split(" ")[0])
          > Number(b.title.trim().split(" ")[0])) {
          return 1;
        } else {
          return -1;
        };
      };
    });
    /* sorts doneTodayColl ------ [splitter()] */
    var doneTodayColl = doneTodayColl
      .sort(function(a
      , b) {
      return (Number(a.title.trim()
        .split(" ")[0])
        > Number(b.title.trim()
        .split(" ")[0]));
    });
    /* BUILDS NEXTACTS ---------- [splitter()] */
    var regCount = regStreaks.length;
    var advCount = advStreaks.length;
    var curReg = 0;
    var curAdv = 0;
    var nextActs = [];
    var nextActsForSure = [];
    var nextActsMaybe = [];
    var frogIsAdded = frogIsDone;
    var writeIsAdded = writeIsDone;
    var nextActsRaw = [];
    var nextActsByAct = {};
    var regIsDone = (regCount == 0);
    /* nextActsRaw is an orderered list of next
    activities to do, before handling the frog,
    write, and workout rules ---- [splitter()] */
    /* put today first ---------- [splitter()] */
    for (var i = 0;
      i < todayDummies.length;
      i++) {
      nextActsRaw.push(todayDummies[i]);
      nextActsRaw
        .push(todayDummies[i]);
    }
    /* nextActsRaw: intersperse regDummies ------
    and advDummies -------------- [splitter()] */
    while ((!advIsDone || !regIsDone ) && dummies.length > 0) {
      if (advCount > regCount && !regIsDone) {
      /* adds a regDummy */
        var dummyToPush = regDummies[curReg];
        curReg++;
        regCount++;
      } else {
      /* adds an advDummy ----- [splitter()] */
        if (!advIsDone) {
          var dummyToPush
          = advDummies[curAdv];
        }
        curAdv++;
        advCount++;
      }
      if (typeof(dummyToPush)
        != 'undefined') {
        nextActsRaw.push(dummyToPush);
        var regIsDone =
          typeof(regDummies[curReg]) ==
            'undefined';
        var advIsDone
          = typeof(advDummies[curAdv]) ==
            'undefined';
        var activity = dummyToPush.notes.Série;
        if (!nextActsByAct.hasOwnProperty(
          activity)) {
          nextActsByAct[activity] = [];
        }
        nextActsByAct[activity]
          .push(dummyToPush);
      }
    };
    var writeIsInserted = writeIsDone;
    var frogIsInserted = frogIsDone;
    if (lastDone.Workout.hasOwnProperty('notes')) {
      var noWorkoutToday = moment()
        .add(-5, 'h')
        .startOf('d').diff(moment(lastDone
        .Workout.event.notes['Enregistré le']
        , "DD/MM/YYYY HH:mm").add(-5, 'h')
        .startOf('d'), 'd'
      ) == 1;
    } else {
      noWorkoutToday = false;
    }
    /* splits activities that have a ------------
    splitCount property --------- [splitter()] */
    var curRank;
    for (var i = 0; i < nextActsRaw.length;
      i++) {
      var dummy = nextActsRaw[i];
      if (dummy.notes
        .hasOwnProperty('progress')) {
        continue;
      }
      var curActivity = dummy.notes
        .Série;
      var activityDic = activitiesDic
        [curActivity];
      /* handles activities with special ------
      rules (Write, Frog and Read) ------------
      ------------------------- [splitter()] */
      if (activityDic
        .hasOwnProperty('spliceCount')) {
        var spliceCount = activityDic
          .spliceCount;
        var toSplice = {};
        /* adds the number of the -------------
        subactivity ----------- [splitter()] */
        for (var s = 0;
          s < spliceCount;
          s++) {
          toSplice['s' + s] = JSON.parse(
          JSON.stringify(dummy));
            toSplice['s' + s].notes
              .progress
              = (spliceCount > 1)?s + 1:"";
        }
        /* deletes original dummy -------------
        ----------------------- [splitter()] */
        nextActsRaw.splice(i, 1);
        var curRank = i
        i = i - 1;
        /* chooses at which point the ---------
        dummies will be inserted --------------
        ----------------------- [splitter()] */
        if (!writeIsInserted
          && curActivity == 'Write') {
          writeIsInserted = true;
          curRank = 0;
        }
        if (!frogIsInserted
          && curActivity == 'Frog') {
            frogIsInserted = true;
          curRank = 0;
        }
        for (var s = 0;
          s < activityDic.spliceCount;
          s++) {
          nextActsRaw.splice(curRank + s * 2
            , 0, toSplice['s' + s]);
        }
      }
    }
    /* kills workouts if workout was done -------
    yesterday ------------------- [splitter()] */
    if (noWorkoutToday) {
      var nextActsRawLength = nextActsRaw
        .length;
      for (var i = nextActsRawLength - 1
        ; i >= 0; i--) {
        if (nextActsRaw[i].notes['Série']
          == 'Workout') {
          nextActsRaw.splice(i , 1);
        }
      }
    }
    /* end of kill workouts ----- [splitter()] */
    /* populates nextActsRaw and ----------------
    nextActsMaybe --------------- [splitter()] */
    var streakCount = 0;
    Object.keys(
    activitiesDic).forEach(activityName => {
      var activity = activitiesDic[activityName];
      if (activity.hasOwnProperty('nr')) {
        if (activity.nr > streakCount) {
          streakCount = activity.nr
        }
      }
    })
    for (var i = 0; i < nextActsRaw.length; i++) {
      if (i < streakCount - doneTodayColl.length) {
        nextActsForSure.push(nextActsRaw[i]);
      } else {
        nextActsMaybe.push(nextActsRaw[i]);
      }
    }
    nextActs = nextActsRaw;
    return {
      dummies: dummies,
      regDummies: regDummies,
      todayDummies: todayDummies,
      advDummies: advDummies,
      regStreaks: regStreaks,
      todayStreaks: todayStreaks,
      advStreaks: advStreaks,
      doneTodayColl: doneTodayColl,
      nextActs: nextActs,
      nextActsByAct:nextActsByAct,
      nextActsForSure: nextActsForSure,
      nextActsMaybe: nextActsMaybe,
      lastDone: lastDone,
      streaks: streaks,
      frogIsDone:frogIsDone
    };
  }
  /* --------- end of splitter helper function */
  
}
async function splitEventsTest() {
  var testColl = [{
    "title": " 8 Improve 🔨 541",
    "notes": {
      "Période actuelle": 541,
      "Plus longue série": 541,
      "Nombre d'enregistrements": 541,
      "Série": "Improve my life",
      "Enregistré le": "09/11/2020 15:20",
      "Date": "17/11/2020"
    },
    "isAllDay": true,
    "startDate": "2020-11-17T00:00",
    "id": "mbra6nhe76dav26l4cjhl0sm2g"
  }];
  seOutput = await splitEvents(testColl)
  if (executionContext == 'console' || executionContext == 'WorkFlowy') {
  console.log(`5230
  splitEvents(testColl) |${JSON.stringify(seOutput, null, "  ")}|
  `);
  }
  /* outputs in GScript */
  if (executionContext == 'GScript') {
    easyWrite({
      fileName:'splitEvents.json', 
      fileContent:JSON.stringify(seOutput, null, "  ")
    })    
  }
}
/* ========================== end of splitEvents */
/* wfLazyLoadLater() =========================== */
function wfLazyLoadLater() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    var maxDummies = 10;
    for (var i = 0; i < wfLater.getChildren().length; i++) {
      var curItem = wfLater.getChildren()[i];
      if (curItem.getChildren().length > 0) {
        if (curItem.isCompleted()) {
          console.log(`9506 [wfLazyLoadLater]
          uncompleting mirrors
          curItem.getName()|${curItem.getName()}|
          `);
          WF.completeItem(curItem);
        }
      } else {
        if (i <= maxDummies && curItem.isCompleted()) {
          console.log(`9507 [wfLazyLoadLater]
          uncompleting
          curItem.getName()|${curItem.getName()}|
          because we have some mirrors left
          `);
          WF.completeItem(curItem);
          continue;
        }
        if (i > maxDummies && !curItem.isCompleted()) {
          console.log(`9508 [wfLazyLoadLater]
          hiding
          curItem.getName()|${curItem.getName()}|
          `);
          WF.completeItem(curItem);
          continue;
        }
      }
    }
    /* end of the for loop ------------------------
    ----------------- [wfLazyLoadLater] */
    resolve (`wfLazyLoadLater finished`)
  })
}
/* ============= end of wfLazyLoadLater */
/* strClean() ====================== [functions] */
function strClean(str) {
  /* removes double spaces ---------- [strClean] */
  str = str.replace(
    /([a-zà-ÿA-ZÀ-Ÿ,0-9])(?![\.])\s+»\n/img
    , "$1\u00a0» ");
  str = str.replace(
    /(\s[A-Za-zÀ-ÖØ-öø-ÿ]’)\s/img, "$1");
  str = str.replace("« ", " «\u00a0");
  str = str.replace(" »", "\u00a0» ");
  str = str.replace(" :", "\u00a0: ");
  str = str.replace(/ +/g, " ") ;
  /* removes leading/trailing spaces  [strClean] */
  str = str.replace(String
    .fromCharCode(65039), "")
  str = str.replace(/^\s*(.*?)\s*$/img, "$1");
  /* handles quotes ----------------- [strClean] */
  str = str.replace("'", "’");
  return str;
}
/* ============================= end of strClean */
/* strChangeDate() ================= [functions] */
function strChangeDate(str, newDate) {
  return str.replace(
    /(\d{2})\/(\d{2})\/\d{0,2}(\d{2})/im
    , newDate);
}
/* ======================== end of strChangeDate */
/* streakObject() ================== [functions] */
function streakObject(params) {
  streakDate = "20201022";
  var activity = params.activity;
  var activityDic = activitiesDic[activity];
  return {
    title: `${activityDic.nr} ${
      params.activity} ${activityDic.emoji} 661`,
    notes: {
      "Période actuelle": 661,
      "Plus longue série": 661,
      "Nombre d'enregistrements": 661,
      "Série": activity,
      "Enregistré le": "22/10/2020 12:00",
      "Date": "04/11/2020"
    },
    isAllDay: true,
    startDate: moment(streakDate)
      .format('YYYY-MM-DDTHH:mm'),
    id: 'dummyId'
  }
}
/* ========================= end of streakObject */
/* strEasyInsert() ================= [functions] */
/* aka easyStringInsert easyStringReplace ------ */
function strEasyInsert(oldString
  , stringToInsert
  , regexNeedle) {
  var found = oldString.match(regexNeedle);
  if (found) {
    return strClean(oldString
      .replace(regexNeedle
      , stringToInsert));
  } else {
    return `${strClean(oldString)} ${
      stringToInsert
    }`;
  }
}
/* ======================== end of strEasyInsert */
/* strSpacesToCaps ================= [functions] */
function strSpacesToCaps(myStr){
  return strClean(myStr).replace(/(\s|^)(.)/img
    , function(match, p1, p2, p3) {
    return p2.toUpperCase();
  })
}
/* ====================== end of strSpacesToCaps */
/* streakShortName(anyName) ======== [functions] */
function streakShortName(anyName) {
  /* aka shortStreakName */
  anyName = strClean(removeEmojis(
    anyName
      .replace(/\d/img, "")
      .replace("I improve my life", "Improve")
      .replace("Improve my life", "Improve")
      .replace("Birdfeeder", "Feeder")
      .replace("Tidy up", "Tidy")
  ));
  if (anyName == 'Work') {
    anyName = 'Play';
  };
  return anyName;
};
/* ============================== end of start() */
/* streakTitle(anyName) ============ [functions] */
function streakTitle(anyName, startDate, count
  , activitiesDic) {
  try {
    var serie = streakSerie(anyName);
    var activityDic = activitiesDic[serie];
    var nr = parseInt(activityDic[
      "nr"]);
    var frogOffset = (moment(startDate)
      .diff(moment("2020-05-07"))>=0)?1:0;
    var feederOffset = (moment(startDate)
      .diff(moment("2019-07-23"))<0)?1:0;
    var improveOffset = (moment(startDate)
      .diff(moment("2019-05-27"))<0)?1:0;
    var improveOffset = (moment(startDate)
      .diff(moment("2019-05-27"))<0)?1:0;
    var drawWorkoutOffset = (moment(startDate)
      .diff(moment("2019-05-15"))<0)?2:0;
    nr = nr - 1 + frogOffset;
    if (serie == "Read") {
      nr = (moment(startDate)
         .diff(moment("2019-10-11"))>0)?nr:8;
      nr = nr - feederOffset - improveOffset
        - drawWorkoutOffset;
    };
    if (serie == "Improve my life") {
      nr = nr - feederOffset;
    };
    if (moment(startDate)
         .diff(moment("2019-11-11"))>=0) {
      nr = ("" + nr).padStart(2, ' ')
    };
    if (anyName.includes("Work ")) {
      var output = `${nr} Work 🏭 ${count}`
      return output;
    } else {
      var output = `${nr} ${
        streakShortName(serie)} ${
        activityDic["emoji"]} ${count}`
      return output;
    }
  }
  catch (e) {
    console.log(`streakTitle failure anyName:${
      anyName}, error: ${e}`)
    return false
  };
};
/* ================================= streakTitle */
/* streakSerie(anyName) ============ [functions] */
function streakSerie(anyName) {
  var output = '';
  var fragments = {
    clothes: "Clothes",
    draw:"Draw",
    piano:"Piano",
    feeder:"Birdfeeder",
    frog:"Frog",
    improve:"Improve my life",
    learn:"Learn",
    movies: "Movies",
    play:"Play",
    read:"Read",
    social:"Social",
    tidy:"Tidy up",
    workout:"Workout",
    write:"Write"
  }
  for (i = 0; i < Object.keys(fragments).length
    ; i++) {
    if (anyName.toLowerCase()
      .includes(Object.keys(fragments)
      [i])) {
      output = fragments[Object.keys(fragments)
      [i]];
      break
    }
  }
  if (output == '') {
    var activities = Object.keys(activitiesDic);
    for (var i = 0; i < activities.length; i++) {
      if (anyName.toLowerCase().includes(
        activities[i].toLowerCase())) {
          output = activities[i];
          break;
        }
      }
    }
    return (output == '')?anyName:output
  }
/* ========================== end of streakSerie */
/* strRemoveTags =================== [functions] */
function strRemoveTags(myString) {
  return myString.replace(new RegExp(`#[${
    lettersAndNumbers}]*`, 'img'),'');
}
/* ======================== end of strRemoveTags */
/* function strStripHtmlTags() ===== [functions] */
function strStripHtmlTags(curText) {
  return strClean(curText.replace(
    /\s*<\/{0,1}.*?>\s*/gm, ' '));
}
/* ===================== end of strStripHtmlTags */
/* typeofPro() ===================== [functions] */
function typeofPro(thing) {
  if (typeof(thing) == 'undefined') {
    return 'undefined';
  }
  if (typeof(thing) == 'string') {
    var thingWithoutDash = thing.replace(/^_/, '');
    try {
      JSON.parse(thingWithoutDash);
      if (thingWithoutDash.charAt(0) == "[") {
        return 'arrayAsString';
      } else {
        return 'objectAsString';
      }
    } catch (e) {
      return 'string';
    }    
  }
  if (JSON.stringify(thing).charAt(0) == "[") {
    return 'array';
  }
  if (typeof(thing) == 'object') {
    if (typeof(thing.getMonth) === 'function') {
      return 'date';
    }
    if (JSON.stringify(thing) == '{}' 
    || JSON.stringify(thing) == '[]') {
      return 'undefined'
    }
  }
  return typeof(thing);
} 
function typoOfProTest() {
  var myUndefined;
  var expectedAnswers = 
  [
    {
      "array": ['apples', 13]
    },{
      "date": new Date()
    },{
      "object": {"title": "streak title"}
    },{
      "objectAsString": '_{"title":"streak title"}'
    },{
      "objectAsString": '{"title": "streak title"}'
    },{
      "string": "toto"
    },{
      "undefined": myUndefined
    }
  ]
  expectedAnswers.forEach(dic => {
    var expected = Object.keys(dic)[0];
    var argument = dic[expected];
    if ((typeofPro(argument) != expected)) {
      var actual = typeofPro(argument);
      console.error(`9729 typeofPro() failure`)
      console.error({argument})
      console.error({expected});
      console.error({actual});
    }
  })
}
/* ============================ end of typeofPro */
/* FUNCTIONS END ================= FUNCTIONS END */


/* ============================================= */
/*                   CALENDAR                    */
/* ============================================= */
var calDefaultStartDate = new Date(moment().add(-1, 'd'));
var calDefaultEndDate = new Date(moment().add(20, 'd'));
var calDateExampleWithHour = new Date(moment('20201111T1200'));
var calDateExampleWithoutHour = new Date(moment('20201224'));
var calDummyExample = {"title":" 6 D ✏️","notes":{"Série":"Draw","Compteur":6,"URL":"https://workflowy.com/#/43f6bc84b40e?q=","Type":"Dummy","creationDate":"2020-11-10 17:20","type":"Dummy","url":"https://workflowy.com/#/43f6bc84b40e?q="},"isAllDay":true,"startDate":"2020-11-10T00:00","endDate":"2020-11-11T00:00","calendar":"Planification","id":"mmnr20ln8djo1nc62skebn9krc" };
var calStreakExample = {"title":"14 Mind 😊 8","notes":{"Période actuelle":8,"Plus longue série":8,"Nombre d'enregistrements":8,"Série":"Mind","Enregistré le":"27/10/2020 17:38","Date":"08/11/2020"},"isAllDay":true,"startDate":"2020-11-08T00:00","endDate":"2020-11-09T00:00","calendar":"Planification","id":"6ah0g68lf7i0eevf1qjg6jl8s0"};
/* calTests() ======================= [calendar] */
function calTests(){  
  calgetEarliestTests();
  calIsStreakTest();
  calIsStreakOrDummyTest();
  easyDateTest();
  massageGetEventsParamsTest();
}
function calIsStreak(event) {
  try {
    return event.notes.hasOwnProperty("Enregistré le");
  } catch (e) {
    return false;
  }
}
function calIsDummy(event) {
  try {
    return event.notes.Type == 'Dummy';
  } catch (e) {
    return false;
  }
}
function calIsStreakOrDummy(event) {
  return calIsStreak(event) || calIsDummy(event)
}
function calIsStreakOrDummyTest() {
  var myUndefined;
  var expectedAnswers = 
  [
    {
      argument: {"title":"14 Mind 😊 8","notes":{"Période actuelle":8,"Plus longue série":8,"Nombre d'enregistrements":8,"Série":"Mind","Enregistré le":"27/10/2020 17:38","Date":"08/11/2020"},"isAllDay":true,"startDate":"2020-11-08T00:00","endDate":"2020-11-09T00:00","calendar":"Planification","id":"6ah0g68lf7i0eevf1qjg6jl8s0"},
      expected: true
    }, {
      argument: {"title":" 6 D ✏️","notes":{"Série":"Draw","Compteur":6,"URL":"https://workflowy.com/#/43f6bc84b40e?q=","Type":"Dummy","creationDate":"2020-11-10 17:20","type":"Dummy","url":"https://workflowy.com/#/43f6bc84b40e?q="},"isAllDay":true,"startDate":"2020-11-10T00:00","endDate":"2020-11-11T00:00","calendar":"Planification","id":"mmnr20ln8djo1nc62skebn9krc" },
      expected: true
    }, {
      argument: {"title":"getEvents test","isAllDay":false,"startDate":"2020-11-09T14:15","endDate":"2020-11-09T15:00","calendar":"Planification","id":"260rakmaagcr1d6v16k2ctneoj"},
      expected: false
    }
  ];
  expectedAnswers.forEach(dic => {
    var expected = dic.expected;
    var argument = dic.argument;
    var actual = calIsStreakOrDummy(argument);
    if (actual != expected) {
      console.error(`968 calIsStreakOrDummy() failure`);
      console.error(argument);
      console.error({expected});
      console.error({actual});
    }
  });
}
function calIsStreakTest() {
  var myUndefined;
  var expectedAnswers = 
  [
    {
      argument: {"title":"14 Mind 😊 8","notes":{"Période actuelle":8,"Plus longue série":8,"Nombre d'enregistrements":8,"Série":"Mind","Enregistré le":"27/10/2020 17:38","Date":"08/11/2020"},"isAllDay":true,"startDate":"2020-11-08T00:00","endDate":"2020-11-09T00:00","calendar":"Planification","id":"6ah0g68lf7i0eevf1qjg6jl8s0"},
      expected: true
    }, {
      argument: {"title":" 6 D ✏️","notes":{"Série":"Draw","Compteur":6,"URL":"https://workflowy.com/#/43f6bc84b40e?q=","Type":"Dummy","creationDate":"2020-11-10 17:20","type":"Dummy","url":"https://workflowy.com/#/43f6bc84b40e?q="},"isAllDay":true,"startDate":"2020-11-10T00:00","endDate":"2020-11-11T00:00","calendar":"Planification","id":"mmnr20ln8djo1nc62skebn9krc" },
      expected: false
    }, {
      argument: {"title":"getEvents test","isAllDay":false,"startDate":"2020-11-09T14:15","endDate":"2020-11-09T15:00","calendar":"Planification","id":"260rakmaagcr1d6v16k2ctneoj"},
      expected: false
    }
  ];
  expectedAnswers.forEach(dic => {
    var expected = dic.expected;
    var argument = dic.argument;
    var actual = calIsStreak(argument);
    if (actual != expected) {
      console.error(`968 calIsStreak() failure`);
      console.error(argument);
      console.error({expected});
      console.error({actual});
    }
  });
}
/* calGetExtreme() ================== [calendar] */
function calGetExtreme(params){
  var eventColl = params.eventColl;
  var direction = params.direction;
  if (eventColl.length > 0) {
    return eventColl.reduce(function(event1, event2) {
      if (direction == 'earliest') {
        return moment(event1.startDate).diff(event2.startDate, 's') < 0 ? event1 :event2;
      } else {
        return moment(event1.startDate).diff(event2.startDate, 's') > 0 ? event1 :event2;
      }
    });
  }
}
function calGetEarliest(eventColl) {
  return calGetExtreme({eventColl:eventColl, direction:'earliest'})
}
function calGetLatest(eventColl) {
  return calGetExtreme({eventColl:eventColl, direction:'latest'})
}
function calgetEarliestTests(){
  function raiseError(e) {
    console.error(`8218
    e|${e}|
    `);
  }
  function emptyTest() {
    if (typeof(calGetEarliest([])) != 'undefined') raiseError(`2904
      emptyTest() failure
      `);
  }
  function validCollGetsValidResult() {
    var validColl = [{"title":" 3 Piano 🎹 777","notes":{"Période actuelle":777,"Plus longue série":777,"Nombre d'enregistrements":777,"Série":"Piano","Enregistré le":"10/11/2020 09:09","Date":"17/11/2020"},"isAllDay":true,"startDate":"2020-11-17T00:00","id":"oj552nq9ng0h40ua4t74s552sk","actNr":3,"actShortName":"Piano","emoji":"🎹"},{"title":" 2 Write ✍️ 859","notes":{"Période actuelle":859,"Plus longue série":859,"Nombre d'enregistrements":859,"Série":"Write","Enregistré le":"10/11/2020 09:14","Date":"18/11/2020"},"isAllDay":true,"startDate":"2020-11-18T00:00","id":"iq5f427gnjtci62v1lj38d7bg4","actNr":2,"actShortName":"Write","emoji":"✍️"}];
    var output = calGetEarliest(validColl);
    try {
      if (typeof(output.startDate) == 'undefined') raiseError(`1565 calGetEarliest() failure`);
    } catch (e) {
      raiseError(e);
    }
  }
  validCollGetsValidResult();
  emptyTest();
}
/* ======================= end of calGetEarliest */
/* calgetGetEventsStartAndEndDates == [calendar] */
async function calgetGetEventsStartAndEndDates(events) {
  seOutput = await splitEvents(events);
    function easyPushStartAndRecordDates(coll, item) {
      if (typeof(item) != 'undefined') {
        coll.push(new Date(item.startDate));
      }
    }
    function getFlatLastDoneColl(lastDone) 
    {
      output = []
      Object.keys(lastDone).forEach(activity => {
        output.push(lastDone[activity].event);
      })
      return output
    }
    /* 
    lastDone: lastDone,
    streaks: streaks,
    frogIsDone:frogIsDone */
    /* today and tomorrow */
    var bigDateRepo = [
      new Date(startOfToday),
      new Date(endOfTomorrow)
    ];
    /* doneTodayColl */
    easyPushStartAndRecordDates(bigDateRepo, calGetEarliest(seOutput.doneTodayColl));
    easyPushStartAndRecordDates(bigDateRepo, calGetLatest(seOutput.doneTodayColl));
    /* dummies */
    if (seOutput.dummies.length > 0) {
      bigDateRepo.push(new Date(seOutput.dummies[0].startDate));
      bigDateRepo.push(new Date(seOutput.dummies[seOutput.dummies.length - 1].startDate));
    }
    /* lastDone */
    getFlatLastDoneColl(seOutput.lastDone).forEach(streak => {
      easyPushStartAndRecordDates(bigDateRepo, streak)
    });
    bigDateRepo.sort(function(a,b){
      return new Date(a) - new Date(b);
    });
    var getEventsStartDate = new Date(moment(bigDateRepo[0]).startOf('d').add(-1, 'd'));
    var getEventsEndDate = new Date(moment(bigDateRepo[bigDateRepo.length - 1]).endOf('d').add(1, 'd'))

    return {startDate:getEventsStartDate, endDate: getEventsEndDate};
}
function HHmm() {
  return moment().format('HH:mm');
}
function calIsToday(event) {
  return moment(event.startDate).startOf('d').diff(startOfToday) == 0
}
/* ********************************************* */
/*                CALENDAR END                   */
/* ********************************************* */

/* ============================================= */
/*                   DYNALIST                    */
/* ============================================= */
/* dyLaunchUpdates() ================ [dynalist] */
function dyLaunchUpdates() {
  dySimpleFetch('doc/read', {
    file_id: "f9Oz5SInhUnGepNWtQ_2eucd"})
  .then(readOutput => {
    if (readOutput
      == '{"_code":"TooManyRequests"}') {
      return;
    };
    var updateCommand = dyUpdateWordCounts(
      readOutput);
    if (updateCommand) {
    dySimpleFetch('doc/edit', updateCommand)
      .then(fetchSuccess =>{
        /* console.log(fetchSuccess) */
        },
      fetchFailure =>{
        console.log(`dyLaunchUpdates() error
failed to update the document because ${
  fetchFailure}`)
      })
    }
  }, error => console.log(`dyLaunchUpdates()
  error while reading the nodes to update ${
    error}
  } `))
}
/* ==================== end of dyLaunchUpdates() */
/* dySendToInbox() ================== [dynalist] */
async function dySendToInbox(content) {
  dySimpleFetch('inbox/add', {content: content,
    "index":0,
    "checked":false})
    .then(success => console.log(success)
      ,failure =>
      console.log(`dySendToInbox() failure
      ${failure}`)
    )
};
/* ======================== end of dySendToInbox */
/* dySimpleFetch() ================== [dynalist] */
async function dySimpleFetch(command, body) {
  var debug = true;
  if (debug && false) {
    console.log(`dySimpleFetch() 1218
  command ${command}
  body ${JSON.stringify(body, null, " ")}
    `)
  }
  command = command == "edit"?"doc/edit":command;
  command = command == "read"?"doc/read":command;
  var url = 'https://dynalist.io/api/v1/'
    + command;
  body.token = "HOYc02mh73pJMvNy8YuiuQTg5wvCmk5l"
    + "hF2vK7yspqKa7G1KrMaFPhKPfA1StWNdTZs37YGU5"
    + "2H27oi_kfExhOGBdrm9jIE9HsmPUYV2xEEbtL1CgD"
    + "JyMu62-IlUF_eS"
  var options = {
    mode: 'no-cors',
    method : 'POST',
    headers : new Headers({
      'Content-Type':
        'Content-Type: application/json'
    }),
    body :  JSON.stringify(body)
  }
  return fetch(url, options)
  .then(function(response) {
    if(response.ok) {
      return response.text();
    } else {

    console.log(`dySimpleFetch() failure 2330
  url ${url}
  body ${JSON.stringify(body, null, " ")}
    `);
      throw `dySimpleFetch() failure ${
        (document.URL.includes('dynalist'))
      ?"Mauvaise réponse du réseau"
      :"dySimpleFetch doesn't worked when "
        + "launched outside of dynalist"}`;
    }
  })
}
/* ====================== end of dySimpleFetch() */
/* dySplitText ===================== [dynalist] */
function dySplitText() {
  var remainingText;
  getLastPage().then(pageNrStart => {
  dropboxFetch('hm.txt').then(textfromGetText => {
    var textToSplit = textfromGetText;
    createContainer(pageNrStart).then(
      containerId => {
      createChapters(pageNrStart, containerId)
      .then(chapterIds => {
        createPages(chapterIds, textToSplit
        , pageNrStart)
      ,
        failure => {
          console.log(`dySplitText()
          error creating pages ${
            failure
          }`)
        }
      }) /* end of createChapters then
      ---------------------------- [dySplitText] */
    },
      e => console.log('1413' + e)
    ); /* end of createContainer
    ------------------------------ [dySplitText] */
  }
    , getTextfailure => {
      console.log("dySplitText() "
      + " getTextfailure " +  getTextfailure)
    }
  )  /*  end of dyGetText then --- [dySplitText] */

  }) /* end of getLastPage then -- [dySplitText] */
  /* createChapters helper function
  -------------------------------- [dySplitText] */
  function createChapters(pageNrStart
  , containerId) {
    /* creates chapters ---------- [dySplitText] */
    var chapterBody = {
      "file_id": "f9Oz5SInhUnGepNWtQ_2eucd",
      "changes": []
    };
    var header = "";
    for (var chapter = 0; chapter < 2; chapter++) {
      chapterBody.changes.push({
        action: "insert",
        parent_id: containerId,
        index: chapter,
        content: `${
          (pageNrStart + chapter * 10 + '')
          .padStart(4, '0')
          }-${
          ((pageNrStart + (chapter + 1)
          * 10 - 1) + '')
          .padStart(4, 0)}`
      });
    }
    return new Promise((resolve, reject) => {
      dySimpleFetch('edit', chapterBody)
      .then(response => resolve(JSON
        .parse(response).new_node_ids)
      ,
        error => {throw `dySplitText() error 1321`
          + `could not create chapters ids because:${
          error}`}
      )
    })
  }
  /* end of createChapters ------- [dySplitText] */
  /* createContainer ------------- [dySplitText] */
  function createContainer(pageNrStart) {
    return new Promise((resolve, reject) => {
      dySimpleFetch('edit', {
        "file_id": "f9Oz5SInhUnGepNWtQ_2eucd",
        "changes": [{
        "action": "insert",
        "parent_id": "zuoN8Q6nF81mCT-PFAc9yK5v",
        "index": 0,
        "content": ('' + pageNrStart).padStart(4
          , '0') + '-' + ('' + (pageNrStart + 19))
          .padStart(4, '0')
      },]
      })
      .then(response => resolve(JSON
        .parse(response).new_node_ids[0])
      ,
        error => {throw `dySplitText() error 1478`
          + `could not create container ids because:${
          error}`}
      )
    })
  }
  /* createPages() helper function
  -------------------------------- [dySplitText] */
  function createPages(chapterIds, textToSplit
    , pageNrStart) {
    var pagesBody = {
      "file_id": "f9Oz5SInhUnGepNWtQ_2eucd",
      "changes": []
    };
    remainingText = textToSplit;
    var myRegex = new RegExp('\r\n|\r|\n', 'imgs');
    remainingText = remainingText
      .replace(myRegex, "\r\n");
    myRegex =
      new RegExp('^((?:\S+\s+) {235}.+?\.\s*)(.*)'
        , 'ims');
    var partCount = 0;
    var matchResult = remainingText.match(myRegex);
    var loopSafety = 0;
    for (chapter = 0; chapter < chapterIds.length;
      chapter++) {
      loopSafety++;
      if (loopSafety > 50) {
        throw 'loopSafety over limit'
      }
      var chapterId = chapterIds[chapter];
      for (var pageNr = pageNrStart
        ; pageNr < pageNrStart + 10
        ; pageNr++) {
        var matchResult = remainingText
          .match(myRegex);
        var thisPart = smartSpace(matchResult[1]);
        var thisPartTitle = ('' + pageNr)
          .padStart(4, '0');
        pagesBody.changes.push({
          action: "insert",
          parent_id: chapterId,
          index: pageNr - pageNrStart,
          content: thisPartTitle,
          note: thisPart,
          checked: false,
        });
        remainingText = matchResult[2];
      } /* end of pageNr loop ---- [dySplitText] */
      pageNrStart = pageNrStart + 10;
    }; /* end of chapter loop ---- [dySplitText] */
    dySimpleFetch('edit', pagesBody).then(
    response => {
      console.log(`dySplitText
createPages dySimpleFetch response ${response}`);
      /* updates the source text - [dySplitText] */
      /* doesn't work, the text is too big */
//       dySimpleFetch('edit',
//         {
//           file_id: 'DtVcG-ZHC4_Zw6eJOGH3noi9',
//           changes:[{
//             action: "edit",
//             node_id: 'N9JRMYEYg8Dy4OWIfR73djoU',
//             checked: false,
//             'notes': remainingText,
//           }]
//         }
//       ).then(r => {console.log(`2494 worked!!
//  ${r}
//  ${remainingText}`)}, e => {console.log(`2495 ${e}`)})
    }
//             note: remainingText,
    ,
      error => console.log(`dySplitText
createPages dySimpleFetch error ${error}`)
    )
  };
  /* end of createPages() -------- [dySplitText] */
  /* getLastPage helper function - [dySplitText] */
  function getLastPage() {
    return new Promise((resolve, reject) => {
      var lastPage = 0;
      dySimpleFetch('doc/read', {
        file_id: "f9Oz5SInhUnGepNWtQ_2eucd"})
      .then(text => {
        if (text == '{"_code":"TooManyRequests"}') {
          throw 'Too many requests';
        }
        JSON.parse(text).nodes.forEach(curNode =>{
          regexNr = curNode.content.match(
            /\b(\d{4})(?![-)])/igm);
          if (regexNr) {
            regexNr.forEach(nr => {
              if (nr != "2020") {
                lastPage = Math.max(lastPage
                  , parseInt(nr));
              }
            })
          }
        })
        resolve(lastPage + 1);
      }
      ,
      error =>{
        console.log(`dySplitText getLastPage`
        + 'error ' + error);
        throw `dySplitText getLastPage`
        + 'error ' + error;
      })
    })
  }
  /* ---------- end of getLastPage [dySplitText] */
}
/* ========================== end of dySplitText */
/* dyupdateWordCount ================ [dynalist] */
function dyupdateWordCount(oldString, newCount) {
  if (newCount == 0 || !oldString.match(
    /[C\d]\d{3}/)) {
    var newString = strClean(oldString
      .replace(/```\s*\d*\s*mots```/gm
      , ''));
    return (newString != oldString)
      ?newString:false;
  }
  var myRegex = /\s*(\d+)(\s*mots)/;
  var found = oldString.match(myRegex);
  return found
    ? found[1] == newCount
      ?false
      :oldString.replace(myRegex
        , ` ${newCount} mots`)
    : `${oldString}${'```'}${
      newCount} mots${'```'}`;
}
/* ==================== end of dyupdateWordCount */
/* dyUpdateWordCounts() ============= [dynalist] */
function dyUpdateWordCounts(nodeAsString) {
  var nodeContent = JSON.parse(nodeAsString)
    .nodes;
  var changes = [];
  nodeContent.forEach(curItem => {
    var newContent = dyupdateWordCount(curItem
      .content
      , curItem.note?countWords(curItem.note):0);
    if (newContent) {
      changes[curItem.id] = newContent
      changes.push(
        {
          "action": "edit",
          "type": "document",
          "node_id": curItem.id,
          "content":newContent
        }
      )
    }
  });
  return changes.length == 0? false
    :{
    file_id: "f9Oz5SInhUnGepNWtQ_2eucd",
    changes: changes,
  };
}
/* =================== end of dyUpdateWordCounts */
/* ********************************************* */
/*                DYNALIST END                   */
/* ********************************************* */

/* ============================================= */
/*                    GSCRIPT                    */
/* ============================================= */
var planificationCalendarId = '3jgbdje46sft31956n9vi4tac4'
+ '@group.calendar.google.com';
var rendezVousCalendarId = 'guillaume.ladrange@gmail.com';
var zRendezVousCalendarId = 'gladrange.bnf@gmail.com';
var gsWereInStreakAndDummies = (typeof(SettingsSheet) != 'undefined');
/* gsAutoDate(e) ===================== [gScript] */
function gsAutoDate(e){
/* for it to work
- the code must include a global array named
  'autodateSheetNames' containing the sheet names
- the code most include the following onEdit
  function
    function onEdit(e) {
    }                                            */

  var modifiedCell = e.range;
  if (modifiedCell.getValue() == "") {
    return;
  }
  var curSheet = modifiedCell.getSheet();
  /* if sheet doesn't belong to the sheets to auto
  date, exit ---------------------- [gsAutoDate] */
  if (!autodateSheetNames.includes(curSheet
    .getName())){
    return;
  }
  /* finds date column and determines the kind of
  logging (date or date and time) - [gsAutoDate] */
  var headers = curSheet.getRange('1:1')
    .getValues()[0];
  var dateType = '';
  var dateCol = -1;
  if (headers.indexOf('Date') != -1) {
    dateType = 'DD/MM/YYYY';
    dateCol = headers.indexOf('Date') + 1;
  } else {
    if (headers.indexOf('Date et heure') != -1) {
      dateType = 'DD/MM/YYYY HH:mm';
      dateCol = headers.indexOf('Date et heure') + 1;
    }
  }
  if (dateType == '') {
    return;
  }
  var curRow = modifiedCell.getRow();
  var contentCell = curSheet.getRange(curRow, 1);
  /* if this is a intermediary header row, exit ---
  --------------------------------- [gsAutoDate] */
  if (contentCell.getValue()
    .match(/\d{2}\/\d{4}/) !== null) {
    return;
  }
  /* sets the dateCell ------------ [gsAutoDate] */
  var dateCell = curSheet.getRange(curRow
    , dateCol);
  /* if dateCell is not empty, exit [gsAutoDate] */
  if (dateCell.getValue() != "") {
    return;
  }
  /* sets correct number format --- [gsAutoDate] */
  dateCell.setNumberFormat(dateType);
  dateCell.setValue(moment().format(dateType));
}
/* =========================== end of gsAutoDate */
/* gsexportData() ==================== [gScript] */
function gsexportData() {
  var myFolder = DriveApp
    .getFolderById(
    '1jLjaXgHtRoXCRuitmgzNnK-9yAQ32wJd');
  var curSheet = SpreadsheetApp.getActiveSheet();
  var values = curSheet.getRange("B1:B"
    + curSheet.getLastRow()).getValues();
  var output;
  for (var i = 0; i < values.length; i++) {
    output = `${output}
${values[i][0]}`
  };
  gsSaveData("hm.txt", output);
}
/* ========================= end of gsexportData */
/* gsGetDriveList() ================ [functions] */
function gsGetDriveList(curFolder){
/* this is the old function */
  /* defaults to Banque & argent 2019 ========== */
  if (!curFolder) {
    curFolder= DriveApp
      .getFolderById(
        "1ajS11My1GZKmhFFrjUH5ugsajG9oqK7q")
  }
  /* gets files of the main folder ----------------
  ----------------------------- [gsGetDriveList] */
  DriveSheet.clear();
  DriveSheet.appendRow(["Name", "Date", "Size"
    , "URL", "Download", "Description", "Type"]);
  gsListFiles(curFolder);
  // recurs in folders
  var childFolders = curFolder.getFolders();
  while(childFolders.hasNext()) {
    var child = childFolders.next();
    getSubFolders(child);
  }
}
/* ======================= end of gsGetDriveList */
/* getSubFolders() =================== [gScript] */
function getSubFolders(parent) {
  parentID = parent.getId();
  gsListFiles(parent);
  var childFolder = parent.getFolders();
  while(childFolder.hasNext()) {
    var child = childFolder.next();
    getSubFolders(child);
  }
  return;
}
/* ======================== end of getSubFolders */
/* gsGetFileList() =================== [gScript] */
/* this is the new function, update it to scan
subfolders */
async function gsGetFileList(filePath) {
  var folder = await gsGetFolder(DriveApp
    .getRootFolder(), filePath);
  var i = 0;
  var fileArray = [];
  gsGetFilesFromFolder(folder, filePath);
  easyLog(fileArray, 'fileList', true);
  /* gsGetFilesFromFolder helper function ---------
  ------------------------------ [gsGetFileList] */
  function gsGetFilesFromFolder(curFolder
    , parentFolderName) {
    if (typeof(parentFolderName) == 'undefined') {
      parentFolderName = '';
    }
    return new Promise(resolve => {
      console.log(`020
      parentFolderName|${parentFolderName}|
      `);
      /* loops in the files */
      var files = curFolder.getFiles();
      while (files.hasNext()) {
        var curFile = files.next();
        i++;
        fileArray.push(gsFileMetaData(curFile,
          parentFolderName));
      }
      /* loops in the folders -- [gsGetFileList] */
      var parentFolderToDisplay = curFolder.getName();
      if (typeof(parentFolderName) != 'undefined') {
        parentFolderToDisplay = `${parentFolderName
          } ${parentFolderToDisplay}`;
      }
console.log(`460
parentFolderToDisplay|${parentFolderToDisplay}|
`);
      var childFolders = curFolder.getFolders();
      while(childFolders.hasNext()) {
        var curFolder2 = childFolders.next();
        gsGetFilesFromFolder(curFolder2,
          parentFolderToDisplay);
      }
      resolve('finished');
    })
  }
  /* end of gsGetFilesFromFolder helper function --
  ------------------------------ [gsGetFileList] */
}
/* ======================== end of gsGetFileList */
/* gsGetSheet ======================== [gScript] */
/* ADD THIS IN THE CODE.JS SECTION OF THE FileManager

var thisWorkbook = SpreadsheetApp.openById(
  "15VJB6mt1cujd_DXYYBNlRiP_P6Hcp_9PW5DG5wqsB2k");
================================================= */
function gsGetSheetByName(sheetName
  , targetWorkbook) {
  targetWorkbook = gsGetWorkbook(targetWorkbook);
  if (typeof(sheetName) == 'undefined') {
    sheetName = 'log';
  }
  try {
    return targetWorkbook
      .getSheetByName(sheetName);
  } catch(e) {
    logger.log('4664 ' + e);
    return targetWorkbook
      .insertSheet(sheetName);
  }
}
function gsGetSheetByNameTest() {
  gsGetSheetByName('log').getName()
}
/* gsGetWorkbook() =================== [gScript] */
function gsGetWorkbook(targetWorkbook) {
  if (typeof(targetWorkbook) == 'undefined') {
    return thisWorkbook;
  } else {
    return targetWorkbook
  }
}
function gsGetWorkbookTest() {
  console.log(4576 + gsGetWorkbook().getName());
}
/* gsFileMetaData ==================== [gScript] */
function gsFileMetaData(curFile, folder) {
  return [
      curFile.getName(),
      folder,
      curFile.getDateCreated(),
      curFile.getDateCreated(),
      curFile.getSize(),
      curFile.getUrl(),
        `https://docs.google.com/uc?export=`
        + `download&confirm=no_antivirus&id=${
          curFile.getId()}`,
      curFile.getDescription(),
      curFile.getMimeType().toString()
    ];
}
/* ======================= end of gsFileMetadata */
var gsStreakExample = {"updated":"2020-10-27T16:48:42.397Z","etag":"\"3207634644794000\"","status":"confirmed","reminders":{"useDefault":false},"start":{"date":"2020-11-08"},"iCalUID":"6ah0g68lf7i0eevf1qjg6jl8s0@google.com","summary":"14 Mind 😊 8","created":"2020-10-27T16:48:42.000Z","sequence":0,"end":{"date":"2020-11-09"},"htmlLink":"https://www.google.com/calendar/event?eid=NmFoMGc2OGxmN2kwZWV2ZjFxamc2amw4czAgM2pnYmRqZTQ2c2Z0MzE5NTZuOXZpNHRhYzRAZw","creator":{"email":"guillaume.ladrange@gmail.com"},"organizer":{"email":"3jgbdje46sft31956n9vi4tac4@group.calendar.google.com","displayName":"Planification","self":true},"description":"{\n  \"Période actuelle\": 8,\n  \"Plus longue série\": 8,\n  \"Nombre d'enregistrements\": 8,\n  \"Série\": \"Mind\",\n  \"Enregistré le\": \"27/10/2020 17:38\",\n  \"Date\": \"08/11/2020\"\n}","kind":"calendar#event","id":"6ah0g68lf7i0eevf1qjg6jl8s0"};
var gsEventExamplePlanificationNotAllDay = {"start":{"dateTime":"2020-11-09T14:15:00+01:00"},"created":"2020-11-09T11:12:00.000Z","etag":"\"3209840640842000\"","summary":"getEvents test","end":{"dateTime":"2020-11-09T15:00:00+01:00"},"reminders":{"useDefault":true},"iCalUID":"260rakmaagcr1d6v16k2ctneoj@google.com","organizer":{"displayName":"Planification","email":"3jgbdje46sft31956n9vi4tac4@group.calendar.google.com","self":true},"htmlLink":"https://www.google.com/calendar/event?eid=MjYwcmFrbWFhZ2NyMWQ2djE2azJjdG5lb2ogM2pnYmRqZTQ2c2Z0MzE5NTZuOXZpNHRhYzRAZw","kind":"calendar#event","creator":{"email":"guillaume.ladrange@gmail.com"},"sequence":0,"updated":"2020-11-09T11:12:00.421Z","status":"confirmed","id":"260rakmaagcr1d6v16k2ctneoj"};
var gsCalEventsExamples = [gsStreakExample, gsEventExamplePlanificationNotAllDay];
/* gsGetEvents() ===================== [gScript] */
function gsGetEvents(params) {
  var optionalArgs = {
    showDeleted: false,
    singleEvents: true,
    orderBy: 'startTime',
    maxResults: 100000,
    timeMax: moment(params.endDate).toISOString(),
    timeMin: moment(params.startDate).toISOString()
  };
  var response = Calendar.Events.list(
    params.calendarId, optionalArgs);
  var googleEvents = response.items;
  while (response.nextPageToken) {
    optionalArgs.pageToken = response
      .nextPageToken;
    response = Calendar.Events.list(
      params.calendarId, optionalArgs);
    googleEvents = googleEvents
      .concat(response.items);
  }
  return googleEvents;
}
function easyWrite(params){
  if (typeof(params) == 'string') {
    params = {fileName: 'log.txt', fileContent: params}
  } else {
    myParams = params;
  }  
  if (executionContext == 'GScript') {
    gsSaveData(params.fileName
    , params.fileContent, javascriptDriveFolder).then(newFileId => {
    gsToDropbox(newFileId, params.fileName
      , "Javascript");
    return  (`4869 gsUpdateEvensFile() finished`);
      
    })
  }
}
function gsGetEventsTest() {  
  if (executionContext == 'GScript') {
    rawGoogleEvents = gsGetEvents({startDate:startOfToday, endDate: endOfTomorrow, calendarId:planificationCalendarId})
    easyWrite({
      fileName:'rawGoogleEvents.json', 
      fileContent:JSON.stringify(rawGoogleEvents, null, "  ")
    })
  }
  /* the bigger the range, the bigger the number of events */
  getEvents(startOfToday, endOfTomorrow)
    .then(todayEvents => {
    getEvents(startOfToday, new Date(moment(endOfTomorrow).add(1, 'd')))
      .then(todayAndTomorrowEvents => {
      if (todayAndTomorrowEvents.length <= todayEvents.length) {
        console.error(`3405 gsGetEventsTest
        todayEvents.length|${todayEvents.length}|
        todayAndTomorrowEvents.length|${todayAndTomorrowEvents.length}|
        todayAndTomorrowEvents.length <= todayEvents.length|${todayAndTomorrowEvents.length <= todayEvents.length}|
        `);
      }
    })
  })
}
/* ======================== end of gsGetEvents() */
/* gsSendEventsAroundNowToDropbox() ============ */
async function gsSendEventsAroundNowToDropbox() {
  var events = await getEventsAroundNow();
  var singleEvents = events.filter(event => {
    return !event.isAllDay;
  })
  var content = await JSON.stringify(singleEvents, null, "  ");
  gsSaveToDropbox(
    {fileName: 'eventsAroundNow.json', content: content
    });  
}

/* gsSaveToDropbox ================ [functions] */
async function gsSaveToDropbox(params) {
  var javascriptDriveFolder = DriveApp
    .getFolderById(
    '1jLjaXgHtRoXCRuitmgzNnK-9yAQ32wJd');
  var newFileId = await gsSaveData(params.fileName
    , params.content, javascriptDriveFolder);
  await gsToDropbox(newFileId, params.fileName
    , "Javascript");
}
function gsSaveToDropboxTest() {
  googleDriveFileId = gsSaveToDropbox({fileName: 'test.txt', content:'test ' + moment().format('HH:mm')})
  console.log(`5829
  googleDriveFileId|${googleDriveFileId}|
  `);
  googleDriveFileId = '1kbkyyNagOmuqMFR8W8JSPLGUXdbibbP5';
  gsCopyFileFromDriveToDropbox({fileName: 'test.txt', targetFolder:'Javascript', fileId: googleDriveFileId})
}
/* ====================== end of gsSaveToDropbox */
function gsCopyFileFromDriveToDropbox(params) { /* in development !! */
  var dropboxAccessToken =
    'sPxsxIdRTeYAAAAAAAAUO8hZ2zhcX4_uNJkjQi3mZ8O'
    + 'cOvNETh80Ygl1NM5mwp2f';
  var dropboxPath = "/" + params.targetFolder + (params.targetFolder?"/":"")
    + params.fileName;
  console.log(`0724
  dropboxPath|${dropboxPath}|
  `);
}
/* function gsRemoveFilter() ========= [gScript] */
function gsRemoveFilter(workSheet) {
  try {
    dataBaseSheet.getFilter().remove();
  } catch(e) { }  
}
/*======================== end of gsRemoveFilter */
/* gsToDropbox ===================== [functions] */
function gsToDropbox(googleDriveFileId, fileName
  , folder) {
  var dropboxAccessToken =
    'sPxsxIdRTeYAAAAAAAAUO8hZ2zhcX4_uNJkjQi3mZ8O'
    + 'cOvNETh80Ygl1NM5mwp2f'
  var dbPath = "/" + folder + (folder?"/":"")
    + fileName
  var driveFile = DriveApp.getFileById(
        googleDriveFileId);
  var parameters = {
    "path": dbPath,
    "mode": "add",
    "autorename": true,
    "mute": false
  };
  /* deletes former version ------ [gsToDropbox] */
  UrlFetchApp.fetch(
  "https://api.dropboxapi.com/2/files/delete",
    {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify({path: dbPath}),
      "headers" : {"Authorization" : "Bearer "
        + dropboxAccessToken},
      "muteHttpExceptions" : true // for debug
    }
  );
  /* uploads the new version ----- [gsToDropbox] */
  var headers = {
    "Content-Type": "application/octet-stream",
    'Authorization': 'Bearer '
      +  dropboxAccessToken,
    "Dropbox-API-Arg": JSON.stringify(parameters)
  };
  var options = {
    "method": "POST",
    "headers": headers,
    "payload": driveFile.getBlob().getBytes()
  };
  var apiUrl = "https://content.dropboxapi.com"
    + "/2/files/upload";
  var response = JSON.parse(UrlFetchApp.fetch(
    apiUrl, options).getContentText());
}
/* ========================== end of gsToDropbox */
/* gsUpdateEventsFile ============== [functions] */
async function gsUpdateEventsFile() {
  var params = {}
  gsWereInStreakAndDummies = false; /* temporary, something is not working in the set extremes dates function */
  if (gsWereInStreakAndDummies) {
    var startDateCell = SettingsSheet
      .getRange("B2");
    var endDateCell = SettingsSheet
      .getRange("B3");
    params.startDate = moment(startDateCell.getValue());
    params.endDate = moment(endDateCell.getValue());
  } 
  var events = await getEvents(params);
  if (gsWereInStreakAndDummies) {
    var extremes = await calgetGetEventsStartAndEndDates(events);
    startDateCell.setValue(extremes.startDate);
    endDateCell.setValue(extremes.endDate);
  }
  easyWrite({
    fileName:"events.json",
    fileContent: JSON.stringify(events)
  });
  return  (`4869 gsUpdateEvensFile() finished`);
}
/* =================== end of gsUpdateEventsFile */
/* ====================== end of gsSaveToDropbox */

async function getEventsAroundNow() {  
  if (executionContext == 'GScript') {
    var gsEvents = await gsGetEvents({startDate:startOfToday, endDate:endOfTomorrow, calendarId:planificationCalendarId})
    const gsEvents2 = await gsGetEvents({startDate:startOfToday, endDate:endOfTomorrow, calendarId:rendezVousCalendarId})
    const gsEvents3 = await gsGetEvents({startDate:startOfToday, endDate:endOfTomorrow, calendarId:zRendezVousCalendarId})
    gsEvents.push.apply(gsEvents, gsEvents2);
    gsEvents.push.apply(gsEvents, gsEvents3);  
    return calConvertGoogleEvents(gsEvents);
  }
}
/* calConvertGoogleEvent() ============ [GScript] */
function calConvertGoogleEvent(gsEvent) {
  var output = {
    title:gsEvent.summary,
  }
  if (typeof(gsEvent.description) != 'undefined') {
    output.notes = handleEventNotes(gsEvent.description, `${gsEvent.summary}
    ${gsEvent.htmlLink}`);
  }
  output.isAllDay = 
      gsEvent.start.hasOwnProperty('date');
  var dateFormat = (output.isAllDay)?'date':'dateTime';
  output.startDate = moment(gsEvent.start
    [dateFormat])
    .format('YYYY-MM-DDTHH:mm');
  output.endDate = moment(gsEvent.end
    [dateFormat])
    .format('YYYY-MM-DDTHH:mm');
  
  output.calendar = calendarNameFromOrganizer(gsEvent.organizer);
  output.id = gsEvent.id;
  return output;
  function calendarNameFromOrganizer(organizer) {
    calendarFromEmail = {
      "gladrange.bnf@gmail.com": "z Rendez-Vous",
      "guillaume.ladrange@gmail.com": "Rendez-Vous"
    };
    if (organizer.hasOwnProperty('displayName')) {
      return organizer.displayName;
    };
    return calendarFromEmail[organizer.email];
  }
}

async function gsConvertGoogleEventTest() {
  if (executionContext == 'GScript') {
    /* some way to get the google events */
  }
  if (executionContext == 'console' || executionContext == 'WorkFlowy')  {
    if (typeof(window.rawGoogleEvents) == 'undefined') {
      var rawGoogleEvents = await easyRead('rawGoogleEvents.json');      
    } else {
      var rawGoogleEvents = window.rawGoogleEvents;
    }
    testEvent = rawGoogleEvents[0]
    convertedEvent = calConvertGoogleEvent(rawGoogleEvents[0]);
    console.log(`0034 convertedEvent`);
    console.log(convertedEvent);

  }
  var convertedGoogleEvents = calConvertGoogleEvents(rawGoogleEvents);
  if (executionContext == 'GScript') {
    /* some way to output in GScript */
  }
  if (executionContext == 'console' || executionContext == 'WorkFlowy')  {
    /* some way to output in the console */
  }
}
function calConvertGoogleEvents(gsEvents) {
  output = [];
  for (var i = 0; i < gsEvents.length; i++) {
    var gsEvent = gsEvents[i];
    output.push(calConvertGoogleEvent(gsEvent))
  }
  return output;
}
function gsConvertGoogleEventsTest() {
  if (executionContext == 'GScript') {
    rawGoogleEvents = gsGetEvents({startDate:startOfToday, endDate: endOfTomorrow, calendarId:planificationCalendarId})
  }
  if (executionContext == 'console' || executionContext == 'WorkFlowy')  {
    /* some way to get the google events */
  }
  var convertedGoogleEvents = calConvertGoogleEvents(rawGoogleEvents);
  if (executionContext == 'GScript') {
    easyWrite({
      fileName:'convertedGoogleEvents.json', 
      fileContent:JSON.stringify(convertedGoogleEvents, null, "  ")
    })
  }
  if (executionContext == 'console' || executionContext == 'WorkFlowy')  {
    /* some way to output in the console */
  }
}

/* gsGetFolder() ===================== [gScript] */
function gsGetFolder(parentFolder, remainingPath){
  return new Promise((resolve, reject) => {
    // remainingPath = remainingPath.replace(/\\/
    //  , '/');
    if (typeof(remainingPath) == 'undefined') {
      /* we've reached the last folder */
        /* replace by the loop on the folders */
        resolve(parentFolder);
    } else {
      /* we're in an intermediary subfolder */
      var splitRemainingPath = remainingPath
        .split(/\/(.+)/);
      var newRemainingPath
        = splitRemainingPath[1];
      var newParentName
        = splitRemainingPath[0];
      gsGetFolderLoop(newParentName
        , parentFolder).then(
        parentFolder => {
            resolve(gsGetFolder(parentFolder
        , newRemainingPath))}
      )
    }
  })
}
/* gsGetFolderLoop() ================= [gScript] */
function gsGetFolderLoop(folderName
  , parentFolder) {
  return new Promise((resolve, reject) => {
    /* replace by the loop on the folders ---------
    -------------------------- [gsGetFolderLoop] */
    var childFolders = parentFolder
     .getFolders();
    var foundFolder;
    while (childFolders.hasNext()) {
      var child = childFolders.next();
      if (child.getName() == folderName) {
        foundFolder = child;
        break;
      }
    }
    resolve(foundFolder)
  })
}
/* ====================== end of gsGetFolderLoop */



/* HARVESTING STREAK AND DUMMIES =============== */
/* gsSetDummyValues() ================= [gScript] */
/* gsCommandsSheet() ================= [gScript] */
function gsCommandsSheet() {
  return thisWorkbook
    .getSheetByName('commands');
}
/* ====================== end of gsCommandsSheet */
/* gsHarvestChangesTestBattery ======= [gScript] */

var bunchOValues = [
  {'title': 'streak title'},
  "toto",
  '{"title": "streak title"}',
    `{
      "action": "deleteEvent",
      "id": "idTODelete"
    }`,
    {
      "action": "deleteEvent",
      "id": "idTODelete"
    },
    `{
      "title": "streak title"
    }`,
    `{
      "action": "createEvent",
      "title": "calendar Command Test"
    }`,
  '_{"title": "streak title"}',
  ['apples', 13],
  moment().format('HH:mm')
  ];
function gsSetDummyValues() {
  for (var row = 0; row < bunchOValues.length; row++) {
  var element = bunchOValues[row];
    gsCommandsSheet().getRange("A" + (row + 2)).setValue(element) ;
  }
}
function gsHarvestChangesTestBattery() {
  gsSetDummyValues();
  gsPrettyArrayFromRangeObjectTest();
  gsHarvestChanges();
}
/* ========== end of gsHarvestChangesTestBattery */
/* gsCommandsRange() ================= [gScript] */
function gsCommandsRange() {
  if (gsCommandsSheet().getRange("A2").getValue() 
    == "") {
    var lastR = 2;
  } else {
    var lastR = gsCommandsSheet()
      .getLastRow();
  }
  return gsCommandsSheet()
  .getRange('A2:A' + lastR);
}
/* ====================== end of gsCommandsRange */
/* JSONParsePro ==================== [functions] */
function JSONParsePro(thing) {
  var typeOfThing = typeofPro(thing);
  if (typeOfThing == 'objectAsString' || typeOfThing == 'arrayAsString') {
    var thingWithoutDash = thing.replace(/^_/, '');
    return JSON.parse(thingWithoutDash);    
  }
  return thing;
}
/* ========================= end of JSONParsePro */
/* gsHarvestChanges()  ============== [gsScript] */
function gsHarvestChanges() {  
  return new Promise (resolve => {
    launchCommands(gsPrettyArrayFromRangeObject(gsCommandsRange().getValues()));
    gsCommandsRange().clearContent();
    resolve(`4688 gsHarvestChanges finished`);
  })
};
/* ===================== end of gsHarvestChanges */
/* gsListFiles() ===================== [gScript] */
function gsListFiles(curFolder){
  var files = curFolder.getFiles();
  var data, files, sheet = DriveSheet;
  var output = [];
  while (files.hasNext()) {
    var file = files.next();
    data = [
      file.getName(),
      file.getDateCreated(),
      file.getSize(),
      file.getUrl(),
      "https://docs.google.com/uc?export="
      + "download&confirm=no_antivirus&id="
      + file.getId(),
      file.getDescription(),
      file.getMimeType().toString()
    ];
    output.push(data);
    // sheet.appendRow(data);
  }
  easyLog(output, 'Docs Drive');
}
/* ===================== end of list gsListFiles */
/* gsPrettyArrayFromRangeObject() === [gsScript] */
function gsPrettyArrayFromRangeObject(weirdSheetsValuesObject) {
  output = [];
  weirdSheetsValuesObject.forEach(weirdRow => {
    if (typeofPro(weirdRow) == 'array') {
      weirdRow.forEach(weirdCell => {
        if (typeofPro(weirdCell) == 'arrayAsString') {
          output = output.concat(JSONParsePro(weirdCell));
        }
        else 
        {
           if (JSONParsePro(weirdCell) != '') {
            output.push(JSONParsePro(weirdCell));
          }
        }
      })
    }
  })
  return output;
}
function gsPrettyArrayFromRangeObjectTest(){
  var displayString = (`8065
    gsPrettyArrayFromRangeObject(gsCommandsRange().getValues())|${gsPrettyArrayFromRangeObject(gsCommandsRange().getValues())}|
    gsPrettyArrayFromRangeObject(gsCommandsRange().getValues()) |${JSON.stringify(gsPrettyArrayFromRangeObject(gsCommandsRange().getValues()), null, "  ")}|
  `);
  console.log(`8826
  displayString|${displayString}|
  `);
  
}
/* ========= end of gsPrettyArrayFromRangeObject */
/* gsSaveData ======================== [gScript] */
function gsSaveData(fileName, content, myFolder) {
  return new Promise((resolve, reject) => {
    if (myFolder === undefined) {
      myFolder = DriveApp
      .getFolderById(
      '1jLjaXgHtRoXCRuitmgzNnK-9yAQ32wJd');
      throw new Error(`myLib.js gsSaveData():
        myFolder is not defined`);
    }
    if (fileName === undefined) {
      throw new Error(`myLib.js gsSaveData():`
        + `fileName is not defined`);
    }
    if (content === undefined) {
      throw new Error(`myLib.js gsSaveData():`
        + ` content is not defined`);
    }
    allFiles = myFolder.getFilesByName(fileName);
    while (allFiles.hasNext()) {
      var curFile = allFiles.next();
      curFile.setTrashed(true);
    }
    resolve(
      myFolder.createFile(fileName, content)
      .getId()
    );
  })
}
/* =========================== end of gsSaveData */
  
/* GSCRIPT END ===================== GSCRIPT END */

/* ============================================= */
/*                 SCRIPTABLE                    */
/* ============================================= */
/* scGetEvents() ================== [scriptable] */
function scGetEvents(params) {
  return new Promise(resolve => {
    if (executionContext == 'Scriptable') {
      /* forEventsByTitle doesn't seem to handle ----
      the new promise syntax ------- [scGetEvents] */
      Calendar.forEventsByTitle('Planification')
      .then(cal =>{
        CalendarEvent.between(
          new Date(moment(params.startDate))
          , new Date(moment(params.endDate))
          , [cal]).then(events => {
          resolve(events);
        })
      })
    }
    if (executionContext == 'console' || executionContext == 'WorkFlowy') {
      easyRead('rawScEvents.json').then(
      resolve)
    }
  })
}
/* ========================== end of scGetEvents */

function convertScEvents(events) {
  events.forEach(event => {
    event.id = event.identifier;
    if (event.hasOwnProperty('notes')) {
      event.notes = handleEventNotes(event.notes);
    }
  });
  return events;
}
/* ========================== end of scGetEvents */
/* scGetFileOld() ================== [functions] */
function scGetFileOld(fileName) {
  return new Promise(resolve => {
    var fm = FileManager.iCloud();
    var jsPath = fm
      .joinPath(fm.documentsDirectory()
      , fileName);
    fm.downloadFileFromiCloud(jsPath)
      .then(answer => {
      var dummy = answer;
      resolve(fm.readString(jsPath));
    }, e => {
      throw("error 812 " + e);
    });
  });
}
/* ========================= end of scGetFileOld */
/* scGetFile() ===================== [functions] */
function scGetFile(fileName){
  return new Promise((resolve, reject) => {
    var fm = FileManager.iCloud();
    var jsPath = fm.bookmarkedPath(fileName);
    resolve(fm.readString(jsPath));
  })
}
/* ============================ end of scGetFile */
/* scSaveFile() ==================== [functions] */
function scSaveFile(fileName, content) {
  var fm = FileManager.iCloud();
  var jsPath = fm.bookmarkedPath(fileName);
  fm.writeString(jsPath, content);
}
/* =========================== end of scSaveFile */

/* ============================================= */
/*                  WORKFLOWY                    */
/* ============================================= */
/* wfAddButton ===================== [WorkFlowy] */
function wfAddButton(text, onclick, leftPos, topPos
  , cssObj) {
  topPos = topPos || "5%"
  cssObj = cssObj || {
      position: 'absolute',
      background: 'gold',
      top:topPos,
      left:leftPos,
      'font-size': '1rem',
      'font-family': "Courier",
      'z-index': 3,
      'font-weight': 700,
      border:0,
      'background-color':'transparent'
  }
  let button = document.createElement('button')
   , btnStyle = button.style;
  document.body.appendChild(button);
  button.innerHTML = text;
  button.onclick = onclick;
  button.id = text;
  Object.keys(cssObj).forEach(
    key => {btnStyle[key] = cssObj[key]
  });
  return button;
}
/* ========================== end of wfAddButton */
/* wfAddButtons ==================== [WorkFlowy] */
function wfAddButtons() {
  var buttonList = [];
  wfAddButton('tagCounter', smartWorkFlowy,
    '30%');
  wfAddButton('randomBullet', wfCollapse, '40%');
  wfAddButton('lookUp', wfLookUp, '50%');
  wfAddButton('mark as finished', wfRecycleLaunch,
    '60%');
  wfAddButton('timer',
    wfMarkAsFinishedButton,
    '80%');
  var vOffset = 8;
  var buttonArray =
  `quickInbox`
    .split('\n');
  for (var i = 0; i < buttonArray.length; i++) {
    var functionName = buttonArray[i];
    if (functionName == '') {
      continue;
    }
    var curFunc = 'wf' +
      strSpacesToCaps(functionName);
    wfAddButton(functionName, eval(curFunc),
      '85%', vOffset + '%');
    vOffset = vOffset + 3;
  }
  /* end of the loop on the buttons ---------------
  ------------------------------- [wfAddButtons] */
}
/* ========================= end of wfAddButtons */
/* wfAddDummies ==================== [WorkFlowy] */
function wfAddDummies() {
  if (executionContext != "WorkFlowy") {
    return;
  }
  wfUpdateEventLists();
  nextActs.forEach(act => {
    var isInWf = false;
    var activity = act.notes.Série;
    if (todayByAct.hasOwnProperty(activity)) {
      todayByAct[activity].forEach(wfDummy => {
      if (typeof(act.notes.progress)
        == 'undefined') {
        actProgress = "";
      } else {
        actProgress = act.notes.progress
      }
      if (actProgress == wfDummy.progress
        && moment(wfDummy.date, wfTodayDateFormat)
        .diff(act.startDate) == 0) {
        isInWf = true;
      }
    })
    } else {
      isInWf = false;
    }
    if (!isInWf) {
      console.log(`576 [wfAddDummies]
        adding the following act in Later
        ${wfFormatEvent(act)}
      `);
      var newEvent = WF.createItem(wfLater
        , wfLater.getChildren().length);
      WF.setItemName(newEvent, wfFormatEvent(act));
    }
  });
}
/* ========================= end of wfAddDummies */
/* wfReactToEvent ================== [WorkFlowy] */
async function wfReactToEvent(event) {
  wfLaunchUpdates(event);
  if (event == 'locationChanged'
      && carrefourResetDom == true) {
    carrefourResetDom = false;
    setTimeout(() => {
      document
        .querySelectorAll(".content")[2]
        .focus();
      document
        .querySelectorAll(".content")[2]
        .focus();
      document
        .querySelectorAll(".content")[2]
        .focus();
      document
        .querySelectorAll(".content")[2]
        .focus();
    }, 500);
  }
  if (event == 'locationChanged') {
    WF.hideMessage();
    /* wfMarkAsDone --------- [wfReactToEvent] */
    var curName = WF.currentItem().getName();
    var match =
      /Marking "(.*)" as done.../gm
      .exec(curName);
    if (match != null) {
      var curNote = WF.currentItem()
        .getNote();
      var markAsDoneArgs
        = {'activity':match[1]};
      if (curNote != '') {
        markAsDoneArgs.progress = curNote;
      }
      wfShowMessage('marking as done');
      try {
        markAsDone(markAsDoneArgs);
      } catch(e) {
        WF.showAlertDialog(e);
      }
    }
  }
  if (event == 'operation--delete'
    || event == 'moved'
    || event == 'locationChanged') {
    wfRelaunchSearch(event);
  }
  /* triggers wfTodayMegaLauncher -------------
  --------------------------- [wfReactToEvent] */
  if (event == 'moved'
    || event == 'operation--create'
    || event == 'operation--operation-edit'
    || event == 'operation--delete'
    || event == 'operation--complete') {
    wfCurItemUpdate();
    if (wfCurItem.getName()
      .match(/(Home|Today)/img) != null) {
      wfTodayMegaLauncher(event);
    } else {
      if (wfCurItem.getAncestors()
        .length > 1 && wfCurItem.getAncestors()
        .length < 4) {
        if (wfCurItem.getAncestors()[1]
          .getName().match(/(Home|Today)/img)
          != null) {
          wfTodayMegaLauncher(event);
        }
      }
    }
  }
  /* auto name ideas ---------- [wfReactToEvent] */
  if (event == 'operation--create') {
    wfCurItemUpdate();
    /* new node is a child of "current ideas"
    /* ------------------------ [wfReactToEvent] */
    if (wfCurItem.getParent().getName()
      .match(/C\d{3}-C\d{3}/) != null) {
      var toBeChecked = wfCurItem
        .getChildren();
      if (wfCurItem.getAncestors().length
        == 6) {
        toBeChecked = toBeChecked.concat(
          wfCurItem.getAncestors()[5]
          .getChildren());
      }
      toBeChecked.forEach(curItem => {
        if (curItem.getName() === '') {
          WF.setItemName(curItem
            , moment()
            .format("IYYYYMMDDHHmmss"));
        }
      })
    }
  }
  saveSetting({doNotScan:false, line:4939});
}
/* ======================= end of wfReactToEvent */
/* wfAddEventListener ============== [WorkFlowy] */
function wfAddEventListener() {
  document.addEventListener("mousedown"
    , wfReactToEvent('mousedown'));
  window.WFEventListener = event => wfReactToEvent(event)
}
/* end of wfEventListener ========== [WorkFlowy] */
/* addTagCategories ================ [WorkFlowy] */
/* very manual for the time being                */
function addTagCategories() {
  WF.currentItem().getVisibleChildren().forEach(
    curItem => {
    curItem.getVisibleChildren()
      .forEach(curItem2 => {
      WF.setItemNote(curItem2, curItem2.getNote() + `
Emploi etc. : #
Genre : #
Qualité : #`)
    })
  })
}
/* ===================== end of addTagCategories */
/* wfBigSearchField ================ [WorkFlowy] */
function wfBigSearchField() {
  const style = `#inputBx{
    width:90%;height:80px;display:block;
    margin-top:5px;border:1px solid #ccc
    ;border-radius:4px;padding:4px
    }
    .btnX{
      font-size:18px;
      background-color:#49baf2;
      border:2px solid;
      border-radius:20px;
      color:#fff;
      padding:5px 15px;
      margin-top:16px;
      margin-right:16px
    }.btnX:focus{border-color:#c4c4c4}`;
  const box
  = `<p><textarea id="inputBx" type="text" spellcheck="false">${
  WF
    .currentSearchQuery()}</textarea></p>`;
  const buttons = `<div><button type="button" class="btnX" id="btn1">`
  + `OK</button></div>`;
  WF.showAlertDialog(`<style>${
    htmlEscapeText(style)}</style>${
    box}${buttons}`);
  setTimeout(function () {
    let userInput;
    const inputBx = document
      .getElementById("inputBx");
    const btn1 = document
      .getElementById("btn1");
    inputBx.select();
    inputBx.addEventListener("keyup",
      function (event) {
      if (event.key == "Enter") {
        btn1.click();
      }
    });
    btn1.onclick = function () {
      userInput = inputBx.value;
      WF.hideDialog();
      setTimeout(function () {
        wfSendNewSearch(userInput)
      }, 50);
    };
  }, 100);
}
/* ===================== end of wfBigSearchField */
/* wfInitializeNamedItems() ======== [WorkFlowy] */
function wfInitializeNamedItems() {
  todayItem = WF.getItemById(
    '35d61fcb-8663-21c4-b7e5-f5591c1004f6');
  wfLater
    = wfGetChildByName("Later", todayItem);
  wfShelved
    = wfGetChildByName(
    "> Shelved and routines", todayItem);
  wfRecycleBin = WF.getItemById(
    "f0457c2a-b195-1b7e-5881-dfb6e6111071");
      doneTodayItem
        = wfGetChildByName("Done today"
        , todayItem);
}
/* =============== end of wfInitializeNamedItems */
/* wfUpdateEventLists ============== [WorkFlowy] */
function wfUpdateEventLists() {
  /* resets variables ----- [wfUpdateEventLists] */
  /* allTodayItems is the list of wf items --------
  ------------------------- [wfUpdateEventLists] */
  allTodayItems = [];
  wfAllTodayEvents = [];
  doneTodayAsString = "";
  laterDummies = [];
  hourItems = [];
  realHourItems = [];
  realHourWfItems = [];
  todayByAct = {};
  wfInitializeNamedItems();
  /* initializes named items ----------------------
  ------------------------- [wfUpdateEventLists] */
  /* get the hours collection ---------------------
  ------------------------- [wfUpdateEventLists] */
  wfUpdateRealHoursCollection();
  /* loops on the hours ---------------------------
  ------------------------- [wfUpdateEventLists] */
  for (var i = 0; i < hourItems.length; i++) {
    var hourItem = hourItems[i];
    var isLater = hourItem.getName()
      .includes("Later")
    var activities = hourItem.getChildren();
    /* forward loop on the hours ------------------
    ----------------------- [wfUpdateEventLists] */
    for (var j = 0; j < activities.length
      ; j++) {
      var actItem = activities[j];
      /* populates todayByAct ------------------ */
      /* -------------- [ forward loop on hours] */
      var event = wfEventFromItem(actItem);
      if (typeof(event) == 'undefined') {
        continue;
      }
      if (!todayByAct
        .hasOwnProperty(event.activity)) {
        todayByAct[event.activity] = [];
      }
      allTodayItems.push(actItem);
      wfAllTodayEvents.push(
        wfEventFromItem(actItem));
      todayByAct[event.activity]
        .push(event);
      if (isLater) {
        laterDummies.push(event);
      }
    }
  }
  /* builds doneTodayAsString ---------------------
  ------------------------- [wfUpdateEventLists] */
  window.doneTodayColl.forEach(streak => {
    doneTodayAsString = `${doneTodayAsString
      }|${streakShortName(streak.title)
      }${moment(streak.startDate)
      .format(wfTodayDateFormat)}|`;
  });
}
/* =================== end of wfUpdateEventLists */
/* wfMarkAsDone ==================== [WorkFlowy] */
function wfMarkAsDone(curItem) {
  /* initializes variables ------ [wfMarkAsDone] */
  var curItemName;
  var newItemName;
  if (typeof(curItem) == 'string') {
    curItemName = curItem;
  }
  var event = wfEventFromItem(curItem);
  var activity = event.activity;
  var activityDic = activitiesDic[activity];
  var spliceCount = activityDic.spliceCount;
  var wfEventReg = event.wfEventReg;
  var progress = event.progress;
  var newDate = moment(event.startDate);
  /* recycles ------------------- [wfMarkAsDone] */
  wfRecycle(curItem);
  /* builds newName ------------- [wfMarkAsDone] */
  if (progress + 1 > spliceCount) {
    console.log('increments date')
    newDate = newDate.add(1, 'd') ;
    progress = 1;
  } else {
    progress = progress + 1;
  }
  newDate = newDate.format(wfTodayDateFormat);
  try {
    newItemName = `${
      wfEventReg[1]
      }${
      progress
      }${
      wfEventReg[3]
      }${
      newDate
      }${
      wfEventReg[9]
      }${
      wfEventReg[10]
      }${
      wfEventReg[11]
    }`;
  } catch(e) {
    console.log(`206
    e|${e}|
    curItemName|${curItemName}|
    `);
    console.log(curItem);
  }
  console.log(`196
    event|${event}|
    event.progress|${event.progress}|
    spliceCount|${spliceCount}|
    newItemName|${newItemName}|
    progress|${progress}|
    newDate|${newDate}|
  `);
  console.log(event);
  /* stops here for the time being ----------------
  ------------------------------- [wfMarkAsDone] */
  return;
  if (typeof(curItem) == 'undefined') {
    return;
  }
  if (typeof(doneTodayColl) == 'undefined') {
    console.log(`873
      typeof(doneTodayColl)|${
      typeof(doneTodayColl)}|
    `);
    return;
  }
  events.push(streakObject({activity:"Social"}));
  console.log('events[events.length - 1]');
  console.log(events[events.length - 1]);
  console.log('events[events.length - 2]');
  console.log(events[events.length - 2]);
  splitEvents(events).then(seOutput => {
    console.log('5043 seOutput');
    console.log(seOutput);
    console.log('5045 seOutput.doneTodayColl');
    console.log(seOutput.doneTodayColl);
  })
}
/* ========================= end of wfMarkAsDone */
/* wfSetActRank() ================== [WorkFlowy] */
function wfSetActRank(activity, rankToSet) {
  WF.setItemNote(activity, rankToSet);
}
/* ========================= end of wfSetActRank */
/* wfExpandHours() ================= [WorkFlowy] */
function wfExpandHours() {
  wfUpdateRealHoursCollection();
  realHourWfItems.forEach(hourItem => {
    if (!hourItem.isExpanded() && hourItem
      .getChildren().length > 0) {
      console.log(`119 [wfExpandHours]
        expanding
        hourItemName|${hourItem.getName()}|
      `);
      WF.expandItem(hourItem);
    }
  })
}
/* ======================== end of wfExpandHours */
/* wfSwapInconsistantItems ========= [WorkFlowy] */
function wfSwapInconsistantItems(eventName) {
  /* resolves true if everything's OK and the
  name of the correction if a correction was made
  -------------------- [wfSwapInconsistantItems] */
  return new Promise(resolve => {
    var debug = true;
    var mirrorInserted = [];
    wfUpdateEventLists();
    /* loops on the hours -------------------------
    ------------------ [wfSwapInconsistantItems] */
    for (var i = 0; i < hourItems.length; i++) {
      var hourItem = hourItems[i];
      var hourItemName
        = strClean(hourItem.getName());
      var activities = hourItem.getChildren();
      var actCount = activities.length;
      /* deletes empty and outdated hours ---------
      ---------------- [wfSwapInconsistantItems] */
      if (actCount == 0 && remainingActivities
        (hourItemName) == 0) {
        var myReg = hourItemName
          .match(/(\d{2}):\d{2}/);
        if (myReg != null) {
          var itemHour = parseInt(myReg[1]);
          var startHour = parseInt(moment()
            .format('HH')) + 1;
          if (startHour > 21) {
            startHour = 9;
          }
          if (itemHour < startHour) {
            wfDeleteItem(hourItem
              , `229 [wfSwapInconsistantItems]
              deleting hour item
              hourItem.getName()|${
              hourItem.getName()}|
              itemHour|${itemHour}|
            `);
            /* no need to relaunch here, as it ----
            has no consequence on the dummies -----
            ---------- [wfSwapInconsistantItems] */
          }
        }
      }
      /* end of the backwards loop on the actItems
       of each hour -- [wfSwapInconsistantItems] */
      /* forward loop on the hours ----------------
      ---------------- [wfSwapInconsistantItems] */
      for (var j = 0; j < activities.length
        ; j++) {
        var actItem = activities[j];
        var event = wfEventFromItem(actItem);
        if (typeof(event) == 'undefined') {
          continue;
        }
        /* inserts mirrors --------------------- */
        /* [wfSwapInconsistantItems: fwd loop on --
        hours] --------------------------------- */
        if (eventName == 'moved') {
          continue;
        }
        var mirrorID = activitiesDic[
          event.activity].wfMirrorId;
        if (actItem.getId() == mirrorID) {
          mirrorInserted.push(event.activity);
          continue;
        }
        if (!mirrorInserted.includes(event.activity)
          && actItem.getChildren().length == 0) {
          mirrorInserted.push(event.activity);
          var mirrorItem = WF.getItemById(
            activitiesDic[event.activity
            ].wfMirrorId);
          if (streakSerie(actItem.getName()) ==
          streakSerie(mirrorItem.getName())) {
            console.log(
              `365 swapping [wfSwapInconsistantItems]
              actItem.getName()|${
              actItem.getName()}|
              actItem.getParent().getName()|${
              actItem.getParent().getName()}|
              event.activity|${event.activity}|
              mirrorItem.getName()|${
              strRemoveTags(mirrorItem
              .getName())}|
            `);
            wfSwapItems(actItem, mirrorItem);
            resolve(`swapping`);
            return;
          }
          /* end of actItem isn't pinned */
        }
        /* end of mirror wasn't already added */
      /* end of the loop on actItems --------------
      ---------------- [wfSwapInconsistantItems] */
      }
    }
    /* end of the loop on the hours --------------
    ------------------ [wfSwapInconsistantItems] */
    var todayByActKeys = Object.keys(todayByAct);
    /* swaps inconsistent acts ----------------- */
    /* --------------- [wfSwapInconsistantItems] */
    for (var m = 0; m < todayByActKeys.length
      ; m++) {
      var curActDummies =
        todayByAct[todayByActKeys[m]];
      curActDummies.sort((a, b) =>
        (a.order > b.order) ? 1 : -1);
      for (var n = 1; n < curActDummies.length
        ; n++){
        var item1 = WF.getItemById(
          curActDummies[n-1].wfId);
        var item2 = WF.getItemById(
          curActDummies[n].wfId);
        var dateDiff = moment(curActDummies[n].date
          , wfTodayDateFormat).diff(
          moment(curActDummies[n-1].date
          , wfTodayDateFormat), 'd');
        var swapActivities = (dateDiff < 0 &&
          curActDummies[n].progress
          == curActDummies[n-1].progress &&
          curActDummies[n].order
          != curActDummies[n-1].order
        );
        var swapSubActivities = (dateDiff == 0)
          && (curActDummies[n].progress <
          curActDummies[n-1].progress
        );
        swapSubActivities = false;
        if (swapActivities || swapSubActivities) {
          try {
            item1.getName()
            item2.getName()
          } catch (e) {
            console.log(`270
            e ${e}
            curActDummies[n-1].wfId|${
              curActDummies[n-1].wfId}|
            curActDummies[n].wfId|${
              curActDummies[n].wfId}|
            todayByActKeys[m]|${
              todayByActKeys[m]}|
            swapActivities|${
              swapActivities}|
            `);
          }
          var date1 = wfEventFromItem(item1).date;
          var date2 = wfEventFromItem(item2).date;
          var newName1 = strChangeDate(
            item1.getName(), date2);
          var newName2 = strChangeDate(
            item2.getName(), date1);
          item1.getParent().getName();
          console.log(`256 [wfSwapInconsistantItems]
            swapping dates
            newName1|${newName1}|
            item1.getParent().getName()|${
              item1.getParent().getName()}|
            newName2|${newName2}|
            item2.getParent().getName()|${
              item2.getParent().getName()}|
          `);
          WF.setItemName(item1, newName1);
          WF.setItemName(item2, newName2);
          resolve( ` swapping dates`);
          return;
        }
        /* end of the loop in one act -------------
        -------------- [wfSwapInconsistantItems] */
      }
      /* loops on individual activities */
    }
    /* end of swaps inconsistent acts ---------- */
    /* defaults promise to true -------------------
    ------------------ [wfSwapInconsistantItems] */
    resolve(true);
  })
  /* end of return new Promise --------------------
  -------------------- [wfSwapInconsistantItems] */
}
/* ============== end of wfSwapInconsistantItems */
// DOM 2 Events
var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};
/* wfTodayMegaLauncher() =========== [WorkFlowy] */
async function wfTodayMegaLauncher(eventName) {
  if (executionContext != 'WorkFlowy') {
    return;
  }
  /* gets value of doNotScan ----------------------
  ------------------------ [wfTodayMegaLauncher] */
  var doNotScan = await getSetting('doNotScan');
  if (typeof(doNotScan) == 'undefined') {
    doNotScan = false;
  }
  /* exit if events are not loaded ----------------
  ------------------------ [wfTodayMegaLauncher] */
  if (typeof(doneTodayColl) == 'undefined') {
    return;
  }
  if (doNotScan == false
    || eventName == 'forced') {
    saveSetting({doNotScan:true, line:4967});
    if (miniPc && false) {
    /* simulates a click - [wfTodayMegaLauncher] -
    simulate click */
      dispatchMouseEvent(element, 'mouseover', true, true);
      dispatchMouseEvent(element, 'mousedown', true, true);
      dispatchMouseEvent(element, 'click', true, true);
      dispatchMouseEvent(element, 'mouseup', true, true);
    }
    /* initializes the items ----------------------
    ---------------------- [wfTodayMegaLauncher] */
    wfUpdateEventLists();
    /* launches the functions ---------------------
    ---------------------- [wfTodayMegaLauncher] */
    if (typeof(miniPc) != 'undefined') {
      if (miniPc) {
        await wfAddMissingHours();
        await wfCheckHoursOrder();
      }
    }
    await wfBringStrandedToTop();
    await wfTodayHandleCompleted();
    var keepChecking = true;
    await wfDeleteDoneItems();
    await wfDeleteExcessDummies();
    wfTodayRecycle();
    await wfCheckMirrorNames();
    await wfDeleteDuplicates();
    await wfSwapInconsistantItems(eventName);
    wfUpdateDoneToday();
    wfAddDummies();
    await wfApplyRuleOfThree({verbose: false});
    await wfCorrectPinnedItems(eventName);
    if (!miniPc) {
      wfExpandHours();
    }
    if (miniPc) {
      await wfSortLater();
      await wfLazyLoadLater();
      await wfKillCopyTags(todayItem);
    }
    saveSetting({doNotScan:false, line:4987});
  }
  /* end of doNotScan is false --------------------
  ------------------------ [wfTodayMegaLauncher] */
}
/* ================== end of wfTodayMegaLauncher */
/* wfApplyRuleOfThree() ============ [WorkFlowy] */
function wfApplyRuleOfThree(params) {
  var verbose;
  return new Promise(resolve => {
    /* initializes variables ----------------------
    ----------------------- [wfApplyRuleOfThree] */
    if (typeof(params) == 'undefined') {
      params = {verbose:false}
    }
    verbose = params.verbose;
    hourItems = [];
    /* ------------------ end of initializes params
    ----------------------- [wfApplyRuleOfThree] */
    todayItem.getChildren().forEach(curItem => {
      if (curItem.getName().match(
        /(Done today)/img) == null) {
      hourItems.push(curItem);
      }
    });
    var relaunch = true;
    while (relaunch) {
      relaunch = false;
      for (var i = 0; i < hourItems.length; i++) {
        var hourItem = hourItems[i];
        /* make it so that every hour has 3 -------
        activities -------- [wfApplyRuleOfThree] */
        if (hourItem.getChildren().length != 3
          && hourItem.getName().match(
          /\d{2}:\d{2}(?!\s)/img) != null) {
          /* pulling ------ [wfApplyRuleOfThree] */
          var targetRank = 0;
          if (hourItem.getChildren().length < 3) {
            /* i > 0: do not fill the first hour of
            the day ------- [wfApplyRuleOfThree] */
            if (i > 0) {
              pullInHour(hourItem);
            }
          }
          /* there are too many activities --------
          ----------------- [wfApplyRuleOfThree] */
          var numberOfItemsToMove = hourItem
            .getChildren().length - 3;
          if (numberOfItemsToMove > 0) {
            var itemsToMove = [];
            /* finds the item to push -------------
            --------------- [wfApplyRuleOfThree] */
            for (var k = hourItem.getChildren()
              .length - 1; k >= 0; k--) {
              if (typeof(wfGetActRank(hourItem
                .getChildren()[k]))
                == 'undefined') {
                if (itemsToMove.length
                  < numberOfItemsToMove) {
                  itemsToMove.unshift(hourItem
                    .getChildren()[k]);
                }
              }
            }
            /* if some activities are pinned, -----
            complete itemsToMove ------------------
            --------------- [wfApplyRuleOfThree] */
            for (var j = hourItem.getChildren()
              .length - numberOfItemsToMove
              + itemsToMove.length
              ; j < hourItem.getChildren().length;
              j++) {
              itemsToMove.push(hourItem
                .getChildren()[j]);
            }
            /* does the pushing -------------------
            --------------- [wfApplyRuleOfThree] */
            var itemToMoveTitles = '';
            itemsToMove.forEach(itemToMove => {
              itemToMoveTitles = `${
              itemToMoveTitles}
              ${strStripHtmlTags(itemToMove
              .getName())}`
            });
            if (verbose) {
              console.log(
                `1969 pushing  [wfApplyRuleOfThree]
                itemsToMove.length${
                itemsToMove.length}| items
                itemToMoveTitles|${
                itemToMoveTitles}|
                from ${hourItem.getName()}
                into ${hourItems[i + 1].getName()}
                hourItem.getChildren().length|${
                hourItem.getChildren().length}|
              `);
            }
            WF.moveItems(itemsToMove
              , hourItems[i + 1] , 0);
            relaunch = true;
            relaunch = false;
          }
          /* end of there are too many activities -
          ----------------- [wfApplyRuleOfThree] */
        }
        /* end of item is under the 13:00 format --
        and number of acts is not 3 ---------------
        ------------------- [wfApplyRuleOfThree] */
      }
      /* end of the loop on the hours -------------
      --------------------- [wfApplyRuleOfThree] */
    }
    /* end of the while loop ----------------------
    ----------------------- [wfApplyRuleOfThree] */
    resolve(`wfApplyRuleOfThree finished`);
    /* pullInHour() helper function ---------------
    ----------------------- [wfApplyRuleOfThree] */
    function pullInHour(hourItem) {
      /* finds the activity to pull ---------------
      --------- [pullInHour: wfApplyRuleOfThree] */
      var itemToMove;
      var found = false;
      /* loops on the subsequent hours ------------
      --------- [pullInHour: wfApplyRuleOfThree] */
      for (var l = hourItem.getPriority(); l <
        hourItems.length; l++) {
        /* excludes 'Shelved' hour item -----------
        ------- [pullInHour: wfApplyRuleOfThree] */
        if (hourItems[l].getName()
          .includes('helved')) {
          continue;
        }
        var nextHourChildren =
          hourItems[l].getChildren();
        /* loops on the activities of the hour ----
        ------- [pullInHour: wfApplyRuleOfThree] */
        for (var k = 0; k < nextHourChildren
          .length; k++) {
          if (typeof(wfGetActRank(
            nextHourChildren[k])) == 'undefined') {
            itemToMove = nextHourChildren[k];
            found = true;
            break;
          }
        }
        /* loop on the hour items -----------------
        ------ [pullInHour() wfApplyRuleOfThree] */
        if (found) {
          break;
        }
      }
      /* loop on the hours ------------------------
      -------- [pullInHour() wfApplyRuleOfThree] */
      /* end of finds the activity to pull */
      if (found) {
        if (verbose) {
          console.log(
          `069 pulling  [wfApplyRuleOfThree]
          nextHourChildren[k]|${itemToMove
          .getName()}|
          from ${itemToMove.getParent()
          .getName()}
          into ${hourItems[i].getName()}
          `);
        }
        WF.moveItems([itemToMove]
          , hourItems[i], 3);
        relaunch = true;
      } else {
        console.log(`070 [wfApplyRuleOfThree]
          not enough dummies
        `);
        relaunch = false;
        resolve(
          `wfApplyRuleOfThree stopped,
          not enough dummies`
        );
      }
      /* end of if no activity was found ----------
      -------- [pullInHour() wfApplyRuleOfThree] */
    }
    /* end of pullInHour() helper function --------
    ----------------------- [wfApplyRuleOfThree] */
  })
  /* end of return promise  [wfApplyRuleOfThree] */
}
/* =================== end of wfApplyRuleOfThree */
/* wfCheckMirrorNames() ============ [WorkFlowy] */
function wfCheckMirrorNames() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    /* check the mirror names ---------------------
    ----------------------- [wfCheckMirrorNames] */
    for (var i = 0; i < Object.keys(activitiesDic)
      .length; i++) {
      var activity = Object.keys(activitiesDic)[i];
      if (activitiesDic[activity]
        .type == "streak") {
        var curMirrorId =
          activitiesDic[activity].wfMirrorId;
        var wfMirror = WF.getItemById(curMirrorId);
        try {
          var oldMirrorName = wfMirror.getName();
        } catch(e) {
          console.log(`171
          could not find miror for
          activity|${activity}|
          curMirrorId|${curMirrorId}|
          because
          e|${e}|
          `);
          continue;
        }
        var newMirrorName = oldMirrorName;
        var restoredMirrorName = 
            `<a href="scriptable:///`
            + `run?scriptName=`
            + `launch&activity=${
            activity}">${
            activitiesDic[activity].emoji
            }</a> <b>` +
            `<a href="https://workflowy.com/#/${
            curMirrorId.slice(-12)}?q=%23d%20">${
            streakShortName(activity)
            }</a></b> 01/01/2020 ` +
            `<a href="scriptable:///` +
            `run?scriptName=markAsDone&activity=${
            activity}">✅</a>`
            + `<a href="https://www.google.com">`
            + `☑</a>`;
        if (!newMirrorName
          .includes('scriptName=launch')) {
          newMirrorName =
            restoredMirrorName;
        }
        /* no nextAct was found -------------------
        ------------------- [wfCheckMirrorNames] */
        try {
          newMirrorName = strChangeDate(
            newMirrorName
            , moment(nextActsByAct[activity][0]
            .startDate).format(wfTodayDateFormat));
        } catch(e) {
          console.log(`6428
          activity|${activity}|
          6653 nextActsByAct`);
          console.log(nextActsByAct);
          console.error(e);
        }
        if (oldMirrorName != newMirrorName) {
          console.log(`172 renaming mirror
            oldMirrorName|${
            strStripHtmlTags(oldMirrorName)}|
            newMirrorName|${
            strStripHtmlTags(newMirrorName)}|
            activity|${activity}|
            activitiesDic[activity].wfMirrorId|${
            activitiesDic[activity].wfMirrorId}|
          `);
          WF.setItemName(wfMirror, newMirrorName);
          resolve(`renaming mirror`);
          return;
        }
      }
    };
    /* defaults promise to true -------------------
    ----------------------- [wfCheckMirrorNames] */
    resolve(true);
  })
}
/* =================== end of wfCheckMirrorNames */
/* wfCheckHoursOrder() ============= [WorkFlowy] */
async function wfCheckHoursOrder() {
  await wfUpdateEventLists();
  return new Promise(resolve => {
    var problem = true;
    while (problem) {
      wfUpdateRealHoursCollection();
      /* loop on the hours - [wfCheckHoursOrder] */
      for (var i = 0
        ; i < realHourWfItems.length - 1; i++) {
        var curHour = realHourWfItems[i];
        var nextHour = realHourWfItems[i + 1];
        problem = (((curHour.getPriority()
          - nextHour.getPriority()) *
          moment(curHour.getName(), "HH:mm").diff(
          moment(nextHour.getName(), "HH:mm")
            , "m")) < 0) ;
          if (false) {
            console.log(`514
            curHour.getName()|${curHour.getName()}|
            nextHour.getName()|${
              nextHour.getName()}|
            curHour.getPriority() |${
              curHour.getPriority() }|
            nextHour.getPriority()|${
              nextHour.getPriority()}|
            moment(curHour.getName(), "HH:mm")|${
              moment(curHour.getName(), "HH:mm")}|
            moment(curHour.getName(), "HH:mm")
            .diff(
            moment(nextHour.getName(), "HH:mm")
            , "m")|${
            moment(curHour.getName(), "HH:mm")
            .diff(
            moment(nextHour.getName(), "HH:mm")
            , "m")}|
            problem|${problem}|
          `);
        }
        if (problem) {
          nextHour.getName();
          console.log(`077 [wfCheckHoursOrder]
            moving up
            nextHour.getName()|${nextHour
            .getName()}|
          `);
          WF.moveItems([nextHour], nextHour
            .getParent()
            , nextHour.getPriority() - 1);
          problem = true;
          break;
        }
      }
      /* end of the loop on the hours -------------
      ---------------------- [wfCheckHoursOrder] */
    }
    /* end of the while loop  [wfCheckHoursOrder] */
    resolve ('wfCheckHoursOrder finished');
  })
}
/* ==================== end of wfCheckHoursOrder */
/* wfCheckName() =================== [WorkFlowy] */
function wfCheckName(newName, itemToCheck,
  debugInfo) {
  if (typeof(itemToCheck) == 'undefined') {
    itemToCheck = wfCurItem;
  }
  if (strClean(itemToCheck.getName())
    != strClean(newName)) {
    WF.setItemName(itemToCheck, strClean(newName));
	return true;
  } else return false;
}
/* ========================== end of wfCheckName */
/* wfCheckNote() =================== [WorkFlowy] */
function wfCheckNote(newNote, itemToCheck) {
  if (typeof(itemToCheck) == 'undefined') {
    itemToCheck = wfCurItem
  }
  if (!itemToCheck.getNote().includes(newNote)) {
    WF.setItemNote(itemToCheck,
      strClean(newNote + ' '
      + itemToCheck.getNote()));
  }
}
/* ========================== end of wfCheckNote */
/* wfCheckPinnedItems ============== [WorkFlowy] */
function wfCheckPinnedItems(hourItem) {
  if (typeof(hourItem) == 'undefined') {
    var hourItem = WF.currentItem();
  }
  var ranks = {
    "1":[],
    "2":[],
    "3":[],
  };
  /* corrects out of bounds ranks -----------------
  ------------------------- [wfCheckPinnedItems] */
  hourItem.getChildren().forEach(activity => {
    var curRank = wfGetActRank(activity);
console.log(`900
wfGetActRank(activity)|${wfGetActRank(activity)}|
`);
    if (typeof(curRank) != 'undefined') {
      if (curRank == 0 ) {
        curRank = 1;
        wfSetActRank(activity, curRank & "");
      }
      if (curRank > 3 ) {
        curRank = 3;
        wfSetActRank(activity, curRank & "")
      }
      console.log(`918
      |${curRank & ""}|
      activity.getName()|${activity.getName()}|
      `);
      ranks[curRank & ""].push(activity.getId());
    }
  });
  /* correct duplicates ranks ---------------------
  ------------------------- [wfCheckPinnedItems] */
  hourItem.getChildren().forEach(activity => {
    var curRank = parseInt(wfGetActRank(activity));
    if (curRank == 0 ) {
      wfSetActRank(activity, "1")
    }
    if (curRank > 3 ) {
      wfSetActRank(activity, "3")
    }
  });
}
/* =================== end of wfCheckPinnedItems */
/* wfCollapse ====================== [WorkFlowy] */
function wfCollapse() {
  collapseRec(WF.currentItem());
  document.querySelectorAll(".content")[0]
    .focus();
  /* collapseRec() helper function  [wfCollapse] */
  function collapseRec(curItem) {
    var children =  curItem.getVisibleChildren();
    children.forEach(curItem => {
      children = curItem.getVisibleChildren();
      if (children.length != 0) {
        collapseRec(curItem);
        WF.collapseItem(curItem);
      }
    })
  }
}
/* =========================== end of wfCollapse */
/* wfCorrectPinnedItems ============ [WorkFlowy] */
function wfCorrectPinnedItems(debugInfo) {
  return new Promise(resolve => {
    wfUpdateEventLists();
    for (var i = 0; i < realHourItems.length; i++) {
      var hourItem = hourItems[i];
      var activities = hourItem.getChildren();
      /* pinned items: corrects possible duplicates
      in the ranks ------ [wfCorrectPinnedItems] */
      var existingRanks = [];
      var duplicateExists = false;
      activities.forEach(child => {
        var event = wfEventFromItem(child);
        var curRank = wfGetActRank(child);
        if (!isNaN(curRank)) {
          if (existingRanks.includes(curRank)) {
            duplicateExists = true;
          }
          existingRanks.push(curRank);
        }
      });
      /* does the correction ----------------------
      ------------------- [wfCorrectPinnedItems] */
      if (duplicateExists) {
        activities.forEach(child => {
          var curRank = wfGetActRank(child);
          if (!isNaN(curRank)) {
            var newRank = child.getPriority();
            var newName = child.getName().replace(
              'p' + curRank, 'p' + newRank);
            console.log(
              `149 [wfCorrectPinnedItems] */
              duplicate ranks. Correcting rank of
              hourItem.getName()|${
              hourItem.getName()}|
              newName|${newName}|
              newRank|${newRank}|
              wfGetActRank(child)|${
                wfGetActRank(child)}|
            `);
            WF.setItemName(child, newName);
          }
        })
        resolve(`wfCorrectPinnedItems corrects
          duplicate`);
        return;
      }
      /* end of corrects duplicates ---------------
      ------------------- [wfCorrectPinnedItems] */
      /* corrects out of range ranks --------------
      ------------------- [wfCorrectPinnedItems] */
      activities.forEach(child => {
        var event = wfEventFromItem(child);
        var curRank = wfGetActRank(child);
        if (!isNaN(curRank)) {
          if (curRank >= activities.length) {
            newRank = activities.length - 1;
            var newName = child.getName()
              .replace('p' + curRank
              , 'p' + newRank);
            console.log(
              `539 [wfCorrectPinnedItems]
              out of range ranks. Correcting
              rank of hourItem.getName()|${
              hourItem.getName()}|
              newName|${newName}|
              newRank|${newRank}|
              curRank % 3|${curRank % 3}|
              wfGetActRank(child)|${
              wfGetActRank(child)}|
              existingRanks |${
              JSON.stringify(existingRanks
              , null, "  ")}
              | [wfSwapInconsistantItems]
            `);
            WF.setItemName(child, newName);
            resolve(`wfCorrectPinnedItems finished`);
            return;
          }
        }
      })
      /* end of corrects out of range ranks -------
      ------------------- [wfCorrectPinnedItems] */
      /* moves pinned items at their correct places -
      --------------------- [wfCorrectPinnedItems] */
      for (var j = activities.length - 1
        ; j >= 0; j--) {
        var actItem = activities[j];
        /* !!!!!!! I should totally move that -----
        elsewhere */
        if (actItem.isCompleted()) {
          WF.completeItem(actItem);
        }
        /* end of !!!! ------------------------- */
        var strippedActName = strStripHtmlTags(
          activities[j].getName()
        );
        var event = wfEventFromItem(activities[j]);
        /* moves pinned items at their correct
        locations --------- [wfCorrectPinnedItems] */
        if (!hourItem.getName()
          .includes('Later')) {
          var targetRank = wfGetActRank(actItem);
          if (typeof(targetRank) != 'undefined') {
            if (targetRank != j) {
              var targetPriority;
              var targetRank = wfGetActRank(actItem);
              var actualRank = actItem.getPriority();
              if (targetRank < actualRank) {
                targetPriority = targetRank;
              } else {
                targetPriority =
                  (targetRank == 0)?0:targetRank + 1;
              }
              console.log(
              `754 [wfCorrectPinnedItems]
              moving pinned item at its correct place|
              ${strStripHtmlTags(actItem.getName())}|
              targetRank|${targetRank}|
              targetPriority|${targetPriority}|
              `);
              WF.moveItems([actItem], hourItem
                , targetPriority);
              resolve(`5449 [wfCorrectPinnedItems]
                moving pinned item at its correct
              place`);
              break;
              return;
            }
          }
        }
        /* end of moves pinned items ----------- */
      }
    }
    /* end of the loop on the hours ---------------
    --------------------- [wfCorrectPinnedItems] */
    /* defaults promise to true -------------------
    --------------------- [wfCorrectPinnedItems] */
    resolve(true);
  })
  /* end of return promise ------------------------
  ----------------------- [wfCorrectPinnedItems] */
}
/* ================== end of wfCorrectPinnedItems *
/* wfCorrectTags =================== [WorkFlowy] */
function wfCorrectTags() {
  var focusedItem = WF.focusedItem();
  var str0 = focusedItem.getNote();
  var str = str0;
  str = str.replace(/\r/g, '\n') ;
  /* removes unnecessary line returns -------------
  ------------------------------ [wfCorrectTags] */
  str = str.replace(RegExp(`([`
    + lettersAndNumbers
    + `'’,])\\s*(\\n|\r)+`, "img"), '$1 ');
  /* adds tagging categories --- [wfCorrectTags] */
  str = str.replace(/(Qualité)(.*)/g, '\n$1$2');
  str = str.replace(/(Genre)(.*)/g, '\n$1$2');
  str = str.replace(/(Emploi)(.*)/g, '\n$1$2');
  str = str.replace(/\n+/g, '\n') ;
  /* handles # and @ tags ------ [wfCorrectTags] */
  str = str.replace(/([#@])/img, " $1") ;
  str = str.replace(/[#@](.)/g
    , function(v) {return v.toUpperCase(); });
  str = strClean(str);
  /* autotag ------------------- [wfCorrectTags] */
  var tagCorrections = {
    "#(LiseAnne|Sandrine|Maïmiti|Dajuda)": "\@$1"
  };
  var key;
  var value;
  for(key in tagCorrections) {
    value = tagCorrections[key];
    str = str.replace(RegExp(key), value);
  }
  str = str.replace(/ADD/img, "ADD");
  var additionalTags = {
    "#ADD": "Journal Psychologie",
    "#Chats": "Animaux",
    "#LSD": "Journal Trip Drogue",
    "#Critique": "Journal",
    "#Vêtements":"DescriptionPhysique",
    "#DescriptionPhysique": "Personnage",
    "#TraitDeCaractère": "Personnage",
    "@LiseAnne": "VieSentimentale SnifSnif Journal ",
    "@Maïmiti": "#VieSentimentale #Journal",
    "@Marion": "#VieSentimentale #Journal",
    "@Dajuda": "#Travail #Journal",
    "@JeanMichel": "#Travail #Journal",
    "@Nathalie": "#Travail #Journal",
    "@Caroline": "#VieSentimentale #Journal",
    "#JangBricks": "#Lego",
    "#Lego": "#Jouets",
    "#Métro":"#Journal",
    "#Podcast": "#Journal",
    "#Travail":"#Journal",
    "#Rue":"#Extérieur #Ville",
    "#Extérieur":"#Décor",
    "#Intérieur":"#Décor",
    "#TraitDeCaractère": "#Personnage",
    "#zzzzzzzzzzzzzzzzzzzzz":
      "#zzzzzzzzzzzzzzzzzzzzz"
  };
  for(key in additionalTags) {
    value = ("#" + additionalTags[key]
      .replace(/ /img, " #"))
      .replace(/#([@#])/img,"$1");
    str = str.replace(key, key + " " + value);
  }
  /* move misplaced tags ------- [wfCorrectTags] */
  str = str.replace(
   /([\s\S]*)( #Réaliste)([\s\S]*Genre[\s\S]*)/gm
    , "$1$3$2")
  /* removes duplicate tags ---- [wfCorrectTags] */
  str = str.replace(
    /(#[a-zà-ÿA-ZÀ-Ÿ,0-9]+)(?=.+\1)\s/img, "");
  /* removes double # ---------- [wfCorrectTags] */
  str = str.replace(/#\s+#/gm, "#");
  /* markdown italics and bold - [wfCorrectTags] */
  str = str.replace(/_{1,}(.*)_{1,}/img
    , "<i>$1</i>");
  str = str.replace(/\*{1,}([.*]+)\*{1,}/img
    , "<b>$1</b>");
  /* double spaces ------------- [wfCorrectTags] */
  str = str.replace(/[^\S\r\n]{2,}/g, " ") ;
  if (str != str0) {
    WF.setItemNote(focusedItem, str);
  };
  return;
 }
/* ======================== end of wfCorrectTags */
/* wfCurItemUpdate() =============== [WorkFlowy] */
function wfCurItemUpdate() {
  if (WF.focusedItem() != null) {
    wfCurItem = WF.focusedItem();
  } else {
    if (typeof(wfCurItem) == 'undefined') {
      wfCurItem = WF.currentItem();
    }
  }
}
/* ====================== end of wfCurItemUpdate */
/* wfDateStamp ===================== [WorkFlowy] */
function wfDateStamp(itemToStamp) {
  if (!wfIsDateStamped(itemToStamp.getName())) {
    var wfFormattedDate = moment().format(
      `[(<time startYear]="YYYY" [startMonth]="M"`
      + ` [startDay]="D">DD/MM/YYYY[</time>])`);
    var wfNewItemName = strEasyInsert(
      itemToStamp.getName(),
      wfFormattedDate,
      /\(\s{0,1}\d{2}\/\d{2}\/\d{4}\s{0,1}\)/gm);
    return strClean(wfNewItemName);
  }
}
/* ========================== end of wfDateStamp */
/* wfDeleteDoneItems() ============= [WorkFlowy] */
function wfDeleteDoneItems() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    for (var i = 0; i < hourItems.length; i++) {
      var hourItem = hourItems[i];
      var activities = hourItem.getChildren();
      for (var j = 0; j < activities.length
        ; j++) {
        var actItem = activities[j];
        if (actItem.getName() == 'trashed') {
          wfDeleteItem(actItem, `045 deleting
          actItem.getName()|${actItem.getName()}|
          from
          actItem.getParent().getName()|${
            actItem.getParent().getName()}|
          `);
          continue;
        }
        var wfEvent = wfEventFromItem(actItem);
        if (typeof(wfEvent) != 'undefined') {
          var formattedActivity = `|${
            wfEvent.activity}${
            wfEvent.date}|`;
          if (doneTodayAsString
            .includes(formattedActivity)) {

            if (actItem.getChildren()
              .length > 0) {
              if (!hourItem.getName()
                .includes('Later')) {
                console.log(`4826
                  doneTodayAsString|${
                  doneTodayAsString}|
                  moves ${actItem.getName()}
                  moves ${actItem.getId()} from
                  ${hourItem.getName()} to
                  ${wfLater.getName()}
                  ${wfLater.getId()} at pos
                  ${wfLater.getChildren()
                  .length}
                `);
                WF.moveItems([actItem]
                  , wfLater, wfLater
                  .getChildren()
                  .length);
              }
            } else {
              wfDeleteItem(actItem
              , `395 [wfDeleteDoneItems]
              ${moment().format('HH:mm')}
              deleting |${actItem
              .getName()}|
              from |${actItem.getParent()
              .getName()}|
              actItem.getPriority()|${actItem
              .getPriority()}|
              `);
            }
          }
        }
      }
      /* end of the loop on the activities --------
      ---------------------- [wfDeleteDoneItems] */
    }
    /* end of the loop on the hours ---------------
    ------------------------- [wfDeleteDoneItems] *
    /* defaults to true every time as deleteItems -
    is buggy --------------- [wfDeleteDoneItems] */
    resolve(true);
  });
  /* end of return new promise --------------------
  -------------------------- [wfDeleteDoneItems] */
}
/* end of deletes done items ======= [WorkFlowy] */
/* wfDeleteDuplicates() ============ [WorkFlowy] */
function wfDeleteDuplicates() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    todayByActAndDate = {};
    Object.keys(todayByAct).forEach(activity => {
      if (!todayByActAndDate.hasOwnProperty(
        activity)) {
        todayByActAndDate[activity] = {};
      }
      todayByAct[activity].forEach(dummy => {
        if (typeof(dummy.date) != 'undefined') {
          if (!todayByActAndDate[activity]
            .hasOwnProperty(dummy.date)){
            todayByActAndDate[activity]
              [dummy.date] = [];
          }
          if (!todayByActAndDate[activity][dummy
            .date].hasOwnProperty(dummy
            .progress + "x")){
            todayByActAndDate[activity][dummy.date]
            [dummy.progress + "x"] = [];
          }
          todayByActAndDate[activity][dummy.date]
            [dummy.progress + "x"].push(dummy);
        }
      })
    })
    /* scans todayByActAndDate and deletes --------
    duplicates ------------ [wfDeleteDuplicates] */
    Object.keys(todayByActAndDate).forEach(
      activity => {
      Object.keys(todayByActAndDate[activity])
        .forEach(date => {
        Object.keys(todayByActAndDate[activity]
          [date]).forEach(progress => {
          if (todayByActAndDate[activity][date]
            [progress].length > 1) {
            for (var i = todayByActAndDate[activity][date][progress].length -1
            ; i > 0; i--) {
              var itemToDelete = WF.getItemById(
                todayByActAndDate[activity][date]
                [progress][i].wfId);
              if (itemToDelete.getChildren()
                .length == 0) {
                wfDeleteItem(itemToDelete,
                  `679 deleting duplicate
                  itemToDelete.getName()|${
                    itemToDelete.getName()}|
                    from 
                  itemToDelete.getParent().getName()|${itemToDelete.getParent().getName()}|
                `);
              }
            }
          }
        })
      })
    })
    /* defaults promise to true. does it every ----
    time because it usually doesn't work ----------
    ----------------------- [wfDeleteDuplicates] */
    resolve(true);
  })
  /* end of return promise  [wfDeleteDuplicates] */
}
/* =================== end of wfDeleteDuplicates */
/* wfDeleteExcessDummies() ========= [WorkFlowy] */
function wfDeleteExcessDummies() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    wfAllTodayEvents.forEach(dummy => {
      var curItem = WF.getItemById(dummy.wfId);
      /* if we're not in shelved ------------------
      ------------------ [wfDeleteExcessDummies] */
      if (!curItem.getParent().getName()
        .includes("helved")) {
        if (activitiesDic[dummy.activity]
          .type == 'streak') {
          var dummyIsOK = false;
          for (var i = 0; i < nextActs
            .length; i++) {
            var curDummy = nextActs[i];
            if (curDummy.notes.Série
             == dummy.activity
             && curDummy.startDate
             == dummy.startDate) {
              dummyIsOK = true;
              break;
            }
          }
          /* does the deletion --------------------
          -------------- [wfDeleteExcessDummies] */
          if (!dummyIsOK) {
            if (curItem.getChildren().length > 0) {
              /* this is probably a mirror --------
              ---------- [wfDeleteExcessDummies] */
              console.log(
                `751 [wfDeleteExcessDummies]
                moving
                curItem.getName()|${
                curItem.getName()}| from
                curItem.getParent().getName()|${
                curItem.getParent().getName()}|
                to
                wfLater.getName()|${wfShelved
                .getName()}|
                `
              );
              WF.moveItems([curItem], wfShelved
                , 0);
            } else {
              /* this is probably a dummy ---------
              ---------- [wfDeleteExcessDummies] */
              wfDeleteItem(curItem,
                `751 [wfDeleteExcessDummies]
                deleting
                dummy.itemName|${dummy.itemName}|
                from
                ${curItem.getParent().getName()}`
              );
            }
          }
        }
        /* end on the loop on nextActs ------------
        ---------------- [wfDeleteExcessDummies] */
      }
      /* end of is not already shelved ------------
      ------------------ [wfDeleteExcessDummies] */
    })
    resolve(`599 wfDeleteExcessDummies finished`);
  })
  /* end of resolve new promise -------------------
  ---------------------- [wfDeleteExcessDummies] */
}
/* ================ end of wfDeleteExcessDummies */
/* wfDeleteItem() ================== [WorkFlowy] */
function wfDeleteItem(curItem, debugInfo) {
  console.log(`985 [wfDeleteItem]
    debugInfo|${debugInfo}|
  `);
  /* handles the case when deletion failed: -------
  renames it as "trashed" and moves it to "later" -
  ------------------------------- [wfDeleteItem] */
  try {
    WF.setItemName(curItem,
      'trashed');
    WF.moveItems([curItem]
      , wfRecycleBin, wfLater.getChildren()
      .length);
  } catch(e) {}
}
/* ========================= end of wfDeleteItem */
/* diveIn ========================== [WorkFlowy] */
async function diveIn() {
  activitiesNode = WF.getItemById("35d61fcb-"
    + "8663-21c4-b7e5-f5591c1004f6");
  var activities = activitiesNode.getChildren();
  /* gets date and place,
  not useful for the moment ----------- [divein] */
  var today = new Date() ;
  var curHr = today.getHours();
  var curMoment = '';
  if (curHr < 12) {
    curMoment = '#a'
  } else if (curHr < 20) {
    curMoment = '#p';
  } else {
    curMoment = 'z';
  };
  /* ------------------ end of gets date and place,
                   not useful for the moment */
  /* gets date and place, not useful for the
 ------------------------------ moment  [divein] */
  var newSearchQuery = '#' + curMoment + ' #' +
      curLocTag;
  for (var i = 0; i < activities.length; i++) {
    var child = activities[i];
    if (!child.isCompleted()) {
      var curActivity = child;
      break;
    }
  }
  /* opens correct search depending on activity
  -------------------------------------- [divein] */
  var curActivityName = curActivity
    .getName().toLowerCase();
  var curNode;
  var stringToFind = "everywhere";
  if (curLocation == "At work") {
    stringToFind = "at work";
  };
  if (curLocation == "At home") {
    stringToFind = "at home";
  };
  switch (true) {
    case (curActivityName.includes("birdfeeder")):
      curNode = getNodeByName(curActivity,
        stringToFind);
      window.open(curNode.getNote()
        .replace(/<.*?>/gm, ""), "_self");
      break;
    case (curActivityName.includes("improve ")):
      curNode = getNodeByName(curActivity,
        stringToFind);
      window.open(curNode.getNote()
        .replace(/<.*?>/gm, ""), "_self");
      break;
    case (curActivityName.includes("i go to bed")
      || curActivityName.includes("i wake up")):
      newSearchQuery
        = `-[ -🚀 -✅ -☝️ -"all #e tags"`
        + ` -"all #d tags" -#i `;
      if (WF.completedVisible()) {
        WF.toggleCompletedVisible();
      }
      window.open(curActivity.getUrl()
        + "?q="
        + encodeURI(newSearchQuery)
        , "_self");
      break;
    case (curActivityName.includes("work 🏭")):
      window.open(WF
        .getItemById(
        "5c2046e7-a6b9-f2d1-f3dc-ed35c24333e7")
        .getNote(), "_self")
      break;
    case (curActivityName.includes("write")):
      window.open(WF
        .getItemById(
        "24d5a73b-39a5-8416-3df9-59508796be3d")
        .getNote(), "_self");
      break;
    default :
      newSearchQuery =
        `#d -🚀 -✅ -☝️ -#i ${
        ((imAtWork)?" -#h -#s":"")}`;
      if (WF.completedVisible()) {
        WF.toggleCompletedVisible();
      }
      window.open(curActivity.getUrl()
        + "?q="
        + encodeURI(newSearchQuery)
        , "_self");
  }
}
/* =============================== end of divein */
/* wfDoneToday ===================== [WorkFlowy] */
function wfDoneToday(){
  doneToday();
}
/* ========================== end of wfDoneToday */
/* wfEventFromItem() =============== [WorkFlowy] */
function wfEventFromItem(curItem) {
  var event = {};
  /* handles the case where curItem is either a
  string or a WorkFlowy item - [wfEventFromItem] */
  if (typeof(curItem) == 'object') {
    var eventTitle = curItem.getName();
    event.order = curItem.getPriority()
      + curItem.getParent().getPriority() * 1000;
    event.wfId = curItem.getId();
  } else if (typeof(curItem) != 'string') {
    event.order = 0;
    event.wfId = '';
    return;
  } else {
    eventTitle = curItem;
  }
  var itemName = strStripHtmlTags(eventTitle);
  var eventActivity = streakSerie(itemName);
  event.itemName = itemName;
  if (activitiesDic.hasOwnProperty(
    eventActivity)) {
    event.progress = "";
    event.title = eventTitle;
    event.activity = eventActivity;
    var myReg =
      RegExp('(\\d*)\\s+(\\d{2})\\/(\\d{2})\\/'
      + '\d{0,2}(\\d{2}).*?( \\bp\\d+\\b)?', 'gim')
      .exec(itemName);
    var wfEventReg =
      RegExp('(.*?)(\\d*)(\\s+)(\\d{2})(\\/)'
      + '(\\d{2})(\\/\\d{0,2})(\\d{2})(.*?)(?:)'
      + '*( ?\\bp\\d+\\b|)(.*)', 'gim')
      .exec(eventTitle);
    if (myReg != null) {
      /* date is deprecated in favor of -----------
      startDate -------------- [wfEventFromItem] */
      event.startDate = `20${myReg[4]}-${myReg[3]
        }-${myReg[2]}T00:00`;
      event.date = moment(event.startDate).format(
        wfTodayDateFormat);
      if (myReg[1] != '') {
        event.progress = parseInt(myReg[1]);
      }
      if (typeof(myReg[5]) != 'undefined') {
        event.rank = parseInt(
          myReg[5].replace(' p', ''));
      } else {
        event.rank = 0;
      }
      event.orderToSet = parseInt(moment(event
        .startDate).format(
        "YYYYMMDD")) * 1000 +
        10 * parseInt(activitiesDic[
        eventActivity].nr) +
        event.progress;
      event.wfEventReg = wfEventReg;
    } else {
      event.orderToSet = event.order;
    }
    return event;
  }
}
/* ====================== end of wfEventFromItem */
/* wfFormatEvent() ================= [functions] */
function wfFormatEvent(event, prog) {
  if (typeof(prog) == 'undefined') {
    prog = "";
  }
  if (event.notes.hasOwnProperty("progress")) {
    prog = " " + event.notes.progress;
  }
  var curAct = event.notes
    .Série;
  return `${
    activitiesDic[curAct].emoji} <b>${
    streakShortName(event
    .notes.Série)}${prog}</b> ${
    moment(event
    .startDate).format(wfTodayDateFormat)} `
}
/* ======================== end of wfFormatEvent */
/* wfFrameIt =================================== */
function wfFrameIt(){
  if (wfCurItem.getNote() == '') {
    return;
  }
  var newNote = `![iframe](${
    strStripHtmlTags(wfCurItem.getNote())})`
  WF.setItemNote(wfCurItem, newNote);
}
/* ============================ end of wfFrameIt */
/* wfGetActRank ==================== [WorkFlowy] */
function wfGetActRank(item) {
  if (typeof(item) == 'undefined') {
    item = WF.focusedItem();
  }
  var curName = strStripHtmlTags(item.getName());
  var myReg = /\bp(\d)\b *$/.exec(curName);
  if (myReg != null) {
    return (parseInt(myReg[1]));
  }
}
/* ============= end of wfGetActRank [WorkFlowy] */
/* wfGetChildrenByLevel ============ [WorkFlowy] */
function wfGetChildrenByLevel(TargetLevel, curItem
  , CurLevel) {
  if (curItem == undefined) curItem
    = WF.rootItem();
  if (CurLevel == undefined) CurLevel = 0 ;
  if (CurLevel > TargetLevel) return ;
  var result = [] ;
  curItem.getChildren().forEach(newCurItem => {
    if (TargetLevel == CurLevel) {
      result.push(newCurItem) ;
    } else {
      wfGetChildrenByLevel(TargetLevel
        , newCurItem, CurLevel + 1)
        .forEach(recursionResult =>
		result.push(recursionResult))
    }
  });
  return result;
}
/* ================= end of wfGetChildrenByLevel */
/* wfGetChildByName() ============== [WorkFlowy] */
function wfGetChildByName(childName, item) {
  if (typeof(item) == 'undefined') {
    item = WF.rootItem();
  }
  var found = false;
  var children = item.getChildren();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (strStripHtmlTags(child.getName()
      .replace(/\s/img, ''))
      .includes(strStripHtmlTags(childName
      .replace(/\s/img, '')))) {
      found = true;
      return child;
      break
    }
    if (strStripHtmlTags(child.getName()
      .replace(/\s/img, '').replace(/>/g, "&gt;")
    .replace(/</g, "&lt;").replace(/"/g, "&quot;"))
      .includes(strStripHtmlTags(childName
      .replace(/\s/img, '').replace(/>/g, "&gt;")
    .replace(/</g, "&lt;").replace(/"/g, "&quot;")))) {
      found = true;
      return child;
      break
    }
  };
  if (!found) {
    var newItem = WF.createItem(item, 0);
    console.log
    WF.setItemName(newItem, childName);
    return newItem;
  }
}
/* ===================== end of wfGetChildByName */
/* wfGetDoneItem() ================= [WorkFlowy] */
function wfGetDoneItem(activity) {
  return activitiesDic
  return new Promise(resolve => {
    var monthItem;
    getDic('activitiesDic.json').then(
      activitiesDic => {
      if (!activitiesDic[activity]
        .hasOwnProperty('wfDoneId')) {
        throw ('555 no doneId in activitiesDic for '
        + activity)
      }
      var doneItem = WF.getItemById(
        activitiesDic[activity].wfDoneId);
      resolve(wfGetMonthItem(doneItem));
    })
  })
  /* end of return new promise - [wfGetDoneItem] */
}
/* ======================== end of wfGetDoneItem */
/* wfGetMonthItem() ================ [WorkFlowy] */
function wfGetMonthItem(mainItem) {
  var curYear = '<i>[ ' + moment()
    .format('YYYY') + ' ]</i>';
  var yearItem = wfGetChildByName(curYear
    , mainItem);
  var curMonth = '<i>[ ' + moment()
    .format('MM/YYYY') + ' ]</i>';
  return wfGetChildByName(curMonth
    , yearItem);
}
/* ======================= end of wfGetMonthItem */
/* getNodeByName() ================= [WorkFlowy] */
function getNodeByName(nodeToSearch,
  stringToFind) {
  var result = false;
  stringToFind = stringToFind.toUpperCase();
  for (var i = 0; i < 9; i++) {
    var childrenAtThatLevel =
      wfGetChildrenByLevel(i, nodeToSearch);
    for (var j = 0;
      j < childrenAtThatLevel.length;
      j++) {
      var curName = childrenAtThatLevel[j]
        .getName().toUpperCase()
        .replace(/<\/?[bi]>/img, "");
      if (curName.includes(stringToFind)) {
        result = childrenAtThatLevel[j];
        break;
      }
    }
    if (result) break;
  }
  return result;
}
/* ======================== end of getNodeByName */
/* wfHideSubmenus ================== [WorkFlowy] */
function wfHideSubmenus() {
  var elem = document.getElementById(
    'forWorkDays');
  try {
    elem.parentNode.removeChild(elem);
    elem = document.getElementById('forHolidays');
    elem.parentNode.removeChild(elem);
  } catch (e) {
    e;
  }
  return false;
}
/* ======================= end of wfHideSubmenus */
/* wfInitializesIfLoaded() ========= [WorkFlowy] */
async function wfInitializesIfLoaded() {
  try {
    WF.rootItem();
    wfInitialize();
  } catch(e) {
    console.log(`1543
    e|${e}|
    `);
    setTimeout(wfInitializesIfLoaded, 1000);
  }
}
/* ================ end of wfInitializesIfLoaded */
/* wfPin =========================== [WorkFlowy] */
function wfPin(curItem) {
  /* initialize curItem ---------------- [wfPin] */
  if (typeof(curItem) == 'undefined') {
    curItem = wfCurItem;
    if (typeof(wfCurItem) == 'undefined') {
      return;
    }
  }
  console.log(`9790 [wfPin]
  wfCurItem.getName()|${wfCurItem.getName()}|
  `);
  wfCurItemUpdate();
  var newName = strEasyInsert(
    wfCurItem.getName()
    , ` p${wfCurItem.getPriority()}`
    , /\sp\d(\s|$)/gm)
  /* sets new name and check if already pinned in
  one fell swoop ----------------------- [wfPin] */
  if (!wfCheckName(newName, wfCurItem)) {
    /* if there is already a pin, remove it -------
    ------------------------------------ [wfPin] */
    newName = wfCurItem.getName()
      .replace(/\sp\d(\s|$)/gm, " ");
    wfCheckName(newName, wfCurItem);
  }
}
/* ================================ end of wfPin */
/* wfIsDateStamped() =============== [WorkFlowy] */
function wfIsDateStamped(str) {
  if (str == '') {
    return true;
  } else {
    if (!isDateStamped(str)) {
      return false;
    }
    if (!str.includes('time startYear')) {
      return false;
    }
    return true;
  }
}
/* ====================== end of wfIsDateStamped */
/* wfKillBarrenChildren ============ [functions] */
function wfKillBarrenChildren(mothers,
  survivorsCamp) {

  mothers.forEach(mother => {
    mother.getChildren().forEach(suspect => {
      if (suspect.getChildren().length == 0) {
        WF.deleteItem(suspect);
      } else if (typeof(survivorsCamp)
        != 'undefined') {
        WF.moveItems([suspect], survivorsCamp, 0);
      }
    })
  })

}
/* ================= end of wfKillBarrenChildren */
/* wfKillCopyTag =================== [WorkFlowy] */
async function wfKillCopyTag(node) {
  if (node.getName().includes(' #copy')) {
    console.log(`661 [wfKillCopyTag]
      node.getName()|${node.getName()}|
    `);
    WF.setItemName(node, node.getName()
      .replace(/\s#copy/img, ''));
  }
}
/* ======================= end of wfKillCopyTags */
/* wfKillCopyTags ================== [WorkFlowy] */
async function wfKillCopyTags(node, recursive) {
  if (typeof(recursive) == 'undefined') {
    recursive = false;
  }
  wfKillCopyTag(node);
  /* removes #copy tags -------- [wfKillCopyTags] */
  /* loops in the children ----- [wfKillCopyTags] */
  if (recursive) {
    node.getChildren().forEach(wfKillCopyTag)
  } else {
    /* if not recursive, only go 2 deep -----------
    --------------------------- [wfKillCopyTags] */
    node.getChildren().forEach(curItem => {
      wfKillCopyTag(curItem);
      curItem.getChildren().forEach(wfKillCopyTag)
    })
  }
  return (`575 killCopyTag finished`);
}
/* ======================== end of wfKillCopyTag */
/* wfLaunchUpdates ================= [WorkFlowy] */
async function wfLaunchUpdates(event) {
  wfCurItemUpdate();
  /* updates wfCurItem ------- [wfLaunchUpdates] */
  if (wfCurItem.getName()
    .includes("✉ Inbox")) {
    if (wfCurItem.getVisibleChildren()
      .length() == 0) {
      WF.search("");
    }
  }
  /* updates inbox count ----- [wfLaunchUpdates] */
  wfUpdateInbox();
  /* updates google drive url  [wfLaunchUpdates] */
  curItem = WF.getItemById(
    "c19eb8de-3835-3da5-9ca3-30d1943266d9");
  var curNote = strStripHtmlTags(curItem.getNote());
  var today = new Date();
  var d = new Date();
  var offset = ((today.getDay() * 1) == 1)?2:4;
  /* if monday, include files changed during the
  weekend -------------------- [wfLaunchUpdates] */
  if (today.getDay() == 1) {
    offset = 4;
  } else {
    offset = 2;
  };
  d.setDate(today.getDate()- offset);
  var newDate = moment(d).format('YYYY-DD-MM');
  var toFind = /\d{4}-\d{2}-\d{2}/;
  var newNote = strStripHtmlTags(curNote).replace(
    toFind, newDate);
  /* warning : there is a maximum number of search
  terms possible. After that the search fails */
  var excludeTerms = `
    -(type:document)
    -(type:folder)
    -(type:image)
    -(type:spreadsheet)
    -(title:"config.xml")
    -(title:".dotx")
    -(title:".ini")
    -(title:".json")
    -(title:".mscz")
    -(title:".psd")
    -(title:".thmx")
    -(title:".tmp")
    -(title:".xsl")
  `;
  var newNote =`after:${
    moment().add(-offset, 'd')
    .format('YYYY-MM-DD')} ${
    excludeTerms.replace(/\s+/img, ' ')}`;
  newNote =
    `https://drive.google.com/drive/u/0/search?q=${
    encodeURIComponent(newNote)}`;
  if (curNote != newNote) {
    WF.setItemNote(curItem, newNote);
  }
  /* end of update drive string[wfLaunchUpdates] */
}
/* ====================== end of wfLaunchUpdates */
/* wfLoadEvents() ================== [WorkFlowy] */
async function wfLoadEvents(debugInfo) {
  var eventsAsTxt = await dropboxFetch(
    "events.json");
  if (eventsAsTxt != '') {
    var events = JSON.parse(eventsAsTxt);
    window.events = events;
    seOutput = await splitEvents(events);
    Object.keys(seOutput)
      .forEach(key => {
      eval(`window.${
        key} = seOutput["${key}"]`);
      var settingToSave = {};
      settingToSave[key]
        = seOutput[key];
    });
    /* end of the loop on the events --------------
    ------------------------------- wfLoadEvents */
  }
  return (`wfLoadEvents finished`);
}
/* ========================= end of wfLoadEvents */
/* wfLookInAll ===================== [WorkFlowy] */
function wfLookInAll() {
  var curSearch = WF.currentSearchQuery();
  if (curSearch != null) {
      window.open("https://workflowy.com/#?q=" +
        encodeURI(curSearch)
        , "_self");
  }
}
/* ========================== end of wfLookInAll */
/* wfLookUp() ====================== [WorkFlowy] */
function wfLookUp() {
  var curText = wfCurItem.getName();
  var regExp = /(.*?)\s+\(+/;
  var matches = regExp.exec(curText);
  curText = (matches)? (matches[1])
    : curText;
  curText = wfHandleSearch(curText);
  if (!WF.currentItem().getName()
      .includes("arrefour")) {
    /* general case ----------------- [wfLookUp] */
    WF.zoomTo(WF.rootItem());
    curText = `${curText} -#done`;
    WF.search(curText);
  } else {
    /* Carrefour list --------------- [wfLookUp] */
    if (WF.currentSearchQuery() == null) {
      if (!WF.completedVisible()) {
        /* if nothing is currently searched, ------
        launches search ------------- [wfLookUp] */
        WF.toggleCompletedVisible();
      };
      curText = curText.replace('" "', '" OR "');
      wfCarrefourSearch(curText);
    } else {
      /* if search en cours, wfLookUp the first ---
      item on the list -------------- [wfLookUp] */
      /* carrefourResetDom = true; */
      if (!WF.completedVisible()) {
        WF.toggleCompletedVisible();
      };
      curText = WF.getItemById(
        "ce393e47-aebd-415e-152f-d518e716e2fb")
        .getChildren()[0].getName();
      curText = wfHandleSearch(curText);
      curText = curText
        .replace(/" "/gm, '" OR "');
      wfCarrefourSearch(curText);
    }
  };
  /* wfCarrefourSearch helper function ------------
  ----------------------------------- [wfLookUp] */
  function wfCarrefourSearch(text) {
    window.open(
      'https://workflowy.com/#/d518e716e2fb?q='
      + encodeURIComponent(text),
      '_self'
    );
  }
  /* ------------------ end of wfCarrefourSearch */
}
/* ============================= end of wfLookUp */
/* wfMarkAsFinishedButton() ======== [WorkFlowy] */
function wfMarkAsFinishedButton() {
  WF.setItemName(wfCurItem
    , `${wfCurItem.getName()} #done`);
  wfScan();
}
/* =============== end of wfMarkAsFinishedButton */
/* wfMarkAsFinished() ============== [WorkFlowy] */
function wfMarkAsFinished(itemToMove, breadcrumb) {
  var itemName = itemToMove.getName();
  if (itemName.match(/\[.*\]/) != null) {
    errorWarning();
    return;
  }
  var activity = wfGetActivity(itemToMove);
  if (!activitiesDic.hasOwnProperty(activity)) {
// console.log(`328 wfMarkAsFinished
// could not find activity for
// ${itemToMove.getName()}
// activity|${activity}|
// `);

    return;
  }
  var targetMonth = wfGetMonthItem(WF.getItemById(
    activitiesDic[activity]
    .wfDoneId));
  /* renames the item ------- [wfMarkAsFinished] */
  addDoneTag(itemToMove);
  if (typeof(breadcrumb) != 'undefined') {
    wfCheckNote(breadcrumb, itemToMove);
  }
  itemToMove.getChildren().forEach(curItem => {
    addDoneTag(curItem);
  });
  /* moves the item --------- [wfMarkAsFinished] */
    WF.moveItems([itemToMove],targetMonth, 0);
    wfShowMessage(`${itemToMove.getName()
    } moved to ${targetMonth.getName()}`);

  /* errorWarning helper function -----------------
  --------------------------- [wfMarkAsFinished] */
  function errorWarning() {
    wfShowMessage(`The item ${itemName
      } cannot be moved`);
  }
  /* ----------------------- end of errorWarning */
  /* addDoneTag ------------- [wfMarkAsFinished] */
  function addDoneTag(itemToTag) {
    /* renames the item ------------------------ */
    var newItemName = itemToTag.getName();
    newItemName = strRemoveTags(newItemName);
    var dateTag = moment().format('(DD/MM/YYYY)');
    var dateTag = newItemName
      .includes(dateTag)?'':dateTag;
    var newItemName = newItemName
      .replace(/#done/img, '');
    var newItemName = `<i>${
      strStripHtmlTags(newItemName.replace(
        /#d\b/igm, ''))} ${dateTag}</i>`;
    WF.setItemName(itemToTag, newItemName);
  }
  /* ------------------------- end of addDoneTag */
}
/* ===================== end of wfMarkAsFinished */
/* wfGetActivity() ================= [WorkFlowy] */
function wfGetActivity(curItem) {
  for (var i = 0; i < curItem.getAncestors()
    .length; i++) {
    var ancestor = curItem.getAncestors()[i] ;
    var activity = streakSerie(
      ancestor.getName());
    if (activitiesDic.hasOwnProperty(activity)) {
      return activity;
      break;
    }
  }
}
/* ======================== end of wfGetActivity */
/* wfGetId() ======================= [WorkFlowy] */
function wfGetId() {
  var selection = WF.currentItem();
  var selectionID = selection.getId();
  var selectionName = selection.getName();
  wfShowMessage(
    `ID of ${selectionName} = ${selectionID}`
  );
  WF.search(selectionID);
}
/* ============================== end of wfGetId */
/* wfHandleSearch() ================ [WorkFlowy] */
function wfHandleSearch(curText) {
  /* "should" causes the wf search to crash ---- */
  curText = curText.replace(/should/igm, ' ')
  /* only keep the part before the parentheses - */
  /* -------------------------- [wfHandleSearch] */
  curText = (curText + '(').split('(')[0];
  /* removes tags / html tags - [wfHandleSearch] */
  curText = strStripHtmlTags(curText);
  /* only keeps lettersAndNumbers -------------- */
  /* -------------------------- [wfHandleSearch] */
  var myRegex =
    new RegExp(`[^${lettersAndNumbers}]`
    , 'gm');
  curText = curText.replace(myRegex, " ")
  /* removes plurals ---------- [wfHandleSearch] */
  myRegex = new RegExp(
    `e{0,1}s([^${lettersAndNumbers}]|$)`, 'gm'
  );
  curText = curText.replace(myRegex, ' ');
  /* removes too common words - [wfHandleSearch] */
  curText = curText
    .replace(
    /\b(le|pour|de|au|en|the|deux|troi|\d+)\b/igm
    , '')
    .replace(/\sà\s/gm, ' ')
    .replace("'", ' ');
  /* removes single letter words[wfHandleSearch] */
  myRegex = new RegExp(`([^${
    lettersAndNumbers}]|^)[${
    lettersAndNumbers}]([^${
    lettersAndNumbers}]|$)`
    , 'igm');
  curText = curText
    .replace(myRegex, ' ');
  /* removes dashes that are read as minus by
  WorkFlowy ------------------- [wfHandleSearch] */
  curText = curText.replace('-', ' ');
  /* adds " ------------------- [wfHandleSearch] */
  curText = strClean(curText);
  curText = `"${curText.replace(
    /(\s)/gm, `"$1"`)}"`;
  return curText;
}
/* ======================= end of wfHandleSearch */
/* hideSource() ==================== [WorkFlowy] */
function hideSource(curItem) {
  if (curItem === undefined) {
    curItem = WF.getItemById("b57fa593-85e9-"
      + "f017-a4a7-d6e6f6433609");
  }
  if (curItem.getName().includes("#Source")
      && !curItem.isCompleted()) {
    WF.completeItem(curItem)
  }
  curItem.getChildren().forEach(curChild => {
      hideSource(curChild);
  });
}
/* =========================== end of hideSource */
/* pad(number) ===================== [WorkFlowy] */
 function pad(number) {
  var r = String(number);
  if ( r.length == 1 ) {
    r = '0' + r;
  }
  return r;
}
/* ================================== end of pad */
/* wfPushTodayHours ================ [WorkFlowy] */
function wfPushTodayHours(){
  WF.getItemById(
    "35d61fcb-8663-21c4-b7e5-f5591c1004f6")
    .getChildren().forEach(child => {
    var curName = child.getName();
    if (curName.includes(':')) {
      var newName = moment("2020-08-23T"
        + child.getName()).add(1, 'h')
        .format('HH:mm');
      WF.setItemName(child, newName);
    }
  });
}
/* ===================== end of wfPushTodayHours */
/* wfQuickInbox ==================== [WorkFlowy] */
function wfQuickInbox() {
  var résultat = window.prompt();
  if (résultat != '') {
    var curItem = WF
      .getItemById("947da3dc-5939-99a6-"
        + "7a31-870fa7a78625");
    var newItem = WF.createItem(curItem, 0);
    WF.setItemName(newItem, résultat);
  }
}
/* ========================= end of wfQuickInbox */
/* wfRandomBullet() ================ [WorkFlowy] */
function wfRandomBullet(){
  function toastMsg(str, sec, err) {
      wfShowMessage(str, err);
      setTimeout(WF.hideMessage, (sec || 2) * 1e3)
  }
  /* applyToEachItem() -------- [wfRandomBullet] */
  function applyToEachItem(functionToApply
    , parent) {
    functionToApply(parent);
    for (let child of parent.getChildren()) {
        applyToEachItem(functionToApply, child);
    }
  }
  /* findMatchingItems() ------ [wfRandomBullet] */
  function findMatchingItems(itemPredicate
  , parent) {
      const matches = [];
      function addIfMatch(item) {
          if (itemPredicate(item)) {
              matches.push(item)
          }
      }
      applyToEachItem(addIfMatch, parent);
      return matches
  }
  /* ------------------ end of findMatchingItems */
  const htmlEscText = str=>str
    .replace(/&/g, "&amp;").replace(/>/g, "&gt;")
    .replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const isPotentiallyVisible = findMatchingItems
    (item=>WF.completedVisible()
    || !item.isWithinCompleted()
    , WF.currentItem()).splice(1);
  if (isPotentiallyVisible.length === 0)
      return void toastMsg("No items found."
      , 2, true);
  const randomItem = isPotentiallyVisible[Math
    .floor(Math.random() * isPotentiallyVisible
    .length)];
  const breadcrumb = randomItem.getAncestors()
    .splice(1).map(item=>item
    .getNameInPlainText().trim()).join(" > ");
  const style =
    `<style>
      #rdx{text-decoration:none}
      #rdx:hover{text-decoration:underline}{
    </style>`;
  window.open(`https://workflowy.com${
    randomItem.getUrl()}`, "_self");
}
/* ======================= end of wfRandomBullet */
/* wfRelaunchSearch ================ [WorkFlowy] */
function wfRelaunchSearch(event) {
  /* if current item is inbox, launch search ------
  --------------------------- [wfRelaunchSearch] */
  if (WF.currentItem().getId() ==
    '947da3dc-5939-99a6-7a31-870fa7a78625') {
    launchSearch();
    return;
  }
  /* if first visible item is inbox, launch search
  --------------------------- [wfRelaunchSearch] */
  if (WF.currentItem().getVisibleChildren().length > 0) {
    if (WF.currentItem().getVisibleChildren()[0]
      .getId() ==
      '947da3dc-5939-99a6-7a31-870fa7a78625') {
      launchSearch();
      return;
    }
  }
  /* launchSearch helper function -----------------
  --------------------------- [wfRelaunchSearch] */
  function launchSearch() {
    var inboxItems =
      WF.getItemById(
      '947da3dc-5939-99a6-7a31-870fa7a78625'
      ).getChildren();
    var itemToLookUp = inboxItems[0];
    var itemToLookUpName = itemToLookUp.getName();
    var newSearch = wfHandleSearch(
      itemToLookUpName);
    if (newSearch == `""`) {
      WF.deleteItem(itemToLookUp);
      wfShowMessage(`${itemToLookUpName} deleted`);
    }
    if (inboxItems.length > 0
      && newSearch != "") {
      window.open('https://workflowy.com/#?q='
        + encodeURIComponent(newSearch)
        , '_self');
    }
  }
}
/* ===================== end of wfRelaunchSearch */
/* wfRecycle(node) ================= [WorkFlowy] */
function wfRecycle(node) {
  count ++;
  if (!node) {
    node = WF.getItemById(
    "9b293549-353d-936d-9d4b-5d8f000c26e6");
  }
  /* recycles the nodes itself ----- [wfRecycle] */
  if (node.isCompleted()) {
    WF.completeItem(node);
  }
  /* recycles children ------------- [wfRecycle] */
  node.getChildren().forEach(curItem => {
    var curName = curItem.getName();
    var hasCorrectTags = (curName
      .match(/#[rdoe]/)
      != null);
    if ((curItem.isCompleted())
      && (hasCorrectTags)) {
        WF.completeItem(curItem);
    }
    if (hasCorrectTags) {
      if (curItem.isCompleted()) {
        WF.completeItem(curItem);
      }
      wfRecycle(curItem);
    }
  })
}
/* ============================ end of wfRecycle */
/* wfRecycleForHolidays ============ [WorkFlowy] */
function wfRecycleForHolidays() {
  isWorkDay = false;
  wfRecycleLaunch(false);
}
/* ================= end of wfRecycleForHolidays */
/* wfRecycleForWorkdays ============ [WorkFlowy] */
function wfRecycleForWorkdays() {
  isWorkDay = true;
  wfRecycleLaunch(true);
  wfHideSubmenus();
}
/* ================= end of wfRecycleForWorkdays */
/* wfRecycleLaunch ================= [WorkFlowy] */
function wfRecycleLaunch() {
  Object.keys(activitiesDic).forEach(activity => {
    wfRecycle(WF.getItemById(
    activitiesDic[activity].wfId));
  });
  wfHideSubmenus();
}
/* ====================== end of wfRecycleLaunch */
/* wfRecycleSubMenu ================ [WorkFlowy] */
function wfRecycleSubMenu() {
  wfAddButton('forWorkDays', wfRecycleForWorkdays
    , '70%', "7%");
  wfAddButton('forHolidays', wfRecycleForHolidays
    , '70%', "9%");
}
/* ===================== end of wfRecycleSubMenu */
/* reorderActivities =============== [WorkFlowy] */
function reorderActivities(isWorkDay) {
  isWorkDay = (isWorkDay === undefined)
      ?true:isWorkDay;
    var excludedActivities = (isWorkDay)?""
    :["I arrive at work",
      "I get back from lunch",
      "I leave work",
      "Work 🏭"];
    activitiesNode = WF.getItemById(
      "35d61fcb-8663-21c4-b7e5-f5591c1004f6");
    var activities = ["I wake up",
     "I arrive at work",
     "I get back from lunch",
     "I leave work",
     "I get back home",
     "Write",
     "Piano",
     "Social",
     "Workout",
     "Draw",
     "Birdfeeder",
     "I improve my life",
     "Learn",
     "Read",
     "Work 🏭",
     "Play",
     "Tidy up",
     "I go to bed"];
    for (var i = activities.length-1; i >= 0
      ; i--) {
      if (activities[i] == "") continue;
      var foundNode = getNodeByName(activitiesNode
        , activities[i] + ' ');
    /* complete excluded activities ---------------
    ------------------------ [reorderActivities] */
    if (foundNode) {
      if (excludedActivities
      .includes(activities[i])) {
        if (!foundNode.isCompleted()) {
          WF.completeItem(foundNode);
        }
      } else {
        if (foundNode.isCompleted()) {
          WF.completeItem(foundNode);
        }
        WF.moveItems([foundNode],
          activitiesNode, 0);
      }
    }
  }
}
/* ==================== end of reorderActivities */
/* wfRetreatDates() ================ [WorkFlowy] */
function wfRetreatDates(item, killDateTag) {
  if (typeof(item) == 'undefined') {
    item = wfCurItem;
  } else {
    if (item.screenX) {
      /* it's a mouse event --- [wfRetreatDates] */
      item = wfCurItem;
    }
  }
  if (typeof(item) == 'undefined') {
    return;
  }
  /* initializes newName ------ [wfRetreatDates] */
  var oldName;
  var strMode = (typeof(item) == 'string');
  if (strMode) {
    oldName = item;
  } else {
    oldName = item.getName();
  }
  var newName = oldName;
  /* removes date tags -------- [wfRetreatDates] */
  if (typeof(killDateTag) == 'undefined') {
    killDateTag = true;
  }
  if (killDateTag) {
    newName = newName.replace(
      /<time.*?>|<\/time>/igm, '');
  }
  /* retreats dates ----------- [wfRetreatDates] */
  const regex = /(\w{3}, \w{3} \d+, 20\d{2})/gm;
  let m;
  while ((m = regex.exec(newName)) !== null) {
    /* This is necessary to avoid infinite loops --
    with zero - width matches ---------------------
    --------------------------- [wfRetreatDates] */
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    m.forEach((match, groupIndex) => {
      newName = newName.replace(match
        , moment(new Date(match))
        .format("DD/MM/YYYY"))
    });
  }
  if (strMode) {
    return newName;
  } else {
    if (newName != oldName) {
      WF.setItemName(item, newName);
    }
  }
}
/* ======================= end of wfRetreatDates */
/* wfScan() ======================== [WorkFlowy] */
function wfScan() {
  Object.keys(activitiesDic).forEach(activity => {
    var activityDic = activitiesDic[activity];
    if (activityDic.hasOwnProperty('wfDoneId')) {
      scanRec(WF
        .getItemById(activityDic.wfId)
        , activityDic.wfDoneId)
    }
  });
  /* empties the trashcan ------------- [wfScan] */
  wfRecycleBin.getChildren().forEach(WF
    .deleteItem);
  /* scanRec() helper ----------------- [wfScan] */
  function scanRec(curItem, excludeId
    , breadcrumb) {
    if (typeof(breadcrumb) == 'undefined') {
      breadcrumb = '';
    }
    curItem.getChildren().forEach(child => {
      if (child.getId() != excludeId) {
        /* retreats date -------------- [wfScan] */
        wfRetreatDates(child);
        /* marks as done -------------- [wfScan] */
        if (child.getName().includes('#done')) {
          wfMarkAsFinished(child, breadcrumb);
        }
        /* relauches recursion -------- [wfScan] */
        scanRec(child, excludeId
          , child.getName().match(
            RegExp('\\[.*(\\d{4}\\s*|.*this.*|'
            + '.*I did.*|.*📁.*)\\]'
            , 'gim')) != null
            ?''
            :((breadcrumb == '')
              ?''
              :breadcrumb + ' > ') + strClean(
                strRemoveTags(child.getName()))
         );
      }
    });
  }
  /* ----------------- end of scanRec() [wfScan] */
}
/* =============================== end of wfScan */
/* wfSendToImprove ================= [WorkFlowy] */
function wfSendToImprove(itemToMove) {
  if (typeof(itemToMove) == 'undefined') {
    itemToMove = wfCurItem;
  }
  var found = false;
  var inbox = WF.getItemById(
    "947da3dc-5939-99a6-7a31-870fa7a78625") ;
  /* finds current improve target -----------------
  ---------------------------- [wfSendToImprove] */
  var improveMain = WF
    .getItemById(
    "f58e6326-ae4b-00db-fd5b-f7f67fa51df9") ;
  var dateToFind = "[ " + formatDateMonthYear(
    itemToMove.getLastModifiedDate()) + " ]";
  wfDateStamp(itemToMove);
  WF.moveItems([itemToMove],
    wfGetMonthItem(improveMain), 0);
  window.open(
    'https://workflowy.com/#/870fa7a78625',
    '_self');
}
/* ====================== end of wfSendToImprove */
/* wfSendToImproveButton =========== [WorkFlowy] */
function wfSendToImproveButton() {
  wfSendToImprove();
}
/* ================ end of wfSendToImproveButton */
/* wfSendNewSearch ================= [WorkFlowy] */
function wfSendNewSearch(newSearch) {
  WF.search(newSearch);
};
/* ====================== end of wfSendNewSearch */
/* wfSortLater ===================== [WorkFlowy] */
function wfSortLater() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    /* determines theoretical order ---------------
    ------------------------------ [wfSortLater] */
    var theoreticalLaterDummies
      = JSON.parse(JSON.stringify(laterDummies));
    theoreticalLaterDummies.sort(function (a, b) {
      if (!a.hasOwnProperty('orderToSet')) {
        aOrder = 0
      } else {
        aOrder = a.orderToSet
      }
      if (!b.hasOwnProperty('orderToSet')) {
        bOrder = 0
      } else {
        bOrder = b.orderToSet
      }
      return (aOrder > bOrder) ? 1 : -1;
    });
    /* applies the theoretical order --------------
    ------------------------------ [wfSortLater] */
    for (var i = 0; i < theoreticalLaterDummies
      .length; i++) {
      var dummy = theoreticalLaterDummies[i];
      var curItem = WF.getItemById(dummy.wfId);
      if (i != curItem.getPriority()) {
        console.log(`817 [wfSortLater]
          moving
          curItem.getName()|${
          strStripHtmlTags(curItem.getName())}|
          at priority
          i|${i}|
        `);
        WF.moveItems([curItem], wfLater, i);
      }
    }
    /* defaults promise to true -- [wfSortLater] */
    resolve(true);
  })
  /* end of return Promise ------- [wfSortLater] */
}
/* ========================== end of wfSortLater */
/* wfShowMessage =================== [WorkFlowy] */
function wfShowMessage(message) {
  WF.showMessage(message);
  setTimeout(() => WF.hideMessage(), 5000);
}
/* ======================== end of wfShowMessage */
/* wfSwapItems ===================== [WorkFlowy] */
function wfSwapItems(item1, item2) {
  var item1Parent = item1.getParent();
  var item2Parent = item2.getParent();
  item1Priority = item1.getPriority();
  item2Priority = item2.getPriority();
  WF.moveItems([item2], item1Parent, item1Priority);
  WF.moveItems([item1], item2Parent, item2Priority);

  if (debug) {
    console.log(`4530 [wfSwapItems] swapping
    with ${item1.getName()}
    swaps ${item2.getName()}
    `);
  }
  return;
}
/* ========================== end of wfSwapItems */
/* wfTagCounter ==================== [workflowy] */
function wfTagCounter() {
  var sortByCount = false;
  var showCompleted = false;
  if (typeof sortByCount !== "boolean")
      sortByCount = false;
  if (typeof showCompleted !== "boolean")
    showCompleted = true;
  function toastMsg(str, sec, err) {
    wfShowMessage(str.bold(), err);
      setTimeout(()=>WF.hideMessage(), (sec || 2) * 1e3)
  }
  function applyToEachItem(functionToApply, parent) {
    functionToApply(parent);
    for (let child of parent.getChildren()) {
      applyToEachItem(functionToApply, child)
    }
  }
  function findMatchingItems(itemPredicate, parent) {
    const matches = [];
    function addIfMatch(item) {
        if (itemPredicate(item)) {
          matches.push(item)
        }
    }
    applyToEachItem(addIfMatch, parent);
    return matches
  }
  function isVisibleSearchResult(item) {
    const isVisible = WF.completedVisible() || !item.isWithinCompleted();
    return item.data.search_result && isVisible
  }
  function getWfTagsList(item) {
    const tagCounts = item.isMainDocumentRoot() ? getRootDescendantTagCounts() : item.getTagManager().descendantTagCounts;
      const tagsList = tagCounts ? tagCounts.getTagList() : [];
      return tagsList.sort((a,b)=>a.tag.localeCompare(b.tag))
  }
  function getItemTags(item) {
      return WF.getItemNameTags(item).concat(WF.getItemNoteTags(item)).map(t=>t.tag.toLowerCase())
  }
  function getAllTags(items) {
      const tags = [];
      items.forEach(item=>{
          tags.push(...getItemTags(item))
      }
      );
      return tags
  }
  function getVisibleTagsList(item) {
    const visibleItems = findMatchingItems(isVisibleSearchResult, item)
      , tags = getAllTags(visibleItems)
      , uniqueTags = new Set(tags)
      , tagList = [];
    uniqueTags.forEach(uTag=>{
        let uCount = tags.filter(t=>t === uTag).length;
        tagList.push({
            tag: uTag,
            count: uCount
        })
      }
    );
    return tagList.sort((a,b)=>a.tag.localeCompare(b.tag))
  }
  if (!WF.completedVisible() && showCompleted)
      WF.toggleCompletedVisible();
  const current = WF.currentItem();
  const tagCounts = WF.currentSearchQuery()
    ? getVisibleTagsList(current)
    : getWfTagsList(current);
  if (tagCounts.length === 0) {
      return void toastMsg("No tags found.", 2, true)
  }
  if (sortByCount) {
    tagCounts.sort((a,b)=>b.count - a.count);
  }
  const url = `${current.getUrl()}${
    current.isMainDocumentRoot() ? "#" : ""}`;
  const total = tagCounts
    .reduce((sum,t)=>t.count + sum, 0)
    , padMax = total.toString().length
    , search = WF.currentSearchQuery()
    ? WF.currentSearchQuery() + " : " : "";
  tagPre = tagCounts.map(t=>`${
    t.count.toString()
    .padStart(padMax, " ")
    }\t<a class="tagLinks" href="${url}?q=${
    encodeURIComponent(t.tag)}">${t.tag}</a>`);
  WF.showAlertDialog(`<pre><br>${
  tagPre.join('<br>')}<br><br><b>${
  total}\tTOTAL</b></pre>`
  , search + current.getNameInPlainText());
  setTimeout((function() {
    const tagLinks = document
      .getElementsByClassName("tagLinks");
    for (let tagLink of tagLinks) {
      tagLink.addEventListener('click',
        (function() {
        WF.hideDialog()
      }), false)
    }
  }), 100);
}
/* ========================= end of wfTagCounter */
/* wfTimer ========================= [WorkFlowy] */
function wfTimer() {
  getSettings().then(settings => {
    var timerIsOn = settings.timerIsOn;
    if (timerIsOn) {
      timerIsOn = false;
      clearInterval(timer);
    } else {
      timerIsOn = true;
      timer = setInterval(timerFunction, 3000);
      timerNode = WF.currentItem();
      var timeRegex = /\d{2}:\d{2}/.exec(WF
        .currentItem().getName());
      if (timeRegex != null) {
        var remainingSeconds = moment(timeRegex[0]
          , 'mm:ss')
          .diff(moment().startOf('d'), 's');
      } else {
        var remainingSeconds = 11 * 60;
      }
      timerEnd = moment()
        .add(remainingSeconds, 's');
    }
  })
  /* timeFunction helper function ---- [wfTimer] */
  function timerFunction() {
    getSettings().then(settings => {
      var timerEnd = settings.timerEnd;
      remainingSeconds = - moment()
        .diff(timerEnd, 's');
       var newName = strEasyInsert(timerNode
       .getName()
        , moment().startOf('day')
          .seconds(remainingSeconds)
          .format('mm:ss')
        , /\d{2}:\d{2}/)
      if (remainingSeconds <= 0) {
        clearInterval(timer);
        timerIsOn = false;
        newName = timerNode.getName()
          .replace("00:01", "");
        wfShowMessage('finished!!')
      }
      WF.setItemName(timerNode, newName);
    })
  }
}
/* ============================== end of wfTimer */
/* wfWasHiddenByLater ============== [WorkFlowy] */
function wfWasHiddenByLater(curItem, verbose) {
  if (typeof(verbose) == 'undefined') {
    verbose = false;
  }
  var output = curItem.getParent().getName()
    .includes('ater')
    && curItem.getChildren().length == 0
    && curItem.getPriority() > 10;
  if (!output && verbose) {
    console.log(`3309 [wfWasHiddenByLater]
      curItem.getParent().getName()|${curItem
      .getParent().getName()}|
      curItem.getChildren().length|${curItem
      .getChildren().length}|
      curItem.getPriority()|${curItem.getPriority()}|
    `);
  }
  return output;
}
/* =================== end of wfWasHiddenByLater */
/* wfTodayHandleCompleted ========== [WorkFlowy] */
function wfTodayHandleCompleted() {
  return new Promise(resolve => {
    wfUpdateEventLists();
    allTodayItems.forEach(curItem => {
      if (curItem.isCompleted()) {
        if (!wfWasHiddenByLater(curItem, true)) {
          var targetPos = wfLater.getChildren()
            .length;
          /* set 0 to avoid loop with sortLater and hide */
          targetPos = 0;
          console.log(`203 [wfTodayHandleCompleted]
            moving
            curItem.getName()|${curItem.getName()}|
            from
curItem.getParent.getName()|${curItem.getParent().getName()}|
curItem.getPriority()|${curItem.getPriority()}|
            into
            wfLater.getName()|${wfLater
              .getName()}|
            at pos
            targetPos|${targetPos}|
          `);
          WF.moveItems([curItem], wfLater
            , targetPos);
          wfRecycle(curItem);
          wfMarkAsDone(curItem);
        }
      }
    });
    resolve(`wfTodayHandleCompleted finished`);
  })
  /* end of return new Promise --------------------
  --------------------- [wfTodayHandleCompleted] */
}
/* =============== end of wfTodayHandleCompleted */
/* wfUpdateRealHoursCollection() === [WorkFlowy] */
function wfUpdateRealHoursCollection() {
  todayItem.getChildren().forEach(curItem => {
    if (curItem.getName().match(
      /(Done today)/img) == null) {
      hourItems.push(curItem);
      var myReg = curItem.getName()
        .match(/(\d{2}):\d{2}/);
      if (myReg != null) {
        realHourItems.push(parseInt(myReg[1]));
        realHourWfItems.push(curItem);
      }
    }
  });
}
/* ========== end of wfUpdateRealHoursCollection */
/* wfUpdateDoneToday() ============= [WorkFlowy] */
function wfUpdateDoneToday() {
  wfUpdateEventLists();
  /* moves mirrors to later  [wfUpdateDoneToday] */
  var doneTodayItem
    = wfGetChildByName("Done today", todayItem);
  doneTodayItem.getChildren().forEach(
    curItem => {
    if (curItem.getChildren().length > 0) {
      WF.moveItems([curItem], wfLater
        , wfLater.getChildren().length);
    }
  })
  /* renames done today ---- [wfUpdateDoneToday] */
  if (doneTodayItem.getName() != `Done today (${
    doneTodayColl.length})`) {
    console.log('6831 renaming Done today')
    WF.setItemName(doneTodayItem, `Done today (${
      doneTodayColl.length})`);
  }
  /* kills stragglers ------ [wfUpdateDoneToday] */
  var wfDoneTodayItems =
    doneTodayItem.getChildren();
  var childCount = doneTodayItem
    .getChildren().length;
  if (childCount != doneTodayColl.length) {
    /* deletes excess items  [wfUpdateDoneToday] */
    /* (we can do it serenely, as we already ------
    moved items with children at the beginning ----
    of the function) ------- [wfUpdateDoneToday] */
    if (doneTodayColl.length < childCount) {
      for (var i = doneTodayColl.length
        ; i < childCount; i++ ) {
        var itemToDelete = doneTodayItem
          .getChildren()[i];
        var itemToDeleteId = itemToDelete
          .getId();
        wfDeleteItem(itemToDelete,
          `986 [wfUpdateDoneToday]
          deleting item from doneToday
          itemToDeleteId|${itemToDeleteId}|
          itemToDelete|${itemToDelete.getName()}|
          `);
        childCount = doneTodayItem
          .getChildren().length;
      }
    }
    /* creates missing item slots -----------------
    ------------------------ [wfUpdateDoneToday] */
    childCount = doneTodayItem.getChildren()
      .length;
    if (childCount < doneTodayColl.length) {
      while ( doneTodayItem.getChildren()
          .length < doneTodayColl.length) {
        childCount = doneTodayItem.getChildren()
          .length;
        WF.createItem(doneTodayItem,
          childCount);
        console.log(`605
          creating a new slot in doneToday at pos ${
          childCount}
          childCount ${childCount}
          doneTodayColl.length ${doneTodayColl
            .length}
          window.settings.doNotScan ${
            window.settings.doNotScan}
        `);
      }
    }
  }
  /* end of count is wrong - [wfUpdateDoneToday] */
  /* check done item names - [wfUpdateDoneToday] */
  /* disabled for mozilla at work, as doneTodayColl
  is not sorted in Mozilla - [wfUpdateDoneToday] */
  if (navigator.userAgent.includes("Chrome")) {
    for (var i = 0; i < Math.min(doneTodayItem
      .getChildren().length, doneTodayColl.length); i++) {
      var curItem = doneTodayItem.getChildren()[i];
      if (curItem.getName() != wfFormatEvent(
        doneTodayColl[i])) {
        console.log(`048 [wfUpdateDoneToday]
          renaming
          curItem.getName()|${curItem.getName()}|
          into
          wfFormatEvent(doneTodayColl[i])|${
          wfFormatEvent(doneTodayColl[i])}|
          curItem.getPriority()|${
          curItem.getPriority()}|
        `);
        console.log('doneTodayColl');
        console.log(doneTodayColl);
        WF.setItemName(curItem, wfFormatEvent(
          doneTodayColl[i]));
      }
    }
  }
  /* end of if not Mozilla - [wfUpdateDoneToday] */
}
/* ==================== end of wfUpdateDoneToday */
/* wfUpdateInbox =================== [WorkFlowy] */
function wfUpdateInbox() {
  ["947da3dc-5939-99a6-7a31-870fa7a78625"
   , "6048a3e1-ef94-c570-615a-c5f584d34f35"]
    .forEach(curID => {
    var curInbox = WF.getItemById(curID);
    var newName = curInbox
      .getName().replace(/\s*\d+\s*/img, " "
      + (curInbox.getChildren().length) + " ");
    if (newName != curInbox.getName()) {
      WF.setItemName(curInbox, newName);
    }
    /* dateStamps the children */
    curInbox.getChildren().forEach(curChild => {
      if (!wfIsDateStamped(curChild.getName())) {
        WF.setItemName(curChild, wfDateStamp(
          curChild))
      }
    });
  })
}
/* ======================== end of wfUpdateInbox */
/* WORKFLOWY END ================= WORKFLOWY END */

/* ============================================= */
/*                    OTHER                      */
/* ============================================= */
/* activitiesDicfunction() ===================== */
function activitiesDicfunction() {
  return activitiesDic;
};
/* ======================== end of activitiesDic */
/* OTHER END ========================= OTHER END */
