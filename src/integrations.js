
var integrationsMasterList = {};
integrationsMasterList['ga'] = integrationsMasterList['google-analytics'];
integrationsMasterList['google'] = integrationsMasterList['google-analytics'];
integrationsMasterList['google-analytics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
integrationsMasterList['google-universal-analytics'] = {
  trackPageView: function(){},
  trackPurchase: function(){},
  trackAction: function(){}
};
integrationsMasterList['universal-analytics'] = integrationsMasterList['google-universal-analytics'];
