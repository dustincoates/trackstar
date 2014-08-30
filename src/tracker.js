'use strict';

var trackStar = (function(){
  function TrackStar() {
    var integrations = {};

    if(!(this instanceof TrackStar)){
      return new TrackStar();
    }

    this.getIntegrations = function() {
      return integrations;
    };

    this.integrate = function(integrationsObj) {
      if (Object.prototype.toString.call(integrationsObj) !== '[object Object]') {
        throw new Error('trackStar requires an Object of integrations');
      }

      for(var key in integrationsObj){
        var val = integrationsObj[key];
        if (integrations.hasOwnProperty(key)) {
          integrations[key] = integrations[key].concat(val)
        } else {
          integrations[key] = [].concat(val);
        }
      }

      return this;
    };

    // Start testing API

    this.wipeClean = TrackStar;

    // End testing API

    return this;
  }

  function sendFunction (context, functionName, opts) {
    var integrations = context.getIntegrations();

    for (var key in integrations){
      _integrationsMasterList[key][functionName](opts);
    };
  }

  TrackStar.prototype.trackPageView = function() {
    sendFunction(this, 'trackPageView');
  };

  TrackStar.prototype.trackConversion = function(){
    sendFunction(this, 'trackConversion');
  };

  TrackStar.prototype.trackAction = function(opts){
    sendFunction(this, 'trackAction', opts);
  };

  return window.trackStar = TrackStar();
}());
