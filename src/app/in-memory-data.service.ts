import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const cruders = [
      { id: 14, email: 'Celeritas' },
      { id: 15, email: 'Magneta' },
      { id: 16, email: 'RubberMan' },
      { id: 17, email: 'Dynama' },
      { id: 18, email: 'Dr IQ' },
      { id: 19, email: 'Magma' },
      { id: 20, email: 'Tornado' }
    ];
    return {cruders};
  }
}
