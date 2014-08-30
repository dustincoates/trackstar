var _integrationsMasterList = {};
_integrationsMasterList['google-analytics'] = {
  trackPageView: function(){
    _gaq.push(['_trackPageview']);
  },
  trackPurchase: function(){},
  trackAction: function(opts){
    _trackEvent(opts.category, opts.action, opts.label, opts.value, opts.nonInteraction);
  }
};
_integrationsMasterList['google'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['ga'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['google-universal-analytics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
_integrationsMasterList['kissmetrics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
_integrationsMasterList['km'] = _integrationsMasterList['kissmetrics'];
_integrationsMasterList['universal-analytics'] = _integrationsMasterList['google-universal-analytics'];
