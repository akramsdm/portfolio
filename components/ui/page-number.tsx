'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

export function PageNumber3D({ value }: { value: string }) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const W = 90, H = 52

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100)
    camera.position.set(0, 0, 5)

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const key = new THREE.DirectionalLight(0xffffff, 1.4)
    key.position.set(3, 5, 5)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xaaaacc, 0.6)
    fill.position.set(-4, -2, 3)
    scene.add(fill)
    const rim = new THREE.DirectionalLight(0xffffff, 0.9)
    rim.position.set(0, 3, -4)
    scene.add(rim)

    const material = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 1.0,
      roughness: 0.18,
    })

    const group = new THREE.Group()
    scene.add(group)

    const loader = new FontLoader()
    loader.load(
      'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json',
      (font: Font) => {
        const geo = new TextGeometry(value, {
          font,
          size: 3.2,
          depth: 0.38,
          curveSegments: 20,
          bevelEnabled: true,
          bevelThickness: 0.055,
          bevelSize: 0.032,
          bevelSegments: 1,
        })
        geo.computeBoundingBox()
        const bb = geo.boundingBox!
        geo.translate(
          -(bb.max.x - bb.min.x) / 2 - bb.min.x,
          -(bb.max.y - bb.min.y) / 2 - bb.min.y,
          -0.19
        )
        group.add(new THREE.Mesh(geo, material))
      }
    )

    let raf: number
    const animate = () => {
      raf = requestAnimationFrame(animate)
      group.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [value])

  return <div ref={mountRef} />
}