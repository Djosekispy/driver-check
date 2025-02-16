interface Records {
    id: number;
    name: string;
    date: string;
    details: string;
  }
  
  interface IRepository {
    getAll(): Promise<Records[]>;
    create(id: number, name: string, details: string): Promise<Records>;
    read(id: number): Promise<Records | null>;
    update(id: number, updatedData: Partial<Records>): Promise<Records>;
    delete(id: number): Promise<boolean>;
    deleteAll():Promise<boolean>;
  }

  export { Records , IRepository }
  