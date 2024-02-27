window.addEventListener('DOMContentLoaded', event=>{
    jQuery('.alert-banner-close').on('click', function() {
        jQuery(this).parent().remove();
      });
})