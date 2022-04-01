import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
    if (!thoughts.length) {
        return <h3> No Thoughts Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {thoughts && 
               thoughts.map(thought => (
                   <div key={thought._id} className="">
                       <p className="">
                           <Link 
                           to={`/profile/${thought.username}`}
                           style={{ fontWeight: 700 }}
                           >
                           {thoughts.username}
                           </Link>{' '}
                           thought on {thought.createdAt}
                       </p>

                       <div className="">
                           <Link to={`/thought/${thought._id}`}>
                           <p>{thought.thoughtText}</p>
                           <p className="">
                               Reactions: {thought.reactionCount} || Click to {' '}
                               {thought.reactionCount ? 'see' : 'start'} the discussion!
                           </p>
                           </Link>
                       </div>
                    </div>
               ))}
        </div>
    );
};

export default ThoughtList;