import React, { useState, useEffect } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import db from '../../firebase';
import {Image,Col, Row} from 'react-bootstrap';
import YouTube from 'react-youtube';

function PuzzlesList() {
  const [puzzles, setPuzzles] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect (() => {
    onSnapshot(query(collection(db, `/puzzles`)), (snapshot) => {
      setPuzzles(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    });
    setLoading(false)
  }, [])

  if (!loading) {
    return (
      <div>
        <h3 className='ardela text-center'>Street Fighter Duel Puzzles Solved</h3>
        {puzzles.map((puzzle) => (
          puzzle.event&&(
            <>
              <div className='d-flex h-100 align-items-center'>
                {puzzle.event_img&&(<Image className='boss-event-img' src={puzzle.event_img} />)}
                <h5 className='ardela'>{puzzle.event}</h5>
              </div>
              <Row>
                {puzzle.puzzles.map((SinglePuzzle) => (
                  <Col key={puzzle.id} md={6}>
                    <div className='f-spirit-bg p-2 my-1'>
                      <div className={`char-stat__bg d-flex mb-1 h-100 align-items-center`} >
                        <div className='fs__title ardela px-1'>{SinglePuzzle.title}</div>
                      </div>
                      <div>
                        {SinglePuzzle.video_id&&(
                          <YouTube className="puzzle-video"  videoId={SinglePuzzle.video_id}/>
                        )}
                      </div>
                  </div>
                  </Col>
                ))}
              </Row>
              
            </>
          )
        ))}
      </div>
    )
  } else {
    return (
      <div className='mt-2 d-flex flex-wrap justify-content-around desktop-list-row'>
        <div class="mt-2 spinner-border color-highlight" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    )
  }
  ;
}

export default PuzzlesList;