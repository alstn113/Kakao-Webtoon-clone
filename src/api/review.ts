import { IReview, ICategory } from '@/shared/types';
import client from '@/utils/axios';

export const getReviews = async (): Promise<IReview[]> => {
  const { data } = await client.get(`/reviews`);
  return data;
};

export const getReviewById = async (id: string | string[] | undefined): Promise<IReview> => {
  const { data } = await client.get(`/reviews/${id}`);
  return data;
};

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await client.get(`/categories`);
  return data;
};

export const getCategoryById = async (id: string | string[] | undefined): Promise<ICategory> => {
  const { data } = await client.get(`/categories/${id}`);
  return data;
};
