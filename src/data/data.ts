export interface EffectOption {
  readonly title: string;
  readonly color: string;
  readonly img?: boolean;
  readonly desc?: string;
}

export const effectOptions: readonly EffectOption[] = [
  {color:"orange", title:"Armor Break", img:true, desc: "Decreases DEF by 3% for 15s. Stacks up to 10 times."},
  {color:"orange", title:"Black Rose Mark", img:true, desc: "When a target has |Black Rose Mark|, 20% of the healing it receives will be transferred to Charming Dudley. Lasts 12s."},
  {color:"orange", title:"Bleed", img:true, desc: "Loses HP equal to 1% of max HP per second, up to 10% of ATK. The effect lasts for 10s and stack up to 3 times."},
  {color:"orange", title:"Burn", img:true, desc: "Target loses HP equal to 7% of ATK every second for 15s. Stacks up to 20 times."},
  {color:"orange", title:"Charm", img:true, desc: "The target attacks its allies and cannot use active skills."},
  {color:"orange", title:"Control", img:false, desc: "Includes Silence, Stun, Charm, and Taunt effects."},
  {color:"orange", title:"Dazzle", img:false, desc:"Removes 1x when taking DMG, additionally taking True DMG equal to 40% of Fashion Sakura's ATK. Stacks up to 10 times. When Fashion Sakura takes fatal DMG, all Dazzle stacks expire and are removed."},
  {color:"orange", title:"Delusion", img:false, desc:"The target takes True DMG equal to 30% of ATK./n Removes the |Weaken| effect from the enemy target and inflicts |Stun|/n The duration of the |Stun| scales with the number of |Weaken| stacks removed"},
  {color:"orange", title:"Destiny Tarot", img:false, desc:"Increases DMG taken by 5%. Target explodes if it takes |Soul| DMG, using up 1 stack and dealing area DMG equal to 120% ATK. There is also a 25% |base chance| of inflicting |Weaken|. Stacks up to 3 times."},
  {color:"orange", title:"Detonation", img:false, desc:"Causes |Flame| DMG equal to 30% of ATK and removes all Burn debuffs. Each stacks of Burn raises DMG by 100%."},
  {color:"orange", title:"Dragonrage Curse", img:false},
  {color:"orange", title:"Duel", img:false},
  {color:"orange", title:"Execute", img:false, desc: "Deals DMG equal to 300% of ATK. Cannot trigger Crits. If the target enemy is not knocked out, the fighter's ATK is reduced by 30% for 15s./n When the target is a boss enemy, this skill won't trigger the ATK reduction effect, and its DMG is increased to 600% of ATK."},
  {color:"orange", title:"Flame", img:false},
  {color:"orange", title:"Flame Penetration", img:false, desc:"Each stack reduces DEF by 0.5% and increases |Flame| DMG taken by 15%. Effect lasts 15s and stacks up to 50 times. Cannot be dispelled."},
  {color:"orange", title:"Flame Vulnerability", img:false, desc:"Increases Flame DMG taken by 10% for 10s."},
  {color:"orange", title:"Grave Injury", img:true, desc: "Decreases healing received by 10% and increases |Bleed| DMG by 10% for 10s. Stacks up to 5 times."},
  {color:"orange", title:"Guardian Mark", img:false, desc: "When taking DMG, this unit has a 20% chance to receive True |Soul| DMG equal to 60% of Decapre's ATK. Lasts 8s."},
  {color:"orange", title:"Hatred Mark", img:false, desc: "DMG dealt to the marked unit is increased by 20% and ignores 20% Dodge. Lasts 12s."},
  {color:"orange", title:"Hinder", img:false, desc: "DMG dealt to the marked unit is increased by 20% and ignores 20% Dodge. Lasts 12s."},
  {color:"orange", title:"Love Mark", img:false, desc: "Cannot move proactively."},
  {color:"orange", title:"Joker", img:false},
  {color:"orange", title:"Silence", img:true, desc:"Cannot use skills proactively"},
  {color:"orange", title:"Soul", img:false},
  {color:"orange", title:"Stun", img:true, desc:"Cannot move, attack, or use active skills."},
  {color:"orange", title:"Sublime Bleed", img:true, desc: "Subject loses 2% HP every second, up to 20% ATK worth in total. Effect lasts 10s and stacks up to 3 times. (Sublime Bleed is regarded as a |Bleed| o effect)"},
  {color:"orange", title:"Thunder", img:false},
  {color:"orange", title:"Taunt", img:true, desc:"Increases DMG Resist by 30% wiTaunt: Target is forced to attack the taunting enemy.th DMG Immunity during the first 2s."},
  {color:"orange", title:"Thunder Vulnerability", img:false, desc:"Increases Thunder DMG taken by 10% for 8s."},
  {color:"orange", title:"Weaken", img:true,desc: "Decreases ATK by 5% for 15s. Stacks up to 10 times."},
  {color:"blue", title:"Armor Energy", img:true, desc:"Increases DMG and Effect Accuracy by 5%. Stacks up to 5 times."},
  {color:"blue", title:"Ashura", img:true},
  {color:"blue", title:"base chance", img:false, desc:"Affected by Effect Accuracy and Effect Resist."},
  {color:"blue", title:"Conquer", img:true, desc:"Increases Combo 2 and Trigger Skill DMG by 40% Stacks up to 3 times."},
  {color:"blue", title:"Dazzling Blossom", img:true, desc: "Increases DMG Resist by 25% and healing received by 15% for 12s."},
  {color:"blue", title:"Dazzling Sakura", img:false, desc: "Increases DMG Resist by 50% and healing received by 30% for 12s."},
  {color:"blue", title:"Demon Energy", img:false},
  {color:"blue", title:"Demon Power", img:false, desc: "Each stack increases DMG by 5% and Parry Rate by 12%. Stacks up to 8 times."},
  {color:"blue", title:"Desperation", img:true, desc: "Increases DMG Resist by 30% with DMG Immunity during the first 2s."},
  {color:"blue", title:"DMG Resist UP", img:true},
  {color:"blue", title:"DMG Sharing", img:true, desc: "30% of DMG receiving is shared by E. Honda."},
  {color:"blue", title:"Dodge UP", img:true},
  {color:"blue", title:"Electrified", img:false, desc: "Counterattacks when getting hit, dealing |Thunder| DMG equal to 20% of ATK per stack. Performing a counterattack has a 15% chance to consume 1x Electrified. Electrified lasts 15s, stacks up to 10 times, and cannot be dispelled."},
  {color:"blue", title:"Extreme", img:true, desc: "The ultimate Budo. Accumulates power to unleash Shin Shun Goku Satsu. Stacks up to 3 times."},
  {color:"blue", title:"Extreme Impact", img:false},
  {color:"blue", title:"Feng Shui Engine", img:false, desc:"Converts all DMG into |Soul| type. Upon unleashing a Combo, Juri creates a Shadow clone that imitates Juri's attacks, dealing 60% of the original DMG. After using 3 active skills, |Feng Shui Engine| expires and explodes. During the explosion, Juri is immune to |Control| effects but cannot perform any active skills."},
  {color:"blue", title:"Imperator", img:false, desc:"Take 75% less DMG and gain |Super Armor| for 55, then recover 40% HP when the effect ends. Cannot be dispelled."},
  {color:"blue", title:"Infernal King", img:false, desc:"Increases DMG by 30%. Cannot receive any healing from others."},
  {color:"blue", title:"Life Tarot", img:false, desc:"Reduces DMG taken by 15%. Target explodes if it takes a ranged attack, using up 1 stack and restoring HP equal to 60% ATK to allies in the area. Stacks up to 3 times."},
  {color:"blue", title:"Penance", img:true, desc:"Each stack increases |Flame| DMG and Dodge by 25% for 8s. Stacks up to 10 times."},
  {color:"blue", title:"Poison", img:false, desc:"Reduce SPD by 8. When using a skill, lose 1% of max HP, capped at 80% of the poisoner's ATK. Stacks up to 10 times. Lasts 15s."},
  {color:"blue", title:"Potato", img:true, desc:"Each stack increases the amount of healing received by 4%. Cannot be dispelled and stacks up to 5 times."},
  {color:"blue", title:"Qi Flow", img:false, desc:"Increase DEF by 100+6% for 30s. Stacks up to 5 times."},
  {color:"blue", title:"Qi Focus", img:false, desc:"Increases DMG by 4% for 30s."},
  {color:"blue", title:"Saber", img:true, desc:"Each stack allows the fighter's attacks to ignore 7% of enemy DEF. Stacks up to 5 times and cannot be dispelled."},
  {color:"blue", title:"Sakura Rain", img:false, desc:"Removes 1x Sakura Rain when taking DMG, healing all teammates by 25% of the fighter's ATK. Stacks up to 10 times."},
  {color:"blue", title:"Satsui no Iki", img:false, desc:"(Effects described here apply only to Evil Ryu's |Satsui no Iki|)/nFighter takes 10% less |Soul| DMG and 5% less DMG for all other types of DMG. Their Pressure is also increased by 10%. |Satsui no Iki| lasts 30s and can stack up to 10 times."},
  {color:"blue", title:"Sharpness", img:false},
  {color:"blue", title:"Shock", img:true,desc: "Target takes |Thunder| DMG equal to 10% of ATK for each attack received for 6s. Stacks up to 10 times."},
  {color:"blue", title:"Steel Thunder", img:false,desc: "Reduces DMG received by 3%. Increases Crit Resist by 3%. When attacked, reduce DMG taken by 3% of base ATK. Lasts until the battle ends. Stacks up to 10 times."},
  {color:"blue", title:"Super Armor", img:true,desc: "Cannot be knocked back."},
  {color:"blue", title:"Void Power", img:false,desc: "Increases DMG dealt by 5%. Increases Crit DMG by 5%. When attacking, increase DMG dealt by 5% of base ATK. Lasts until the battle ends. Stacks up to 10 times"},
  {color:"blue", title:"White Eye", img:false,desc: "Gains a 5% DEF Bonus and a 3% ATK Bonus for 10s. Stacks up to 5 times."},
  {color:"blue", title:"Wildfire", img:false,desc: "When dealing DMG, 35% chance to remove 1x Wildefire and deals additional Flame DMG equal to 310% of ATK. Stacks up to 12 times."},
]

export interface FactionOption {
  readonly value: string;
  readonly label: string;
}

export const factionOptions: readonly FactionOption[] = [
  { value: '', label: 'Any' },
  { value: 'Master', label: 'Master' },
  { value: 'Infernal', label: 'Infernal' },
  { value: 'Thunder', label: 'Thunder' },
  { value: 'Wind', label: 'Wind' },
  { value: 'Flame', label: 'Flame' },
]