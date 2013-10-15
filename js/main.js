console.log('main js ');

$('document').ready(function(){

    voodoo.engine = new voodoo.Engine();

    new Pylon({
        element: document.getElementById('pylon1')
    });

    var oildrum = new Oildrum({
        element: document.getElementById('pylon1')
    });

    new Pylon({
        element: document.getElementById('pylon2')
    });

    new Pylon({
        element: document.getElementById('pylon3')
    });

    var kariespro = new Kariespro({
        element: document.getElementById('pylon2')
    });
    var kariespro2 = new Kariespro({
        element: document.getElementById('pylon2')
    });

voodoo.engine.frame();

    oildrum.on('click', function(event) {
        alert('clicksor oil');
    });
});
