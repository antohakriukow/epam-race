import { configuredAxios } from '@/api/api';
import { EngineStatus, IEngine } from '@/shared/types/engine.types';

class EngineService {
  private BASE_URL = '/engine';

  async setStatus(id: string, status: EngineStatus): Promise<IEngine> {
    const params = { id, status };
    const response = await configuredAxios.patch<IEngine>(
      `${this.BASE_URL}`,
      null,
      { params },
    );
    return response.data;
  }
}

export const engineService = new EngineService();
