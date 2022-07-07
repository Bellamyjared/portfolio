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
  const STARTING_POSITION = [[-34, 0, 0]];
  const DOOR_POSITIONS = [
    [4.6, 0.2, 0],
    [2.62, 0.2, 0],
    [1.22, 0.2, 0],
    [-0.5, 0.2, 0],
    [-1.9, 0.2, 0],
    [-3.8, 0.2, 0],
  ];
  const MAX_CHARACTER_PER_DOOR = 3;
  const MAX_CHARACTER_AMOUNT = 25;

  const [Wave_List, setWave_List] = useState([]);
  const [Wave_Count, setWave_Count] = useState(0);
  const characterCount = useRef(0);

  useEffect(() => {
    if (spawnCharacter && characterCount.current < MAX_CHARACTER_AMOUNT) {
      Add_Wave();
      setWave_Count(Wave_Count + 1);
      console.log(Wave_Count);
    }
  }, [spawnCharacter]);

  if (Wave_Count === 0) {
  }

  const characterWave = () => {
    return (
      <Character_Wave
        key={Wave_List.length}
        positions={Wave_Count === 0 ? STARTING_POSITION : DOOR_POSITIONS}
        max_character_per_door={MAX_CHARACTER_PER_DOOR}
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
        Wave_Count={Wave_Count}
        testing={testing}
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
  floorPlane,
  spawnCharacter,
  Wave_Count,
  testing,
  characterCount,
}) {
  const [Character_List, setCharacter_List] = useState([]);
  const [characterDeleted, setcharacterDeleted] = useState(false);
  const [deleteWave, setdeleteWave] = useState(false);
  const test = useRef(0);
  const CharacterIndex = useRef(0);

  let tempCharacterWave = [];

  if (characterDeleted === CharacterIndex.current && !deleteWave) {
    console.log("UPDATE CHARACTER LIST");
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
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          pos={pos}
          testing={testing}
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
  floorPlane,
  spawnCharacter,
  pos,
  testing,
  setcharacterDeleted,
  characterDeleted,
  characterCount,
  test,
  Wave_Count,
}) {
  const [deleteCharacter, setDeleteCharacter] = useState(false);
  useEffect(() => {
    return function cleanup() {
      console.log("clean Up");
      test.current += 1;
      setcharacterDeleted(test.current);
      console.log(test.current);
      characterCount.current -= 1;
    };
  });

  if (Wave_Count === 0) {
    return (
      <>
        <Male_Character
          deleteCharacter={setDeleteCharacter}
          spawnCharacter={spawnCharacter}
          floorPlane={floorPlane}
          position={pos}
          testing={testing}
        />
        <Female_Character
          deleteCharacter={setDeleteCharacter}
          floorPlane={floorPlane}
          spawnCharacter={spawnCharacter}
          position={pos}
        />
      </>
    );
  } else {
    if (deleteCharacter) {
      console.log("DELETE CHARACTER");
      return null;
    } else {
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
    }
  }
}
