import { AppDataSource } from '@database/datasources'
import { Repository } from 'typeorm'

export class PostsUpdater {
  private readonly repository: Repository<Object>

  constructor() {
    this.repository = AppDataSource.getRepository(Object)
  }

  async update(id: any, body: any): Promise<Object> {
    return {}
  }
}
