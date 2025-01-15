const usersMock = [
    {
        name: "User 1",
        email: "Email 1",
        password: "Password 1",
        createdDate: "Date 1",
    },
    {
        name: "User 2",
        email: "Email 2",
        password: "Password 2",
        createdDate: "Date 2",
    },
    {
        name: "User 3",
        email: "Email 3",
        password: "Password 3",
        createdDate: "Date 3",
    },
    {
        name: "User 4",
        email: "Email 4",
        password: "Password 4",
        createdDate: "Date 4",
    },
];

const productsMock = [
    {
        id: 1,
        name: 'Product 1',
        price: '500',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '250',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '120',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '600',
    },
]

const fetchAllUsers = async (req, res) => {
    try {
        res.status(200).json(usersMock);
    } catch (err) {
        console.log('Fetching users resulted in error: ', err);
        res.status(500).json({ error: 'Error in fetching users' });
    }
}

const fetchAllProducts = async (req, res) => {
    try {
        res.status(200).json(productsMock);
    } catch (err) {
        console.log('Fetching products resulted in error: ', err);
        res.status(500).json({ error: 'Error in fetching products' });
    }
}

module.exports = { fetchAllUsers, fetchAllProducts };