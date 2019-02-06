/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ahh-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-search': '&#xe900;',
		'icon-crown': '&#xe901;',
		'icon-correct': '&#xe902;',
		'icon-close-circle': '&#xf134;',
		'icon-close': '&#xf136;',
		'icon-min': '&#xf16c;',
		'icon-max': '&#xf16d;',
		'icon-map': '&#xf1ab;',
		'icon-question': '&#xf1f5;',
		'icon-exlem': '&#xf1f7;',
		'icon-bell': '&#xf1fb;',
		'icon-men': '&#xf210;',
		'icon-call': '&#xf2be;',
		'icon-thumb': '&#xf313;',
		'icon-bar': '&#xf320;',
		'icon-facebook': '&#xf343;',
		'icon-twitter': '&#xf360;',
		'icon-linkedin': '&#xf3f8;',
		'icon-whatsapp': '&#xf405;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
