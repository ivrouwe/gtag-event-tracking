# gtag-event-tracking
Google Tag Manager Event Tracking

## Dependencies

* jQuery

## How it works

Looks for HTML elements with a `data-gtag-action` attribute with a non-empty value. For each matching element, looks for the following additional (optional) gtag parameter values to pass to Google:

* "Category" - stored in `data-gtag-event_category`
* "Label" - stored in `data-gtag-event_label`
* "Value" (Integer) - stored in `data-gtag-value`

The code uses a `switch` statement to determine what type of event listener to attach to each matching element; the `switch` statement also allows us to pass additional parameters to gtag() for elements whose default behaviour would otherwise override gtag() before it could execute (for example, an `<a>` element changing the value of `window.location` when it's clicked).

The `data-gtag-*` attributes can be added directly to hard-coded HTML elements, but it may be beneficial to add them to CMS-generated content as well (by making them editable in the CMS).
