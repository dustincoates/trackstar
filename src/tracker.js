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
      if (Object.prototype.toString.call(integrationsObj) !== "[object Object]") {
        throw new Error("trackStar requires an Object of integrations");
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

  TrackStar.prototype.trackPageView = function(opts) {
    var integrations = this.getIntegrations();

    for (var key in integrations){
      _integrationsMasterList[key][functionName](opts);
    };
  }

  TrackStar.prototype.trackPurchase = function(opts) {
    var integrations = this.getIntegrations();
  };

  TrackStar.prototype.trackAction = function(el, opts) {
    var integrations = this.getIntegrations();
  };

  Element.prototype.trackAction = function(opts) {
    window.trackStar.trackAction(this, opts);
  };

  return window.trackStar = TrackStar();
}());
