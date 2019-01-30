var ACTIVATION = [
	'Attack 20%',
	'Attack 15%',
	'Passive',
	'Hit taken 20%',
]

var TYPE = [
	'Battle',
	'Support',
	'Protection',
]

var INCREMENTS = [
	assembleIncrement(1,1), //0 dodge, physresist, pos project, crit chance, phys dmg
	assembleIncrement(2,2), //1 resil, dmg on stun 
	assembleIncrement(3,1), //2 movespeed duration, counter duration
	assembleIncrement(3,3), //3 stamgain, tox fire elec passive
	assembleIncrement(4,1), //4 blind duration
	assembleIncrement(5,0), //5 shield duration
	assembleIncrement(4,4), //6 cold passive, critdmg, combo, healskill, elem resist, maxhealth, regen
	assembleIncrement(4,5), //7 elem dmg, aoe heal
	assembleIncrement(10,10), //8 aggro, shield
	assembleIncrement(15,15), //9 blind, movespeed

	[0,1,1,2,2], //10 neg project
	[1,2,2,2,2], //11 stun
	[1,1,2,2,3], //12 resist, damage
	[2,3,4,6,8], //13 dmg on slow
	[2,4,7,9,12], //14 vamp
	[3,3,4,4,5], //15 root	
]

INCREMENTS[-1]=['','','','','']

