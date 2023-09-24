const profile = {
  name: "Bill",
  age: 20,
  city: 'Toms River',
  state: 'New Jersey',
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring age from profile object and annotating with type
const { age }: { age: number } = profile;

// destructuring more than one property and annotating with type
const { city, state }: { city: string, state: string } = profile;

// destructuring lat and lng from a nested object and annotating with type
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

