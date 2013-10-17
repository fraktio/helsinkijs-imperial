
$('document').ready(function(){

    voodoo.engine = new voodoo.Engine(new voodoo.Options(
        {
            'performanceScaling': false,
            'standardLighting': false,
            'realtime': false
        }));


    var insucream = new Insucream({
        element: document.getElementById('pylon1')
    });


    var kariespro = new Kariespro({
        element: document.getElementById('pylon2')
    });

    var spot = new Spot({
        element: document.getElementById('pylon2')
    });

    var light = new Light({
        element: document.getElementById('pylon1')
    });

    insucream.on('click', function(event) {
        insucream.view.clickzor();
    });

    kariespro.on('mouseover', function(event) {
        kariespro.view.activate();
    });

});
