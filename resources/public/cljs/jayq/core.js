// Compiled by ClojureScript 1.7.48 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('jayq.util');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
return [cljs.core.str("[crateGroup="),cljs.core.str(jayq.core.crate_meta.call(null,sel)),cljs.core.str("]")].join('');
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
/**
 * @param {...*} var_args
 */
jayq.core.$ = (function() { 
var jayq$core$$__delegate = function (sel,p__12238){
var vec__12240 = p__12238;
var context = cljs.core.nth.call(null,vec__12240,(0),null);
if(cljs.core.not.call(null,context)){
return jQuery(jayq.core.__GT_selector.call(null,sel));
} else {
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
}
};
var jayq$core$$ = function (sel,var_args){
var p__12238 = null;
if (arguments.length > 1) {
var G__12241__i = 0, G__12241__a = new Array(arguments.length -  1);
while (G__12241__i < G__12241__a.length) {G__12241__a[G__12241__i] = arguments[G__12241__i + 1]; ++G__12241__i;}
  p__12238 = new cljs.core.IndexedSeq(G__12241__a,0);
} 
return jayq$core$$__delegate.call(this,sel,p__12238);};
jayq$core$$.cljs$lang$maxFixedArity = 1;
jayq$core$$.cljs$lang$applyTo = (function (arglist__12242){
var sel = cljs.core.first(arglist__12242);
var p__12238 = cljs.core.rest(arglist__12242);
return jayq$core$$__delegate(sel,p__12238);
});
jayq$core$$.cljs$core$IFn$_invoke$arity$variadic = jayq$core$$__delegate;
return jayq$core$$;
})()
;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.slice((0),(1));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.size();
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__6783__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6783__auto__)){
return or__6783__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$__$1),cljs.core.count.call(null,this$__$1));
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.call = (function() {
var G__12243 = null;
var G__12243__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12243__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12243 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__12243__2.call(this,_,k);
case 3:
return G__12243__3.call(this,_,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12243.cljs$core$IFn$_invoke$arity$2 = G__12243__2;
G__12243.cljs$core$IFn$_invoke$arity$3 = G__12243__3;
return G__12243;
})()
;
jayq.core.anim = (function jayq$core$anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function jayq$core$text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function jayq$core$css($elem,opts){
if((opts instanceof cljs.core.Keyword)){
return $elem.css(cljs.core.name.call(null,opts));
} else {
return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
jayq.core.attr = (function jayq$core$attr(){
var args__7829__auto__ = [];
var len__7822__auto___12249 = arguments.length;
var i__7823__auto___12250 = (0);
while(true){
if((i__7823__auto___12250 < len__7822__auto___12249)){
args__7829__auto__.push((arguments[i__7823__auto___12250]));

var G__12251 = (i__7823__auto___12250 + (1));
i__7823__auto___12250 = G__12251;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((2) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((2)),(0))):null);
return jayq.core.attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7830__auto__);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,a,p__12247){
var vec__12248 = p__12247;
var v = cljs.core.nth.call(null,vec__12248,(0),null);
var a__$1 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v)){
return $elem.attr(a__$1);
} else {
return $elem.attr(a__$1,v);
}
});

jayq.core.attr.cljs$lang$maxFixedArity = (2);

jayq.core.attr.cljs$lang$applyTo = (function (seq12244){
var G__12245 = cljs.core.first.call(null,seq12244);
var seq12244__$1 = cljs.core.next.call(null,seq12244);
var G__12246 = cljs.core.first.call(null,seq12244__$1);
var seq12244__$2 = cljs.core.next.call(null,seq12244__$1);
return jayq.core.attr.cljs$core$IFn$_invoke$arity$variadic(G__12245,G__12246,seq12244__$2);
});
jayq.core.data = (function jayq$core$data(){
var args__7829__auto__ = [];
var len__7822__auto___12257 = arguments.length;
var i__7823__auto___12258 = (0);
while(true){
if((i__7823__auto___12258 < len__7822__auto___12257)){
args__7829__auto__.push((arguments[i__7823__auto___12258]));

var G__12259 = (i__7823__auto___12258 + (1));
i__7823__auto___12258 = G__12259;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((2) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((2)),(0))):null);
return jayq.core.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7830__auto__);
});

jayq.core.data.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,k,p__12255){
var vec__12256 = p__12255;
var v = cljs.core.nth.call(null,vec__12256,(0),null);
var k__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
return $elem.data(k__$1);
} else {
return $elem.data(k__$1,v);
}
});

jayq.core.data.cljs$lang$maxFixedArity = (2);

