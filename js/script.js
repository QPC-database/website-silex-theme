

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'UA-170093191-3');
    

		document.addEventListener("scroll", function () {
			var h = document.documentElement,
				b = document.body,
				st = "scrollTop",
				sh = "scrollHeight";

			var percent = parseInt(((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100);

			console.log(percent + "%");
			if (percent == 25) {
				gtag("event", "scroll", { event_category: "{{Page URL}}", event_label: "25%", value: 0, non_interaction: true });
			} else if (percent == 50) {
				gtag("event", "scroll", { event_category: "{{Page URL}}", event_label: "50%", value: 0, non_interaction: true });
			} else if (percent == 75) {
				gtag("event", "scroll", { event_category: "{{Page URL}}", event_label: "75%", value: 0, non_interaction: true });
			} else if (percent == 95) {
				gtag("event", "scroll", { event_category: "{{Page URL}}", event_label: "95%", value: 0, non_interaction: true });
			}
		});
	
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})