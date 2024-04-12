export const enum EngineStatus {
  STARTED = 'started',
  STOPPED = 'stopped',
  DRIVE = 'drive',
  BROKEN = 'broken',
}

export interface IEngine {
  velocity?: number;
  distance?: number;
  success?: boolean;
  status?: EngineStatus;
}
