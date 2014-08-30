'use strict';

var _integrationsMasterList = {};
_integrationsMasterList['google-analytics'] = {
  integrate: function(id){
    var uid = 'UA-' + id;

    window._gaq = window._gaq || [];
    var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
    _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
    _gaq.push(['_setAccount', uid]);

    (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  },
  trackPageView: function(){
    _gaq.push(['_trackPageview']);
  },
  trackAction: function(opts){
    _trackEvent(opts.category, opts.action, opts.label, opts.value, opts.nonInteraction);
  }
};
_integrationsMasterList['ga'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['google'] = _integrationsMasterList['google-analytics'];
_integrationsMasterList['kissmetrics'] = {
  integrate: function(id){
    window._kmq = window._kmq || [];
    window._kmk = window._kmk || id;
    function _kms(u){
      setTimeout(function(){
        var d = document, f = d.getElementsByTagName('script')[0],
        s = d.createElement('script');
        s.type = 'text/javascript'; s.async = true; s.src = u;
        f.parentNode.insertBefore(s, f);
      }, 1);
    }
    _kms('//i.kissmetrics.com/i.js');
    _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
  },
  trackPageView: function(opts){
    _kmq.push(['record', opts.label, opts.extra]);
  },
  trackAction: function(opts){
    _kmq.push(['record', opts.label, opts.extra]);
  }
};
_integrationsMasterList['km'] = _integrationsMasterList['kissmetrics'];
_integrationsMasterList['mixpanel'] = {
  integrate: function(id){
    (function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split('.');2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;'undefined'!==typeof d?c=b[d]=[]:d='mixpanel';c.people=c.people||[];c.toString=function(b){var a='mixpanel';'mixpanel'!==d&&(a+='.'+d);b||(a+=' (stub)');return a};c.people.toString=function(){return c.toString(1)+'.people (stub)'};i='disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user'.split(' ');
    for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement('script');a.type='text/javascript';a.async=!0;a.src='//cdn.mxpnl.com/libs/mixpanel-2.2.min.js';e=f.getElementsByTagName('script')[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
    mixpanel.init(id);
  },
  trackPageView: function(opts){
    mixpanel.track(opts.label, opts.extra);
  },
  trackAction: function(opts){
    mixpanel.track(opts.label, opts.extra);
  }
};
