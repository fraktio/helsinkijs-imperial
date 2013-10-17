// not in use...

var LightView = BaseView.extend({
    spotLight: null,
    load: function() {
        this.spotLight = new THREE.SpotLight( 0xffffff);
        this.spotLight.position.set( 0, 0, 100 );
        this.spotLight.cameraVisible = true;

        this.spotLight.castShadow = true;
        this.spotLight.shadowMapWidth = 1024;
        this. spotLight.shadowMapHeight = 1024;
        this.spotLight.shadowCameraNear = 500;
        this. spotLight.shadowCameraFar = 4000;
        this. spotLight.shadowCameraFov = 30;

        this.scene.add( this.spotLight );
        this.scene.lightAddedFoReal = true;

        spotLightRef = this;
    },
    move: function(x, y, width, height) {

    },
    targetTo : function(obj) {

        this.spotLight.target = obj;
    }

});


var Light = BaseModel.extend({
    name: 'light',
    viewType: LightView
});
