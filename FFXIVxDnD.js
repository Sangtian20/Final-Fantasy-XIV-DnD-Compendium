var iFileName = "Final Fantasy XIV D&D Compendium.js";

SourceList["FFXIVxDnD"] = {
	name: "Final Fantasy XIV D&D Compendium",
	abbreviation: "FFXIVxDnD",
	group: "Homebrew",
	url: "",
	date: ""
};

//Au ra
RaceList["au ra"] = {
	regExpSearch : /^(?=.*au)(?=.*ra).*$/i,
	name: "Au ra",
	sortname: "Au ra",
	source: ["FFXIVxDnD", 5],
	plural: "Au ri",
	size: 3,
	speed: {
		walk: {spd: 30, enc: 20}
	},
	languageProfs: ["Common", "Auri"],
	age: " reach adulthood around the age of 16 and live around 80 years",
	height: " males range anywhere from 6 and a half to 7 feet tall with a lean build dwarfing the females who rarely grow taller than 5 feet",
	weight: "",
	heightMetric: " males range anywhere from 6 and a half to 7 feet tall with a lean build dwarfing the females who rarely grow taller than 5 feet",
	weightMetric: "",
	improvements: "",
	scores: [0, 0, 0, 0, 0, 2], //[Str, Dex, Con, Int, Wis, Cha]
	trait: "",
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
AddRacialVariant(
	"au ra",
	"xaela au ra",
	{
		regExpSearch : /^(?=.*xaela)(?=.*au)(?=.*ra).*$/i,
		name: "Xaela Au ra",
		source: ["FFXIVxDnD", 5],
		plural: "Xaela Au ri",
		improvements: "Xaela Au ra: +2 Wisdom, +1 Strength",
		scores: [1, 0, 0, 0, 2, 0],
		skills: ["Survival", "Perception"],
		trait: "Xaela Au ra (+2 Wisdom, +1 Strength)\nCranial Horns: you gain proficiency in the perception skill\nScaled Bodies: when unarmored, your AC is equal to 11 + your dexterity modifier\nNomadic Instincts: you gain proficiency in the survival skill\nSavage Attacks: when you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
	}
);
AddRacialVariant(
	"au ra",
	"raen au ra",
	{
		regExpSearch : /^(?=.*raen)(?=.*au)(?=.*ra).*$/i,
		name: "Raen Au ra",
		source: ["FFXIVxDnD", 5],
		plural: "Raen Au ri",
		improvements: "Raen Au ra: +2 Wisdom, +1 Charisma",
		scores: [0, 0, 0, 0, 2, 1],
		skills: ["Persuasion", "Perception"],
		savetxt: {
			adv_vs: ["charmed"]
		},
		trait: "Raen Au ra (+2 Wisdom, +1 Strength)\nCranial Horns: you gain proficiency in the perception skill\nScaled Bodies: when unarmored, your AC is equal to 11 + your dexterity modifier\nPolite society: you gain proficiency in the persuasion skill\nUnwavering loyalty: you have advantage on saves against being charmed."
	}
);

//Elezen

//Dancer
ClassList["dancer"] = {
	regExpSearch: /^(?=.*dancer).*$/i,
	name: "Dancer",
	source: ["HB", 55],
	primaryAbility: "\n \u2022 Dancer: Dexterity;",
	prereqs: "\n \u2022 MyClass: Dexterity 13;",
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
}