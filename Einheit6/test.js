

import assert from "node:assert";
import {Rechteck} from "./Rechteck.js";



describe("Rechteck",function () {
    describe('.fläche', function() {
        it('sollte die richtige Fläche zurückgeben', function(){
            let r = new Rechteck(7,8);
            assert (r.fläche == 56);
        });
    })
    describe('.umfang', function() {
        it('sollte den richtigen Umfang zurückgeben', function(){
            let r = new Rechteck(7,8);
            assert (r.umfang == 30);
        });
    });
    describe('.isSquare', function() {
        it('prüft den Negativfall', function(){
            let r = new Rechteck(7,8);
            assert (r.isSquare == false);
        });
    });
    describe('.isSquare', function() {
        it('prüft den Postivfall', function(){
            let r = new Rechteck(7,7);
            assert (r.isSquare == true);
        });
    });

});