(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),s=a.n(r),i=(a(20),a(1)),l=a(2),c=a(4),u=a(3),m=a(5),d=(a(21),a(7));a(22),a(23);var p=function(e){var t=e.type,a=e.value,n=e.inputHandler,r=(e.index,e.children),s="";return"text_input"===t&&(s=o.a.createElement("input",{onChange:n,value:a,type:"text"})),o.a.createElement("div",{className:"Message"},o.a.createElement("div",{className:"MessageText"},r,s))};a(24);var h=function(e){return o.a.createElement("div",{onClick:e.onClick,className:"Button"},o.a.createElement("div",{className:"ButtonText"},e.text))},g=(a(25),[{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442!"),o.a.createElement("div",{className:"Break"}),o.a.createElement("div",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 room8, \u044f - \u0431\u043e\u0442 ",o.a.createElement("span",{role:"img","aria-label":"Happy Face"},"\ud83d\ude0a")),o.a.createElement("div",null,"\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043d\u0430\u0439\u0442\u0438 \u0441\u043e\u0441\u0435\u0434\u0430 \u043c\u0435\u0447\u0442\u044b. \u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043e \u0441\u0435\u0431\u0435.")),chooseData:["\u0414\u0430\u043b\u0435\u0435"],type:"info",name:"greeting"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 email \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438")),chooseData:["\u0414\u0430\u043b\u0435\u0435"],type:"text_input",name:"email"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u0413\u0434\u0435 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0436\u0438\u0442\u044c? \u041f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u0441\u0442\u0430\u043d\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u043e \u0438\u043b\u0438 \u0440\u0430\u0439\u043e\u043d.")),chooseData:["\u0414\u0430\u043b\u0435\u0435"],type:"text_input",name:"location"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u0438\u0441\u043a?")),chooseData:["\u043c\u0435\u043d\u044c\u0448\u0435 \u043d\u0435\u0434\u0435\u043b\u0438","\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0435\u0441\u044f\u0446\u0430","\u0431\u043e\u043b\u044c\u0448\u0435 \u043c\u0435\u0441\u044f\u0446\u0430"],type:"single_choice_button",name:"timeForSearch"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0440\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438.")),chooseData:["\u0421\u0442\u0443\u0434\u0435\u043d\u0442","IT","\u042e\u0440\u0438\u0441\u0442","\u0416\u0443\u0440\u043d\u0430\u043b\u0438\u0441\u0442","\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440","\u0412\u0440\u0430\u0447","\u0414\u0440\u0443\u0433\u043e\u0435"],type:"single_choice_button",name:"job"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u0441?")),chooseData:["\u0421\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d","\u0414\u043e\u043c\u043e\u0441\u0435\u0434","\u041a\u0438\u043d\u043e\u043c\u0430\u043d","\u041a\u0443\u043b\u0438\u043d\u0430\u0440","\u0425\u0430\u0439\u043f\u043e\u0436\u043e\u0440"],type:"single_choice_button",name:"bestWord"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041a\u0430\u043a\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0445\u0443\u0436\u0435 \u0432\u0441\u0435\u0433\u043e \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u0441?")),chooseData:["\u0421\u043f\u043e\u0440\u0442\u0441\u043c\u0435\u043d","\u0414\u043e\u043c\u043e\u0441\u0435\u0434","\u041a\u0438\u043d\u043e\u043c\u0430\u043d","\u041a\u0443\u043b\u0438\u043d\u0430\u0440","\u0425\u0430\u0439\u043f\u043e\u0436\u043e\u0440"],type:"single_choice_button",name:"worstWord"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),o.a.createElement("div",null,"\u042f \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u044e \u0437\u0430\u0432\u0442\u0440\u0430\u043a\u0430\u0442\u044c ...")),chooseData:["\u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u0435\u0441\u0442\u0432\u0435","\u0441 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u043e\u043c"],type:"single_choice_button",name:"breakfast"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?")),chooseData:["\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"],type:"text_input",name:"age"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439")),chooseData:["\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"],type:"roommates",name:"additionalComments"},{messageData:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!"),o.a.createElement("div",null,"\u042f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043d\u0435\u0434\u0435\u043b\u0438 \u0431\u0443\u0434\u0443 \u0432\u044b\u0441\u044b\u043b\u0430\u0442\u044c \u0432\u0430\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0430\u043d\u043a\u0435\u0442\u044b.")),chooseData:[],type:"last",name:"finish"}]);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={type:"",index:0,block:{},dataForCollect:{buttons:"",name:""},chooseData:[],messageData:"",questionsQuantity:10,inputs:[],currentValue:"",form:{}},a.updateStateHandler=function(e,t,n,o,r){r=r||a.state.questionsQuantity;var s=g[o];a.setState({type:e,messageData:t,chooseData:n,index:o,block:s,questionsQuantity:r})},a.inputHandler=function(e){a.setState({form:f({},a.state.form,Object(d.a)({},a.state.block.name,e.target.value))})},a.nextHandler=function(e){var t=a.state.index+1,n=g[t],o=n.type,r=n.messageData,s=n.chooseData,i=n.name;a.setState({dataForCollect:{buttons:a.state.dataForCollect.buttons.concat(e),name:i}}),a.updateStateHandler(o,r,s,t,a.state.questionsQuantity-1),window.history.pushState({index:t},i,"#".concat(i)),t===g.length-1&&a.sendData()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=g[0],a=t.messageData,n=t.chooseData,o=t.type;this.updateStateHandler(o,a,n,0),window.onpopstate=function(t){var a=t.state.index,n=g[a],o=n.type,r=n.messageData,s=n.chooseData;e.updateStateHandler(o,r,s,a,e.state.questionsQuantity+1)}}},{key:"sendData",value:function(){var e=f({},JSON.parse(JSON.stringify(this.state)),{sendDate:new Date});this.props.db.collection("profiles").add(e).then(function(e){console.log("Document written with ID: ",e.id)}).catch(function(e){console.error("Error adding document: ",e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.messageData,n=t.chooseData,r=t.index,s=g[r],i=[];n.length&&(i=n.map(function(t,a){return o.a.createElement(h,{key:a,onClick:function(){return e.nextHandler(t)},text:t})}));var l=o.a.createElement("div",{className:"ButtonsWrapper"},i);return i.length>2&&(l=o.a.createElement("div",{className:"ButtonsWrapperMultiple"},i)),o.a.createElement("div",{className:"View"},this.state.questionsQuantity?o.a.createElement("div",{className:"QuestionsQuantity"},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432: ",this.state.questionsQuantity):"",o.a.createElement(p,{type:this.state.type,index:this.state.index,inputHandler:this.inputHandler,value:this.state.form[s.name]||""},a),l)}}]),t}(o.a.Component),E=a(8),b=a.n(E);a(26);b.a.initializeApp({apiKey:"AIzaSyC6Bmz27pWZ4q9dOv8i4AUllEY3sLL9Pm4",authDomain:"room8-fd9e6.firebaseapp.com",databaseURL:"https://room8-fd9e6.firebaseio.com",projectId:"room8-fd9e6"});var D=b.a.firestore(),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(y,{db:D}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.c66c6822.chunk.js.map