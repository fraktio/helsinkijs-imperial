

var OildrumView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('Oildrum'))
            .then(function(obj) {
                that.object = obj;
                that.object.position.z = 0;
                that.object.scale.z = 55;
                that.object.rotation.x = 0;

                that.scene.add(that.object);
                that.triggers.add(that.object);
            });
    },
    move: function(x, y, width, height) {
        if (this.object) {
            this.object.position.x = x + width / 2.0;
            this.object.position.y = y + height / 2.0;
            this.object.scale.x = width * 0.5;
            this.object.scale.y = width * 0.5;
        }
    },
});


var Oildrum = BaseModel.extend({
    name: 'Oildrum',
    viewType: OildrumView
});
