import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Topics, {GET_TOPICS} from './Topics';

const mocks = [{
  request: {
    query: GET_TOPICS,
    variables: {
      name: "react"
    }
  },
  result: {
    "data": {
      "topic": {
        "name": "react",
        "relatedTopics": [
          {
            "id": "MDU6VG9waWN2dWU=",
            "name": "vue",
            "stargazerCount": 33705
          }
        ]
      }
    }
  }
}]

describe('Start testing with MockedProvider', () => {
  afterEach(cleanup)

  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Topics />
    </MockedProvider>
  );
  
  it('Has realted topic existed', async () => {
    const topicName = await findByText("Related Topic: vue");
    expect(topicName).toBeInTheDocument()
  });

});
