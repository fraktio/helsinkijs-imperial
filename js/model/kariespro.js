var KariesProView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('kariespro'))
            .then(function(obj) {
                that.baseMesh = obj;

                that.baseMesh.position.z = that.baseMesh.position.z + 100;

               // that.baseMesh.rotation.y += 180 * Math.PI / 180


                that.baseMesh.rotation.z += 20 * Math.PI / 180
                that.baseMesh.rotation.x += 20 * Math.PI / 180

                that.scene.add(that.baseMesh);
                that.triggers.add(that.baseMesh);
            });
    },
    move: function(x, y, width, height) {
        this.baseMesh.position.x = x + width / 2.0;
        this.baseMesh.position.y = y + height / 2.0;

        this.baseMesh.scale.x = width * 0.2;
        this.baseMesh.scale.y = width * 0.2;
        this.baseMesh.scale.z = width * 0.2;
    }
});


var Kariespro = BaseModel.extend({
    name: 'kareispro',
    viewType: KariesProView
});
