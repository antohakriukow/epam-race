import { configuredAxios } from '@/api/api';
import { IWinnerDTO } from '@/shared/types/car.types';

class WinnersService {
  private BASE_URL = '/winners';

  async getWinners(
    page?: number,
    limit?: number,
    sort?: 'id' | 'wins' | 'time',
    order?: 'ASC' | 'DESC',
  ): Promise<{ data: IWinnerDTO[]; totalCount: number }> {
    const response = await configuredAxios.get<IWinnerDTO[]>(this.BASE_URL, {
      params: { _page: page, _limit: limit, _sort: sort, _order: order },
    });
    const totalCount = parseInt(response.headers['x-total-count'], 10);
    return {
      data: response.data,
      totalCount: totalCount,
    };
  }

  async getWinner(id: string): Promise<IWinnerDTO> {
    const response = await configuredAxios.get<IWinnerDTO>(
      `${this.BASE_URL}/${id}`,
    );
    return response.data;
  }

  async createWinner(winnerData: IWinnerDTO): Promise<IWinnerDTO> {
    const response = await configuredAxios.post<IWinnerDTO>(
      this.BASE_URL,
      winnerData,
    );
    return response.data;
  }

  async updateWinner(id: string, winnerData: IWinnerDTO): Promise<IWinnerDTO> {
    const response = await configuredAxios.put<IWinnerDTO>(
      `${this.BASE_URL}/${id}`,
      winnerData,
    );
    return response.data;
  }

  async deleteWinner(id: string): Promise<void> {
    await configuredAxios.delete(`${this.BASE_URL}/${id}`);
  }
}

export const winnersService = new WinnersService();
