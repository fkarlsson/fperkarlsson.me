var init = true;

$(function() {
	// Init foundation stuff
	$(document).foundation();

	// Tabs
	initTabs();
});

function initTabs() {

	state = window.history.pushState !== undefined;

 	$.address.change(function(e) {
 		console.log(e);
 		var $header = $('header');
 		var $header_content = $('#header-content');

 		// Get paths
 		path = e.pathNames;
 		var tab = path.shift();
 		var article = path.shift();

 		// Default tab
 		if (tab === undefined) {
 			tab = 'skills';
 		}

 		var $nav = $('#nav a');
 		var $content = $('#content-container');

 		// Current tab
 		var current_tab = $nav.filter('.active').attr('href');
 		if (current_tab !== undefined) {
 			current_tab = current_tab.replace('#/', '');
 		} else {
 			current_tab = 'skills';
 		}

 		// Highlight nav item
 		$nav.filter('.active').removeClass('active');
 		$nav.filter('[href="\#\/' + tab + '"]').addClass('active');

 		// Show correct tab
 		$content.filter('.show').removeClass(current_tab);
 		$content.addClass('show ' + tab);
 		 
 		// Show correct article
 		if (article !== undefined) {
 			// Add fast/slow transition based on collapsed or not
 			var speed = 'slow';
 			if ($header.hasClass('collapsed')) {
 				speed = 'fast'
 			}

 			$header_content.find('.active').removeClass('slow').addClass('fast ').removeClass('active').removeClass('fast');
 			$header_content.find('#' + article + '-header-content').addClass('active ' + speed);

 			// Collapse header
 			if (init) {
 				$header.addClass('collapsed');
 				init = false;
 			} else {
 				$header.removeClass('reverse').addClass('animate collapsed');
 			}
 		} else {
 			init = false;

			$header.addClass('show animate reverse');
 			$header_content.find('.active').removeClass('active fast slow');
 			$header.removeClass('collapsed');
 		}

 		if (!init) {
 			$header.addClass('show');
 		}

 		// not sure what to do about footer
 		// $('footer').addClass('show');
 	});
}