jayq.core.data.cljs$lang$applyTo = (function (seq12252){
var G__12253 = cljs.core.first.call(null,seq12252);
var seq12252__$1 = cljs.core.next.call(null,seq12252);
var G__12254 = cljs.core.first.call(null,seq12252__$1);
var seq12252__$2 = cljs.core.next.call(null,seq12252__$1);
return jayq.core.data.cljs$core$IFn$_invoke$arity$variadic(G__12253,G__12254,seq12252__$2);
});
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__$1);
});
jayq.core.remove_class = (function jayq$core$remove_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__$1);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(){
var args__7829__auto__ = [];
var len__7822__auto___12264 = arguments.length;
var i__7823__auto___12265 = (0);
while(true){
if((i__7823__auto___12265 < len__7822__auto___12264)){
args__7829__auto__.push((arguments[i__7823__auto___12265]));

var G__12266 = (i__7823__auto___12265 + (1));
i__7823__auto___12265 = G__12266;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12262){
var vec__12263 = p__12262;
var speed = cljs.core.nth.call(null,vec__12263,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12263,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq12260){
var G__12261 = cljs.core.first.call(null,seq12260);
var seq12260__$1 = cljs.core.next.call(null,seq12260);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__12261,seq12260__$1);
});
jayq.core.show = (function jayq$core$show(){
var args__7829__auto__ = [];
var len__7822__auto___12271 = arguments.length;
var i__7823__auto___12272 = (0);
while(true){
if((i__7823__auto___12272 < len__7822__auto___12271)){
args__7829__auto__.push((arguments[i__7823__auto___12272]));

var G__12273 = (i__7823__auto___12272 + (1));
i__7823__auto___12272 = G__12273;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12269){
var vec__12270 = p__12269;
var speed = cljs.core.nth.call(null,vec__12270,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12270,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq12267){
var G__12268 = cljs.core.first.call(null,seq12267);
var seq12267__$1 = cljs.core.next.call(null,seq12267);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__12268,seq12267__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(){
var args__7829__auto__ = [];
var len__7822__auto___12278 = arguments.length;
var i__7823__auto___12279 = (0);
while(true){
if((i__7823__auto___12279 < len__7822__auto___12278)){
args__7829__auto__.push((arguments[i__7823__auto___12279]));

var G__12280 = (i__7823__auto___12279 + (1));
i__7823__auto___12279 = G__12280;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12276){
var vec__12277 = p__12276;
var speed = cljs.core.nth.call(null,vec__12277,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12277,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq12274){
var G__12275 = cljs.core.first.call(null,seq12274);
var seq12274__$1 = cljs.core.next.call(null,seq12274);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__12275,seq12274__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(){
var args__7829__auto__ = [];
var len__7822__auto___12285 = arguments.length;
var i__7823__auto___12286 = (0);
while(true){
if((i__7823__auto___12286 < len__7822__auto___12285)){
args__7829__auto__.push((arguments[i__7823__auto___12286]));

var G__12287 = (i__7823__auto___12286 + (1));
i__7823__auto___12286 = G__12287;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12283){
var vec__12284 = p__12283;
var speed = cljs.core.nth.call(null,vec__12284,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12284,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq12281){
var G__12282 = cljs.core.first.call(null,seq12281);
var seq12281__$1 = cljs.core.next.call(null,seq12281);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__12282,seq12281__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(){
var args__7829__auto__ = [];
var len__7822__auto___12292 = arguments.length;
var i__7823__auto___12293 = (0);
while(true){
if((i__7823__auto___12293 < len__7822__auto___12292)){
args__7829__auto__.push((arguments[i__7823__auto___12293]));

var G__12294 = (i__7823__auto___12293 + (1));
i__7823__auto___12293 = G__12294;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12290){
var vec__12291 = p__12290;
var speed = cljs.core.nth.call(null,vec__12291,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12291,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq12288){
var G__12289 = cljs.core.first.call(null,seq12288);
var seq12288__$1 = cljs.core.next.call(null,seq12288);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__12289,seq12288__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(){
var args__7829__auto__ = [];
var len__7822__auto___12299 = arguments.length;
var i__7823__auto___12300 = (0);
while(true){
if((i__7823__auto___12300 < len__7822__auto___12299)){
args__7829__auto__.push((arguments[i__7823__auto___12300]));

var G__12301 = (i__7823__auto___12300 + (1));
i__7823__auto___12300 = G__12301;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12297){
var vec__12298 = p__12297;
var speed = cljs.core.nth.call(null,vec__12298,(0),null);
var on_finish = cljs.core.nth.call(null,vec__12298,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq12295){
var G__12296 = cljs.core.first.call(null,seq12295);
var seq12295__$1 = cljs.core.next.call(null,seq12295);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__12296,seq12295__$1);
});
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function jayq$core$inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(){
var args__7829__auto__ = [];
var len__7822__auto___12306 = arguments.length;
var i__7823__auto___12307 = (0);
while(true){
if((i__7823__auto___12307 < len__7822__auto___12306)){
args__7829__auto__.push((arguments[i__7823__auto___12307]));

var G__12308 = (i__7823__auto___12307 + (1));
i__7823__auto___12307 = G__12308;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((1) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((1)),(0))):null);
return jayq.core.val.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7830__auto__);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__12304){
var vec__12305 = p__12304;
var v = cljs.core.nth.call(null,vec__12305,(0),null);
if(cljs.core.truth_(v)){
return $elem.val(v);
} else {
return $elem.val();
}
});

jayq.core.val.cljs$lang$maxFixedArity = (1);

jayq.core.val.cljs$lang$applyTo = (function (seq12302){
var G__12303 = cljs.core.first.call(null,seq12302);
var seq12302__$1 = cljs.core.next.call(null,seq12302);
return jayq.core.val.cljs$core$IFn$_invoke$arity$variadic(G__12303,seq12302__$1);
});
jayq.core.queue = (function jayq$core$queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function jayq$core$dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function jayq$core$xhr(p__12309,content,callback){
var vec__12311 = p__12309;
var method = cljs.core.nth.call(null,vec__12311,(0),null);
var uri = cljs.core.nth.call(null,vec__12311,(1),null);
var params = jayq.util.map__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),jayq.util.map__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
