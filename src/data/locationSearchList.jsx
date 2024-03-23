const locationSearchList = [
  { city: 'Atlanta', state: 'GA' },
  { city: 'Austin', state: 'TX' },
  { city: 'Baltimore', state: 'MD' },
  { city: 'Boston', state: 'MA' },
  { city: 'Brooklyn', state: 'NY' },
  { city: 'Charlotte', state: 'NC' },
  { city: 'Chicago', state: 'IL' },
  { city: 'Columbus', state: 'OH' },
  { city: 'Dallas', state: 'TX' },
  { city: 'Denver', state: 'CO' },
  { city: 'Detroit', state: 'MI' },
  { city: 'Houston', state: 'TX' },
  { city: 'Indianapolis', state: 'IN' },
  { city: 'Jacksonville', state: 'FL' },
  { city: 'Kansas City', state: 'MO' },
  { city: 'Las Vegas', state: 'NV' },
  { city: 'Los Angeles', state: 'CA' },
  { city: 'Miami', state: 'FL' },
  { city: 'New York', state: 'NY' },
  { city: 'Oklahoma City', state: 'OK' },
  { city: 'Philadelphia', state: 'PA' },
  { city: 'Phoenix', state: 'AZ' },
  { city: 'Portland', state: 'OR' },
  { city: 'San Diego', state: 'CA' },
  { city: 'San Francisco', state: 'CA' },
  { city: 'Seattle', state: 'WA' }
]

export const locationSearchArray = locationSearchList.map(
  (location) => ({
    value: location.city,
    label: location.city + ', ' + location.state,
    searchValue: location.city,
  }),
)
