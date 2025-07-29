const cars = [
  {
    id: 1,
    name: "Audi A4",
    brand: "Audi",
    pricePerDay: 36,
    images: [
      "/images/audi/audi1.jpg",
      "/images/audi/audi2.jpg",
      "/images/audi/audi3.jpg"
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Audi A3",
    brand: "Audi",
    pricePerDay: 43,
    images: [
      "/images/audi/audi4.jpg",
      "/images/audi/audi5.jpg",
      "/images/audi/audi6.jpg"
    ],
    popular: true,
  },
  {
    id: 5,
    name: "BMW 3 Series",
    brand: "BMW",
    pricePerDay: 52,
    images: [
      "/images/bmw/bmw1.jpg",
      "/images/bmw/bmw2.jpg",
      "/images/bmw/bmw3.jpg"
    ],
    popular: true,
  },
  {
    id: 13,
    name: "BMW X3",
    brand: "BMW",
    pricePerDay: 65,
    images: [
      "/images/bmw/bmw4.jpg",
      "/images/bmw/bmw5.jpg",
      "/images/bmw/bmw6.jpg"
    ],
  },
  {
    id: 11,
    name: "Tesla Model Y",
    brand: "Tesla",
    pricePerDay: 84,
    images: [
      "/images/tesla/tesla1.jpg",
      "/images/tesla/tesla2.jpg",
      "/images/tesla/tesla3.jpg"
    ],
    popular: true,
  },
  {
    id: 17,
    name: "Tesla Model 3",
    brand: "Tesla",
    pricePerDay: 43,
    images: [
      "/images/tesla/tesla4.jpg",
      "/images/tesla/tesla5.jpg",
      "/images/tesla/tesla6.jpg"
    ],
  },
  {
    id: 22,
    name: "Tesla Model S",
    brand: "Tesla",
    pricePerDay: 78,
    images: [
      "/images/tesla/tesla1.jpg",
      "/images/tesla/tesla2.jpg",
      "/images/tesla/tesla3.jpg"
    ],
  },
  {
    id: 16,
    name: "Tesla Model X",
    brand: "Tesla",
    pricePerDay: 120,
    images: [
      "/images/tesla/tesla4.jpg",
      "/images/tesla/tesla5.jpg",
      "/images/tesla/tesla6.jpg"
    ],
  },
  {
    id: 7,
    name: "Honda Accord",
    brand: "Honda",
    pricePerDay: 31,
    images: [
      "/images/honda/honda1.jpg",
      "/images/honda/honda2.jpg",
      "/images/honda/honda3.jpg"
    ],
  },
  {
    id: 8,
    name: "Honda CR-V",
    brand: "Honda",
    pricePerDay: 48,
    images: [
      "/images/honda/honda4.jpg",
      "/images/honda/honda5.jpg",
      "/images/honda/honda6.jpg"
    ],
  },
  {
    id: 12,
    name: "Honda Civic",
    brand: "Honda",
    pricePerDay: 85,
    images: [
      "/images/honda/honda1.jpg",
      "/images/honda/honda2.jpg",
      "/images/honda/honda3.jpg"
    ],
  },
  {
    id: 31,
    name: "Honda Fit",
    brand: "Honda",
    pricePerDay: 113,
    images: [
      "/images/honda/honda4.jpg",
      "/images/honda/honda5.jpg",
      "/images/honda/honda6.jpg"
    ],
  },
  {
    id: 3,
    name: "Nissan Rogue",
    brand: "Nissan",
    pricePerDay: 37,
    images: [
      "/images/nissan/nissan1.jpg",
      "/images/nissan/nissan2.jpg",
      "/images/nissan/nissan3.jpg"
    ],
  },
  {
    id: 21,
    name: "Nissan Altima",
    brand: "Nissan",
    pricePerDay: 31,
    images: [
      "/images/nissan/nissan4.jpg",
      "/images/nissan/nissan5.jpg",
      "/images/nissan/nissan6.jpg"
    ],
  },
  {
    id: 37,
    name: "Nissan Leaf",
    brand: "Nissan",
    pricePerDay: 67,
    images: [
      "/images/nissan/nissan1.jpg",
      "/images/nissan/nissan2.jpg",
      "/images/nissan/nissan3.jpg"
    ],
  },
  {
    id: 4,
    name: "Chevrolet Cruze",
    brand: "Chevrolet",
    pricePerDay: 92,
    images: [
      "/images/chevrolet/chevrolet1.jpg",
      "/images/chevrolet/chevrolet2.jpg",
      "/images/chevrolet/chevrolet3.jpg"
    ],
  },
  {
    id: 14,
    name: "Chevrolet Impala",
    brand: "Chevrolet",
    pricePerDay: 76,
    images: [
      "/images/chevrolet/chevrolet4.jpg",
      "/images/chevrolet/chevrolet5.jpg",
      "/images/chevrolet/chevrolet6.jpg"
    ],
  },
  {
    id: 20,
    name: "Chevrolet Equinox",
    brand: "Chevrolet",
    pricePerDay: 38,
    images: [
      "/images/chevrolet/chevrolet1.jpg",
      "/images/chevrolet/chevrolet2.jpg",
      "/images/chevrolet/chevrolet3.jpg"
    ],
  },
  {
    id: 24,
    name: "BMW 5 Series",
    brand: "BMW",
    pricePerDay: 35,
    images: [
      "/images/bmw/bmw1.jpg",
      "/images/bmw/bmw2.jpg",
      "/images/bmw/bmw3.jpg"
    ],
  },
  {
    id: 25,
    name: "Mercedes E-Class",
    brand: "Mercedes",
    pricePerDay: 34,
    images: [
      "/images/mercedes/mercedes1.jpg",
      "/images/mercedes/mercedes2.jpg",
      "/images/mercedes/mercedes3.jpg"
    ],
  },
  {
    id: 26,
    name: "Mercedes GLA",
    brand: "Mercedes",
    pricePerDay: 70,
    images: [
      "/images/mercedes/mercedes4.jpg",
      "/images/mercedes/mercedes5.jpg",
      "/images/mercedes/mercedes6.jpg"
    ],
  },
  {
    id: 32,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    pricePerDay: 34,
    images: [
      "/images/mercedes/mercedes1.jpg",
      "/images/mercedes/mercedes2.jpg",
      "/images/mercedes/mercedes3.jpg"
    ],
  },
  {
    id: 33,
    name: "BMW X3",
    brand: "BMW",
    pricePerDay: 87,
    images: [
      "/images/bmw/bmw4.jpg",
      "/images/bmw/bmw5.jpg",
      "/images/bmw/bmw6.jpg"
    ],
  },
  {
    id: 34,
    name: "Honda Accord",
    brand: "Honda",
    pricePerDay: 118,
    images: [
      "/images/honda/honda1.jpg",
      "/images/honda/honda2.jpg",
      "/images/honda/honda3.jpg"
    ],
  },
  {
    id: 35,
    name: "Audi A4",
    brand: "Audi",
    pricePerDay: 40,
    images: [
      "/images/audi/audi1.jpg",
      "/images/audi/audi2.jpg",
      "/images/audi/audi3.jpg"
    ],
  },
  {
    id: 36,
    name: "Honda Fit",
    brand: "Honda",
    pricePerDay: 54,
    images: [
      "/images/honda/honda4.jpg",
      "/images/honda/honda5.jpg",
      "/images/honda/honda6.jpg"
    ],
  },
  {
    id: 38,
    name: "Tesla Model 3",
    brand: "Tesla",
    pricePerDay: 64,
    images: [
      "/images/tesla/tesla4.jpg",
      "/images/tesla/tesla5.jpg",
      "/images/tesla/tesla6.jpg"
    ],
  },
  {
    id: 39,
    name: "Ford Focus",
    brand: "Ford",
    pricePerDay: 92,
    images: [
      "/images/ford/ford1.jpg",
      "/images/ford/ford2.jpg",
      "/images/ford/ford3.jpg"
    ],
  },
  {
    id: 40,
    name: "Hyundai Elantra",
    brand: "Hyundai",
    pricePerDay: 101,
    images: [
      "/images/hyundai/hyundai1.jpg",
      "/images/hyundai/hyundai2.jpg",
      "/images/hyundai/hyundai3.jpg"
    ],
  },
  {
    id: 41,
    name: "Honda Fit",
    brand: "Honda",
    pricePerDay: 85,
    images: [
      "/images/honda/honda4.jpg",
      "/images/honda/honda5.jpg",
      "/images/honda/honda6.jpg"
    ],
  },
  {
    id: 42,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    pricePerDay: 74,
    images: [
      "/images/mercedes/mercedes1.jpg",
      "/images/mercedes/mercedes2.jpg",
      "/images/mercedes/mercedes3.jpg"
    ],
  },
  {
    id: 43,
    name: "BMW 3 Series",
    brand: "BMW",
    pricePerDay: 118,
    images: [
      "/images/bmw/bmw1.jpg",
      "/images/bmw/bmw2.jpg",
      "/images/bmw/bmw3.jpg"
    ],
  },
  {
    id: 44,
    name: "Toyota RAV4",
    brand: "Toyota",
    pricePerDay: 41,
    images: [
      "/images/toyota/toyota1.jpg",
      "/images/toyota/toyota2.jpg",
      "/images/toyota/toyota3.jpg"
    ],
  },
  {
    id: 45,
    name: "Mercedes GLC",
    brand: "Mercedes",
    pricePerDay: 43,
    images: [
      "/images/mercedes/mercedes4.jpg",
      "/images/mercedes/mercedes5.jpg",
      "/images/mercedes/mercedes6.jpg"
    ],
  },
  {
    id: 46,
    name: "Hyundai Santa Fe",
    brand: "Hyundai",
    pricePerDay: 70,
    images: [
      "/images/hyundai/hyundai1.jpg",
      "/images/hyundai/hyundai2.jpg",
      "/images/hyundai/hyundai3.jpg"
    ],
  },
  {
    id: 47,
    name: "Audi Q5",
    brand: "Audi",
    pricePerDay: 101,
    images: [
      "/images/audi/audi4.jpg",
      "/images/audi/audi5.jpg",
      "/images/audi/audi6.jpg"
    ],
  },
  {
    id: 48,
    name: "Toyota Corolla",
    brand: "Toyota",
    pricePerDay: 56,
    images: [
      "/images/toyota/toyota1.jpg",
      "/images/toyota/toyota2.jpg",
      "/images/toyota/toyota3.jpg"
    ],
  },
  {
    id: 49,
    name: "Honda Civic",
    brand: "Honda",
    pricePerDay: 62,
    images: [
      "/images/honda/honda1.jpg",
      "/images/honda/honda2.jpg",
      "/images/honda/honda3.jpg"
    ],
  },
  {
    id: 50,
    name: "Tesla Model 3",
    brand: "Tesla",
    pricePerDay: 79,
    images: [
      "/images/tesla/tesla4.jpg",
      "/images/tesla/tesla5.jpg",
      "/images/tesla/tesla6.jpg"
    ],
  }
]
export default cars;
