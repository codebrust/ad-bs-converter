var should = require('chai').should(),
    adbsconverter = require('../../src/converter.js'),
    bs2ad = adbsconverter.bs2ad,
    ad2bs = adbsconverter.ad2bs;

describe('#bs2ad', function() {
    it('Converts 2072/4/3 to 2015/7/19', function() {
        var expectedDate = {
            "year": 2015,
            "month": 7,
            "strMonth": "July",
            "strShortMonth": "Jul",
            "day": 19,
            "dayOfWeek": 1,
            "strDayOfWeek": "Sunday",
            "strShortDayOfWeek": "Sun"
        };
        bs2ad('2072/4/3').should.eql(expectedDate);
    });

    it('Converts 2072/4/16 to 2015/8/1', function() {
        var expectedDate = {
            "year": 2015,
            "month": 8,
            "strMonth": "August",
            "strShortMonth": "Aug",
            "day": 1,
            "dayOfWeek": 7,
            "strDayOfWeek": "Saturday",
            "strShortDayOfWeek": "Sat"
        };
        bs2ad('2072/4/16').should.eql(expectedDate);
    });

    it('Converts 2070/9/17 to 2014/1/1', function() {
        var expectedDate = {
            "year": 2014,
            "month": 1,
            "strMonth": "January",
            "strShortMonth": "Jan",
            "day": 1,
            "dayOfWeek": 4,
            "strDayOfWeek": "Wednesday",
            "strShortDayOfWeek": "Wed"
        };
        bs2ad('2070/9/17').should.eql(expectedDate);
    });

    it('Converts 2072/4/1 to 2015/7/17', function() {
        var expectedDate = {
            "year": 2015,
            "month": 7,
            "strMonth": "July",
            "strShortMonth": "Jul",
            "day": 17,
            "dayOfWeek": 6,
            "strDayOfWeek": "Friday",
            "strShortDayOfWeek": "Fri"
        };
        bs2ad('2072/4/1').should.eql(expectedDate);
    });

    it('Converts 1978/1/1 to 1921/4/13', function() {
        var expectedDate = {
            "year": 1921,
            "month": 4,
            "strMonth": "April",
            "strShortMonth": "Apr",
            "day": 13,
            "dayOfWeek": 4,
            "strDayOfWeek": "Wednesday",
            "strShortDayOfWeek": "Wed"
        };
        bs2ad('1978/1/1').should.eql(expectedDate);
    });

    it('Converts 2092/12/30 to 2036/4/14', function() {
        var expectedDate = {
            "year": 2036,
            "month": 4,
            "strMonth": "April",
            "strShortMonth": "Apr",
            "day": 14,
            "dayOfWeek": 2,
            "strDayOfWeek": "Monday",
            "strShortDayOfWeek": "Mon"
        };
        bs2ad('2092/12/30').should.eql(expectedDate);
    });

    //my birthday :D
    it('Converts 2047/4/26 to 1990/8/10', function() {
        var expectedDate = {
            "year": 1990,
            "month": 8,
            "strMonth": "August",
            "strShortMonth": "Aug",
            "day": 10,
            "dayOfWeek": 6,
            "strDayOfWeek": "Friday",
            "strShortDayOfWeek": "Fri"
        };
        bs2ad('2047/4/26').should.eql(expectedDate);
    });
});

describe('#ad2bs', function() {
    it('Converts 2015/8/1 to 2072/4/16', function() {
        var expectedDate = {

                "year": 2072,
                "month": 4,
                "day": 16,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 7,
                "strDayOfWeek": "Shanibaar",
                "strShortDayOfWeek": "Shani",
                "totalDaysInMonth": 32
        };
        ad2bs('2015/8/1').should.eql(expectedDate);
    });

    it('Converts 2014/1/1 to 2070/9/17', function() {
        var expectedDate = {
                "year": 2070,
                "month": 9,
                "day": 17,
                "strMonth": "Paush",
                "strShortMonth": "Pau",
                "dayOfWeek": 4,
                "strDayOfWeek": "Budhabaar",
                "strShortDayOfWeek": "Budha",
                "totalDaysInMonth": 30
        };
        ad2bs('2014/1/1').should.eql(expectedDate);
    });

    it('Converts 2015/7/19 to 2072/4/3', function() {
        var expectedDate = {
                "year": 2072,
                "month": 4,
                "day": 3,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 1,
                "strDayOfWeek": "Aaitabaar",
                "strShortDayOfWeek": "Aaita",
                "totalDaysInMonth": 32
        };
        ad2bs('2015/7/19').should.eql(expectedDate);
    });

    it('Converts 2015/7/17 to 2072/4/1', function() {
        var expectedDate = {
                "year": 2072,
                "month": 4,
                "day": 1,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 6,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "totalDaysInMonth": 32
        };
        ad2bs('2015/7/17').should.eql(expectedDate);
    });

    it('Converts 2017/4/13 to 2073/12/31', function() {
        var expectedDate = {
                "year": 2073,
                "month": 12,
                "day": 31,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 5,
                "strDayOfWeek": "Bihibaar",
                "strShortDayOfWeek": "Bihi",
                "totalDaysInMonth": 31
        };
        ad2bs('2017/4/13').should.eql(expectedDate);
    });

    it('Converts 2018/4/13 to 2074/12/30', function() {
        var expectedDate = {
                "year": 2074,
                "month": 12,
                "day": 30,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 6,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "totalDaysInMonth": 30
        };
        ad2bs('2018/4/13').should.eql(expectedDate);
    });

    it('Converts 2036/4/14 to 2092/12/30', function() {
        var expectedDate = {
                "year": 2092,
                "month": 12,
                "day": 30,
                "strMonth": "Chaitra",
                "strShortMonth": "Chai",
                "dayOfWeek": 2,
                "strDayOfWeek": "Sombaar",
                "strShortDayOfWeek": "Som",
                "totalDaysInMonth": 30
        };
        ad2bs('2036/4/14').should.eql(expectedDate);
    });

    // my birthday :D
    it('Converts 1990/8/10 to 2047/4/26', function() {
        var expectedDate = {
                "year": 2047,
                "month": 4,
                "day": 26,
                "strMonth": "Shrawan",
                "strShortMonth": "Shra",
                "dayOfWeek": 6,
                "strDayOfWeek": "Shukrabaar",
                "strShortDayOfWeek": "Shukra",
                "totalDaysInMonth": 32
        };
        ad2bs('1990/8/10').should.eql(expectedDate);
    });
});
