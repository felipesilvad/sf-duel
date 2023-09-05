from bs4 import BeautifulSoup
import requests
import time
import gspread
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from storage import storage

effects = ["Armor Break",
"Black Rose Mark",
"Bleed",
"Bloody Wings - Feng Shui Engine",
"Burn",
"Charm",
"Crismon Scorch",
"Control",
"Dazzle",
"Delusion",
"Destiny Tarot",
"Detonation",
"Dragonrage Curse",
"Duel",
"Execute",
"Fate Divination:",
"Flame",
"Flame Penetration",
"Flame Vulnerability",
"Grave Injury",
"Guardian Mark",
"Hatred Mark",
"Hinder",
"Love Mark",
"Joker",
"Life Divination",
"Life Steal Rate",
"Silence",
"Soul",
"Stun",
"Sublime Bleed",
"Thunder",
"Taunt",
"Thunder Vulnerability",
"Weaken",
"Armor Energy",
"Ashura",
"base chance",
"Conquer",
"Dazzling Blossom",
"Dazzling Sakura",
"Demon Energy",
"Demon Power",
"Desperation",
"DMG Resist UP",
"DMG Sharing",
"Dodge UP",
"Electrified",
"Extreme",
"Extreme Impact",
"Feng Shui Engine",
"Imperator",
"Infernal King",
"Life Tarot",
"Penance",
"Poison",
"Potato",
"Qi Flow",
"Qi Focus",
"Saber",
"Sakura Rain",
"Satsui no Iki",
"Sharpness",
"Shock",
"Sharpness",
"Steel Thunder",
"Super Armor",
"Void Power",
"White Eye",
"Wildfire",
]

