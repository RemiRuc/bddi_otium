/**
 * MOBILE
 */

// The html (without section)
mobile_html =
`
    <div class="text_center_mobile">
        <h1 class="question_mobile">Êtes-vous de nature rêveur/imaginatif ?</h1>
    </div>
 `

// All listeners, one variable per listener
mobile_listener1 = ["selector", "type", () => {

}]

mobile_listener2 = ["selector", "type", () => {

}]
/** And more... */

// Socket on

// Script to be executed when the page is displayed
mobile_script = () => {
    ValidationBtn.canValidate = true
    ValidationBtn.actualPage = questions.q1
    ValidationBtn.nextPage = questions.q2
    ValidationBtn.actualQ = "1"
    ValidationBtn.nextQ = "2"

    
    if ('DeviceOrientationEvent' in window) {
        window.addEventListener('deviceorientation', deviceOrientationHandler, false);
    } else {
        document.getElementById('logoContainer').innerText = 'Device Orientation API not supported.';
    }

    function deviceOrientationHandler(eventData) {

        socket.emit("q1", {tiltFB:eventData.beta, tiltLR:eventData.gamma, dir:eventData.alpha});
    }
}

// Name of the transitions classes [when he leave, when he arrive]
mobile_transition = ["out", "in"]

/**
 * DESKTOP
 */

desktop_html =
 `
    <div class="text_center">
        <h1 class="question_desktop">Êtes-vous de nature rêveur/imaginatif ?</h1>
    </div>

    <div id="forme-net"></div>

    <div id="forme-abstraite"></div>
 `

desktop_listener1 = ["selector", "type", () => {

}]

desktop_listener2 = ["selector", "type", () => {

}]

desktop_socketOn1 = ["q1", (eventData) => {
        document.getElementById("forme-net").style.width = 50 + eventData.tiltLR + '%';
        document.getElementById("forme-abstraite").style.width = 50 - eventData.tiltLR + '%';
        window.resultats.setResult("q1", {res: eventData.tiltLR})
}]

desktop_script = () => {

    /**************** FORME NET ****************/

    var sceneFormeNet = new THREE.Scene();
    var cameraFormeNet = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);

    var formeNet = document.getElementById('forme-net');

    var rendererFormeNet = new THREE.WebGLRenderer({
        alpha: true
    });
    rendererFormeNet.setSize(window.innerWidth, window.innerHeight);
    formeNet.appendChild(rendererFormeNet.domElement);

    var radiusFormeNet = 40;
    var segmentsFormeNet = 50;
    var ringsFormeNet = 30;

    var geometryFormeNet = new THREE.SphereGeometry(radiusFormeNet, segmentsFormeNet, ringsFormeNet);

    var materialFormeNet = new THREE.MeshNormalMaterial();

    var cubeFormeNet = new THREE.Mesh(geometryFormeNet, materialFormeNet);
    sceneFormeNet.add(cubeFormeNet);

    cameraFormeNet.position.z = 150;

    var renderFormeNet = function() {
        requestAnimationFrame(renderFormeNet);
        cubeFormeNet.rotation.x += 0.01;
        cubeFormeNet.rotation.y += 0.01;
        rendererFormeNet.render(sceneFormeNet, cameraFormeNet);
    };
    renderFormeNet();

    /**************** FIN FORME NET ****************/

    /**************** FORME ABSTRAITE ****************/

    var sceneFormeAbstraite = new THREE.Scene();
    var cameraFormeAbstraite = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    var formeAbstraite = document.getElementById('forme-abstraite');

    var rendererFormeAbstraite = new THREE.WebGLRenderer({
        alpha: true
    });

    rendererFormeAbstraite.setSize(window.innerWidth, window.innerHeight);
    formeAbstraite.appendChild(rendererFormeAbstraite.domElement);
    cameraFormeAbstraite.position.z = 5;

    var sphere_geometry = new THREE.SphereGeometry(1, 150, 150);
    var materialA = new THREE.MeshNormalMaterial();

    var sphere = new THREE.Mesh(sphere_geometry, materialA);
    sceneFormeAbstraite.add(sphere);

    var update = function() {
        var time = performance.now() * 0.001;
        var k = 3;
        for (var i = 0; i < sphere.geometry.vertices.length; i++) {
            var p = sphere.geometry.vertices[i];
            p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
        }
        sphere.geometry.computeVertexNormals();
        sphere.geometry.normalsNeedUpdate = true;
        sphere.geometry.verticesNeedUpdate = true;
    }

    function animate() {
        //sphere.rotation.x += 0.01;
        //sphere.rotation.y += 0.01;
        update();
        /* render scene and camera */
        rendererFormeAbstraite.render(sceneFormeAbstraite, cameraFormeAbstraite);
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    /**************** FIN FORME ABSTRAITE ****************/

    /**************** TIMELINE ****************/

    //document.querySelector('.q1').style.fill = "#ffffff"

}

desktop_transition = ["out", "in"]

/**
 * Export
 */

q1_mobile = {
    html: mobile_html,
    listeners: [],
    socketOn: [],
    script: mobile_script,
    transitions: mobile_transition,
}

q1_desktop = {
    html: desktop_html,
    listeners: [],
    socketOn: [desktop_socketOn1],
    script: desktop_script,
    transitions: desktop_transition,
}