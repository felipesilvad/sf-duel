import React from 'react';
import {Row,Col, Image} from 'react-bootstrap';
import CharSkillTxtComponent from '../Char/CharSkillTxt';
function BossesItem({boss}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/bosses%2F${boss.id}_sm.png?alt=media`
  const skill1_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/bosses%2F${boss.id}_s1.png?alt=media`
  const skill2_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/bosses%2F${boss.id}_s2.png?alt=media`
  const skill3_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/bosses%2F${boss.id}_s3.png?alt=media`
  const skill4_img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/bosses%2F${boss.id}_s4.png?alt=media`

  if (boss) {
    return (
      <div>
        <div className={`char-stat__bg d-flex h-100 align-items-center`} >
          <Image className='bond-img' src={img} />
          <div className='char-bond__txt ardela'>{boss.title}</div>
        </div>
        <Row className="home-row">
          <Col md={6}>
            <div className='f-spirit-bg m-1 px-2'>
              <div className={`char-skill__bg d-flex pt-2 align-items-center`}>
                <Image src={skill1_img} className={`skill-img-Passive`} />
                <div className='d-flex h-100 align-items-center'>
                  <div className='char-faction__txt ardela'>{boss.skill1.title}</div>
                </div>
              </div>
              <div>
                <CharSkillTxtComponent txt={boss.skill1.txt} />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='f-spirit-bg m-1 px-2'>
              <div className={`char-skill__bg d-flex pt-2 align-items-center`}>
                <Image src={skill1_img} className={`skill-img-Passive`} />
                <div className='d-flex h-100 align-items-center'>
                  <div className='char-faction__txt ardela'>{boss.skill2.title}</div>
                </div>
              </div>
              <div>
                <CharSkillTxtComponent txt={boss.skill2.txt} />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='f-spirit-bg m-1 px-2'>
              <div className={`char-skill__bg d-flex pt-2 align-items-center`}>
                <Image src={skill1_img} className={`skill-img-Passive`} />
                <div className='d-flex h-100 align-items-center'>
                  <div className='char-faction__txt ardela'>{boss.skill3.title}</div>
                </div>
              </div>
              <div>
                <CharSkillTxtComponent txt={boss.skill3.txt} />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='f-spirit-bg m-1 px-2'>
              <div className={`char-skill__bg d-flex pt-2 align-items-center`}>
                <Image src={skill1_img} className={`skill-img-Passive`} />
                <div className='d-flex h-100 align-items-center'>
                  <div className='char-faction__txt ardela'>{boss.skill4.title}</div>
                </div>
              </div>
              <div>
                <CharSkillTxtComponent txt={boss.skill4.txt} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BossesItem;