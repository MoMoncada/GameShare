
const { User, UserGames, GameLibrary} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { model } = require('mongoose');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    userGames: async (parent, {userId}) => {
      if (userId) {
        const user = await User.findOne({ userId })
        .populate({path: 'userGames',
                    populate: {
                      path: 'gameDetails'
                    }})
        return user
      };
    },
    availableGames: async () => {
      return User.find().populate('userGames');
    },
    gamelibrary: async () => {
      return await GameLibrary.find();
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      // const correctPw = await user.isCorrectPassword(password);

      // if (!correctPw) {
      //   throw new AuthenticationError('Incorrect credentials');
      // }

      const token = signToken(user);

      return { token, user };
    },

    addGamesFromLibrary: async (parent, {username, gameId} ) => {
      return User.findOneAndUpdate(
        { username: username }, 
        { $push: { userGames: {$each: gameId }} },
        { new: true }
      );
    },

    // Todo: Add game to borrowed games
    addGameToBorrowed: async (parent, {username, gameId}) => {
      return User.findOneAndUpdate({ username: username },
      { $push: { borrowedGames: gameId}},
      {
        new: true,
      })
    },
    // Todo: Remove game from borrowed games
    removeGameFromBorrowed: async (parent, {username, gameId}) => {
      return User.findOneAndUpdate({ username: username },
      { $pull: { borrowedGames: gameId}},
      {
        new: true,
      })
    },
    // Todo: Add remove game from library
    removeGameFromOwned: async (parent, {username, gameId}) => {
      return User.findOneAndUpdate({ username: username },
      { $pull: { userGames: gameId}},
      {
       new: true
      })
    },

    removeUserGame: async (parent, { userId, gameId }) => {
      const game = await UserGames.findOneAndDelete(
        {_id: gameId },
        {new: true}
      )
      if (userId) {
          const user = await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { userGames: gameId }}
          )
        }

      return game 
    }


    // addGamesToUser : async (parent, { gamesToAdd }) => {
    //   console.log(gamesToAdd)
    // }
    // createGameRequest: async (_, { fromUser, toUser, game }) => {
    //   const request = new GameRequests({ fromUser, toUser, game, status: 'pending' });
    //   await request.save();
    //   return request;
    // }


  },
};

module.exports = resolvers;
