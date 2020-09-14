/**
 * Created by H on 2016/1/13.
 */

var neusoft={};
neusoft.matchingGame={};

neusoft.matchingGame.CardWidth=80;
neusoft.matchingGame.CardHeight=120;
neusoft.matchingGame.deck=[
    "cardAK","cardAK",
    "cardAQ","cardAQ",
    "cardAJ","cardAJ",
    "cardBK","cardBK",
    "cardBQ","cardBQ",
    "cardBJ","cardBJ"
];
//随机返回 1  -1
function shuffle(){
    return Math.random()>0.5 ? -1 : 1
}


$(function(){
    neusoft.matchingGame.deck.sort(shuffle);
    var $card=$(".card");
    for(var i=0;i<11;i++){
        $card.clone().appendTo($("#cards"));
    }

    $(".card").each(function(index){
        console.log(index);
       $(this).css({
           "left":(neusoft.matchingGame.CardWidth+20)*(index%4)+"px",
            "top":(neusoft.matchingGame.CardHeight+20)*Math.floor(index/4)+"px"
       }) ;

        function checkPattern(cards){
            var pattern1 =$(cards[0]).data("pattern");
            var pattern2 =$(cards[1]).data("pattern");

            $(cards).removeClass("card-flipped");
            if(pattern1== pattern2){
                $(cards).addClass("card-removed")
                    .bind("webkitTransitionEnd",function(){
                        $(this).remove();
                    })
            }

        }


        function selectedCard(){
           // alert(this).data("pattern");


            if($(".card-flipped").length>1){
                return;
            }
            $(this).addClass("card-flipped");
            var $fcard=$(".card-flipped");

            if($fcard.length==2){
                //checkPattern($fcard);
                setTimeout(function(){
                    checkPattern($fcard);
                },700);
            }

        }

        var pattern =neusoft.matchingGame.deck.pop();
        $(this).data("pattern",pattern);
        $(this).find(".back").addClass(pattern);
        $(this).click(selectedCard);

    });






});