'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\n"""\nA product with an associated title, price and inventory count.\n"""\ntype Product {\n    id : ID!\n    title: String!\n    price: Float!\n    inventory_count: Int!\n}\n"""\nA item in a cart which has a title, quantity and subTotal.\n"""\ntype CartItem {\n    title: String!\n    quantity: Int!\n    subTotal: Float!\n}\n"""\nA cart that has a list of items, a total price, as well as an associated user.\n"""\ntype Cart {\n    id : ID!\n    items: [CartItem!]\n    total: Float\n    user: String!\n}\n"""\nA user in the marketplace.\n"""\ntype User {\n    id: ID!\n    username: String!\n}\n"""\nThe MongoDB response for when an item is deleted. \'ok\' represents success/failure, \'n\' is the number of items deleted.\n"""\ntype Deletion {\n    ok: Int!\n    n: Int!\n}\ntype Query {\n    """\n    Retrieve a list of all products. To see only the products in stock, \n    pass in the optional parameter \'inStock: true\' to only get the items that are available for purchase.\n    """\n    getAllProducts(inStock: Boolean=false): [Product]\n    """\n    Retrieve a product by title. \n    """\n    getProduct(title: String!) : Product\n    """\n    Retrieve a cart and its user.\n    """\n    getCart(username: String!): Cart\n    """\n    Retrieve a list of all the users that have been created.\n    """\n    getUsers: [User]\n}\ninput ProductInput {\n    title: String!\n    price: Float!\n    inventory_count: Int!\n}\ninput UpdateProductInput {\n    title: String\n    price: Float\n    inventory_count: Int\n}\ninput CartInput {\n    title: String!\n    quantity: Int=1\n}\ntype Mutation {\n    """\n    Create a product with an associated title, price and inventory count.\n    """\n    createProduct(input: ProductInput!): Product\n    """\n    Update any one of the fields in a product.\n    """\n    updateProduct(title: String!, input: UpdateProductInput!): Product\n    """\n    Delete a single product.\n    """\n    deleteProduct(title: String!): Deletion\n    """\n    Delete all products.\n    """\n    deleteAll: Deletion\n    """\n    Purchase a product, which decreases the inventory by 1.\n    """\n    purchaseProduct(title: String!, quantity: Int=1): Product\n    """\n    Create a user with a given username.\n    """\n    createUser(username: String!): User\n    """\n    Create a cart for a given user.\n    """\n    createCart(username: String!): Cart\n    """\n    Add an item to a user\'s cart. The default quantity is 1 but can be set \n    explicitly using the optional parameter \'quantity: <number>\'.\n    """\n    addToCart(username: String!, input: CartInput!): Cart\n    """\n    Complete a user\'s cart, which deletes the cart and adjusts inventory stock accordingly.\n    """\n    completeCart(username: String!): String\n}\n';
//completeCart(user: String!)


exports.default = (0, _graphqlTools.makeExecutableSchema)({
    typeDefs: typeDefs,
    resolvers: _resolvers.resolvers
});
//# sourceMappingURL=schema.js.map