import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MonsterData } from './MonsterData';
import './MonsterFilter.css';

const MonsterDetail = () => {
  const { id } = useParams();

  const monster = MonsterData.find((m) => m.id === parseInt(id, 10));

  if (!monster) {
    return <div>查無資料</div>;
  }

  return (
    
    <div className="monster-detail">
      <h2><Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} className="fa-icon" />
      </Link> {monster.name}</h2>
      <img
        src={`https://tinghan33704.com/tos_tool_data/img/monster/${monster.id}.png`}
        alt={monster.name}
      />
      <div className="monster-ar">
        <p>★{monster.star}</p>
        {monster.attribute === '水' && (
            <img
            src="https://hiteku.github.io/img/tos/-/water.png"
            alt="water"
            />
        )}
        {monster.attribute === '火' && (
            <img
            src="https://hiteku.github.io/img/tos/-/fire.png"
            alt="fire"
            />
        )}
        {monster.attribute === '木' && (
            <img
            src="https://hiteku.github.io/img/tos/-/wood.png"
            alt="wood"
            />
        )}
        {monster.attribute === '光' && (
            <img
            src="https://hiteku.github.io/img/tos/-/light.png"
            alt="light"
            />
        )}
        {monster.attribute === '暗' && (
            <img
            src="https://hiteku.github.io/img/tos/-/dark.png"
            alt="dark"
            />
        )}
        {monster.race === '神族' && (
            <img
            src="https://hiteku.github.io/img/tos/-/god.png"
            alt=""
            />
        )}
        {monster.race === '魔族' && (
            <img
            src="https://hiteku.github.io/img/tos/-/demon.png"
            alt=""
            />
        )}
        {monster.race === '人類' && (
            <img
            src="https://hiteku.github.io/img/tos/-/human.png"
            alt=""
            />
        )}
        {monster.race === '獸類' && (
            <img
            src="https://hiteku.github.io/img/tos/-/beast.png"
            alt=""
            />
        )}
        {monster.race === '龍類' && (
            <img
            src="https://hiteku.github.io/img/tos/-/dragon.png"
            alt=""
            />
        )}
        {monster.race === '妖精類' && (
            <img
            src="https://hiteku.github.io/img/tos/-/fairy.png"
            alt=""
            />
        )}
        {monster.race === '機械族' && (
            <img
            src="https://hiteku.github.io/img/tos/-/machine.png"
            alt=""
            />
        )}
      </div>
      <h3>主動技能</h3>
      <ul>
        {monster.skill.map((skill, index) => (
        <li key={index}>
            <strong>{skill.name}</strong>
            <p style={{ whiteSpace: 'pre-line' }}>{skill.description.trim().replace('<board>', '').replace('</board>', '')}</p>
        </li>
        ))}
      </ul>
      {monster.teamSkill.length > 0 && (
        <><h3>隊伍技能</h3>
        <ul>
            {monster.teamSkill.map((teamSkill, index) => (
            <li key={index}>
                <p style={{ whiteSpace: 'pre-line' }}>{teamSkill.description.trim()}</p>
            </li>
            ))}
        </ul></>
      )}
    </div>
  );
};

export default MonsterDetail;
