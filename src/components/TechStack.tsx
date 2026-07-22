import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/svgs/python.svg",
  "/svgs/mysql.svg",
  "/svgs/pandas.svg",
  "/svgs/numpy.svg",
  "/svgs/matplotlib.svg",
  "/svgs/powerbi.svg",
  "/svgs/git.svg",
  "/svgs/github.svg",
  "/svgs/vscode.svg",
  "/svgs/jupyter.svg",
  "/svgs/ai_neural.svg",
  "/svgs/prompt_engineering.svg",
  "/svgs/rag.svg",
  "/svgs/llm.svg",
  "/svgs/stitch.svg"
];
const textures = imageUrls.map((url) => {
  const tex = textureLoader.load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
});

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const textureIndices: number[] = [];
for (let i = 0; i < 30; i++) {
  textureIndices.push(i % 15);
}
// Shuffle indices to distribute them randomly
for (let i = textureIndices.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [textureIndices[i], textureIndices[j]] = [textureIndices[j], textureIndices[i]];
}

const spheres = [...Array(30)].map((_, i) => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  textureIndex: textureIndices[i],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  textureIndex: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.Material;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const techElem = document.querySelector(".techstack");
      if (techElem) {
        const rect = techElem.getBoundingClientRect();
        setIsActive(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Force GSAP to recalculate pin spacing after lazy-loaded component mounts
    import("gsap/ScrollTrigger").then((module) => {
      setTimeout(() => {
        module.ScrollTrigger.refresh();
      }, 500);
      setTimeout(() => {
        module.ScrollTrigger.refresh();
      }, 1000);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshStandardMaterial({
          map: texture,
          color: "#ffffff",
          roughness: 0.9,
          metalness: 0.1,
        })
    );
  }, []);

  const techCategories = [
    {
      category: "Programming",
      tools: ["Python", "Java"],
    },
    {
      category: "Data",
      tools: ["Pandas", "NumPy", "Matplotlib", "Power BI", "MySQL"],
    },
    {
      category: "Development",
      tools: ["VS Code", "Git", "GitHub", "Jupyter Notebook", "MySQL Workbench"],
    },
    {
      category: "AI",
      tools: ["Prompt Engineering", "Google Stitch", "RAG", "LLM Fundamentals", "Generative AI"],
    },
  ];

  return (
    <div className="techstack">
      <h2>TECH STACK</h2>
      <p className="tech-subtitle">
        Technologies I use to design, build, analyze, and continuously learn.
      </p>

      <div className="tech-categories-grid">
        {techCategories.map((cat, idx) => (
          <div className="tech-cat-card" key={idx}>
            <h4>{cat.category}</h4>
            <div className="tech-tags-flex">
              {cat.tools.map((tool, tIdx) => (
                <span className="tech-tag" key={tIdx}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[props.textureIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
