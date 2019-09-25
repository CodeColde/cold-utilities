/** Test Data for Pipe Test Suites */
import { pipe } from '../../';

interface Car {
    owner: string,
    color?: string,
    brand?: string,
};

const redCar = (car: Car): Car => ({
    color: "red",
    ...car   
});

const blueCar = (car: Car) => ({
    color: "blue",
    ...car
})

const golfCar = (car: Car): Car => ({
    brand: 'golf',
    ...car
});

const bmwBrand = (car: Car): Car => ({
    brand: 'bmw',
    ...car
});

const carInit = (owner: string): Car => ({
    owner
});

export const twitchViewerCar = pipe(
    carInit('Twitch'),
    redCar,
    bmwBrand
);

export const twitchReturn = {
    owner: 'Twitch',
    color: 'red',
    brand: 'bmw',
}

export const myCar = pipe(
    carInit('Hayo'),
    blueCar,
    bmwBrand
);

export const myCarReturn = {
    owner: "Hayo",
    color: 'blue',
    brand: 'bmw',
};

export const failedRealityCar = pipe(
    carInit('failedreality'),
    redCar,
    golfCar,
);

export const frcReturn = {
    owner: 'failedreality',
    color: 'red',
    brand: 'golf',
};

interface Character {
    name: string;
    level: number;
    levelUp: () => void;
    hp: number;
    race?: string;
    racialAbility?: string;
    gender?: string;
};

const createCharacter = (name: string, initialLevel: number = 1): Character => {
    const setHealthPoints = (level: number): number => level * 10;

    return {
        name,
        level: initialLevel,
        levelUp: function(  ) {
            this.level++;
            this.hp = setHealthPoints(this.level);
        },
        hp: setHealthPoints(initialLevel)
    };
};

const createDwarfCharacter = (character: Character): Character => ({
    race: "Dwarf",
    racialAbility: "Stone Form",
    ...character
});

const createHumanCharacter = (character: Character): Character => ({
    race: "Human",
    racialAbility: "Perception",
    ...character
});
  

const createMaleCharacter = (character: Character): Character => ({
    gender: "Male",
    ...character
});

const createFemaleCharacter = (character: Character): Character => ({
    gender: "Female",
    ...character
});

export const carl = pipe(
    createCharacter('Carl'),
    createDwarfCharacter,
    createMaleCharacter
);

export const carlReturn = {
    name: 'Carl',
    level: 1,
    levelUp: function(  ) {
        this.level++;
        this.hp = this.level*10;
    },
    hp: 10,
    race: "Dwarf",
    racialAbility: "Stone Form",
    gender: "Male",
};

export const sophie = pipe(
    createCharacter('Sophie'),
    createHumanCharacter,
    createFemaleCharacter
);

export const sophieReturn = {
    name: 'Sophie',
    level: 1,
    levelUp: function(  ) {
        this.level++;
        this.hp = this.level*10;
    },
    hp: 10,
    race: "Human",
    racialAbility: "Perception",
    gender: "Female",
};

export const jesse = pipe(
    createCharacter('Jesse'),
    createDwarfCharacter,
    createFemaleCharacter
);

export const jesseReturn = {
    name: 'Jesse',
    level: 1,
    levelUp: function(  ) {
        this.level++;
        this.hp = this.level*10;
    },
    hp: 10,
    race: "Drawf",
    racialAbility: "Stone Form",
    gender: "Female",
};