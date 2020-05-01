export interface MovieModel {
  uuid: number;
  imageSrc: string;
  title: string;
  detail: string;
  genre: {
    id: string;
    name: string;
  }
}
