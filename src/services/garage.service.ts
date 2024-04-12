import { configuredAxios } from '@/api/api';
import { ICar, ICarDTO } from '@/shared/types/car.types';

class GarageService {
  private BASE_URL = '/garage';

  async getCars(page?: number, limit?: number): Promise<ICar[]> {
    const response = await configuredAxios.get<ICar[]>(this.BASE_URL, {
      params: { _page: page, _limit: limit },
    });
    return response.data;
  }

  async getCar(id: string): Promise<ICar> {
    const response = await configuredAxios.get<ICar>(`${this.BASE_URL}/${id}`);
    return response.data;
  }

  async createCar(carData: ICarDTO): Promise<ICar> {
    const response = await configuredAxios.post<ICar>(this.BASE_URL, carData);
    return response.data;
  }

  async updateCar(id: string, carData: ICarDTO): Promise<ICar> {
    const response = await configuredAxios.put<ICar>(
      `${this.BASE_URL}/${id}`,
      carData,
    );
    return response.data;
  }

  async deleteCar(id: string): Promise<void> {
    await configuredAxios.delete(`${this.BASE_URL}/${id}`);
  }
}

export const garageService = new GarageService();
