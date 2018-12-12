(function($) {
	//Google Tag Manager Event Tracking
	$('[data-gtag-action]').not('[data-gtag-action=""]').each(function(i) {
		var trigger = this,
			action = trigger.dataset.gtagAction,
			params = {},
			eventType,
			gtagMaxAffordance = 2000,
			callback = function () {
				gtag('event', action, params);
			};

		if(trigger.dataset.gtagEvent_category) {
			params.event_category = trigger.dataset.gtagEvent_category;
		}

		if(trigger.dataset.gtagEvent_label) {
			params.event_label = trigger.dataset.gtagEvent_label;
		}

		if(!isNaN(parseInt(trigger.dataset.gtagValue, 10))) {
			params['value'] = parseInt(trigger.dataset.gtagValue);
		}

		switch(trigger.nodeName) {
			case 'FORM':
				eventType = 'submit';

				// The maximum time allowed for gtag() to attempt to send
				params.event_timeout = gtagMaxAffordance;

				// The function to be called once gtag() has sent or event_timeout has elapsed
				params.event_callback = function() {
					trigger.submit();
				};

				break;
			case 'A':
				eventType = 'click';

				// The maximum time allowed for gtag() to attempt to send
				params.event_timeout = gtagMaxAffordance;

				// The function to be called once gtag() has sent or event_timeout has elapsed
				params.event_callback = function() {
					window.location = trigger.href;
				};

				break;
			default:
				eventType = 'click';
		}

		trigger.addEventListener(eventType, callback);
	});
}(jQuery));