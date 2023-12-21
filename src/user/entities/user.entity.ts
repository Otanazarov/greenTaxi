import { UserRole } from 'src/common/enum/user.role';
import { RootEntity } from 'src/common/root/root.-entity';
import { Taxy } from 'src/taxies/entities/taxy.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class User extends RootEntity {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ enum: UserRole, type: 'enum', default: UserRole.USER })
  role: UserRole;

  @Column({ default: false })
  refresh_token: string;

  @ManyToMany(()=>Taxy,(taxi)=>taxi.user,{cascade:true})
  @JoinTable()
    taxi:Taxy[]

}