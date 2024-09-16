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
        $project: {
          parentSchema: 0, // Exclude the parentSchema field from the final output
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
