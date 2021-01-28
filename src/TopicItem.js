/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
function TopicItem({currentstargazer, handleUpdateTopic}){
  return(
      <button
        data-testid={`currentstargazer.name`}
        className='topic-item'
        css={css`
          color: #5b5b5b;
          padding: 12px;
          background-color: #f1f8ff;
          font-size: 18px;
          border-radius: 4px;
          margin: 12px;
          line-height: 0.5em;
          &:hover {
            background-color: #0366d6;
            color: white;
          }
        `}
        key={currentstargazer.id} 
        onClick={()=>handleUpdateTopic(currentstargazer)}
        >
        <p>Related Topic: {currentstargazer.name}</p>
        <p>Stargazers No.: {currentstargazer.stargazerCount}</p>
      </button>
  );
}

export default TopicItem;
