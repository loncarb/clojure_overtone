(ns clojure_overtone.views.welcome
  (:require [clojure_overtone.views.common :as common]
            [noir.content.getting-started])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]
;        [overtone.live]
;        [overtone.inst.sampled-piano]
        [noir.fetch.remotes :only [defremote]]))


(defpage "/welcome" []
         (common/layout
           [:p "dusica"]
          [:div#piano]))

(defremote play-note [n]
  )
