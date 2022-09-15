import api from '../../services/apiService';
import config from '../../config/apiConfig';
import axios from 'axios';

jest.mock('axios');

const cities = [{ country_code: 'UKR', name: 'Kharkiv', code: 'KH' }];
const airlines = [{ code: 'V9', name: 'Thai Vietjet Air' }];

describe('Test api service', () => {
  it('success fetch cities', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: cities }));
    await expect(api.cities()).resolves.toEqual(cities);
    //expect(axios.get).toHaveBeenCalledWith(`${config.url/cities}`);
  })
  it('fetch cities failure', async () => {
    const errorMsg ='Api error';
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMsg)));
    await expect(api.cities()).rejects.toThrow(errorMsg);
  })
  it('success fetch airlines', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: airlines }));
    await expect(api.airlines()).resolves.toEqual(airlines);
    //expect(axios.get).toHaveBeenCalledWith(`${config.url/airlines}`);
  })
})