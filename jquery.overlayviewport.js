

(function( $ ) {
    $.fn.overlay_viewport = function( options ) {
        var plugin_key =  'overlay-viewport-plugin';
        return this.each( function() {
            //only single instance to avoid re-initialization
            var element = $(this);
            var inst =  element.data(plugin_key);
            

            if(!inst &&  !options.disable){
                inst =  new overlay_viewport(element,options);
                element.data(plugin_key, inst);
            }else if( inst && options.disable){
                inst.disable(); 
                element.data(plugin_key, null);   
            }else if(inst){
                inst.update(options);
            }
            
        });
    }


    function overlay_viewport(element, options){

        this.element = element;
        this.element.wrap("<div style=''></div>");
        this.parent_div = this.element.parent();

        //left
        this.left_div = $("<div></div>");
        this.parent_div.append(this.left_div);

        //right
        this.right_div = $("<div></div>");
        this.parent_div.append(this.right_div);

        //top
        this.top_div = $("<div></div>");
        this.parent_div.append(this.top_div);

        //bottom
        this.bottom_div = $("<div></div>");
        this.parent_div.append(this.bottom_div);


        this.update = function(options){
            options = options || {};
            
            var settings = $.extend({
            
                // These are the defaults.
                window_height: 50,
                window_width: 50,
                opacity: 0.5,
                background_color : '#000',
                z_index: 999,
                window_top : 50,
                window_left : 50,        
            }, options );

            var elem_offset = this.element.offset();
            var elem_width = this.element.outerWidth();
            var elem_height = this.element.outerHeight();
                    

            //left
            this.left_div.css({
                        
                'position':'absolute',
                'z-index':settings.z_index,
                'left':elem_offset.left,
                'top': elem_offset.top,
                'width':(elem_width * settings.window_left / 100 ),
                'height': elem_height,
                'background-color':settings.background_color,
                'opacity':settings.opacity,
                '-moz-opacity': settings.opacity,
            });

            
            //right
            this.right_div.css({
                'position':'absolute',
                'z-index':settings.z_index,
                'left':elem_offset.left+(elem_width * settings.window_left / 100 ) + settings.window_width,
                'top': elem_offset.top,
                'width':(elem_width * (100-settings.window_left) / 100 )- settings.window_width,
                'height': elem_height,
                'background-color':settings.background_color,
                'opacity':settings.opacity,
                '-moz-opacity': settings.opacity,
            });


            //top
            this.top_div.css({
                'position':'absolute',
                'z-index':settings.z_index,
                'left':elem_offset.left+(elem_width * settings.window_left / 100 ),
                'top': elem_offset.top,
                'width': settings.window_width,
                'height': (elem_height * settings.window_top/100),
                'background-color':settings.background_color,
                'opacity':settings.opacity,
                '-moz-opacity': settings.opacity,
            });
                        


            //bottom
            this.bottom_div.css({
                'position':'absolute',
                'z-index':settings.z_index,
                'left':elem_offset.left+(elem_width * settings.window_left / 100 ),
                'top': elem_offset.top + (elem_height * settings.window_top/100) + settings.window_height,
                'width': settings.window_width,
                'height': (elem_height * (100-settings.window_top)/100)-settings.window_height,
                'background-color':settings.background_color,
                'opacity':settings.opacity,
                '-moz-opacity': settings.opacity,
            });

        }

        this.disable = function(){
            this.left_div.remove();
            this.right_div.remove();
            this.top_div.remove();
            this.bottom_div.remove();
            this.element.unwrap();
        }

         //update with options
        this.update(options);
        return this;
    }
                
}( jQuery ));