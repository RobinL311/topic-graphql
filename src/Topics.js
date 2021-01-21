/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from "react";
import { gql, useQuery } from '@apollo/client';
import TopicItem from './TopicItem';

export const GET_TOPICS = gql`
  query TopicsQuery($name: String!){
    topic(name: $name){
      name
      relatedTopics(first: 10){
        id
        name
        stargazerCount
      }
    }
  }
`;

function Topics() {

  const[input, setInput] = React.useState('');
  const[newTopic, setNewTopic] = React.useState('react');

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  const handleSubmit = () => {
    if(input) {
      setNewTopic(input);
      setInput('');
    }
  }
  const handleUpdateTopic = (topicClicked) =>{
    setNewTopic(topicClicked.name);
  }
  const { loading, error, data } = useQuery(GET_TOPICS, {
    variables: { name: newTopic },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, pls check!</p>;

  const currentTopic = data.topic.name;
  const stargazerLists = data !== undefined 
    && data.topic.relatedTopics.length !== 0 
    ? <TopicItem data={data} handleUpdateTopic={handleUpdateTopic}/> : (
    <h3>No such topics found!</h3>
  );
  
  return (
    <div
      css={css`
      text-align: center;
    `}
    >
      <h2
        css={css`
          text-align: center;
          font-size: 48px;
          color: #808080;
        `}
      >
        FIND ALL YOUR RELATED TOPICS
      </h2>
      <h2
        css={css`
          text-align: center;
          font-size: 56px;
          color: #005cc5;
        `}
      >" {currentTopic} "</h2> 
      <div
        className='current-topic'
        css={css`
          padding: 32px;
          background-color: #808080;
          font-size: 36px;
          border-radius: 4px;
          color: white;
        `}
      >
        <input
        type='text'
        placeholder='pls input the topic here!'
        value={input}
        onChange={handleChange}
        css={css`
          padding: 12px;
          font-size: 16px;
          border-radius: 4px;
        `}
        />
        <button 
          onClick={handleSubmit}
          css={css`
            padding: 12px;
            font-size: 16px;
            border-radius: 4px;
          `}
        >
          Go
        </button></div>
        
        <div
          className='related-topic'
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >{stargazerLists}</div>
    </div>
  );
};

export default Topics;