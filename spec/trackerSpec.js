describe("trackStar", function() {
  describe("integrate", function() {
    beforeEach(function() {
      trackStar = trackStar.wipeClean();
    });

    it("returns trackStar", function() {
      var returnValue = trackStar.integrate({"analytics": [1, 2]});
      expect(returnValue).toBe(trackStar);
    });

    describe("when passed on Object", function() {
      describe("when no existing integrations", function() {
        it("assigns new integrations wholesale", function() {
          var newIntegrations = {"analytics": [1, 2]};
          trackStar.integrate(newIntegrations);
          expect(trackStar.getIntegrations()).toEqual(newIntegrations);
        });
      });

      describe("when integrations already exist", function() {
        it("keeps old integrations and adds new ones", function() {
          var oldIntegrations = {"metric-izer": [1, 2]},
              newIntegrations = {"analytics": [1, 2]},
              expected = {"analytics": [1, 2], "metric-izer": [1, 2]};

          trackStar.integrate(oldIntegrations);
          trackStar.integrate(newIntegrations);
          expect(trackStar.getIntegrations()).toEqual(expected);
        });
      });
    });

    describe("when not passed an Object", function() {
      it("returns an error", function() {
        expect(
          function(){trackStar.integrate([]);}
        ).toThrowError(
          "trackStar requires an Object of integrations"
        );
      });
    });

  });
});
