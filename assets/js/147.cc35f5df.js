(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{344:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("router-link",{attrs:{to:"/api/"}},[t._v("Polkadot JS API")]),t._v(" › "),s("router-link",{attrs:{to:"/api/globals.html"}},[t._v("Globals")])],1),t._v(" "),s("h1",{attrs:{id:"polkadot-js-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-js-api"}},[t._v("#")]),t._v(" Polkadot JS API")]),t._v(" "),s("h1",{attrs:{id:"polkadot-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polkadot-api"}},[t._v("#")]),t._v(" @polkadot/api")]),t._v(" "),s("p",[t._v("The Polkadot-JS API provides easy-to-use wrappers around JSONRPC calls that flow from an application to a node. It handles all the encoding and decoding or parameters, provides access to RPC functions and allows for the query of chain state and the submission of transactions.")]),t._v(" "),s("p",[t._v("The API wrappers provide a standard interface for use -")]),t._v(" "),s("ul",[s("li",[t._v("A static "),s("code",[t._v(".create(<optional ApiOptions>)")]),t._v(" that returns an API instance when connected, decorated and ready-to use. ApiOptions can include an optional WsProvider and optional custom type definitions "),s("code",[t._v("{ provider: <Optional WsProvider>, types: <Optional RegistryTypes> }")]),t._v(".")]),t._v(" "),s("li",[t._v("The above is just a wrapper for "),s("code",[t._v("new Api(<optional ApiOptions>)")]),t._v(", exposing the "),s("code",[t._v("isReady")]),t._v(" getter")]),t._v(" "),s("li",[s("code",[t._v("api.rpc.<section>.<method>")]),t._v(" provides access to actual RPC calls, be it for queries, submission or retrieving chain information\n"),s("ul",[s("li",[s("router-link",{attrs:{to:"/substrate/rpc.html"}},[t._v("RPC (node interface)")])],1)])]),t._v(" "),s("li",[s("code",[t._v("api.query.<section>.<method>")]),t._v(" provides access to chain state queries. These are dynamically populated based on what the runtime provides\n"),s("ul",[s("li",[s("router-link",{attrs:{to:"/substrate/storage.html"}},[t._v("Storage chain state (runtime node interface)")])],1)])]),t._v(" "),s("li",[s("code",[t._v("api.tx.<section>.<method>")]),t._v(" provides the ability to create a transaction, like chain state, this list is populated from a runtime query\n"),s("ul",[s("li",[s("router-link",{attrs:{to:"/substrate/extrinsics.html"}},[t._v("Extrinsics (runtime node interface)")])],1)])]),t._v(" "),s("li",[s("code",[t._v("api.consts.<section>.<constant>")]),t._v(" provides access to the module constants (parameter types).\n"),s("ul",[s("li",[s("router-link",{attrs:{to:"/substrate/constants.html"}},[t._v("Constants (runtime node interface)")])],1)])])]),t._v(" "),s("h2",{attrs:{id:"api-selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-selection"}},[t._v("#")]),t._v(" API Selection")]),t._v(" "),s("p",[t._v("There are two flavours of the API provided, one allowing a standard interface via JavaScript Promises and the second provides an Observable wrapper using "),s("a",{attrs:{href:"https://github.com/ReactiveX/rxjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("RxJS"),s("OutboundLink")],1),t._v(". Depending on your use-case and familiarity, you can choose either (or even both) for your application.")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/api/classes/_promise_api_.apipromise.html"}},[t._v("ApiPromise")]),t._v(" All interface calls returns Promises, including the static "),s("code",[t._v(".create(...)")]),t._v(". Additionally any subscription method uses "),s("code",[t._v("(value) => {}")]),t._v(" callbacks, returning the value as the subscription is updated.")],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/api/classes/_rx_api_.apirx.html"}},[t._v("ApiRx")]),t._v(" All interface calls return RxJS Observables, including the static "),s("code",[t._v(".create(...)")]),t._v(". In the same fashion subscription-based methods return long-running Observables that update with the latest values.")],1)]),t._v(" "),s("h2",{attrs:{id:"dynamic-by-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-by-default"}},[t._v("#")]),t._v(" Dynamic by default")]),t._v(" "),s("p",[t._v("Substrate (upon which Polkadot is built) uses on-chain WASM runtimes, allowing for upgradability. Each runtime defining the actual chain extrinsics (submitted transactions and block intrinsics) as well as available entries in the chain state. Due to this, the API endpoints for queries and transactions are dynamically populated from the running chain.")]),t._v(" "),s("p",[t._v("Due to this dynamic nature, this API departs from traditional APIs which only has fixed endpoints, driving use by what is available by the runtime. As a start, this generic nature has a learning curve, although the provided documentation, examples and linked documentation tries to make that experience as seamless as possible.")]),t._v(" "),s("h2",{attrs:{id:"installation-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-import"}},[t._v("#")]),t._v(" Installation & import")]),t._v(" "),s("p",[t._v("Installation -")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install --save @polkadot/api\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Subscribing to blocks via Promise-based API -")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initialise via static create")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make a call to retrieve the current network head")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeNewHeads")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Chain is at #")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("Subscribing to blocks via RxJS-based API -")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiRx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initialise via static create")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiRx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPromise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make a call to retrieve the current network head")]),t._v("\napi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribeNewHeads")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Chain is at #")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"registering-custom-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registering-custom-types"}},[t._v("#")]),t._v(" Registering custom types")]),t._v(" "),s("p",[t._v("Additional types used by runtime modules can be added when a new instance of the API is created. This is necessary if the runtime modules use types which are not available in the base Substrate runtime.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ApiPromise "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/api'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initialise via static create and register custom types")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" api "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ApiPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    CustomTypesExample"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Vec<u8>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Balance"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AccountId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application_expiry"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Moment"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"whitelisted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"challenge_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[t._v("#")]),t._v(" Users")]),t._v(" "),s("p",[t._v("Some of the users of the API (let us know if you are missing from the list), include -")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/polkadot-js/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkadot-JS UI"),s("OutboundLink")],1),t._v(" A user-interface that allows you to make transactions, query the network or participate in actions on the network such as referendums and staking")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitlab.com/Polkabot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkabot"),s("OutboundLink")],1),t._v(" Polkabot is a Matrix chatbot that keeps an eye on the Polkadot network. You can see Polkabot in action in https://matrix.to/#/#polkadot-network-status:matrix.org")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://polkawallet.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkawallet.io"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/polkawallet-io/polkawallet-RN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Polkawallet (Github)"),s("OutboundLink")],1),t._v(" A mobile wallet for the Polkadot network to manage funds and make transactions, available on both Androind and iOS")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://polkastats.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolkaStats.io"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/Colm3na/polkastats-v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolkaStats frontend GitHub repository"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/Colm3na/polkastats-backend-v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolkaStats backend GitHub repository"),s("OutboundLink")],1),t._v(" Polkadot network statistics (currently Kusama and Alexander). Shows network information and staking details from validators and intentions.")])]),t._v(" "),s("h2",{attrs:{id:"classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/api/SUMMARY.html"}},[t._v("Classes")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);