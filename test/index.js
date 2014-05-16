require('kode').init();
var should = require('should');

describe('Kode', function(){
    it('should be initialized as `kode` to GLOBAL', function(){
        kode.should.be.type('object');
    });

    it('should attach kode.defineObject to GLOBAL', function(){
        defineObject.should.be.type('function');
    });

    it('should attach kode.getObject to GLOBAL', function(){
        getObject.should.be.type('function');
    });

    describe('.defineObject', function()
    {
        it('should define an object as a valid identifier', function()
        {
            (function(){
                defineObject()
            }).should.throw(TypeError);

            (function(){
                defineObject('/dev/null')
            }).should.not.throw(TypeError);
        });

        it('should not redefine an object', function()
        {
            kode.reset();

            defineObject('/dev/null');

            (function(){
                defineObject('/dev/null')
            }).should.throw(Error);
        });

        it('Argument#2 is an identifier of a defined parent', function()
        {
            kode.reset();

            defineObject('/dev/null');

            (function(){
                defineObject('/dev/null/1', '/dev/null')
            }).should.not.throw(ReferenceError);

            (function(){
                defineObject('/dev/null/2', '/dev/null/null')
            }).should.throw(ReferenceError);
        });

        it('Argument#2 parent identifier should be valid', function()
        {
            kode.reset();

            (function(){
                defineObject('/dev/null', '')
            }).should.throw(TypeError);
        });

        it('Argument#2 can be an Object that defines the new object', function()
        {
            kode.reset();

            defineObject('/dev/null', {
                method1: function()
                {
                    return '/dev/null::method1';
                }
            });

            getObject('/dev/null').method1().should.equal('/dev/null::method1');
        });
    });
});