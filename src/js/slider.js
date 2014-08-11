var APP = APP || {};

(function(window){

    function Slider(){
        this.index = 0;
        this.numberOfSlides = 3;
    }

    Slider.prototype.next = function(){
        $('.slider ul').css('margin-left', function (index, curValue) {
            return this.calculateMargin("next", curValue);
        }.bind(this));
    }

    Slider.prototype.calculateMargin = function(direction, curValue){
        if(direction === 'next') {
            if(this.index !== this.numberOfSlides - 1){
                this.index++;
                return parseInt(curValue, 10) - 850 + 'px';
            } else {
                this.index = 0;
                return '0px';
            }
        } else if(direction === 'previous') {
            if(this.index !== 0){
                this.index--;
                return parseInt(curValue, 10) + 850 + 'px';
            } else {
                this.index = (this.numberOfSlides - 1);
                var end = (-850 * (this.numberOfSlides - 1)) + 'px';
                return end;
            }
        }
    }

    Slider.prototype.previous = function(){
        $('.slider ul').css('margin-left', function (index, curValue) {
            return this.calculateMargin("previous", curValue);
        }.bind(this));
    }

    window.APP = APP || {};
    APP.Slider = Slider;
})(window, undefined);


//setTimeout(function(){
    //APP.Slider.next();
//}, 2000);
