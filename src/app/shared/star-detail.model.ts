import { User } from '../shared/user.model';

export class StarDetail {
  pk: number;
  date;
  text: string;
  from_user: User;
  to_user: number;
  category: number;
  subcategory: number;
  keyword: {
    pk: number,
    name: string
  }
}
