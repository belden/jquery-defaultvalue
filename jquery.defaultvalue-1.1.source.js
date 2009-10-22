/**
*	@name							Defaultvalue
*	@descripton						
*	@version						1.1
*	@requires						Jquery 1.2.6+
*	@author							Jan Jarfalk jan.jarfalk@unwrongest.com
*	@licens							MIT License - http://www.opensource.org/licenses/mit-license.php
*
*	@param {String} str				The default value
*/

(function(jQuery){
     jQuery.fn.extend({
         defaultValue: function(str) {	
            return this.each(function() {
				
				var $input			=	$(this),
					defaultValue	=	str || $input.attr('rel');
					
				
				if( $input.attr('type') == 'password' ) {
					handlePasswordInput();	
				} else {
					handleTextInputs();
				}
				
				function handlePasswordInput(){
				
					// Create clone and switch
					var $clone = createClone();
					$clone.insertAfter($input);
					$input.hide();
					
					// Events for password fields
					$input.blur(function(){
						if($input.val().length <= 0){
							$clone.show();
							$input.hide();
						}
					});
					
				}
				
				function handleTextInputs(){
				
					// Events for non-password fields
					$input.keypress( function () {
						if( $input.val().length > 0 ) {
							setState(this);
						}
					}).blur( function () {
						setState(this);
					}).focus( function () {
						$input.val() == defaultValue && $input.val('');
					});

					setState(this);
					
					// Remove default values from fields on submit
					$input.closest("form").submit(function() {
  						$input.val() == defaultValue && $input.val('');
					});
					
				}
				
				function setState(element){
					val = jQuery.trim($(element).val());
					if(val.length <= 0 || val == defaultValue) {
						$(element).val(defaultValue).addClass('empty');
					} else {
						$(element).removeClass('empty');
					}
				}
				
				
				// Create a text clone of password fields
				function createClone(){
					
					var $el = $("<input />").attr({
						'type'	: 'text',
						'value'	: defaultValue,
						'class'	: $input.attr('class')+' empty',
						'style'	: $input.attr('style')
					});
					
					$el.focus(function(){
					
						// Hide text clone and show real password field
						$el.hide();
						$input.show();
						
						// Webkit and Moz need some extra time
						setTimeout(function () { $input.focus(); }, 10);
					
					});
								
					return $el;
				}
				
            });
        }
    });
})(jQuery);