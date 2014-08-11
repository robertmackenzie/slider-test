describe("Slider", function() {
    var slider;

    beforeEach(function() {
        slider = new APP.Slider();
        // reset to 1st image
        $('.slider ul').css('margin-left', '0px')
        // reset index
        slider.index = 0;
    });

    describe("#next", function() {
        it("should move to the 2nd image", function() {
            slider.next();

            expect($('.slider ul')).toHaveCss({ 'margin-left': '-850px' })
        });
    });

    describe("#previous", function() {
        it("should move to the 3rd image", function() {
            slider.previous();

            expect($('.slider ul')).toHaveCss({ 'margin-left': '-1700px' })
        });
    });

    //describe("#increment", function() {
        //it("should increment an index", function() {
            //expect(slider.index).toEqual(0);
            //slider.increment();
            //expect(slider.index).toEqual(1);
        //});

        //it("should reset back to the beginning", function() {
            //expect(slider.index).toEqual(0);

            //slider.increment();
            //expect(slider.index).toEqual(1);

            //slider.increment();
            //expect(slider.index).toEqual(2);

            //slider.increment();
            //expect(slider.index).toEqual(0);
        //});
    //});

});
