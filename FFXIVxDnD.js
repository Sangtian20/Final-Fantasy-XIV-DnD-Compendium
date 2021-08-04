var iFileName = "Final Fantasy XIV D&D Compendium.js";
//This file adds the homebrew races, classes, spells and items created by u/SilentSoren for the FFXIVxDnD project.

SourceList["FFXIVxDnD"] = {
	name: "Final Fantasy XIV D&D Compendium",
	abbreviation: "FFXIVxDnD",
	group: "Homebrew",
	url: "https://www.reddit.com/r/FFXIVxDnD/comments/aoxa5v/current_build_and_previous_versions/",
	date: "2/2/2021"
};

/*
==================  CHAPTER 1: RACES  ==================
*/

//Au ra
RaceList["xaela au ra"] = {
	regExpSearch : /^(?=.*xaela)(?=.*au)(?=.*ra).*$/i,
	name: "Xaela Au ra",
	sortname: "Au ra, Xaela",
	source: ["FFXIVxDnD", 5],
	plural: "Xaela Au ri",
	size: 3,
	speed: {
		walk: {spd: 30, enc: 20}
	},
	languageProfs: ["Common", "Auri"],
	age: " reach adulthood around the age of 16 and live around 80 years",
	height: " males range anywhere from 6 and a half to 7 feet tall with a lean build dwarfing the females who rarely grow taller than 5 feet",
	weight: "",
	improvements: "Xaela Au ra: +2 Wisdom, +1 Strength",
	scores: [1, 0, 0, 0, 2, 0], //[Str, Dex, Con, Int, Wis, Cha]
	trait: "Xaela Au ra (+2 Wisdom, +1 Strength)\nCranial Horns: you gain proficiency in the perception skill\nScaled Bodies: when unarmored, your AC is equal to 11 + your dexterity modifier\nNomadic Instincts: you gain proficiency in the survival skill\nSavage Attacks: when you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
	skills: ["Survival", "Perception"],
	features: {
		"scaled bodies": {
			name: "Scaled Bodies",
			minLevel: 1,
			description: "\n " + "Withouth armor, my AC is 11 + Dexterity modifier",
			armorOptions: [{
				regExpSearch: /justToAddToDropDown/,
				name: "Unarmored Defense (Dex)",
				source: ["HB", 5],
				ac: "11+Dex",
				affectsWildShape: true
			}],
			armorAdd: "Unarmored Defense (Dex)"
		}
	}
};
RaceList["raen au ra"] = {
    source: ["FFXIVxDnD", 8],
	regExpSearch : /^(?=.*raen)(?=.*au)(?=.*ra).*$/i,
	name: "Raen Au ra",
	sortname: "Au ra, Raen",
	source: ["FFXIVxDnD", 5],
	plural: "Raen Au ri",
	size: 3,
	speed: {
		walk: {spd: 30, enc: 20}
	},
	languageProfs: ["Common", "Auri"],
	age: " reach adulthood around the age of 16 and live around 80 years",
	height: " males range anywhere from 6 and a half to 7 feet tall with a lean build dwarfing the females who rarely grow taller than 5 feet",
	weight: "",
	improvements: "Raen Au ra: +2 Wisdom, +1 Charisma",
	scores: [0, 0, 0, 0, 2, 1], //[Str, Dex, Con, Int, Wis, Cha]
	trait: "Raen Au ra (+2 Wisdom, +1 Charisma)\nCranial Horns: you gain proficiency in the perception skill\nScaled Bodies: when unarmored, your AC is equal to 11 + your dexterity modifier\nPolite Society: you gain proficiency in the persuasion skill\nUnwavering Loyalty: you have advantage on saves against being charmed",
	skills: ["Persuasion", "Perception"],
	features: {
		"scaled bodies": {
			name: "Scaled Bodies",
			minLevel: 1,
			description: "\n " + "Withouth armor, my AC is 11 + Dexterity modifier",
			armorOptions: [{
				regExpSearch: /justToAddToDropDown/,
				name: "Unarmored Defense (Dex)",
				source: ["HB", 5],
				ac: "11+Dex",
				affectsWildShape: true
			}],
			armorAdd: "Unarmored Defense (Dex)"
		}
	},
    savetxt: {
		adv_vs: ["charmed"]
	}
};

//Elezen
RaceList["wildwood elezen"] = {
    source: ["FFXIVxDnD", 8],
	regExpSearch: /^(?=.*wildwood)(?=.*elezen).*$/i,
    name: "Wildwood Elezen",
    sortname: "Elezen, Wildwood",
    plural: "Wildwood Elezen",
    age: " reach adulthood around the age of 18 and live into their nineties",
    size: 3,
    height: " males range between 6 ft 3 in and 6 ft 8 in and females between 6 ft and 6 ft 6 in",
    weight: "",
    speed: {
        walk: {spd: 30, enc: 20}
    },
    languageProfs: [1, "Common"],
    improvements: "Wildwood Elezen: +2 Intelligence, +1 Dexterity",
    scores: [0, 1, 0, 2, 0, 0], //[Str, Dex, Con, Int, Wis, Cha]
    trait: "Wildwood Elezen (+2 Intelligence, +1 Dexterity\nSuperb Hearing: you gain advantage when making a perception check using your hearing\nHawk Sight: the normal range of your ranged weapon is increased by 20 ft. This cannot exceed the maz range of the weapon.\nNatural Shrewdness: you gain proficiency in the insight skill.",
    skills: ["Insight"],
};
RaceList["duskwight elezen"] = {
	regExpSearch: /^(?=.*duskwight)(?=.*elezen).*$/i,
    name: "Duskwight Elezen",
    sortname: "Elezen, Duskwight",
    plural: "Duskwight Elezen",
    age: " reach adulthood around the age of 18 and live into their nineties",
    size: 3,
    height: " males range between 6 ft 3 in and 6 ft 8 in and females between 6 ft and 6 ft 6 in",
    weight: "",
    speed: {
        walk: {spd: 30, enc: 20}
    },
    languageProfs: [1, "Common"],
    improvements: "Duskwight Elezen: +2 Intelligence, +1 Constitution",
    scores: [0, 0, 1, 2, 0, 0], //[Str, Dex, Con, Int, Wis, Cha]
    trait: "Duskwight Elezen (+2 Intelligence, +1 Constitution)\nSuperb Hearing: you gain advantage when making a perception check using your hearing\nCave Dweller: you gain advantage when making stealth checks in caves or dim and dark lightning conditions",
    vision: [["Darkvision"], 60]
};

//Garlean


//Hrothgar


//Hyur


