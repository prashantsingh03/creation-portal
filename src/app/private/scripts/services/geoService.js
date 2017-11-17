/**
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 */
angular.module('playerApp')
    /**
     * @class geoService
     * @desc Service to manages geo service api calls.
     * @memberOf Services
     */
    .service('geoService', ['$rootScope', 'httpServiceJava', 'config', function ($rootScope, httpServiceJava, config) {
        /**
         * @method getItems
         * @desc Used to get the geo location object by making http get call.
         * @memberOf Services.geoService
         * @returns {Object}
         * @instance
         */
      this.getItems = function (req, qs) {
        var url = 'org/v1/location/read/' + req.id + '?type=organisation'
        return httpServiceJava.get(url, req)
      }
    }])
