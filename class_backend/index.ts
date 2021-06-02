import { createConnection } from "typeorm";
import { ApolloError, ApolloServer, gql, IResolvers } from "apollo-server";
import Board from "./Board.postgres";

console.log("hello backend!");

//backend API 서버 세팅
const typeDefs = gql`
  type Apple {
    message: String
  }

  type Board {
    writer: String!
    age: Int
    number: Int!
  }

  type Query {
    fetchBoards(page: Int): [Board!]!
  }

  type Mutation {
    createBoard(writer: String!, age: Int!): Apple
    deleteBoard(number: Int!): Apple
  }
`;

const resolvers: IResolvers = {
  Query: {
    fetchBoards: () => {
      try {
        //  Board.find();
        const result = Board.find();
        // console.log(result);
        //! async/await 가 있을 때 콘솔로 띄웠더니 promise로 멈췄음
        //! 리턴일 때는 async/await 가 있던없던 잘 돌아왔음
        //! 콘솔은 화면으로 보여주는 게 아님.
        //! 리턴은 일단 밖으로 꺼냄.

        return result;
      } catch (error) {
        throw new Error("땡");
      }
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      try {
        Board.insert({
          writer: args.writer,
          age: args.age,
        });
        return {
          message: "게시물 등록 완료",
        };
      } catch (error) {
        throw new Error("게시판에 글 등록하는데 에러났어요.");
      }
      // console.log(args.writer);
      // console.log(args.age);
    },

    deleteBoard: (_, args) => {
      try {
        Board.update({ number: args.number }, { deletedAt: new Date() });
        return {
          message: "게시물 삭제 완료!",
        };
      } catch (error) {
        throw new ApolloError("게시물 삭제 실패!");
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

//데이터베이스 연결 및 세팅 부분
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  port: 5009,
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
  host: "34.64.71.71",
}).then(() => {
  console.log("접속완료!!");
  server.listen({ port: 4000 });
});