//Lalafell by u/SaintApathy
RaceList["lalafell plainsfolk"] = { 
    regExpSearch : /^(?=.*lalafell)(?=.*plainsfolk).*$/i,
    name : "Lalafell, Plainsfolk",
    sortname : "Lalafell, Plainsfolk",
    source : ["FFXIVxDnD", 17],
    plural : "Plainsfolk Lalafell",
    size : 4,
    speed : {
        walk : { spd : 25, enc : 15 }
    },
    languageProfs : ["Common", 1],
    age : " reach adulthood around 18 and live until their mid-eighties.",
    height : " range from 2 feet 8 inches to just over 3 feet tall (2'8\" + 1d6\")",
    weight : " weigh around 60 lb (45 + 1d6 \xD7 1d4 lb)",
    improvements : "Lalafell, Plainsfolk: +1 Dexterity, +2 Charisma",
    scores : [0, 1, 0, 0, 0, 2],
    trait : "Lalafell, Plainsfolk (+1 Dexterity, +2 Charisma)\n\nCunning: I have adv. on all Int, Wis, and Cha saving throws against magic.\n\nLalafellin Nimbleness: I can move through larger creatures' spaces.\n\nNaturally Stealthy: I can hide behind larger creatures.",
	savetxt: {
		adv_vs: ["intelligence, wisdom and charisma magic"]
	}
};
RaceList["lalafell dunesfolk"] = { 
    regExpSearch : /^(?=.*lalafell)(?=.*dunesfolk).*$/i,
    name : "Lalafell, Dunesfolk",
    sortname : "Lalafell, Dunesfolk",
    source : ["FFXIVxDnD", 17],
    plural : "Dunesfolk Lalafell",
    size : 4,
    speed : {
        walk : { spd : 25, enc : 15 }
    },
    languageProfs : ["Common", 1],
    skills : ["Deception"],
    age : " reach adulthood around 18 and live until their mid-eighties.",
    height : " range from 2 feet 8 inches to just over 3 feet tall (2'8\" + 1d6\")",
    weight : " weigh around 60 lb (45 + 1d6 \xD7 1d4 lb)",
    improvements : "Lalafell, Dunesfolk: +1 Intelligence, +2 Charisma",
    scores : [0, 0, 0, 1, 0, 2],
    trait : "Lalafell, Dunesfolk (+1 Intelligence, +2 Charisma)\n\nCunning: I have adv. on all Int, Wis, and Cha saving throws against magic.\n\nLalafellin Nimbleness: I can move through larger creatures' spaces.\n\nDustshield: I have adv. on saving throws against being blinded.\n\nLand of Merchants: I gain proficiency in the Deception skill.",
	savetxt: {
		adv_vs: ["being blinded"]
	}
};

