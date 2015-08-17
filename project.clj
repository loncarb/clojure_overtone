(defproject clojure_overtone "0.1.0-SNAPSHOT"
            :description "FIXME: write this!"
            :dependencies [[org.clojure/clojure "1.5.1"]
;                           [quantisan/overtone "0.10-SNAPSHOT"]
                           [overtone "0.6.0"]
                           [jayq "0.1.0-SNAPSHOT"]
                           [crate "0.1.0-SNAPSHOT"]
                           [fetch "0.1.0-SNAPSHOT"]
                           [noir "1.3.0-beta3"]
                           [org.clojure/clojurescript "1.7.48"]
                           [org.clojure/data.json "0.2.6"]]
            :cljsbuild
            {:builds
             [{:source-paths ["src"],
               :builds nil,
               :compiler
               {:output-dir "resources/public/cljs/",
                :optimizations :simple,
                :output-to "resources/public/cljs/bootstrap.js",
                :pretty-print true}}]}
            :plugins [[lein2-eclipse "2.0.0"]
                      [lein-cljsbuild "1.0.6"]]
            :main clojure_overtone.server)

