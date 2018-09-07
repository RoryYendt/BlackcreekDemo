module.exports = {
    calcDistanceLatLong : function(latFirst, longFirst, latSecond, longSecond){
        //Equation and code reference to https://www.movable-type.co.uk/scripts/latlong.html for Javascript implementation of the Haversine formula
        var R = 6371e3; // metres
        var φ1 = this.degreesToRadians(latFirst);
        var φ2 = this.degreesToRadians(latSecond);
        var Δφ = this.degreesToRadians(latSecond-latFirst);
        var Δλ = this.degreesToRadians(longSecond-longFirst);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        var distance = R * c;
        return distance;
    },

    degreesToRadians: function(degrees)
    {
        var pi = Math.PI;
        return degrees * (pi/180);
    }
}