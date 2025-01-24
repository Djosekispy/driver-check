interface Records {
    id: number; 
    name: string; 
    date: string; 
  }
  
  class LocalStorageRepository {
    private storageKey: string;
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
      this.initStorage();
    }
    
    private initStorage(): void {
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify([]));
      }
    }

    public getAll(): Records[] {
      const records = localStorage.getItem(this.storageKey);
      return records ? JSON.parse(records) : [];
    }

    public create(id : number, name: string): Records {
      const records = this.getAll();
      const newRecord: Records = {
        id,
        name,
        date: new Date().toISOString(),
      };
      records.push(newRecord);
      localStorage.setItem(this.storageKey, JSON.stringify(records));
      return newRecord;
    }

    public read(id: number): Records | null {
      const records = this.getAll();
      return records.find(record => record.id === id) || null;
    }

    public update(id: number, updatedData: Partial<Records>): Records {
      const records = this.getAll();
      const recordIndex = records.findIndex(record => record.id === id);
      if (recordIndex === -1) {
        throw new Error(`Registro com ID ${id} não encontrado.`);
      }
      const updatedRecord = {
        ...records[recordIndex],
        ...updatedData,
        date: new Date().toISOString(),
      };
      records[recordIndex] = updatedRecord;
      localStorage.setItem(this.storageKey, JSON.stringify(records));
      return updatedRecord;
    }

    public delete(id: number): boolean {
      const records = this.getAll();
      const updatedRecords = records.filter(record => record.id !== id);
      if (records.length === updatedRecords.length) {
       return false;
      }
      localStorage.setItem(this.storageKey, JSON.stringify(updatedRecords));
      return true;
    }

  }
  
  const repository = new LocalStorageRepository('my_records');
  const newRecord = repository.create(2,'John Doe');
  const readRecord = repository.read(newRecord.id);
  const updatedRecord = repository.update(newRecord.id, { name: 'Jane Doe' });
  const isDeleted = repository.delete(newRecord.id);