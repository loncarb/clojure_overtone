// Compiled by ClojureScript 1.7.48 {}
goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",856789142),"http://www.w3.org/2000/svg"], null);
crate.core.elem_id = cljs.core.atom.call(null,(0));
crate.core.group_id = cljs.core.atom.call(null,(0));
crate.core.dom_attr = (function crate$core$dom_attr(){
var args9114 = [];
var len__7822__auto___9123 = arguments.length;
var i__7823__auto___9124 = (0);
while(true){
if((i__7823__auto___9124 < len__7822__auto___9123)){
args9114.push((arguments[i__7823__auto___9124]));

var G__9125 = (i__7823__auto___9124 + (1));
i__7823__auto___9124 = G__9125;
continue;
} else {
}
break;
}

var G__9116 = args9114.length;
switch (G__9116) {
case 2:
return crate.core.dom_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return crate.core.dom_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9114.length)].join('')));

}
});

crate.core.dom_attr.cljs$core$IFn$_invoke$arity$2 = (function (elem,attrs){
if(cljs.core.truth_(elem)){
if(!(cljs.core.map_QMARK_.call(null,attrs))){
return elem.getAttribute(cljs.core.name.call(null,attrs));
} else {
var seq__9117_9127 = cljs.core.seq.call(null,attrs);
var chunk__9118_9128 = null;
var count__9119_9129 = (0);
var i__9120_9130 = (0);
while(true){
if((i__9120_9130 < count__9119_9129)){
var vec__9121_9131 = cljs.core._nth.call(null,chunk__9118_9128,i__9120_9130);
var k_9132 = cljs.core.nth.call(null,vec__9121_9131,(0),null);
var v_9133 = cljs.core.nth.call(null,vec__9121_9131,(1),null);
crate.core.dom_attr.call(null,elem,k_9132,v_9133);

var G__9134 = seq__9117_9127;
var G__9135 = chunk__9118_9128;
var G__9136 = count__9119_9129;
var G__9137 = (i__9120_9130 + (1));
seq__9117_9127 = G__9134;
chunk__9118_9128 = G__9135;
count__9119_9129 = G__9136;
i__9120_9130 = G__9137;
continue;
} else {
var temp__4425__auto___9138 = cljs.core.seq.call(null,seq__9117_9127);
if(temp__4425__auto___9138){
var seq__9117_9139__$1 = temp__4425__auto___9138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9117_9139__$1)){
var c__7567__auto___9140 = cljs.core.chunk_first.call(null,seq__9117_9139__$1);
var G__9141 = cljs.core.chunk_rest.call(null,seq__9117_9139__$1);
var G__9142 = c__7567__auto___9140;
var G__9143 = cljs.core.count.call(null,c__7567__auto___9140);
var G__9144 = (0);
seq__9117_9127 = G__9141;
chunk__9118_9128 = G__9142;
count__9119_9129 = G__9143;
i__9120_9130 = G__9144;
continue;
} else {
var vec__9122_9145 = cljs.core.first.call(null,seq__9117_9139__$1);
var k_9146 = cljs.core.nth.call(null,vec__9122_9145,(0),null);
var v_9147 = cljs.core.nth.call(null,vec__9122_9145,(1),null);
crate.core.dom_attr.call(null,elem,k_9146,v_9147);

var G__9148 = cljs.core.next.call(null,seq__9117_9139__$1);
var G__9149 = null;
var G__9150 = (0);
var G__9151 = (0);
seq__9117_9127 = G__9148;
chunk__9118_9128 = G__9149;
count__9119_9129 = G__9150;
i__9120_9130 = G__9151;
continue;
}
} else {
}
}
break;
}

return elem;
}
} else {
return null;
}
});

crate.core.dom_attr.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});

crate.core.dom_attr.cljs$lang$maxFixedArity = 3;
crate.core.as_content = (function crate$core$as_content(parent,content){
var seq__9156 = cljs.core.seq.call(null,content);
var chunk__9157 = null;
var count__9158 = (0);
var i__9159 = (0);
while(true){
if((i__9159 < count__9158)){
var c = cljs.core._nth.call(null,chunk__9157,i__9159);
var child_9160 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.core.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$core$as_content.call(null,parent,c):(cljs.core.truth_(c.nodeName)?c:null))))));
if(cljs.core.truth_(child_9160)){
goog.dom.appendChild(parent,child_9160);
} else {
}

