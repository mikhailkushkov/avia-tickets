import locationsInstance, { Locations } from '../../store/locations';
import { formatDate } from '../../helpers/date';
import api, { Api } from '../../services/apiService';

// mock: имитируем реальные данные
const countries = [{ code: 'AD', name: 'Andorra' }];

describe('locations store tests', () => {
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
  
})

