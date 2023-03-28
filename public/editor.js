(()=>{var e,t={950:()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.dropblockeditor=function(t){return{iframe:null,dropList:null,insert:!1,mobile:!1,lastTopPos:0,cursorPos:0,currentDragItem:null,insertBeforeClasses:["after:opacity-100","after:top-0","after:h-[5px]"],insertAfterClasses:["after:opacity-100","after:bottom-0","after:h-[5px]"],init:function(){var e=this;this.iframe=document.getElementById("frame"),this.dropList=document.querySelector("[drop-list]"),document.addEventListener("keydown",(function(t){return e.undo(t,e)})),document.addEventListener("keydown",(function(t){return e.redo(t,e)})),this.initListeners(),this.iframe.addEventListener("load",(function(){e.initListeners(),e.iframe.contentWindow.scrollTo(0,e.lastTopPos)}))},initListeners:function(){var t=this,r=this.iframe.contentWindow.document;r.addEventListener("keydown",(function(e){return t.undo(e,t)})),r.addEventListener("keydown",(function(e){return t.redo(e,t)})),this.dropList.querySelectorAll("[drag-item]").forEach((function(e){e.addEventListener("dragstart",(function(e){e.target.setAttribute("inserting",!0)})),e.addEventListener("dragend",(function(e){e.target.removeAttribute("inserting")})),e.addEventListener("dragover",(function(e){return e.preventDefault()}))})),r.querySelectorAll("[drop-placeholder]").forEach((function(e){e.addEventListener("dragover",(function(e){return e.preventDefault()})),e.addEventListener("dragenter",(function(e){e.preventDefault(),e.target.classList.add("bg-gray-200/50","animate-pulse")})),e.addEventListener("dragleave",(function(e){e.preventDefault(),e.target.classList.remove("bg-gray-200/50","animate-pulse")})),e.addEventListener("drop",(function(e){if(e.preventDefault,e.target.closest("[drop-placeholder]")){var r=document.querySelector("[inserting]");return null!=r?(t.component().call("insertBlock",r.dataset.block,0),void(r=!1)):void 0}}))})),r.querySelectorAll("[drag-item]").forEach((function(n){n.addEventListener("click",(function(e){Livewire.emit("blockEditComponentSelected",e.target.closest("[drag-item]").dataset.block)}),!1),n.addEventListener("dragstart",(function(e){e.target.setAttribute("dragging",!0),t.currentDragItem=n})),n.addEventListener("dragover",(function(r){r.preventDefault();var n=r.target.closest("[drag-item]");if(t.currentDragItem!==n){var a,i,o=t.beforeOrAfterEl(r,n),s=null!=t.currentDragItem&&t.currentDragItem.previousElementSibling;if(n!=(null!=t.currentDragItem&&t.currentDragItem.nextElementSibling)&&"before"===o)(a=n.classList).remove.apply(a,e(t.insertAfterClasses)),(i=n.classList).add.apply(i,e(t.insertBeforeClasses));else if(n!=s&&"after"===o){var l,c;(l=n.classList).remove.apply(l,e(t.insertBeforeClasses)),(c=n.classList).add.apply(c,e(t.insertAfterClasses))}else{var d;(d=n.classList).remove.apply(d,e(t.insertBeforeClasses).concat(e(t.insertAfterClasses)))}}})),n.addEventListener("dragend",(function(e){e.target.removeAttribute("dragging"),t.currentDragItem=null})),n.addEventListener("dragenter",(function(e){e.target.hasAttribute("drag-item")&&e.target.setAttribute("is-target",!0)})),n.addEventListener("dragleave",(function(r){var n;(r.preventDefault,r.target.hasAttribute("is-target"))&&(n=r.target.classList).remove.apply(n,e(t.insertAfterClasses).concat(e(t.insertBeforeClasses)))})),n.addEventListener("drop",(function(n){n.preventDefault;var a=r.querySelector("[dragging]"),i=document.querySelector("[inserting]");if(n.target.closest("[drag-item]")){var o;if(n.target.hasAttribute("drag-item"))(o=n.target.classList).remove.apply(o,e(t.insertAfterClasses).concat(e(t.insertBeforeClasses)));t.lastTopPos=r.documentElement.scrollTop;var s=t.beforeOrAfterEl(n,n.target.closest("[drag-item]"));if(null!=i)return t.component().call("insertBlock",i.dataset.block,n.target.closest("[drag-item]").dataset.block,s),void(i=!1);"after"===s?n.target.closest("[drag-item]").after(a):n.target.closest("[drag-item]").before(a);var l=Array.from(r.querySelectorAll("[drag-item]")).map((function(e){return e.dataset.block}));t.component().call("reorder",l)}}))}))},isBefore:function(e,t,r){var n=!1,a=!1,i=!1;return e.querySelectorAll("[drag-item]").forEach((function(e){i||(a=!!a||e==r,!1!==(n=!!n||e==t)||!0!==a||(i=!0))})),i},beforeOrAfterEl:function(e,t){var r=t.getBoundingClientRect(),n=r.y,a=n+r.height/2,i=a,o=i+r.height/2,s=e.clientY>=n&&e.clientY<=a,l=e.clientY>=i&&e.clientY<=o;return s?"before":!!l&&"after"},component:function(){return Livewire.find(frame.closest("[wire\\:id]").getAttribute("wire:id"))},undo:function(e,t){!e.ctrlKey&&!e.metaKey||e.shiftKey||"z"!==e.key||(e.preventDefault(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&window.history.forward(),t.component().call("undo"))},redo:function(e,t){(e.ctrlKey||e.metaKey)&&e.shiftKey&&"z"===e.key&&(e.preventDefault(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&window.history.forward(),t.component().call("redo"))}}}},611:()=>{}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,a,i)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,a,i]=e[d],s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,a,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={192:0,982:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,i,[o,s,l]=r,c=0;if(o.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[982],(()=>n(950)));var a=n.O(void 0,[982],(()=>n(611)));a=n.O(a)})();