/**
 * Created by H on 2016/1/14.
 */

$(function(){
    var music =$("#music")[0];

   $("#mscPlrCtn").hover(function(){
        $("#playCtl,#playBtn").css({"opacity":"1"});
   },function(){
       $("#playCtl,#playBtn").css({"opacity":"0"});
   });

    $("#playBtn").click(function(){

        if(music.paused ){
            $("#mscPlrCtn").addClass("rotateCD");

            $("#playBtn").addClass("play").removeClass("pause");
            $("#mscPlrCtn").addClass("rt").removeClass("stRt");
            music.play();

        }
        else {
            $("#playBtn").addClass("pause").removeClass("play");
           $("#mscPlrCtn").addClass("stRt").removeClass("rt");
            music.pause();

        }
    });

});