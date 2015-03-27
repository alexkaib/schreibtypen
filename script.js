var userDat = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0
};
 
userDat.addToType = function(type) {
    switch(type) {
        case 'type1':
            userDat.type1++;
            break;
        case 'type2':
            userDat.type2++;
            break;
        case 'type3':
            userDat.type3++;
            break;
        case 'type4':
            userDat.type4++;
            break;
    };
};
 
userDat.result = function() {
    if (userDat.type1 > 2 || userDat.type2 > 2 || userDat.type3 > 2 || userDat.type4 > 2) {
        return("Your type seems pretty clear! For more details, check out these descriptions!");
    }
    else {
        return("What an interesting mix! For more details, check out these descriptions!");
    };
};
  
var $adventurer_img = '<img src="https://dl.dropboxusercontent.com/s/exqnh3vdl18jvhl/adventurer1.jpg?dl=0" />';
var $map_img = '<img src="https://dl.dropboxusercontent.com/s/3wmm3ydl7kggva4/map.png?dl=0" />';
var $chip_img = '<img src="https://dl.dropboxusercontent.com/s/oeiurampifmohaa/chipmunk1.jpg?dl=0" />';
var $decathlete_img = '<img src="https://dl.dropboxusercontent.com/s/ylk9wxr7x50i0kp/decathlete1.jpg?dl=0" />';
 
$(document).ready(function(){
     
    $('.answer_a').click(function(){
        userDat.addToType('type1');
        $(this).css("color", "black");
        $(this).parent().parent().append($adventurer_img);
        $(this).parent().slideUp('slow', function(){
            $('img').slideDown('slow');
        });
    });
    $('.answer_b').click(function(){
        userDat.addToType('type2');
        $(this).css("color", "black");
        $(this).parent().parent().append($chip_img);
        $(this).parent().slideUp('slow', function(){
            $('img').slideDown('slow');
        });
    });
    $('.answer_c').click(function(){
        userDat.addToType('type3');
        $(this).css("color", "black");
        $(this).parent().parent().append($map_img);
        $(this).parent().slideUp('slow', function(){
            $('img').slideDown('slow');
        });
    });
    $('.answer_d').click(function(){
        userDat.addToType('type4');
        $(this).css("color", "black");
        $(this).parent().parent().append($decathlete_img);
        $(this).parent().slideUp('slow', function(){
            $('img').slideDown('slow');
        });
    });
     
    $('#reveal-btn').click(function(){
        if (userDat.type1 + userDat.type2 + userDat.type3 + userDat.type4 > 3){
        $('#answer').append("You are " + userDat.type1*25 + "% adventurer, " + userDat.type2*25
        + "% chipmunk, " + userDat.type3*25 + "% gold digger and " + userDat.type4*25 + "% decathlete.");
        $('#answer').append($('</br>'));
        $('#answer').append(userDat.result);
        $(this).slideUp('slow');
        $('.container-fluid').slideDown('slow');}
        else {
        	
        };
    });
     
    $('#get_adv').click(function(){
        $('#deca_jumbo').hide();
        $('#chip_jumbo').hide();
        $('#gold_jumbo').hide();
        $('#adventurer_jumbo').fadeIn('slow');
    });
     
    $('#get_dec').click(function(){
        $('#adventurer_jumbo').hide();
        $('#chip_jumbo').hide();
        $('#gold_jumbo').hide();
        $('#deca_jumbo').fadeIn('slow');
    });
     
    $('#get_chip').click(function(){
        $('#adventurer_jumbo').hide();
        $('#gold_jumbo').hide();
        $('#deca_jumbo').hide();
        $('#chip_jumbo').fadeIn('slow');
    });
     
    $('#get_gold').click(function(){
        $('#adventurer_jumbo').hide();
        $('#chip_jumbo').hide();
        $('#deca_jumbo').hide();
        $('#gold_jumbo').fadeIn('slow');
    });
     
    $('#reload').click(function(){
        location.reload();
    });
     
});