var G__9161 = seq__9156;
var G__9162 = chunk__9157;
var G__9163 = count__9158;
var G__9164 = (i__9159 + (1));
seq__9156 = G__9161;
chunk__9157 = G__9162;
count__9158 = G__9163;
i__9159 = G__9164;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9156);
if(temp__4425__auto__){
var seq__9156__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9156__$1)){
var c__7567__auto__ = cljs.core.chunk_first.call(null,seq__9156__$1);
var G__9165 = cljs.core.chunk_rest.call(null,seq__9156__$1);
var G__9166 = c__7567__auto__;
var G__9167 = cljs.core.count.call(null,c__7567__auto__);
var G__9168 = (0);
seq__9156 = G__9165;
chunk__9157 = G__9166;
count__9158 = G__9167;
i__9159 = G__9168;
continue;
} else {
var c = cljs.core.first.call(null,seq__9156__$1);
var child_9169 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.core.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?crate$core$as_content.call(null,parent,c):(cljs.core.truth_(c.nodeName)?c:null))))));
if(cljs.core.truth_(child_9169)){
goog.dom.appendChild(parent,child_9169);
} else {
}

var G__9170 = cljs.core.next.call(null,seq__9156__$1);
var G__9171 = null;
var G__9172 = (0);
var G__9173 = (0);
seq__9156 = G__9170;
chunk__9157 = G__9171;
count__9158 = G__9172;
i__9159 = G__9173;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
crate.core.normalize_element = (function crate$core$normalize_element(p__9175){
var vec__9180 = p__9175;
var tag = cljs.core.nth.call(null,vec__9180,(0),null);
var content = cljs.core.nthnext.call(null,vec__9180,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else {
}

var vec__9181 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag));
var _ = cljs.core.nth.call(null,vec__9181,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__9181,(1),null);
var id = cljs.core.nth.call(null,vec__9181,(2),null);
var class$ = cljs.core.nth.call(null,vec__9181,(3),null);
var vec__9182 = (function (){var vec__9183 = clojure.string.split.call(null,tag__$1,/:/);
var nsp = cljs.core.nth.call(null,vec__9183,(0),null);
var t = cljs.core.nth.call(null,vec__9183,(1),null);
var ns_xmlns = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp));
if(cljs.core.truth_(t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__6783__auto__ = ns_xmlns;
if(cljs.core.truth_(or__6783__auto__)){
return or__6783__auto__;
} else {
return nsp;
}
})(),t], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1912943770).cljs$core$IFn$_invoke$arity$1(crate.core.xmlns),nsp], null);
}
})();
var nsp = cljs.core.nth.call(null,vec__9182,(0),null);
var tag__$2 = cljs.core.nth.call(null,vec__9182,(1),null);
var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__9181,_,tag__$1,id,class$,vec__9182,nsp,tag__$2,vec__9180,tag,content){
return (function (p1__9174_SHARP_){
return !((cljs.core.second.call(null,p1__9174_SHARP_) == null));
});})(vec__9181,_,tag__$1,id,class$,vec__9182,nsp,tag__$2,vec__9180,tag,content))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__6783__auto__ = id;
if(cljs.core.truth_(or__6783__auto__)){
return or__6783__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.core.parse_content = (function crate$core$parse_content(elem,content){
var attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,attrs)){
crate.core.dom_attr.call(null,elem,attrs);

return cljs.core.rest.call(null,content);
} else {
return content;
}
});
crate.core.create_elem = (function crate$core$create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function crate$core$elem_factory(tag_def){
var vec__9185 = crate.core.normalize_element.call(null,tag_def);
var nsp = cljs.core.nth.call(null,vec__9185,(0),null);
var tag = cljs.core.nth.call(null,vec__9185,(1),null);
var attrs = cljs.core.nth.call(null,vec__9185,(2),null);
var content = cljs.core.nth.call(null,vec__9185,(3),null);
var elem = crate.core.create_elem.call(null,nsp,tag);
crate.core.dom_attr.call(null,elem,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"crateId","crateId",-1357508442),cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)], null)));

crate.core.as_content.call(null,elem,content);

return elem;
});
crate.core.html = (function crate$core$html(){
var args__7829__auto__ = [];
var len__7822__auto___9187 = arguments.length;
var i__7823__auto___9188 = (0);
while(true){
if((i__7823__auto___9188 < len__7822__auto___9187)){
args__7829__auto__.push((arguments[i__7823__auto___9188]));

var G__9189 = (i__7823__auto___9188 + (1));
i__7823__auto___9188 = G__9189;
continue;
} else {
}
break;
}

var argseq__7830__auto__ = ((((0) < args__7829__auto__.length))?(new cljs.core.IndexedSeq(args__7829__auto__.slice((0)),(0))):null);
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7830__auto__);
});

crate.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var res = cljs.core.map.call(null,crate.core.elem_factory,tags);
if(cljs.core.truth_(cljs.core.second.call(null,res))){
return res;
} else {
return cljs.core.first.call(null,res);
}
});

crate.core.html.cljs$lang$maxFixedArity = (0);

crate.core.html.cljs$lang$applyTo = (function (seq9186){
return crate.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9186));
});
