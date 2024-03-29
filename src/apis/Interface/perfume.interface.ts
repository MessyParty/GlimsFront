
export type PerfumeData = {
  brandId: number;
};

export type Note = {
  engName: string;
  id: number;
  korName: string;
};

export type Photo = {
  order?: number;
  url: string;
};

export type Perfume = {
  brandId: string;

  brandName: string;
  brandNameKor: string;
  longevityRatings: number;
  notes: Note[];
  overallRatings: number;
  perfumeName: string;
  reviewCnt: number;
  sillageRatings: number;
  uuid: string;
  photos: Photo[];
};

export type ReviewPhoto = {
  photoUrl: string;
};

export type Perfume = {
  content?: PerfumeData[];
};
