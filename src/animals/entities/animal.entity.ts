
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  age: number;

  @Column({ default: true })
  star: boolean;

  @Column({ default: true })
  winner: boolean;
}
