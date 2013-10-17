var InsucreamView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('Insucream'))
            .then(function(obj) {
                that.object  = obj;

                that.object.rotation.y = 15 * Math.PI / 180;
                that.object.rotation.x = 35 * Math.PI / 180;
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
        this.object.rotation.z += 1 * Math.PI / 180

    },

    clickzor: function() {
        this.object.rotation.x += 20 * Math.PI / 180;
        this.object.rotation.y += 30 * Math.PI / 180;
    }
});


var Insucream = BaseModel.extend({
    name: 'Insucream',
    viewType: InsucreamView
});


