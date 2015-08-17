// Compiled by ClojureScript 1.7.48 {}
goog.provide('fetch.util');
goog.require('cljs.core');
/**
 * Recursively transforms ClojureScript maps into Javascript objects,
 * other ClojureScript colls into JavaScript arrays, and ClojureScript
 * keywords into JavaScript strings.
 */
fetch.util.clj__GT_js = (function fetch$util$clj__GT_js(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce.call(null,(function (m,p__12566){
var vec__12567 = p__12566;
var k = cljs.core.nth.call(null,vec__12567,(0),null);
var v = cljs.core.nth.call(null,vec__12567,(1),null);
return cljs.core.assoc.call(null,m,fetch$util$clj__GT_js.call(null,k),fetch$util$clj__GT_js.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,x).strobj;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,fetch$util$clj__GT_js,x));
} else {
return x;

}
}
}
}
});
