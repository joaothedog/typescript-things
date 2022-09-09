// Singleton - GoF | Factory Method - GoF
export class DB {
  private static db: DB;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDB(host: string, user: string, password: string): DB {
    if (DB.db) return DB.db;
    DB.db = new DB(host, user, password);
    return DB.db;
  }
}

const db1 = DB.getDB('localhost', 'root', '123');
db1.connect();

const db2 = DB.getDB('localhost', 'root', '123');
db2.connect();
