window.addEventListener('DOMContentLoaded', event=>{
    $('ul.show-dropdown.main-navbar li').click(function(){
        $('section').hide();
        var sectionId = $(this).data('section');
        $('#' + sectionId).show();
    });
    
const home = document.getElementById('home')
home.addEventListener('click', event=> {
    window.location.assign("../index.html")
})

var tabsVerticalInner = $('#accordian');
var selectorVerticalInner = $('#accordian').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
	"top":itemPosVerticalTop.top + "px", 
	"left":itemPosVerticalLeft.left + "px",
	"height": activeWidthVerticalHeight + "px",
	"width": activeWidthVerticalWidth + "px"
});
$("#accordian").on("click","li",function(e){
	$('#accordian ul li').removeClass("active");
	$(this).addClass('active');
	var activeWidthVerticalHeight = $(this).innerHeight();
	var activeWidthVerticalWidth = $(this).innerWidth();
	var itemPosVerticalTop = $(this).position();
	var itemPosVerticalLeft = $(this).position();
	$(".selector-active").css({
		"top":itemPosVerticalTop.top + "px", 
		"left":itemPosVerticalLeft.left + "px",
		"height": activeWidthVerticalHeight + "px",
		"width": activeWidthVerticalWidth + "px"
	});
});

jQuery('.alert-banner-close').on('click', function() {
    jQuery(this).parent().remove();
  });
})