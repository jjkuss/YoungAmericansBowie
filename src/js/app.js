/**
 * Created by JakeKuss on 2/21/2017.
 */

$(document).ready(function (){
    $("#scroll-to-top-link").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    })
});