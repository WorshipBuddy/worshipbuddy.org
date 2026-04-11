"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function WebGLShader() {
  const canvasRef = useRef(null);
  const sceneRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    mesh: null,
    uniforms: null,
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const refs = sceneRef.current;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Brand-adapted fragment shader:
    // Dark navy background with three overlapping waves in WB/PB/CB brand colors.
    // Chromatic-aberration-style separation gives the waves an iridescent quality.
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        // Softer wave brightness
        float r = 0.035 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.028 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.022 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // Dark navy base: #080D18
        vec3 bg = vec3(0.031, 0.051, 0.094);

        // Per-channel tint in brand palette:
        //   r → WB navy  #0C245E  →  (0.047, 0.141, 0.369)
        //   g → PB teal  #1E6B8A  →  (0.118, 0.420, 0.533)
        //   b → CB sage  #0B7261  →  (0.043, 0.447, 0.380)
        vec3 waveR = vec3(0.047, 0.141, 0.369) * r;
        vec3 waveG = vec3(0.118, 0.420, 0.533) * g;
        vec3 waveB = vec3(0.043, 0.447, 0.380) * b;

        gl_FragColor = vec4(bg + waveR + waveG + waveB, 1.0);
      }
    `;

    const initScene = () => {
      refs.scene = new THREE.Scene();
      refs.renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.setClearColor(new THREE.Color(0x080d18));

      refs.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

      refs.uniforms = {
        resolution: { value: [canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight] },
        time:       { value: 0.0 },
        xScale:     { value: 1.1 },
        yScale:     { value: 0.25 },
        distortion: { value: 0.03 },
      };

      const positions = new THREE.BufferAttribute(
        new Float32Array([
          -1.0, -1.0, 0.0,
           1.0, -1.0, 0.0,
          -1.0,  1.0, 0.0,
           1.0, -1.0, 0.0,
          -1.0,  1.0, 0.0,
           1.0,  1.0, 0.0,
        ]),
        3
      );
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", positions);

      const material = new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: refs.uniforms,
        side: THREE.DoubleSide,
      });

      refs.mesh = new THREE.Mesh(geometry, material);
      refs.scene.add(refs.mesh);

      handleResize();
    };

    const animate = () => {
      if (refs.uniforms) refs.uniforms.time.value += 0.005;
      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
      refs.animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!refs.renderer || !refs.uniforms) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      refs.renderer.setSize(w, h, false);
      refs.uniforms.resolution.value = [w, h];
    };

    initScene();
    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener("resize", handleResize);
      if (refs.mesh) {
        refs.scene?.remove(refs.mesh);
        refs.mesh.geometry.dispose();
        if (refs.mesh.material instanceof THREE.Material) {
          refs.mesh.material.dispose();
        }
      }
      refs.renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
    />
  );
}
