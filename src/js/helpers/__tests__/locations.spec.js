import locationsInstance, { Locations } from '../../store/locations';
import { formatDate } from '../../helpers/date';
import api, { Api } from '../../services/apiService';

// mock: имитируем реальные данные
const countries = [{ code: 'AD', name: 'Andorra' }];
const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }]

describe('locations store tests', () => {

  beforeEach(() => {
    const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }]
  })

  it('Check if locationInstance is instance of location class', () => {
    expect(locationsInstance).toBeInstanceOf(Locations)
  })
  it('Check if api is instance of api class', () => {
    expect(api).toBeInstanceOf(Api)
  })
  it('Success locations instance create ', () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null)
    expect(instance.cities).toBe(null)
    expect(instance.shortCities).toEqual({})
    expect(instance.lastSearch).toEqual({})
    expect(instance.airlines).toEqual({})
    expect(instance.formatDate).toEqual(formatDate)
  })
  it('Check correct countries serialize', () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = {
      AD: { code: 'AD', name: 'Andorra' }
    }
    expect(res).toEqual(expectedData)
  })
  // it('check cities', () => {
  //   const res = locationsInstance.getCityNameByCode('KH');
  //   expect(res).toBe('Kharkiv')
  // })
  // it('Check correct cities serialize', () => {
  //   const res = locationsInstance.serializeCities(cities);
  //   const expectedData = {
  //     KH: {country_code: 'UKR', name: 'Kharkiv', code: 'KH', country_name: 'Ukraine', full_name: 'Kharkiv, Ukraine'}
  //   }
  //   expect(res).toEqual(expectedData)
  // })

  // it('Check countries serialize with incorrect data', () => {
  //   const res = locationsInstance.serializeCountries(null)
  //   const expectedData = {};

  //   expect(res).toEqual(expectedData)
  // })
  
  // it('Check cities serialize with incorrect data', () => {
  //   const res = locationsInstance.serializeCities(cities);
  //   const expectedData = {
  //     KH: {country_code: 'UKR', name: 'Kharkiv', code: 'KH', country_name: 'Ukraine', full_name: 'Kharkiv, Ukraine'}
  //   };

  //   expect(res).toEqual(expectedData)
  // })
  
})

