import { AppDataSource } from '@database/datasources'
import { Repository } from 'typeorm'

export class PostsSaver {
  private readonly repository: Repository<Object>

  constructor() {
    this.repository = AppDataSource.getRepository(Object)
  }

  async store(body: any): Promise<Object> {
    return {}
  }
}
