import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarefa } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tarefa)
    private tarefaRepo: Repository<Tarefa>,
  ) {}

  async findAll() {
    return await this.tarefaRepo.find();
  }

  async create(tarefa: string) {
    const newTarefa = this.tarefaRepo.create({
      tarefa,
    });
    return await this.tarefaRepo.save(newTarefa);
  }
}
