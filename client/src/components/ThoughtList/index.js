import React from 'react';

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
                           {thoughts.username}
                           thought on {thought.createdAt}
                       </p>
                       <div className="">
                           <p>{thought.thoughtText}</p>
                           <p className="">
                               Reactions: {thought.reactionCount} || Click to {' '}
                               {thought.reactionCount ? 'see' : 'start'} the discussion!
                           </p>
                       </div>
                    </div>
               ))}
        </div>
    );
};

export default ThoughtList;