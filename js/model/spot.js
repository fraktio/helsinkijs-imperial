var SpotView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('spot'))
            .then(function(obj) {
                that.object = obj;
                that.object.position.z = that.object.position.z + 10;
                that.object.rotation.x += 180 * Math.PI / 180;

                that.scene.add(that.object);
                that.triggers.add(that.object);
            });
    },
    move: function(x, y, width, height) {
        if (this.object) {
            this.object.scale.x = 1000;
            this.object.scale.y =  1000;
            this.object.scale.z =  1000;
        }
    }
});

var Spot = BaseModel.extend({
    name: 'spot',
    viewType: SpotView
});
