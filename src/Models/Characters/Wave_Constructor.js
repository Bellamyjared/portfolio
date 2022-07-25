//  workes but i cant delete character, try turning everything into function instead of components and it may work then/

import { useEffect, useRef } from "react";
import React, { useState } from "react";
import { useScroll } from "@react-three/drei";
import Character_Constructor from "./Character_Constructor";

export default function Wave_Constructor({
  WindowSize,
  ScaleSize,
  floorPlane,
  spawnCharacter,
}) {
  const FIRST_WAVE_POSITION = [
    // [-40, 0, 34],
    // [-40, 0, 34],
    // [-40, 0, 34],
    // [-40, 0, 34],
    [0, 0.2, 0],
  ];
  const DOOR_POSITIONS = [
    [4.6, 0.2, 0],
    [2.62, 0.2, 0],
    [1.22, 0.2, 0],
    [-0.5, 0.2, 0],
    [-1.9, 0.2, 0],
    [-3.8, 0.2, 0],
  ];
  const MAX_CHARACTER_PER_DOOR = 3;
  const MAX_CHARACTER_AMOUNT = 5;

  const [Wave_List, setWave_List] = useState([]);
  const [Wave_Count, setWave_Count] = useState(0);
  const characterCount = useRef(0);

  useEffect(() => {
    console.log(characterCount.current);
    if (spawnCharacter && characterCount.current < MAX_CHARACTER_AMOUNT) {
      Add_Wave();
      setWave_Count(Wave_Count + 1);
    }
  }, [spawnCharacter]);

  const characterWave = () => {
    return (
      <Character_Wave
        key={Wave_List.length}
        positions={Wave_Count === 0 ? FIRST_WAVE_POSITION : DOOR_POSITIONS}
        max_character_per_door={MAX_CHARACTER_PER_DOOR}
        WindowSize={WindowSize}
        ScaleSize={ScaleSize}
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
        Wave_Count={Wave_Count}
        characterCount={characterCount}
      />
    );
  };

  const Add_Wave = () => {
    if (Wave_List.length === 0) {
      setWave_List([characterWave()]);
    } else {
      setWave_List([...Wave_List, characterWave()]);
    }
  };

  return Wave_List;
}

function Character_Wave({
  positions,
  max_character_per_door,
  ScaleSize,
  WindowSize,
  floorPlane,
  spawnCharacter,
  Wave_Count,
  characterCount,
}) {
  const [Character_List, setCharacter_List] = useState([]);
  const [characterDeleted, setcharacterDeleted] = useState(false);
  const [deleteWave, setdeleteWave] = useState(false);
  const test = useRef(0);
  const CharacterIndex = useRef(0);

  let tempCharacterWave = [];

  if (characterDeleted === CharacterIndex.current && !deleteWave) {
    setdeleteWave(true);
  }

  useEffect(() => {
    if (!deleteWave) {
      Create_Wave();
    }
  }, []);

  const Create_Wave = () => {
    const character = (pos) => {
      return (
        <Character_Creation
          key={CharacterIndex.current + Wave_Count}
          WindowSize={WindowSize}
          ScaleSize={ScaleSize}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          pos={pos}
          setcharacterDeleted={setcharacterDeleted}
          characterDeleted={characterDeleted}
          test={test}
          characterCount={characterCount}
          Wave_Count={Wave_Count}
        />
      );
    };

    positions.forEach((pos) => {
      for (
        let i = 0;
        i < Math.floor(Math.random() * (max_character_per_door + 1));
        i++
      ) {
        if (tempCharacterWave.length === 0) {
          tempCharacterWave = [character(pos)];
        } else {
          tempCharacterWave = [...tempCharacterWave, character(pos)];
        }
        CharacterIndex.current = CharacterIndex.current + 1;
      }
    });

    characterCount.current = characterCount.current + CharacterIndex.current;
    setCharacter_List(tempCharacterWave);
  };
  if (deleteWave) {
    return null;
  } else {
    return Character_List;
  }
}
function Character_Creation({
  ScaleSize,
  WindowSize,
  floorPlane,
  spawnCharacter,
  pos,
  setcharacterDeleted,
  characterDeleted,
  characterCount,
  test,
  Wave_Count,
}) {
  const [deleteCharacter, setDeleteCharacter] = useState(false);
  useEffect(() => {
    return function cleanup() {
      test.current += 1;
      setcharacterDeleted(test.current);
      characterCount.current -= 1;
    };
  });

  const Character = (gender) => {
    return (
      <Character_Constructor
        characterGender={gender}
        likjbsdfg={characterCount}
        deleteCharacter={setDeleteCharacter}
        spawnCharacter={spawnCharacter}
        WindowSize={WindowSize}
        ScaleSize={ScaleSize}
        floorPlane={floorPlane}
        position={pos}
      />
    );
  };

  if (Wave_Count === 0) {
    if (deleteCharacter) {
      return null;
    } else {
      return (
        <>
          {Character("Male_Character")}
          {Character("Female_Character")}
        </>
      );
    }
  } else {
    if (deleteCharacter) {
      return null;
    } else {
      if (Math.floor(Math.random() * (1 + 1))) {
        return Character("Male_Character");
      } else {
        return Character("Female_Character");
      }
    }
  }
}