//Miqo'te by u/SaintApathy
RaceList["miqote seeker of the sun"] = { 
    regExpSearch : /^(?=.*miqo\'te)(?=.*seeker)(?=.*sun).*$/i,
    name : "Miqo\'te (Seeker of the Sun)",
    sortname : "Miqo\'te, Seeker of the Sun",
    source : ["FFXIVxDnD", 19],
    plural : "Sun Seekers",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    languageProfs : ["Common", 1],
    vision : ["Darkvision", 60],
    skills : ["Perception", "Athletics"],
    age : " reach adulthood in their late teens and live around 80 years",
    height : " range from 5 feet to 5 1/2 feet tall (5'0\" + 1d8\")",
    weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
    improvements : "Miqo\'te (Seeker of the Sun): +2 Dexterity, +1 Charisma",
    scores : [0, 2, 0, 0, 0, 1],
    trait : "Miqo\'te (Seeker of the Sun) (+2 Dexterity, +1 Charisma)\n\nSkills: I gain proficiency in Perception and Athletics.\n\nTenacity: When reduced to 0 hit points but not killed, I drop to 1 instead. Recharges on long rest.",
};
RaceList["miqote keeper of the moon"] = {
    regExpSearch : /^(?=.*miqo\'te)(?=.*keeper)(?=.*moon).*$/i,
    name : "Miqo\'te (Keeper of the Moon)",
    sortname : "Miqo\'te, Keeper of the Moon",
    source : ["SBFFXIV", 20],
    plural : "Moon Seekers",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    languageProfs : ["Common", 1],
    vision : ["Darkvision", 120],
    skills : ["Perception"],
    age : " reach adulthood in their late teens and live around 80 years",
    height : " range from 5 feet to 5 1/2 feet tall (5'0\" + 1d8\")",
    weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
    improvements : "Miqo\'te (Keeper of the Moon): +2 Dexterity, +1 Charisma;",
    scores : [0, 2, 0, 0, 1, 0],
    trait : "Miqo\'te (Keeper of the Moon) (+2 Dexterity, +1 Charisma)\n\nSkills: I gain proficiency in Perception and Athletics.\n\nTenacity: When reduced to 0 hit points but not killed, I drop to 1 instead. Recharges on long rest.",
    features : { 
        "tenacity" : {
            name : "Tenacity",
            minlevel : 1,
            usages : 1,
            recovery : "long rest",
            tooltip : " (Tenacity)"
        }
    }
};

//Roegadyn


//Viera


/*
==================	CHAPTER 2: CLASSES  ==================
*/

//Dancer
[   //level 1
    "bane", "bless", "cause fear", "compelled duel", "cure wounds", "detect evil and good", "expeditious retreat", "faerie fire", "fog cloud", "healing word", "heroism", "hex", "mage armor", "protection from evil and good", "shield of faith", "silent image", "tasha's caustic brew", "witch bolt",
    //level 2
    "barksin", "blur", "calm emotions", "charm person", "crown of madness", "dust devil", "earthbind", "enhance ability", "enlarge/reduce", "gust of wind", "hold person", "invisibility", "lesser restoration", "levitate", "magic weapon", "maximilian's earth grasp", "skywrite", "spike growth", "warding wand", "web",
    //level 3
    "bestow curse", "blink", "clairvoyance", "dispel magic", "elemental weapon", "fear", "fly", "gaesous form", "haste", "hypnotic pattern", "intellect fortress", "major image", "mass healing word", "melf's minute meteors", "remove curse", "revivify", "slow", "spirit shroud", "wall of sand", "wind wall",
    //level 4
    "arcane eye", "banishment", "compulsion", "confusion", "dominate beast", "greater invisibility", "otiluke's resilient sphere", "polymorph", "stone shape", "stoneskin", "storm sphere",
    //level 5
    "animate objects", "circle of power", "control winds", "dawn", "dispel evil and good", "dominate person", "far step", "greater restoration", "hold monster", "mislead", "skill empowerment", "telekinesis", "tree stride", "wall of stone"
].forEach( function (s) {
    if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("dancer") === -1) SpellsList[s].classes.push("dancer");
});
dancerSpellTable = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0 always zeros
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1 // there are 9 entries in each array, one for each spell level
    [2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
    [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
    [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
    [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
    [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
    [4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
    [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 8
    [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
    [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 10
    [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 11
    [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 12
    [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 13
    [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 14
    [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 15
    [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 16
    [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 17
    [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 18
    [4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl 19
    [4, 3, 3, 3, 2, 0, 0, 0, 0]  //lvl 20
]
ClassList["dancer"] = {
	regExpSearch: /^(?=.*dancer).*$/i,
	name: "Dancer",
	source: ["FFXIVxDnD", 55],
	primaryAbility: "\n \u2022 Dancer: Dexterity;",
	prereqs: "\n \u2022 Dancer: Dexterity 13;",
	die: 8,
	improvements: [0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5],
	saves: ["Dex", "Cha"],
	skills: ["\n\n" + toUni("Dancer") + ": choose two from Acrobatics, Deception, Insight, Perception, Performance, and Persuasion.", "\n\n" + toUni("Dancer") + "."],
	armor: [
		[true, false, false, false],
		[false, false, false, false]
	],
	weapons: [
		[true, false, ["chakram", "rapier", "scimitar", "shortsword", "whips"]],
		[false, false, []]
	],
	equipment: "Dancer starting equipment:\n \u2022(a) two daggers or (b) two chakrams\n \u2022a (a) whip or (b) scimitar\n \u2022a set of bracelets and anklets for spell casting\n \u2022a set of clothes\n \u2022a (a) costume or (b) light armour\n \u2022(a) an explorer's pack or (b) a entertainer's pack",
	subclasses: ["Dancer Archetype", [/*"dacer-paragon", "dancer-exotic wonder", "dancer-peace bringer"*/]],
	attacks: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	abilitySave: 6,
	spellcastingFactor: 2,
    spellcastingKnown: {
        spells: "list",
        prepared: true
    },
	features: {
		"unarmored defense": {
			name: "Unarmored Defense",
			source: ["FFXIVxDnD", 57],
			minlevel: 0,
			description: desc(["While you are not wearing any armor, your AC equals 10 + your dexterity modifier + your charisma modifier. You can use a shield and still gain this benefit."]),
			armorOptions: [{
				regExpSearch: /justToAddToDropDown/,
				name: "Unarmored Defense (Dex+Cha)",
				source: ["HB", 57],
				ac: "10+Dex+Cha",
				affectsWildShape: true
			}],
			armorAdd: "Unarmored Defense (Dex+Cha)"
		},
		"dazzling dance": {
			name: "Dazzling Dance",
			source: ["FFXIVxDnD", 56],
			minlevel: 1,
			description: desc(["As you fight you build toward empowering your movements further. When you use the Attack action against a hostile creature, you gain a charge of Dazzling Dance. You may hold a number of Dazzling Dance charges equal to your Charisma modifier. Your charges dissipate one minute after combat ends. Additionally, you may spend 1 Dazzling Dance charge to take Dash or Disengage action as a bonus action."]),
			usages: "Charisma modifier after an ",
			usagescalc: "event.value = 0 + What('Cha Mod');",
			recovery: "attack",
		},
		"flourish": {
			name: "Flourish",
			source: ["FFXIVxDnD", 57],
			minlevel: 1,
			description: desc(["Once per turn, you can deal an extra 1d6 damage to one creature you hit with a ranged weapon attack if you have advantage on the Attack roll. The Attack must use a finesse weapon. You don't need advantage on the Attack roll if another enemy of the target is within 5 feet of it, that enemy isn't Incapacitated, and you don't have disadvantage on the Attack roll. The amount of the extra damage increases as you gain levels in this class, as shown in the Flourish Damage column of the Dancer table."])
		},
		"whirling steel": {
			name: "Whirling Steel",
			source: ["FFXIVxDnD", 57],
			minlevel: 2,
			description: desc(["You can spend 1 hour attuning your recently discovered magics with up to two finesse throwing weapons. When you throw a weapon you are attuned with, it returns to your hand after the attack is resolved."])
		},
		"uncanny dodge": {
			name: "Uncanny Dodge",
			source: ["FFXIVxDnD", 57],
			minlevel: 5,
			description: desc(["When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."]),
			action: ["reaction", ""]
		},
		"evasion": {
			name: "Evasion",
			source: ["FFXIVxDnD", 58],
			minlevel: 7,
			description: desc(["you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."])
		},
		"motivating mambo": {
			name: "Motivating Mambo",
			source: ["FFXIVxDnD", 57],
			minlevel: 10,
			description: desc(["You've learned how to empower your allies in the heat of battle via your dances. When you use the Help action you can expend one Dazzling Dance charge to add your Charisma modifier to their roll. Additionally, you may spend 1 Dazzling Dance charge to use the help action as a bonus action."])
		},
		"bewildering grace": {
			name: "Bewildering Grace",
			source: ["FFXIVxDnD", 58],
			minlevel: 13,
			description: desc(["As an action you perform a mysterious dance whose effects you cannot predict. Roll a d20 die and resolve the effect. Spells cast with Bewildering Grace do not consume spell slots. Non-spell effects from Bewildering Grace last one hour. You can use this feature a number of times equal to your Charisma modifier (aminimum of once). You regain any expended uses when you finish a long rest."]),
			action: ["action", ""]
		},
		"spell dancer": {
			name: "Whirling Steel",
			source: ["FFXIVxDnD", 58],
			minlevel: 14,
			description: desc(["When you cast a spell you gain a number of Dazzling Dance charges equal to half the level (rounded down) of the expended spell slot. You do not gain Dazzling Dance charges from Bewildering Grace"])
		},
		"stage presence": {
			name: "Whirling Steel",
			source: ["FFXIVxDnD", 58],
			minlevel: 18,
			description: desc(["You've become so accustomed to performing both for crowds and amongst the chaos of the battlefield, you are rarely caught unaware of your surroundings and can protect yourself from the tricks of assailants. Attackers cannot attack you with advantage unless you are under the conditions: grappled, incapacitated, paralyzed or petrified. Additionally when knocked prone, it only costs 5ft. of movement to get back up."])
		},
		"rhytmic heart": {		
			name: "Whirling Steel",
			source: ["FFXIVxDnD", 58],
			minlevel: 20,
			description: desc(["When you roll initiative you gain 2 Dazzling Dance charges."])
		}
	}
};

//Black Mage by u/SaintApathy (must check if it's up to date)
[   // cantrips
    "blade ward", "chill touch", "fire bolt", "frostbite", "infestation", "mage hand", "magic stone", "produce flame", "ray of frost", "shocking grasp", "thaumaturgy", "toll the dead",
    //level 1
    "absorb elements", "burning hands", "chaos bolt", "detect magic", "disguise self", "expeditious retreat", "false life", "feather fall", "find familiar", "hex", "ice knife", "illusory script inflict wounds", "jump", "longstrider", "mage armor", "magic missile", "shield", "sleep", "witch bolt",
    // level 2
    "alter self", "arcane lock", "blur", "blindness/deafness", "cloud of daggers", "darkness", "darkvision", "dragon's breath", "flaming sphere", "heat metal", "hold person", "knock", "levitate", "magic weapon", "misty step", "pyrotechnics", "scorching ray", "scorching ray", "silence", "web",
    // level 3
    "animate dead", "bestow curse", "blink", "counterspell", "dispel magic", "elemental weapon", "feign death", "fly", "leomud's tiny hut", "sleet storm", "slow", "speak with dead", "stinking cloud", "tongues", "thunderstep", "vampiric touch",
    // level 4
    "arcane eye", "banishment", "blight", "dimension door", "fire shield", "ice storm", "mordenkainen's faithful hound", "mordenkainen's private sanctum", "polymorph", "wall of fire",
    // level 5
    "animate objects", "antilife shell", "bigby's hand", "cloudkill", "contact other plane", "contagion", "danse macabre", "destructive wave", "dream", "far step", "flame strike", "geas", "hold monster", "mislead", "telekinesis", "teleportation circle", "wall of force",
    // level 6
    "arcane gate", "chain lightning", "circle of death", "create undead", "disintegrate", "eyebite", "harm", "investiture of flame", "investiture of ice", "mass suggestion", "otiluke's freezing sphere", "soul cage", "wall of ice",
    // level 7
    "delayed blast fireball", "etherealness", "finger of death", "fire storm", "forcecage", "mordenkainen's magnificent mansion", "plane shift", "power word pain", "regenerate", "simulacrum", "teleport",
    // level 8
    "abi-dalzim's horrid wilting", "antimagic field", "demiplane", "dominate monster", "incendiary cloud", "maddening darkness",
    // level 9
    "flare", "gate", "meteor swarm", "time stop"
].forEach( function (s) {
    if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("black mage") === -1) SpellsList[s].classes.push("black mage");
});
blackmageSpellTable = [  //Object name; note that there is no "var" here, and that the name of this variable is the name of the spellcastingFactor without any numbers in it and all lower case, plus the text "SpellTable"
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0 // this should be all zeroes
        [2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1 // there are 9 entries in each array, one for each spell level
        [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
        [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
        [4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 4
        [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 5
        [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 6
        [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 7
        [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 8
        [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 9
        [4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl10
        [4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl11
        [4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl12
        [4, 3, 3, 3, 2, 1, 1, 0, 0], //lvl13
        [4, 3, 3, 3, 2, 1, 1, 0, 0], //lvl14
        [4, 3, 3, 3, 2, 1, 1, 1, 0], //lvl15
        [4, 3, 3, 3, 3, 1, 1, 1, 0], //lvl16
        [4, 3, 3, 3, 3, 1, 1, 1, 1], //lvl17
        [4, 3, 3, 3, 3, 1, 1, 1, 1], //lvl18
        [4, 3, 3, 3, 3, 2, 1, 1, 1], //lvl19
        [4, 3, 3, 3, 3, 2, 2, 1, 1] //lvl20
]
ClassList["black mage"] = {
    regExpSearch : /black mage/i,
    name : "Black Mage",
    source : ["SBFFXIV", 34],
    primaryAbility : "\n \u2022 Black Mage: Intelligence;",
    prereqs : "\n \u2022 Black Mage: Intelligence 13;",
    improvements :  levels.map( function(n) {
        return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
    }),
    die : 6,
    saves : ["Int", "Cha"],
    skills : ["\n\n" + toUni("Black Mage") + ": Choose two from Arcana, Deception, Insight, Persuasion, History, Religion, Intimidation."],
    armor : [
        [false, false, false, false]
    ],
    weapons : [
        [false, false, ["dagger", "dart", "sling", "quarterstaff", "mace", "light crossbow"]]
    ],
    equipment : "Black Mage starting equipment:\n \u2022 A dagger;\n \u2022 a spellcasting focus (a cane, staff, wand, or similar object);\n \u2022 an explorer's pack -or- a scholar's pack\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Magical Discipline", ["black mage-annihilator", "black mage-inflictor", "black mage-void soul"]],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    abilitySave : 4,
    spellcastingFactor : "blackmage1",
    spellcastingKnown : {
        cantrips : [4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
    },
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["SBFFXIV", 35],
            minlevel : 1,
            description : desc([
                "I can cast known black mage cantrips/spells, using Intelligence as my spellcasting ability",
                "I can use a cane, staff, wand, or similar object as an arcane focus",
                "I can cast my known black mage spells as rituals if they have the ritual tag"
            ]),
            additional : ["4 cantrips \u0026 2 spells known", "4 cantrips \u0026 3 spells known", "4 cantrips \u0026 4 spells known", "5 cantrips \u0026 5 spells known", "5 cantrips \u0026 6 spells known", "5 cantrips \u0026 7 spells known", "5 cantrips \u0026 8 spells known", "6 cantrips \u0026 9 spells known", "6 cantrips \u0026 10 spells known", "6 cantrips \u0026 11 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known"]
        },
        "ritual casting" : {
            name : "Ritual Casting",
            source : ["SBFFXIV", 68],
            minlevel : 1,
            description : desc([
                "You can cast any Black Mage spell you know as a ritual if that spell has a ritual tag."
            ])
        },
        "enochian" : {
            name : "Enochian",
            source : ["SBFFXIV", 36],
            minlevel : 1,
            description : desc([
                "At 1st level, I gain access to Enochian, which powers certain Black Mage abilities.",
                "I gain one stack of Enochian each time I expend a spell slot.",
                "All of my stacks dissipate after 1 minute unless I cast a spell.",
                "Each stack adds +1 damage to damage-dealing spells; this bonus is applied per spell.",
                "My Enochian limit increases at certain levels."
            ]),
            action : ["action", ""],
            usages : levels.map( function(n) {
                return n < 3 ? 1 : n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6;
            })
        },
        "subclassfeature2" : {
            name : "Magical Discipline",
            source : ["SBFFXIV", 36],
            minlevel : 2,
            description : desc([
                "Choose a Magical Discipline and put it in the \"Class\" field",
                "Choose either the Annihilator, Inflictor, or Void Soul disciplines."
            ])
        },
        "surecaster" : {
            name : "Surecaster",
            source : ["SBFFXIV", 36],
            minlevel : 18,
            description : desc([
                "I can expend 4 Enochian stacks to pass all concentration checks for the next 10 minutes."
            ])
        }
    }
};
ClassSubList["black mage-annihilator"] = {
    regExpSearch : /^(?=.*black mage\b)(?=.*\bannihilator).*$/i,
    subname : "Annihilator",
    source : ["SBFFXIV", 36],
    spellcastingExtra : ["chromatic orb", "hellish rebuke", "aganazzar's scorcher", "snilloc's snowball swarm", "fireball", "lightning bolt", "ice storm", "storm sphere", "cone of cold", "immolation"],
    features : {
        "subclassfeature2" : {
            name : "Raging Ether",
            source : ["SBFFXIV", 36],
            minlevel : 2,
            description : desc([
                "When I cast a damaging spell, I add the number of my Enochian stacks as a bonus to my ranged spell attack bonus.",
                "This bonus is also added to the spell save DC of any damage-dealing spell."
            ])
        },
        "subclassfeature6" : {
            name : "Glyph Sense",
            source : ["SBFFXIV", 36],
            minlevel : 6,
            description : desc([
                "I gain advantage on Perception and Arcana checks when searching for magical traps and glyphs."
            ])
        },
        "subclassfeature10" : {
            name : "Leylines",
            source : ["SBFFXIV", 37],
            minlevel : 10,
            description : desc([
                "I use a bonus action to create a magical circle on the ground with a 5ft. radius.",
                "While I stand within it I can spend 1 Enochian stack to cast a spell as a bonus action instead of an action.",
                "I do not gain another Enochian stack from this spell.",
                "This circle lasts a number of rounds equal to my Intelligence modifier per short rest."
            ]),
            usage : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Devastating Force",
            source : ["SBFFXIV", 37],
            minlevel : 14,
            description : desc([
                "I can spend two Enochian stacks to reroll all damage dice that land on a 1.",
                "I must use the resulting rolls."
            ])
        }
    }
};
ClassSubList["black mage-inflictor"] = {
    regExpSearch : /^(?=.*black mage\b)(?=.*\binflictor).*$/i,
    subname : "Inflictor",
    source : ["SBFFXIV", 37],
    spellcastingExtra : ["cause fear", "charm person", "enlarge/reduce", "suggestion", "slow", "hypnotic pattern", "blight", "charm monster", "dominate person", "geas"],
    features : {
        "subclassfeature2" : {
            name : "Deep Suggestion",
            source : ["SBFFXIV", 37],
            minlevel : 2,
            description : desc([
                "I can spend 1 Enochian stack to inflict disadvantage on a target's saving throws versus my enchantment spells."
            ])
        },
        "subclassfeature6" : {
            name : "Mind Jack",
            source : ["SBFFXIV", 37],
            minlevel : 6,
            description : desc([
                "I gain proficiency in the Insight skill and can use it to identify specific enchantment spells affecting a target.",
                "If I know the identified spell, I can spend the appropriate spell slot and 1 Enochian stack to transfer control of the spell to me.",
                "This allows me to refresh the duration of the spell."
            ]),
            skills : ["Insight"]
        },
        "subclassfeature10" : {
            name : "Unshaken Will",
            source : ["SBFFXIV", 37],
            minlevel : 10,
            description : desc([
                "I can spennd 1 Enochian stack to gain advantage and my proficiency bonus on Wisdom saves."
            ])
        },
        "subclassfeature14" : {
            name : "Mental Anguish",
            source : ["SBFFXIV", 37],
            minlevel : 14,
            description : desc([
                "I can spend 1 Enochian stack to empower enchantment spells I cast.",
                "The target makes a Constitution saving throw versus my spell save DC.",
                "On a failed save they take a number of d6's of necrotic damage equal to my Intelligence modifier, and half as much on a success."
            ])
        }
    }
};
ClassSubList["black mage-void soul"] = {
    regExpSearch : /^(?=.*black mage\b)(?=.*\bvoid soul).*$/i,
    subname : "Void Soul",
    source : ["SBFFXIV", 37],
    spellcastingExtra : ["armor of agathys", "arms of hadar", "ray of enfeeblement", "shadow blade", "hunger of hadar", "summon lesser demon", "banishment", "summon greater demon", "contact other plane", "negative energy flood"],
    features : {
        "subclassfeature2" : {
            name : "Soul Siphon",
            source : ["SBFFXIV", 37],
            minlevel : 2,
            description : desc([
                "I can spend 1 Enochian stack as a free action to change the damage type of any spell to necrotic damage.",
                "If I deal damage in this way, I recover 1d6 + my Charisma mod hit points.",
                "This die value gets upgraded by level:  a d8 at 6th, d10 at 11th and d12 at 14th level."
            ]),
            action : ["free action", ""]
        },
        "subclassfeature6" : {
            name : "Devil on the Shoulder",
            source : ["SBFFXIV", 37],
            minlevel : 6,
            description : desc([
                "I am able to make suggestions and control creatures within 30 ft. by influencing their minds.",
                "See source for full text of this class feature."
            ]),
            action : ["action", ""]
        },
        "subclassfeature10" : {
            name : "Ebony Offense",
            source : ["SBFFXIV", 37],
            minlevel : 10,
            description : desc([
                "As a bonus action, I can spend two Enochian stacks to overcome creatures' necrotic damage immunity for my next spell."
            ]),
            action: ["bonus action", ""]
        },
        "subclassfeature14" : {
            name : "Dreadful Might",
            source : ["SBFFXIV", 37],
            minlevel : 14,
            description : desc([
                "By spending 2 Enochian stacks, I can affect creatures with fear when they take damage from my spells.",
                "Creatures make Charisma saving throws against my spell save DC.",
                "On a failure, they become afraid of me for a number of rounds equal to my Charisma modifier.",
                "On a success, they resist my influence and become immune to fear-based charms for one hour."
            ])
        }
    }
};

//Machinist by u/SaintApathy (must check if it's up to date)
ClassList["machinist"] = {
    regExpSearch : /^(?=.*machinist).*$/i,
    name : "Machinist",
    source : ["SBFFXIV", 58],
    primaryAbility : "\n \u2022 Machinist: Dexterity;",
    prereqs : "\n \u2022 Machinist: Dexterity 13;",
    die : 8,
    improvements :  levels.map( function(n) {
        return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
    }),
    saves : ["Dex", "Int"],
    skills : ["\n\n" + toUni("Machinist") + ": Choose two from Athletics, Arcana, History, Insight, Intimidation, Perception, and Survival.", "\n\n" + toUni("Machinist") + ": Choose one from Athletics, Arcana, History, Insight, Intimidation, Perception, and Survival."],
    toolProfs : {
        primary : [["Artisan's tools", 2]],
        secondary : [["Artisan's tools", 1]]
    },
    armor : [
        [true, false, false, false],
        [true, false, false, false]
    ],
    weapons : [
        [true, false, ["firearms"]],
        [true, false, ["firearms"]]
    ],
    equipment : "Machinist starting equipment:\n \u2022 Leather -or- hide armor, a pistol -or- a dagger;\n \u2022 a musket;\n \u2022 A dungeoneer's pack -or- an explorer's pack.\n\nAlternatively, choose 14d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Machinist Archetype", ["machinist-marksman", "machinist-tinkerer", "machinist-grenadier"]],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    abilitySave : 2,
    features : {
        "gunsmith" : {
            name : "Gunsmith",
            source : ["MM:GMA", 2],
            minlevel : 1,
            description : desc([
                "I gain proficiency with tinker's tools",
                "I can use my tinker's tool to craft ammunition and repair damaged firearms",
                "I can even use them to draw up and create new ones (DM's discretion)",
                "Some intricate and experimental firearms can only be accessed through crafting"
            ]),
            toolProfs : [["Tinker's tools", "Dex"]],
            eval : "AddAction('action', 'Repair Misfire (DC 8 + misfire score)', 'Machinist (Gunsmith)');",
            removeeval : "RemoveAction('action', 'Repair Misfire (DC 8 + misfire score)');"
        },
        "suppressive fire" : {
            name : "Suppressive Fire",
            source : ["SBFFXIV", 59],
            minlevel : 1,
            description : desc([
                "Use the Ready action before attacking a target to temporarily disable it.",
                "On a hit the target makes a Constitution saving throw against your Machinist save DC.",
                "On a failed save, the creature is knocked prone and their speed becomes 0 until end of turn."
            ]),
            action : ["action", ""]
        },
        "technical support" : {
            name : "Technical Support",
            source : ["SBFFXIV", 59],
            minlevel : 2,
            description : desc([
                "You are able to use your artisan's tools to disarm mechanical traps."
            ])
        },
        "sounding sentry" : {
            name : "Sounding Sentry",
            source : ["SBFFXIV", 59],
            minlevel : 2,
            description : desc([
                "You have developed a tiny device which casts the Alarm spell.",
                "You can affix it to a surface and it monitors a 20 ft. cube area around itself.",
                "This device can be used once before recharging over a long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature3" : {
            name : "Machinist Archetype",
            source : ["SBFFXIV", 59],
            minlevel : 3,
            description : desc([
                "Choose one from the Marskman, Tinkerer, or Grenadier archetypes."
            ])
        },
        "extra attack" : {
            name : "Extra Attack",
            source : ["SBFFXIV", 60],
            minlevel : 5,
            description : desc([
                "You can attack twice instead of once whenever you take the Attack action on your turn."
            ])
        },
        "reload" : {
            name : "Reload",
            source : ["SBFFXIV", 60],
            minlevel : 5,
            description : desc([
                "Ranged weapons you use lose the loading property."
            ])
        },
        "peloton" : {
            name : "Peloton",
            source : ["SBFFXIV", 60],
            minlevel : 6,
            description : desc([
                "Your base movement speed increases by 5 ft.",
                "You may use your Intelligence modifier for Initiative rolls.",
                "You are able to smoke weed every day. Smoke weed every day."
            ]),
            speed : { allModes : "+5"},
            eval : "processMods(true, 'Peloton', { type : 'skill', field : 'Init', mod : Math.max(What('Int Mod'), What('Dex Mod'))-Math.min(What('Int Mod'), What('Dex Mod')), text : 'I can use my Intelligence modifier for initiative rolls.' });"
        },
        "eye for design" : {
            name : "Eye For Design",
            source : ["SBFFXIV", 60],
            minlevel : 9,
            description : desc([
                "You gain advantage on Investigation checks to understand mechanics.",
                "You also gain advantage on Survival checks to track a creature.",
                "The creature tracked must be in a building, village, town or city."
            ])
        },
        "graze" : {
            name : "Graze",
            source : ["SBFFXIV", 60],
            minlevel : 10,
            description : desc([
                "With a bonus action, you can cause your ranged attacks to impart negative effects on a failed Dex saving throw.",
                "This effect lasts until your next action, where applicable.",
                "The attack targets one area of a creature from the list below.",
                " - Head: Targeting the head imparts the stunned effect.",
                " - Heart: Targeting the heart imparts the frightened effect.",
                " - Arm: Targeting an arm disarms the target.",
                " - Leg: Targeting the leg knocks the creature prone."
            ]),
            action : ["bonus action", ""]
        },
        "combat roll" : {
            name : "Combat Roll",
            source : ["SBFFXIV", 60],
            minlevel : 13,
            description : desc([
                "When you are targeted by an attack, you can use your reaction to impose disadvantage.",
                "Simultaneously, move 5 ft. to an open space without provoking an attack of opportunity.",
                "You may do this a number of times equal to your Dexterity modifier per long rest."
            ]),
            usages : "Dexterity modifier per ",
            usagescalc : "event.value = Math.max(1, tDoc.getField(\"Dex Mod\").value);",
            recovery : "long rest",
            action : ["reaction", ""]
        },
        "ricochet" : {
            name : "Ricochet",
            source : ["SBFFXIV", 60],
            minlevel : 14,
            description : desc([
                "You may spend your reaction to perform a ricochet shot with a firearm.",
                "On a hit, make another ranged attack against a target w/in 5 ft. of the first.",
                "This second attack does not consume ammunition."
            ]),
            action : ["reaction", ""]
        },
        "emergency rescue" : {
            name : "Emergency Rescue",
            source : ["SBFFXIV", 60],
            minlevel : 15,
            description : desc([
                "You create a palm-sized orb device capable of delivering a revivifying shock.",
                "When the orb comes in contact with a creature at 0 hp, it casts Cure Wounds.",
                "As an action, you can throw the device at a creature within 20 ft. of you.",
                "If you fall below 0 hit points with the device on your person, it casts automatically on you.",
                "This item can only cast Cure Wounds once per short rest."
            ]),
            usages : 1,
            recovery : "short rest",
            action : ["action", ""]
        },
        "cloaking device" : {
            name : "Cloaking Device",
            source : ["SBFFXIV", 60],
            minlevel : 18,
            description : desc([
                "You've developed a cane-sized device that turns you and other creatures invisible.",
                "This effect lasts for 1 minute and targets all creatures within 5 ft.",
                "Creatures must remain within 5 ft. of the device to retain invisibility.",
                "You can use the cane once per long rest."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["action", ""]
        },
        "midas touch" : {
            name : "Midas Touch",
            source : ["SBFFXIV", 60],
            minlevel : 20,
            description : desc([
                "You can complete maintenance on an invention as a bonus action once per long rest."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["bonus action", ""]
        },
    }
};
ClassSubList["machinist-marksman"] = {
    regExpSearch : /^(?=.*machinist\b)(?=.*\bmarksman).*$/i,
    subname : "Marksman",
    source : ["SBFFXIV", 60],
    features : {
        "subclassfeature3" : {
            name : "Gauss Barrel",
            source : ["SBFFXIV", 60],
            minlevel : 3,
            description : desc([
                "You equip a specialized barrel to your firearm, giving you +2 to attack and damage rolls.",
                "This bonus lasts a number of shots equal to your Intelligence modifier per short or long rest.",
                "This bonus increases by 1 at the 6th, 11th, and 17th level."
            ]),
            usages : "Intelligence modifier per ",
            usagescalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
            recovery : "long rest"
        },
        "subclassfeature6" : {
            name : "Hawkeye Goggles",
            source : ["SBFFXIV", 60],
            minlevel : 6,
            description : desc([
                "You create special goggles that grant you proficiency with visual Perception checks.",
                "You may use your Intelligence modifier for these checks.",
                "You can see up to 4 miles in clear conditions and suffer no long-range attack penalty."
            ])
        },
        "subclassfeature11" : {
            name : "Lock-On",
            source : ["SBFFXIV", 60],
            minlevel : 11,
            description : desc([
                "You double the amount of Gauss Barrel shots available to you.",
                "You don't suffer long-range disadvantage on ranged attacks with the Gauss Barrel.",
                "You must be wearing the Hawkeye Goggles for the second effect."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["reaction", ""]
        },
        "subclassfeature17" : {
            name : "Sniper",
            source : ["SBFFXIV", 61],
            minlevel : 17,
            description : desc([
                "When you land a critical hit, the damage is tripled. You score a critical on a 19 or 20."
            ])
        }
    }
};
ClassSubList["machinist-tinkerer"] = {
    regExpSearch : /^(?=.*machinist\b)(?=.*\btinkerer).*$/i,
    subname : "Tinkerer",
    source : ["SBFFXIV", 61],
    features : {
        "subclassfeature3" : {
            name : "Automated Turrets",
            source : ["SBFFXIV", 61],
            minlevel : 3,
            description : desc([
                "You gain the use of an automated turret with Companion's Bond benefits.",
                "It has two modes, Bishop and Rook, which you can change between during a long rest."
            ])
        },
        "subclassfeature3.1" : {
            name : "Companion Bond",
            source : ["SBFFXIV", 61],
            minlevel : 3,
            description : desc([
                "Your turret becomes a companion which is bonded to you and gains a variety of benefits.",
                "See SBFFXIV pg. 61 for full details."
            ])
        },
        "subclassfeature6" : {
            name : "Sensory Input",
            source : ["SBFFXIV", 61],
            minlevel : 6,
            description : desc([
                "You develop a headpiece that allows you to see and hear what your turret companion can see and hear."
            ])
        },
        "subclassfeature11" : {
            name : "Tripod Stance",
            source : ["SBFFXIV", 61],
            minlevel : 11,
            description : desc([
                "You have developed stance gear for your turrets. They are able to spend an action to use their stance action."
            ])
        },
        "subclassfeature17" : {
            name : "Promoted",
            source : ["SBFFXIV", 61],
            minlevel : 17,
            description : desc([
                "Your turrets activate their promotion ability for a number of rounds up to your Intelligence modifier, rounded down.",
                "This ability can be used once and recharges on a long rest."
            ]),
            usage : 1,
            recharges : "long rest"
        }
    }
};
ClassSubList["machinist-grenadier"] = {
    regExpSearch : /^(?=.*machinist\b)(?=.*\bgrenadier).*$/i,
    subname : "Grenadier",
    source : ["SBFFXIV", 61],
    features : {
        "subclassfeature3" : {
            name : "Explosive Innovator",
            source : ["SBFFXIV", 61],
            minlevel : 3,
            description : desc([
                "You've completed the plans to create grenadier bombs.",
                "See SBFFXIV page 61 for full details."
            ]),
            abilitySaveAlt : 4,
            weapons : [false, false, ["grenadier weapons"]]/*,
            calcChanges : {
                atkCalc : ["if (theWea && (/grenadier bomb/i).test(theWea.name) && CurrentClass.level > 6) { output.die = output.die.replace('1d8', (CurrentClass.level < 11 ? 2 : CurrentClass.level < 17 ? 3 : 4) + 'd8'); };", ""]},
            }*/
        },
        "subclassfeature3.1" : {
            name : "Planned Detonation",
            source : ["SBFFXIV", 61],
            minlevel : 3,
            description : desc([
                "As a bonus action, you may select creatures up to your Int modifier who are protected from your bomb effects used that same turn."
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature6" : {
            name : "Proximity Detonation",
            source : ["SBFFXIV", 61],
            minlevel : 6,
            description : desc([
                "You can set your bomb to go off when any creature wanders within 5 ft. of it."
            ])
        },
        "subclassfeature11" : {
            name : "Plentiful And Potent",
            source : ["SBFFXIV", 61],
            minlevel : 11,
            description : desc([
                "You double the amount of bombs created during a long rest. Carrying capacity also doubles in this fashion.",
                "Additionally, you may whold two of each specialty bomb.",
                "Basic bombs can be detonated with a 15 ft. radius."
            ])
        },
        "subclassfeature17" : {
            name : "Bomb Launcher",
            source : ["SBFFXIV", 61],
            minlevel : 17,
            description : desc([
                "You've developed a specialized bomb launcher mounted on your forearm, doubling the range of your bombs.",
                "Your bombs deal additional damage equal to your Intelligence modifier."
            ])
        }
    }
};

//Red Mage by u/SaintApathy (must check if it's up to date)
[   // cantrips
    "blade ward", "booming blade", "dancing lights", "fire bolt", "green-flame blade", "gust", "lightning lure", "mage hand", "magic stone", "mold earth", "prestidigitation", "ray of frost", "shocking grasp", "sword burst", "thunderclap", "true strike", "word of radiance",
 
    // 1st level
    "absorb elements", "burning hands", "charm person", "chromatic orb", "cure wounds", "detect magic", "disguise self", "earth tremor", "feather fall", "healing word", "hellish rebuke", "jump", "mage armor", "magic missile", "shield", "thunderwave", "witch bolt", "zephyr strike",
 
    // 2nd level
    "aganazzar's scorcher", "calm emotions", "cloud of daggers", "dragon's breath", "dust devil", "earthbind", "enhance ability", "enthrall", "flame blade", "flaming sphere", "gust of wind", "lesser restoration", "levitate", "magic mouth", "magic weapon", "maximillian's earthen grasp", "misty step", "pyrotechnics", "scorching ray", "shatter", "spike growth", "warding wind", "zone of truth",
 
    //3rd level 
    "blink", "catnap", "counterspell", "dispel magic", "elemental weapon", "erupting earth", "fireball", "fly", "haste", "lightning bolt", "magic circle", "mass healing word", "melf 's minute meteors", "thunder step", "wall of sand", "wind wall", 
 
    //4th level
    "charm monster", "confusion", "dominate beast", "elemental bane", "fire shield", "ice storm", "sickening radiance", "stoneshape", "stoneskin", "storm sphere", "wall of fire", 
 
    //5th level
    "circle of power", "control winds", "dawn", "dominate person", "flame strike", "geas", "immolation", "mass cure wounds", "steel wind strike", "transmute rock", "wall of stone", 
 
    //6th level
    "bones of the earth", "blade barrier", "chain lightning", "eyebite", "flesh to stone heal", "move earth", "wind walk", 
 
    //7th level
    "crown of stars", "delayed blast fireball", "plane shift", "resurrection", "whirlwind", 
 
    //8th level
    "antimagic field", "dominate monster", "earthquake", "glibness", "incendiary cloud", 
 
    //9th level
    "mass heal", "meteor swarm", "power word heal", "true resurrection"
].forEach( function (s) {
    if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("red mage") === -1) SpellsList[s].classes.push("red mage");
});
redmageSpellTable = [  //Object name; note that there is no "var" here, and that the name of this variable is the name of the spellcastingFactor without any numbers in it and all lower case, plus the text "SpellTable"
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0 // this should be all zeroes
        [2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1 // there are 9 entries in each array, one for each spell level
        [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
        [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
        [4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 4
        [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 5
        [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 6
        [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 7
        [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 8
        [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 9
        [4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl10
        [4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl11
        [4, 3, 3, 3, 2, 2, 0, 0, 0], //lvl12
        [4, 3, 3, 3, 2, 2, 1, 0, 0], //lvl13
        [4, 3, 3, 3, 2, 2, 1, 0, 0], //lvl14
        [4, 3, 3, 3, 2, 2, 1, 1, 0], //lvl15
        [4, 3, 3, 3, 3, 2, 1, 1, 0], //lvl16
        [4, 3, 3, 3, 3, 2, 1, 1, 1], //lvl17
        [4, 3, 3, 3, 3, 3, 1, 1, 1], //lvl18
        [4, 3, 3, 3, 3, 3, 2, 1, 1], //lvl19
        [4, 3, 3, 3, 3, 3, 2, 1, 1] //lvl20
]
ClassList["red mage"] = {
    regExpSearch : /red mage/i,
    name : "Red Mage",
    source : ["SBFFXIV", 66],
    primaryAbility : "\n \u2022 Red Mage: Charisma;",
    abilitySave : 6,
    prereqs : "\n \u2022 Red Mage: Charisma 13;",
    improvements :  levels.map( function(n) {
        return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
    }),
    die : 8,
    saves : ["Dex", "Cha"],
    skills : ["\n\n" + toUni("Red Mage") + ": Choose two from Athletics, Acrobatics, Arcana, History, Insight, Persuasion."],
    toolProfs : { 
        primary : ["Two sets of Artisan's tools", 2]
    },
    armor : [
        [true, false, false, false]
    ],
    weapons : [
        [true, false, ["rapier", "shortsword"]]
    ],
    equipment : "Red Mage starting equipment:\n \u2022 Leather armor -or- hide armor;\n \u2022 a rapier;\n \u2022 a spellcasting focus;\n \u2022 an explorer's pack -or- a dungeoneer's pack\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Red Mage Style", ["red mage-sword dancer", "red mage-spell slinger", "red mage-battle rose"]],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor : "redmage1",
    //spellcastingFactor : "1",
    /*spellcastingTable : [ //optional, only if you want to use a non-standard table for spell slot progression and just for this one (sub)class. You can either use the spellcastingTable attribute, or define a new SpellTable in a separate variable (see "Homebrew Syntax - SpellTable.js"). If you are adding multiple classes that use the same table, please add it as a separate variable, for otherwise the spell slots will be added up per individual class level instead of adding the class levels together to find the total amount of spell slots
    // if you add this variable, the number in the spellcastingFactor will be only be used when multiclassing. Note that you still need to enter something in the spellcastingFactor to tell the sheet that its dealing with a spellcaster.
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
        [2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
        [3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
        [4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 3
        [4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 4
        [4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 5
        [4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl 6
        [4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl 7
        [4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl 8
        [4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl 9
        [4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl10
        [4, 3, 3, 3, 2, 1, 0, 0, 0], //lvl11
        [4, 3, 3, 3, 2, 2, 0, 0, 0], //lvl12
        [4, 3, 3, 3, 2, 2, 1, 0, 0], //lvl13
        [4, 3, 3, 3, 2, 2, 1, 0, 0], //lvl14
        [4, 3, 3, 3, 2, 2, 1, 1, 0], //lvl15
        [4, 3, 3, 3, 3, 2, 1, 1, 0], //lvl16
        [4, 3, 3, 3, 3, 2, 1, 1, 1], //lvl17
        [4, 3, 3, 3, 3, 3, 1, 1, 1], //lvl18
        [4, 3, 3, 3, 3, 3, 2, 1, 1], //lvl19
        [4, 3, 3, 3, 3, 3, 2, 1, 1] //lvl20
    ],*/
    spellcastingKnown : {
        cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
    },
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["SBFFXIV", 67],
            minlevel : 1,
            description : desc([
                "I can cast known red mage cantrips/spells, using Charisma as my spellcasting ability",
                "I can use a magically conductive stone in a decorative mount or similar as an arcane focus",
                "I can cast my known red mage spells as rituals if they have the ritual tag"
            ]),
            additional : ["4 cantrips \u0026 2 spells known", "4 cantrips \u0026 3 spells known", "4 cantrips \u0026 4 spells known", "5 cantrips \u0026 5 spells known", "5 cantrips \u0026 6 spells known", "5 cantrips \u0026 7 spells known", "5 cantrips \u0026 8 spells known", "5 cantrips \u0026 9 spells known", "5 cantrips \u0026 10 spells known", "6 cantrips \u0026 11 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 12 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 13 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 14 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known", "6 cantrips \u0026 15 spells known"]
        },
        "ritual casting" : {
            name : "Ritual Casting",
            source : ["SBFFXIV", 68],
            minlevel : 1,
            description : desc([
                "You can cast any Red Mage spell you know as a ritual if that spell has a ritual tag."
            ])
        },
        "flair points" : {
            name : "Flair Points",
            source : ["SBFFXIV", 68],
            minlevel : 1,
            description : desc([
                "At 1st level, you gain access to Flair Points, which power certain Red Mage abilities.",
                "All expended flair points are recovered after a long rest."
            ]),
            action : ["action", ""],
            usages : [1, 2, 3, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
            recovery : "long rest"
        },
        "dual cast" : {
            name : "Dual Cast",
            source : ["SBFFXIV", 68],
            minlevel : 1,
            description : desc([
                "You can spend 1 flair point to change a spell's casting time from 1 action to 1 bonus action.",
                "You may not do so with a spell greater than 4th level."
            ])
        },
        "subclassfeature2" : {
            name : "Combat Style",
            source : ["SBFFXIV", 68],
            minlevel : 2,
            description : desc([
                "Choose a Combat Style and put it in the \"Class\" field",
                "Choose either the Sword Dancer, Spell Slinger, or Battle Rose styles."
            ])
        },
        "extra attack" : {
            name : "Extra Attack",
            source : ["SBFFXIV", 68],
            minlevel : 5,
            description : desc([
                "You can attack twice instead of once whenever you take the Attack action on your turn."
            ])
        },
        "battle flourish" : {
            name : "Battle Flourish",
            source : ["SBFFXIV", 68],
            minlevel : 18,
            description : desc([
                "When you roll initiative, you recover 1d4 flair points."
            ])
        },
        "acceleration" : {
            name : "Acceleration",
            source : ["SBFFXIV", 68],
            minlevel : 20,
            description : desc([
                "You can cast two spells using Dual Cast rather than 1 spell and 1 cantrip.",
                "You may do this once per long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
};
ClassSubList["red mage-sword dancer"] = {
    regExpSearch : /^(?=.*red mage\b)(?=.*\bsword dancer).*$/i,
    subname : "Sword Dancer",
    source : ["SBFFXIV", 68],
    features : {
        "subclassfeature2" : {
            name : "Corps-A-Corps",
            source : ["SBFFXIV", 68],
            minlevel : 2,
            description : desc([
                "Spend 1 flair point and select one target within 30 ft.",
                "Move in a straight line towards the target and take the attack action.",
                "On a successful hit, you deal an additional 1d8 piercing damage.",
                "This movement does not provoke attacks of opportunity."
            ]),
            action: ["action", ""]
        },
        "subclassfeature6" : {
            name : "Heroic Charm",
            source : ["SBFFXIV", 68],
            minlevel : 6,
            description : desc([
                "Spend 1 flair point to reroll any Charisma-based ability check.",
                "You gain proficiency in a Charisma skill of your choice."
            ]),
            skillstxt : "\n\n" + toUni("Heroic Charm") + ": Choose a Charisma skill; gain proficiency"
        },
        "subclassfeature10" : {
            name : "Displacement",
            source : ["SBFFXIV", 68],
            minlevel : 10,
            description : desc([
                "You must target a creature at melee range to use this maneuver.",
                "Spend 1 flair point to leap backwards, landing 30 ft. in a square directly behind you.",
                "You can jump over Medium-sized or smaller creatures; larger creatures stop this movement.",
                "This movement does not provoke attacks of opportunity.",
                "Make a ranged spell attack against the target; it deals 2d8 + Cha force dmg on a hit."
            ]),
            action : ["action", ""]
        },
        "subclassfeature14" : {
            name : "Enchanted Blade",
            source : ["SBFFXIV", 69],
            minlevel : 14,
            description : desc([
                "Spend an hour attuning to a one-handed weapon.",
                "Once attuned, spend 1 flair point to summon the weapon to your hand as an action.",
                "Additionally, spend 1 flair point to deal an add'l 2d8 force damage on a hit.",
                "You must declare you are doing this before your attack roll."
            ]),
            action : ["action", ""]
        }
    }
};
ClassSubList["red mage-spell slinger"] = {
    regExpSearch : /^(?=.*red mage\b)(?=.*\bspell slinger).*$/i,
    subname : "Spell Slinger",
    source : ["SBFFXIV", 69],
    features : {
        "subclassfeature2" : {
            name : "Manification",
            source : ["SBFFXIV", 69],
            minlevel : 2,
            description : desc([
                "As a bonus action, you spend a number of flair points in place of using a spell slot.",
                "A spell slot costs twice its level in flair points."
            ]),
            action : ["bonus action", ""]
        },
        "subclassfeature6" : {
            name : "Charmed I'm Sure",
            source : ["SBFFXIV", 69],
            minlevel : 6,
            description : desc([
                "You may spend 1 flair point to gain advantage on a Charisma ability check."
            ])
        },
        "subclassfeature10" : {
            name : "Quicksilver Casting",
            source : ["SBFFXIV", 69],
            minlevel : 10,
            description : desc([
                "Deal damage to a target with a cantrip and spend 1 flair point, choose one effect:",
                "- gain advantage on a ranged spell attack against the target",
                "- give the target disadvantage on Dexterity saving throws against your spells",
                "  until the end of your turn."
            ])
        },
        "subclassfeature14" : {
            name : "Liquification",
            source : ["SBFFXIV", 69],
            minlevel : 14,
            description : desc([
                "As a bonus action, expend a spell slot and gain back twice the slot's level in flair points."
            ]),
            action: ["bonus action", ""]
        }
    }
};
ClassSubList["red mage-battle rose"] = {
    regExpSearch : /^(?=.*red mage\b)(?=.*\bbattle rose).*$/i,
    subname : "Battle Rose",
    source : ["SBFFXIV", 69],
    features : {
        "subclassfeature2" : {
            name : "Dazzling Diversion",
            source : ["SBFFXIV", 69],
            minlevel : 2,
            description : desc([
                "Spend 1 flair point to distract a target within 5 ft of you.",
                "This grants advantage to allies on weapon attacks against the target.",
                "This effect lasts until the start of your next turn."
            ])
        },
        "subclassfeature6" : {
            name : "In Good Company",
            source : ["SBFFXIV", 69],
            minlevel : 6,
            description : desc([
                "Spend 1 flair point to tutor an ally in the art of appealing to others.",
                "This ally uses your Charisma modifier for Charisma ability checks.",
                "This effect lasts for up to five minutes and recharges after a short rest."
            ]),
            usages : 1,
            recovery: "short rest"
        },
        "subclassfeature10" : {
            name : "Embolden",
            source : ["SBFFXIV", 69],
            minlevel : 10,
            description : desc([
                "Spend 1 flair point: allies within 10 ft. deal an extra 1d8 damage.",
                "This lasts until the end of your next turn."
            ]),
            action: ["action", ""]
        },
        "subclassfeature14" : {
            name : "Follow My Lead",
            source : ["SBFFXIV", 69],
            minlevel : 14,
            description : desc([
                "Spend 2 flair points: move an ally's initiative directly after yours.",
                "The ally's initiative must be lower."
            ]),
            usages : 1,
            recovery : "short rest",
            action : ["bonus action", ""]
        }
    }
};
// astrologian
classList["astrologian"] = {
	regExpSearch: /^(?=.*astrologian).*$/i,
	name: "Astrologian",
	source: ["FFXIVxDnD", 37],
	primaryAbility: "\n \u2022 Astrologian: Wisdom;",
	prereqs: "\n \u2022 Astrologian: Wisdom 13;",
	die: 6,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Wis", "Cha"],
	skills: ["\n\n" + toUni("Astrologian") + ": Choose two from Arcana, Deception, Insight, Persuasion, History, and Religion.", "\n\n" + toUni("Astrologian")],
	toolProfs: [
		primary: ["Divination Deck", 1],
	],
	weapons: [
		[false, false, ["dagger", "dart", "sling", "quarter staff", "light crossbow"]],
		[false, false, []]
	],
	equipment: "Astrologian starting equipment:\n \u2022 a dagger;\n \u2022 a Star Globe;\n \u2022 a Divination Deck;\n \u2022 A explorer's pack -or- an scholar's pack.", 
	subclasses: ["Astrologian Archetype", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 5,
	spellcastingFactor: 
}

/*
==================	CHAPTER 3: SPELLS & APPENDIX  ==================
*/

//Spells
SpellsList["assize"] = {
	name: "Assize",
	nameShort: "Assize",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "Evoc", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "1 a", //1 a, 1 bns, 1 rea, min, h
	range: "60-ft rad", //ft, rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "V,S",
	duration: "Instantaneous", //1 rnd, con, X min or half
	save: "Wis",
	description: "Allies recover 3d8+1d8/SL HP; enemies take 4d4+1d4/SL radiant dmg; save half; can revese die effect before rolling",
	descriptionFull: "An eruption of energy from your body soothes allies and wounds enemies. All allies within 60ft. recover 3d8 hit points and all enemies within 60ft. must make a wisdom saving throw. They take 4d4 radiant damage, and half as much on a successful save. You may reverse which die affect healing and which die deal radiant damage, but must make this distinction before rolling. At Higher Levels When you cast this spell using a spell slot of 6th level or higher, increase the number of die for each effect for each slot level above 5th.",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};
SpellsList[""] = {
	name: "",
	nameShort: "",
	source: ["FFXIVxDnD", 109],
	classes: [],
	level: 5,
	school: "", //Abjur, Conj, Div, Ench, Evoc, Illus, Necro, Trans, Avatar, Awake, Immor, Nomad, Wu Jen
	time: "", //1 a, 1 bns, 1 rea, min, h
	range: "", //X ft, X-d rad, s (metric system convertion automatic when the unit is specified after each number)
	components: "",
	duration: "", //1 rnd, con, X min or half
	save: "",
	description: "",
	descriptionFull: "",
};

//Machinist items
