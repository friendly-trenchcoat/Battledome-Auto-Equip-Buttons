// ==UserScript==
// @author         friendly-trenchcoat
// @name           Battledome - Auto-Equip Buttons
// @description    Adds buttons to the battledome which apply a preset weapon/ability configuration.
// @version        1
// @include        http://www.neopets.com/dome/arena.phtml
// @require	       http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

/*
- INSTRUCTIONS -
The faerie ability URLs are listed below the main() function.
For each item you have equipped, find its image URL. For quick reference, I suggest pasting them below with the faerie abilities.

Inside each 'on click' function, simply paste in the appropirate urls for the items/abilities you wish to assign.
If you have multiples of a weapon, you may specify which one should be used. For the first (or if there's only one) use 0, for the second use 1, for the third use 2, etc.

You may add more buttons--just be sure to give each one a unique id (defaultset4, defaultset5, etc.)
*/

function main(){   // CUSTOMIZE INSIDE HERE
    $('#statusmsg').before('<br><center> <button id="defaultset1" class>Set 1</button> <button id="defaultset2" class>Set 2</button> <button id="defaultset3" class>Set 3</button> </center>');

    $( '#defaultset1' ).on( 'click', function( e ) { // shuriken 1, yooyu 1, lense flare
        e1url = "'http://images.neopets.com/items/shw_shuriken.gif'";                              // equipment slot 1
        e2url = "'http://images.neopets.com/items/gif_acy18_knu_duster.gif'";                      // equipment slot 2
        aurl = "'http://images.neopets.com/bd2/abilities/0021_c4hje5rwjo_lensflare/thumb_21.png'"; // faerie ability
        setAttack(e1url, 0, e2url, 0, aurl);                                                       // 0 means use the first (or only) one
    });
    $( '#defaultset2' ).on( 'click', function( e ) { // shuriken 2, yooyu 1, sear
        e1url = "'http://images.neopets.com/items/shw_shuriken.gif'";
        e2url = "'http://images.neopets.com/items/gif_acy18_knu_duster.gif'";
        aurl = "'http://images.neopets.com/bd2/abilities/0018_o3g5y729h8_sear/thumb_18.png'";
        setAttack(e1url, 1, e2url, 0, aurl);
    });
    $( '#defaultset3' ).on( 'click', function( e ) { // yooyu 1, yooyu 2, static cling
        e1url = "'http://images.neopets.com/items/gif_acy18_knu_duster.gif'";
        e2url = "'http://images.neopets.com/items/gif_acy18_knu_duster.gif'";
        aurl = "'http://images.neopets.com/bd2/abilities/0001_h743ty2wez_staticcling/thumb_1.png'";
        setAttack(e1url, 0, e2url, 1, aurl);
    });
}

/*
- MY EQUIPMENT -
shurkien     http://images.neopets.com/items/shw_shuriken.gif
mara yoyo    http://images.neopets.com/items/bd_ddy18_danger_maraqyoyo.gif
brains       http://images.neopets.com/items/bd_tyweof2013_brainhealjar.gif
yooyu        http://images.neopets.com/items/gif_acy18_knu_duster.gif


- FAERIE ABILITIES -
http://images.neopets.com/bd2/abilities/0001_h743ty2wez_staticcling/thumb_1.png
http://images.neopets.com/bd2/abilities/0002_qx4b5ievrb_anicicle/thumb_2.png
http://images.neopets.com/bd2/abilities/0003_c342ieuwds_healingfire/thumb_3.png

http://images.neopets.com/bd2/abilities/0010_p1yh839wh5_halitosis/thumb_10.png
// drizzle's icon is broken
http://images.neopets.com/bd2/abilities/0012_m2u8x3y7w_bandage/thumb_12.png
http://images.neopets.com/bd2/abilities/0013_7y43jzg4er_meditate/thumb_13.png
http://images.neopets.com/bd2/abilities/0014_jhuh934z0p_shade/thumb_14.png
http://images.neopets.com/bd2/abilities/0015_q4h98hd2gu_cranky/thumb_15.png
http://images.neopets.com/bd2/abilities/0016_4ehr7vwu3i_meh/thumb_16.png

http://images.neopets.com/bd2/abilities/0018_o3g5y729h8_sear/thumb_18.png
http://images.neopets.com/bd2/abilities/0019_i3h7d34uqp_irritableminions/thumb_19.png
http://images.neopets.com/bd2/abilities/0020_i43ghu9b8a_throwpillows/thumb_20.png
http://images.neopets.com/bd2/abilities/0021_c4hje5rwjo_lensflare/thumb_21.png
http://images.neopets.com/bd2/abilities/0022_u34y72hegr_shhhhhhhhh/thumb_22.png
http://images.neopets.com/bd2/abilities/0023_yj489reu4j_shroud/thumb_23.png
http://images.neopets.com/bd2/abilities/0024_bh342iegwu_float/thumb_24.png
http://images.neopets.com/bd2/abilities/0025_wy54t93z8u_burrow/thumb_25.png
http://images.neopets.com/bd2/abilities/0026_ot4728gejs_tempest/thumb_26.png
http://images.neopets.com/bd2/abilities/0027_e54u9o3rux_snowagersbreath/thumb_27.png
http://images.neopets.com/bd2/abilities/0028_dy54g2o31z_warlocksrage/thumb_28.png
http://images.neopets.com/bd2/abilities/0029_ah54yubiow_rejuvenate/thumb_29.png
http://images.neopets.com/bd2/abilities/0030_d7h34sd92x_drainlife/thumb_30.png
http://images.neopets.com/bd2/abilities/0031_3hrei48dgh_reflect/thumb_31.png
http://images.neopets.com/bd2/abilities/0032_yh2u3wqv4b_rallycry/thumb_32.png
http://images.neopets.com/bd2/abilities/0033_yq734ehvrw_adrenalinerush/thumb_33.png
http://images.neopets.com/bd2/abilities/0034_syb428iowu_meepitstampede/thumb_34.png
http://images.neopets.com/bd2/abilities/0035_py72ri38gd_summonmonoceraptor/thumb_35.png

http://images.neopets.com/bd2/abilities/0037_tgyuy43ui0_esophagorstench/thumb_37.png
*/

var e1url, e2url, aurl;
var graphic = "opacity: 1; background-image: url(%s); background-size: 60px 60px; background-position: 0px 0px;";
function setAttack(e1, n1, e2, n2, a){
    // Change graphics
    $('#p1e1m').find("div").attr("style", graphic.replace("%s", e1));
    $('#p1e2m').find("div").attr("style", graphic.replace("%s", e2));
    $('#p1am').find("div").attr("style", graphic.replace("%s", a));

    // Change values
    $('#p1e1').attr("value", $("img[src="+e1+"]").eq(0).attr("id"));
    $('#p1e2').attr("value", $("img[src="+e2+"]").eq(0).attr("id"));
    $('#p1a').attr("value", a.match(/thumb_([0-9]*).png/)[1]);
}
var intervalId = setInterval(function() {  // wait until page has loaded
    if( $('#fltp1').attr("class") == "fltotal damage" ){
        clearInterval(intervalId);
        main();
    }
}, 100);
