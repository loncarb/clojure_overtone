// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function jayq$util$map__GT_js(m){
var out = {};
var seq__12324_12330 = cljs.core.seq.call(null,m);
var chunk__12325_12331 = null;
var count__12326_12332 = (0);
var i__12327_12333 = (0);
while(true){
if((i__12327_12333 < count__12326_12332)){
var vec__12328_12334 = cljs.core._nth.call(null,chunk__12325_12331,i__12327_12333);
var k_12335 = cljs.core.nth.call(null,vec__12328_12334,(0),null);
var v_12336 = cljs.core.nth.call(null,vec__12328_12334,(1),null);
(out[cljs.core.name.call(null,k_12335)] = v_12336);

var G__12337 = seq__12324_12330;
var G__12338 = chunk__12325_12331;
var G__12339 = count__12326_12332;
var G__12340 = (i__12327_12333 + (1));
seq__12324_12330 = G__12337;
chunk__12325_12331 = G__12338;
count__12326_12332 = G__12339;
i__12327_12333 = G__12340;
continue;
} else {
var temp__4425__auto___12341 = cljs.core.seq.call(null,seq__12324_12330);
if(temp__4425__auto___12341){
var seq__12324_12342__$1 = temp__4425__auto___12341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12324_12342__$1)){
var c__7567__auto___12343 = cljs.core.chunk_first.call(null,seq__12324_12342__$1);
var G__12344 = cljs.core.chunk_rest.call(null,seq__12324_12342__$1);
var G__12345 = c__7567__auto___12343;
var G__12346 = cljs.core.count.call(null,c__7567__auto___12343);
var G__12347 = (0);
seq__12324_12330 = G__12344;
chunk__12325_12331 = G__12345;
count__12326_12332 = G__12346;
i__12327_12333 = G__12347;
continue;
} else {
var vec__12329_12348 = cljs.core.first.call(null,seq__12324_12342__$1);
var k_12349 = cljs.core.nth.call(null,vec__12329_12348,(0),null);
var v_12350 = cljs.core.nth.call(null,vec__12329_12348,(1),null);
(out[cljs.core.name.call(null,k_12349)] = v_12350);

var G__12351 = cljs.core.next.call(null,seq__12324_12342__$1);
var G__12352 = null;
var G__12353 = (0);
var G__12354 = (0);
seq__12324_12330 = G__12351;
chunk__12325_12331 = G__12352;
count__12326_12332 = G__12353;
i__12327_12333 = G__12354;
continue;
}
} else {
}
}
break;
}

return out;
});
jayq.util.wait = (function jayq$util$wait(ms,func){
return setTimeout(func, ms);
});
jayq.util.log = (function jayq$util$log(){
var args__7829__auto__ = [];
var len__7822__auto___12357 = arguments.length;
var i__7823__auto___12358 = (0);
while(true){
if((i__7823__auto___12358 < len__7822__auto___12357)){
args__7829__auto__.push((arguments[i__7823__auto___12358]));

var G__12359 = (i__7823__auto___12358 + (1));
i__7823__auto___12358 = G__12359;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs);
});

jayq.util.log.cljs$lang$maxFixedArity = (1);

jayq.util.log.cljs$lang$applyTo = (function (seq12355){
var G__12356 = cljs.core.first.call(null,seq12355);
var seq12355__$1 = cljs.core.next.call(null,seq12355);
return jayq.util.log.cljs$core$IFn$_invoke$arity$variadic(G__12356,seq12355__$1);
});
