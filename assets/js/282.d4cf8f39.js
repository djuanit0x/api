(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{626:function(e,t,a){"use strict";a.r(t);var i=a(43),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"basics-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics-metadata"}},[e._v("#")]),e._v(" Basics & Metadata")]),e._v(" "),a("p",[e._v("One of the most important things to understand about the "),a("code",[e._v("@polkadot/api")]),e._v(" is that most interfaces are actually generated automatically when it connects to a running node. This is quite a departure from other APIs in projects where the interfaces are static. While sounding quite scary, it actually is a powerful concept that exists in both Polkadot and Substrate chains, and allows the API to be used in environments where the chain is customized.")]),e._v(" "),a("p",[e._v("To unpack this, we will start with the Metadata and explain what it actually provides, since it is critical for understanding how to interact with the API and any underlying chain.")]),e._v(" "),a("h2",{attrs:{id:"metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[e._v("#")]),e._v(" Metadata")]),e._v(" "),a("p",[e._v("When the API connects to a node, one of the first things it does is to retrieve the metadata and decorate the API based on the metadata information. The metadata effectively provides data in the form of "),a("code",[e._v("api.<type>.<module>.<section>")]),e._v(" that fits into one of the following categories -")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/substrate/constants.html"}},[e._v("consts")]),e._v(" - All runtime constants, e.g. "),a("code",[e._v("api.consts.balances.existentialDeposit")]),e._v(". These are not functions, rather accessing the endpoint immediately yields the result as defined.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/substrate/storage.html"}},[e._v("query")]),e._v(" - All chain state, e.g. "),a("code",[e._v("api.query.system.account(<accountId>)")]),e._v(".")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/substrate/extrinsics.html"}},[e._v("tx")]),e._v(" - All extrinsics, e.g. "),a("code",[e._v("api.tx.balances.transfer(<accountId>, <value>)")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Additionally the metadata also provides information on "),a("RouterLink",{attrs:{to:"/substrate/events.html"}},[e._v("events")]),e._v(", these are query-able via the "),a("code",[e._v("api.query.system.events()")]),e._v(" interface and also appear on transactions... both these cases are detailed later.")],1),e._v(" "),a("p",[e._v("None of the information contained within the "),a("code",[e._v("api.{consts, query, tx}.<module>.<method>")]),e._v(" endpoints are hard coded in the API. Rather everything is fully decorated by what the metadata exposes and is therefore completely dynamic. This means that when you connect to different chains, the metadata and API decoration will change and the API interfaces will reflect what is available on the chain you are connected to.")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("The metadata defines the calls with all the type names used in the various interfaces. At the moment (this is undergoing investigations and could improve in future versions of metadata), this also means that the types between the API and the node need to be aligned. For instance, by default Substrate defines a "),a("code",[e._v("BlockNumber")]),e._v(" type as a "),a("code",[e._v("u32")]),e._v(" and the API follows the Substrate defaults - if a chain has a different definitions, the API needs to be aware of this so it can actually decode (and encode) the type.")]),e._v(" "),a("p",[e._v("At this point just be aware of it, we will touch on types, custom chains and their impacts in a later section.")]),e._v(" "),a("h2",{attrs:{id:"chain-defaults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-defaults"}},[e._v("#")]),e._v(" Chain Defaults")]),e._v(" "),a("p",[e._v("In addition to the "),a("code",[e._v("api.[consts | query | tx]")]),e._v(" detailed above, the API, upon connecting to a chain, fills in some information and makes it available directly on the API interface. These include -")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("api.genesisHash")]),e._v(" - The genesisHash of the connected chain")]),e._v(" "),a("li",[a("code",[e._v("api.runtimeMetadata")]),e._v(" - The metadata as retrieved from the chain")]),e._v(" "),a("li",[a("code",[e._v("api.runtimeVersion")]),e._v(" - The chain runtime version (including spec/impl. versions and types)")]),e._v(" "),a("li",[a("code",[e._v("api.libraryInfo")]),e._v(" - The version of the API, i.e. "),a("code",[e._v("@polkadot/api v0.90.1")])])]),e._v(" "),a("h2",{attrs:{id:"let-s-do-something"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-do-something"}},[e._v("#")]),e._v(" Let's do something!")]),e._v(" "),a("p",[e._v("Now that we have covered what the API actually exposes, it is time to "),a("RouterLink",{attrs:{to:"/start/create.html"}},[e._v("dive in and actually use what we installed earlier")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);