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
	equipment: "Dancer starting equipment:\n \u2022(a) two daggers or (b) two chakrams\n \u2022a (a) whip or (b) scimitar\n \u2022a set of bracelets and anklets for spell casting\n \u2022a set of clothes\n \u2022a (a) costume or (b) light armour\n \u2022(a) an explorer's pack or (b) a entertainer's pack",
	subclasses: ["Dancer Archetyoe", []],
	attacks: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	abilitySave: 6,
	spellcastingFactor: 2,
	//spells missing
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
}
AddSubClass("dancer", "paragon",
	{
		regExpSearch: /^(?=.*paragon).*$/i,
		subname: "Paragon",
		fullname: "Paragon",
		source: ["FFXIVxDnD", 58],
		abilitySave: 6,
		features: {
			"inspring salsa": {
				name: "Inspring Salsa",
				source: ["FFXIVxDnD", 59],
				minlevel: 3,
				description: "",
				action: ["bonus action", ""]
			}
		}
	}
);