
          window.__NEXT_REGISTER_PAGE('/text-fields', function() {
            var comp = module.exports=webpackJsonp([12],{315:function(e,t,n){e.exports=n(316)},316:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),l=r(o),a=n(5),i=r(a),s=n(6),u=r(s),f=n(10),d=r(f),c=n(11),p=r(c),h=n(2),m=r(h),x=n(0),b=r(x),g=n(1),E=r(g),y=n(30),T=r(y),v=n(317),w=r(v),S=(0,m.default)(["\n  margin-bottom: 20px;\n"],["\n  margin-bottom: 20px;\n"]),F=(0,m.default)(["\n  > .smc-textfield-suffix {\n    color: purple;\n  }\n  > .smc-textfield-prefix {\n    color: maroon;\n  }\n"],["\n  > .smc-textfield-suffix {\n    color: purple;\n  }\n  > .smc-textfield-prefix {\n    color: maroon;\n  }\n"]),C=(0,m.default)(["\n  margin: 0 10%;\n  width: 80%;\n"],["\n  margin: 0 10%;\n  width: 80%;\n"]),_=function(e){return e.length>7},N=w.default.extend(S),P=N.extend(F),L=function(e){function t(){var e,n,r,o;(0,i.default)(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return n=r=(0,d.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(s))),r.state={controlledInputValue:""},r.handleChange=function(e){return r.setState({controlledInputValue:e.target.value})},o=n,(0,d.default)(r,o)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return b.default.createElement(T.default,{theme:{primary:"#03A9F4"}},b.default.createElement("div",{className:this.props.className},b.default.createElement("h1",null,"Text Fields"),b.default.createElement("h2",null,"Simple Examples"),b.default.createElement(N,{hintText:"autofocus",autoFocus:!0}),b.default.createElement(N,{hintText:"Hint Text"}),b.default.createElement(N,{defaultValue:"Default Value"}),b.default.createElement(N,{floatingLabelText:"floating label"}),b.default.createElement(N,{hintText:"with hint text",floatingLabelText:"floating label"}),b.default.createElement(N,{helperText:"persistent helper text",helperTextPersistent:!0}),b.default.createElement(N,{helperText:"default helper text"}),b.default.createElement(N,{hintText:"disabled",disabled:!0}),b.default.createElement(N,{hintText:"Controlled Input",value:this.state.controlledInputValue,onChange:this.handleChange}),b.default.createElement(N,{hintText:"Focus disabled",focusDisabled:!0}),b.default.createElement(N,{hintText:"Full Width",fullWidth:!0}),b.default.createElement("h2",null,"Error Examples"),b.default.createElement(N,{hintText:"Controlled error",errorText:"This error was passed in",error:!0}),b.default.createElement(N,{hintText:"with validation",helperText:"helper text and validation",validator:_,errorText:"This should be at least 8 chars"}),b.default.createElement(N,{floatingLabelText:"A required field",required:!0}),b.default.createElement(N,{prefix:"$"}),b.default.createElement(N,{suffix:"lb"}),b.default.createElement(P,{prefix:"$",suffix:"/mo."}),b.default.createElement(N,{floatingLabelText:b.default.createElement("div",null,"React component",b.default.createElement("img",{style:{height:"18px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/768px-Ei-sc-github.svg.png"}))}),b.default.createElement("h2",null,"Text areas"),b.default.createElement(N,{textarea:!0,floatingLabelText:"Text area with 1 row"}),b.default.createElement(N,{textarea:!0,floatingLabelText:"Text area with two rows",rows:2})))}}]),t}(x.PureComponent),B=(0,E.default)(L)(C);t.default=B},317:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),l=r(o),a=n(9),i=r(a),s=n(5),u=r(s),f=n(6),d=r(f),c=n(10),p=r(c),h=n(11),m=r(h),x=n(1),b=r(x),g=n(0),E=r(g),y=(0,l.default)(["\n  ",";\n"],["\n  ",";\n"]),T=(0,l.default)(["\n  transition: opacity 200ms;\n  opacity: ",";\n"],["\n  transition: opacity 200ms;\n  opacity: ",";\n"]),v=(0,l.default)(["\n  position: absolute;\n  bottom: -2em;\n  font-size: 0.75em;\n  width: 100%;\n"],["\n  position: absolute;\n  bottom: -2em;\n  font-size: 0.75em;\n  width: 100%;\n"]),w=(0,l.default)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: ",";\n"]),S=(0,l.default)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: ",";\n"],["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  color: ",";\n"]),F=(0,l.default)(["\n  position: absolute;\n  transition: all 200ms;\n  top: ",";\n  font-size: 1em;\n  transform: ",";\n  transform-origin: 0 50%;\n  color: ",";\n  width: 100%;\n  left: ",";\n  ",";\n"],["\n  position: absolute;\n  transition: all 200ms;\n  top: ",";\n  font-size: 1em;\n  transform: ",";\n  transform-origin: 0 50%;\n  color: ",";\n  width: 100%;\n  left: ",";\n  ",";\n"]),C=(0,l.default)(["\n  position: absolute;\n  color: ",";\n  opacity: ",";\n  width: 100%;\n  left: ",";\n  ",";\n"],["\n  position: absolute;\n  color: ",";\n  opacity: ",";\n  width: 100%;\n  left: ",";\n  ",";\n"]),_=(0,l.default)(["\n  color: ",";\n  ",";\n  ",";\n  ",";\n"],["\n  color: ",";\n  ",";\n  ",";\n  ",";\n"]),N=(0,l.default)(["\n  position: absolute;\n  bottom: 0px;\n  border-top: 1.5px solid;\n  border-top-color: ",";\n  width: 0%;\n  transition: width 200ms;\n  ",";\n  ",";\n"],["\n  position: absolute;\n  bottom: 0px;\n  border-top: 1.5px solid;\n  border-top-color: ",";\n  width: 0%;\n  transition: width 200ms;\n  ",";\n  ",";\n"]),P=(0,l.default)(["\n  width: calc(100% - ","em);\n  color: ",";\n  padding-left: ",";\n  ",";\n"],["\n  width: calc(100% - ","em);\n  color: ",";\n  padding-left: ",";\n  ",";\n"]),L=(0,l.default)(["",""],["",""]),B=(0,l.default)(["\n  width: calc(100% - ","em);\n  color: ",";\n  padding-left: ",";\n  ",";\n  resize: none;\n"],["\n  width: calc(100% - ","em);\n  color: ",";\n  padding-left: ",";\n  ",";\n  resize: none;\n"]),z=(0,l.default)(["\n  width: ",";\n  font-size: 1em;\n  line-height: 1.5em;\n  position: relative;\n  background-color: transparent;\n  font-family: lato, sans-serif;\n  border-bottom: 0.5px ",";\n  border-bottom-color: ",";\n"],["\n  width: ",";\n  font-size: 1em;\n  line-height: 1.5em;\n  position: relative;\n  background-color: transparent;\n  font-family: lato, sans-serif;\n  border-bottom: 0.5px ",";\n  border-bottom-color: ",";\n"]),k=function(e){function t(){var e,n,r,o;(0,u.default)(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return n=r=(0,p.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(a))),r.state={text:r.props.defaultValue||"",focus:!1,error:r.props.error||!1,hasBeenFocused:!1},r.onChange=function(e){r.props.onChange&&r.props.onChange(e);var t=e.target.value,n=r.props.validator&&!r.props.validator(t),o=!!r.props.required&&!e.target.value;r.setState({text:t,error:r.props.error||n||o})},r.onFocus=function(e){r.props.onFocus&&r.props.onFocus(e),r.setState({focus:!0,hasBeenFocused:!0})},r.onBlur=function(e){r.props.onBlur&&r.props.onBlur(e),r.setState({focus:!1})},o=n,(0,p.default)(r,o)}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=Boolean(this.state.error||this.props.error||this.props.errorText);return E.default.createElement("div",{className:this.props.className+" smc-text-field-container"},E.default.createElement(O,null,this.props.suffix),E.default.createElement(H,null,this.props.prefix),E.default.createElement(J,{className:"smc-text-field-floating-label",error:e,hasPrefix:!!this.props.prefix,focus:this.state.focus,floatingLabelStyle:e?this.props.floatingLabelErrorStyle:this.props.floatingLabelStyle,floating:this.state.focus||this.props.hintText||this.state.text.length},this.props.floatingLabelText||"",this.props.required?"*":""),E.default.createElement(R,{className:"smc-text-field-hint-text",hintTextStyle:this.props.hintTextStyle,hasPrefix:this.props.prefix,error:e,show:!this.props.defaultValue&&!this.state.text.length&&!this.props.value},this.props.hintText),this.props.helperText&&E.default.createElement(K,{className:"smc-text-field-helper-text",helperTextStyle:this.props.helperTextStyle,show:!this.state.error&&(!!this.props.helperTextPersistent||this.state.focus)},this.props.helperText),E.default.createElement(G,{show:e,className:"smc-text-field-error-text",errorTextStyle:this.props.errorTextStyle},this.props.errorText),E.default.createElement(Q,{disabled:this.props.focusDisabled,className:"smc-text-field-underline-focus",underlineFocusStyle:this.props.underlineFocusStyle,focus:this.state.focus,error:e}),this.props.textarea?E.default.createElement(Y,{rows:this.props.rows||1,hasPrefix:!!this.props.prefix,hasSuffix:!!this.props.suffix,inputStyle:this.props.inputStyle,disabled:this.props.disabled,autoFocus:this.props.autoFocus,value:this.props.value||this.state.text,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,className:"smc-text-field-area"}):E.default.createElement(X,{hasPrefix:!!this.props.prefix,hasSuffix:!!this.props.suffix,inputStyle:this.props.inputStyle,disabled:this.props.disabled,autoFocus:this.props.autoFocus,value:this.props.value||this.state.text,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,className:"smc-text-field-input"}))}}]),t}(g.PureComponent),V=(0,x.css)(y,function(e){return e.theme.textColors.primary}),q=(0,x.css)(y,function(e){return e.theme.textColors.secondary}),A=(0,x.css)(y,function(e){return e.theme.textColors.hint}),I=(0,x.css)(y,function(e){return e.theme.primary}),M=(0,x.css)(y,function(e){return e.theme.textColors.error||"#d50000"}),D=(0,x.css)(T,function(e){return+e.show}),W=(0,x.css)(v),j=function(e){return E.default.createElement("div",{className:e.className+" smc-textfield-suffix"},e.children)},O=(0,b.default)(j)(w,A),$=function(e){return E.default.createElement("div",{className:e.className+" smc-textfield-prefix"},e.children)},H=(0,b.default)($)(S,A),J=b.default.div(F,function(e){return e.floating?"-1.5em":"0em"},function(e){return"scale("+(e.floating?.75:1)+")"},function(e){return e.error?M:e.focus&&e.floating?I:q},function(e){return e.hasPrefix?"1em":"0em"},function(e){return e.floatingLabelStyle}),R=b.default.div(C,function(e){return e.error?M:A},function(e){return+e.show},function(e){return e.hasPrefix?"1em":"0em"},function(e){return e.hintTextStyle}),G=b.default.div(_,M,D,W,function(e){return e.errorTextStyle}),K=b.default.div(_,q,D,W,function(e){return e.helperTextStyle}),Q=b.default.div(N,function(e){return e.error?M:I},function(e){return e.focus&&!e.disabled&&"width: 100%"},function(e){return e.underlineFocusStyle}),U="\n  position: relative;\n  border: none;\n  outline: none;\n  cursor: inherit;\n  background-color: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n",X=b.default.input(L,U).extend(P,function(e){return e.hasSuffix?1:0},V,function(e){return e.hasPrefix?"1em":"0"},function(e){return e.inputStyle}),Y=b.default.textarea(L,U).extend(B,function(e){return e.hasSuffix?1:0},V,function(e){return e.hasPrefix?"1em":"0"},function(e){return e.inputStyle}),Z=(0,b.default)(k)(z,function(e){return e.fullWidth?"100%":"167px"},function(e){return e.disabled?"dotted":"solid"},function(e){return e.error?M:A});t.default=Z}},[315]);
            return { page: comp.default }
          })
        