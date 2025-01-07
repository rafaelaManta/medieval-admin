export const ordersData = [
  {
    orderProducts: [
      {
        id: 1,
        order_id: 1,
        product: {
          id: 1,
          name: "MEDIEVAL SEX ON THE BEACH",
          description:
            "Μια δική μας εκδοχή του κλασσικού κοκτέιλ Sex on the Beach. Γλυκό,δροσιστικό και φρουτώδες, φτιαγμένο από vodka, φρέσκο χυμό πορτοκαλιού, χυμό cranberry, liquer ροδάκινου, oleo saccharum και γρεναδίνη. (Stolitsnaya Vodka)",
          price: "10.00",
          price_takeaway: "10.00",
          in_stock: 1,
          tags: [
            {
              id: 3,
              product_id: 1,
              tag: "γλυκό",
            },
            {
              id: 4,
              product_id: 1,
              tag: "ξυνό",
            },
            {
              id: 5,
              product_id: 1,
              tag: "test",
            },
          ],
        },
        comments: "Χωρίς bitters",
        takeaway: true,
        status: "to_be_made",
        paid_at: "2024-09-30 18:00:00",
        created_at: "2024-09-30 18:00:00",
        updated_at: "2024-09-30 18:00:00",
      },
      {
        id: 2,
        order_id: 1,
        product: {
          id: 1,
          name: "MEDIEVAL SEX ON THE BEACH",
          description:
            "Μια δική μας εκδοχή του κλασσικού κοκτέιλ Sex on the Beach. Γλυκό,δροσιστικό και φρουτώδες, φτιαγμένο από vodka, φρέσκο χυμό πορτοκαλιού, χυμό cranberry, liquer ροδάκινου, oleo saccharum και γρεναδίνη. (Stolitsnaya Vodka)",
          price: "10.00",
          price_takeaway: "10.00",
          in_stock: 1,
          tags: [
            {
              id: 3,
              product_id: 1,
              tag: "γλυκό",
            },
            {
              id: 4,
              product_id: 1,
              tag: "ξυνό",
            },
            {
              id: 5,
              product_id: 1,
              tag: "test",
            },
          ],
        },
        comments: "Χωρίς bitters",
        takeaway: false,
        status: "to_be_paid",
        paid_at: "2024-09-30 18:00:00",
        created_at: "2024-09-30 18:00:00",
        updated_at: "2024-09-30 18:00:00",
      },
    ],
    id: 1,
    table: {
      id: 1,
      title: "Bar",
      order: 1,
    },
    waiter: {
      id: 5,
      name: "Αναστασία",
    },
    total: 58.5,
    completed: 0,
    created_at: "2024-09-30 18:00:00",
    updated_at: "2024-09-30 18:00:00",
  },
  {
    orderProducts: [
      {
        id: 1,
        order_id: 1,
        product: {
          id: 1,
          name: "MEDIEVAL SEX ON THE BEACH",
          description:
            "Μια δική μας εκδοχή του κλασσικού κοκτέιλ Sex on the Beach. Γλυκό,δροσιστικό και φρουτώδες, φτιαγμένο από vodka, φρέσκο χυμό πορτοκαλιού, χυμό cranberry, liquer ροδάκινου, oleo saccharum και γρεναδίνη. (Stolitsnaya Vodka)",
          price: "10.00",
          price_takeaway: "10.00",
          in_stock: 1,
          tags: [
            {
              id: 3,
              product_id: 1,
              tag: "γλυκό",
            },
            {
              id: 4,
              product_id: 1,
              tag: "ξυνό",
            },
            {
              id: 5,
              product_id: 1,
              tag: "test",
            },
          ],
        },
        comments: "Χωρίς bitters",
        takeaway: false,
        status: "to_be_made",
        paid_at: "2024-09-30 18:00:00",
        created_at: "2024-09-30 18:00:00",
        updated_at: "2024-09-30 18:00:00",
      },
    ],
    id: 5,
    table: {
      id: 1,
      title: "Bar",
      order: 1,
    },
    waiter: {
      id: 5,
      name: "Αναστασία",
    },
    total: 58.5,
    completed: 0,
    created_at: "2024-09-30 18:00:00",
    updated_at: "2024-09-30 18:00:00",
  },
];
