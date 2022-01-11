// Registering component in Collider.js
AFRAME.registerComponent("birds", {
    init: function () {
        for (var i = 1; i <= 20; i++) {

            var id = `bird${i}`;

            //position variables
            var posX = Math.floor(Math.random() * 3000 + -1000);
            var posY = Math.floor(Math.random() * 2 + -1);
            var posZ = Math.floor(Math.random() * 3000 + -1000);

            var position = { x: posX, y: posY, z: posZ };

            //call the function
            this.createBirds(id, position);
        }
    },
    createBirds: (id, position) => {
        //Get the terrain element
        var terrain = document.querySelector("#terrain");

        //creating the bird model entity
        var bird = document.createElement("a-entity");

        //Setting multiple attributes
        bird.setAttribute("id", id);

        bird.setAttribute("position", position);
        bird.setAttribute("scale", { x: 500, y: 500, z: 500 });

        bird.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 4
        })

        bird.setAttribute("game-play", {
            elementId: `#${id}`
        });

        bird.setAttribute("gltf-model", "./assets/flying_bird/scene.gltf");

        //animated models
        bird.setAttribute("animation-mixer", {});

        //append the bird entity as the child of the terrain entity
        terrain.appendChild(bird);
    }
});