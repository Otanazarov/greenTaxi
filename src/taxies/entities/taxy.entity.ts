import { RootEntity } from 'src/common/root/root.-entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Taxy extends RootEntity {
  @Column()
  carname: string;

  @Column()
  taxiName: string;

  @Column()
  carNomer: string;

  @Column()
  taxiNomer: string;

  @ManyToMany(() => User, (user) => user.taxi)
  user: User[];
}
