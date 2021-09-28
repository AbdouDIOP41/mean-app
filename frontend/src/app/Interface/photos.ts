interface URLParams{
  src : string;
  taille : number;
  rgb : string
}

interface Photo {
  //albumId : number
  id: number;
  title: string;
  url: URLParams;
  thumbnailUrl : URLParams;
}

export interface Album {
  albumId : number;
  albumData: [array :Photo];
}
