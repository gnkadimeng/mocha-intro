describe('test', function(){
    it('should return "hello, Lindani"', function(){
        assert.equal("hello, Lindani", greet("Lindani"))
    })

    it('return "hello, Zola"', function(){
        assert.equal("hello, Zola", greet("Zola"))
    });
});

