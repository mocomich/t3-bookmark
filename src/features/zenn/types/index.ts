export type ZennArticleType = {
  id: number;
  postType: string;
  title: string;
  slug: string;
  published: boolean;
  commentsCount: number;
  likedCount: number;
  bodyLettersCount: number;
  articleType: string;
  emoji: string;
  isSuspendingPrivate: boolean;
  publishedAt: Date;
  bodyUpdatedAt: string | null;
  sourceRepoUpdatedAt: string | null;
  path: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatarSmallUrl: string;
  };
  publication: {
    id: number;
    name: string;
    avatarSmallUrl: string;
    displayName: string;
    avatarRegistered: boolean;
  } | null;
};
