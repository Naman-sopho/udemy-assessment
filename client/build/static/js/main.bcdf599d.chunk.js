(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(89),a(26)),i=a(27),s=a(30),u=a(29),h=(a(59),a(147)),m=a(158),d=a(38),p=a(148),E=a(51),v=a.n(E),f=a(43),g=a.n(f),k=a(143),y=a(159),S=a(135),b=a(155),w=a(157),C=a(136),q=a(137),j=a(138),O=a(156),z=a(139),Q=a(152),A=a(141),M=a(142),W=a(140),x=a(154),B=a(72),N=a.n(B),T=a(73),I=a.n(T),P=a(153),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={activeStep:0,answers:Array(e.questions.length).fill(-1),openWarning:!1,toAnswer:""},n}return Object(i.a)(a,[{key:"handleToggle",value:function(e,t){var a=this.state.answers;a[e]=t,this.setState({answers:a})}},{key:"handleNext",value:function(e){var t=this;if(this.state.activeStep===this.props.questions.length-1){var a=this.props.questions,n=a.length,c=this.state.answers,r="";for(e=0;e<n;e++)-1==c[e]&&(0==r.length?r+=e+1:r+=", ".concat(e+1));if(r.length>0)return void this.setState({openWarning:!0,toAnswer:r.length>1?"questions ".concat(r):"question ".concat(r)});var l={};for("Q".concat(1),e=0;e<n;e++)l["".concat(a[e].id)]=c[e];g.a.post("check_answers",{answers:l}).then((function(e){t.props.openScoreModal(e.data)}))}this.setState({activeStep:e+1})}},{key:"handlePrev",value:function(e){this.setState({activeStep:e-1})}},{key:"setActiveStep",value:function(e){this.setState({activeStep:e})}},{key:"handleClose",value:function(e,t){"clickaway"!==t&&this.setState({openWarning:!1})}},{key:"render",value:function(){var e=this,t=this.props.questions,a=this.state,n=a.activeStep,r=a.answers,l=a.openWarning,o=a.toAnswer;return c.a.createElement(y.a,{activeStep:n,orientation:"vertical"},t.map((function(a,l){return c.a.createElement(S.a,{key:"q".concat(l)},c.a.createElement(b.a,{onClick:function(){return e.setActiveStep(l)}},c.a.createElement(d.a,{style:{"font-weight":"bold"},align:"left"},"Question ".concat(l+1))),c.a.createElement(w.a,null,c.a.createElement(C.a,{elevation:3},c.a.createElement(q.a,null,c.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"left"},a.question),c.a.createElement(j.a,null,c.a.createElement(O.a,{key:"a".concat(l),button:!0,onClick:function(){return e.handleToggle(l,0)}},c.a.createElement(z.a,null,c.a.createElement(Q.a,{edge:"start",checked:0===r[l]})),c.a.createElement(A.a,{id:"a".concat(l)},c.a.createElement(d.a,null,a.a))),c.a.createElement(O.a,{key:"b".concat(l),button:!0,onClick:function(){return e.handleToggle(l,1)}},c.a.createElement(z.a,null,c.a.createElement(Q.a,{edge:"start",checked:1===r[l]})),c.a.createElement(A.a,{id:"b".concat(l)},c.a.createElement(d.a,null,a.b))),c.a.createElement(O.a,{key:"c".concat(l),button:!0,onClick:function(){return e.handleToggle(l,2)}},c.a.createElement(z.a,null,c.a.createElement(Q.a,{edge:"start",checked:2===r[l]})),c.a.createElement(A.a,{id:"c".concat(l)},c.a.createElement(d.a,null,a.c))),c.a.createElement(O.a,{key:"d".concat(l),button:!0,onClick:function(){return e.handleToggle(l,3)}},c.a.createElement(z.a,null,c.a.createElement(Q.a,{edge:"start",checked:3===r[l]})),c.a.createElement(A.a,{id:"d".concat(l)},c.a.createElement(d.a,null,a.d))))),c.a.createElement(M.a,{disableSpacing:!0},c.a.createElement(W.a,{"aria-label":"prev",disabled:0===l,onClick:function(){return e.handlePrev(l)}},c.a.createElement(N.a,null)),c.a.createElement(W.a,{"aria-label":"next",onClick:function(){return e.handleNext(l)}},n===t.length-1?c.a.createElement(I.a,null):c.a.createElement(v.a,null))))))})),c.a.createElement(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:l,autoHideDuration:6e3,onClose:function(t,a){return e.handleClose(t,a)}},c.a.createElement(P.a,{elevation:6,variant:"filled",severity:"error"},"Please answer the ".concat(o," before submitting."))))}}]),a}(n.Component),J=a(151),U=a(144),F=a(145),H=a(150),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.setState({loading:!0,score:0,questions:[]}),g.a.get("questions").then((function(t){e.setState({questions:t.data},(function(){this.setState({loading:!1})}))}))}},{key:"openScoreModal",value:function(e){this.setState({score:e,showScore:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"quiz"},c.a.createElement(d.a,{gutterBottom:!0,variant:"h3",color:"white"},"Udemy Coding Challenge Quiz"),this.state.loading?c.a.createElement(k.a,null):c.a.createElement("div",null,c.a.createElement(D,{questions:this.state.questions,openScoreModal:function(t){return e.openScoreModal(t)}})),c.a.createElement(J.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:this.state.showScore},c.a.createElement(U.a,null,"Score"),c.a.createElement(F.a,null,c.a.createElement(H.a,{position:"relative",display:"inline-flex"},c.a.createElement(k.a,{variant:"static",value:Math.round(this.state.score/this.state.questions.length*100)}),c.a.createElement(H.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},c.a.createElement(d.a,{variant:"caption",component:"div",color:"textSecondary"},"".concat(this.state.score," / ").concat(this.state.questions.length)))))))}}]),a}(n.Component),$=a(74),_=a(146),G=Object($.a)({typography:{fontFamily:"'Montserrat', sans-serif"}}),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.setState({startQuiz:!1})}},{key:"handleStartQuiz",value:function(){this.setState({startQuiz:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement(_.a,{theme:G},c.a.createElement("div",{className:"App"},c.a.createElement(h.a,{container:!0},this.state.startQuiz?c.a.createElement(h.a,{item:!0,md:12,className:"App-header",justify:"center",alignItems:"center"},c.a.createElement(m.a,{direction:"up",in:this.state.startQuiz},c.a.createElement(K,null))):c.a.createElement(h.a,{item:!0,md:12},c.a.createElement(m.a,{direction:"down",in:!this.state.startQuiz},c.a.createElement("header",{className:"App-header"},c.a.createElement(d.a,{gutterBottom:!0,variant:"h3"},"Welcome to the Udemy Coding Challenge Quiz!!!"),c.a.createElement(p.a,{variant:"extended",onClick:function(){return e.handleStartQuiz()}},"Start Quiz \xa0",c.a.createElement(v.a,null))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){},84:function(e,t,a){e.exports=a(111)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.bcdf599d.chunk.js.map