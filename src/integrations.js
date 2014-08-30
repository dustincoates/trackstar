var _integrationsMasterList = {};
_integrationsMasterList['google-analytics'] = {
  trackPageView: function(){
    _gaq.push(['_trackPageview']);
  },
  trackConversion: function(){

  },
  trackAction: function(opts){
    _trackEvent(opts.category, opts.action, opts.label, opts.value, opts.nonInteraction);
  }
};
_integrationsMasterList['ga'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['google'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['google-universal-analytics'] = {
  trackPageView: function(){},
  trackConversion: function(){},
  trackAction: function(){}
};
_integrationsMasterList['universal-analytics'] = _integrationsMasterList['google-universal-analytics'];
_integrationsMasterList['kissmetrics'] = {
  trackPageView: function(){},
  trackConversion: function(){},
  trackAction: function(){}
};
_integrationsMasterList['km'] = _integrationsMasterList['kissmetrics'];
_integrationsMasterList['mixpanel'] = {
  trackPageView: function(){},
  trackConversion: function(){},
  trackAction: function(){}
};
