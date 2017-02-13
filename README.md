# overlay-viewport

A simple JQuery plugin to create a re-sizable overlay window on HTML elements.

## Usage

Can be initialized with or without options. Once initialized options can be changed later.

### Example

```
$("#id").overlay_viewport(); //initialize 

$("#id").overlay_viewport({  //initialize with options  
	window_height: 100,
	window_width: 100,
}); 


$("#id").overlay_viewport({  //change options at any point.  
	window_height: 150,
	window_width: 150,
}); 

``` 

### options

```
{
            
    window_height: 50, 			// pixels (default: 50)
    window_width: 50, 			// pixels (default: 50)
    opacity: 0.5, 				// between 0 to 1 (default: 0.5)
    background_color : '#000', 	// any valid color (default: #000)
    z_index: 999, 				// should be greater than underlying element's z-index (default: 999) 
    window_top : 50, 			// percentage with respect to underlying element (default: 50)
    window_left : 50, 			// percentage with respect to underlying element (default: 50)  
    disable : false				// boolean (default: false)    
}

```

## remove plugin
Plugin can be removed any time after initialization.

```
$("#id").overlay_viewport({ disable:true }); //remove plugin

```