/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const axios = require('axios');
// const crypto = require('crypto');

// exports.sourceNodes = async ({ boundActionCreators }) => {
//     const { createNode } = boundActionCreators;

//     // fetch raw data from the randomuser api
//     const fetchRandomUser = () => axios.get(`https://api.spacexdata.com/v3/launches/past?limit=3`);
//     // await for results
//     const res = await fetchRandomUser();
//     // map into these results and create nodes
//     res.data.map((user, i) => {
//         // Create your node object
//         const userNode = {
//             // Required fields
//             id: `${i}`,
//             parent: `__SOURCE__`,
//             internal: {
//                 type: `RandomRupesh`, // name of the graphQL query --> allRandomUser {}
//                 // contentDigest will be added just after
//                 // but it is required
//             },
//             children: [],

//             // Other fields that you want to query with graphQl
//             flight_number: user.flight_number,
//             // etc...
//         }

//         // Get content digest of node. (Required field)
//         const contentDigest = crypto
//             .createHash(`md5`)
//             .update(JSON.stringify(userNode))
//             .digest(`hex`);
//         // add it to userNode
//         userNode.internal.contentDigest = contentDigest;

//         // Create node with the gatsby createNode() API
//         createNode(userNode);
//     });

//     return;
// }

