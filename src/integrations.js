
var integrationsMasterList = {};
integrationsMasterList['ga'] = integrationsMasterList['google-analytics'];
integrationsMasterList['google'] = integrationsMasterList['google-analytics'];
integrationsMasterList['google-analytics'] = {
  trackPageView: function(){
    _gaq.push(['_trackPageview']);
  },
  trackPurchase: function(){},
  trackAction: function(opts){
    _trackEvent(opts.category, opts.action, opts.label, opts.value, opts.nonInteraction);
  }
};
integrationsMasterList['google-universal-analytics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
integrationsMasterList['kissmetrics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
integrationsMasterList['km'] = integrationsMasterList['kissmetrics'];
integrationsMasterList['universal-analytics'] = integrationsMasterList['google-universal-analytics'];
