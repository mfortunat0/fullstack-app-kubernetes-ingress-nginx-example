import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tarefa: string;
}
