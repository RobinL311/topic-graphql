# TopicsExplorer - A simple demo for React + GraphQL

This simple demo just for a quick sample how you could work with React + GraphQL. With the Github GraphQL API, once u choose a "topic" you would see the related "topics" & their "Stargazers No."

Start with default topic "react", you could "enter" a new one or "click" the any related topics popup.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

One simple static test with "MockedProvider" privided. Feel free to add more if you like.(Try to make a dynamic one if you like ^\_^ )

## GraphQL Example

Querying:(relatedTopics no. has limited to 10)

```graphql
query topic($topic: String!) {
  topic(name: $topic) {
    name
    relatedTopics(first: 10) {
      id
      name
      stargazerCount
    }
  }
}
```

Results:

```json
{
  "data": {
    "topic": {
      "name": "react",
      "relatedTopics": [
        {
          "id": "MDU6VG9waWNhbmd1bGFy",
          "name": "angular",
          "stargazerCount": 27062
        },
        {
          "id": "MDU6VG9waWNyZWFjdC1uYXRpdmU=",
          "name": "react-native",
          "stargazerCount": 15051
        },
        {
          "id": "MDU6VG9waWN2dWU=",
          "name": "vue",
          "stargazerCount": 33705
        },
        {
          "id": "MDU6VG9waWNtaW5pZnk=",
          "name": "minify",
          "stargazerCount": 6
        },
        {
          "id": "MDU6VG9waWNjc3M=",
          "name": "css",
          "stargazerCount": 42270
        },
        {
          "id": "MDU6VG9waWNyZWFjdC1jb21wb25lbnRz",
          "name": "react-components",
          "stargazerCount": 74
        },
        {
          "id": "MDU6VG9waWNjc3MtcHJlcHJvY2Vzc29ycw==",
          "name": "css-preprocessors",
          "stargazerCount": 7
        },
        {
          "id": "MDU6VG9waWNyZWR1eA==",
          "name": "redux",
          "stargazerCount": 7841
        },
        {
          "id": "MDU6VG9waWNib290c3RyYXA=",
          "name": "bootstrap",
          "stargazerCount": 32621
        },
        {
          "id": "MDU6VG9waWNodG1s",
          "name": "html",
          "stargazerCount": 48900
        }
      ]
    }
  }
}
```

## Dependencies

`npm install --save @apollo/client graphql @emotion/react`

**Note: there is an issue with React 17 and emotion, you might wanna referring this https://github.com/emotion-js/emotion/issues/2041 **

## Learn More

There are still a lot you can do, dont stop!
