import { Location } from './location.model'

export class StarTopEmployee {
  constructor(
    public pk?: number,
    public username?: string,
    public first_name?: string,
    public last_name?: string,
    public level?: number,
    public avatar?: string,
    public num_stars?: number
  ) {}
}