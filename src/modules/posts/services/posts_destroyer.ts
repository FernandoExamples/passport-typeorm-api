import { AppDataSource } from '@database/datasources'
import { Repository } from 'typeorm'

export class PostsDestroyer {
  private readonly repository: Repository<Object>

  constructor() {
    this.repository = AppDataSource.getRepository(Object)
  }

  async destroy(id: any): Promise<Object> {
    return {}
  }

  async delete(id: any): Promise<Object> {
    return {}
  }
}
