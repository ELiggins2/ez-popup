/* Courtesy of the Paulund tutorial - How To Create A Simple Modal Box With JQuery
https://paulund.co.uk/how-to-create-a-simple-modal-box-with-jquery */

(function($){
    $fn.ez_popup_modal = function(prop){
    
    //Default params
    
    var options = $extend({
        height: "auto",
        width: "500",
        title: "",
        description: "",
        top: "20%",
        left: "30%",
    },prop);
    
        return this.click(function(e){
            
            add_block_page();
            add_popup_box();
            add_styles();
            
            $('.ez_popup_modal').fadeIn();
            
            function add_block_page(){
                 var block_page = $('<div class="ez_block_page"></div>');
                
                $(block_page).appendTo('body');
                
                $('.ez_block_page').click(function(){		
                $('.ez_block_page,.ez_popup_modal ').fadeOut().remove();					 
                });
                
            }
            
            
            function add_popup_box(){
                var pop_up = $('<div class="ez_popup_modal"><a href="#" class="ez_popup_close"></a><div class="ez_popup_inner_modal"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
                $(pop_up).appendTo('.ez_block_page');
                
                $('.ez_popup_close').click(function(){
                $('.ez_block_page').fadeOut().remove();		
                $(this).parent().fadeOut().remove();					 
                });
                
                
            }
            
            function add_styles(){
                
                var pageHeight = $(document).height();
                var pageWidth = $(window).width();
                
                $('ez_block_page').css({
                
                    'position':'absolute',
                    'top':'0',
                    'left':'0',
                    'background-color':'rgba(0,0,0,0.6)',
                    'height':pageHeight,
                    'width':pageWidth,
                    'z-index':'10'
                });
                
                $('ez_popup_modal').css({
                
                    'position':'absolute', 
                    'left':options.left,
                    'top':options.top,
                    'display':'none',
                    'height': options.height + 'px',
                    'width': options.width + 'px',
                    'border':'1px solid #fff',
                    'box-shadow': '0px 2px 7px #292929',
                    '-moz-box-shadow': '0px 2px 7px #292929',
                    '-webkit-box-shadow': '0px 2px 7px #292929',
                    'border-radius':'10px',
                    '-moz-border-radius':'10px',
                    '-webkit-border-radius':'10px',
                    'background': '#f2f2f2', 
                    'z-index':'50',
                });
                
                $('ez_popup_close').css({
                
                    'position':'relative',
                    'top':'-25px',
                    'left':'20px',
                    'float':'right',
                    'display':'block',
                    'height':'50px',
                    'width':'50px',
                    'background': 'url(images/close.png) no-repeat',
                });
                
                $('ez_popup_inner_modal').css({
                
                    'background-color':'#fff',
                    'height':(options.height - 50) + 'px',
                    'width':(options.width - 50) + 'px',
                    'padding':'10px',
                    'margin':'15px',
                    'border-radius':'3px',
                    '-moz-border-radius':'3px',
                    '-webkit-border-radius':'3px'
                });
                
                
            }
            
        });

        return this;
    };

})(jQuery);