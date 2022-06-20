const database = require('./database');
const { ApolloServer, gql } = require('apollo-server');

// 유형을 정의
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`;

// 요청에 대한 응답
const resolvers = {
  Query: {
    teams: () => database.teams,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

//! 여기 코드들을 분석해보자 (얄코강의 04:50 부분 확인)
