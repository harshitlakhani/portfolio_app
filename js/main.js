
$(window).load(function(){
    $('#preloader').fadeOut(100,function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/


/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
            $('#open-button').removeClass('is-active');
		}
		else {
			classie.add( bodyEl, 'show-menu' );
            $('#open-button').addClass('is-active');

        }
		isOpen = !isOpen;
	}

	init();

})();


