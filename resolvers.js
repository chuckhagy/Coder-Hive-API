const userResolver = require("./lib/instances/userResolver");
const componentResolver = require("./lib/instances/componentResolver");
const voteResolver = require("./lib/instances/voteResolver");
const commentResolver = require("./lib/instances/commentResolver");
const fanResolver = require("./lib/instances/fanResolver");
const componentTagResolver = require("./lib/instances/componentTagResolver");
const followResolver = require("./lib/instances/followResolver");
const activityResolver = require("./lib/instances/activityResolver");

module.exports = {
	Query: {
		loggedUser: userResolver.getById,
		allUsers: userResolver.getAll,
		oneUser: userResolver.getByIdentifier,
		oneUserById: userResolver.getById,
		oneComponent: componentResolver.getById,
		allComponents: componentResolver.getAll,
		activities: activityResolver.getActivity
	},
	Mutation: {
		createUser: userResolver.createNew,
		updateUser: userResolver.update,
		deleteUser: userResolver.delete,

		createComponent: componentResolver.createNew,
		updateComponent: componentResolver.update,
		deleteComponent: componentResolver.delete,

		createFan: fanResolver.createNew,
		deleteFan: fanResolver.delete,

		createVote: voteResolver.createNew,
		deleteVote: voteResolver.delete,

		createTagRelationship: componentTagResolver.createNew,
		deleteTagRelationship: componentTagResolver.delete,

		createFollow: followResolver.createNew,
		deleteFollow: followResolver.delete,

		createComment: commentResolver.createNew,
		updateComment: commentResolver.update,
		deleteComment: commentResolver.delete
	},
	User: {
		components: componentResolver.getByIdentifier,
		comments: commentResolver.getByUserId,
		fanOf: fanResolver.getByUserId,
		followers: followResolver.getFollowers,
		whoIFollow: followResolver.getFollowees
	},
	Component: {
		votes: voteResolver.getByIdentifier,
		comments: commentResolver.getByIdentifier,
		fans: fanResolver.getByIdentifier,
		tags: componentTagResolver.getTagsByComponent,
		owner: userResolver.getOwnerByParentComponentId,
		myParent: componentResolver.getParent,
		myChildren: componentResolver.getChildren,
		myCloneSource: componentResolver.getCloneSource,
		myClones: componentResolver.getClones
	},
	Activity: {
		component: activityResolver.getByIdentifier,
		user: activityResolver.getByUserId,
		comment: activityResolver.getComment
	}
};
