import { RootEntity } from 'src/common/root/root.-entity';
import { Taxy } from 'src/taxies/entities/taxy.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity()
export class ConnUserWithTaxi extends RootEntity {
  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  userPhoneNumber: string;

  @ManyToOne((createConnUserWithTaxiDto) => User)
  user: User;

  @ManyToOne((createConnUserWithTaxiDto) => Taxy)
  taxy: Taxy;

  @Column()
  price: string;
}
