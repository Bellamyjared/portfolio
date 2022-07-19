import React, { useRef, useEffect, useMemo, useState } from "react";
import { useGraph, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

// NEW
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

export default function Female_Character({
  deleteCharacter,
  spawnCharacter,
  floorPlane,
  // setCharacterCount,
  // characterCount,
  ...props
}) {
  const group = useRef();
  const material = useRef();
  const { scene, materials, animations } = useGLTF("/Female_Character.glb");
  const cloned = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(cloned);
  const { actions } = useAnimations(animations, group);
  const [previousAnimation, setPreviousAnimation] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [resetSpringPosition, setResetSpringPosition] = useState(false);
  const [characterPosition, setCharacterPosition] = useState([
    props.position[0],
    props.position[1] - 2,
    props.position[2],
  ]);
  const [spring, api] = useSpring(() => ({
    position: characterPosition,
    scale: 0.25,
    config: { friction: 20 },
  }));
  // random roll to determine animation for character's life cycle
  const [AnimationRoll, setAnimationRoll] = useState(
    Math.floor(Math.random() * (10 + 1))
  );
  const [ScrollLock, setScrollLock] = useState(false);
  const scrollData = useScroll();
  const AmountScrolled = scrollData.range(0, 1) * 100;

  let planeIntersectPoint = new THREE.Vector3();

  // spawn character and direction controls
  useEffect(() => {
    if (spawnCharacter) {
      // setCharacterCount(characterCount + 1);
      group.current.position.set(
        props.position[0],
        props.position[1],
        props.position[2]
      );
      setCharacterPosition([
        group.current.position.x,
        group.current.position.y,
        group.current.position.z,
      ]);
    }
    // set the inital direction the Model is looking
    ChangeDirection();
    // Change where the model is looking at a random interval
    const directionInterval = setInterval(
      () => ChangeDirection(),
      100 * Math.floor(Math.random() * 120)
    );
    return () => clearInterval(directionInterval);
  }, [spawnCharacter]);

  useEffect(() => {
    CharacterAnimation();
  }, [isDragging]);

  useEffect(() => {
    setCharacterPosition(group.current.position);
    group.current.position.set(
      group.current.position.x,
      group.current.position.y,
      group.current.position.z
    );
  }, [spawnCharacter]);

  // On Drag Handler
  const bind = useDrag(
    ({ active, event }) => {
      // update position before dragging
      if (resetSpringPosition) {
        api.set({
          position: [
            group.current.position.x,
            group.current.position.y,
            group.current.position.z,
          ],
        });
        setResetSpringPosition(false);
      }
      // while dragging

      if (AmountScrolled < 0.2) {
        if (active) {
          event.ray.intersectPlane(floorPlane, planeIntersectPoint);
          setCharacterPosition([
            planeIntersectPoint.x,
            0,
            planeIntersectPoint.z,
          ]);
        }
        setIsDragging(active);
        // start useSpring
        api.start({
          position: characterPosition,
        });
      } else {
        setIsDragging(false);
      }
    },
    { preventScroll: true }
  );

  const CharacterAnimation = () => {
    const playAnimation = (animation) => {
      actions[animation].play();
      setPreviousAnimation(actions[animation]);
    };

    if (scrollData.range(0, 1 / 3) > 0.1) {
      setScrollLock(false);
    }
    if (scrollData.range(0, 1 / 3) < 0.1) {
      setScrollLock(true);
    }

    // Dragging Animations
    if (isDragging && !ScrollLock) {
      if (previousAnimation != null) {
        previousAnimation.stop();
      }
      if (previousAnimation === actions.Running) {
        playAnimation("Spin");
      } else if (previousAnimation === actions.Spinning) {
        playAnimation("Running");
      } else {
        playAnimation("Falling");
      }
    } else {
      if (previousAnimation != null) {
        previousAnimation.stop();
      }

      // Moving Animations
      if (AnimationRoll > 0) {
        // <90% chance character will use a walking animation
        if (AnimationRoll <= 5) {
          // 50% character will use standard animation for walking animation
          playAnimation("Standard_Walk");
        } else {
          // 50% character will use a non-standard animation for walking animation
          // 20% chance for each non-standard animation to be choisen for the non-standard walk
          if (AnimationRoll === 6) {
            playAnimation("Happy_Walk");
          } else if (AnimationRoll === 7) {
            playAnimation("Gay_Walk");
          } else if (AnimationRoll === 8) {
            playAnimation("Strut_Walk");
          } else if (AnimationRoll === 9) {
            playAnimation("Chest_Out_Walk");
          } else if (AnimationRoll === 10) {
            playAnimation("Drunk_Walk");
          }
          // these were switch from switch case to if else for performace improvement
        }
      } else {
        // >10% chance character will use a running animation
        playAnimation("Running");
      }
    }
  };

  // update character ever in window frame
  useFrame(({ clock }) => {
    if (AmountScrolled > 0.01) {
      setScrollLock(true);
    }
    if (AmountScrolled < 0.01) {
      group.current.position.y = 0.2;
      setScrollLock(false);
    }

    // move character across the screen when not being dragged
    // make translateZ 0 if ScrollLock is true
    if (!isDragging && !ScrollLock) {
      if (previousAnimation === actions.Running) {
        group.current.translateZ(0.017);
      } else if (previousAnimation === actions.Happy_Walk) {
        group.current.translateZ(0.006);
      } else if (previousAnimation === actions.Gay_Walk) {
        group.current.translateZ(0.0035);
      } else if (previousAnimation === actions.Strut_Walk) {
        group.current.translateZ(0.0035);
      } else if (previousAnimation === actions.Chest_Out_Walk) {
        group.current.translateZ(0.0055);
      } else if (previousAnimation === actions.Drunk_Walk) {
        group.current.translateZ(0.004);
      } else {
        group.current.translateZ(0.0055);
      }
      // sets the new position of the creator as they move across screen - needed for spring positioning when drag is initated
      setCharacterPosition([
        group.current.position.x,
        group.current.position.y,
        group.current.position.z,
      ]);
      setResetSpringPosition(true);
    }
    // delete character if out of bounds
    if (
      group.current.position.z > 35 ||
      group.current.position.x > 35 ||
      group.current.position.x < -35
    ) {
      // setCharacterCount(characterCount - 1);
      deleteCharacter(true);
    }
  });

  // change the direction the model is looking at to a random direction
  const ChangeDirection = () => {
    group.current.lookAt(
      new THREE.Vector3(
        Math.floor(Math.random() * (300 - -300 + 1)) + -300,
        0,
        900
      )
    );
  };

  return (
    <animated.group
      ref={group}
      {...props}
      dispose={null}
      {...spring}
      {...bind()}
    >
      <group>
        <group
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.02}
          position={[0, -2, 0]}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Beta_Surface.geometry}
            material={materials["asdf1:Beta_HighLimbsGeoSG2"]}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
      </group>
      <mesh castShadow>
        <boxGeometry args={[1.1, 4, 1.1]} />
        <meshStandardMaterial ref={material} opacity={0.0} transparent={true} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("/Female_Character.glb");
