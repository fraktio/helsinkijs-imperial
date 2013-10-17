var BaseView = voodoo.View.extend({
    unload: function() {
        this.scene.remove(this.object);
        this.triggers.remove(this.object);
    },

    loadModel: function (model) {
        var loader = new THREE.ColladaLoader();
        var localObject;
        //loader.options.convertUpAxis = true;
        var dfd = $.Deferred();
        var that = this;
        loader.load('dae/' + model + '.dae', function colladaReady( collada ) {

            var localObject = collada.scene;
            localObject.updateMatrix();

            dfd.resolve(localObject);
        });

        return dfd.promise();
    }
});


var BaseModel = voodoo.Model.extend({
    name: 'Base',
    viewType: BaseView,

    /**
     * First method called when the model is created.
     */
    initialize: function(options) {
        // Store options provided by the user.
        this.element = options.element;
    },

    /**
     * Called each frame.
     */
    update: function(deltaTime) {
        var position = voodoo.utility.findAbsolutePosition(this.element);
        this.view.move(position.x, position.y, this.element.offsetWidth, this.element.offsetHeight);

    }
});
