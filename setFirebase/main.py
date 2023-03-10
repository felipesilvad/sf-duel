from bs4 import BeautifulSoup
import requests
import time
import gspread
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from storage import storage

cred = credentials.Certificate("firebaseKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
gc = gspread.service_account(filename='sheetsKey.json')
def setChar(id):
  sh = gc.open('SFDchars')
  ws = sh.worksheet(id)
  title = ws.acell('A1').value
  faction = ws.acell('A2').value
  f_type = ws.acell('A3').value
  f_class = ws.acell('A4').value
  f_style = ws.acell('A5').value

  rank = ws.acell('C1').value
  power = ws.acell('C2').value
  HP = ws.acell('C3').value
  ATK = ws.acell('C4').value
  DEF = ws.acell('C5').value
  SPD = ws.acell('C6').value

  sub_title = ws.acell('G1').value
  desc = ws.acell('G2').value

  super_title = ws.acell('B8').value
  super_target = ws.acell('B9').value
  super_lv1 = ws.acell('B10').value
  super_lv2 = ws.acell('B11').value
  super_lv3 = ws.acell('B12').value

  passive_title = ws.acell('D8').value
  passive_lv1 = ws.acell('D9').value
  passive_lv2 = ws.acell('D10').value
  passive_lv3 = ws.acell('D11').value
  passive_lv4 = ws.acell('D12').value

  combo1_title = ws.acell('B14').value
  combo1_position = ws.acell('B15').value
  combo1_target = ws.acell('B16').value
  combo1_lv1 = ws.acell('B17').value
  combo1_lv2 = ws.acell('B18').value
  combo1_lv3 = ws.acell('B19').value

  combo2_title = ws.acell('D14').value
  combo2_position = ws.acell('D15').value
  combo2_target = ws.acell('D16').value
  combo2_lv1 = ws.acell('D17').value
  combo2_lv2 = ws.acell('D18').value
  combo2_lv3 = ws.acell('D19').value

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

  doc_ref = db.collection(u'chars').document(id)
  doc_ref.set({
    u'title': title,
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
    },
    u'passive': {
      u'title': passive_title,
      u'lv1': passive_lv1,
      u'lv2': passive_lv2,
      u'lv3': passive_lv3,
      u'lv4': passive_lv4,
    },
    u'combo1': {
      u'title': combo1_title,
      u'position': combo1_position,
      u'target': combo1_target,
      u'lv1': combo1_lv1,
      u'lv2': combo1_lv2,
      u'lv3': combo1_lv3,
    },
    u'combo2': {
      u'title': combo2_title,
      u'position': combo2_position,
      u'target': combo2_target,
      u'lv1': combo2_lv1,
      u'lv2': combo2_lv2,
      u'lv3': combo2_lv3,
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
    }
  })
  print(title, 'added')

setChar('0008')