cred = credentials.Certificate("firebaseKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
gc = gspread.service_account(filename='sheetsKey.json')

def setFS(id):
  sh = gc.open('SFDchars')
  ws = sh.worksheet(id)
  title = ws.acell('A1').value
  stats_list = ws.col_values(2)
  stats = stats_list[slice(1,1000)]
  unlock = ws.acell('C2').value
  skill_list = ws.col_values(1)
  skills = skill_list[slice(1,1000)]

  doc_ref = db.collection(u'fs').document(id)
  doc_ref.set({
    u'title': title,
    u'stats': stats,
    u'unlock': unlock,
    u'skills': skills,
  })
  print(title, 'added')

def setChar(id):
  sh = gc.open('SFDchars')
  ws = sh.worksheet(id)
  title = ws.acell('A1').value
  faction = ws.acell('A2').value
  f_type = ws.acell('A3').value
  f_class = ws.acell('A4').value
  f_style = ws.acell('A5').value

  time.sleep(1)
  
  rank = ws.acell('C1').value
  power = ws.acell('C2').value
  HP = ws.acell('C3').value
  ATK = ws.acell('C4').value
  DEF = ws.acell('C5').value
  SPD = ws.acell('C6').value

  sub_title = ws.acell('G1').value
  desc = ws.acell('G2').value
  
  time.sleep(1)
  

  super_title = ws.acell('B8').value
  super_target = ws.acell('B9').value
  super_lv1 = ws.acell('B10').value
  super_lv2 = ws.acell('B11').value
  super_lv3 = ws.acell('B12').value
  super_effects = []

  passive_title = ws.acell('D8').value
  passive_lv1 = ws.acell('D9').value
  passive_lv2 = ws.acell('D10').value
  passive_lv3 = ws.acell('D11').value
  passive_lv4 = ws.acell('D12').value
  passive_lv5 = ws.acell('D13').value
  passive_effects = []

  combo1_title = ws.acell('B14').value
  combo1_position = ws.acell('B15').value
  combo1_target = ws.acell('B16').value
  combo1_lv1 = ws.acell('B17').value
  combo1_lv2 = ws.acell('B18').value
  combo1_lv3 = ws.acell('B19').value
  combo1_lv4 = ws.acell('B20').value
  combo1_effects = []
  
  time.sleep(1)
  

  combo2_title = ws.acell('D14').value
  combo2_position = ws.acell('D15').value
  combo2_target = ws.acell('D16').value
  combo2_lv1 = ws.acell('D17').value
  combo2_lv2 = ws.acell('D18').value
  combo2_lv3 = ws.acell('D19').value
  combo2_lv4 = ws.acell('D20').value
  combo2_effects = []

  time.sleep(1)


  bond_char1 = ws.acell('B22').value
  bond_char1A = ws.acell('B23').value
  bond_char1S = ws.acell('B24').value
  bond_char1SS = ws.acell('B25').value
  bond_char2 = ws.acell('B26').value
  bond_char2A = ws.acell('B27').value
  bond_char2S = ws.acell('B28').value
  bond_char2SS = ws.acell('B29').value
  bond_char3 = ws.acell('B30').value
  bond_char3A = ws.acell('B31').value
  bond_char3S = ws.acell('B32').value
  bond_char3SS = ws.acell('B33').value
  bond_char4 = ws.acell('B34').value
  bond_char4A = ws.acell('B35').value
  bond_char4S = ws.acell('B36').value
  bond_char4SS = ws.acell('B37').value
  
  time.sleep(1)
  

  f_spirit_title = ws.acell('G8').value
  f_spirit_skill = ws.acell('G9').value
  f_spirit0 = ws.acell('G10').value
  f_spirit5 = ws.acell('G11').value
  f_spirit10 = ws.acell('G12').value
  f_spirit20 = ws.acell('G13').value
  f_spirit30 = ws.acell('G14').value
  f_spirit_power = ws.acell('G15').value
  f_spirit_desc = ws.acell('G16').value
  values_list = ws.col_values(5)
  f_spirit_status = values_list[slice(8,1000)]
  f_spirit_effects = []

  for effect in effects:
    if effect in super_lv1 or effect in super_lv2 or effect in super_lv3:
      super_effects.append(effect)
    if effect in passive_lv1 or effect in passive_lv2 or effect in passive_lv3 or effect in passive_lv4:
      passive_effects.append(effect)
    if effect in combo1_lv1 or effect in combo1_lv2 or effect in combo1_lv3:
      combo1_effects.append(effect)
    if effect in combo2_lv1 or effect in combo2_lv2 or effect in combo2_lv3:
      combo2_effects.append(effect)
    if effect in f_spirit0 or effect in f_spirit5 or effect in f_spirit10 or effect in f_spirit20 or effect in f_spirit30:
      f_spirit_effects.append(effect)

  doc_ref = db.collection(u'chars').document(id)
  doc_ref.set({
    u'title': title, u'sub_title': sub_title, u'desc': desc,
    u'faction': faction,
    u'f_type': f_type,
    u'f_class': f_class,
    u'f_style': f_style,
    u'rank': rank,
    u'power': power,
    u'HP': HP,
    u'ATK': ATK,
    u'DEF': DEF,
    u'SPD': SPD,
    u'super': {
      u'title': super_title,
      u'target': super_target,
      u'lv1': super_lv1,
      u'lv2': super_lv2,
      u'lv3': super_lv3,
      u'effects':super_effects
    },
    u'passive': {
      u'title': passive_title,
      u'lv1': passive_lv1,
      u'lv2': passive_lv2,
      u'lv3': passive_lv3,
      u'lv4': passive_lv4,
      u'lv5': passive_lv5,
      u'effects':passive_effects
    },
    u'combo1': {
      u'title': combo1_title,
      u'position': combo1_position,
      u'target': combo1_target,
      u'lv1': combo1_lv1,
      u'lv2': combo1_lv2,
      u'lv3': combo1_lv3,
      u'lv3': combo1_lv3,
      u'lv4': combo1_lv4,
      u'effects':combo1_effects
    },
    u'combo2': {
      u'title': combo2_title,
      u'position': combo2_position,
      u'target': combo2_target,
      u'lv1': combo2_lv1,
      u'lv2': combo2_lv2,
      u'lv3': combo2_lv3,
      u'lv4': combo2_lv4,
      u'effects':combo2_effects
    },
    u'bonds_char1': [bond_char1, bond_char1A, bond_char1S, bond_char1SS],
    u'bonds_char2':  [bond_char2, bond_char2A, bond_char2S, bond_char2SS],
    u'bonds_char3': [bond_char3, bond_char3A, bond_char3S, bond_char3SS],
    u'bonds_char4':  [bond_char4, bond_char4A, bond_char4S, bond_char4SS],
    u'f_spirit': {
      u'title': f_spirit_title,
      u'skill': f_spirit_skill,
      u'txt0': f_spirit0,
      u'txt5': f_spirit5,
      u'txt10': f_spirit10,
      u'txt20': f_spirit20,
      u'txt30': f_spirit30,
      u'power': f_spirit_power,
      u'desc': f_spirit_desc,
      u'status': f_spirit_status,
      u'effects':f_spirit_effects
    }
  })
  print(title, 'added')

setChar('0053')
# setFS('FS010')