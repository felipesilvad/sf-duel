import React from 'react';
import {Col,Image} from 'react-bootstrap';
import CharSkillTxtComponent from '../Char/CharSkillTxt';

function BossesItem({fs}) {
  const img = `https://firebasestorage.googleapis.com/v0/b/sfduel-74b69.appspot.com/o/FS%2F${fs.id}.png?alt=media`

  if (fs) {
    return (
      <Col key={fs.id} md={4}>
        <div className='f-spirit-bg p-2 my-1'>
          <div className={`char-stat__bg d-flex h-100 align-items-center`} >
            <Image className='skill-img-Passive' src={img} />
            <div>
              <div className='fs__title ardela'>{fs.title}</div>
              {fs.unlock}
            </div>
          </div>
          <div>
            <div className='d-flex justify-content-around roboto mt-2'>
              {fs.stats.map(stat => (<b>{stat}</b>))}
            </div>
            <hr className='my-2' />
            {fs.skills.map(skill => (
              <CharSkillTxtComponent txt={skill} />
            ))}
          </div>
        </div>
      </Col>
    );
  }
}

export default BossesItem;