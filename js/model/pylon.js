

var PylonView = BaseView.extend({
    load: function() {
        var that = this;
        $.when(this.loadModel('Column_Made_By_Tyro_Smith'))
            .then(function(obj) {
                that.baseMesh = obj;
                that.baseMesh.position.z = -390;
                that.baseMesh.scale.z = 55;
                that.baseMesh.rotation.x = 0;

                //that.baseMesh.color.copy(that.model.color);

                that.scene.add(that.baseMesh);
                that.triggers.add(that.baseMesh);
            });
    },
    move: function(x, y, width, height) {
        this.baseMesh.position.x = x + width / 2.0;
        this.baseMesh.position.y = y + height / 2.0;
        this.baseMesh.scale.x = width / 10.0 ;
        this.baseMesh.scale.y = width / 10.0;
    },
});


var Pylon = BaseModel.extend({
    name: 'Pylon',
    viewType: PylonView
});