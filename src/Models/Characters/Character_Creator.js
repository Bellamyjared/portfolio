//  workes but i cant delete character, try turning everything into function instead of components and it may work then/

import { useEffect, useRef } from "react";
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
}) {
  const [Character_List, setCharacter_List] = useState([]);
  const [characterDeleted, setcharacterDeleted] = useState(false);
  const test = useRef(0);

  let tempCharacterWave = [];
  const CharacterIndex = useRef(0);

  if (characterDeleted === CharacterIndex.current) {
    console.log("UPDATE CHARACTER LIST");
  }

  useEffect(() => {
    Create_Wave();
  }, []);

  const Create_Wave = () => {
    const character = (pos) => {
      return (
        <Character_Creation
          key={CharacterIndex.current + Wave_Count}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          pos={pos}
          testing={testing}
          setcharacterDeleted={setcharacterDeleted}
          characterDeleted={characterDeleted}
          test={test}
        />
      );
    };

    door_positions.forEach((pos) => {
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

    setCharacter_List(tempCharacterWave);
  };

  return Character_List;
}

function Character_Creation({
  floorPlane,
  spawnCharacter,
  pos,
  testing,
  setcharacterDeleted,
  characterDeleted,
  test,
}) {
  const [deleteCharacter, setDeleteCharacter] = useState(false);
  useEffect(() => {
    return function cleanup() {
      console.log("clean Up");
      test.current += 1;
      setcharacterDeleted(test.current);
      console.log(test.current);
    };
  });

  if (deleteCharacter) {
    console.log("DELETE CHARACTER");
    return null;
  } else {
    // if (characterCount < MAX_CHARACTER) {
    if (Math.floor(Math.random() * (1 + 1))) {
      return (
        <Female_Character
          deleteCharacter={setDeleteCharacter}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          position={pos}
        />
      );
    } else {
      return (
        <Male_Character
          deleteCharacter={setDeleteCharacter}
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
