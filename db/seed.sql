INSERT INTO
    Color (name)
VALUES
    ('Red'),
    ('Blue'),
    ('Green'),
    ('Yellow'),
    ('Black');

INSERT INTO
    Store (name, location)
VALUES
    ('REI', '123 Main St');

INSERT INTO
    Membership (type, fee)
VALUES
    ('Basic', 0),
    ('Premium', 50),
    ('VIP', 100);

INSERT INTO
    Category (name)
VALUES
    ('Camp & Hike'),
    ('Climb'),
    ('Cycle'),
    ('Water'),
    ('Run'),
    ('Fitness'),
    ('Snow'),
    ('Travel'),
    ('Men'),
    ('Women'),
    ('Kids'),
    ('Deals'),
    ('Brands');

INSERT INTO
    Review (rating, comment)
VALUES
    (5, 'Great product!'),
    (4, 'Good quality for the price.'),
    (3, 'Average product.'),
    (2, 'Could be better.'),
    (1, 'Do not recommend.');

INSERT INTO
    Users (name, age)
VALUES
    ('John Doe', 30),
    ('Jane Smith', 25),
    ('Michael Johnson', 40);

INSERT INTO
    Product (
        name,
        description,
        price,
        discount,
        sale_end_date,
        quantity,
        review_id,
        category_id,
        color_id,
        store_id
    )
VALUES
    (
        'Camp Chair',
        'Comfortable and portable chair for camping trips.',
        49.99,
        0.1,
        '2023-07-31',
        50,
        1,
        1,
        1,
        1
    ),
    (
        'Hiking Backpack',
        'Spacious backpack to carry your hiking essentials.',
        89.99,
        0,
        NULL,
        30,
        2,
        1,
        2,
        1
    ),
    (
        'Climbing Shoes',
        'High-performance climbing shoes for experienced climbers.',
        119.99,
        0.2,
        '2023-08-15',
        20,
        3,
        2,
        3,
        1
    ),
    (
        'Bike Helmet',
        'Protective helmet for safe cycling.',
        39.99,
        0.1,
        '2023-07-25',
        30,
        4,
        3,
        4,
        1
    ),
    (
        'Water Bottle',
        'Durable and leak-proof water bottle for outdoor activities.',
        19.99,
        0,
        NULL,
        100,
        5,
        4,
        5,
        1
    ),
    (
        'Running Shoes',
        'Comfortable running shoes for your daily workouts.',
        79.99,
        0.05,
        '2023-07-28',
        10,
        1,
        5,
        2,
        1
    ),
    (
        'Yoga Mat',
        'High-quality yoga mat for your fitness routine.',
        29.99,
        0.1,
        '2023-07-31',
        50,
        2,
        6,
        1,
        1
    ),
    (
        'Ski Jacket',
        'Warm and waterproof jacket for skiing and snowboarding.',
        149.99,
        0,
        NULL,
        15,
        3,
        7,
        2,
        1
    ),
    (
        'Travel Backpack',
        'Versatile backpack for travel and everyday use.',
        69.99,
        0.2,
        '2023-08-15',
        20,
        4,
        8,
        3,
        1
    ),
    (
        'Mens Shorts',
        'Stylish and comfortable shorts for men.',
        24.99,
        0.1,
        '2023-07-25',
        30,
        5,
        9,
        4,
        1
    ),
    (
        'Womens Hiking Boots',
        'Durable hiking boots for women.',
        109.99,
        0,
        NULL,
        25,
        1,
        10,
        5,
        1
    ),
    (
        'Kids Sleeping Bag',
        'Cozy and fun sleeping bag for kids.',
        39.99,
        0.05,
        '2023-07-28',
        10,
        2,
        11,
        1,
        1
    ),
    (
        'Outdoor Gear Set',
        'Complete set of outdoor essentials for camping and hiking.',
        299.99,
        0.1,
        '2023-07-31',
        5,
        3,
        1,
        2,
        1
    );