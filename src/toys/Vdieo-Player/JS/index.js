/**
 * Created by H on 2016/1/15.
 */



$(function(){

    var videoPlayer= document.getElementById("myvideo");

    playPauseVideo();
    fastBackward();
    fastForward();
    volumeDecr();
    volumeIncr();
    muteVideo();
    controlFullScreen();
    stopVideo();



    //视频总时长
    videoPlayer.onloadedmetadata=function(){
    }
    //全屏事件
    videoPlayer.webkitfullscreenchange=function(){
        controlFullScreen();
    }


    //缓存   进度事件
    videoPlayer.onprogress=function(){
        var dura = videoPlayer.duration.toFixed(2);
        var buffertime=0;
        if(videoPlayer.buffered&&videoPlayer.buffered.length){
            buffertime=videoPlayer.buffered.end(0);
            var percent =Math.round(buffertime/dura*100);
                    //----------------缓存进度
            $("#buffer-progress").css({
                "width":percent+"%"
            });

        }

    }
    //播放 进度 时间事件
    videoPlayer.ontimeupdate=function(){

        var dura = videoPlayer.duration.toFixed(2);
        var temp =videoPlayer.currentTime.toFixed(2);

        $("#AllTime").html(dura);

        if(parseInt(temp)<10){
            temp="0"+temp;
        }
        $("#CurrentTime").html(temp);

        var percent =Math.round(100*temp/dura);
         //--------------播放进度----------------------------------------
        $("#played-progress").css({
            "width":percent+"%"
        });

        if(videoPlayer.currentTime>0){
            var x1 = parseInt($("#video-progress").css("width"));
            if(videoPlayer.currentTime>0&&percent>1){
                $("#progress-bar").css({
                    "left":percent-1.5 +"%"
                });
            }
        }
    }

                           //-----手动控制进度-----------
    $("#video-progress").mousedown(function(e){
        // controlPlayProgress(e);
            var a = e.pageX - $("#video-progress").offset().left;
            var alltime =videoPlayer.duration.toFixed(2);
            var b = parseInt($("#video-progress").css("width"));
            var percent = (a/b)*alltime;
            videoPlayer.currentTime=percent;

        });
//    function controlPlayProgress(e){
//        var dura = videoPlayer.duration.toFixed(2);
//        var x1 =parseInt($("video-progress").css("width"));
//        var x = e.pageX-$("#played-progress").offset.left;
//        var percent=(x/x1)*dura;
//        videoPlayer.currentTime=percent;
//    }


    //控制视频播放结束时
    function playEnded(){

    }


    //全屏按钮操作
    function controlFullScreen(){
        $("#fullScreen").click(function(){

            $("#video-controls").addClass("full-screen");


            if(videoPlayer.requestFullscreen){
                videoPlayer.requestFullscreen();
            }
            else if (videoPlayer.mozRequestFullScreen) {
                videoPlayer.mozRequestFullScreen();
            }
            else if (videoPlayer.webkitRequestFullScreen) {
                videoPlayer.webkitRequestFullScreen();
            }
            if (videoPlayer.exitFullscreen) {
                videoPlayer.exitFullscreen();
            }
            else if (videoPlayer.mozCancelFullScreen) {
                videoPlayer.mozCancelFullScreen();
            }
            else if (videoPlayer.webkitCancelFullScreen) {
                videoPlayer.webkitCancelFullScreen();
            }
        });



    }
    //播放暂停按钮操作
    function playPauseVideo(){
        $("#playPause").click(function(){
            if(videoPlayer.paused){
                $("#playPause").addClass("play").removeClass("pause");
                videoPlayer.play();
            }
            else{
                $("#playPause").addClass("pause").removeClass("play");
                videoPlayer.pause();
            }
        });

    }
    //静音按钮
    function muteVideo(){
        $("#no-voice").click(function(){
           videoPlayer.volume=0.0;
        });
    }
    //停止按钮
    function stopVideo(){
        $("#stop").click(function(){
           videoPlayer.currentTime=0;
            videoPlayer.pause();
        });
    }
    //快进按钮
    function fastForward(){
        $("#fast").click(function(){
            videoPlayer.currentTime+=5;
        });

    }
    //快退按钮
    function fastBackward(){
        $("#back").click(function(){
            videoPlayer.currentTime-=5;
        });

    }
    //加音量按钮
    function volumeIncr(){
        videoPlayer.volume+=0.5;

    }
    //减音量按钮
    function volumeDecr(){
        videoPlayer.volume-=0.5;
    }



})