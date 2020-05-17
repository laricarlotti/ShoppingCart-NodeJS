# Figure out which promotions apply to a Shopping Cart using NodeJS

The file `src/data/products.json` features a list of **25 different products**,
distributed in **4 different categories**. These are:

-  **`T-SHIRTS`**
-  **`PANTS`**
-  **`SHOES`**
-  **`BAGS`**

The `object` of each product has a **standard price** that can be identified in the `regularPrice` property, and also a list of **promotional prices**, identified in the `promotions` property.

The **final Shopping Cart price** will be calculated according to the **combination of categories** of the chosen products.

Cart promotions will be calculated according to the following **looks combination:**

* **`SINGLE LOOK`** - If all items in the cart belong to a single category.
* **`DOUBLE LOOK`** - If all items in the cart belong, when added, to 2 different categories.
* **`TRIPLE LOOK`**  - If all items in the cart belong, when added, to 3 different categories.
* **`FULL LOOK`** - If each item in the cart belong to a different category.

> If the combination of the selected Shopping Cart products matches one of the conditions above, the calculated products price will correspond to the ones you'll find in the **`looks`** property.

### You need to solve the following situation:
Given the entry of an **Array** with the products `ids`, your program should return an `object` containing the following properties:

 - The names of the products and their respective categories;
 - The promotion applied to calculate cart prices, i.e.: `TRIPLE LOOK`;
 - The total cart amount (with all discounts, if applied);
 - The total discount value;
 - The discount percentage.

> See examples BELOW:

#### Example 1:

> Given the **entry** of the following products Array (IDs): `[120, 230, 310, 490]`
>
> The following **response** is expected:
```javascript
{
  products: [
    {
      name: 'DISNEY CRUELLA© T-SHIRT',
      category: 'T-SHIRTS'
    },
    {
      name: 'KNIT JOGGING PANTS',
      category: 'PANTS'
    },
    {
      name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
      category: 'SHOES'
    },
    {
      name: 'SOFT FLAP BACKPACK',
      category: 'BAGS'
    }
  ],
  promotion: 'FULL LOOK',
  totalPrice: 404.96,
  discountValue: 75.00,
  discountPercentage: '15.63%'
}
```

#### Example 2:

> Given the **entry** of the following products Array (IDs): `[130, 140, 230, 260]`
>
> The following **response** is expected:
```javascript
{
    products: [
		{
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
		{
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        },
		{
            name: 'KNIT JOGGING PANTS',
            category: 'PANTS'
        },
		{
            name: 'MENSWEAR PANTS',
            category: 'PANTS'
        }
	],
    promotion: 'DOUBLE LOOK',
	totalPrice: '504.95',
	discountValue: '25.00',
	discount: '4.72%'
}
```

#### Example 3:

> Given the **entry** of the following products Array (IDs): `[110, 120, 130, 140]`
>
> The following **response** is expected:
```javascript
{
    products: [
        {
            name: 'PINK PANTHER™ T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'DISNEY CRUELLA© T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        }
    ],
    promotion: 'SINGLE LOOK',
    totalPrice: '524.96',
    discountValue: '10.00',
    discount: '1.87%'
}
```

#### Assertion Example 4:

> Given the **entry** of the following products Array (IDs): `[110, 130, 140, 230, 310, 330]`
>
> The following **response** is expected:
```javascript
{
    products: [
        {
            name: 'PINK PANTHER™ T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'RUBBERIZED PRINTED T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'CONTRAST SLOGAN T-SHIRT',
            category: 'T-SHIRTS'
        },
        {
            name: 'KNIT JOGGING PANTS',
            category: 'PANTS'
        },
        {
            name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
            category: 'SHOES'
        },
        {
            name: 'SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL',
            category: 'SHOES'
        }
    ],
    promotion: 'TRIPLE LOOK',
    totalPrice: '784.94',
    discountValue: '130.00',
    discount: '14.21%'
}
```

## Important:
> There is already a test file that receives the function `getShoppingCart`. You can test if the function works (and correctly returns the object of the expected cart) by executing the command` npm run test`.

## Leveraged Knowledge

In this challenge, you'll be able to leverage your knowledge in:
- **Functional programming**
- **Pure functions**
- **Array Methods**
- **Function composition**

## Requirements

For this challenge you will need:
- NodeJS LTS (8.12.0+)
- Install the project dependencies using the `npm install` command.
