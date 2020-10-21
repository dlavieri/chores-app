let defaultChores = [
    {
        _id: '001',
        active: true,
        category: 'Plant',
        type: 'Monstera Delicioso',
        location: 'Kitchen',
        img: 'https://redsquareflowers.com/wp-content/uploads/2020/08/Monstera-Deliciosa-Madison-WI-e1597250765430.png',
        water: {
            frequencyDays: 7,
            lastRecorded: null
        },
        fertilizer: {
            frequencyDays: 365,
            lastRecorded: null
        },
        health: {
            prev: [],
            current: null
        },
        notes: '',
    },
    {
        _id: '002',
        active: true,
        category: 'Plant',
        type: 'Philodendron Gigantum',
        location: 'Bedroom',
        img: 'https://cdn11.bigcommerce.com/s-421f8/images/stencil/1920x1080/products/548/3640/Landscape_Plants_New_18__19576.1593639990.png?c=2',
        water: {
            frequencyDays: 7,
            lastRecorded: null
        },
        fertilizer: {
            frequencyDays: 365,
            lastRecorded: null
        },
        health: {
            prev: [],
            current: null
        },
        notes: '',
    },
    {
        _id: '003',
        active: false,
        category: 'Plant',
        type: 'Pothos',
        location: 'Bathroom',
        img: 'https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Terracotta-Pot-6_Pothos-Jade-6.jpg?v=1544979630',
        water: {
            frequencyDays: 7,
            lastRecorded: null
        },
        fertilizer: {
            frequencyDays: 365,
            lastRecorded: null
        },
        health: {
            prev: [],
            current: null
        },
        notes: '',
    },
    {
        _id: '004',
        active: false,
        category: 'Plant',
        type: 'Alocasia Cuprea',
        location: 'Living Room',
        img: 'https://www.cowellsgc.co.uk/files/images/webshop/alocasia-cuprea-red-secret-1600187471_l.jpg',
        water: {
            frequencyDays: 7,
            lastRecorded: null
        },
        fertilizer: {
            frequencyDays: 365,
            lastRecorded: null
        },
        health: {
            prev: [],
            current: null
        },
        notes: '',
    },
    {
        _id: '005',
        active: true,
        category: 'Plant',
        type: 'Rosette Succulents',
        location: 'Desk',
        img: 'https://images.homedepot-static.com/productImages/a9e9caa1-0e9d-425d-a7fa-ad52ebd94e12/svn/home-botanicals-succulents-r4-4-64_1000.jpg',
        water: {
            frequencyDays: 30,
            lastRecorded: null
        },
        fertilizer: {
            frequencyDays: 365,
            lastRecorded: null
        },
        health: {
            prev: [],
            current: null
        },
        notes: '',
    },
];

export default defaultChores;