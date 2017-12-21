
$(document).ready(function(){
	$( ".score" ).each(function( index ) {
		var value = parseFloat($( this ).text());
		$( this ).text((value).toFixed(2));
		var a = (value-1.0) / 3.0;
		a = Math.min(Math.max(a, 0), 1);
		a=a*a*a*a*a;
		var b = 1.00 - a;
		var red = jQuery.Color( "#ce4628" );
		var green = jQuery.Color( "#02b9f3" );
		var h = red.hue()*b + green.hue()*a;
		var s = red.saturation()*b + green.saturation()*a;
		var l = red.lightness()*b + green.lightness()*a;
		var mix = jQuery.Color({ hue: h, saturation: s, lightness: l, alpha: 255});
		var color = mix.toHexString();
		$(this).css('color',mix);
		$(this).css('font-size', 8*b+20*a);
	});
	$( ".rank" ).each(function( index ) {
		var value = parseFloat($( this ).text().replace("#", ""));
		console.log(value);
		var a = (value) / 500.0;
		a = a;
		a = Math.min(Math.max(a, 0), 1);
		var b = 1.00 - a;
		var red = jQuery.Color( "#ce4628" );
		var green = jQuery.Color( "#02b9f3" );
		var h = red.hue()*a + green.hue()*b;
		var s = red.saturation()*a + green.saturation()*b;
		var l = red.lightness()*a + green.lightness()*b;
		var mix = jQuery.Color({ hue: h, saturation: s, lightness: l, alpha: 255});
		var color = mix.toHexString();
		$(this).css('color',mix);
		$(this).css('font-size', 8*a+24*b);
	});
});