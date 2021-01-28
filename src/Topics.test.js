import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Topics, {GET_TOPICS} from './Topics';
import AutoMockedProvider from './utils/AutoMockedProvider';

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
            "stargazerCount": 33846
          }
        ]
      }
    }
  }
}]

describe('Start testing with MockedProvider', () => {
  afterEach(cleanup);

  it("Loading...", () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topics />
      </MockedProvider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  })

  it('Has realted topic existed', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topics />
      </MockedProvider>
    );
    const topicName = await findByText("Related Topic: vue");
    
    expect(topicName).toBeInTheDocument();
  });

  it('NO realted topic existed', async () => {
    const { queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Topics />
      </MockedProvider>
    );
    const topicName = await queryByText("Related Topic: ue");
    
    expect(topicName).toBeNull();
  });
});
