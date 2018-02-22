(function() {
    'use strict';

    self.addEventListener('install', function(event) {
        console.log('Service worker installing...');
        // just for test purpose?
        // For the rest of the lab, we can now test new service worker code without manually unregistering the service worker.
        self.skipWaiting();
    });

    self.addEventListener('activate', function(event) {
        console.log('Service worker activating...');
    });

    // I'm a new service worker

    self.addEventListener('fetch', function(event) {
        console.log('Fetching:', event.request.url);
    });

})();