export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
        {
            id: 1,
            name: "Apple",
            quantity: 100,
            calories: 52,
            proteins: 0.3,
            carbs: 14,
            fats: 0.2
        },
        {
            id: 2,
            name: "Banana",
            quantity: 100,
            calories: 96,
            proteins: 1.3,
            carbs: 27,
            fats: 0.3
        },
        {
            id: 3,
            name: "Chicken Breast",
            quantity: 100,
            calories: 165,
            proteins: 31,
            carbs: 0,
            fats: 3.6
        },
        {
            id: 4,
            name: "Broccoli",
            quantity: 100,
            calories: 55,
            proteins: 3.7,
            carbs: 11.2,
            fats: 0.6
        },
        {
            id: 5,
            name: "Almonds",
            quantity: 100,
            calories: 579,
            proteins: 21,
            carbs: 22,
            fats: 50
        }
    ];
}