(ns clojure_overtone.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css include-js html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "clojure_overtone"]
               (include-css "/css/reset.css")
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")]
              [:body
               [:div#wrapper
                content]
               (include-js "/cljs/bootstrap.js")]))
