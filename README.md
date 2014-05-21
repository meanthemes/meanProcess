meanProcess
===========

A Simple Process Bar

## Preamble

OK, so this is Pre-Alpha as in completely hairbrained and up in the air test mode.

I'm still refining most of it. e.g. full browser testing, browser resize events, mobile and device testing, semantic markup, the actual maths that powers it!

At the moment, it has been tested (not exhaustively) on iOS and all the latest browsers for Mac.


### Required

* jQuery (It's a jQuery plugin) 1.11.0 is tested so far.
* meanprocess.css (src/css)
* jquery.meanprocess.js (src/js)


### Recommended

This plugin is generally developed to utilise [FontAwesome](http://fortawesome.github.io/Font-Awesome/)

### Options

	switchDirection: 540, // Width to switch orientation of process bar
    markerColor: '#f3e042', // Change marker color
	barColor: '#bac3cc' // Change bar color
	
	
### Using it

Please check the demo/meanprocess.html file for the simplest setup.

Basically, include...

	<link rel="stylesheet" href="../src/css/meanprocess.css">

in the 

	<head>
	
And load jQuery and plugin in the footer

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.js"></script> 
	<script src="../src/js/jquery.meanprocess.js"></script> 
	
Then call the function and nominate the element you want it to run on.

	<script>
		$('#process').meanprocess();
	</script> 		
	
Add the markup within the 

	<body>

Like this...

	<div class="mean-processbar">
		<div class="mean-processbar-marker" data-percent="0">
			<span class="mpb-marker"></span>
			<span class="mean-processbar-title">Design</span>
		</div>
		<div class="mean-processbar-marker" data-percent="50">
			<span class="mpb-marker"></span>
			<span class="mean-processbar-title">Develop</span>
		</div>
		<div class="mean-processbar-marker" data-percent="100">
			<span class="mpb-marker"></span>
			<span class="mean-processbar-title">Deliver</span>
		</div>		
		<div class="mean-processbar-bar"></div>
	</div>	
	
### Configuring marker positions	

As you may have gathered from the above every marker needs...

	<div class="mean-processbar-marker" data-percent="0">
		<span class="mpb-marker"></span>
		<span class="mean-processbar-title">Design</span>
	</div>


The "data-percent" - anything inbetween 0 and 100. This will tell the marker where to position itself as a percentage of the overall width or height.

Within the

	<span class="mean-processbar-title">ENTER MARKER TITLE</span>

Enter you marker title

Add as many markers as you see fit.


### Help welcome

Any ideas, pull requests or general help will be greatly received.