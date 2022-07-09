import {
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  Unique,
  OneToMany,
} from 'typeorm';
import { Board } from 'src/boards/board.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  // eager:  true -> user 정보를 가져올 때 board 정보도 함께 가져옴
  boards: Board[];
}
