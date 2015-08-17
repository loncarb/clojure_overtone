// Compiled by ClojureScript 1.7.48 {}
goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('fetch.util');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('cljs.reader');
fetch.core.__GT_method = (function fetch$core$__GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function fetch$core$parse_route(route){
if(typeof route === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",route], null);
} else {
if(cljs.core.vector_QMARK_.call(null,route)){
var vec__12551 = route;
var m = cljs.core.nth.call(null,vec__12551,(0),null);
var u = cljs.core.nth.call(null,vec__12551,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fetch.core.__GT_method.call(null,m),u], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",route], null);

}
}
});
fetch.core.__GT_data = (function fetch$core$__GT_data(d){
var cur = fetch.util.clj__GT_js.call(null,d);
var query = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur)));
return [cljs.core.str(query)].join('');
});
fetch.core.__GT_callback = (function fetch$core$__GT_callback(callback){
if(cljs.core.truth_(callback)){
return (function (req){
var data = req.getResponseText();
return callback.call(null,data);
});
} else {
return null;
}
});
fetch.core.xhr = (function fetch$core$xhr(){
var args__7829__auto__ = [];
var len__7822__auto___12559 = arguments.length;
var i__7823__auto___12560 = (0);
while(true){
if((i__7823__auto___12560 < len__7822__auto___12559)){
args__7829__auto__.push((arguments[i__7823__auto___12560]));

var G__12561 = (i__7823__auto___12560 + (1));
i__7823__auto___12560 = G__12561;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((3) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((3)),(0))):null);
return fetch.core.xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7830__auto__);
});

fetch.core.xhr.cljs$core$IFn$_invoke$arity$variadic = (function (route,content,callback,p__12556){
var vec__12557 = p__12556;
var opts = cljs.core.nth.call(null,vec__12557,(0),null);
var req = (new goog.net.XhrIo());
var vec__12558 = fetch.core.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__12558,(0),null);
var uri = cljs.core.nth.call(null,vec__12558,(1),null);
var data = fetch.core.__GT_data.call(null,content);
var callback__$1 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__$1)){
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,vec__12558,method,uri,data,callback__$1,vec__12557,opts){
return (function (){
return callback__$1.call(null,req);
});})(req,vec__12558,method,uri,data,callback__$1,vec__12557,opts))
);
} else {
}

return req.send(uri,method,data,(cljs.core.truth_(opts)?fetch.util.clj__GT_js.call(null,opts):null));
});

fetch.core.xhr.cljs$lang$maxFixedArity = (3);

fetch.core.xhr.cljs$lang$applyTo = (function (seq12552){
var G__12553 = cljs.core.first.call(null,seq12552);
var seq12552__$1 = cljs.core.next.call(null,seq12552);
var G__12554 = cljs.core.first.call(null,seq12552__$1);
var seq12552__$2 = cljs.core.next.call(null,seq12552__$1);
var G__12555 = cljs.core.first.call(null,seq12552__$2);
var seq12552__$3 = cljs.core.next.call(null,seq12552__$2);
return fetch.core.xhr.cljs$core$IFn$_invoke$arity$variadic(G__12553,G__12554,G__12555,seq12552__$3);
});