var KITS = [
	{'id':48, 'type': 0, 'activation':0, 'percent': false, 'name': 'Fire damage +', 'effect_incr':7, 'duration_incr':-1, 'aoe': 0,},
	{'id':52, 'type': 0, 'activation':0, 'percent':false, 'name': 'Toxic damage +', 'effect_incr': 7, 'duration_incr':-1, 'aoe': 0,},
	{'id':51, 'type': 0, 'activation':0, 'percent':false, 'name': 'Electric damage +', 'effect_incr': 7, 'duration_incr':-1, 'aoe': 0,},
	{'id':50, 'type': 0, 'activation':0, 'percent':false, 'name': 'Cold damage +', 'effect_incr': 7, 'duration_incr':-1, 'aoe': 0,},
	
	{'id':12, 'type': 0, 'activation':2, 'percent':true, 'name': 'Fire damage +', 'effect_incr':3, 'duration_incr':-1, 'aoe':'',},
	{'id':35, 'type': 0, 'activation':2, 'percent':true, 'name': 'Toxic damage +', 'effect_incr': 3, 'duration_incr':-1, 'aoe': 0,},
	{'id':31, 'type': 0, 'activation':2, 'percent':true, 'name': 'Electric damage +', 'effect_incr': 3, 'duration_incr':-1, 'aoe': 0,},
	{'id':34, 'type': 0, 'activation':2, 'percent':true, 'name': 'Cold damage +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},

	{'id':2, 'type': 0, 'activation':2, 'percent':true, 'name': 'Physical damage +', 'effect_incr': 0, 'duration_incr':-1, 'aoe': 0,},
	{'id':6, 'type': 0, 'activation':2, 'percent':true, 'name': 'Combo damage +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':37, 'type': 0, 'activation':2, 'percent':true, 'name': 'Damage +', 'effect_incr': 12, 'duration_incr':-1, 'aoe': 0,},
	
	{'id':23, 'type': 0, 'activation':2, 'percent':true, 'name': 'Critical damage +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':42, 'type': 0, 'activation':2, 'percent':true, 'name': 'Critical chance +', 'effect_incr': 0, 'duration_incr':-1, 'aoe': 0,},
	
	{'id':99, 'type': 0, 'activation':2, 'percent':true, 'name': 'Bonus damage on stunned targets +', 'effect_incr': 1, 'duration_incr':-1, 'aoe': 0,},
	{'id':100, 'type': 0, 'activation':2, 'percent':true, 'name': 'Bonus damage on slowed targets +', 'effect_incr': 13, 'duration_incr':-1, 'aoe': 0,},
	
	{'id':40, 'type': 1, 'activation':2, 'percent':true, 'name': 'Blind +', 'effect_incr': 9, 'duration_incr':4, 'aoe': 0,},
	{'id':44, 'type': 1, 'activation':2, 'percent':false, 'name': 'Heal +', 'effect_incr':7, 'duration_incr':-1, 'aoe': 4,},
	{'id':54, 'type': 1, 'activation':2, 'percent':true, 'name': 'Move speed -', 'effect_incr':9, 'duration_incr':2, 'aoe': 0,},
	
	{'id':53, 'type': 1, 'activation':0, 'percent':false, 'name': 'Projection +', 'effect_incr':0, 'duration_incr':-1, 'aoe': -2,},
	{'id':-53, 'type': 1, 'activation':0, 'percent':false, 'name': 'Projection -', 'effect_incr':10, 'duration_incr':-1, 'aoe': -2,},
	{'id':95, 'type': 1, 'activation':0, 'percent':false, 'name': 'Root', 'effect_incr':-1, 'duration_incr':15, 'aoe': 0,},
	{'id':19, 'type': 1, 'activation':0, 'percent':false, 'name': 'Stun', 'effect_incr':-1, 'duration_incr':11, 'aoe': 0,},
	{'id':16, 'type': 1, 'activation':1, 'percent':false, 'name': 'Vampiric +', 'effect_incr':14, 'duration_incr':-1, 'aoe': 0,},
	{'id':58, 'type': 1, 'activation':2, 'percent':true, 'name': 'Healing skill +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':81, 'type': 1, 'activation':2, 'percent':true, 'name': 'Stamina gain +', 'effect_incr': 3, 'duration_incr':-1, 'aoe': 0,},

	{'id':60, 'type': 2, 'activation':3, 'percent':false, 'name': 'Counter-attack', 'effect_incr':-1, 'duration_incr':2, 'aoe': 0,},
	{'id':9, 'type': 2, 'activation':3, 'percent':false, 'name': 'Shield +', 'effect_incr':8, 'duration_incr':2, 'aoe': 0,},
	
	{'id':7, 'type': 2, 'activation':2, 'percent':true, 'name': 'Resistance +', 'effect_incr': 12, 'duration_incr':-1, 'aoe': 0,},
	{'id':8, 'type': 2, 'activation':2, 'percent':true, 'name': 'Physical resistance +', 'effect_incr': 0, 'duration_incr':-1, 'aoe': 0,},
	{'id':25, 'type': 2, 'activation':2, 'percent':true, 'name': 'Fire resistance +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':39, 'type': 2, 'activation':2, 'percent':true, 'name': 'Toxic resistance +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':3, 'type': 2, 'activation':2, 'percent':true, 'name': 'Electric resistance +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':38, 'type': 2, 'activation':2, 'percent':true, 'name': 'Cold resistance +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	
	{'id':76, 'type': 2, 'activation':2, 'percent':true, 'name': 'Resilience +', 'effect_incr': 1, 'duration_incr':-1, 'aoe': 0,},
	{'id':13, 'type': 2, 'activation':2, 'percent':true, 'name': 'Regeneration +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':49, 'type': 2, 'activation':2, 'percent':true, 'name': 'Aggro bonus +', 'effect_incr': 8, 'duration_incr':-1, 'aoe': 0,},
	{'id':30, 'type': 2, 'activation':2, 'percent':true, 'name': 'Dodge +', 'effect_incr': 0, 'duration_incr':-1, 'aoe': 0,},
	{'id':18, 'type': 2, 'activation':2, 'percent':false, 'name': 'Max health +', 'effect_incr': 6, 'duration_incr':-1, 'aoe': 0,},
	{'id':78, 'type': 2, 'activation':2, 'percent':true, 'name': 'Bonus recieved heal +', 'effect_incr': 3, 'duration_incr':-1, 'aoe': 0,},
]

	
function assembleIncrement(starting,increment) {
	incr = [];
	for (i = 0; i < 5; i++) {
		incr.push(starting+i*increment);
	}
    return incr;
}

function parseKitData(kit_data, quality){
	var id = kit_data['id']	
	var type = TYPE[kit_data['type']];
	var activation = ACTIVATION[kit_data['activation']];
	var effect_value = INCREMENTS[kit_data['effect_incr']][quality];
	var duration_value = INCREMENTS[kit_data['duration_incr']][quality];
	if (kit_data['percent']){
		percent = '%';
	}else{
		percent='';
	}
	
	if (kit_data['aoe']!=0){
		if (kit_data['aoe'] == -2){
			var aoe ='m'
		}else{
			var aoe = ' on an '+kit_data['aoe'] +'m area';
		};
	}else{
		var aoe='';
	}
	
	if (kit_data['duration_incr']!=-1){
		var duration = ' for '+duration_value +'s';
	}else{
		var duration='';
	}
	parsed = {'type':type+ ' Kit', 'name': '[' +activation+'] ' +kit_data['name'], 'effect': effect_value + percent + aoe + duration, 'id': id}
	
	return(parsed);
}