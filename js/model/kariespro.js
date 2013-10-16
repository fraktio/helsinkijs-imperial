var KariesProView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('kariespro'))
            .then(function(obj) {
                that.object = obj;

                that.object.position.z = that.object.position.z + 100;

                that.object.rotation.z += 20 * Math.PI / 180
                that.object.rotation.x += 20 * Math.PI / 180

                that.scene.add(that.object);
                that.triggers.add(that.object);
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
    }
});


var Kariespro = BaseModel.extend({
    name: 'kariespro',
    viewType: KariesProView
});
