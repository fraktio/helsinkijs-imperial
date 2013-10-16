

var InsucreamView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('Insucream'))
            .then(function(obj) {
                that.object  = obj;

                that.object .rotation.z = 120 * Math.PI / 180;
                that.object .rotation.y = 45 * Math.PI / 180;
                that.object .rotation.x = 15 * Math.PI / 180;

                that.object .position.z = that.object .position.z + 100;

                that.scene.add(that.object );
                that.triggers.add(that.object );
            });
    },
    move: function(x, y, width, height) {
        if (this.object) {
            this.object.position.x = x + width / 2.0;
            this.object.position.y = y + height / 2.0;
            this.object.scale.x = width * 0.2;
            this.object.scale.y = width * 0.2;
            this.object.scale.z = width * 0.2;
        }
    },

    rotateAll: function (x, y, z) {
        this.object.rotation.x += x * Math.PI / 180
        this.object.rotation.y += y * Math.PI / 180
        this.object.rotation.z += z * Math.PI / 180
    }
});


var Insucream = BaseModel.extend({
    name: 'Insucream',
    viewType: InsucreamView
});


