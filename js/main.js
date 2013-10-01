console.log('main js ');

$('document').ready(function(){
    new Pylon({
        element: document.getElementById('pylon1')
    });

    var oildrum = new Oildrum({
        element: document.getElementById('pylon1')
    });

    new Pylon({
        element: document.getElementById('pylon2')
    });


    oildrum.on('click', function(event) {
        alert('clicksor oil');
    });
});
