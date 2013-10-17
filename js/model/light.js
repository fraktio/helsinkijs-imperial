var spotLightRef = null;
var LightView = BaseView.extend({
    spotLight: null,
    load: function() {
        this.spotLight = new THREE.SpotLight( 0xffffff);
        this.spotLight.position.set( 100, 100, 100);
        this.spotLight.intensity = 10;
        this.spotLight.distance = 3000;

        this.spotLight.cameraVisible = false;

        this.spotLight.castShadow = false;
        this.spotLight.shadowMapWidth = 1024;
        this.spotLight.shadowMapHeight = 1024;
        this.spotLight.shadowCameraNear = 500;
        this.spotLight.shadowCameraFar = 4000;
        this.spotLight.shadowCameraFov = 30;

        this.scene.add( this.spotLight );
        this.scene.lightAddedFoReal = true;
        spotLightRef = this.spotLight;
    },
    move: function(x, y, width, height) {

    }
});


var Light = BaseModel.extend({
    name: 'light',
    viewType: LightView
});
