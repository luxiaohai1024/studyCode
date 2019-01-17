var $ = window.Zepto;
var root = window.player;
var $scope = $(document.body);

var recordLike = [true,false,false];
var index = 0;
var songList;
var audio = new root.audioControl();

function bindEvent(){

    $scope.on("play:change",function(event,index){
        audio.getAudio(songList[index].audio);
        if(audio.status == "play"){
            audio.play();
            root.process.start();
        }
        root.process.renderAllTime(songList[index].duration);
        root.render(songList[index]);
        if(recordLike[index]){
            $scope.find(".like-btn").addClass("liking");
        }else {
            $scope.find(".like-btn").removeClass("liking");
        }
        root.process.updata(0);
    })
    
    $scope.on("click",".prev-btn",function(){
        // if(index === 0){
        //     index = songList.length -1;
        // }else {
        //     index--;
        // }
        index = controlManger.prev();
        $scope.trigger("play:change",index);
    })
    $scope.on("click",".next-btn",function(){
        // if(index === songList.length -1){
        //     index = 0;
        // }else {
        //     index++;
        // }
        index = controlManger.next();
        $scope.trigger("play:change",index);
    })

    $scope.on("click",".play-btn",function(){
        if(audio.status == "play"){
            audio.pause();
            root.process.stop();
        }else {
            audio.play();
            root.process.start();
        }
        $(this).toggleClass("pause");
    })

    $scope.on("click",".like-btn",function(){
        $(this).toggleClass("liking");
        recordLike[index] = !recordLike[index];
    })
}

function bindTouch(){
    var $slider = $scope.find(".slider-pointer");
    var offset = $scope.find(".pro-wrapper").offset();
    var left = offset.left;
    var width = offset.width;
    $slider.on("touchstart", function(){
        root.process.stop();
    }).on("touchmove", function(e){
        // percent --> update
        var x = e.changedTouches[0].clientX;
        var per = (x - left) / width;
        if(per < 0){
            per = 0;
        }else if (per > 1){
            per = 0.98;
        }
        root.process.updata(per);
    }).on("touchend", function(e){
        var x = e.changedTouches[0].clientX;
        var per = (x - left) / width;
        if(per < 0){
            per = 0;
        }else if (per > 1){
            per = 0.98;
        }
        var curDuration = songList[controlManger.index].duration;
        var curTime = per * curDuration;
        audio.playTo(curTime);
        root.process.start(per);
        $scope.find(".play-btn").addClass("pause");
    })
}

function getData(url){
    $.ajax({
        type: "GET",
        url: url,
        success: function(data){
            root.render(data[0]);
            songList = data;
            bindEvent();

            controlManger = new root.controlManger(data.length);
            $scope.trigger("play:change",0);
            bindTouch();
        },
        error: function(){
            console.log("error");
        }
    })
}

getData("../mock/data.json");