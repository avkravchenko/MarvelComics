export interface Comic {
  id: number;
  thumbnail: {
    path: string;
    format: string;
  };
  title: string;
  description: string;
  textObjects: [];
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
  format: string;
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
  images: [];
  pageCount: number;
  prices: [];
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface ComicItem {
  resourceURI: string;
  name: string;
}

export interface DateItem {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ComicsData {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: ComicItem[];
  collections: ComicItem[];
  collectedIssues: ComicItem[];
  dates: DateItem[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicItem[];
  };
}
