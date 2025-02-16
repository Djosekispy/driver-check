import { IRepository, Records } from "./IRepositoryBase";
import * as SecureStore from 'expo-secure-store';


class SecureStoreRepository implements IRepository {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  public async getAll(): Promise<Records[]> {
    const records = await SecureStore.getItemAsync(this.storageKey);
    return records ? JSON.parse(records) : [];
  }

  private async saveAll(records: Records[]): Promise<void> {
    await SecureStore.setItemAsync(this.storageKey, JSON.stringify(records));
  }

  public async create(id: number, name: string, details: string): Promise<Records> {
    const records = await this.getAll();
    const existingRecord = records.find(record => record.id === id);

    if (existingRecord) {
      return this.update(id, { name, details });
    }
    const newRecord: Records = {
      id,
      name,
      date: new Date().toISOString(),
      details,
    };
    records.push(newRecord);
    await this.saveAll(records);
    return newRecord;
  }

  public async read(id: number): Promise<Records | null> {
    const records = await this.getAll();
    return records.find(record => record.id === id) || null;
  }

  public async update(id: number, updatedData: Partial<Records>): Promise<Records> {
    const records = await this.getAll();
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
    await this.saveAll(records);
    return updatedRecord;
  }

  public async delete(id: number): Promise<boolean> {
    const records = await this.getAll();
    const updatedRecords = records.filter(record => record.id !== id);
    if (records.length === updatedRecords.length) {
      return false;
    }
    await this.saveAll(updatedRecords);
    return true;
  }

  public async deleteAll(): Promise<boolean> {
    await this.saveAll([]);
    return true;
  }

}

const repository = new SecureStoreRepository('my_records');
const repositoryUser = new SecureStoreRepository('user');

export { repository, repositoryUser};