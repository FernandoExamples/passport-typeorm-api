import { AppDataSource } from '@database/datasources'
import { Repository } from 'typeorm'

export class PostsFinder {
  private readonly repository: Repository<Object>

  constructor() {
    this.repository = AppDataSource.getRepository(Object)
  }

  async findOne(id: any): Promise<Object> {
    return {}
  }

  async findAll(): Promise<Object[]> {
    return []
  }
}
