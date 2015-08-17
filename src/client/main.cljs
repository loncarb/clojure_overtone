(ns client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $body ($ :body))
(def $piano ($ :#piano))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])

(append $piano (button {:label "play note" :action "play-note" :param "40"}))

(delegate $body button :click
          (fn [e]
            (.preventDefault e)
            (this-as me
                     (let [$me ($ me)
                           action (data $me :action)
                           param (data $me :param)]
            (remote/remote-callback action [params])))))



