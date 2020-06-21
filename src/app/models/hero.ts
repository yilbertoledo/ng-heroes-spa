export class Hero {
  constructor(
    public name: string,
    public bio: string,
    public img: string,
    public firstAppearance: string,
    public publisher: string,
    public index?: number
  ) {}
}
