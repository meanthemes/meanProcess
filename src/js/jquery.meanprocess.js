/*!
 * jQuery meanProcess Pre-Alpha Release
 * @Copyright (C) 2014 Chris Wharton (https://github.com/meanthemes/meanProcess)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
(function ($) {
	"use strict";
    $.fn.meanprocess = function (options) {
        var defaults = {
            switchDirection: 540, // Width to switch orientation of process bar
            markerColor: '#f3e042', // Change marker color
            barColor: '#bac3cc' // Change bar color
           
        };
        var options = $.extend(defaults, options);
        
        return this.each(function () {
            var switchDirection = options.switchDirection;
            var markerColor = options.markerColor;
            var barColor = options.barColor;
            
            
            function meanProcessBar() {
             
             	//Get current width
             	var currWidth = $(window).width();
             
             	
             	$('.mean-processbar').each(function(){
             	
             		$(this).addClass('mpb-visible').animate({ opacity: 1 },600);
             		
             		// Change bar color
             		if ( barColor !== "#bac3cc" ) {
             		
             			$(this).find('.mean-processbar-bar').css( 'background' , barColor );
             		
             		}
             		
             		
             		// Change Marker color
             		if ( markerColor !== "#f3e042" ) {
             		
             			$(this).find('.mean-processbar-marker span.mpb-marker').css( 'color' , markerColor );
             			
             		
             		}
             	
             		
             		// Grab overall width + height
             		var processBarWidth = $(this).width();
             		var processBarHeight = $(this).outerHeight();
             		
             		// Add mobile switch class
             		if ( currWidth <= switchDirection ) {
             			$(this).addClass('mpb-switch');
              			processBarHeight = $(this).outerHeight();
             		}	
             		
             		else {
             		
             			$(this).removeClass('mpb-switch');
         				processBarHeight = $(this).outerHeight();
             		
             		}
             
             		
             		var meanProcess=1;
             		
             		$('.mean-processbar-marker' , this).each( function (meanProcess) {
             		
             			meanProcess++;
             			
             			
             		
             			if ( currWidth > switchDirection ) {
             			
             				// Grab this instances widths
             				var markerWidth = $(this).outerWidth();
             				var dataPercent = $(this).attr('data-percent');
             				
             				
             				// Convert widths of elements into percentage to adjust % placement
             				var markerPlacement = processBarWidth*(dataPercent/markerWidth);
             				
             				// Adjust at left and right
             				var markerAdjust = "";
             			
             				
             				if ( markerPlacement >= (processBarWidth-markerWidth) ) {
             				
             					markerAdjust = markerWidth;
             					
             				}
             				
             				
             				if ( markerPlacement >= markerWidth && markerPlacement <= (processBarWidth-markerWidth) ) {
             				
             					markerAdjust = (markerWidth/2);
             					
             				}
             				
             				// Make the final sums
             				markerPlacement = markerPlacement - markerAdjust;
             				
             				$(this).fadeIn(1000).delay(500).animate({
             					marginLeft: markerPlacement 
             				},3000, function() {
             				  	$('span',this).delay(400*meanProcess).fadeIn(300);
             				  });
             				  
             			} else {
             			
             				// This is now in vertical orientation
             				
             				// Grab this instances heights
             				var markerHeight = $(this).outerHeight();
             				var markerWidth = $(this).outerHeight();
             				var dataPercent = $(this).attr('data-percent');
             				
             				//Adjust progress bar left
             				var containerWidth = $(this).parent().parent().outerWidth();
             				
             				var alignBar = (containerWidth/2)-(markerWidth/2);
             				var alignMarkers = (containerWidth/2)-(markerWidth/1.2)-(markerWidth/2);
             				
             				$(this).css( 'left' , alignMarkers );
             				$(this).parent().find('.mean-processbar-bar').css( 'left' , alignBar );
         					
         					// Convert widths of elements into percentage to adjust % placement
         					var markerPlacement = (processBarHeight * dataPercent) / 100;
         					
         					
         					// Adjust at top and bottom
         					var markerAdjust = "";
         					
         					if ( meanProcess === 1 ) {
         					
         						markerAdjust = "";
         						
         					}
         					
         					if ( meanProcess !== 1 ) {
         					
         						markerAdjust = markerHeight/2;
         						
         					}
         					
         					// Make the final sums
         					markerPlacement = (markerPlacement - markerAdjust);
         					
         					
         					$(this).fadeIn(1000).delay(500).animate({
         						marginTop: markerPlacement 
         					},3000, function() {
         					  	$('span',this).delay(400*meanProcess).fadeIn(300);
         					  });
         			
         			}
             			
             					
             		});
             			
             	});
             	
             	
             }
             
             
               meanProcessBar();
               
                        
            
        });
    };
})(jQuery);