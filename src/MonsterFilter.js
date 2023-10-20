import React, { useState } from 'react';
import { MonsterData } from './MonsterData';
import { Link, useLocation } from 'react-router-dom';
import './Monster.css';

const MonsterFilter = () => {
  const [attributeFilter, setAttributeFilter] = useState('不限');
  const [raceFilter, setRaceFilter] = useState('不限');
  const [starFilter, setStarFilter] = useState('不限');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const filteredMonsters = MonsterData.filter((monster) => {
    const attributeMatch =
      attributeFilter === '不限' || monster.attribute === attributeFilter;
    const raceMatch = raceFilter === '不限' || monster.race === raceFilter;
    const starMatch = starFilter === '不限' || monster.star.toString() === starFilter;
    const searchMatch = (
      monster.id.toString().includes(searchTerm) ||
      monster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (monster.monsterTag && monster.monsterTag.join(' ').toLowerCase().includes(searchTerm.toLowerCase())) ||
      (monster.skill && monster.skill.some((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))) ||
      (monster.teamSkill && monster.teamSkill.some((ts) => ts.description.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    return attributeMatch && raceMatch && starMatch && searchMatch;
  });

  return (
    <div>
      <div className="monster-filter">
        <div className="filter-options">
          <div>
            <label>屬性：</label>
            <input
              type="radio"
              name="attribute"
              value="不限"
              checked={attributeFilter === '不限'}
              onChange={() => setAttributeFilter('不限')}
            />
            不限
            {['水', '火', '木', '光', '暗'].map((attribute) => (
              <React.Fragment key={attribute}>
                <input
                  type="radio"
                  name="attribute"
                  value={attribute}
                  checked={attributeFilter === attribute}
                  onChange={() => setAttributeFilter(attribute)}
                />
                {attribute}
              </React.Fragment>
            ))}
          </div>
          <div>
            <label>種族：</label>
            <input
              type="radio"
              name="race"
              value="不限"
              checked={raceFilter === '不限'}
              onChange={() => setRaceFilter('不限')}
            />
            不限
            {[
              '神族',
              '魔族',
              '人類',
              '獸類',
              '龍類',
              '妖精類',
              '機械族',
            ].map((race) => (
              <React.Fragment key={race}>
                <input
                  type="radio"
                  name="race"
                  value={race}
                  checked={raceFilter === race}
                  onChange={() => setRaceFilter(race)}
                />
                {race}
              </React.Fragment>
            ))}
          </div>
          <div>
            <label>星數：</label>
            <input
              type="radio"
              name="star"
              value="不限"
              checked={starFilter === '不限'}
              onChange={() => setStarFilter('不限')}
            />
            不限
            {[1, 2, 3, 4, 5, 6, 7, 8].map((star) => (
              <React.Fragment key={star}>
                <input
                  type="radio"
                  name="star"
                  value={star.toString()}
                  checked={starFilter === star.toString()}
                  onChange={() => setStarFilter(star.toString())}
                />
                ★{star}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <label>關鍵字：</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="monster-results">
        {filteredMonsters
          .filter((monster) => monster.name !== '')
          .reverse().map((monster) => (
            <Link
              to={{
                pathname: `/${monster.id}`,
                search: location.search,
              }}
              key={monster.id}
            >
              <div className="monster-thumbnail">
                <img
                  src={`https://tinghan33704.com/tos_tool_data/img/monster/${monster.id}.png`}
                  alt={monster.name}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MonsterFilter;
