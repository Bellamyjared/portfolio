import React, { useRef, useEffect, useMemo, useState } from "react";
import { useGraph, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

// NEW
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

export default function Character_constructor({
  characterGender,
  deleteCharacter,
  spawnCharacter,
  WindowSize,
  ScaleSize,
  floorPlane,
  // setCharacterCount,
  // characterCount,
  ...props
}) {
  const group = useRef();
  const material = useRef();
  const { scene, materials, animations } = useGLTF(`/${characterGender}.glb`);
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
  const [spring, springAPI] = useSpring(() => ({
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
  const [CharacterSpeed, setCharacterSpeed] = useState(0);
  const { width } = useThree((state) => state.viewport);
  const widthScale =
    width > WindowSize.xlarge
      ? ScaleSize.xlarge
      : width > WindowSize.large
      ? ScaleSize.large
      : width > WindowSize.medium
      ? ScaleSize.medium
      : ScaleSize.small;

  const planeIntersectPoint = new THREE.Vector3();

  // spawn character and direction controls
  useEffect(() => {
    if (spawnCharacter) {
      // setCharacterCount(characterCount + 1);
      group.current.position.set(
        props.position[0],
        (width / widthScale) * 0.32,
        props.position[2] + 5
      );
      setCharacterPosition([
        group.current.position.x,
        group.current.position.y,
        group.current.position.z,
      ]);
    }
  }, [spawnCharacter, props.position]);

  useEffect(() => {
    CharacterAnimation();
  }, [isDragging]);

  useEffect(() => {
    // set the inital direction the Model is looking
    ChangeDirection();
    // Change where the model is looking at a random interval
    const directionInterval = setInterval(
      () => ChangeDirection(),
      100 * Math.floor(Math.random() * 120)
    );
    return () => clearInterval(directionInterval);
  }, [ScrollLock]);

  // On Drag Handler
  const bind = useDrag(
    ({ active, event }) => {
      // update position before dragging
      if (resetSpringPosition) {
        springAPI.set({
          position: [
            group.current.position.x,
            group.current.position.y,
            group.current.position.z,
          ],
        });
        setResetSpringPosition(false);
      }
      // ~~~~~~~~~ this is for stopping the dragging on characters if the screen is scrolled down, I dont wanna do this just make it so the character finds the correct path when scrolled. for later
      if (AmountScrolled < 0.2) {
        // while dragging
        if (active) {
          group.current.translateZ(0);
          event.ray.intersectPlane(floorPlane, planeIntersectPoint);
          setCharacterPosition([
            planeIntersectPoint.x,
            0.2,
            planeIntersectPoint.z,
          ]);
        }
        setIsDragging(active);
        // start useSpring
        springAPI.start({
          position: characterPosition,
        });
      } else {
        // stop dragging
        setIsDragging(false);
        group.current.translateZ(CharacterSpeed);
      }
    },
    { preventScroll: true }
  );

  const CharacterAnimation = () => {
    const playAnimation = (animation) => {
      actions[animation].play();
      setPreviousAnimation(actions[animation]);
    };

    // Dragging Animations
    if (isDragging) {
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
    // console.log(group.current.position.y);
    group.current.position.y = (width / widthScale) * 0.3;
    const scrolled = scrollData.range(0, 1 / 9);
    if (scrolled >= 1 && !ScrollLock) {
      setScrollLock(true);
      group.current.translateZ(0);
    }
    if (scrolled < 1 && ScrollLock) {
      setScrollLock(false);
      group.current.translateZ(CharacterSpeed);
    }

    // move character across the screen when not being dragged
    if (!isDragging && !ScrollLock) {
      // Running
      if (previousAnimation === actions.Running) {
        group.current.translateZ(width / widthScale / 22);
        setCharacterSpeed(width / widthScale / 22);
        //  Happy Walk
      } else if (previousAnimation === actions.Happy_Walk) {
        group.current.translateZ(width / widthScale / 80);
        setCharacterSpeed(width / widthScale / 80);
        // Gay Walk
      } else if (previousAnimation === actions.Gay_Walk) {
        group.current.translateZ(width / widthScale / 150);
        setCharacterSpeed(width / widthScale / 150);
        // Strut Walk
      } else if (previousAnimation === actions.Strut_Walk) {
        group.current.translateZ(width / widthScale / 150);
        setCharacterSpeed(width / widthScale / 150);
        // chest out walk
      } else if (previousAnimation === actions.Chest_Out_Walk) {
        group.current.translateZ(width / widthScale / 85);
        setCharacterSpeed(width / widthScale / 85);
        // drunk walk
      } else if (previousAnimation === actions.Drunk_Walk) {
        group.current.translateZ(width / widthScale / 85);
        setCharacterSpeed(width / widthScale / 85);
      } else {
        // normal Walk
        group.current.translateZ(width / widthScale / 82);
        setCharacterSpeed(width / widthScale / 82);
      }

      // sets the new position of the creator as they move across screen - needed for spring positioning when drag is initated
      setCharacterPosition([
        group.current.position.x,
        (width / widthScale) * -3.85,
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
    if (!ScrollLock) {
      group.current.lookAt(
        new THREE.Vector3(
          Math.floor(Math.random() * (300 - -300 + 1)) + -300,
          0,
          900
        )
      );
    }
  };

  const characterScale = 20;

  if (characterGender === "Male_Character") {
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
            scale={width / widthScale / characterScale}
            position={[0, (width / widthScale) * -3.85, 0]}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              geometry={nodes.Alpha_Joints.geometry}
              material={materials.Alpha_Joints_MAT}
              skeleton={nodes.Alpha_Joints.skeleton}
            />
            <skinnedMesh
              castShadow
              geometry={nodes.Alpha_Surface.geometry}
              material={materials.Alpha_Body_MAT}
              skeleton={nodes.Alpha_Surface.skeleton}
            />
          </group>
        </group>
        <mesh>
          <boxGeometry args={[1.1, 4, 1.1]} />
          <meshStandardMaterial
            ref={material}
            opacity={0.0}
            transparent={true}
          />
        </mesh>
      </animated.group>
    );
  }

  if (characterGender === "Female_Character") {
    return (
      <animated.group
        ref={group}
        {...props}
        dispose={null}
        {...spring}
        {...bind()}
      >
        <group name="Scene">
          <group
            name="Armature"
            rotation={[Math.PI / 2, 0, 0]}
            scale={width / widthScale / characterScale}
            position={[0, (width / widthScale) * -3.85, 0]}
          >
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh
              name="Beta_Joints"
              geometry={nodes.Beta_Joints.geometry}
              material={materials.Beta_Joints_MAT}
              skeleton={nodes.Beta_Joints.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Beta_Surface"
              geometry={nodes.Beta_Surface.geometry}
              material={materials["asdf1:Beta_HighLimbsGeoSG2"]}
              skeleton={nodes.Beta_Surface.skeleton}
            />
          </group>
        </group>
        <mesh>
          <boxGeometry args={[1.1, 4, 1.1]} />
          <meshStandardMaterial
            ref={material}
            opacity={0.0}
            transparent={true}
          />
        </mesh>
      </animated.group>
    );
  }
}

useGLTF.preload("/Male_Character.glb");
useGLTF.preload("/Female_Character.glb");
