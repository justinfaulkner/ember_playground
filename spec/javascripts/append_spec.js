//= require append
//= require jquery

describe('application', function() {
    it('should render', function () {
        appendTo('#konacha');
        assert.ok($('#konacha').find('div.hello-world').length)
    });
});