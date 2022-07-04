//  workes but i cant delete character, try turning everything into function instead of components and it may work then/

import { useEffect } from "react";
import React, { useState } from "react";
import Male_Character from "./Male_Character";
import Female_Character from "./Female_Character";

export default function Character_Creator({
  floorPlane,
  spawnCharacter,
  testing,
}) {
  const DOOR_POSITIONS = [
    [4.6, 0.2, 0],
    [2.62, 0.2, 0],
    [1.22, 0.2, 0],
    [-0.5, 0.2, 0],
    [-1.9, 0.2, 0],
    [-3.8, 0.2, 0],
  ];
  const MAX_CHARACTER = 40;
  const MAX_CHARACTER_PER_DOOR = 3;

  const [Wave_List, setWave_List] = useState([]);
  const [Wave_Count, setWave_Count] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    if (spawnCharacter) {
      Add_Wave();
      setWave_Count(Wave_Count + 1);
    }
  }, [spawnCharacter]);

  const Add_Wave = () => {
    if (Wave_List.length === 0) {
      setWave_List([
        <Character_Wave
          key={Wave_List.length}
          door_positions={DOOR_POSITIONS}
          max_character_per_door={MAX_CHARACTER_PER_DOOR}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          Wave_Count={Wave_Count}
          testing={testing}
          MAX_CHARACTER={MAX_CHARACTER}
          setCharacterCount={setCharacterCount}
          characterCount={characterCount}
        />,
      ]);
    } else {
      setWave_List([
        ...Wave_List,
        <Character_Wave
          key={Wave_List.length}
          door_positions={DOOR_POSITIONS}
          max_character_per_door={MAX_CHARACTER_PER_DOOR}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          Wave_Count={Wave_Count}
          testing={testing}
          MAX_CHARACTER={MAX_CHARACTER}
          setCharacterCount={setCharacterCount}
          characterCount={characterCount}
        />,
      ]);
    }
  };

  return Wave_List;
}

function Character_Wave({
  door_positions,
  max_character_per_door,
  floorPlane,
  spawnCharacter,
  Wave_Count,
  testing,
  MAX_CHARACTER,
  setCharacterCount,
  characterCount,
}) {
  const [Character_List, setCharacter_List] = useState([]);

  useEffect(() => {
    Create_Wave();
  }, []);

  const Create_Wave = () => {
    let tempCharacterWave = [];
    let CharacterIndex = 0;

    door_positions.forEach((pos) => {
      for (
        let i = 0;
        i < Math.floor(Math.random() * (max_character_per_door + 1));
        i++
      ) {
        if (tempCharacterWave.length === 0) {
          tempCharacterWave = [
            <Character_Creation
              key={CharacterIndex + Wave_Count}
              floorPlane={floorPlane}
              spawnCharacter={spawnCharacter}
              pos={pos}
              testing={testing}
              MAX_CHARACTER={MAX_CHARACTER}
              setCharacterCount={setCharacterCount}
              characterCount={characterCount}
            />,
          ];
        } else {
          tempCharacterWave = [
            ...tempCharacterWave,
            <Character_Creation
              key={CharacterIndex + Wave_Count}
              floorPlane={floorPlane}
              spawnCharacter={spawnCharacter}
              pos={pos}
              testing={testing}
              MAX_CHARACTER={MAX_CHARACTER}
              setCharacterCount={setCharacterCount}
              characterCount={characterCount}
            />,
          ];
        }
        CharacterIndex = CharacterIndex + 1;
      }
    });

    setCharacter_List(tempCharacterWave);
  };

  return Character_List;
}

function Character_Creation({
  floorPlane,
  spawnCharacter,
  pos,
  testing,
  MAX_CHARACTER,
  setCharacterCount,
  characterCount,
}) {
  const [deleteCharacter, setDeleteCharacter] = useState(false);

  useEffect(() => {
    console.log(characterCount);
    setCharacterCount(characterCount + 1);
  }, []);
  console.log(characterCount);
  if (deleteCharacter) {
    setCharacterCount(characterCount - 1);
    return <></>;
  } else {
    // if (characterCount < MAX_CHARACTER) {
    if (Math.floor(Math.random() * (1 + 1))) {
      return (
        <Female_Character
          deleteCharacter={setDeleteCharacter}
          // characterCount={characterCount}
          // setCharacterCount={setCharacterCount}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          position={pos}
        />
      );
    } else {
      return (
        <Male_Character
          deleteCharacter={setDeleteCharacter}
          // characterCount={characterCount}
          // setCharacterCount={setCharacterCount}
          spawnCharacter={spawnCharacter}
          floorPlane={floorPlane}
          position={pos}
          testing={testing}
        />
      );
    }
    // }
  }
}
