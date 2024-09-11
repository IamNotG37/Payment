import{s as Ja,n as _s,r as Za,o as tl}from"../chunks/scheduler.BvLojk_z.js";import{S as el,i as nl,e as Dt,s as Rn,b as Cr,c as Nt,d as Pn,y as ys,h as Sn,f as br,g as Fe,o as It,j as rl,k as yt,z as le,A as Cn}from"../chunks/index.OsuhnpW-.js";var Es={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},il=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let P=(c&15)<<2|g>>6,b=g&63;f||(b=64,u||(P=64)),i.push(e[I],e[w],e[P],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ro(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):il(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||g==null||w==null)throw new sl;const P=o<<2|c>>4;if(i.push(P),g!==64){const b=c<<4&240|g>>2;if(i.push(b),w!==64){const V=g<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ol=function(n){const t=ro(n);return io.encodeByteArray(t,!0)},Ln=function(n){return ol(n).replace(/\./g,"")},al=function(n){try{return io.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=()=>ll().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof Es>"u")return;const n=Es.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&al(n[1]);return t&&JSON.parse(t)},Yr=()=>{try{return ul()||cl()||hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fl=n=>{var t,e;return(e=(t=Yr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},dl=n=>{const t=fl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},so=()=>{var n;return(n=Yr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ln(JSON.stringify(e)),Ln(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _l(){var n;const t=(n=Yr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yl(){return!_l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function El(){try{return typeof indexedDB=="object"}catch{return!1}}function vl(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="FirebaseError";class _e extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Tl,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Il(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new _e(s,c,i)}}function Il(n,t){return n.replace(Al,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Al=/\{\$([^}]+)}/g;function Lr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(vs(o)&&vs(u)){if(!Lr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function vs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new pl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pl(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(n){return n===Xt?void 0:n}function Pl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Cl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},bl=F.INFO,Vl={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Dl=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Vl[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ao{constructor(t){this.name=t,this._logLevel=bl,this._logHandler=Dl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Nl=(n,t)=>t.some(e=>n instanceof e);let Ts,Is;function kl(){return Ts||(Ts=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ol(){return Is||(Is=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,Fr=new WeakMap,uo=new WeakMap,Vr=new WeakMap,Jr=new WeakMap;function Ml(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ut(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&lo.set(e,n)}).catch(()=>{}),Jr.set(t,n),t}function xl(n){if(Fr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Fr.set(n,t)}let Br={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||uo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ll(n){Br=n(Br)}function Fl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Dr(this),t,...e);return uo.set(i,t.sort?t.sort():[t]),Ut(i)}:Ol().includes(n)?function(...t){return n.apply(Dr(this),t),Ut(lo.get(this))}:function(...t){return Ut(n.apply(Dr(this),t))}}function Bl(n){return typeof n=="function"?Fl(n):(n instanceof IDBTransaction&&xl(n),Nl(n,kl())?new Proxy(n,Br):n)}function Ut(n){if(n instanceof IDBRequest)return Ml(n);if(Vr.has(n))return Vr.get(n);const t=Bl(n);return t!==n&&(Vr.set(n,t),Jr.set(t,n)),t}const Dr=n=>Jr.get(n);function Ul(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Ut(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Ut(u.result),f.oldVersion,f.newVersion,Ut(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const jl=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],Nr=new Map;function As(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Nr.get(t))return Nr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=$l.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||jl.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),s&&f.done]))[0]};return Nr.set(t,o),o}Ll(n=>({...n,get:(t,e,i)=>As(t,e)||n.get(t,e,i),has:(t,e)=>!!As(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Hl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Hl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ur="@firebase/app",ws="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new ao("@firebase/app"),zl="@firebase/app-compat",Gl="@firebase/analytics-compat",Kl="@firebase/analytics",Ql="@firebase/app-check-compat",Wl="@firebase/app-check",Xl="@firebase/auth",Yl="@firebase/auth-compat",Jl="@firebase/database",Zl="@firebase/database-compat",tu="@firebase/functions",eu="@firebase/functions-compat",nu="@firebase/installations",ru="@firebase/installations-compat",iu="@firebase/messaging",su="@firebase/messaging-compat",ou="@firebase/performance",au="@firebase/performance-compat",lu="@firebase/remote-config",uu="@firebase/remote-config-compat",cu="@firebase/storage",hu="@firebase/storage-compat",fu="@firebase/firestore",du="@firebase/vertexai-preview",pu="@firebase/firestore-compat",mu="firebase",gu="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",_u={[Ur]:"fire-core",[zl]:"fire-core-compat",[Kl]:"fire-analytics",[Gl]:"fire-analytics-compat",[Wl]:"fire-app-check",[Ql]:"fire-app-check-compat",[Xl]:"fire-auth",[Yl]:"fire-auth-compat",[Jl]:"fire-rtdb",[Zl]:"fire-rtdb-compat",[tu]:"fire-fn",[eu]:"fire-fn-compat",[nu]:"fire-iid",[ru]:"fire-iid-compat",[iu]:"fire-fcm",[su]:"fire-fcm-compat",[ou]:"fire-perf",[au]:"fire-perf-compat",[lu]:"fire-rc",[uu]:"fire-rc-compat",[cu]:"fire-gcs",[hu]:"fire-gcs-compat",[fu]:"fire-fst",[pu]:"fire-fst-compat",[du]:"fire-vertex","fire-js":"fire-js",[mu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Map,yu=new Map,$r=new Map;function Rs(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Bn(n){const t=n.name;if($r.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;$r.set(t,n);for(const e of Fn.values())Rs(e,n);for(const e of yu.values())Rs(e,n);return!0}function Eu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new oo("app","Firebase",vu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=gu;function co(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:jr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=so()),!e)throw jt.create("no-options");const o=Fn.get(s);if(o){if(Lr(e,o.options)&&Lr(i,o.config))return o;throw jt.create("duplicate-app",{appName:s})}const u=new Sl(s);for(const f of $r.values())u.addComponent(f);const c=new Tu(e,i,u);return Fn.set(s,c),c}function Au(n=jr){const t=Fn.get(n);if(!t&&n===jr&&so())return co();if(!t)throw jt.create("no-app",{appName:n});return t}function ce(n,t,e){var i;let s=(i=_u[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(c.join(" "));return}Bn(new Ke(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="firebase-heartbeat-database",Ru=1,Qe="firebase-heartbeat-store";let kr=null;function ho(){return kr||(kr=Ul(wu,Ru,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Qe)}catch(e){console.warn(e)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),kr}async function Pu(n){try{const e=(await ho()).transaction(Qe),i=await e.objectStore(Qe).get(fo(n));return await e.done,i}catch(t){if(t instanceof _e)Mt.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function Ps(n,t){try{const i=(await ho()).transaction(Qe,"readwrite");await i.objectStore(Qe).put(t,fo(n)),await i.done}catch(e){if(e instanceof _e)Mt.warn(e.message);else{const i=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(i.message)}}}function fo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=1024,Cu=30*24*60*60*1e3;class bu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Du(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ss();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Cu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Mt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ss(),{heartbeatsToSend:i,unsentEntries:s}=Vu(this._heartbeatsCache.heartbeats),o=Ln(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function Ss(){return new Date().toISOString().substring(0,10)}function Vu(n,t=Su){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Cs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Cs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Du{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return El()?vl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Cs(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){Bn(new Ke("platform-logger",t=>new ql(t),"PRIVATE")),Bn(new Ke("heartbeat",t=>new bu(t),"PRIVATE")),ce(Ur,ws,n),ce(Ur,ws,"esm2017"),ce("fire-js","")}Nu("");var ku="firebase",Ou="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ce(ku,Ou,"app");var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var po;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)p[Ct-2]=arguments[Ct];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^m&(y^T))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^T)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~T))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)E[m++]=this.g[d]>>>_&255;return E};function o(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function u(E,d){this.h=d;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(m[y]=T,_=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function g(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(g(-E));for(var d=[],m=1,_=0;E>=m;_++)d[_]=E/m|0,m*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=g(Math.pow(d,T)),_=_.j(T).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=f(0),P=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(k(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(k(this))return"-"+N(this).toString(E);for(var d=g(Math.pow(E,6)),m=this,_="";;){var y=Z(m,d).g;m=U(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,V(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=U(this,E),k(E)?-1:V(E)?0:1};function N(E){for(var d=E.g.length,m=[],_=0;_<d;_++)m[_]=~E.g[_];return new u(m,~E.h).add(P)}n.abs=function(){return k(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,m[y]=p<<16|T}return new u(m,m[m.length-1]&-2147483648?-1:0)};function U(E,d){return E.add(N(d))}n.j=function(E){if(V(this)||V(E))return w;if(k(this))return k(E)?N(this).j(N(E)):N(N(this).j(E));if(k(E))return N(this.j(N(E)));if(0>this.l(b)&&0>E.l(b))return g(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Ct=E.i(y)>>>16,ve=E.i(y)&65535;m[2*_+2*y]+=p*ve,H(m,2*_+2*y),m[2*_+2*y+1]+=T*ve,H(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Ct,H(m,2*_+2*y+1),m[2*_+2*y+2]+=T*Ct,H(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new u(m,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function G(E,d){this.g=E,this.h=d}function Z(E,d){if(V(d))throw Error("division by zero");if(V(E))return new G(w,w);if(k(E))return d=Z(N(E),d),new G(N(d.g),N(d.h));if(k(d))return d=Z(E,N(d)),new G(N(d.g),d.h);if(30<E.g.length){if(k(E)||k(d))throw Error("slowDivide_ only works with positive integers.");for(var m=P,_=d;0>=_.l(E);)m=Y(m),_=Y(_);var y=j(m,1),T=j(_,1);for(_=j(_,2),m=j(m,2);!V(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(m),T=p),_=j(_,1),m=j(m,1)}return d=U(E,y.j(d)),new G(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(m),p=T.j(d);k(p)||0<p.l(E);)m-=_,T=g(m),p=T.j(d);V(T)&&(T=P),y=y.add(T),E=U(E,p)}return new G(y,E)}n.A=function(E){return Z(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&E.i(_);return new u(m,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|E.i(_);return new u(m,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^E.i(_);return new u(m,this.h^E.h)};function Y(E){for(var d=E.g.length+1,m=[],_=0;_<d;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(m,E.h)}function j(E,d){var m=d>>5;d%=32;for(var _=E.g.length-m,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+m)>>>d|E.i(T+m+1)<<32-d:E.i(T+m);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,po=u}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mo,go,je,_o,On,qr,yo,Eo,vo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof bn=="object"&&bn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in l))break t;l=l[v]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,v={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function P(r,a,l){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,P.apply(null,arguments)}function b(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,v,A){for(var C=Array(arguments.length-2),$=2;$<arguments.length;$++)C[$-2]=arguments[$];return a.prototype[v].apply(h,C)}}function k(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=r.length||0,A=h.length||0;r.length=v+A;for(let C=0;C<A;C++)r[v+C]=h[C]}else r.push(h)}}class U{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function G(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function Z(r){return Z[" "](r),r}Z[" "]=function(){};var Y=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function j(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)r[l]=h[l];for(let A=0;A<m.length;A++)l=m[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=ir;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,l){const h=ve.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ve=new U(()=>new _a,r=>r.reset());class _a{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ie=!1,ir=new Ct,_i=()=>{const r=c.Promise.resolve(void 0);Te=()=>{r.then(ya)}};var ya=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=ve;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ie=!1};function xt(){this.s=this.s,this.C=this.C}xt.prototype.s=!1,xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var Ea=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Ae(r,a){if(lt.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Y){t:{try{Z(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:va[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,lt);var va={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Ta=0;function Ia(r,a,l,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++Ta,this.da=this.fa=!1}function ln(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function un(r){this.src=r,this.g={},this.h=0}un.prototype.add=function(r,a,l,h,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=or(r,a,h,v);return-1<C?(a=r[C],l||(a.fa=!1)):(a=new Ia(a,this.src,A,!!h,v),a.fa=l,r.push(a)),a};function sr(r,a){var l=a.type;if(l in r.g){var h=r.g[l],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(ln(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function or(r,a,l,h){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return v}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),lr={};function yi(r,a,l,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)yi(r,a[A],l,h,v);return null}return l=Ti(l),r&&r[an]?r.K(a,l,g(h)?!!h.capture:!!h,v):Aa(r,a,l,!1,h,v)}function Aa(r,a,l,h,v,A){if(!a)throw Error("Invalid event type");var C=g(v)?!!v.capture:!!v,$=cr(r);if($||(r[ar]=$=new un(r)),l=$.add(a,l,h,C,A),l.proxy)return l;if(h=wa(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)Ea||(v=C),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(vi(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function wa(){function r(l){return a.call(r.src,r.listener,l)}const a=Ra;return r}function Ei(r,a,l,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ei(r,a[A],l,h,v);else h=g(h)?!!h.capture:!!h,l=Ti(l),r&&r[an]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=or(A,l,h,v),-1<l&&(ln(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=cr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=or(a,l,h,v)),(l=-1<r?a[r]:null)&&ur(l))}function ur(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[an])sr(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(vi(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=cr(a))?(sr(l,r),l.h==0&&(l.src=null,a[ar]=null)):ln(r)}}}function vi(r){return r in lr?lr[r]:lr[r]="on"+r}function Ra(r,a){if(r.da)r=!0;else{a=new Ae(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=l.call(h,a)}return r}function cr(r){return r=r[ar],r instanceof un?r:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ti(r){return typeof r=="function"?r:(r[hr]||(r[hr]=function(a){return r.handleEvent(a)}),r[hr])}function ut(){xt.call(this),this.i=new un(this),this.M=this,this.F=null}V(ut,xt),ut.prototype[an]=!0,ut.prototype.removeEventListener=function(r,a,l,h){Ei(this,r,a,l,h)};function gt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new lt(a,r);else if(a instanceof lt)a.target=a.target||r;else{var v=a;a=new lt(h,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];v=cn(C,h,!0,a)&&v}if(C=a.g=r,v=cn(C,h,!0,a)&&v,v=cn(C,h,!1,a)&&v,l)for(A=0;A<l.length;A++)C=a.g=l[A],v=cn(C,h,!1,a)&&v}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)ln(l[h]);delete r.g[a],r.h--}}this.F=null},ut.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},ut.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function cn(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var $=C.listener,it=C.ha||C.src;C.fa&&sr(r.i,C),v=$.call(it,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ii(r,a,l){if(typeof r=="function")l&&(r=P(r,l));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Ai(r){r.g=Ii(()=>{r.g=null,r.i&&(r.i=!1,Ai(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Pa extends xt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function we(r){xt.call(this),this.h=r,this.g={}}V(we,xt);var wi=[];function Ri(r){j(r.g,function(a,l){this.g.hasOwnProperty(l)&&ur(a)},r),r.g={}}we.prototype.N=function(){we.aa.N.call(this),Ri(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=c.JSON.stringify,Sa=c.JSON.parse,Ca=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function dr(){}dr.prototype.h=null;function Pi(r){return r.h||(r.h=r.i())}function Si(){}var Re={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){lt.call(this,"d")}V(pr,lt);function mr(){lt.call(this,"c")}V(mr,lt);var Gt={},Ci=null;function hn(){return Ci=Ci||new ut}Gt.La="serverreachability";function bi(r){lt.call(this,Gt.La,r)}V(bi,lt);function Pe(r){const a=hn();gt(a,new bi(a))}Gt.STAT_EVENT="statevent";function Vi(r,a){lt.call(this,Gt.STAT_EVENT,r),this.stat=a}V(Vi,lt);function _t(r){const a=hn();gt(a,new Vi(a,r))}Gt.Ma="timingevent";function Di(r,a){lt.call(this,Gt.Ma,r),this.size=a}V(Di,lt);function Se(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function Ce(){this.g=!0}Ce.prototype.xa=function(){this.g=!1};function ba(r,a,l,h,v,A){r.info(function(){if(r.g)if(A)for(var C="",$=A.split("&"),it=0;it<$.length;it++){var B=$[it].split("=");if(1<B.length){var ct=B[0];B=B[1];var ht=ct.split("_");C=2<=ht.length&&ht[1]=="type"?C+(ct+"="+B+"&"):C+(ct+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function Va(r,a,l,h,v,A,C){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+C})}function ie(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Na(r,l)+(h?" "+h:"")})}function Da(r,a){r.info(function(){return"TIMEOUT: "+a})}Ce.prototype.info=function(){};function Na(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return fr(l)}catch{return a}}var fn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ni={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function dn(){}V(dn,dr),dn.prototype.g=function(){return new XMLHttpRequest},dn.prototype.i=function(){return{}},gr=new dn;function Lt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new we(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ki}function ki(){this.i=null,this.g="",this.h=!1}var Oi={},_r={};function yr(r,a,l){r.L=1,r.v=_n(bt(a)),r.m=l,r.P=!0,Mi(r,null)}function Mi(r,a){r.F=Date.now(),pn(r),r.A=bt(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),Wi(l.i,"t",h),r.C=0,l=r.j.J,r.h=new ki,r.g=ds(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Pa(P(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(wi[0]=v.toString()),v=wi);for(var A=0;A<v.length;A++){var C=yi(l,v[A],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Pe(),ba(r.i,r.u,r.A,r.l,r.R,r.m)}Lt.prototype.ca=function(r){r=r.target;const a=this.M;a&&Vt(r)==3?a.j():this.Y(r)},Lt.prototype.Y=function(r){try{if(r==this.g)t:{const ht=Vt(this.g);var a=this.g.Ba();const ae=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||ns(this.g)))){this.J||ht!=4||a==7||(a==8||0>=ae?Pe(3):Pe(2)),Er(this);var l=this.g.Z();this.X=l;e:if(xi(this)){var h=ns(this.g);r="";var v=h.length,A=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),be(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Va(this.i,this.u,this.A,this.l,this.R,ht,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,it=this.g;if(($=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H($)){var B=$;break e}}B=null}if(l=B)ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,l);else{this.o=!1,this.s=3,_t(12),Kt(this),be(this);break t}}if(this.P){l=!0;let Tt;for(;!this.J&&this.C<C.length;)if(Tt=ka(this,C),Tt==_r){ht==4&&(this.s=4,_t(14),l=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Oi){this.s=4,_t(15),ie(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ie(this.i,this.l,Tt,null),vr(this,Tt);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||C.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)ie(this.i,this.l,C,"[Invalid Chunked Response]"),Kt(this),be(this);else if(0<C.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Pr(ct),ct.M=!0,_t(11))}}else ie(this.i,this.l,C,null),vr(this,C);ht==4&&Kt(this),this.o&&!this.J&&(ht==4?us(this.j,this):(this.o=!1,pn(this)))}else Xa(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Kt(this),be(this)}}}catch{}finally{}};function xi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ka(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?_r:(l=Number(a.substring(l,h)),isNaN(l)?Oi:(h+=1,h+l>a.length?_r:(a=a.slice(h,h+l),r.C=h+l,a)))}Lt.prototype.cancel=function(){this.J=!0,Kt(this)};function pn(r){r.S=Date.now()+r.I,Li(r,r.I)}function Li(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Se(P(r.ba,r),a)}function Er(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Lt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Da(this.i,this.A),this.L!=2&&(Pe(),_t(17)),Kt(this),this.s=2,be(this)):Li(this,this.S-r)};function be(r){r.j.G==0||r.J||us(r.j,r)}function Kt(r){Er(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Ri(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function vr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||Tr(l.h,r))){if(!r.K&&Tr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)In(l),vn(l);else break t;Rr(l),_t(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Se(P(l.Za,l),6e3));if(1>=Ui(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Wt(l,11)}else if((r.K||l.g==r)&&In(l),!H(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ct=B[3];ct!=null&&(l.la=ct,l.j.info("VER="+l.la));const ht=B[4];ht!=null&&(l.Aa=ht,l.j.info("SVER="+l.Aa));const ae=B[5];ae!=null&&typeof ae=="number"&&0<ae&&(h=1.5*ae,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Tt=r.g;if(Tt){const wn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wn){var A=h.h;A.g||wn.indexOf("spdy")==-1&&wn.indexOf("quic")==-1&&wn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ir(A,A.h),A.h=null))}if(h.D){const Sr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(h.ya=Sr,K(h.I,h.D,Sr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=r;if(h.qa=fs(h,h.J?h.ia:null,h.W),C.K){ji(h.h,C);var $=C,it=h.L;it&&($.I=it),$.B&&(Er($),pn($)),h.g=C}else as(h);0<l.i.length&&Tn(l)}else B[0]!="stop"&&B[0]!="close"||Wt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Wt(l,7):wr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Pe(4)}catch{}}var Oa=class{constructor(r,a){this.g=r,this.map=a}};function Fi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ui(r){return r.h?1:r.g?r.g.size:0}function Tr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Ir(r,a){r.g?r.g.add(a):r.h=a}function ji(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Fi.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function $i(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return k(r.i)}function Ma(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function xa(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function qi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=xa(r),h=Ma(r),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],l&&l[A],r)}var Hi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function La(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),v=null;if(0<=h){var A=r[l].substring(0,h);v=r[l].substring(h+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Qt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Qt){this.h=r.h,mn(this,r.j),this.o=r.o,this.g=r.g,gn(this,r.s),this.l=r.l;var a=r.i,l=new Ne;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),zi(this,l),this.m=r.m}else r&&(a=String(r).match(Hi))?(this.h=!1,mn(this,a[1]||"",!0),this.o=Ve(a[2]||""),this.g=Ve(a[3]||"",!0),gn(this,a[4]),this.l=Ve(a[5]||"",!0),zi(this,a[6]||"",!0),this.m=Ve(a[7]||"")):(this.h=!1,this.i=new Ne(null,this.h))}Qt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(De(a,Gi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(De(a,Gi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(De(l,l.charAt(0)=="/"?Ua:Ba,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",De(l,$a)),r.join("")};function bt(r){return new Qt(r)}function mn(r,a,l){r.j=l?Ve(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function gn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function zi(r,a,l){a instanceof Ne?(r.i=a,qa(r.i,r.h)):(l||(a=De(a,ja)),r.i=new Ne(a,r.h))}function K(r,a,l){r.i.set(a,l)}function _n(r){return K(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ve(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function De(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Fa),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Fa(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Gi=/[#\/\?@]/g,Ba=/[#\?:]/g,Ua=/[#\?]/g,ja=/[#\?@]/g,$a=/#/g;function Ne(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ft(r){r.g||(r.g=new Map,r.h=0,r.i&&La(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ne.prototype,n.add=function(r,a){Ft(this),this.i=null,r=se(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Ki(r,a){Ft(r),a=se(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Qi(r,a){return Ft(r),a=se(r,a),r.g.has(a)}n.forEach=function(r,a){Ft(this),this.g.forEach(function(l,h){l.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){Ft(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=r[h];for(let A=0;A<v.length;A++)l.push(a[h])}return l},n.V=function(r){Ft(this);let a=[];if(typeof r=="string")Qi(this,r)&&(a=a.concat(this.g.get(se(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Ft(this),this.i=null,r=se(this,r),Qi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Wi(r,a,l){Ki(r,a),0<l.length&&(r.i=null,r.g.set(se(r,a),k(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=A;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),r.push(v)}}return this.i=r.join("&")};function se(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function qa(r,a){a&&!r.j&&(Ft(r),r.i=null,r.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(Ki(this,h),Wi(this,v,l))},r)),r.j=a}function Ha(r,a){const l=new Ce;if(c.Image){const h=new Image;h.onload=b(Bt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=b(Bt,l,"TestLoadImage: error",!1,a,h),h.onabort=b(Bt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=b(Bt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function za(r,a){const l=new Ce,h=new AbortController,v=setTimeout(()=>{h.abort(),Bt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?Bt(l,"TestPingServer: ok",!0,a):Bt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(l,"TestPingServer: error",!1,a)})}function Bt(r,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Ga(){this.g=new Ca}function Ka(r,a,l){const h=l||"";try{qi(r,function(v,A){let C=v;g(v)&&(C=fr(v)),a.push(h+A+"="+encodeURIComponent(C))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function ke(r){this.l=r.Ub||null,this.j=r.eb||!1}V(ke,dr),ke.prototype.g=function(){return new yn(this.l,this.j)},ke.prototype.i=function(r){return function(){return r}}({});function yn(r,a){ut.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(yn,ut),n=yn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Me(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Oe(this):Me(this),this.readyState==3&&Xi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Oe(this))},n.Qa=function(r){this.g&&(this.response=r,Oe(this))},n.ga=function(){this.g&&Oe(this)};function Oe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Me(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Me(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(yn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Yi(r){let a="";return j(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Ar(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Yi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):K(r,a,l))}function W(r){ut.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(W,ut);var Qa=/^https?$/i,Wa=["POST","PUT"];n=W.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?Pi(this.o):Pi(gr),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){Ji(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wa,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{es(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){Ji(this,A)}};function Ji(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Zi(r),En(r)}function Zi(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),En(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),En(this,!0)),W.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ts(this):this.bb())},n.bb=function(){ts(this)};function ts(r){if(r.h&&typeof u<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)Ii(r.Ea,0,r);else if(gt(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var v=String(r.D).match(Hi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Qa.test(v?v.toLowerCase():"")}l=h}if(l)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var A=2<Vt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Zi(r)}}finally{En(r)}}}}function En(r,a){if(r.g){es(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{l.onreadystatechange=h}catch{}}}function es(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Sa(a)}};function ns(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Xa(r){const a={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var l=y(r[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xe(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function rs(r){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xe("baseRetryDelayMs",5e3,r),this.cb=xe("retryDelaySeedMs",1e4,r),this.Wa=xe("forwardChannelMaxRetries",2,r),this.wa=xe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(r&&r.concurrentRequestLimit),this.Da=new Ga,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=rs.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){_t(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=fs(this,null,this.W),Tn(this)};function wr(r){if(is(r),r.G==3){var a=r.U++,l=bt(r.I);if(K(l,"SID",r.K),K(l,"RID",a),K(l,"TYPE","terminate"),Le(r,l),a=new Lt(r,r.j,a),a.L=2,a.v=_n(bt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ds(a.j,null),a.g.ea(a.v)),a.F=Date.now(),pn(a)}hs(r)}function vn(r){r.g&&(Pr(r),r.g.cancel(),r.g=null)}function is(r){vn(r),r.u&&(c.clearTimeout(r.u),r.u=null),In(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Tn(r){if(!Bi(r.h)&&!r.s){r.s=!0;var a=r.Ga;Te||_i(),Ie||(Te(),Ie=!0),ir.add(a,r),r.B=0}}function Ya(r,a){return Ui(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Se(P(r.Ga,r,a),cs(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Lt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=os(this,v,a),l=bt(this.I),K(l,"RID",r),K(l,"CVER",22),this.D&&K(l,"X-HTTP-Session-Id",this.D),Le(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Yi(A)))+"&"+a:this.m&&Ar(l,this.m,A)),Ir(this.h,v),this.Ua&&K(l,"TYPE","init"),this.P?(K(l,"$req",a),K(l,"SID","null"),v.T=!0,yr(v,l,null)):yr(v,l,a),this.G=2}}else this.G==3&&(r?ss(this,r):this.i.length==0||Bi(this.h)||ss(this))};function ss(r,a){var l;a?l=a.l:l=r.U++;const h=bt(r.I);K(h,"SID",r.K),K(h,"RID",l),K(h,"AID",r.T),Le(r,h),r.m&&r.o&&Ar(h,r.m,r.o),l=new Lt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=os(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ir(r.h,l),yr(l,h,a)}function Le(r,a){r.H&&j(r.H,function(l,h){K(a,h,l)}),r.l&&qi({},function(l,h){K(a,h,l)})}function os(r,a,l){l=Math.min(r.i.length,l);var h=r.l?P(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let $=!0;for(let it=0;it<l;it++){let B=v[it].g;const ct=v[it].map;if(B-=A,0>B)A=Math.max(0,v[it].g-100),$=!1;else try{Ka(ct,C,"req"+B+"_")}catch{h&&h(ct)}}if($){h=C.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function as(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Te||_i(),Ie||(Te(),Ie=!0),ir.add(a,r),r.v=0}}function Rr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Se(P(r.Fa,r),cs(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ls(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Se(P(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),vn(this),ls(this))};function Pr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ls(r){r.g=new Lt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=bt(r.qa);K(a,"RID","rpc"),K(a,"SID",r.K),K(a,"AID",r.T),K(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&K(a,"TO",r.ja),K(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&Ar(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=_n(bt(a)),l.m=null,l.P=!0,Mi(l,r)}n.Za=function(){this.C!=null&&(this.C=null,vn(this),Rr(this),_t(19))};function In(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function us(r,a){var l=null;if(r.g==a){In(r),Pr(r),r.g=null;var h=2}else if(Tr(r.h,a))l=a.D,ji(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=hn(),gt(h,new Di(h,l)),Tn(r)}else as(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Ya(r,a)||h==2&&Rr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:Wt(r,5);break;case 4:Wt(r,10);break;case 3:Wt(r,6);break;default:Wt(r,2)}}}function cs(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Wt(r,a){if(r.j.info("Error code "+a),a==2){var l=P(r.fb,r),h=r.Xa;const v=!h;h=new Qt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||mn(h,"https"),_n(h),v?Ha(h.toString(),l):za(h.toString(),l)}else _t(2);r.G=0,r.l&&r.l.sa(a),hs(r),is(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function hs(r){if(r.G=0,r.ka=[],r.l){const a=$i(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,k(r.i),r.i.length=0),r.l.ra()}}function fs(r,a,l){var h=l instanceof Qt?bt(l):new Qt(l);if(h.g!="")a&&(h.g=a+"."+h.g),gn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Qt(null);h&&mn(A,h),a&&(A.g=a),v&&gn(A,v),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&K(h,l,a),K(h,"VER",r.la),Le(r,h),h}function ds(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new ke({eb:l})):new W(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ps(){}n=ps.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function An(){}An.prototype.g=function(r,a){return new vt(r,a)};function vt(r,a){ut.call(this),this.g=new rs(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new oe(this)}V(vt,ut),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){wr(this.g)},vt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=fr(r),r=l);a.i.push(new Oa(a.Ya++,r)),a.G==3&&Tn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,vt.aa.N.call(this)};function ms(r){pr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(ms,pr);function gs(){mr.call(this),this.status=1}V(gs,mr);function oe(r){this.g=r}V(oe,ps),oe.prototype.ua=function(){gt(this.g,"a")},oe.prototype.ta=function(r){gt(this.g,new ms(r))},oe.prototype.sa=function(r){gt(this.g,new gs)},oe.prototype.ra=function(){gt(this.g,"b")},An.prototype.createWebChannel=An.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,vo=function(){return new An},Eo=function(){return hn()},yo=Gt,qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fn.NO_ERROR=0,fn.TIMEOUT=8,fn.HTTP_ERROR=6,On=fn,Ni.COMPLETE="complete",_o=Ni,Si.EventType=Re,Re.OPEN="a",Re.CLOSE="b",Re.ERROR="c",Re.MESSAGE="d",ut.prototype.listen=ut.prototype.K,je=Si,go=ke,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,mo=W}).apply(typeof bn<"u"?bn:typeof self<"u"?self:typeof window<"u"?window:{});const Vs="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new ao("@firebase/firestore");function Be(){return te.logLevel}function D(n,...t){if(te.logLevel<=F.DEBUG){const e=t.map(Zr);te.debug(`Firestore (${ye}): ${n}`,...e)}}function ee(n,...t){if(te.logLevel<=F.ERROR){const e=t.map(Zr);te.error(`Firestore (${ye}): ${n}`,...e)}}function Un(n,...t){if(te.logLevel<=F.WARN){const e=t.map(Zr);te.warn(`Firestore (${ye}): ${n}`,...e)}}function Zr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+n;throw ee(t),new Error(t)}function tt(n,t){n||x()}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends _e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(dt.UNAUTHENTICATED))}shutdown(){}}class xu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lu{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Jt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Jt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(tt(typeof i.accessToken=="string"),new To(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new dt(t)}}class Fu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Bu{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Fu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ju{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new Uu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=$u(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function q(n,t){return n<t?-1:n>t?1:0}function fe(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new rt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new rt(0,0))}static max(){return new Q(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return We.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof We?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends We{construct(t,e,i){return new X(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends We{construct(t,e,i){return new at(t,e,i)}static isValidIdentifier(t){return qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new at(e)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}function Hu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(i===1e9?new rt(e+1,0):new rt(e,i));return new qt(s,M.empty(),t)}function zu(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new qt(Q.min(),M.empty(),-1)}static max(){return new qt(Q.max(),M.empty(),-1)}}function Gu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ku)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Wu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Wn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wo.oe=-1;function ti(n){return n==null}function jn(n){return n===0&&1/n==-1/0}function Xu(n){return typeof n=="number"&&Number.isInteger(n)&&!jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function nn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ro(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new Et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??st.RED,this.left=s??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new st(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return st.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ns(this.data.getIterator())}getIteratorFrom(t){return new Ns(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new mt(this.comparator);return e.data=t,e}}class Ns{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(at.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new mt(at.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Yu("Invalid base64 string: "+o):o}}(t);return new Pt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new Pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const Ju=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Ju.exec(n);if(tt(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ot(n.seconds),nanos:ot(n.nanos)}}function ot(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xe(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Po(n){const t=n.mapValue.fields.__previous_value__;return ei(t)?Po(t):t}function $n(n){const t=ne(n.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,i,s,o,u,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}class qn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ei(n)?4:ec(n)?9007199254740991:tc(n)?10:11:x()}function St(n,t){if(n===t)return!0;const e=de(n);if(e!==de(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $n(n).isEqual($n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ne(s.timestampValue),c=ne(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Xe(s.bytesValue).isEqual(Xe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return ot(s.geoPointValue.latitude)===ot(o.geoPointValue.latitude)&&ot(s.geoPointValue.longitude)===ot(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return ot(s.integerValue)===ot(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=ot(s.doubleValue),c=ot(o.doubleValue);return u===c?jn(u)===jn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return fe(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ds(u)!==Ds(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!St(u[f],c[f])))return!1;return!0}(n,t);default:return x()}}function Ye(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=de(n),i=de(t);if(e!==i)return q(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=ot(o.integerValue||o.doubleValue),f=ot(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return ks(n.timestampValue,t.timestampValue);case 4:return ks($n(n),$n(t));case 5:return q(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Xe(o),f=Xe(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=q(c[g],f[g]);if(I!==0)return I}return q(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=q(ot(o.latitude),ot(u.latitude));return c!==0?c:q(ot(o.longitude),ot(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Os(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,g,I;const w=o.fields||{},P=u.fields||{},b=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(f=P.value)===null||f===void 0?void 0:f.arrayValue,k=q(((g=b==null?void 0:b.values)===null||g===void 0?void 0:g.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return k!==0?k:Os(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Dn.mapValue&&u===Dn.mapValue)return 0;if(o===Dn.mapValue)return 1;if(u===Dn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const P=q(f[w],I[w]);if(P!==0)return P;const b=pe(c[f[w]],g[I[w]]);if(b!==0)return b}return q(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function ks(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ne(n),i=ne(t),s=q(e.seconds,i.seconds);return s!==0?s:q(e.nanos,i.nanos)}function Os(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=pe(e[s],i[s]);if(o)return o}return q(e.length,i.length)}function me(n){return Hr(n)}function Hr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ne(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Xe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=Hr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${Hr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function zr(n){return!!n&&"integerValue"in n}function ni(n){return!!n&&"arrayValue"in n}function Mn(n){return!!n&&"mapValue"in n}function tc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function $e(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return nn(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=$e(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=$e(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ec(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Mn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$e(e)}setAll(t){let e=at.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=$e(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Mn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Mn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){nn(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new wt($e(this.value))}}function So(n){const t=[];return nn(n.fields,(e,i)=>{const s=new at([e]);if(Mn(i)){const o=So(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new At(t,0,Q.min(),Q.min(),Q.min(),wt.empty(),0)}static newFoundDocument(t,e,i,s){return new At(t,1,e,Q.min(),i,s,0)}static newNoDocument(t,e){return new At(t,2,e,Q.min(),Q.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,Q.min(),Q.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function Ms(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),e.key):i=pe(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function xs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function nc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{}class nt extends Co{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new ic(t,e,i):e==="array-contains"?new ac(t,i):e==="in"?new lc(t,i):e==="not-in"?new uc(t,i):e==="array-contains-any"?new cc(t,i):new nt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new sc(t,i):new oc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&de(this.value)===de(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Co{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ht(t,e)}matches(t){return bo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function bo(n){return n.op==="and"}function Vo(n){return rc(n)&&bo(n)}function rc(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Gr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+me(n.value);if(Vo(n))return n.filters.map(t=>Gr(t)).join(",");{const t=n.filters.map(e=>Gr(e)).join(",");return`${n.op}(${t})`}}function Do(n,t){return n instanceof nt?function(i,s){return s instanceof nt&&i.op===s.op&&i.field.isEqual(s.field)&&St(i.value,s.value)}(n,t):n instanceof Ht?function(i,s){return s instanceof Ht&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&Do(u,s.filters[c]),!0):!1}(n,t):void x()}function No(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${me(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(No).join(" ,")+"}"}(n):"Filter"}class ic extends nt{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class sc extends nt{constructor(t,e){super(t,"in",e),this.keys=ko("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class oc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ko("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ko(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class ac extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ni(e)&&Ye(e.arrayValue,this.value)}}class lc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ye(this.value.arrayValue,e)}}class uc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ye(this.value.arrayValue,e)}}class cc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ni(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>Ye(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Ls(n,t=null,e=[],i=[],s=null,o=null,u=null){return new hc(n,t,e,i,s,o,u)}function ri(n){const t=z(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Gr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>me(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>me(i)).join(",")),t.ue=e}return t.ue}function ii(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!nc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Do(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!xs(n.startAt,t.startAt)&&xs(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fc(n,t,e,i,s,o,u,c){return new Xn(n,t,e,i,s,o,u,c)}function dc(n){return new Xn(n)}function Fs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pc(n){return n.collectionGroup!==null}function qe(n){const t=z(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new mt(at.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new zn(o,i))}),e.has(at.keyField().canonicalString())||t.ce.push(new zn(at.keyField(),i))}return t.ce}function Zt(n){const t=z(n);return t.le||(t.le=mc(t,qe(n))),t.le}function mc(n,t){if(n.limitType==="F")return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new zn(s.field,o)});const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return Ls(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Kr(n,t,e){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Oo(n,t){return ii(Zt(n),Zt(t))&&n.limitType===t.limitType}function Mo(n){return`${ri(Zt(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>No(s)).join(", ")}]`),ti(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>me(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>me(s)).join(",")),`Target(${i})`}(Zt(n))}; limitType=${n.limitType})`}function si(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):M.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of qe(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const g=Ms(u,c,f);return u.inclusive?g<=0:g<0}(i.startAt,qe(i),s)||i.endAt&&!function(u,c,f){const g=Ms(u,c,f);return u.inclusive?g>=0:g>0}(i.endAt,qe(i),s))}(n,t)}function gc(n){return(t,e)=>{let i=!1;for(const s of qe(n)){const o=_c(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function _c(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),g=c.data.field(o);return f!==null&&g!==null?pe(f,g):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){nn(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return Ro(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Et(M.comparator);function Gn(){return yc}const xo=new Et(M.comparator);function Nn(...n){let t=xo;for(const e of n)t=t.insert(e.key,e);return t}function Lo(n){let t=xo;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Yt(){return He()}function Fo(){return He()}function He(){return new Ee(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ec=new Et(M.comparator),vc=new mt(M.comparator);function pt(...n){let t=vc;for(const e of n)t=t.add(e);return t}const Tc=new mt(q);function Ic(){return Tc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function Bo(n){return{integerValue:""+n}}function Ac(n,t){return Xu(t)?Bo(t):oi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this._=void 0}}function wc(n,t,e){return n instanceof Je?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ei(o)&&(o=Po(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Ze?jo(n,t):n instanceof tn?$o(n,t):function(s,o){const u=Uo(s,o),c=Bs(u)+Bs(s.Pe);return zr(u)&&zr(s.Pe)?Bo(c):oi(s.serializer,c)}(n,t)}function Rc(n,t,e){return n instanceof Ze?jo(n,t):n instanceof tn?$o(n,t):e}function Uo(n,t){return n instanceof Kn?function(i){return zr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Je extends Yn{}class Ze extends Yn{constructor(t){super(),this.elements=t}}function jo(n,t){const e=qo(t);for(const i of n.elements)e.some(s=>St(s,i))||e.push(i);return{arrayValue:{values:e}}}class tn extends Yn{constructor(t){super(),this.elements=t}}function $o(n,t){let e=qo(t);for(const i of n.elements)e=e.filter(s=>!St(s,i));return{arrayValue:{values:e}}}class Kn extends Yn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Bs(n){return ot(n.integerValue||n.doubleValue)}function qo(n){return ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){this.field=t,this.transform=e}}function Sc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Ze&&s instanceof Ze||i instanceof tn&&s instanceof tn?fe(i.elements,s.elements,St):i instanceof Kn&&s instanceof Kn?St(i.Pe,s.Pe):i instanceof Je&&s instanceof Je}(n.transform,t.transform)}class Cc{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jn{}function Ho(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Go(n.key,kt.none()):new rn(n.key,n.data,kt.none());{const e=n.data,i=wt.empty();let s=new mt(at.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new re(n.key,i,new Rt(s.toArray()),kt.none())}}function bc(n,t,e){n instanceof rn?function(s,o,u){const c=s.value.clone(),f=js(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof re?function(s,o,u){if(!xn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=js(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(zo(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ze(n,t,e,i){return n instanceof rn?function(o,u,c,f){if(!xn(o.precondition,u))return c;const g=o.value.clone(),I=$s(o.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof re?function(o,u,c,f){if(!xn(o.precondition,u))return c;const g=$s(o.fieldTransforms,f,u),I=u.data;return I.setAll(zo(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return xn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Vc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Uo(i.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(i.field,o))}return e||null}function Us(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&fe(i,s,(o,u)=>Sc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class rn extends Jn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class re extends Jn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function js(n,t,e){const i=new Map;tt(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,Rc(u,c,e[s]))}return i}function $s(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,wc(o,u,t))}return i}class Go extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dc extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&bc(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ze(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Fo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=Ho(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Q.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(e,i)=>Us(e,i))&&fe(this.baseMutations,t.baseMutations,(e,i)=>Us(e,i))}}class ai{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){tt(t.mutations.length===i.length);let s=function(){return Ec}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new ai(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,L;function Oc(n){switch(n){default:return x();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Mc(n){if(n===void 0)return ee("GRPC error has no .code"),S.UNKNOWN;switch(n){case J.OK:return S.OK;case J.CANCELLED:return S.CANCELLED;case J.UNKNOWN:return S.UNKNOWN;case J.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case J.INTERNAL:return S.INTERNAL;case J.UNAVAILABLE:return S.UNAVAILABLE;case J.UNAUTHENTICATED:return S.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case J.NOT_FOUND:return S.NOT_FOUND;case J.ALREADY_EXISTS:return S.ALREADY_EXISTS;case J.PERMISSION_DENIED:return S.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case J.ABORTED:return S.ABORTED;case J.OUT_OF_RANGE:return S.OUT_OF_RANGE;case J.UNIMPLEMENTED:return S.UNIMPLEMENTED;case J.DATA_LOSS:return S.DATA_LOSS;default:return x()}}(L=J||(J={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new po([4294967295,4294967295],0);class xc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Fc(n,t){return Qr(n,t.toTimestamp())}function he(n){return tt(!!n),Q.fromTimestamp(function(e){const i=ne(e);return new rt(i.seconds,i.nanos)}(n))}function Ko(n,t){return Wr(n,t).canonicalString()}function Wr(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Bc(n){const t=X.fromString(n);return tt(Kc(t)),t}function Xr(n,t){return Ko(n.databaseId,t.path)}function Uc(n){const t=Bc(n);return t.length===4?X.emptyPath():$c(t)}function jc(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $c(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qs(n,t,e){return{name:Xr(n,t),fields:e.value.mapValue.fields}}function qc(n,t){let e;if(t instanceof rn)e={update:qs(n,t.key,t.value)};else if(t instanceof Go)e={delete:Xr(n,t.key)};else if(t instanceof re)e={update:qs(n,t.key,t.data),updateMask:Gc(t.fieldMask)};else{if(!(t instanceof Dc))return x();e={verify:Xr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof Je)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ze)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof tn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Kn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Fc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Hc(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?he(s.updateTime):he(o);return u.isEqual(Q.min())&&(u=he(o)),new Cc(u,s.transformResults||[])}(e,t))):[]}function zc(n){let t=Uc(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){tt(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const P=Qo(w);return P instanceof Ht&&Vo(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(P=>function(V){return new zn(ue(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(P))}(e.orderBy));let c=null;e.limit&&(c=function(w){let P;return P=typeof w=="object"?w.value:w,ti(P)?null:P}(e.limit));let f=null;e.startAt&&(f=function(w){const P=!!w.before,b=w.values||[];return new Hn(b,P)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const P=!w.before,b=w.values||[];return new Hn(b,P)}(e.endAt)),fc(t,s,u,o,c,"F",f,g)}function Qo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ue(e.unaryFilter.field);return nt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ue(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ue(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ue(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(ue(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(i=>Qo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function ue(n){return at.fromServerFormat(n.fieldPath)}function Gc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Kc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.ct=t}}function Wc(n){const t=zc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Kr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.un=new Yc}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(qt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Yc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new mt(X.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new mt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new ge(0)}static kn(){return new ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.changes=new Ee(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&ze(i.mutation,s,Rt.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,pt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=pt()){const s=Yt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Nn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Yt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,pt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=Gn();const u=He(),c=function(){return He()}();return e.forEach((f,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof re)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),ze(I.mutation,g,I.mutation.getFieldMask(),rt.now())):u.set(g.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return c.set(g,new Zc(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=He();let s=new Et((u,c)=>u-c),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=i.get(f)||Rt.empty();I=c.applyToLocalView(g,I),i.set(f,I);const w=(s.get(c.batchId)||pt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,w=Fo();I.forEach(P=>{if(!o.has(P)){const b=Ho(e.get(P),i.get(P));b!==null&&w.set(P,b),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Yt());let c=-1,f=o;return u.next(g=>R.forEach(g,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(P=>{f=f.insert(I,P)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,pt())).next(I=>({batchId:c,changes:Lo(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=Nn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Nn();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const g=function(w,P){return new Xn(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((w,P)=>{u=u.insert(w,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,At.newInvalidDocument(I)))});let c=Nn();return u.forEach((f,g)=>{const I=o.get(f);I!==void 0&&ze(I.mutation,g,Rt.empty(),rt.now()),si(e,g)&&(c=c.insert(f,g))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:he(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Wc(s.bundledQuery),readTime:he(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this.overlays=new Et(M.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Yt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Yt(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new Et((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=o.get(g.largestBatchId);I===null&&(I=Yt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Yt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new kc(e,i));let o=this.Ir.get(e);o===void 0&&(o=pt(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.Tr=new mt(et.Er),this.dr=new mt(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new et(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new et(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new M(new X([])),i=new et(e,t),s=new et(e,t+1),o=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new X([])),i=new et(e,t),s=new et(e,t+1);let o=pt();return this.dr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new et(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class et{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new mt(et.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Nc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new et(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new et(e,0),s=new et(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],u=>{const c=this.Dr(u.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new mt(q);return e.forEach(s=>{const o=new et(s,0),u=new et(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;M.isDocumentKey(o)||(o=o.child(""));const u=new et(new M(o),0);let c=new mt(q);return this.br.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(f.wr)),!0)},u),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){tt(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new et(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new et(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t){this.Mr=t,this.docs=function(){return new Et(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let i=Gn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Gn();const u=e.path,c=new M(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Gu(zu(I),i)<=0||(s.has(I.key)||si(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new oh(this)}getSize(t){return R.resolve(this.size)}}class oh extends Jc{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t){this.persistence=t,this.Nr=new Ee(e=>ri(e),ii),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new li,this.targetCount=0,this.kr=ge.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new ge(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new wo(0),this.Kr=!1,this.Kr=!0,this.$r=new rh,this.referenceDelegate=t(this),this.Ur=new ah(this),this.indexManager=new Xc,this.remoteDocumentCache=function(s){return new sh(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Qc(e),this.Gr=new eh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new nh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new ih(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new uh(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class uh extends Qu{constructor(t){super(),this.currentSequenceNumber=t}}class ui{constructor(t){this.persistence=t,this.Jr=new li,this.Yr=null}static Zr(t){return new ui(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=M.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,Q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=pt(),s=pt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ci(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yl()?8:Wu(gl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new ch;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Be()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Be()<=F.DEBUG&&D("QueryEngine","Query:",Ue(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Be()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Zt(e))):R.resolve())}Yi(t,e){if(Fs(e))return R.resolve(null);let i=Zt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Kr(e,null,"F"),i=Zt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=pt(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.ts(e,c);return this.ns(e,g,u,f.readTime)?this.Yi(t,Kr(e,null,"F")):this.rs(t,g,e,f)}))})))}Zi(t,e,i,s){return Fs(e)||s.isEqual(Q.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const u=this.ts(e,o);return this.ns(e,u,i,s)?R.resolve(null):(Be()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.rs(t,u,e,Hu(s,-1)).next(c=>c))})}ts(t,e){let i=new mt(gc(t));return e.forEach((s,o)=>{si(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return Be()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new Et(q),this._s=new Ee(o=>ri(o),ii),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new th(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function dh(n,t,e,i){return new fh(n,t,e,i)}async function Wo(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=pt();for(const g of s){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(g=>({hs:g,removedBatchIds:u,addedBatchIds:c}))})})}function ph(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const w=g.batch,P=w.keys();let b=R.resolve();return P.forEach(V=>{b=b.next(()=>I.getEntry(f,V)).next(k=>{const N=g.docVersions.get(V);tt(N!==null),k.version.compareTo(N)<0&&(w.applyToRemoteDocument(k,g),k.isValidDocument()&&(k.setReadTime(g.commitVersion),I.addEntry(k)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=pt();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function mh(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function gh(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Hs{constructor(){this.activeTargetIds=Ic()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _h{constructor(){this.so=new Hs,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Hs,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=null;function Or(){return kn===null?kn=function(){return 268435456+Math.round(2147483648*Math.random())}():kn++,"0x"+kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Th extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,u){const c=Or(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const g={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(g,o,u),this.No(e,f,g,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Un("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,o,u,c){return this.Mo(e,i,s,o,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ye}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,i){const s=Eh[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Or();return new Promise((u,c)=>{const f=new mo;f.setWithCredentials(!0),f.listenOnce(_o.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case On.NO_ERROR:const I=f.getResponseJson();D(ft,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case On.TIMEOUT:D(ft,`RPC '${t}' ${o} timed out`),c(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case On.HTTP_ERROR:const w=f.getStatus();if(D(ft,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const b=P==null?void 0:P.error;if(b&&b.status&&b.message){const V=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN}(b.status);c(new O(V,b.message))}else c(new O(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new O(S.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(ft,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);D(ft,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",g,i,15)})}Bo(t,e,i){const s=Or(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=vo(),c=Eo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new go({})),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ft,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let P=!1,b=!1;const V=new vh({Io:N=>{b?D(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(P||(D(ft,`Opening RPC '${t}' stream ${s} transport.`),w.open(),P=!0),D(ft,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),k=(N,U,H)=>{N.listen(U,G=>{try{H(G)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(w,je.EventType.OPEN,()=>{b||(D(ft,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),k(w,je.EventType.CLOSE,()=>{b||(b=!0,D(ft,`RPC '${t}' stream ${s} transport closed`),V.So())}),k(w,je.EventType.ERROR,N=>{b||(b=!0,Un(ft,`RPC '${t}' stream ${s} transport errored:`,N),V.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),k(w,je.EventType.MESSAGE,N=>{var U;if(!b){const H=N.data[0];tt(!!H);const G=H,Z=G.error||((U=G[0])===null||U===void 0?void 0:U.error);if(Z){D(ft,`RPC '${t}' stream ${s} received error:`,Z);const Y=Z.status;let j=function(m){const _=J[m];if(_!==void 0)return Mc(_)}(Y),E=Z.message;j===void 0&&(j=S.INTERNAL,E="Unknown error status: "+Y+" with message "+Z.message),b=!0,V.So(new O(j,E)),w.close()}else D(ft,`RPC '${t}' stream ${s} received:`,H),V.bo(H)}}),k(c,yo.STAT_EVENT,N=>{N.stat===qr.PROXY?D(ft,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===qr.NOPROXY&&D(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){return new xc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,i,s,o,u,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Xo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ee(e.toString()),ee("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new O(S.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ah extends Ih{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return tt(!!t.streamToken),this.lastStreamToken=t.streamToken,tt(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Hc(t.writeResults,t.commitTime),i=he(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=jc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>qc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Wr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,Wr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(S.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Rh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ee(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{i.enqueueAndForget(async()=>{on(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=z(f);g.L_.add(4),await sn(g),g.q_.set("Unknown"),g.L_.delete(4),await tr(g)}(this))})}),this.q_=new Rh(i,s)}}async function tr(n){if(on(n))for(const t of n.B_)await t(!0)}async function sn(n){for(const t of n.B_)await t(!1)}function on(n){return z(n).L_.size===0}async function Yo(n,t,e){if(!Wn(t))throw t;n.L_.add(1),await sn(n),n.q_.set("Offline"),e||(e=()=>mh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await tr(n)})}function Jo(n,t){return t().catch(e=>Yo(n,e,t))}async function er(n){const t=z(n),e=zt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Sh(t);)try{const s=await gh(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,Ch(t,s)}catch(s){await Yo(t,s)}Zo(t)&&ta(t)}function Sh(n){return on(n)&&n.O_.length<10}function Ch(n,t){n.O_.push(t);const e=zt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Zo(n){return on(n)&&!zt(n).n_()&&n.O_.length>0}function ta(n){zt(n).start()}async function bh(n){zt(n).p_()}async function Vh(n){const t=zt(n);for(const e of n.O_)t.m_(e.mutations)}async function Dh(n,t,e){const i=n.O_.shift(),s=ai.from(i,t,e);await Jo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await er(n)}async function Nh(n,t){t&&zt(n).V_&&await async function(i,s){if(function(u){return Oc(u)&&u!==S.ABORTED}(s.code)){const o=i.O_.shift();zt(i).s_(),await Jo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await er(i)}}(n,t),Zo(n)&&ta(n)}async function Gs(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=on(e);e.L_.add(3),await sn(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await tr(e)}async function kh(n,t){const e=z(n);t?(e.L_.delete(2),await tr(e)):t||(e.L_.add(2),await sn(e),e.q_.set("Unknown"))}function zt(n){return n.U_||(n.U_=function(e,i,s){const o=z(e);return o.w_(),new Ah(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:bh.bind(null,n),mo:Nh.bind(null,n),f_:Vh.bind(null,n),g_:Dh.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await er(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new hi(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(n,t){if(ee("AsyncQueue",`${t}: ${n}`),Wn(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Oh{constructor(){this.queries=Ks(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=z(e),o=s.queries;s.queries=Ks(),o.forEach((u,c)=>{for(const f of c.j_)f.onError(i)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Ks(){return new Ee(n=>Mo(n),Oo)}function Mh(n){n.Y_.forEach(t=>{t.next()})}var Qs,Ws;(Ws=Qs||(Qs={})).ea="default",Ws.Cache="cache";class xh{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Ee(c=>Mo(c),Oo),this.Ma=new Map,this.xa=new Set,this.Oa=new Et(M.comparator),this.Na=new Map,this.La=new li,this.Ba={},this.ka=new Map,this.qa=ge.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Lh(n,t,e){const i=jh(n);try{const s=await function(u,c){const f=z(u),g=rt.now(),I=c.reduce((b,V)=>b.add(V.key),pt());let w,P;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Gn(),k=pt();return f.cs.getEntries(b,I).next(N=>{V=N,V.forEach((U,H)=>{H.isValidDocument()||(k=k.add(U))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,V)).next(N=>{w=N;const U=[];for(const H of c){const G=Vc(H,w.get(H.key).overlayedDocument);G!=null&&U.push(new re(H.key,G,So(G.value.mapValue),kt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,g,U,c)}).next(N=>{P=N;const U=N.applyToLocalDocumentSet(w,k);return f.documentOverlayCache.saveOverlays(b,N.batchId,U)})}).then(()=>({batchId:P.batchId,changes:Lo(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let g=u.Ba[u.currentUser.toKey()];g||(g=new Et(q)),g=g.insert(c,f),u.Ba[u.currentUser.toKey()]=g}(i,s.batchId,e),await nr(i,s.changes),await er(i.remoteStore)}catch(s){const o=ea(s,"Failed to persist write");e.reject(o)}}function Xs(n,t,e){const i=z(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=z(u);f.onlineState=c;let g=!1;f.queries.forEach((I,w)=>{for(const P of w.j_)P.Z_(c)&&(g=!0)}),g&&Mh(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Fh(n,t){const e=z(n),i=t.batch.batchId;try{const s=await ph(e.localStore,t);ra(e,i,null),na(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await nr(e,s)}catch(s){await Ao(s)}}async function Bh(n,t,e){const i=z(n);try{const s=await function(u,c){const f=z(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(w=>(tt(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(i.localStore,t);ra(i,t,e),na(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await nr(i,s)}catch(s){await Ao(s)}}function na(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function ra(n,t,e){const i=z(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function nr(n,t,e){const i=z(n),s=[],o=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{u.push(i.Ka(f,t,e).then(g=>{var I;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=ci.Wi(f.targetId,g);o.push(w)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,g){const I=z(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,P=>R.forEach(P.$i,b=>I.persistence.referenceDelegate.addReference(w,P.targetId,b)).next(()=>R.forEach(P.Ui,b=>I.persistence.referenceDelegate.removeReference(w,P.targetId,b)))))}catch(w){if(!Wn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const P=w.targetId;if(!w.fromCache){const b=I.os.get(P),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(P,k)}}}(i.localStore,o))}async function Uh(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Wo(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(f=>{f.reject(new O(S.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await nr(e,i.hs)}}function jh(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bh.bind(null,t),t}class Ys{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Zn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return dh(this.persistence,new hh,t.initialUser,this.serializer)}createPersistence(t){return new lh(ui.Zr,this.serializer)}createSharedClientState(t){return new _h}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $h{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Xs(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uh.bind(null,this.syncEngine),await kh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Oh}()}createDatastore(t){const e=Zn(t.databaseInfo.databaseId),i=function(o){return new Th(o)}(t.databaseInfo);return function(o,u,c,f){return new wh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new Ph(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Xs(this.syncEngine,e,0),function(){return zs.D()?new zs:new yh}())}createSyncEngine(t,e){return function(s,o,u,c,f,g,I){const w=new xh(s,o,u,c,f,g);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=z(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await sn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,i,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Io.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async o=>{D("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(i,o=>(D("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=ea(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function xr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Wo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Js(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zh(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Gs(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Gs(t.remoteStore,s)),n._onlineComponents=t}function Hh(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function zh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Hh(e))throw e;Un("Error using user provided cache. Falling back to memory cache: "+e),await xr(n,new Ys)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await xr(n,new Ys);return n._offlineComponents}async function Gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Js(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Js(n,new $h))),n._onlineComponents}function Kh(n){return Gh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qh(n,t,e,i){if(t===!0&&i===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function to(n){if(!M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function eo(n){if(M.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function oa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ia((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new no({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new no(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Mu;switch(i.type){case"firstParty":return new Bu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Zs.get(e);i&&(D("ComponentProvider","Removing Datastore"),Zs.delete(e),i.terminate())}(this),Promise.resolve()}}function Wh(n,t,e,i={}){var s;const o=(n=oa(n,rr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=dt.MOCK_USER;else{c=ml(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new dt(g)}n._authCredentials=new xu(new To(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new di(this.firestore,t,this._query)}}class Ot{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class $t extends di{constructor(t,e,i){super(t,e,dc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new M(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function Xh(n,t,...e){if(n=Ge(n),sa("collection","path",t),n instanceof rr){const i=X.fromString(t,...e);return eo(i),new $t(n,null,i)}{if(!(n instanceof Ot||n instanceof $t))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(t,...e));return eo(i),new $t(n.firestore,null,i)}}function Yh(n,t,...e){if(n=Ge(n),arguments.length===1&&(t=Io.newId()),sa("doc","path",t),n instanceof rr){const i=X.fromString(t,...e);return to(i),new Ot(n,null,new M(i))}{if(!(n instanceof Ot||n instanceof $t))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(X.fromString(t,...e));return to(i),new Ot(n.firestore,n instanceof $t?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Xo(this,"async_queue_retry"),this.Eu=()=>{const e=Mr();e&&D("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=Mr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new Jt;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Wn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(i=>{this.hu=i,this.Pu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw ee("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Pu=!1,i))));return this.au=e,e}enqueueAfterDelay(t,e,i){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=hi.createAndSchedule(this,t,e,i,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&x()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class aa extends rr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=function(){return new Jh}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||la(this),this._firestoreClient.terminate()}}function Zh(n,t){const e=typeof n=="object"?n:Au(),i=typeof n=="string"?n:"(default)",s=Eu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=dl("firestore");o&&Wh(s,...o)}return s}function tf(n){return n._firestoreClient||la(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function la(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,g,I){return new Zu(c,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ia(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new qh(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this._byteString=t}static fromBase64String(t){try{return new en(Pt.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new en(Pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=/^__.*__$/;class nf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,e,this.fieldTransforms):new rn(t,this.data,e,this.fieldTransforms)}}function fa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class mi{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.vu(t),s}Cu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:i,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Qn(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(fa(this.wu)&&ef.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class rf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Zn(t)}Nu(t,e,i,s=!1){return new mi({wu:t,methodName:e,Ou:i,path:at.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sf(n){const t=n._freezeSettings(),e=Zn(n._databaseId);return new rf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function of(n,t,e,i,s,o={}){const u=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);ga("Data must be an object, but it was:",u,i);const c=pa(i,u);let f,g;if(o.merge)f=new Rt(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const P=af(t,w,e);if(!u.contains(P))throw new O(S.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);cf(I,P)||I.push(P)}f=new Rt(I),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new nf(new wt(c),f,g)}class gi extends pi{_toFieldTransform(t){return new Pc(t.path,new Je)}isEqual(t){return t instanceof gi}}function da(n,t){if(ma(n=Ge(n)))return ga("Unsupported field value:",t,n),pa(n,t);if(n instanceof pi)return function(i,s){if(!fa(s.wu))throw s.Mu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=da(c,s.Fu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Ge(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ac(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=rt.fromDate(i);return{timestampValue:Qr(s.serializer,o)}}if(i instanceof rt){const o=new rt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qr(s.serializer,o)}}if(i instanceof ca)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof en)return{bytesValue:Lc(s.serializer,i._byteString)};if(i instanceof Ot){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Mu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ko(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ha)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Mu("VectorValues must only contain numeric values.");return oi(c.serializer,f)})}}}}}}(i,s);throw s.Mu(`Unsupported field value: ${fi(i)}`)}(n,t)}function pa(n,t){const e={};return Ro(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):nn(n,(i,s)=>{const o=da(s,t.bu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function ma(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof ca||n instanceof en||n instanceof Ot||n instanceof pi||n instanceof ha)}function ga(n,t,e){if(!ma(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=fi(e);throw i==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+i)}}function af(n,t,e){if((t=Ge(t))instanceof ua)return t._internalPath;if(typeof t=="string")return uf(n,t);throw Qn("Field path arguments must be of type string or ",n,!1,void 0,e)}const lf=new RegExp("[~\\*/\\[\\]]");function uf(n,t,e){if(t.search(lf)>=0)throw Qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ua(...t.split("."))._internalPath}catch{throw Qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new O(S.INVALID_ARGUMENT,c+n+f)}function cf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function ff(n,t){const e=oa(n.firestore,aa),i=Yh(n),s=hf(n.converter,t);return df(e,[of(sf(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,kt.exists(!1))]).then(()=>i)}function df(n,t){return function(i,s){const o=new Jt;return i.asyncQueue.enqueueAndForget(async()=>Lh(await Kh(i),s,o)),o.promise}(tf(n),t)}function pf(){return new gi("serverTimestamp")}(function(t,e=!0){(function(s){ye=s})(Iu),Bn(new Ke("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new aa(new Lu(i.getProvider("auth-internal")),new ju(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(g.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ce(Vs,"4.7.1",t),ce(Vs,"4.7.1","esm2017")})();function mf(n){let t,e,i="결제 입력",s,o,u,c,f,g,I,w,P,b,V,k,N,U,H="전송",G,Z;return{c(){t=Dt("div"),e=Dt("h1"),e.textContent=i,s=Rn(),o=Dt("label"),u=Cr(`이름
      `),c=Dt("input"),f=Rn(),g=Dt("label"),I=Cr(`학번
      `),w=Dt("input"),P=Rn(),b=Dt("label"),V=Cr(`가격
      `),k=Dt("input"),N=Rn(),U=Dt("button"),U.textContent=H,this.h()},l(Y){t=Nt(Y,"DIV",{class:!0});var j=Pn(t);e=Nt(j,"H1",{"data-svelte-h":!0}),ys(e)!=="svelte-6bkwv4"&&(e.textContent=i),s=Sn(j),o=Nt(j,"LABEL",{});var E=Pn(o);u=br(E,`이름
      `),c=Nt(E,"INPUT",{type:!0,placeholder:!0,class:!0}),E.forEach(Fe),f=Sn(j),g=Nt(j,"LABEL",{});var d=Pn(g);I=br(d,`학번
      `),w=Nt(d,"INPUT",{type:!0,placeholder:!0,class:!0}),d.forEach(Fe),P=Sn(j),b=Nt(j,"LABEL",{});var m=Pn(b);V=br(m,`가격
      `),k=Nt(m,"INPUT",{type:!0,placeholder:!0,class:!0}),m.forEach(Fe),N=Sn(j),U=Nt(j,"BUTTON",{class:!0,"data-svelte-h":!0}),ys(U)!=="svelte-1onknbp"&&(U.textContent=H),j.forEach(Fe),this.h()},h(){It(c,"type","text"),It(c,"placeholder","이름을 입력하세요"),It(c,"class","svelte-d2v81w"),It(w,"type","text"),It(w,"placeholder","학번을 입력하세요"),It(w,"class","svelte-d2v81w"),It(k,"type","text"),It(k,"placeholder","가격을 입력하세요"),It(k,"class","svelte-d2v81w"),It(U,"class","svelte-d2v81w"),It(t,"class","form-container svelte-d2v81w")},m(Y,j){rl(Y,t,j),yt(t,e),yt(t,s),yt(t,o),yt(o,u),yt(o,c),le(c,n[0]),yt(t,f),yt(t,g),yt(g,I),yt(g,w),le(w,n[1]),yt(t,P),yt(t,b),yt(b,V),yt(b,k),le(k,n[2]),yt(t,N),yt(t,U),G||(Z=[Cn(c,"input",n[4]),Cn(w,"input",n[5]),Cn(k,"input",n[6]),Cn(U,"click",n[3])],G=!0)},p(Y,[j]){j&1&&c.value!==Y[0]&&le(c,Y[0]),j&2&&w.value!==Y[1]&&le(w,Y[1]),j&4&&k.value!==Y[2]&&le(k,Y[2])},i:_s,o:_s,d(Y){Y&&Fe(t),G=!1,Za(Z)}}}function gf(n,t,e){const i={apiKey:"AIzaSyD6Cp7SB_IuE81BB30JLzcXU_TkrlSeVI8",authDomain:"gamble-8a73b.firebaseapp.com",projectId:"gamble-8a73b",storageBucket:"gamble-8a73b.appspot.com",messagingSenderId:"174915030138",appId:"1:174915030138:web:9faaa88c3bca7671d2bfc3",measurementId:"G-ZKSFTFM6RX"};let s;tl(()=>{const P=co(i);s=Zh(P)});let o="",u="",c="";const f=async()=>{if(!o||!u||!c){alert("모든 필드를 입력해주세요.");return}try{const P=await ff(Xh(s,"game1_payment_record"),{Name:o,Num:u,Price:c,Timestamp:pf()});console.log("Document written with ID: ",P.id),alert("Firestore에 저장되었습니다."),e(0,o=""),e(1,u=""),e(2,c="")}catch(P){console.error("Error adding document: ",P),alert("데이터 저장 중 오류가 발생했습니다.")}};function g(){o=this.value,e(0,o)}function I(){u=this.value,e(1,u)}function w(){c=this.value,e(2,c)}return[o,u,c,f,g,I,w]}class If extends el{constructor(t){super(),nl(this,t,gf,mf,Ja,{})}}export{If as component};
