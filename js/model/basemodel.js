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

            that.addLightIfNoneExist(localObject);
        });

        return dfd.promise();
    },
    addLightIfNoneExist: function(object) {
        if (this.scene.lightAddedFoReal) {
            var spotLight = new THREE.SpotLight( 0xffffff );
            spotLight.position.set( 0, 800, -1 );
            spotLight.cameraVisible = true;

            spotLight.intensity = 1.5;
            spotLight.castShadow = true;
            spotLight.shadowMapWidth = 1024;
            spotLight.shadowMapHeight = 1024;
            spotLight.shadowCameraNear = 500;
            spotLight.shadowCameraFar = 4000;
            spotLight.shadowCameraFov = 30;

            spotLight.target = object;
            this.scene.add( spotLight );
            this.scene.lightAddedFoReal = true;
        }
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
