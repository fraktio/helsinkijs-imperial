$('document').ready(function(){

    voodoo.engine = new voodoo.Engine(new voodoo.Options(
        {
            'performanceScaling': false,
            'standardLighting': true
        }));



    var insucream = new Insucream({
        element: document.getElementById('pylon1')
    });


    var kariespro = new Kariespro({
        element: document.getElementById('pylon2')
    });


    insucream.on('click', function(event) {
        insucream.view.rotateAll(90,90,90);

    });
});
