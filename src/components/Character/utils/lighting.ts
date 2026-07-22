import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Key Directional Light
  const directionalLight = new THREE.DirectionalLight(0xd8b4ff, 0);
  directionalLight.position.set(-1, 2, 4);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.bias = -0.001;
  directionalLight.shadow.normalBias = 0.1;
  scene.add(directionalLight);

  // Soft Fill Point Light
  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 2);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  pointLight.shadow.bias = -0.001;
  pointLight.shadow.normalBias = 0.1;
  scene.add(pointLight);

  // Dedicated Cinematic Rim Light (Purple/Magenta backlight)
  const rimLight = new THREE.PointLight(0xd946ef, 0, 50, 2);
  rimLight.position.set(0, 15, -8);
  scene.add(rimLight);

  // Ambient Environment Reflection
  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight && screenLight.material && screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
    } else {
      pointLight.intensity = 0;
    }
  }

  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 0.85,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(rimLight, {
      intensity: 3.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;

