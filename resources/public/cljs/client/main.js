// Compiled by ClojureScript 1.7.48 {}
goog.provide('client.main');
goog.require('cljs.core');
goog.require('crate.core');
goog.require('fetch.remotes');
goog.require('jayq.core');
client.main.$body = jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
client.main.$piano = jayq.core.$.call(null,new cljs.core.Keyword(null,"#piano","#piano",-1709262250));
var group__18928__auto___19546 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
client.main.button = ((function (group__18928__auto___19546){
return (function client$main$button(p__19541){
var map__19544 = p__19541;
var map__19544__$1 = ((((!((map__19544 == null)))?((((map__19544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19544):map__19544);
var label = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var action = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var param = cljs.core.get.call(null,map__19544__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var elem__18929__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"data-action","data-action",821237678),action,new cljs.core.Keyword(null,"data-param","data-param",-484878782),param], null),label], null));
elem__18929__auto__.setAttribute("crateGroup",group__18928__auto___19546);

return elem__18929__auto__;
});})(group__18928__auto___19546))
;

client.main.button.prototype._crateGroup = group__18928__auto___19546;
jayq.core.append.call(null,client.main.$piano,client.main.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"play note",new cljs.core.Keyword(null,"action","action",-811238024),"play-note",new cljs.core.Keyword(null,"param","param",2013631823),"40"], null)));
jayq.core.delegate.call(null,client.main.$body,client.main.button,new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
e.preventDefault();

var me = this;
var $me = jayq.core.$.call(null,me);
var action = jayq.core.data.call(null,$me,new cljs.core.Keyword(null,"action","action",-811238024));
var param = jayq.core.data.call(null,$me,new cljs.core.Keyword(null,"param","param",2013631823));
return remote.remote_callback.call(null,action,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.main.params], null));
}));
