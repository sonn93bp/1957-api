const { Status } = require("../../../lib/utils/enum/status.enum");

module.exports = (param) => {
  return {
    aggregate: [
      {
        $lookup: {
          from: `${param.model}`, // The name of the collection to join
          localField: "parent", // The field from the input documents
          foreignField: "_id", // The field from the documents of the "from" collection
          as: "parentSchema", // The name of the new array field to add to the output documents
        },
      },
      {
        $unwind: {
          path: "$parentSchema",
          preserveNullAndEmptyArrays: !param.parent_slug && !param.level, // To include products with no parent
        },
      },
      {
        $match: {
          $and: [!!param.user ? {} : {"status": Status.Active}],
          $or: [
            { "parentSchema.slug": param.parent_slug || null },
            { parent: { $exists: !!param.level } },
          ],
        },
      },
      {
        $sort: {
          index: 1, // Sort by index in ascending order; change to -1 for descending
        },
      },
      {
        $project: !!param.user ? {
          parentSchema: 0, // Exclude the parentSchema field from the final output
        } : {
          parentSchema: 0, // Exclude the parentSchema field from the final output
          content: 0,
          created_at: 0,
          update_at: 0,
          parent: 0,
          colors: 0,
          index: 0,
          _id: 0,
          status: 0
        },
      },
    ],
    getMappingSlug: [
      {
        $lookup: {
          from: `${param.model}`, // The name of the collection to join
          localField: "parent", // The field from the input documents
          foreignField: "_id", // The field from the documents of the "from" collection
          as: "parentSchema", // The name of the new array field to add to the output documents
        },
      },
      {
        $unwind: {
          path: "$parentSchema",
        },
      },
      {
        $match: {
          $and: [{"status": Status.Active}],
          $or: [
            { parent: { $exists: true } },
          ],
        },
      },
      {
        $sort: {
          index: 1, // Sort by index in ascending order; change to -1 for descending
        },
      },
      {
        $project: {
          _id: 0,
          slug: '$parentSchema.slug',
          slugChild: '$slug', // Exclude the parentSchema field from the final output
        },
      },
    ],
  };
};
